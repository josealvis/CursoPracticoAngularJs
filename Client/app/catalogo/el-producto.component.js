(function(){
   'use strict'

function controller(){
 var vm = this;
 
}

    angular.module('MyApp')
           .component('elProducto',{
               templateUrl: "/app/catalogo/el-producto.component.html",
               controller: controller,
               controllerAs: "vm",
               bindings:{
                   imgUrl: '<',
                   nombre: '<',
                   desc: '<',
                   precio: '<'
               }

           });


})()