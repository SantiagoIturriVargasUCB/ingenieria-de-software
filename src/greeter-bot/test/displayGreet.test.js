import './displayGreet';
import { languageSpanish } from './language';

describe('displayGreet.js', () => {
  beforeAll(() => {
    document.body.innerHTML = `
      <input type="radio" id="language-english" name="language" value="english" checked>
      <input type="radio" id="language-spanish" name="language" value="spanish">
      <button id="greet-button"></button>
    `;
  });

  test('should alert "Hello" when English is selected', () => {
    window.alert = jest.fn();
    document.getElementById('greet-button').click();
    expect(window.alert).toHaveBeenCalledWith('Hello');
  });

  test('should alert "Hola" when Spanish is selected', () => {
    languageSpanish.checked = true;
    window.alert = jest.fn();
    document.getElementById('greet-button').click();
    expect(window.alert).toHaveBeenCalledWith('Hola');
  });
});
