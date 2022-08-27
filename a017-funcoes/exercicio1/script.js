// A
// function imprimeNome(nome) {
//   return `Olá, ${nome}`
// }

// console.log(imprimeNome('Edson'))

// B
// function tabuadaDoSeis() {
//   for (let i = 1; i <= 10; i += 1) {
//     console.log(`6 X ${i} = ${6 * i}`)
//   }
// }

// tabuadaDoSeis()

// C

const imprimeNome = nome => `Olá, ${nome}`

console.log(imprimeNome('Edson'))

const tabuadaDoSeis = () => {
  for (let i = 1; i <= 10; i += 1) {
    console.log(`6 X ${i} = ${6 * i}`)
  }
}

tabuadaDoSeis()