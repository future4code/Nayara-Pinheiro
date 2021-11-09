import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { BASE_URL } from "../constantes/base_url";
import { CharacterCard,Container,Tittle } from "./styled";
import { Center } from "@chakra-ui/layout";

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
            return <CharacterCard key={index}>{character.name}</CharacterCard>
        })
    }

    return (
        <Container> 
            <Tittle>LISTA DE PERSONAGENS</Tittle>
            <Center display="grid" >
            {showCharacters()}
            </Center>
        </Container>
       
    )

}