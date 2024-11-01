document.getElementById("the_form").addEventListener("submit", function(event){
  event.preventDefault();
  calculate();
});

function calculate(){

  const reps = document.getElementById("rep").value;
  const weight = document.getElementById("weight").value;
  let ORM;
  ORM = weight *(1+reps/30)
  document.getElementById("result").textContent = `Your One Rep Max is: ${ORM.toFixed(2)} kg`
}