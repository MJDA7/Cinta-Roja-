let myPinguin = {
    nombre: "Captain Cook",
    origin: "Mr. Popper",
    author: "Richard and Florence Atwater",
    note: "Children's book",
   
  }
  //segundo punto 
  console.log(`Hola, soy un pingüino y mi nombre es ${myPinguin.nombre}`);
  
  //tercer punto
  myPinguin.puedeVolar= false;
  
  
  //cuarto punto
  myPinguin.graznar= function graznar() {
    console.log("kaww kaww!!");
    return true;
  }
  
  //cinco punto 
  
  myPinguin.saludar= function saludar() {
    console.log("Hola, soy un pingüino y mi nombre es"+ this.nombre);
    return true;
  }
  
  //seis punto 
  myPinguin.nombre = " Señor Pingu";
  
  myPinguin.saludar();
  
  //siete punto 
  myPinguin.volar = function volar(){
    if (this.puedeVolar == true){
      console.log("¡Puedo volar!");
      }
    else {
      console.log("No puedo volar :(");
    }
    return true;
  }
  myPinguin.volar();
  
  // ocho punto 
  
  myPinguin.puedeVolar= true;
  myPinguin.volar();
  
  
  //console.log(myPinguin);
  