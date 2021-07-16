/*
EXERCICIO DE INTERPRETAÇÃO DE CÓDIGO:
1-O primeiro console.log irá imprimir o primeiro valor atribuído a var b (que no exemplo foi 10).
O segundo console.log irá imprimir os valores: 10,5 (pois b foi alterado)
*/

/*2-
O console.log irá imprimir os valore: 10,10,10
*/

/*3-
p= horasTrabalhadas
t = salarioDiario
*/


//EXERCICIO DE ESCRITA DE CÓDIGO:
//Exercicio 1
let nome
let idade

console.log(typeof nome)
console.log(typeof idade)
//Resposta: Deu erro underfined pois não foi atribuido os valores as variáveis

let nome = prompt("Qual o seu nome?")
console.log(typeof nome)

let idade = prompt ("Qual a sua idade?")
console.log(typeof idade)

console.log("Olá", nome ,"você tem", idade ,"anos.")

//Exercício 2
let ehEstudante = true
let diaDeSol = true
let desanimada = false

console.log(ehEstudante)
console.log(diaDeSol)
console.log(desanimada)

//Exercício 3
let a = 10
let b = 25
let c

a=c
b=a
c=b

console.log("o novo valor de a é,"a)
console.log("o novo valor de b,"b)