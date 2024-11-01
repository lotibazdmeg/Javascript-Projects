const api = "https://api.dictionaryapi.dev/api/v2/entries/en/";

const wordElement = document.getElementById("word");
const defElement = document.getElementById("definition");
const typeElement = document.getElementById("type");

const fetchWordDefinitions = async inputWord => {
  console.log(`Making request for definitions of ${inputWord}...`);
  const response = await fetch(api + inputWord);
  const json = await response.json();
  
  return json[0].meanings.flatMap(m => m.definitions)[0].definition;
};

const fetchWord = async inputWord => {
  console.log(`Making request for the word ${inputWord}...`);
  const response = await fetch(api + inputWord);
  const json = await response.json();
  
  return json[0].word;
};

const fetchType = async inputWord => {
  console.log(`Making request for the type of ${inputWord}...`);
  const response = await fetch(api + inputWord);
  const json = await response.json();

 
  return json[0].meanings[0].partOfSpeech;
}

const searchWord = () => {
  const input = document.getElementById("words").value;
  
  if (input == null || input.trim() === '') {
    return alert('Error: You must enter a word to fetch');
  }

  wordElement.innerHTML = '';
  defElement.innerHTML = '';
  typeElement.innerHTML = '';

  fetchWord(input)
    .then(fetchedWord => {
      wordElement.innerHTML = `<h1>${fetchedWord}</h1>`;
      return fetchWordDefinitions(input); 
    })
    .then(definition => {
      defElement.innerHTML = `<p>${definition}</p>`;
      return fetchType(input); 
    })
    .then(typeWord => {
      typeElement.innerHTML = `<i>${typeWord}</i>`;
    })
    .catch(error => {
      wordElement.innerHTML = `<p>Error: Could not retrieve anything for ${input}.</p>`;
      defElement.innerHTML = '';
      typeElement.innerHTML = '';
      console.error(error);
    });
};
