(function(){
'use strict'

//cambio
var miArray = [];

var Numeros= [10,25,1,20,45,5];

var Nombre  = ["Jose", "Carlos", "Miguel", "Nathalie", "Sandra"];


//push
debugger

Nombre.push("Ana");
Nombre.push("Lexy");

 var newLength = miArray.push(1);
     newLength = miArray.push(24);
     miArray.push(55);

// splice eliminar elemento en  un array
var elementoBorrado = Nombre.splice(2, 1);
var elementosBorrados = Nombre.splice(2,2);
Nombre.splice(1,1);

// cambiar elemento con 
Numeros.splice(0,1, 5);

//indexOf lastIndexOf
debugger
var indexOf5 = Numeros.indexOf(5);
var indexOf200 =  Numeros.indexOf(100);
var lasIndex5 = Numeros.lastIndexOf(5);


// map


debugger
var newArray = Numeros.map(
function(val){
return val+2;
}
);

// forEach
debugger
Numeros.forEach(function(val, index){
 console.log(index+": ", val);
});





})();