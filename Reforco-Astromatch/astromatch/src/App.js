import {HomePage,MatchesPage} from './paginas';
import { useState } from 'react';
import axios from 'axios';
import { BASE_URL } from './constantes/baseUrl';


function App() {
  const [pageName, setPageName] = useState("home");

  const getPagina = () => {
    switch(pageName){
      case "home":
        return <HomePage/>
      case "matches":
        return <MatchesPage/>
      default:
        return <HomePage/>
    }
  };

  const changePage = () => {
    if(pageName ==="home") {
      setPageName("matches");
    }else{
      setPageName("home");
    }
  }

  const cleanMatchers = () => {
    const URL = `${BASE_URL}/clear`
      axios.put(URL)
        .then((res) => {
           alert("Limpeza realizada com sucesso!")
        })
        .catch((err) => {
            console.log(err.response)
        })
  }



  return (
   <div>
     {getPagina()}
     <button onClick={changePage}>{pageName === "home" ? "Ir para Matchers" : "Ir para Home"}</button>
     <button onClick={cleanMatchers}>Ir Limpar Matches</button>
   </div>
  );
}

export default App;
