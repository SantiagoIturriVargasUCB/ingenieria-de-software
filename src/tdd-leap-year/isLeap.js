const isLeapYear = year => {
    if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) 
        return true;
    else 
        return false;
}

const cheepYear = () => {
    const year = document.getElementById('yearInput').value;
    if (year === '') {
        alert('Por favor, ingresa un año.');
        return;
    }

    const leapYear = isLeapYear(parseInt(year));
    if (leapYear) 
        alert(`El año ${year} es bisiesto.`);
    else
        alert(`El año ${year} no es bisiesto.`);
}