// grabing dom objects
const weightInput = document.querySelector(".weight");
const heightInput = document.querySelector(".height");
const calculate = document.querySelector(".btn");
const h2Container = document.querySelector("#h2");
const h3Container = document.querySelector("#h3");

// add click event to calculate button
calculate.addEventListener("click", calculateBMI);

// creating function
function calculateBMI() {
  const weight = weightInput.value; // grab the value from weightInput
  const height = heightInput.value; // grab the value from heightInput

  const bmi = weight / (height * height); // calculating bmi
  const result = bmi.toFixed(2); // grab bmi value in result making it to 2 decimal

  // display result according to conditions in h2 and h3 containers that is div
  if (result < 18.6) {
    h2Container.innerHTML = `<h2 class = 'text-danger'>${result}</h2>`;
    h3Container.innerHTML = `<h3 class = 'text-danger'>Under Weight!🚫</h3>`;
  } else if (result >= 18.6 && result < 24.9) {
    h2Container.innerHTML = `<h2 class = 'text-success'>${result}</h2>`;
    h3Container.innerHTML = `<h3 class = 'text-success'>Normal Weight!✔️</h3>`;
  } else {
    h2Container.innerHTML = `<h2 class = 'text-warning'>${result}</h2>`;
    h3Container.innerHTML = `<h3 class = 'text-warning'>Over Weight!🥴</h3>`;
  }
}
