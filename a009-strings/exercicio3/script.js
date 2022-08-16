//Crie a const para a frase aqui
const phrase = 'Jorge tem uma casa verde e com portão azul, com os dizeres: "BOAS VINDAS, mas não deixe o gato sair"'

let newPhrase = phrase.replace('verde','rosa').replace('azul','laranja').replace('mas não deixe o gato sair','MAS NÃO DEIXE O GATO SAIR')

console.log(`Na frase ${newPhrase} tem a cor verde? ${newPhrase.includes('verde')}. E a cor laranja? ${newPhrase.includes('laranja')}`)

