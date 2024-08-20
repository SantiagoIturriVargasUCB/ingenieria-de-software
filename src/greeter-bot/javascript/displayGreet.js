import { languageSpanish } from './language';

const alertButton = document.getElementById('greet-button');

alertButton.addEventListener('click', () => {
    let greeting = 'Hello';
    if (languageSpanish.checked) greeting = 'Hola';
    alert(greeting);
});
