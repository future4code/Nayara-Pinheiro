//Exercícios de interpretação de código

//1-a
//  { nome: "Amanda Rangel", apelido: "Mandi" },
//  { nome: "Laís Petra", apelido: "Laura" },
//  { nome: "Letícia Chijo", apelido: "Chijo"
//Ele vai copiar igual o Objeto


//2-a
//ele imprime um array com os nomes:
//["Amanda Rangel", "Laís Petra", "Letícia Chijo"]



//3-a
//  { nome: "Amanda Rangel", apelido: "Mandi" },
//  { nome: "Laís Petra", apelido: "Laura" },
//Ele filtra somente o que não tiver a string Chijo


//Exercícios de escrita de código
const pets = [
    { nome: "Lupin", raca: "Salsicha"},
    { nome: "Polly", raca: "Lhasa Apso"},
    { nome: "Madame", raca: "Poodle"},
    { nome: "Quentinho", raca: "Salsicha"},
    { nome: "Fluffy", raca: "Poodle"},
    { nome: "Caramelo", raca: "Vira-lata"},
 ]
 
 //1-a)
 const apenasNomesDosPets = pets.map((item, index, array) => {
    return item.nome
 });
 
 console.log(apenasNomesDosPets);
 
 //1-b)
 const apenasCachorrosSalsichas = pets.filter((item, index, array) => {
    return item.raca == "Salsicha"
 });
 
 console.log(apenasCachorrosSalsichas);

//1-c)
function gerarMensagemDesconto(item, posicao, array){
    if(item.raca == "Poodle"){
    return `Você ganhou um cupom de desconto de 10% para tosar o/a ${item.nome}`
    }
 }
 const petsPoodle = pets.map(gerarMensagemDesconto);
 console.log(petsPoodle);


