/**
 * @jest-environment jsdom
 */
import { fizzbuzz, generarSecuencia } from './fizzbuzz';

test('debe retornar "1" cuando se pasa 1', () => {
    expect(fizzbuzz(1)).toBe(1);
});

test('debe retornar fizz para 3', () => {
    expect(fizzbuzz(3)).toBe('Fizz');
});

test('debe retornar fizz para multiplos de 3', () => {
    expect(fizzbuzz(3)).toBe('Fizz');
    expect(fizzbuzz(6)).toBe('Fizz');
    expect(fizzbuzz(9)).toBe('Fizz');
});

test('debe retornar fizz para el 5', () => {
    expect(fizzbuzz(5)).toBe('Fizz');
});

test('debe retornar fizz mutiplos de 5', () => {
    expect(fizzbuzz(5)).toBe('Fizz');
    expect(fizzbuzz(10)).toBe('Fizz');
    expect(fizzbuzz(25)).toBe('Fizz');
});

test('debe retornar fizzbuzz para el 15', () => {
    expect(fizzbuzz(15)).toBe('FizzBuzz');
});

test('debe retornar fizbuzz para mutiplos de 3 y de 5', () => {
    expect(fizzbuzz(15)).toBe('FizzBuzz');
    expect(fizzbuzz(30)).toBe('FizzBuzz');
    expect(fizzbuzz(60)).toBe('FizzBuzz');
});


test('debe retornar una secuencia de números con "Fizz", "Buzz" y "FizzBuzz"', () => {
    const limite = 15;
    const esperado = [1, 2, 'Fizz', 4, 'Buzz', 'Fizz', 7, 8, 'Fizz', 'Buzz', 11, 'Fizz', 13, 14, 'FizzBuzz'];
    expect(generarSecuencia(limite)).toEqual(esperado);
});
