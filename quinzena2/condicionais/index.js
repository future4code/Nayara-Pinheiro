//exercícios de interpretação de texto:

//1-a) O código pede a o usuário que digite um número,
//transforma esse numero em um numero
//e verifica se ele é par ou impar

//1-b) passa no teste todos os numeros pares, por serem resto da divisão por 2 e darem zero

//1-c) para todos numeros impares

//2-a) O codigo recebe uma fruta e imprimi o valor do item, porem se não tiver na lista o valor será 5,00

//2-b) "O preço da fruta Maçã é R$ 2.25"

//2-c) o preço da pêra será de 5.00 pois sem o BREAK o JavaScript tambem executara o codigo DEFAULT

//3-a) A primeira pede que o usuario digite um numero, e o transforma em numero

//3-b)Se o usuário digitar 10 a mensagem impressa será: "Esse número passou no teste"
//Porem se ele digitar -10 dara um errro "not defined" pois não existe a condição ELSE

//3-c)Haverá erro, pois a variável let está dentro do escopo do IF, por isso a mensagem é considerada undefined

//Exercicio de escrita de código

//1
const idadeUsuario = Number(prompt("Digite sua idade:"));

if(idadeUsuario>=18){
	console.log("Você pode dirigir");
}else{
	console.log("Você não pode dirigir");
}


//2
const turnoDoDia = prompt("Qual o turno que você estuda? Digite M (matutino) ou V (Vespertino) ou N (Noturno)").toUpperCase();


if(turnoDoDia==="M"){
	console.log("Bom Dia!");
}else if(turnoDoDia==="V"){
	console.log("Boa tarde!");
}else if(turnoDoDia==="N"){
	console.log("Boa noite");
}else{
	console.log("Digite uma opção válida!");
}

//3
const turnoDoDiaAluno = prompt("Qual o turno que você estuda? Digite M (matutino) ou V (Vespertino) ou N (Noturno)").toUpperCase();

switch(turnoDoDiaAluno){
    case 'M':
        console.log("Bom dia!");
        break;
    case 'V':
        console.log("Boa tarde!");
        break;
    case 'N':
        console.log("Boa noite!");
        break;
    default:
        console.log("Digite uma opção válida!")
        break;
}

//4
const generoDoFilme = prompt("Qual o gênero do filme?");
const valorDoIngresso = Number(prompt("Qual o valor do ingresso?"));

if (generoDoFilme === "fantasia" && valorDoIngresso <= 15){
	console.log("Bom filme!");
}else{
	console.log("Escolha outro filme :(");
}


//DESAFIOS
//1
const generoFilme = prompt("Qual o gênero do filme?");
const valorIngresso = Number(prompt("Qual o valor do ingresso?"));

if (generoFilme === "fantasia" && valorIngresso <= 15){
	const lanchinho = prompt("Qual lanche você vai querer comprar?");
	console.log(`Bom filme!\n
	Aproveite o seu ${lanchinho}`);

}else{
	console.log("Escolha outro filme :(");
}

//2
let ingressoDoUsuario ={
    nomeCompleto: prompt("Qual seu nome completo?"),
    tipoDeJogo: prompt("Diga qual o tipo de jogo: digite de IN para Internacional ou DO para Domésticos").toUpperCase(),
    etapaDoJogo: prompt("Digite qual etapa do jogo: digite SF para semi-final, DT para decisão de terceiro lugar e FI para Final").toUpperCase(),
    categoria: Number(prompt("Digite qual categoria: 1,2,3 ou 4?")),
    quantidadeDeIngressos: Number(prompt("Digite a quantidade de ingressos:")),
}

function jogoDeQualTipo(){
    if(ingressoDoUsuario.tipoDeJogo == "DO"){
        return "Nacional"
    }else{
        return "Internacional"
    }
}

function qualEtapaDoJogo(){
    if(ingressoDoUsuario.etapaDoJogo == "SF"){
        return "SemiFinal"
    }else if(ingressoDoUsuario.etapaDoJogo == "DT"){
        return "Decisão do 3º lugar"
    }else{
        return "Final"
    }
}

