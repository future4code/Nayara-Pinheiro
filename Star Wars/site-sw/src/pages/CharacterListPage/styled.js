import styled from "styled-components"

export const Container = styled.div`
    flex-direction:center;
    justify-content:center;
    text-align: center;
`

export const Tittle = styled.h1`
font-size: 60px;
`

export const CharacterCard = styled.div`
    border: 1px solid black;
    color:black;
    background: white;
    padding: 10px;
    margin: 10px;
    width: 300px;
    &:hover {
        cursor: pointer;
        background-color: lightblue;
    }
`