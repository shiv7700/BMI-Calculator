const form = document.querySelector("form");
const measure = document.querySelector("#measure");

console.log(form);

form.addEventListener("submit", function (e) {
  e.preventDefault();
  const height = parseInt(document.querySelector("#height").value);
  const weight = parseInt(document.querySelector("#weight").value);
  const results = document.querySelector("#results");

  if (height === "" || height < 0 || isNaN(height)) {
    results.innerHTML = `please enter a valid height`;
  } else if (weight === "" || weight < 0 || isNaN(weight)) {
    results.innerHTML = `please enter a valid weight`;
  } else {
    const bmi = (weight / ((height * height) / 10000)).toFixed(2);
    results.innerHTML = `<span>${bmi}</span>`;
    if (bmi > 24.9) {
      measure.innerHTML = `Overweight`;
    } else if (bmi < 18.6) {
      measure.innerHTML = `Under Weight`;
    } else {
      measure.innerHTML = `Normal Range`;
    }
  }
});
