const soma = (x, y) => x + y;
console.log(soma(5, 12))

const maiorIgual = (x, y) => x >= y;
console.log(maiorIgual(5, 7))

const parImpar = x => x % 2 === 0 ? 'Par' : 'Impar';
console.log(parImpar(1))

const contaImprime = string => `${string.toUpperCase()}: ${string.length} caracteres`;
console.log(contaImprime('Edson'))