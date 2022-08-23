const operacoes = (x, y) => {
  return `${x} + ${y} = ${x + y}
${x} - ${y} = ${x - y}
${x} x ${y} = ${x * y}
${x} / ${y} = ${x / y}`
}

let x = prompt('Insira o primeiro número')
let y = prompt('Insira o segundo número')

alert(operacoes(x, y))