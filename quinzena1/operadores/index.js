//EXERCICIO DE INTERPRETAÇÃO DE TEXTO
/*
1-
a.false
b.false
c.verdadeiro
d.boolean

2-
Faltou converter o prompt de string para number.
por exemplo se o primeiroNumero for 1 e o segundoNumero for 2
ao inves de realizar a operação soma ele resultará em 12.

3-
let primeiroNumero = Number(prompt("Digite um numero!"));
let segundoNumero = Number(prompt("Digite outro numero!"));

const soma = primeiroNumero + segundoNumero

console.log(soma)
*/

//EXERCICIO DE ESCRITA

//1
const idadeUsuario = Number(prompt("Qual a sua idade?"));
const idadeAmigo = Number(prompt("Qual é a idade do seu melhor amigo?"));

console.log("Sua idade é maior do que a do seu amigo?", idadeUsuario > idadeAmigo);
console.log(idadeUsuario-idadeAmigo);

//24
const numeroPar = Number(prompt("Insira um número par:"));
console.log(numeroPar%2);
//2-c: todas as respostas deram zero, pois todos os numeros pares 
//são divisiveis por 2!
//2-d: todas as respostas deram 1.

//3
const idadeUsuarioEmAnos = Number(prompt("Qual a sua idade?"));
console.log("Sua idade em meses:", idadeUsuarioEmAnos*12);
console.log("Sua idade em dias:", idadeUsuarioEmAnos*365);
console.log("Sua idade horas:", idadeUsuarioEmAnos*365*24);

//4
const primeiroNumero = Number(prompt("Insira um número:"));
const segundoNumero = Number(prompt("Insira outro número:"));

console.log(primeiroNumero>segundoNumero);
console.log(primeiroNumero===segundoNumero);
console.log(primeiroNumero%segundoNumero===0);
console.log(segundoNumero%primeiroNumero===0);


//DESAFIO
//1
//a
console.log((77-32)*(5/9)+273.15,"K");
//b
console.log((80)*(9-5)+32,"ºF");
//c
console.log((((30)*(9-5)+32)-32)*(5/9)+273.15,"K", (30)*(9-5)+32, "ºF");
//d
const grausCelsius = Number(prompt("Insira o valor em graus Celsius:"));
console.log((((grausCelsius)*(9-5)+32)-32)*(5/9)+273.15,"K", (grausCelsius)*(9-5)+32, "ºF");

//2
const custoTotalQuilowattHora = 280*0.05;
const desconto = custoTotalQuilowattHora*0.15;
//a
console.log("R$", custoTotalQuilowattHora);
//b
console.log("R$", custoTotalQuilowattHora-desconto);


//3
//a
console.log("20lb equivalem a", 20/2.204 , "kg");
//b
console.log("10.5oz equivalem a", 10.5/35.274 , "kg");
//c
console.log("100mi equivalem a", 100/0.000621 , "m");
//d
console.log("50ft equivalem a", 50/3.28 , "m");
//e
console.log("103.56gal equivalem a", 103.56/0.264 , "l");
//f
console.log("450xic equivalem a", 450/3.519 , "l");
//g
const milhas = Number(prompt("De um valor em milas:"));
console.log( milhas, "mi equivalem a", milhas/0.000621 , "m");
