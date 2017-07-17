(function(){
'use strict'


miFuncionConNombre("baa");

var result = multiplicacion(2, 20);

console.log("2 X 20 = ", result);


var miFuncion = function(nombre){
console.log(nombre);
};

miFuncion("Fooo");


function miFuncionConNombre(nombre){
console.log(nombre);
}

function multiplicacion(num1, num2){
return num1*num2;
}

// funciones recursivas


cuentaAtras(10);


function cuentaAtras(numero){
if(numero ===0){
return  numero;
}else{
console.log(numero);
cuentaAtras(numero-1);
}

}




function funcionInfinita(val){

console.log(val);
funcionInfinita(val+1);

}



})();