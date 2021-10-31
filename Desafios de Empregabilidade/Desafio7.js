//Faça um programa para ler dois valores e imprimí-los em ordem crescente. Considere que não serão lidos valores iguais.

const crescente = (valor1 , valor2) => {
    if(valor1 > valor2){
        console.log(valor1, valor2)
    }else{
        console.log(valor2, valor1)
    }
}