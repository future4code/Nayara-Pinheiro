import React from "react"; 
import styled from 'styled-components';
import axios from "axios";

const CardUsuario = styled.div`
    border: 1px solid black;
    padding: 10px;
    margin: 10px;
    width:300px;
    display: flex;
    justify-content: space-between;
`

class ListasDeUsuarios extends React.Component {
    state ={
        listaDeUsuarios: [],
    }

    componentDidMount() {
        this.pegarListaDeUsuarios();
      }

    pegarListaDeUsuarios = () => {
        const url ="https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users"
        axios.get(url, {
              headers: {
                Authorization: "nayara-pinheiro-banu"}
        })
          .then((res) => {
            this.setState({ listaDeUsuario: res.data});
          })
          .catch((err) => {
              alert("Ocorreu um problema, tente novamente!")
          });
      };

      deletarUsuario = (id) => {
          const url = `https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/${id}`
        axios.delete(url, {
            headers: {
                Authorization: "nayara-pinheiro-banu"}
        })
        .then((res) => {
            alert("Usuário(a) deletado(a) com  sucesso!");
            this.pegarListaDeUsuarios()
          })
          .catch((err) => {
              console.log(err.response.data)
          });
    }

    render() {
     const listaUsuarios = this.state.listaDeUsuarios.map((user) => {
        return(
        <CardUsuario key={user.id} >
            {user.name}
            <button onClick={() => this.deletarUsuario(user.id)}>X</button>
         </CardUsuario>) 
      });

        
        return(
            <div>
            <h2>Lista de Usuários</h2>
            <button onClick={this.props.irParaCadastro}>Troca de Página</button>
            {listaUsuarios}
            </div>
        )
    }
}
export default ListasDeUsuarios;