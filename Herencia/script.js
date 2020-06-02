var dimensiones ={
    altura: 34,
    anchura: 455,
}

//console.log("Altura", dimensiones.altura)
//console.log("Anchura", dimensiones.anchura)

//Clases con Mayuscula

/*
class Poligono {
    constructor(figura, alto, ancho){
        //this: nos va a hacer referencia a una propiedad dentro de su clase
        this.figura = figura;
        this.alto = alto;
        this.ancho = ancho;
    }
    getName(){
        return this.figura;
    }
    getArea(){
        return this.alto * this.ancho;
    }
};

class Dibujo{
    constructor(figura){
        this.figura = figura;
    }
    getName(){
        return this.figura;
    } 
};
// new: nos va a ayudar a crear una instancia de la clase === "Objeto"

const rectangulo = new Poligono("rectangulo", 33, 44);

const cuadrado = new Poligono ("cuadrardo", 33, 34);

console.log(rectangulo.getName());
console.log(cuadrado.getName());

console.log("Area del poligono", rectangulo.getArea());

console.log(rectangulo.figura)

const dibujo1 = new Dibujo("Cuadro para niños");

console.log(dibujo1.figura);

*/

class Mascotas {
    constructor(patas, nombre){
        this.patas = patas;
        this.cerebro = true;
        this.nombre = nombre;
        console.log("Se creo la Mascota")
    }
    getNombre(){
        return this.nombre
    }
}

class Gato extends Mascotas{
    //Super es para asignar
    constructor(vidas){
        console.log("Se creo la Mascota");
    }
    getVidas(){
        return this.vidas
    }

}


class Perro extends Mascotas{
    constructor(raza, color, nombre){
        super(4, nombre);
        console.log("Se creo el perro");
        this.raza = raza;
        this. color = color;
    }
    getRaza(){
        return this.raza
    }
}


const Snoopy = new Perro("Beagle", "Negro y Blanco", "Snoopy");
console.log(Snoopy);

class SuperPerro extends Mascotas{
    constructor(raza, color, nombre, nickname, estaEncubierto){
    super(raza, color, nombre);
    console.log("Se creo el Super Perro");
    this.nickname = nickname;
    this. estaEncubierto = estaEncubierto;
}
getSaludo(){
    let mensaje = "";
    if(this.estaEncubierto){
        mensjae = "Soy ${this.nombre}";
    }else{
        mensaje = "Stoy ${this.nickname}";

    }
    }
}
const supercan = new ("Pastor", "Cafe con Blanco", "Firulais", "Supercan",true)
supercan.estaEncubierto = false;
console.log(supercan.getSaludo());