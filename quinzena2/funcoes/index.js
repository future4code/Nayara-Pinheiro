//Exercícios de interpretação de código
//1
//function minhaFuncao(variavel) {
//	return variavel * 5
//}

//console.log(minhaFuncao(2))
//console.log(minhaFuncao(10))

//a - Irá imprimir: 10 e 50, pois a função multiplica os valores por 5
//a função sendo chamada no console, imprimi esses valores

//b- A função ira codada porem não sera impressa!


//2-a A função pede um texto ao usuário, e transforma esse texto todo em letras minusculas com (toLowerCase()),
//e pergunta se no texto possui a palavra "cenoura" - retornando um bolleano
//no caso as 3 opcções retornam True

//Exercícios de escrita de código
//a
function mensagem(){
    console.log("Eu sou Nayara, tenho 31 anos, moro em São José dos Pinhais e sou estudante");
};
mensagem();

//b
function mensagemComParametro(nome,idade,cidade,profissao){
    let mensagemParamentro = `Eu sou ${nome}, tenho ${idade}, moro em ${cidade}, e sou ${profissao}`;
    console.log(mensagemParamentro);
}

mensagemComParametro("Ana",21,"Curitiba","Estudante");
mensagemComParametro("Silvia",31,"Curitiba","Designer");
mensagemComParametro("Fabio",19,"São Paulo","Técnico de Enfermagem");
mensagemComParametro("Leo",21,"Rio de Janeiro","Estudante");

//2
//a
function somaDosElementos(primeiroNumero, segundoNumero){
   return primeiroNumero + segundoNumero;
}
console.log(somaDosElementos(1,2));

//b
function primeiroEhMaiorQueOSegundo(numero1,numero2){
    return numero1>=numero2;
}

//c
function numeroPar(numero){
    return numero%2==0;
}

//d
function mensagemLetraMaiuscula(mensagem){
    console.log(mensagem.length, mensagem.toUpperCase());
}

//3
function soma(number1,number2){
    return number1+number2;
}

function subtracao(number1,number2){
    return number1-number2;
}

function multiplicacao(number1,number2){
    return number1*number2;
}

function divisao(number1,number2){
    return number1/number2;
}

function operacoesBasicas(number1,number2){
    console.log("Numeros inseridos: ",number1,number2);
    console.log("Soma: ",soma(number1,number2));
    console.log("Subtração: ",subtracao(number1,number2));
    console.log("Multiplicação: ",multiplicacao(number1,number2));
    console.log("Divisão: ",divisao(number1,number2));
}

const number1Usuario = Number(prompt("Insira um número:"));
const number2Usuario = Number(prompt("Insira um número:"));

operacoesBasicas(number1Usuario,number2Usuario);

//DESAFIO
//1-a
const outraFuncao = (soma) => {
    console.log(soma);
}
//1-b
const outraSoma = (x,y) => {
    outraFuncao(x+y);
}

//2
function pitagoras(ca,co){
    const hipotenusa = Math.sqrt(Math.pow(ca,2)+Math.pow(co,2));
    return hipotenusa;
}

console.log(pitagoras(3,4))