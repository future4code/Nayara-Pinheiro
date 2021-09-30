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

const Selects = styled.select`
justify-content:center;
align-items: center;

`
  
  
class Etapa3 extends React.Component {
    state = {
        motivo: "",
        cursoComplementar: "",
};

onChangeMotivo = (event) => {
    this.setState({ motivo: event.target.value });
}

onChangeCursoComplementar = (event) => {
    this.setState({ cursoComplementar: event.target.value });
}


    render(){
        return(
    <Container>
        <h1>ETAPA 3 - INFORMAÇÕES GERAIS DE ENSINO</h1>
        <h3>5. Por que você não terminou um curso de graduação?</h3>
        <Input
            value={this.state.motivo}
            onChange={this.onChangeMotivo}
        /> 
        <h3>6. Você fez algum curso complementar?</h3>
        <Selects>
            <option valeu={"Nenhum"}>Nenhum</option>
            <option valeu={"Curso técnico"}>Curso técnico</option>
            <option valeu={"Curso de Inglês"}>Curso de Inglês</option>
        </Selects>
    </Container>            
        )
    }

}

export default Etapa3;