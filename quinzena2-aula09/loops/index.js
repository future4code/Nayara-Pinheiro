//EXERCICIOS DE INTERPRETAÇÃO DE TEXTO

//1 Ele esta fazendo a progressão de Fibonacci o valor impresso seria: 10

//2 -a) 19,21,23,25,27,30
//2-b) Talvez seja suficiente porem não consegui uma forma de conseguir sem utilizar uma variável

//3
//*
//**
//***
//****
//Seria impresso a quantidade de asteriscos que fosse adicionado no prompot

//EXERCICIOS DE ESCRITA DE CODIGO
//1
let animaisDeestimacao = Number(prompt("Quantos animais de estimação você tem?"));
let nomesDosPets = [];

if (animaisDeestimacao == 0){
    console.log("Que pena! Você pode adotar um pet!");
    }else{
       for( let i=0; i<animaisDeestimacao; i++){
        nomesDosPets.push(prompt("Qual o nome do seu pet:"))
       }
    }
    
console.log(nomesDosPets);

//2
let arrayOriginal = [1,2,3,4,5,6,7,8,9,0];

//2-a)
function valoresDoArray (numeros){
    for( let valores of numeros){
        console.log(valores);
    }
}
valoresDoArray(arrayOriginal);

//2-b)
function valoresDoArrayDivididosPorDez (numeros){
    for( let valores of numeros){
        console.log(valores/10);
    }
}
valoresDoArrayDivididosPorDez(arrayOriginal);

//2-c)
function filtraNumerosPares(numeros){
    let numerosPares = [];
    for( let pares of numeros){
        if( pares%2===0){
            numerosPares.push(pares);
        }
    }
    console.log(numerosPares);
}

filtraNumerosPares(arrayOriginal);


//2-d)
function descreveListaDeNumero(numeros){
    let descreveCadaElemento = [];
    for(let i = 0; i< numeros.length; i++ ){
        descreveCadaElemento.push(`O elemento do índex ${i} é: ${numeros[i]}`)
    }
    console.log(descreveCadaElemento);
}

descreveListaDeNumero(arrayOriginal);

//2-e)
function pegaMaiorEoMenorNumero (numeros){
    let maiorNumero = numeros[0];
    let menorNumero = numeros[0];
    for (let i = 0; i < numeros.length; i++) {
        if(maiorNumero<= numeros[i]){
            maiorNumero = numeros[i];
        }
        if(menorNumero >= numeros[i]){
            menorNumero = numeros[i];
        }
    }
    console.log(`O Maior número é ${maiorNumero} e o menor número é ${menorNumero}`);
}

pegaMaiorEoMenorNumero(arrayOriginal);