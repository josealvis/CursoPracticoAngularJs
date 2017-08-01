# Curso práctico FrontEnd con AngularJs

Este es el proyecto para el curso de AngularJs.


## Práctica Numero 1.

Realizar un  hola mundo que imprima en consola tus siguientes datos:
* Nombre.
* Profesión.
* Edad.
* Nivel de conocimientos de programación del 1 al 10.
* Expectativas  que tienes del cuerso.
> Requerimientos del código:
>- Use variables
>- Use el comando `Console.log();`
>- Agrege como colaborador a jalvis1491@gmail.com
>- Fecha de limite de entrega 19/07/2017 

## Ejemplo

```javascript
var nombre = "José Alvis"

//El comando console.log puede recibir varios parametros separados por ','
//Por lo que podemos pasar un string con la descripción junto a la variable que se va a imprimir.
console.log("Nombre: ", nombre);
//Nombre: José Alvis
```

## Practica 2 : par o impar

Define una función que reciba un numero x como parametro, e imprima los numeros del 0 al numero x,
señalando si son par o impar.

> Requerimientos del código:
>- Defina una `funcion` llamada 'imprimirNumeros'.
>- Use un bucle `FOR`.
>- Use el condicional `IF` para determinar si el numero es par o impar.


## Ejemplo

```javascript

imprimirNumeros(3);
//debe imprimir en consola:
// 1 impar
// 2 par
// 3 impar 


```
## Practica 3 : Array numeros pares

Define una función que  reciba como parametro  un número x y esta devuelva un array con los numeros pares 
del 0 al número x.

> Requerimientos del código:
>- Defina una `funcion` llamada 'numeroPares'.
>- Definir una variable dentro de la funcion llamada 'arrayPar'.
>- Use un bucle `FOR`.
>- Use el condicional `IF` para determinar si el numero es par.
>- Use `push` para agregar valores a 'arrayPar'.
>- Use `return` para devolver el array 'arrayPar'.


## Ejemplo

```javascript

var newArrayPar = numeroPares(100);
// la función debe devolver: [2,4,6,8,10,12,...,100]. 

//ejemplo
function numeroPares(numero){
    var arrayPar = [];
   // lógica para definir los números pares.
   //...
    return  arrayPar;
}


```
## Practica 4 : Mascota

Crea un objeto que represente a un  perro, el cual debe tener las siguientes propiedades: nombre, raza, añoNacimiento, sexo.

Define los siguientes métodos para el perro:
* Ladrar(El cual debe imprimir un texto).
* Comer(El cual debe imprimir un texto).
* getEdad(El cual debe imprimir la edad según la añoNacimiento).
* getNombreYRaza(Que impirma las propiedades nombre y raza).

> Requerimientos del código:
>- Usar una función constructora .
>- La función debe recibir el nombre, la raza, el añoNacimiento  y el sexo como parametros .

## Ejemplo

```javascript
 var perro1 = new Perro("Toby", "rottweiler", 2010, "Macho");

 var edad = perro1.getEdad();
// debe devolver 7 .

```

## Practica 5 : Pokedex

Utilizando el archivo Js [pokedex.js](ClasesJS/Clase3/pokedex.js) Escribe un algoritmo que haga los siguiente:

* Imprimir todos los pokemones de tipo 'fire'.
* Imprimir todos los pokemones que tiene defensa > 55.
* Imprimir todos los pokemones de tipo 'grass' y que tengan evolución.
* Imprimir todos los pokemones con su nombre  y su número  de identificación .







## Documentación

* [Programa del curos ](https://docs.google.com/document/d/1j3U61KuTUJPq7oczKixI14C_hE8reU2We5R_ZkwTryo/edit?usp=sharing) :closed_book:
* [Presentación #1](https://docs.google.com/presentation/d/1VKzNc8qd0Ahcj_voUKiXnWOR8HCrm_6ndgEeQyFYxSY/edit?usp=sharing) :closed_book:
* [Presentación Objetos](https://docs.google.com/presentation/d/11qYio7S2bobqWcVd-HqLx3n_3q20sNKlbC9BwAcotw8/edit?usp=sharing) :closed_book:

### Videos
* [clonar repositorio git con Visual Studio Code](https://www.youtube.com/watch?v=VOwyH2-VCVY) :movie_camera: