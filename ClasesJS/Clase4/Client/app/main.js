(function(){
'uses strict'

angular.module("MyApp", ['ngRoute']);

angular
      .module("MyApp")
      .config(function($routeProvider) {
    $routeProvider
    .when("/", {
        templateUrl : "main.htm"
    })
    .when("/red", {
        templateUrl : "red.htm"
    })
    .when("/green", {
        templateUrl : "green.htm"
    });
      
      });


})();