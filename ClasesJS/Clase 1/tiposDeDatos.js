(function() {
   'use strict' 


// tipos primitivos
var miVariable; //undefined
    console.log("tipo Primitivo: ", typeof(miVariable));
    miVariable = 4;// number
    console.log("tipo Primitivo: ", typeof(miVariable));
    miVariable = "Un texto";// string
    console.log("tipo Primitivo: ", typeof(miVariable));
    miVariable = true; // boleano
    console.log("tipo Primitivo: ", typeof(miVariable));
    miVariable = null; //object
    console.log("tipo Primitivo: ", typeof(miVariable));

    // tipos complejos

    miVariable = [1,"texto", true] // objeto
    console.log("tipo complejo: ", typeof(miVariable));
    miVariable = {nombre: "José", edad:26, coloresFavoritos: ["azul", "Rojo"] }// objet
    console.log("tipo complejo: ", typeof(miVariable));
    miVariable = function (){};// function
    console.log("tipo complejo: ", typeof(miVariable));

})();