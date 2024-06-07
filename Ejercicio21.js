/**Realiza tres Promises, algunas de las cuales se resuelvan y otras se rechacen. Utiliza
Promise.allSettled() para obtener información sobre el estado de todas las Promises. */

let promesa = new Promise((resolve, reject) => {
  setTimeout(() => resolve("Primera promesa cumplida"), 3000)
  console.log(1)
});
let promesa2 = new Promise((resolve, reject) => {
  setTimeout(() => resolve("Hola"), 3000)
  console.log(2)
});
let promesa3 = new Promise((resolve, reject) => {
  setTimeout(() => resolve("xd"), 3000)
  console.log(3)
});
//Se crean tres promesas (promesa, promesa2 y promesa3) utilizando el constructor Promise.
//Cada promesa utiliza setTimeout para simular una operación asincrónica que se resolverá después de 3000 milisegundos (3 segundos).
//Se imprime un número en la consola para cada promesa (1, 2 y 3 respectivamente).
Promise.allSettled([promesa, promesa2, promesa3])
  .then((resuts) => {
    console.log(resuts)
  })
  .catch((error) => {
    console.error('Error:', error);
  },)
  //Se utiliza Promise.allSettled() para esperar a que todas las promesas en el arreglo se resuelvan o se rechacen.
//Cuando todas las promesas se hayan resuelto o rechazado, se ejecuta el bloque de código dentro de .then(), que recibe un arreglo de objetos con el resultado de cada promesa.
//Cada objeto en el arreglo tiene las propiedades status (indicando si la promesa se resolvió o se rechazó) y value o reason (que contienen el valor resuelto o la razón del rechazo respectivamente).
//Se imprime este arreglo de resultados en la consola.
//Si ocurre un error durante la ejecución de Promise.allSettled(), se captura en el bloque .catch() y se imprime un mensaje de error en la consola.