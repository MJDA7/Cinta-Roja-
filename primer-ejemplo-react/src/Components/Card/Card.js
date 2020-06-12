import React, {useState} from "react";

//estado: valor que puede cambiar a través del timpo
//ECMA 6 => module exports => require
//ECMA 7 => export => import from

function Card(props) {
    const [propiedad, setPropiedad] = useState("Me estan viendo OnO");
    return(
        <div className= "contenedor is-orange">
            <h2>{props.titulo}</h2>
            <div className="cuerpoContenedor">
                {props.texto}
            </div>
            <h4>{propiedad}</h4>
            <>
        </div>
    );
}

export default Card;

function devuelveBoton(){
    if (propiedad === "Me estas viendo OnO"){
        return <button onClick={() => {setPropiedad("Me estas mirando? >.<")}}>Sorpresa!</button>
    } 
        return <button onClick={() => {setPropiedad("Me estas viendo OnO")}}>Regresa al anterior texto</button>
    
}
