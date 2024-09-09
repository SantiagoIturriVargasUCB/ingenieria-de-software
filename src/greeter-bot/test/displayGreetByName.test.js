// import './displayGreetByName';
import { languageSpanish } from './language';

describe('displayGreetByName.js', () => {
  beforeAll(() => {
    document.body.innerHTML = `
      <input type="radio" id="language-english" name="language" value="english" checked>
      <input type="radio" id="language-spanish" name="language" value="spanish">
      <input type="text" id="name-input" value="John">
      <button id="greet-button-by-name"></button>
    `;
  });

  test('should alert "Hello, John!" when English is selected', () => {
    window.alert = jest.fn();
    document.getElementById('greet-button-by-name').click();
    expect(window.alert).toHaveBeenCalledWith('Hello, John!');
  });

  test('should alert "Hola, John!" when Spanish is selected', () => {
    languageSpanish.checked = true;
    window.alert = jest.fn();
    document.getElementById('greet-button-by-name').click();
    expect(window.alert).toHaveBeenCalledWith('Hola, John');
  });
});
