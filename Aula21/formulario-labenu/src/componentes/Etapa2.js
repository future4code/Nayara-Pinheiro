import React from "react";
import styled from 'styled-components'

const Container = styled.div`
  flex-direction:center;
  justify-content:center;
  `

const Input = styled.input`
  background-color: white;
  border-radius:5px;
  border: 1px solid lightgray;
  width: 180px;
  height: 25px;
  `


class Etapa2 extends React.Component {
    state = {
        cursando: "",
        unidadeDeEnsino: "",
  };

  onChangeCursando = (event) => {
      this.setState({ cursando: event.target.value });
  }

  onChangeUnidadeDeEnsino = (event) => {
      this.setState({ unidadeDeEnsino: event.target.value });
  }


    render(){
        return(
    <Container>
        <h1>ETAPA 2 - INFORMAÇÕES DO ENSINO SUPERIOR</h1>
        <h3>5. Qual curso?</h3>
        <Input
            value={this.state.cursando}
            onChange={this.onChangeCursando}
        /> 
        <h3>6. Qual a unidade de ensino?</h3>
        <Input
            value={this.state.unidadeDeEnsino}
            onChange={this.onChangeunidadeDeEnsino}
        />
    </Container>            
        )
    }

}

export default Etapa2;