(function(){
   'use strict'

    angular.module('MyApp')
           .factory('dataService', dataService )

    function  dataService($http){
        var provider ={
            getProductos : getProductos,
            getProductosServer: getProductosServer
        };

     return provider;

    function getProductosServer(){
      return   $http.get('/service').then(
            function(data){
                return data.data;
            },
            function(err){
                console.log(err);
                alert(err.statusText);
            });
    }

    function getProductos(){
            var data= [
           {id: 1,imgUrl:'/media/ProductsImg/001.jpg',nombre:"t-shirt",desc:"bla bla bla bla.",precio:400},
           {id: 2,imgUrl:'/media/ProductsImg/002.jpg',nombre:"amiibo",desc:"bla bla bla bla.",precio:700},
           {id: 3,imgUrl:'/media/ProductsImg/003.jpg',nombre:"otro",desc:"bla bla bla bla.",precio:60},
           {id: 4,imgUrl:'/media/ProductsImg/004.jpg',nombre:"lo que sea",desc:"bla bla bla bla.",precio:20},
           {id: 5,imgUrl:'/media/ProductsImg/005.jpg',nombre:"algo",desc:"bla bla bla bla.",precio:1200},
           {id: 6,imgUrl:'/media/ProductsImg/005.jpg',nombre:"algo",desc:"bla bla bla bla.",precio:1200},
             ];
            return  data;
        }


    }              


})();