import { languageSpanish } from "./language";

const greetButton = document.getElementById('greet-button-by-name');
const nameInput = document.getElementById('name-input');

greetButton.addEventListener('click', () => {
    const name = nameInput.value.trim();  
    if (name) {
        let greeting = `Hello, ${name}`;
        if (languageSpanish.checked) greeting = `Hola, ${name}`;
        alert(greeting);
    }
});

