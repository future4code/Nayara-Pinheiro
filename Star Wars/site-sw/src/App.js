import React from "react";
import {useState} from "react"
import CharacterDetailPage from "./CharacterDetailPage/CharacterDetailPage";
import CharacterListPage from "./CharacterListPage/CharacterListPage";

function App() {
  const [currentPage, setCurrentPage] = useState("list")

  const selectPage = () =>{
    if(currentPage === "list"){
      return <CharacterListPage/>
    }else{
      return <CharacterDetailPage/>
    }
  }

  return (
    <div>
      <h1>Star Wars</h1>
      {selectPage()}
    </div>
  );
}

export default App;
