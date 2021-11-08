import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { BASE_URL } from "../constantes/base_url";

export default function CharacterListPage() {
    const [characterList, setCharacterList] = useState([]);

    function getCharacterList() {
        axios.get(`${BASE_URL}/people/`)
        .then((res) => setCharacterList(res.data.results))
        .catch((err) => console.log("Erro", err.message))
    };

    useEffect(() => {
        getCharacterList()
    }, []);

    function showCharacters() {
        return characterList.map((character,index) => {
            return <div key={index}>{character.name}</div>
        })
    }

    return (
        <div> 
            <h1>LISTA DE PERSONAGENS</h1>
            {showCharacters()}
        </div>
       
    )

}