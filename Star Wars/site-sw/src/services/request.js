import axios from "axios";
import { BASE_URL } from "../constantes/base_url";


export function getCharacterList(saveData) {
    axios.get(`${BASE_URL}/people/`)
    .then((res) => saveData(res.data.results))
    .catch((err) => console.log("Erro", err.message))
};

export const getCharacterDetails = (url, saveData) => {
    axios.get(url)
        .then((response) => {
            saveData(response.data)
        })
        .catch((error) => console.log(error.message))
};

export const getPlanetDetails = (url, saveData) => {
    axios.get(url)
        .then((response) => {
            saveData(response.data)
        }).catch((error) => console.log(error.message))
};