console.log("Bem vindo ao jogo de Blackjack!");

let inicioDePartida = confirm("Quer iniciar uma nova partida?");
if (inicioDePartida) {
   rodada();
}else{
   console.log("O jogo acabou!");
}

    
function rodada(){
   let cartasUser = [];
   let cartasPc = [];

   cartasUser.push(comprarCarta());
   cartasUser.push(comprarCarta());
   cartasPc.push(comprarCarta());
   cartasPc.push(comprarCarta());

   if((cartasUser[0].valor===11 && cartasUser[1].valor===11) || (cartasPc[0].valor===11 && cartasPc[1].valor===11)){
      rodada(); 
      return  
   }else{
      desejaContinuarPartida(cartasUser,cartasPc);
   }
}

function desejaContinuarPartida(cartasUser, cartasPc){
   let userString = "";
   let valordasCartas = 0;
   for(let carta of cartasUser){
      userString += carta.texto;
      valordasCartas += carta.valor;    
   }
   if(valordasCartas>=21){
      finalizarPartida(valordasCartas,userString,cartasPc);
      return
   }
   let continuarPartida = confirm(`Suas cartas são ${userString}. A carta revelada do computador é ${cartasPc[0].texto} \n
   Deseja comprar mais uma carta?`)
   if (continuarPartida) {
      cartasUser.push(comprarCarta())
      desejaContinuarPartida(cartasUser,cartasPc);
   }else{
      finalizarPartida(valordasCartas,userString,cartasPc);
   }  
}

function finalizarPartida(valordasCartas,userString,cartasPc){
   let pontuacaoUsuario = valordasCartas;
   let pontuacaoComputador = cartasPc[0].valor+cartasPc[1].valor;
   if (pontuacaoUsuario > pontuacaoComputador) {
      console.log(`Suas cartas são ${userString}. Sua pontuação é ${pontuacaoUsuario}. \n
      As cartas do Computador são ${cartasPc[0].texto} e ${cartasPc[1].texto}. A pontuação do computador é ${pontuacaoComputador}. \n
      Você Ganhou!`)
   } else if (pontuacaoComputador > pontuacaoUsuario) {
      console.log(`Suas cartas são ${userString}. Sua pontuação é ${pontuacaoUsuario}. \n
      As cartas do Computador são ${cartasPc[0].texto} e ${cartasPc[1].texto}. A pontuação do computador é ${pontuacaoComputador}. \n
      O computador ganhou!`)
   } else if (pontuacaoUsuario === pontuacaoComputador) {
      console.log(`Suas cartas são ${userString}. Sua pontuação é ${pontuacaoUsuario}. \n
      As cartas do Computador são ${cartasPc[0].texto} e ${cartasPc[1].texto}. A pontuação do computador é ${pontuacaoComputador}. \n
      Empate!`)
   }
}