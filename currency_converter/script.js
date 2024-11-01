const output = document.getElementById('output');
const button = document.getElementById('convert');
const selectOne = document.getElementById('currency_one');
const selectTwo = document.getElementById('currency_two');
const amountInput = document.getElementById('amount');
let currencies = [];

async function populateCurrencySelects() {
  try {
    const response = await fetch('./data.json');
    const data = await response.json();
    currencies = data.currencies;

    const fragment = document.createDocumentFragment();

    currencies.forEach(currency => {
      const option = document.createElement('option');
      option.value = currency.code;
      option.textContent = `${currency.code} (${currency.name})`;
      fragment.appendChild(option);
    });

    selectOne.appendChild(fragment.cloneNode(true));
    selectTwo.appendChild(fragment.cloneNode(true));
  } catch (error) {
    console.error('Error loading the currency data:', error);
  }
}

populateCurrencySelects();

function convertCurrency() {
  const fromCurrency = selectOne.value;
  const toCurrency = selectTwo.value;
  const amount = parseFloat(amountInput.value);

  if (!fromCurrency || !toCurrency || isNaN(amount)) {
    output.textContent = 'Please fill out all fields correctly.';
    return;
  }

  const fromRate = currencies.find(c => c.code === fromCurrency).rateToUSD;
  const toRate = currencies.find(c => c.code === toCurrency).rateToUSD;


  const amountInUSD = amount * fromRate;


  const convertedAmount = amountInUSD / toRate;

  output.textContent = `${amount} ${fromCurrency} = ${convertedAmount.toFixed(2)} ${toCurrency}`;
}


button.addEventListener('click', convertCurrency);
