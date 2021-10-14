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
        return <Labenusers irParaLista={this.irParaLista} />
      case "lista":
        return <ListasDeUsuarios irParaCadastro={this.irParaCadastro}/>
      default:
        return <div>Erro! Página Não Encontrada!</div>
    }
  }

  irParaCadastro = () => {
    this.setState({telaAtual: "cadastro"})
  }

  irParaLista = () => {
    this.setState({telaAtual: "lista"})
  }



  render(){
    return(
      <div>
        {this.escolheTela()}
      </div>
    )
  }
}
