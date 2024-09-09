export const fizzbuzz = (numero) => {
    if (numero % 3 === 0 && numero % 5 === 0) return 'FizzBuzz';
    else if (numero % 3 === 0) return 'Fizz';
    else if (numero % 5 === 0) return 'Fizz';
    else return numero;
}

export const generarSecuencia = (limite) => {
    const res = [];
    for (let i = 1; i <= limite; i++) {
        if (i % 3 === 0 && i % 5 === 0) res.push('FizzBuzz');
        else if (i % 3 === 0) res.push('Fizz');
        else if (i % 5 === 0) res.push('Buzz')
        else res.push(i);
    }
    return res;
}
