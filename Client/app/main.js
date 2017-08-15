(function(){
'uses strict'

angular.module("Myapp", ['ngRoute']);

angular
      .module("Myapp")
      .config(function($routeProvider) {
    $routeProvider
    .when("/", {
        templateUrl : "/app/views/home.html"
         })
      .when("/contacto", {
        templateUrl : "/app/views/contactos.html"
         })
        .when("/catalogos", {
        template: "<catalogo></catalogo>"
         }) ;


      });


})();
