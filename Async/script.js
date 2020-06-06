function getUsuarios(callback){
    const datos = [
        {nombre: "Mali", edad: "21"},
        {nombre: "Raul", edad: "25"},
        {nombre: "Edwin", edad: "27"},
    ];
    setTimeout(function(){
        //FuncionFlecha(datos, "Todo furula");
        callback(datos, "Todo furula");
        console.log("Esto fue despues del callback")
    }, 4000);
}

console.log("Inicio del programa! Hola a todos!");

const funcionFlecha = (data, texto) =>{ //Mi callback es mi función anónima
    console.log(data);
    console.log(texto);
    console.log("Dentro del callback");
};

console.log("Inicio del programa! Hola a todos!");
//Funcion flecha(data, texto);

getUsuarios(functionFlecha);


//Definir un arreglo de datos

const datos = ["nombre", "apellidos", "edad"];
const a = {
    prop1: 1,
    prop2: 2,

};

const b = {
    ... a,
    propb1: 10,
}

//a.nombre = "Mali",
//a[nombre] = "Mali",

const detDatos = (callback, datos_enviados)