const userName = prompt('Qual seu nome?')
const firstFavFood = prompt('Qual sua comida favorita??')
const secondFavFood = prompt('Qual sua  2ª comida favorita??')
const thirdFavFood = prompt('Qual sua  3ª comida favorita??')

const output = `Estas são as comidas favoritas de ${userName}
- ${firstFavFood}
- ${secondFavFood}
- ${thirdFavFood}`

console.log(output)
window.alert(output)
