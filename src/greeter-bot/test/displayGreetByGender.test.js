import './displayGreetByGender';
import { languageSpanish } from './language';

describe('displayGreetByGender.js', () => {
  beforeAll(() => {
    document.body.innerHTML = `
      <input type="radio" id="language-english" name="language" value="english" checked>
      <input type="radio" id="language-spanish" name="language" value="spanish">
      <input type="radio" id="gender-male" name="gender" value="male">
      <input type="radio" id="gender-female" name="gender" value="female">
      <button id="greet-button-by-gender"></button>
    `;
  });

  test('should alert "Hello Sir!" when Male and English are selected', () => {
    window.alert = jest.fn();
    document.getElementById('gender-male').checked = true;
    document.getElementById('greet-button-by-gender').click();
    expect(window.alert).toHaveBeenCalledWith('Hello Sir!');
  });

  test('should alert "Hola Señor!" when Male and Spanish are selected', () => {
    languageSpanish.checked = true;
    window.alert = jest.fn();
    document.getElementById('gender-male').click();
    expect(window.alert).toHaveBeenCalledWith('Hola Señor!');
  });

  test('should alert "Hello Ma\'am!" when Female and English are selected', () => {
    window.alert = jest.fn();
    document.getElementById('gender-female').checked = true;
    document.getElementById('greet-button-by-gender').click();
    expect(window.alert).toHaveBeenCalledWith("Hello Ma'am!");
  });

  test('should alert "Hola Señora!" when Female and Spanish are selected', () => {
    languageSpanish.checked = true;
    window.alert = jest.fn();
    document.getElementById('gender-female').checked = true;
    document.getElementById('greet-button-by-gender').click();
    expect(window.alert).toHaveBeenCalledWith('Hola Señora!');
  });
});
