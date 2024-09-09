import { isLeapYear } from "./isLeap";

document.getElementById("verifyButton").addEventListener("click", () => {
    const year = document.getElementById('yearInput').value;
    const leapYear = isLeapYear(parseInt(year));
    if (leapYear) alert(`El año ${year} es bisiesto.`);
    else alert(`El año ${year} no es bisiesto.`);
});