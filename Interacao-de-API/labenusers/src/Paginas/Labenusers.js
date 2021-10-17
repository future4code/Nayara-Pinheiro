import React from "react"; 
import styled from 'styled-components';
import axios from "axios";

const Container = styled.div`
    display: block;
    justify-content: center;
    aliens-itens:center;
`


class Labenusers extends React.Component {
    state = {
        nomeUsuario: "",
        emailUsuario: ""
    };

    criarListaDeUsuarios = () => {
      const url = "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users";
      const body = {
            name: this.state.nomeUsuario,
            email: this.state.emailUsuario
        };
      axios.post(url, body, {
        headers: {
         Authorization: "nayara-pinheiro-banu"
         }
      })
      .then((res) => {
        console.log(res);
        this.setState({ nomeUsuario: "" });
        this.setState({ emailUsuario: "" });
        alert("Usuário(a) cadastrado(a) com sucesso!")
      })
      .catch((err) => alert("Algo deu errado", err));
    };

    onChangeNomeUsuario = (event) => {
        this.setState({ nomeUsuario: event.target.value });
      };

      onChangeEmailUsuario = (event) => {
        this.setState({ emailUsuario: event.target.value });
      };


render (){


    return<>
        <Container>
            <h1>LABENUSERS</h1>
            <button onClick={this.props.irParaLista}>Troca de Página</button>
            <h2>Criar usuário</h2>
            <input
            placeholder={'Nome'}
            value={this.state.nomeUsuario}
            onChange={this.onChangeNomeUsuario}
            />
            <input
            placeholder={'Email'}
            type={'email'}
            value={this.state.emailUsuario}
            onChange={this.onChangeEmailUsuario}
            />
            <button onClick={this.criarListaDeUsuarios}>Criar</button>
        </Container>
    </>
    }
}

export default Labenusers;