import React, { useState, useEffect } from "react";
import Card from "./../Card/Card";
import "./search.css"
import { getByTitle } from "@testing-library/react";

function Search(){
    /* fragmento JSX <> </>*/
    //estado
const [texto, setTexto] = useState("");
const [gifs, setGifs] = useEffect([]);

const API_KEY = "OGX1QV0gNdeNbG34bh1WfUTnn0hQcl0a"
const obtenerGifs = () => {
    axios.get(`http://api.giphy.com/v1/gifs/search?q=${texto}&api_key=${API_KEY}&limit=6`)
    .then(({data})=>{
        //es un arreglo de objetos
        console.log(data.data);
        const data1 = [];
        for (let i=0, i< 5; i++){
            data1.push(data[i])
        }
        setGifs(data.data);
    })
    .catch((error)=>{
        console.log(error)
    })
}
//manejar evento
const handleChange = () => {
    //console.log("Esta cmabiando el input", event.target.value)
    //guardamos en el estado texto el valor de input
    setTexto(event.target.value);
    console.log(texto);
}
//primera vez (montar en el DOM) y cada vez que se acutalize
useEffect(() => {
    obtenerGifs();
    console.log("hubo un cambio en texto")
}, [texto]);

    return(
        <><div style={{display: "flex", alignItems: "center", flexDirection: "column"}}>
            <label>Buscador</label>
            <input type="text" placeholder="Escribe tu busqueda aquí" onChange= {handleChange}></input>
         </div>
         <div className="contenedorCards">
            <div>{(gifs.map((elemento)=>{
                return{
                    id: elemento.id,
                    origin: elemento.source_post_url,
                    titulo: elemento.title,
                    img: elemento.images.downsized_large.url
                }
                return <Card Key={gifs.id} titulo= {gifs.titulo} img= {gifs.img} texto={gifs.origin}/>
            }))}/></div>
            {/* <Card titulo="Card1" img="" texto= "Calor dentro de la card"/> */}
         </div>
        </>
    );
}
export default Search;