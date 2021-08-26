// Exemplos

// Exercício 0A
function soma() {
  // escreva seu código aqui
  const num1 = prompt('Digite o primeiro número')
  const num2 = prompt('Digite o segundo número')

  console.log(Number(num1) + Number(num2))
}

// Exercício 0B
function imprimeMensagem() {
  // escreva seu código aqui
  const mensagem = prompt('Digite sua mensagem')

  console.log(mensagem)
}

// ---------------------------------------------------
// Exercícios

// Exercício 1
function calculaAreaRetangulo() {
  // escreva seu código aqui
 const altura = Number(prompt("Digite a altura do triângulo:"));
 const largura = Number(prompt("Digite a largura do triângulo:"));
 
 console.log(altura*largura);

}

// Exercício 2
function imprimeIdade() {
  // escreva seu código aqui
  const anoAtual = Number(prompt("Digite o ano atual:"));
  const anoNascimento = Number(prompt("Qual o ano do seu nascimento:"));

  console.log(anoAtual-anoNascimento);

}

// Exercício 3
function calculaIMC() {
  // escreva seu código aqui
  const peso = Number(prompt("Digite seu peso:"));
  const altura = Number(prompt("Digite sua altura:"));

console.log(peso / (altura*altura));

}

// Exercício 4
function imprimeInformacoesUsuario() {
  // escreva seu código aqui
const seuNome = prompt("Digite seu nome:");
const suaIdade = Number(prompt("Qual a sua idade?"));
const seuEmail = prompt("Digite seu email:");

console.log(`Meu nome é ${seuNome}, tenho ${suaIdade} anos, e o meu email é ${seuEmail}.`);

}

// Exercício 5
function imprimeTresCoresFavoritas() {
  // escreva seu código aqui
  let coresFavoritas = [];

  coresFavoritas.push(prompt("Qual a sua cor favorita?"));
  coresFavoritas.push(prompt("Qual a é sua segunda cor favorita?"));
  coresFavoritas.push(prompt("Qual a é a sua terceira favorita?"));

  console.log(coresFavoritas);

}

// Exercício 6
function retornaStringEmMaiuscula() {
  // escreva seu código aqui
  let fraseDoDia = prompt("Escreva um pensamento do seu dia:").toUpperCase();
  
  console.log(fraseDoDia);

}

// Exercício 7
function calculaIngressosEspetaculo() {
  // escreva seu código aqui
  const custoEspetaculo = Number(prompt("Qual o valor justo para um espetáculo de teatro:"));
  const valorIngressos = Number(prompt("Qual o valor de cada ingresso:"));

  console.log(custoEspetaculo/valorIngressos);
}

// Exercício 8
function checaStringsMesmoTamanho() {
  // escreva seu código aqui
  let primeiraString = prompt("Escreva uma palavra:");
  let segundaString = prompt("Escreva outra palavra");

  console.log(primeiraString.length===segundaString.length);

}

// Exercício 9
function checaIgualdadeDesconsiderandoCase() {
  // escreva seu código aqui
  const firtString = prompt("Escreva uma palavra:");
  const secondString = prompt("Escreva outra palavra:");

console.log(firtString.toLowerCase()==secondString.toLowerCase());

}

// Exercício 10
function checaRenovacaoRG() {
  // escreva seu código aqui
  const anoAtual = Number(prompt("Qual o ano atual?"));
  const seuAnoDeNascimento = Number(prompt("Qual seu ano de nascimento?"));
  const anoRg = Number(prompt("Em que ano a sua carteira de identidade foi emitida?"));

  const idade = anoAtual-seuAnoDeNascimento;
  const idadeRg = anoAtual-anoRg;

  if(idade <= 20){
    console.log(idadeRg>=5);
  } else if (idade >20 && idade <= 50 ){
    console.log(idadeRg>=10);
  } else {
    console.log(idadeRg>=15);
  }


}

// Exercício 11
function checaAnoBissexto() {
  // escreva seu código aqui
  const ano = Number(prompt("Digite um ano:"));

  if(ano%400==0 || (ano%4==0 && ano%100!==0)){
    console.log(true);
  } else {
    console.log(false);
  }

}

// Exercício 12
function checaValidadeInscricaoLabenu() {
  // escreva seu código aqui
  const adulto = prompt("Você tem mais de 18 anos? sim ou nao");
  const ensinoMedioCompleto = prompt("Você possui ensino médio completo? sim ou nao");
  const disponibilidade = prompt("Você possui disponibilidade exclusiva durante os horários do curso? sim ou nao");

  if (adulto == "sim" && ensinoMedioCompleto == "sim" && disponibilidade == "sim"){
    console.log(true);
  } else {
    console.log(false);
  }





}