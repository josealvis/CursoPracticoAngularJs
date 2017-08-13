(function(){
'uses strict'

angular.module("MyApp", ['ngRoute']);

angular
      .module("MyApp")
      .config(function($routeProvider) {
    $routeProvider
    .when("/", {
        templateUrl : "/app/views/home.html"
         })
      .when("/contactos", {
        templateUrl : "/app/views/contactos.html"
         })
        .when("/catalogo", {
        template: "<catalogo></catalogo>"
         }) ;


      });


})();