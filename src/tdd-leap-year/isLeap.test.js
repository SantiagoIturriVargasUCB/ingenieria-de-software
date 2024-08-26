import { isLeapYear } from './isLeap';


test('Verifica si un año es bisiesto', () => {
    expect(isLeapYear(2020)).toBe(true);  // 2020 es bisiesto
    expect(isLeapYear(2021)).toBe(false); // 2021 no es bisiesto
    expect(isLeapYear(1900)).toBe(false); // 1900 no es bisiesto
    expect(isLeapYear(2000)).toBe(true);  // 2000 es bisiesto
    expect(isLeapYear(1600)).toBe(true);  // 1600 es bisiesto
});
