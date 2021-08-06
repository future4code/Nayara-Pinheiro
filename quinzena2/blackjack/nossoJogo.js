console.log("Bem vindo ao jogo de Blackjack!");

confirm("Quer iniciar uma nova partida?");

function rodada(){
   const carta1Usuario = comprarCarta();
   const carta2Usuario = comprarCarta();
   const carta1Computador = comprarCarta();
   const carta2Computador = comprarCarta();

   const pontuacaoUsuario = carta1Usuario.valor + carta2Usuario.valor;
   const pontuacaoComputador = carta1Computador.valor + carta2Computador.valor;

   console.log(`Usuário - cartas: ${carta1Usuario.texto} ${carta2Usuario.texto} - ${pontuacaoUsuario}`);
   console.log(`Computador - cartas: ${carta1Computador.texto} ${carta2Computador.texto} - ${pontuacaoComputador}`);
   
   if (pontuacaoUsuario > pontuacaoComputador) {
             console.log("O usuário ganhou!")
         } else if (pontuacaoComputador > pontuacaoUsuario) {
             console.log("O computador ganhou!")
         } else if (pontuacaoUsuario === pontuacaoComputador) {
             console.log("Empate!")
         }
   
   finalDaPartida();
}

function finalDaPartida(){
   let oJogo = confirm("Quer iniciar uma nova partida?");
   if (oJogo) {
      rodada();
   }else{
      console.log("O jogo acabou!");
   }
}
rodada();



