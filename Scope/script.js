let programaGlobal = "Master";

function cinta(programaGlobal){
    const programa = "Cinta Roja" + programaGlobal;
    return programa;
}

programa = cinta(programaGlobal);
console.log(programa);



//Destrucutración
//Embeber

const persona = {
    nombre: "Mari",
    fechaDeNacimiento: "29/11/2001",
    perro: {
        nombrePerro: "Firulais",
        fechaDeNacimiento: "01/01/2000",
        talla: 1.50,
        datosCasa: {
            calle: "Avenida Perros",
            telefono: "518123530377",
        }
    }
};

//ECMA 5
//const edad = persona.edad;
//const nombre = persona.nombre;
//const perro = persona.perro.nombre;

//ECMA 6 descucturación de objetos
//const { edad, nombre, perro: {nombrePerro}, perro: {datosCasa: { telefono, calle } }, perro } = persona;
const { edad, nombre, perro: { nombrePerro, datosCasa : { telefono, calle } } } = persona;

console.log(telefono);
console.log(calle);
console.log(nombrePerro);
//console.log(perro);


//ECMA 5
//               0   1, ...resto
const edades = ["10", "20", "30", 40, "50"];
const edadMario = edades [0];
const edadJuan = edades [1];

//Destructurar un arreglo

const [edadMario, edadJuan,,,furiaDeTitanes] = edades;
console.log(edadMario);
console.log(edadJuan);
//console.log(resto);
console.log(furiaDeTitanes);
