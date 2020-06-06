const request = require("request"); //referirse a una libreria que esta en nuestro package.json

function recibirData(error, response, body){
    //console.log(error);
    console.log(response.statusCode); //200
    const bodyJSON = JSON.parse(body);// JSON.parse convierte a mi string en un objeto de JS.
    //console.log(bodyJSON);
    /*
    for (let i = 0; i <data.results.length; i++){
        console.log(data.result[i].name);
    }
    */
   //generar nuevo Arreglo
   const nuevoArreglo = data.results.map((elemento) => {
       return {
           nombrePersonaje: elemento.name,
           genero: elemento.gender
       };
    });
    console.log(elemento.name);
    return nuevoArreglo;

/*
for(const elemento of data.results){
    console.log(elemento.name)
}
*/
};
request("https://pokeapi.co/api/v2/pokemon/ditto/", recibirData);

//node index.js

