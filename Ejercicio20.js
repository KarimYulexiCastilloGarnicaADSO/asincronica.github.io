/**Crea tres Promises que se resuelvan después de diferentes intervalos de tiempo y luego
utilice Promise.all() para mostrar un mensaje cuando todas se hayan resuelto. */

let promesa = new Promise((resolve, reject) => {
  setTimeout(() => resolve("Primera promesa cumplida"), 3000)
  console.log(1)
});
//Se crea la primera promesa utilizando el constructor Promise.
//Dentro de la función de ejecutor de la promesa, se utiliza setTimeout para simular una operación asincrónica que se resolverá después de 3000 milisegundos (3 segundos).
//Se imprime el número 1 en la consola antes de que la promesa se resuelva.
let promesa2 = new Promise((resolve, reject) => {
  setTimeout(() => resolve("Hola"), 3000)
  console.log(2)
});
//Se crea la segunda promesa de manera similar a la primera, con un número 2 impreso en la consola antes de que se resuelva.
let promesa3 = new Promise((resolve, reject) => {
  setTimeout(() => resolve("xd"), 3000)
  console.log(3)
});
//Se crea la tercera promesa de manera similar a las anteriores, con un número 3 impreso en la consola antes de que se resuelva.
Promise.all([promesa, promesa2, promesa3])
  .then((values) => {
    console.log(values)
  })
  .catch((error) => {
    console.error('Error:', error);
  },)
//Se utiliza Promise.all() para esperar a que todas las promesas en el arreglo se resuelvan.
//Cuando todas las promesas se resuelven correctamente, se ejecuta el bloque de código dentro de .then(), que recibe un arreglo de valores resultantes de las promesas.
//En este caso, los valores se imprimen en la consola.
//Si alguna de las promesas se rechaza, se ejecuta el bloque de código dentro de .catch(), que maneja el error e imprime un mensaje de error en la consola.