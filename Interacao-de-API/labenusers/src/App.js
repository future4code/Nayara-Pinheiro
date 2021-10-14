import React from "react"; 
import Labenusers from "./Paginas/Labenusers";
import ListasDeUsuarios from "./Paginas/ListasUsusarios";

export default class App extends React.Component{
  state = {
    telaAtual:"cadastro"
  }

  escolheTela = () => {
    switch (this.state.telaAtual){
      case "cadastro":
        return <Labenusers/>
      case "lista":
        return <ListasDeUsuarios/>
      default:
        return <div>Erro! Página Não Encontrada!</div>
    }
  }


  render(){
    return(
      <div>
        {this.escolheTela}
      </div>
    )
  }
}
