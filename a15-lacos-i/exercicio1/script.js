let quant;
let conta = 0;

while (quant !== 'N') {
  quant = prompt('Deseja mais uma coxinha? Digite S para sim e N para não').toUpperCase()
  conta += 1
  console.log(conta)
}

alert(`Você comeu ${conta} coxinhas. O valor total da conta é R$ ${conta * 2.50}`)