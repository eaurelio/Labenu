// ATENÇÃO!!!
//    -> NÃO COMENTE NENHUMA DAS FUNÇÕES DECLARADAS!!! 
//    -> NÃO MODIFIQUE OS PARÂMETROS DAS FUNÇÕES!!! ()


// EXERCÍCIO 01
function retornaTamanhoArray(array) {
   return array.length
}

// EXERCÍCIO 02
function retornaArrayInvertido(array) {
  return array.reverse()
}

// EXERCÍCIO 03
function retornaArrayOrdenado(array) {
  return array.sort((x, y) => x -y)
}

// EXERCÍCIO 04
function retornaNumerosPares(array) {
  let arr = [];
  array.map(function (el, i, arry) {
    if (el % 2 === 0) {
      arr.push(el)
    }
  })
  return arr
}


// EXERCÍCIO 05
function retornaNumerosParesElevadosADois(array) {
  let arr = [];
  array.map(function (el) {
    if (el % 2 === 0) {
      arr.push(el ** 2)
    }
  })
  return arr
}

// EXERCÍCIO 06
function retornaMaiorNumero(array) {
  let init = 0
  array.map(function (el) {
    if (el > init) {init = el}
  })
  return init
}

// EXERCÍCIO 07
function retornaObjetoEntreDoisNumeros(num1, num2) {
  let obj ={}
  let major = 0;
  let minor = 0;
  if (num1 > num2) {major = num1; minor = num2} else {major = num2; minor = num1}
  obj.maiorNumero = major;
  major % minor === 0 ? obj.maiorDivisivelPorMenor = true : obj.maiorDivisivelPorMenor = false
  obj.diferenca = Math.abs(num1 - num2)

  return obj
}

// EXERCÍCIO 08
function retornaNPrimeirosPares(n) {
   let arr = []
   for (let i = 0; arr.length < n; i += 1) {
    if (i % 2 === 0) {arr.push(i)}
   }

   return arr
  }
// EXERCÍCIO 09
function classificaTriangulo(ladoA, ladoB, ladoC) {
  return ladoA === ladoB && ladoA === ladoC ? 'Equilátero' : ladoA === ladoB || ladoB === ladoC || ladoA === ladoC ? 'Isósceles' : 'Escaleno'
}

// EXERCÍCIO 10
function retornaSegundoMaiorESegundoMenor(array) {
  let arr = array.sort((x, y) => x - y)
  let newArr = []
  newArr.push(arr[arr.length - 2])
  newArr.push(arr[1])

  return newArr
}

// EXERCÍCIO 11
function retornaChamadaDeFilme(filme) {
  let actors = filme.atores.toString()
  return `Venha assistir ao filme ${filme.nome}, de ${filme.ano}, dirigido por ${filme.diretor} e estrelado por ${actors.replaceAll(',',', ')}.`
}

// EXERCÍCIO 12
function retornaPessoaAnonimizada(pessoa) {
  let pessoaN = pessoa
  pessoaN.nome = 'ANÔNIMO'
  return pessoaN
}

// EXERCÍCIO 13A
function retornaPessoasAutorizadas(pessoas) {
  let arr = []
  pessoas.map(function (el, i) {
    if (el.idade > 14 && el.idade < 60 && el.altura >= 1.5) {
      arr.push(el)
    }
  })
  return arr
}

// EXERCÍCIO 13B
function retornaPessoasNaoAutorizadas(pessoas) {
  let arr = []
  pessoas.map(function (el, i) {
    if (el.idade > 14 && el.idade < 60 && el.altura >= 1.5) {
      
    } else {arr.push(el)}
  })
  return arr
}

// EXERCÍCIO 14
function retornaContasComSaldoAtualizado(contas) {
  let arr = []

  contas.map(function (el) {
    if (el.compras) {
      let saldo = 0;
      for (let i of el.compras) {
        saldo += i
      }
      let compras = saldo
      saldo = 0
      arr.push({cliente: el.cliente, saldoTotal: (el.saldoTotal - compras), compras: []})
    }
  })
  return arr
}

// EXERCÍCIO 15A
function retornaArrayOrdenadoAlfabeticamente(consultas) {
  return consultas.sort((a, b) => a.nome < b.nome ? -1 : a.nome > b.nome ? 1 : 0)  
}

// EXERCÍCIO 15B
function retornaArrayOrdenadoPorData(consultas) {

  let arrOne = []

  consultas.map(function (el) {
    let date = el.dataDaConsulta.replaceAll('/', ' ')
    let nDate = Date.parse(date)
    el.dataDaConsulta = new Date(nDate).toLocaleDateString('pt-BR')
    arrOne.push(el)
  })

  arrOne.sort((a, b) => a.dataDaConsulta < b.dataDaConsulta ? -1 : a.dataDaConsulta > b.dataDaConsulta ? 1 : 0)

  let arrTwo = arrOne

  arrTwo.map(function (el, i) {
    let data = new Date(el.dataDaConsulta)
    let d = data.getDate() < 10 ? `0${data.getDate()}` : data.getDate();
    let m = data.getMonth() + 1 < 10 ? `0${data.getMonth() + 1}` : data.getMonth() + 1;
    let y = data.getFullYear()
    let out = `${d}/${m}/${y}`

    console.log(out)

    arrTwo[i].dataDaConsulta = out
  })

  return arrTwo
}
