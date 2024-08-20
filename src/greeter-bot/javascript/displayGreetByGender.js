import { languageSpanish } from './language';

const greetButtonByGender = document.getElementById('greet-button-by-gender');
const nameInput = document.getElementById('name-input');
const genderMale = document.getElementById('gender-male');
const genderFemale = document.getElementById('gender-female');

greetButtonByGender.addEventListener('click', () => {
    const name = nameInput.value.trim();
    let genderGreeting = '';

    if (genderMale.checked) {
        genderGreeting = `Hello, Mr. ${name}`;
        if (languageSpanish.checked) genderGreeting = `Hola, Sr. ${name}`;
    } else if (genderFemale.checked) {
        genderGreeting = `Hello, Ms. ${name}`;
        if (languageSpanish.checked) genderGreeting = `Hola, Sra. ${name}`;
    } else {
        alert('Please, select a gender.');
        return;
    }

    if (name) alert(genderGreeting);
    else alert('Please introduce your name.');
});


