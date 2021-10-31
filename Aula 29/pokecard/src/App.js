import React, { useEffect, useState } from "react";
import axios from "axios";
import PokeCard from "./componentes/pokeCard";

function App() {
  const [pokeList, setPokeList] = useState([]);
  const [pokeName, SetPokeName] = useState("");

  changePokeName = event => {
    SetPokeName(event.target.value);
  };

  useEffect(() => {
    axios.get("https://pokeapi.co/api/v2/pokemon/?limit=151")
    .then((response) => {
      setPokeList(response.data.results)
    })
    .catch((err) => {
      alert(err.reponse.data);
    });
  },[])

  return (
    <div>
     <select onChange={changePokeName}>
          <option value={""}>Nenhum</option>
         {pokeList.map(pokemon => {
            return (
              <option key={pokemon.name} value={pokemon.name}>
                {pokemon.name}
              </option>
            );
          })}
        </select>
        {pokeName && <PokeCard pokemon={pokeName} />}
    </div>
  );
}

export default App;
