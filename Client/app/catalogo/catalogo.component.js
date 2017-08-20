(function(){
   'use strict'

function controller(dataService){
 var vm = this;
 vm.agregarCarrito = agregarCarrito;
 vm.carrito= [];


   vm.productos= [];
   getProductos();


   function agregarCarrito(productoId){
     var elemento  =vm.productos.filter(function(producto){
       return producto.id == productoId;
     })

     vm.carrito.push(elemento);

   }

   
    function getProductos(){
          dataService.getProductosServer()
                     .then(success)
                     .finally(completed);

    function success(data){
       vm.productos= data;
    }
    function completed(){
      console.log("La peticion finalizo.");
    }


    }



}

    angular.module('MyApp')
           .component('catalogo',{
               templateUrl: "/app/catalogo/catalogo.component.html",
               controller: controller,
               controllerAs: "vm"

           });


})()