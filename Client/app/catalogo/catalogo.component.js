(function(){
   'use strict'

function controller(){
 var vm = this;


   vm.productos= [
     {imgUrl:'/media/ProductsImg/001.jpg',nombre:"t-shirt",desc:"bla bla bla bla.",precio:400},
     {imgUrl:'/media/ProductsImg/002.jpg',nombre:"amiibo",desc:"bla bla bla bla.",precio:700},
     {imgUrl:'/media/ProductsImg/003.jpg',nombre:"otro",desc:"bla bla bla bla.",precio:60},
     {imgUrl:'/media/ProductsImg/004.jpg',nombre:"lo que sea",desc:"bla bla bla bla.",precio:20},
     {imgUrl:'/media/ProductsImg/005.jpg',nombre:"algo",desc:"bla bla bla bla.",precio:1200},

   ];




}

    angular.module('MyApp')
           .component('catalogo',{
               templateUrl: "/app/catalogo/catalogo.component.html",
               controller: controller,
               controllerAs: "vm"

           });


})()