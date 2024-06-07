/**La función incorporada setTimeout utiliza callbacks. Crea una alternativa basada en
promesas.
La función delay(ms) debería devolver una promesa. Esa promesa debería resolverse
después de ms milisegundos, para que podamos agregarle. then, así: */

function delay(ms) {
  
  return new Promise((resolve, reject) => {
    
    setTimeout(() => {
      
      if (ms === 2000) {
        reject("Se genero error")
      }
      else {
        resolve("Se ejecuto la promesa despues del timepo designado en el setTimeout");
      }
    
    }, ms);
  
  });
//La función delay toma un parámetro ms que representa la cantidad de milisegundos que se deben esperar antes de que la promesa se resuelva o sea rechazada.
//Dentro de la función delay, se crea una nueva instancia de Promise, que toma una función de ejecutor con dos parámetros: resolve y reject.
//Dentro de esta función de ejecutor, se utiliza setTimeout para esperar el número de milisegundos especificado por ms.
//Si ms es igual a 2000, la promesa se rechaza con el mensaje "Se generó un error".
//Si ms es diferente de 2000, la promesa se resuelve con el mensaje "Se ejecutó la promesa después del tiempo designado en el setTimeout".
}
delay(2000)

  .then((resultado) => {

    console.log(resultado)

  })
  .catch((err) => {

  console.log(err)

  })
  //Llamamos a la función delay pasando 2000 milisegundos como argumento. Esto crea una promesa que se resolverá después de 2000 milisegundos.
//Usamos .then() para manejar el caso en el que la promesa se resuelve correctamente. Si la promesa se resuelve, imprimimos el resultado en la consola.
//Usamos .catch() para manejar el caso en el que la promesa es rechazada. Si la promesa es rechazada, imprimimos el mensaje de error en la consola.