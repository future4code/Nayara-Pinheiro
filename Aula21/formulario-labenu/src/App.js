import './App.css';
import React from "react";
import styled from 'styled-components'
import Etapa1 from './componentes/Etapa1';
import Etapa2 from './componentes/Etapa2';
import Etapa3 from './componentes/Etapa3';
import Etapa4 from './componentes/Etapa4';

class App extends React.Component {
//   state = {
//     Etapa1: true,
//     Etapa2: false,
//     Etapa3: false,
//     Etapa4: false,
//   }

// mudancaDeTela = () => {

// }


  render (){
  return (
    <div className="App">
     <Etapa3/>
    </div>
  );
  }
}

export default App;
