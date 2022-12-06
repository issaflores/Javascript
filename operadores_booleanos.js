// > OPERADORES BOOLEANOS

// Igualdade:        == (ou ===)
// Desigualdade:    != (ou !==)
// Maior que:       >
// Maior ou igual:  >=
// Menor que:       <
// Menor ou igual:  <=

const numero = 10;

console.log(numero == 10)
console.log(numero > 10)

console.log(numero == 10)
console.log(numero === '10')

console.clear()

console.log(10 != 10)
console.log(10 != '10')
console.log(10 !== '10')

  
// - Conjunções Lógicas

// AND => &&

let idade =26;
let tenhoCNH = true;

const possoDirigir = idade >= 18 && tenhoCNH === true

console.log('possoDirigir?', possoDirigir)


console.clear()

// OR => ||

idade = 40
const votoFacultativo = idade < 18 || idade >= 70


// NOT => !

const estouGostandoDoCurso = false;

console.log(!estouGostandoDoCurso)

