const num = prompt('Insira um número')

// 1. Utilizando ifs aninhados

if (num % 2 === 0) {
  if(num %3 === 0) {
    alert(`${num} é divisível por 2 ou 3`)
  }
} if (num % 3 === 0){
  alert(`${num} é divisível por 2 ou 3`)
} else {
  alert(`${num} não é divisível por 2 ou 3`)
}



// 2. Utilizando um operador lógico para unir duas operações relacionais

// if (num % 2 === 0 || num % 3 === 0) {
//   alert(`O número ${num} é divisível por 2 ou 3`)
// } else {
//   alert(`${num} não é divisível por 2 ou 3`)
// }