(function(){
    'uses strict'

angular
     .module("MyApp")
     .controller('mainController',controller);

     function controller(){
       var vm = this;
       vm.tarea;
       vm.listaTarea = [] ;
       vm.agregar = agregar;
       vm.borrar = borrar;

       function agregar(elemento)
       {
        vm.listaTarea.push(elemento);
        vm.tarea ="";
       }
    
      function borrar(index)
       {
          vm.listaTarea.splice(index,1);

       }

     }



})();