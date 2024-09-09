import { generarSecuencia } from "./fizzbuzz";

document.getElementById('generate').addEventListener('click', () => {
    const limite = document.getElementById('limite').value;
    const resultDiv = document.getElementById('result');

    if (limite && limite > 0) {
        const sequence = generarSecuencia(limite);
        resultDiv.innerHTML = sequence.join(', ');
    } else resultDiv.innerHTML = 'Please enter a valid number';
});