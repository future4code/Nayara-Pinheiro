~~~~JavaScript
function contaOcorrencias(arrayDeNumeros, numeroEscolhido) {
  let contadorDeOcorrencias = 0
  for(let i = 0; i < arrayDeNumeros.length; i++){
    if(arrayDeNumeros[i] === numeroEscolhido){
     contadorDeOcorrencias++
    } 
  }
  if (contadorDeOcorrencias === 0) {
    return "Número não encontrado"
  }
  return `O número ${numeroEscolhido} aparece ${contadorDeOcorrencias}x`

}
~~~~