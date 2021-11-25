import React from "react";
import { useState, useEffect } from "react";
import { CharacterCard,Container,Tittle } from "./styled";
import { Center } from "@chakra-ui/layout";
import { getCharacterList} from "../../services/request"

export default function CharacterListPage(props) {
    const [characterList, setCharacterList] = useState([]);


    useEffect(() => {
        getCharacterList(setCharacterList)
    }, []);

    function showCharacters() {
        return characterList.map((character,index) => {
            return <CharacterCard onClick={()=> props.goToDetailsPage(character.url)} key={index}>{character.name}</CharacterCard>
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