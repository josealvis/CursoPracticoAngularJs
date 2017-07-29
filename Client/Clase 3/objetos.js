(function(){
"use strict"

var carro = {
    marca: "tesla",
    modelo: "x",
    ano: 2017,
    
    encendido: function(){
        var mensaje = "Su "+this.marca+" esta encendido.";
     console.log(mensaje);

    }

}

var carro1 =  new Carro("Tesla");
var carro2 =  new Carro("Honda");

carro1.encendido();
carro2.encendido();




function Carro(marca){
this.marca = marca;
this.modelo = "X";

this.encendido=  function(){
        var mensaje = "Su "+this.marca+" esta encendido.";
     console.log(mensaje);

    }

}

/*
for(var propiedad  in carro){

    console.log(carro[propiedad]);
}
*/
})();