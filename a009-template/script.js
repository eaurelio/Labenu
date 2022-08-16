// const nome = prompt("Qual é o seu nome?")
// const cor = prompt("Qual é a sua cor favorita??")

// // Usando concatenação
// console.log('A cor favorita de ' + nome + ' é ' + cor)

// const mensagem1 = `A cor favorita de ${nome} é ${cor}`
// // Usando template string
// console.log(mensagem1)

// const citacao = prompt('Qual sua citação favorita?')

// const mensagem2 = `${mensagem1} e sua citação favorita é "${citacao}"`

// console.log(mensagem2)

// console.log(`Nome: ${nome}
// Cor: ${cor}
// Citação: "${citacao}"`)


// // Manipulando a String
// console.log(`O nome ${nome.toUpperCase()} possui ${nome.length} caracteres.
// Há a letra n? ${nome.includes('n')}`)

// Para guardar na cabeça

const userName = prompt('Inform o nome do usuário:')
const userMail = prompt('Inform o e-mail do usuário:')

const message = `O e-mail '${userMail}' foi cadastrado com sucesso! Boas vindas, ${userName}`

console.log(message)
window.alert(message)

const message2 = `O nome do usuário ${userName} contém ${userName.length} caracteres`
console.log(message2)

const mess = userName.replaceAll('on', 'u')
console.log(mess)

const checkMail = userMail.includes('@')
console.log(checkMail)