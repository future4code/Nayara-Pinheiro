import {HomePage,MatchesPage} from './paginas';
import { useState } from 'react';

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

  return (
   <div>
     {getPagina()}
     <button onClick={changePage}>{pageName === "home" ? "Ir para Matchers" : "Ir para Home"}</button>
     <button>Ir Limpar Matches</button>
   </div>
  );
}

export default App;
