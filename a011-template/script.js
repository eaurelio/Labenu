// Criando um objeto
const estudante = {
  nome: 'Edson Aurélio',
  sobrenome: 'de Oliveira Araújo',
  numeroMatricula: 456789,
  notasSemestre: [7.5, 9.3, 8.2]
}
// Adicionando propriedades
estudante.modulo = 'Objetos - JS'

console.log(estudante.nome)
console.log(estudante.notasSemestre[1])
console.log(estudante.modulo)

const segundoEstudante = {...estudante}
segundoEstudante.nome = 'Astrodev'
segundoEstudante.sobrenome = '10'
segundoEstudante.notasSemestre.push(9)
segundoEstudante.modulo = 'Funções - JS'

console.log(segundoEstudante)

const estudantesLabenu = []
estudantesLabenu.push(estudante, segundoEstudante)

console.log(estudantesLabenu)

// Exercício em grupo

// Criando objeto
const carrinho = {
  nome: 'Edson',
  formaPagto: 'PIX',
  endereco: {
    rua: 'Internacional',
    numero: 30,
    cidade: 'São Paulo',
    uf: 'SP'
  }
}
// Criando um array de compras
carrinho.compras = [
  {prod: 'Pão', preco: 6.79, quant: 2},
  {prod: 'PCT Salsichas', preco: 10.99, quant: 1},
  {prod: 'Molho de tomate', preco: 2.99, quant: 2},
  {prod: 'Batata palha', preco: 6.99, quant: 1},
  {prod: 'Vinho Merlot', preco: 79.99, quant: 1}
]

let totalItens = 0
let totalValor = 0
for (k of carrinho.compras) {totalItens += k.quant}
for (k of carrinho.compras) {totalValor += k.preco}

console.log(`Quantidade de itens no carrinho: ${carrinho.compras.length}`)
console.log(`Total de itens: ${totalItens}`)
console.log(`Valor total da compra: R$ ${totalValor}`)

// Criando carrinho presente
const carrinhoPresente = {...carrinho}
// Alterando dados do carrinho presente
carrinhoPresente.nome = 'Valquíria'
carrinhoPresente.formaPagto = 'Cartão Presente'

console.log(carrinhoPresente)


