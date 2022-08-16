// let arrS = ['Janeiro', 'Fevereiro', 'Março']
// let arrN = [13, 05, 1992]
// let arrR = ['string', 21, true]
// let arr = [1]
// let emptyArr = []

// console.log(arrS[3])


// console.log(arrS[0].length)

// let arrS2 = arrS.slice()
// arrS2.push('Abril')

// console.log(arrS2)

// console.log(arrN.sort((a, b) => a - b))

// // https://www.w3schools.com/jsref/jsref_sort.asp

// // array.sort((a, b) => a - b)

// Array original
let arr = [50, 15, 21, -3 , 2, 22 , 7, 35, 47, -11, -20]
console.log(`Array original: ${arr}`)
// Array crescente
console.log(`Array ordenado crescente: ${arr.sort((a, b) => a - b)}`)
// Array Decrescente
console.log(`Array ordenado decresente: ${arr.sort((a, b) => b - a)}`)

// Removendo o último item
arr.pop()
arr.push(6)
console.log(`Removendo o último item e colocando o 6: ${arr}`)

// Removendo o 2º item
arr.splice(2, 1)
console.log(`Removendo o 2º item: ${arr}`)