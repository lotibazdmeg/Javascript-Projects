document.getElementById("calorie-form").addEventListener("submit", function(event){
  event.preventDefault();
  calculate();
});

function calculate() {
  const age = document.getElementById("age").value;
  const gender = document.getElementById("gender").value;
  const height = document.getElementById("height").value;
  const weight = document.getElementById("weight").value;
  const activity = document.getElementById("activity").value;
  const error = document.getElementById("error-message");

  if (age < 15 || age > 85) {
    error.style.display = "block";
    return;
  } else {
    error.style.display = "none";
  }

  let bmr;
  if (gender === "male") {
    bmr = 88.362 + (13.397 * weight) + (4.799 * height) - (5.677 * age);
  } else if (gender === "female") {
    bmr = 447.593 + (9.247 * weight) + (3.098 * height) - (4.330 * age);
  }

  let calorieNeeds;
  switch (activity) {
    case "sedentary":
      calorieNeeds = bmr * 1.2;
      break;
    case "light":
      calorieNeeds = bmr * 1.375;
      break;
    case "active":
      calorieNeeds = bmr * 1.55;
      break;
    case "very_active":
      calorieNeeds = bmr * 1.725;
      break;
  }

  document.getElementById("result").textContent = `Your daily calorie needs are: ${calorieNeeds.toFixed(2)} kcal`;
}


