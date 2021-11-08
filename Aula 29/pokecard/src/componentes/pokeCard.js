import React, { useEffect, useState } from "react";
import axios from "axios";

export const PokeCard = () => {
    const [pokemon,setPokemon] = useState({});

    useEffect(() => {

        const pegarPokemon = async () =>{
            try{
                const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokeName}`)
                setPokemon(response.data)
            } catch(err) {
                console.log(err);
              };
        }

        pegarPokemon()
    },[pokemon])

    return (
        <div>
        <p>{pokemon.name}</p>
        <p>{pokemon.weight} Kg</p>
        {pokemon.types && <p>{pokemon.types[0].type.name}</p>}
        {pokemon.sprites && (
          <img src={pokemon.sprites.front_default} alt={pokemon.name} />
        )}
      </div>
    )




}
export default PokeCard;