/**Crea tres Promises consecutivas, donde cada una se resuelva después de 1 segundo y
devuelva un número diferente. Luego, encadena las tres Promises para sumar los resultados
y mostrar el resultado final. */

new Promise(function (resolve, reject) {
  setTimeout(() => resolve(0), 1000)
})
//Se crea una nueva promesa utilizando el constructor Promise.
//Dentro de la función de ejecutor, se utiliza setTimeout para simular una operación asincrónica que se resolverá después de 1000 milisegundos (1 segundo).
//Después de 1000 milisegundos, la promesa se resuelve con el valor 0 utilizando resolve(0).
.then(function (resultado) {
  return new Promise((resolve, reject) => {
    console.log(`${resultado} + 2`)
    setTimeout(() => { resolve(resultado + 2) }, 1000)
    console.log("Primera promesa sumada")
  })
})
//Se encadena un método .then() a la primera promesa.
//La función de devolución de llamada dentro de .then() recibe el resultado de la primera promesa, que es 0.
//Dentro de esta función de devolución de llamada, se crea una nueva promesa.
//Se imprime en la consola el resultado de la primera promesa (0) junto con el texto " + 2".
//Se imprime "Primera promesa sumada" en la consola.
//Esta nueva promesa se resuelve con el resultado de sumar 2 al resultado de la primera promesa (0) después de 1000 milisegundos.
.then(function (resultado) {
  return new Promise((resolve, reject) => {
    console.log(resultado)
    console.log(`${resultado} + 8`)
    console.log("Segunda promesa sumada")
    setTimeout(() => { resolve(resultado + 8) }, 1000)
  })
})
//Se encadena otro .then() al resultado de la segunda promesa.
//La función de devolución de llamada dentro de este .then() recibe el resultado de la segunda promesa, que es el resultado de sumar 2 al resultado de la primera promesa.
//Dentro de esta función de devolución de llamada, se imprime el resultado de la segunda promesa.
//Se imprime en la consola el resultado de la segunda promesa junto con el texto " + 8".
//Se imprime "Segunda promesa sumada" en la consola.
//Esta nueva promesa se resuelve con el resultado de sumar 8 al resultado de la segunda promesa después de 1000 milisegundos.
.then(function (resultado) {
  return new Promise((resolve, reject) => {
    console.log(resultado)
    console.log(`${resultado} + 3`)
    console.log("Tercera promesa sumada")
    setTimeout(() => { resolve(resultado + 3) }, 1000)
  })
})
//Se encadena otro .then() al resultado de la tercera promesa de manera similar a los pasos anteriores.
//Esta nueva promesa se resuelve con el resultado de sumar 3 al resultado de la tercera promesa después de 1000 milisegundos.
.then(function (resolve) {
  console.log(`El resultado es: ${resolve}`)
})
//Se encadena otro .then() al resultado de la cuarta promesa.
//La función de devolución de llamada dentro de este .then() recibe el resultado de la cuarta promesa, que es el resultado de sumar 3 al resultado de la tercera promesa.
//Dentro de esta función de devolución de llamada, se imprime el resultado final en la consola junto con un mensaje.