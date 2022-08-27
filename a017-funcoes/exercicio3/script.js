const operacoes = (x, y) => {
  if (Number(x) != x || Number(y) != y) {
    return `É necessário informar números!`
  } else {
  return `${x} + ${y} = ${x + y}
${x} - ${y} = ${x - y}
${x} x ${y} = ${x * y}
${x} / ${y} = ${x / y}`
}
}

let x = prompt('Insira o primeiro número')
let y = prompt('Insira o segundo número')

alert(operacoes(x, y))
