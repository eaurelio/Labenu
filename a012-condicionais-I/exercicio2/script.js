let idade = window.prompt('Informe sua idade')
let terminouEnsinoMedio = window.prompt(`Terminou o ensino médio?`)
let isCursandoOutraFaculdade = (`Está cursando alguma faculdade?`)

if(idade >= 18){
  console.log(`É maior de 18`)
}else{
	console.log(`Não é maior de 18`)
}

if(terminouEnsinoMedio) {
  console.log(`Ternimou o ensino médio`)
} else {
  console.log(`Não ternimou o ensino médio`)
}

if (!isCursandoOutraFaculdade) {
  console.log(`Não está cursando`)
} else {
  console.log(`Está cursando`)
}