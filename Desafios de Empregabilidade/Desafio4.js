//Faça um programa que leia um valor e imprima a mensagem "É maior que 10" se o valor lido for maior que 10, 
//caso contrário imprima "Não é maior que 10"

function maiorQue10 () {
    const numero = Number(prompt("Digite um número:"));

    if(numero > 10 ){
        console.log("É Maior que 10")
    }else{
        console.log("Não é maior que 10")
    }
}

maiorQue10();