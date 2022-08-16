const minhaString = "Eu não sou supersticioso, mas sou um pouco ________.      ";

// A
let newString = minhaString.trim()
// B
console.log(`Antes de remover o excesso de espaços: ${minhaString.length}`)
console.log(`Após de remover o excesso de espaços: ${newString.length}`)
// C
newString = minhaString.replace('________', 'sticioso')
console.log(newString)