//Faça um programa que leia a idade de uma pessoa expressa em anos, meses e dias e imprima a idade dessa pessoa expressa apenas em dias. 
//Considerar ano com 365 dias e mês com 30 dias.

const idadeUsuarioEmAnos = Number(prompt("Digite sua idade:"));
const idadeUsuarioEmMeses = idadeUsuarioEmAnos*12

console.log("Sua idade em dias:", idadeUsuarioEmAnos*365);