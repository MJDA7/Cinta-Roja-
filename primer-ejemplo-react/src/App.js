import React from 'react';
import './App.css';
import Navbar from "./Components/Navbar/Navbar";
import Card from "./Components/Card/Card";
import Search from "./Componentes/Search/search"

/*Todo componente recibe props que son las propiedades
//props = {
  prop1: valor,
}
definidas en el elemento JSX <App prop1= "valor1", prop2= "valor2" >
*/



function App(props) {
  return (
    <>
    <Navbar/>
    <Search/> {/*Self closing tag etiquetas que se autocierran*/ */}
    </>
  );
}

export default App;
