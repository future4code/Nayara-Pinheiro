import React from "react"; 
import styled from 'styled-components';
import axios from "axios";
import ListasDeUsuarios from "./ListasUsusarios";


const Container = styled.div`
    display: block;
    justify-content: center;
    aliens-itens:center;
`
const url = "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users";

const headers = {
    headers: {
      Authorization: "nayara-pinheiro-banu"
    }
  }; 

class Labenusers extends React.Component {
    state = {
        listaDeUsuarios: [],
        nomeUsuario: "",
        emailUsuario: ""
    };

    componentDidMount() {
        this.pegarListaDeUsuarios();
      }

    pegarListaDeUsuarios = () => {
        axios
          .get(url, headers)
          .then((res) => {
            this.setState({ listaDeUsuario: res.data.result.list });
          })
          .catch((err) => console.log(err));
      };

    criarListaDeUsuarios = () => {
        const body = {
            nome:this.state.listaDeUsuarios
        };
        axios
      .post(url, body, headers)
      .then((res) => {
        console.log(res);
        this.setState({ nomeUsuario: "" });
        this.setState({ emailUsuario: "" });
        this.pegarPlaylists();
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
    // const  listaUsuarios = this.state.listaDeUsuarios.map((listaDeUsuarios) => {
    //     return <li key={listaDeUsuarios.id}>{listaDeUsuarios.nome}</li>;
    //   });

    return<>
        <Container>
            <h1>LABENUSERS</h1>
            <button onClick={ListasDeUsuarios}>Troca de Página</button>
            <h2>Criar usuário</h2>
            <input
            placeholder={'Nome'}
            value={this.state.nomeUsuario}
            onChange={this.onChangeNomeUsuario}
            />
            <input
            placeholder='Email'
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