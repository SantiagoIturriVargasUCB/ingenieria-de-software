import { fizzbuzz } from "./fizzbuzz";

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