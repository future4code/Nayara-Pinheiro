import styled from "styled-components"

export const Container = styled.div`
    flex-direction:center;
    justify-content:center;
    text-align: center;
`

export const CharacterCard = styled.div`
    border: 1px solid black;
    color:black;
    text-align: center;
    flex-direction:center;
    justify-content:center;
    background: white;
    padding: 10px;
    margin: 10px;
    width: 300px;
    &:hover {
        cursor: pointer;
        background-color: lightblue;
    }
`