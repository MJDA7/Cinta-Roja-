const axios = require("axios");

class Author{
    constructor(id, name, last_name, nacionalidad, biography, age, is_alive){
        this.id = id;
        this.name = name;
        this.last_name = last_name;
        this.nacionalidad = nacionalidad;
        this.biogrpahy = biogrpahy;
        this.age = age;
        this.is_alive = is_alive;
    }
}

function crearAutor(nombre, nacionalidad, biografía, género, edad){
    return newPromise((resolve, reject) => {
        axios.post("https://goodreads-devf-aaron.herokuapp.com/api/v1/authors/", {
            "name": nombre,
            "last_name": apellido,
            "nacionalidad": nacionalidad,
            "biography": biografia,
            "gender": genero,
            "age": edad
        })
        .then((response) => {
            if(response.status === 201){
                const {id, name, last_name, nacionalidad, biography, age, is_alive} = response.data;
                const authoer = new Autheor{id, name, last_name, nacionalidad, biography, age, is_alive};
                resolve(author);
        } else {
            resolve(null);
        }
    })
    .catch((error) {
             console.log(error);
            reject(new Error(error));
        }); 
    });
}
