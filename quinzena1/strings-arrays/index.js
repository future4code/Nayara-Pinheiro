/*EXERCICIO SEM EXECUTAR 

1- 

a.undefined 

b.null 

c.11 

d.3 

e.[3, 19, 5, 6, 7, 8, 9, 10, 11, 12, 13]

f.9

2- 

SUBI NUM ÔNIBUS EM MIRROCOS 27 

*/  

//ESCRITA DE CÓDIGO 

//1- 

const nomeDoUsuario= prompt("Qual seu nome?"); 

const emailDoUsuario = prompt("Qual seu email?"); 

 

console.log(`O email ${emailDoUsuario} foi cadastro com sucesso. Seja bem-vinda(o), ${nomeDoUsuario} !`); 

 

//2- 

//a)  

const comidaPreferida = [
    "lasanha",
    "macarrão",
    "pizza",
    "lanches",
    "nachos" 
]; 

console.log(comidaPreferida); 

//b) Imprima na tela a mensagem "Essas são as minhas comidas preferidas: ", seguida por cada uma das comidas, uma embaixo da outra. 

console.log(comidaPreferida[0]); 

console.log(comidaPreferida[1]); 

console.log(comidaPreferida[2]); 

console.log(comidaPreferida[3]); 

console.log(comidaPreferida[4]); 

 //c) Aqui vai um desafio: pergunte ao usuário uma comida preferida. Troque a segunda comida da sua lista pela inserida pelo usuário. Imprima na tela a nova lista 

 comidaPreferida[1]= prompt("Qual sua comida favorita?");

 console.log(comidaPreferida);

//3- 
//a 

listaDeTarefas = []; 

//b 
listaDeTarefas.push(prompt("Digite uma tarefa que deve executar no dia de hoje?")); 

listaDeTarefas.push(prompt("Digite outra tarefa que deve executar no dia de hoje?")); 

listaDeTarefas.push(prompt("Digite uma tarefa que deve executar no dia de hoje?")); 

//c 

console.log(listaDeTarefas); 

//d

const tarefaRealizada = Number(prompt("Digite o indice de 0 a 2:"));

//e

listaDeTarefas.splice(tarefaRealizada,1);

//f

console.log(listaDeTarefas);

//Desafio
//1
const frase = "Que dia lindo";
console.log(frase.split(" "));

//2
const frutas = [
    "Banana",
    "Morango",
    "Abacaxi",
    "Laranja", 
    "Ameixa"
    ]

console.log(frutas.indexOf("Abacaxi"),frutas.length);








