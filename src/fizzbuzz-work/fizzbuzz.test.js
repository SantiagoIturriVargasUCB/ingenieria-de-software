import { fizzbuzz } from "./fizzbuzz";

test('debe retornar "1" cuando se pasa 1', () => {
    expect(fizzbuzz(1)).toBe(1);
});

test('debe retornar fizz para 3', () => { 
    expect(fizzbuzz(3)).toBe('Fizz');
});