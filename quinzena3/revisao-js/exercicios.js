// EXERCÍCIO 01
function inverteArray(array) {
  let arrayInvertido = []
  for (let i = array.length - 1;i >= 0;i--) {
    arrayInvertido.push(array[i]);
  }
  return arrayInvertido;
}

// EXERCÍCIO 02
function retornaNumerosParesElevadosADois(array) {
  let arrayDeNumerosParesElevadosADois = []
  for (let i = 0; i < array.length; i++) {
    if (array[i] % 2 === 0) {
     arrayDeNumerosParesElevadosADois.push(array[i] * array[i]);
    }
  }
  return arrayDeNumerosParesElevadosADois;
}

// EXERCÍCIO 03
function retornaNumerosPares(array) {
  let numerosPares = [];
  for (let i = 0; i < array.length; i++) {
    if (array[i] % 2 === 0) {
    numerosPares.push(array[i]);
    }
 }
 return numerosPares;
}

// EXERCÍCIO 04
function retornaMaiorNumero(array) {
  let maiorNumero = 0;
  for (let i = 0;i < array.length;i++) {
    if (array[i] > maiorNumero) {
      maiorNumero = array[i]
    }
  }
  return maiorNumero;
}

// EXERCÍCIO 05
function retornaQuantidadeElementos(array) {
  return array.length;
}

// EXERCÍCIO 06
function retornaExpressoesBooleanas() {
  const expressoesBooleanas = [false, false, true, true, true];
  return expressoesBooleanas;
}

// EXERCÍCIO 07
function retornaNNumerosPares(n) {
  let numerosPares = [];
  for (let numero = 0; numerosPares.length < n; numero++) {
    if (numero % 2 === 0) {
      numerosPares.push(numero);
    }
  }
  return numerosPares;
}

// EXERCÍCIO 08
function checaTriangulo(a, b, c) {
  if (a === b && b === c) {
    return "Equilátero";
  } else if (a !== b && b !== c) {
    return "Escaleno";
  } else {
    return "Isósceles";
  }
}

// EXERCÍCIO 09
function comparaDoisNumeros(num1, num2) {
    if (num1 > num2) {
   maiorNumero = num1
   menorNumero = num2
  } else {
    maiorNumero = num2
    menorNumero = num1
  }

  const maiorDivisivelPorMenor = maiorNumero % menorNumero === 0;

  const diferenca = maiorNumero - menorNumero;

  return {
    maiorNumero: maiorNumero,
    maiorDivisivelPorMenor: maiorDivisivelPorMenor,
    diferenca: diferenca
  }
}

// EXERCÍCIO 10
function segundoMaiorEMenor(array) {
  let menor = Infinity;
  let maior = -Infinity;
    let segundoMaiorEMenorNumero = [];

  for (let i of array) {
    if (i < menor) {
      menor = i;
    }
    if (i > maior) {
      maior = i;
    }
  }

  let segundoMenor = Infinity;
  let segundoMaior = -Infinity;

  for (let i of array) {
    if (i < segundoMenor && i !== menor) {
      segundoMenor = i;
    }
    if (i > segundoMaior && i !== maior) {
      segundoMaior = i;
    }
  }
  segundoMaiorEMenorNumero.push(segundoMaior);
  segundoMaiorEMenorNumero.push(segundoMenor);

  return segundoMaiorEMenorNumero;
}


// EXERCÍCIO 11
function ordenaArray(array) {
  const tamanhoDoArray = array.length
  for (let i = 0; i < tamanhoDoArray; i++) {
    for (let j = 0; j < tamanhoDoArray; j++) {
      if (array[j] > array[j + 1]) {
        let tmp = array[j]
        array[j] = array[j + 1]
        array[j + 1] = tmp
      }
    }
  }
  return array;
}

// EXERCÍCIO 12
function filmeFavorito() {

}

// EXERCÍCIO 13
function imprimeChamada() {
  // "Venha assistir ao filme NOME_DO_FILME, de ANO, dirigido por DIRECAO e estrelado por ELENCO."
}

// EXERCÍCIO 14
function criaRetangulo(lado1, lado2) {

}

// EXERCÍCIO 15
function anonimizaPessoa(pessoa) {

}

// EXERCÍCIO 16A
function maioresDe18(arrayDePessoas) {

}

// EXERCÍCIO 16B
function menoresDe18(arrayDePessoas) {

}

// EXERCÍCIO 17A
function multiplicaArrayPor2(array) {

}

// EXERCÍCIO 17B
function multiplicaArrayPor2S(array) {

}

// EXERCÍCIO 17C
function verificaParidade(array) {

}

// EXERCÍCIO 18A
function retornaPessoasAutorizadas(pessoas) {

}

// EXERCÍCIO 18B
function retornaPessoasNaoAutorizadas(pessoas) {

}

// EXERCÍCIO 19A
function ordenaPorNome(consultasNome) {

}

// EXERCÍCIO 19B
function ordenaPorData(consultasData) {

}

// EXERCÍCIO 20
function calculaSaldo(contas) {

}
