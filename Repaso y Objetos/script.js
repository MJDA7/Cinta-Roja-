//ECMA 5
var persona = "Mali";
//ECMA 6
let personaLet = ["", 2];//
const personaConst = "Mali"; //
personaLet = "Pablo";

//condición

const obj= {};
const arry = [];

arry.push("Mali");
//obj.assign();
/* Tipos de varialbes 
String "" `` 
Number 123456789
Boolean true/false
!+ = -
!- = +
*/

let isFun = true;
let isRain = true;

/*
if (isRain){
    alert("Lleva sombrilla");
} else {
    alert("Disfruta tu caminata");
}
*/
function nombreFuncion(parametro){

}

function nombreFuncion(parametro){
    return "Algo";
}

let perro = {
    nombre: "Ayudante de Santa",
    color: "Cafe",
    noPatas: 4,
    tieneDueño: true,
    ladrar(aQuien, estaDormido) {
        if(estadormido){
            return false; //si esta dormido aca también termina el codigo
        }
        if(aQuein){
            return true;
        }
            //console.log("guao, guao! quien eres?");
            return "No hay a quein ladrar";
            
    },

};
//Asignar una nueva propiedad a mi objeto
perro.noOjos = 2;
//Asignar un nuevo metodo al objeto
perro.respirar = function respirar(){
    console.log("Sniff");
}


console.log(perro.noPatas);
console.log(perro.ladrar());

if  (perro.ladrar("gato") === "esta dormido"){
        alert("Despierta!");
    //pedazo de codigo que haga algo si el perro ladra
} else if(perro.ladrar("gato") === "hay a quien ladrar"){
    console.log("Hay ese perro siempre de escandaloso");
} else if(perro.ladrar("gato") === "No hay a quein ladrar"){
    console.log("Y el perro");
}