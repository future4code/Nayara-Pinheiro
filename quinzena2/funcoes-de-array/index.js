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

//exercicio 2
const produtos = [
   { nome: "Alface Lavada", categoria: "Hortifruti", preco: 2.5 },
   { nome: "Guaraná 2l", categoria: "Bebidas", preco: 7.8 },
   { nome: "Veja Multiuso", categoria: "Limpeza", preco: 12.6 },
   { nome: "Dúzia de Banana", categoria: "Hortifruti", preco: 5.7 },
   { nome: "Leite", categoria: "Bebidas", preco: 2.99 },
   { nome: "Cândida", categoria: "Limpeza", preco: 3.30 },
   { nome: "Detergente Ypê", categoria: "Limpeza", preco: 2.2 },
   { nome: "Vinho Tinto", categoria: "Bebidas", preco: 55 },
   { nome: "Berinjela kg", categoria: "Hortifruti", preco: 8.99 },
   { nome: "Sabão em Pó Ypê", categoria: "Limpeza", preco: 10.80 }
];

//2-a)
const apenasNomeDosProdutos = produtos.map((item, index, array) => {
   return item.nome
})

console.log(apenasNomeDosProdutos);

//2-b)
let listaDedesconto = produtos.map((produto) => {
   return {
       nome: produto.nome, 
       preco: (produto.preco-(produto.preco*0.05))
   }
});

console.log(listaDedesconto)

//2c)
const apenasProdutosDeBeber = produtos.filter((item, index, array) => {
   return item.categoria == "Bebidas"
});

console.log(apenasProdutosDeBeber);

//2-d)
const apenasProdutosYpe = produtos.filter((item, index, array) => {
   return item.nome.includes("Ypê")
});
console.log(apenasProdutosYpe)

//2-e)
function gerarMensagem(produtos){
   return `Compre ${produtos.nome} por ${produtos.preco}`
}

const frase = apenasProdutosYpe.map(gerarMensagem);
console.log(frase)