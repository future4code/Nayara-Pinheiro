import React from "react";

export default function CharacterDetailPage(props) {
    return (
        <div> <h1>DETALHES DOS PERSONAGENS</h1>
        <button onClick={props.goToListPage}>Voltar para lista de personagens</button>
        </div>
       
    )

}