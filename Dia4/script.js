/*
Métodos de entrada o salida

alet()
console.log()
promt()
*/

//Funcion definida de una platilla de algo que podemos reutilizar en el código

//Saludar

//ECMA 5

/*
Definicion de una funcion
palabra  nombre de  Apertura que puede ir con o sin argumentos
reservada la funcion (parametro1, parametro2, parametro3)
*/

function nombreDeLaFuncion(parametroRecibido){
    //pedazo de codigo
    const numero = 3;
    const parametros = parametroRecibido;
    return parametros;
    //Sin una palabara return, el valor de la funcion va a ser undefined
};

//ECMA 6
//arrow function o función flecha
const nombreDeLaFuncionFlecha = () => {
    const numero = 1;
    //pedazo de código
    return numero; 
    //Existe una palabra reservada para que ni la funcion devuelva un valor
};

//Se puede asignar un valor a la funion

//Uso de operador ternario
const valorDeLaFuncion = nombreDeLaFuncion("parámetro") === undefined 
    ? "La funcion no contiene un valor de return" 
    : "La funcion retorna algo";

const valorDeLaFuncionFlecha = nombreDeLaFuncionFlecha();

console.log(valorDeLaFuncion);

const a; //SI solo la definio, "a" va a ser undefined

//Por buenas prácticas nuestras funcioens deben devoler algo
const calcularPromedio = (calificaciones) => {
    let suma = 0;

    for (const calificacion of calificaciones){
        suma += calificacion;
    }
    return suma/calificaciones.length;
};

const promedio = calcularPromedio([10, 5, 4]);
console.log(promedio);

//Podemos crear funciones asociadas a un objeto

//Lo podemos hacer en un objeto literal y en una calse

//Métodos

//El método sólo se va a poder utilizar con su objeto asociado

//objeto literal
const misifusObjetoLiteral = {
    edad: 13,
    nombre: "Misifus",
    maullar () {
        return "Miarramiau";
    },
    getName(){
        return this.nombre;
    }

};

console.log(misifusObjetoLiteral.getName());
//const edadMisifus = misifus.edad;
// console.log(misifus.edad);


//Definición de una clase
class Gato {
    constructor(edadDelGato,nombre) { //Definir los valores de las variables que tendrán todas las instancias de la calse
        this.edad = edadDelGato;
        this.nombre = nombre ? nombre : "gato";
    }
    getName(name){
       return this.nombre;
    }
};

// instancia de gato es una copia de valores independientes
//       (edadDelGato) es invocar al constructor

const misifusInstanciaDeUnaClase = new Gato (14);
const Misifus2 = new Gato(4, "Rayas");
const Misifus3 = new Gato(5);
const Misifus4 = new Gato(10);
const Misifus5 = new Gato(1);

console.log(misifusInstanciaDeUnaClase);
console.log(Misifus2);
console.log(Misifus3);
console.log(Misifus4);
console.log(Misifus5); 