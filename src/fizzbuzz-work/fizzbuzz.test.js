import { fizzbuzz } from "./fizzbuzz";

test('debe retornar "1" cuando se pasa 1', () => {
    expect(fizzbuzz(1)).toBe(1);
});