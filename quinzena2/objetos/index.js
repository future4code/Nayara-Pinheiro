//Exercicio de interpretação de texto
//1-a)
//Matheus Nachtergaele
//Virginia Cavendish
//Canal: Globo, Horário 14h

//2-a)
//nome: "Juca", idade: 3, raca: "SRD"
//nome: "Juba", idade: 3, raca: "SRD"
//nome: "Jubo", idade: 3, raca: "SRD"

//2-b)
//os 3 pontinhos fazem o espelhamento, fazendo uma cópia do objeto, ou então
//acessar só algumas das propriedades dele utilizando as
//sintaxes de spread ou adicionando ou mudando.

//3-a) Será impresso false e undefined
//3-b) O false será pois é propriedade do objeto, e undefined pois não tem a propriedade altura

//Exercicio  de escrita de código
//1 -a)
const aluna = {
    nome: "Ana Maria",
    apelidos: ["Aninha", "Maria","Ana"],
};

function pessoa(aluna) {
  console.log(`Eu sou ${aluna.nome}, mas pode me chamar de : ${aluna.apelidos[0]},${aluna.apelidos[1]} ou ${aluna.apelidos[2]}`);
};

pessoa(aluna);

//1 - b)
const alunaNovoApelido = {
    ...aluna,
    apelidos: ["Mariazinha", "An", "Mar"],
};

pessoa(alunaNovoApelido);

//2-a
const profissional1 = {
    nome: "Pedro",
    idade: 52,
    profissao: "Engenheiro",
};

const profissional2 = {
    nome: "Lucas",
    idade: 40,
    profissao: "Pintor",
};

//2-b
function simplificando(profissional){
    return [
        profissional.nome,
        profissional.nome.length,
        profissional.idade,
        profissional.profissao,
        profissional.profissao.length
    ]
}

console.log(simplificando(profissional1));
console.log(simplificando(profissional2));

//3-a)
var carrinho = [];

//3-b)
const laranja = {
    nome: "laranja",
    disponibilidade: true
};

const abacate = {
    nome: "abacate",
    disponibilidade: true
};

const limao = {
    nome: "limão",
    disponibilidade: true
};

//3-c)
function colocaNoCarrinho(fruta){
    carrinho.push(fruta);
}

colocaNoCarrinho(laranja);
colocaNoCarrinho(abacate);
colocaNoCarrinho(limao);

//3-d)
console.log(carrinho);

//DESAFIO
//1
function dadosDaPessoa(){
    let dados= {};
    dados.nome = prompt("Qual o seu nome?");
    dados.idade = Number(prompt("Qual sua idade?"));
    dados.profissoa = prompt("Qual é sua profissão?");
    console.log(dados);
    console.log(typeof dados);
}

dadosDaPessoa();

//2
const filme1 = {
    nome: "Avatar",
    anoDeLacamento: 2009
}

const filme2 = {
    nome: "Planeta do Tesoura",
    anoDeLacamento: 2009
}

function filmeLancamento(filme1, filme2){
    let mensagem1 = "O primeiro filme foi lançado antes do segundo? " + `${filme1.anoDeLacamento>filme2.anoDeLacamento}` + "\n";
    let mensagem2 = "O primeiro filme foi lançado no mesmo ano do segundo? " + `${filme1.anoDeLacamento==filme2.anoDeLacamento}`;
    return mensagem1+mensagem2;
}

console.log(filmeLancamento(filme1,filme2))

//3
function disponibilidade(fruta){
    fruta.disponibilidade = !fruta.disponibilidade;
    return fruta;
}

//testando com o desafio 1:
console.log(disponibilidade(limao));
