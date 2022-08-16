let nacionalidade = window.prompt(`Informe sua nacionalidade`).toLowerCase()

if(nacionalidade === 'brasileira') {
  console.log(`Brasileiro!!!`)
} else if (nacionalidade === 'argentina') {
  console.log(`Hermano!!!`)
} else if (nacionalidade === 'uruguaia') {
  console.log(`Uruguaio!!!`)
} else if (nacionalidade === 'chilena') {
  console.log(`Chileno!!!`)
} else if (nacionalidade === 'colombiana') {
  console.log(`Colombiano!!!`)
} else {
  console.log(`Nacionalidade não encontrada :|`)
}
