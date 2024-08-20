import { sumar, multiplicar } from "./functions";

const firstSum = document.querySelector("#primer-numero");
const secondSum = document.querySelector("#segundo-numero");
const firstMult = document.querySelector("#primer-numero-mult");
const secondMult = document.querySelector("#segundo-numero-mult")
const formSuma = document.querySelector("#sumar-form");
const formMultiplicar = document.querySelector("#multiplicar-form");
const divSuma = document.querySelector("#resultado-suma-div");
const divMultiplicar = document.querySelector("#resultado-multiplicacion-div")

formSuma.addEventListener("submit", (event) => {
  event.preventDefault();

  const firstNumberSum = Number.parseInt(firstSum.value);
  const secondNumberSum = Number.parseInt(secondSum.value);

  divSuma.innerHTML = "<p>" + sumar(firstNumberSum, secondNumberSum) + "</p>";
});

formMultiplicar.addEventListener("submit", (event) => {
  event.preventDefault();

  const firstNumberFor = Number.parseInt(firstMult.value);
  const secondNumberFor = Number.parseInt(secondMult.value);

  divMultiplicar.innerHTML = "<p>" + multiplicar(firstNumberFor, secondNumberFor) + "</p>";
});



