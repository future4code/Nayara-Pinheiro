import React from "react";
import styled from 'styled-components'
import Etapa2 from "./Etapa2";


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
const ProximaEtapa = styled.button`
  border-radius:5px;
  margin: 3px 150px 6px 4px;
  width: 160px;
  font-weight:bold;
  font-size:14px;
  `
const Selects = styled.select`
justify-content:center;
align-items: center;

`


class Etapa1 extends React.Component {
    state = {
          nome: "",
          idade: "",
          email: "",
          escolaridade: "", 
    };

    onChangeNome = (event) => {
        this.setState({ nome: event.target.value });
    }

    onChangeIdade = (event) => {
        this.setState({ idade: event.target.value });
    }

    onChangeEmail = (event) => {
        this.setState({ email: event.target.value });
    }

    onChangeEscolaridade = (event) => {
        this.setState({ escolaridade: event.target.value });
    }
    
    render(){
        return(
                <Container>
                    <h1>ETAPA 1 - DADOS GERAIS</h1>
                <h3>1. Qual o seu nome?</h3>
                 <Input
                value={this.state.nome}
                onChange={this.onChangeNome}
                /> 
                 <h3>2. Qual sua idade?</h3>
                <Input
                value={this.state.idade}
                onChange={this.onChangeIdade}
                 />
                 <h3>3. Qual seu e-mail?</h3>
                <Input
                value={this.state.email}
                onChange={this.onChangeEmail}
                 /> 
                 <h3>4. Qual a sua escolaridade?</h3>
                <Selects>
                <option valeu={"Ensiono Médio Incompleto"}>Ensiono Médio Incompleto</option>
                <option valeu={"Ensiono Médio Completo"}>Ensiono Médio Completo</option>
                <option valeu={"Ensiono Superior Incompleto"}>Ensiono Superior Incompleto</option>
                <option valeu={"Ensiono Superior Incompleto"}>Ensiono Superior Incompleto</option>
                 </Selects>
                 
                 <ProximaEtapa onClick={Etapa2}>
                   Próxima Etapa
                 </ProximaEtapa>
                 
                 </Container>

        )
    }

}

export default Etapa1;