import React from "react";
import { useState, useEffect } from "react";
import { getCharacterDetails, getPlanetDetails } from "../../services/request";
import { Container,Tittle} from "./styled";
import { Button , ButtonGroup } from "@chakra-ui/react";
import { Center } from "@chakra-ui/layout";


export default function CharacterDetailPage(props) {
    const [details, setDetails] = useState({})
    const [planet, setPlanet] = useState({})
    
    useEffect(() => {
        getCharacterDetails(props.url, setDetails)
    }, [props.url])

    useEffect(() => {
        getPlanetDetails(details.homeworld, setPlanet)
    }, [details.homeworld])

    return (
        <Container> 
            <Tittle>DETALHES DOS PERSONAGENS</Tittle>
            {details.name && planet.name ?
                <Center  display="grid"  padding="100px" >
                    <p>Nome: {details.name}</p>
                    <p>Planeta de origem: {planet.name}</p>
                </Center> :
                    <p>Carregando...</p>}
            <Button onClick={props.goToListPage}>Voltar para lista de personagens</Button>
        </Container>
       
    )

}