// //CODIGO AQUI
// console.log('---------------------------')
// console.log('Dizia eu que a aritmética...')
// console.log('---------------------------')

console.log(`
----------------------------
Dizia eu que a aritmética...
----------------------------`)

let saldo = 15;
console.log(`Meu Saldo é: ${saldo}`)
saldo += 22.40
console.log(`Recebi 22,40. Agora tenho: ${saldo}`)
saldo -= 12.34;
console.log(`Gastei 12.34. Agora tenho: ${saldo}`)
saldo /= 3;
console.log(`Dividi por 3. Agora tenho: ${saldo.toFixed(2)}`)
saldo *= 3.42;
console.log(`Apliquei na bolsa, rendeu 3,42 vezes. Agora tenho: ${saldo.toFixed(2)}`)
saldo %= 3;
console.log(`Dividi para meus 3 irmãos. Agora me restou: ${saldo.toFixed(2)}`)

console.log(`
-------------------------
Precedência aritmética...
-------------------------`)

console.log(`2 x 2 + 2 = ${2*2 + 2}`)
console.log(`2 x (2 + 2) = ${2 * (2 + 2)}`)

console.log(`
-------------------------
Igual e diferente...
-------------------------`)
console.log(`5 === 5? ${5 === 5}`)
console.log(`5 !== 5? ${5 !== 5}`)
console.log(`5 === '5'? ${5 === '5'}`)
console.log(`'5' === 'cinco'? ${'5' === 'cinco'}`)
console.log(`typeof 5 === typeof '20'? ${typeof 5 === typeof '20'}`)
console.log(`typeOf '5' === typeOf 'cinco'? ${typeof '5' === typeof 'cinco'}`)
