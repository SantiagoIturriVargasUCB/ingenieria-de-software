export const fizzbuzz = (numero) => {
    if( numero < 3) return numero
    else if( numero === 3 ) return 'Fizz'
    else if( numero % 3 === 0 ) return 'Fizz'
    else if( numero === 5 ) return 'Fizz'
    else if( numero % 5 === 0) return 'Fizz'
}