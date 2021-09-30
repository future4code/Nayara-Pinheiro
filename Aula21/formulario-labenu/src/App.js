import './App.css';
import React from "react";
import styled from 'styled-components'
import Etapa1 from './componentes/Etapa1';
import Etapa2 from './componentes/Etapa2';
import Etapa3 from './componentes/Etapa3';
import Etapa4 from './componentes/Etapa4';

const Container = styled.div`
  justify-content:center;
`

const Botao = styled.button`
  border-radius:5px;
  margin: 3px 150px 6px 4px;
  width: 160px;
  font-weight:bold;
  font-size:14px;
`

class App extends React.Component {
  state = {
    etapa: 1,
  }

  renderizaEtapa = () => {
       switch (this.state.etapa) {
        case 1: 
          return <Etapa1 />;
        case 2:
          return <Etapa2 />;
        case 3:
          return <Etapa3 />;
         default:
          return <Etapa4 />;
  };
}

irParaProximaEtapa = () => {
  this.setState({etapa: this.state.etapa + 1});
}

  render() {
    return (
      <Container>
      {this.renderizaEtapa()}
      <Botao onClick = {() => this.irParaProximaEtapa()}>
      Próxima Etapa
      </Botao>  
      </Container> 
     )
  }
}

export default App;