switch (ingressoDoUsuario.categoria) {
    case 1:
        switch (ingressoDoUsuario.etapaDoJogo) {
            case "SF":
                if(ingressoDoUsuario.tipoDeJogo=="DO"){
                    ingressoDoUsuario.valorDoIngresso= 1320;
                }else{
                    ingressoDoUsuario.valorDoIngresso= 1320*4.1;
                }
                break;
            case "DT":
                if(ingressoDoUsuario.tipoDeJogo=="DO"){
                    ingressoDoUsuario.valorDoIngresso=660;
                }else{
                    ingressoDoUsuario.valorDoIngresso=660*4.1;
                }
                break;
            default:
                if(ingressoDoUsuario.tipoDeJogo=="DO"){
                    ingressoDoUsuario.valorDoIngresso=1980;
                }else{
                    ingressoDoUsuario.valorDoIngresso=1980*4.1;
                }
                break;
        }
        break;
    case 2:
        switch (ingressoDoUsuario.etapaDoJogo) {
            case "SF":
                if(ingressoDoUsuario.tipoDeJogo=="DO"){
                    ingressoDoUsuario.valorDoIngresso=880;
                }else{
                    ingressoDoUsuario.valorDoIngresso=880*4.1;
                }
                break;
            case "DT":
                if(ingressoDoUsuario.tipoDeJogo=="DO"){
                    ingressoDoUsuario.valorDoIngresso=440;
                }else{
                    ingressoDoUsuario.valorDoIngresso=440*4.1;
                }
                break;
            default:
                if(ingressoDoUsuario.tipoDeJogo=="DO"){
                    ingressoDoUsuario.valorDoIngresso=1320;
                }else{
                    ingressoDoUsuario.valorDoIngresso=1320*4.1;
                }
                break;
        }
        break;
    case 3:
        switch (ingressoDoUsuario.etapaDoJogo) {
            case "SF":
                if(ingressoDoUsuario.tipoDeJogo=="DO"){
                    ingressoDoUsuario.valorDoIngresso=550;
                }else{
                    ingressoDoUsuario.valorDoIngresso=550*4.1;
                }
                break;
            case "DT":
                if(ingressoDoUsuario.tipoDeJogo=="DO"){
                    ingressoDoUsuario.valorDoIngresso=330;
                }else{
                    ingressoDoUsuario.valorDoIngresso=330*4.1;
                }
                break;
            default:
                if(ingressoDoUsuario.tipoDeJogo=="DO"){
                    ingressoDoUsuario.valorDoIngresso=880;
                }else{
                    ingressoDoUsuario.valorDoIngresso=880*4.1;
                }
                break;
        }
        break;
    default:
        switch (ingressoDoUsuario.etapaDoJogo) {
            case "SF":
                if(ingressoDoUsuario.tipoDeJogo=="DO"){
                    ingressoDoUsuario.valorDoIngresso=220;
                }else{
                    ingressoDoUsuario.valorDoIngresso=220*4.1;
                }
                break;
            case "DT":
                if(ingressoDoUsuario.tipoDeJogo=="DO"){
                    ingressoDoUsuario.valorDoIngresso=170;
                }else{
                    ingressoDoUsuario.valorDoIngresso=170*4.1;
                }
                break;
            default:
                if(ingressoDoUsuario.tipoDeJogo=="DO"){
                    ingressoDoUsuario.valorDoIngresso=330;
                }else{
                    ingressoDoUsuario.valorDoIngresso=330*4.1;
                }
                break;
        }
        break;

}


console.log("---Dados da compra---");
console.log(`Nome do cliente: ${ingressoDoUsuario.nomeCompleto}`);
console.log(`Tipo do Jogo: ${jogoDeQualTipo()}`);
console.log(`Etapa dp Jogo: ${qualEtapaDoJogo()}`);
console.log(`Categoria: ${ingressoDoUsuario.categoria}`);
console.log(`Quantidade de Ingressos: ${ingressoDoUsuario.quantidadeDeIngressos} ingressos`);
console.log("---Valores---");
console.log(`Valor do ingresso: R$ ${ingressoDoUsuario.valorDoIngresso}`);
console.log(`Valor do total: R$ ${ingressoDoUsuario.valorDoIngresso*ingressoDoUsuario.quantidadeDeIngressos}`);