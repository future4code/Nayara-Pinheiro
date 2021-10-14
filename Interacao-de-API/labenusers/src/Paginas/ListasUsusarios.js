import React from "react"; 
import styled from 'styled-components';
import axios from "axios";

class ListasDeUsuarios extends React.Component {
    render(){
        return(
            <div>
            <h2>Lista de Usuários</h2>
            <button onClick={this.props.irParaCadastro}>Troca de Página</button>
            </div>
        )
    }
}
export default ListasDeUsuarios;