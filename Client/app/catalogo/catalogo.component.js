(function(){
   'use strict'

function controller(){
 var vm = this;
 vm.agregarCarrito = agregarCarrito;
 vm.carrito= [];


   vm.productos= [
     {id: 1,imgUrl:'/media/ProductsImg/001.jpg',nombre:"t-shirt",desc:"bla bla bla bla.",precio:400},
     {id: 2,imgUrl:'/media/ProductsImg/002.jpg',nombre:"amiibo",desc:"bla bla bla bla.",precio:700},
     {id: 3,imgUrl:'/media/ProductsImg/003.jpg',nombre:"otro",desc:"bla bla bla bla.",precio:60},
     {id: 4,imgUrl:'/media/ProductsImg/004.jpg',nombre:"lo que sea",desc:"bla bla bla bla.",precio:20},
     {id: 5,imgUrl:'/media/ProductsImg/005.jpg',nombre:"algo",desc:"bla bla bla bla.",precio:1200},

   ];


   function agregarCarrito(productoId){
     var elemento  =vm.productos.filter(function(producto){
       return producto.id == productoId;
     })

     vm.carrito.push(elemento);

   }



}

    angular.module('MyApp')
           .component('catalogo',{
               templateUrl: "/app/catalogo/catalogo.component.html",
               controller: controller,
               controllerAs: "vm"

           });


})()