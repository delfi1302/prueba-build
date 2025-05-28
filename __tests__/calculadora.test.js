const {suma,resta,multiplicacion,divicion} = require('../scr/calculadora');
describe('funnciones de la calculadora', () =>{
    test('suma de 2+2=4', () =>{
        expect (suma(2,2)).toBe(4);
    })
    test('resta de 2-2=0', () =>{
        expect (resta(2,2)).toBe(0);
    })
    test('multiolicacion de 2*2=4', () =>{
        expect (multiplicacion(2,2)).toBe(4);
    })
    test('divicion de 2/2=1', () =>{
        expect (divicion(2,2)).toBe(1);
    })
})