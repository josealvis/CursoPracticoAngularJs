(function(){
    'uses strict'

angular
     .module("MyApp")
     .controller('mainController',controller);

     function controller(){

      var vm = this;
      vm.texto = "";
      vm.alertarTexto = alertarTexto;
      vm.listadoComida = ['Pan','Yogurt', 'Queso', 'Leche', 'Arroz'];
      vm.listadoComida2 = [
        {producto: 'Pan', precio: 10, fechaEx: new Date()},
        {producto: 'Yogurt', precio: 40, fechaEx: new Date()},
        {producto: 'Queso', precio: 100, fechaEx: new Date()},
        {producto: 'Leche', precio: 60, fechaEx: new Date()},
        {producto: 'Arroz', precio: 25, fechaEx: new Date()}
      ];
      vm.tarea;
      vm.listaTarea = [] ;
      vm.agregar = agregar;
      vm.borrar = borrar;

       function agregar(elemento){
        vm.listaTarea.push(elemento);
        vm.tarea ="";
       }
    
      function borrar(index){
          vm.listaTarea.splice(index,1);
       }



    
     
      function alertarTexto(){
      alert(vm.texto);
      }



     }



})();