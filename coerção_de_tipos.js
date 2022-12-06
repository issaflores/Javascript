// > COERÇÃO (CONVERSÃO) DE TIPOS

// - 1. Coerçõa Explicita (Manual)
const numero = 10;

console.log(numero, typeof numero)

const numeroEmFormatoDeString =  String (numero)
console.log(numeroEmFormatoDeString, typeof numeroEmFormatoDeString)

console.log(Number('1999'))
console.log(parseFloat('2468.1012'))
console.log(parseInt('2468.1012'))
console.log(Boolean(1))
console.clear()

// - 2. Coerção Implicita (Automática)

console.log('10' + 1)
console.log('10' - 1)
console.log(10 * '3')
console.log(10 - 'asasa')

console.clear()

//Outros exemplos  

// Qual será a saída desse código?
let n = 1 + "1"; //'11'

n = n - 1;

console.log(n);

// // Qual será a saída desse código?
 console.log( 2 + 3 + 4 + "5");

 // // Qual será a saída desse código?
 console.log( "5" + 2 + 3 + 4);

// // Qual será a saída desse código ?
 console.log("10" - "4" - "3" - 2 + "5");
