/**Crea una Promise que se resuelva después de 3 segundos y luego imprima "Promise
resuelta" cuando se cumpla. */

let promesa = new Promise((resolve) => {
    setTimeout(() => {
        resolve("Promise resuelta")
    }, 3000)
})
//Se crea una nueva promesa utilizando el constructor Promise.
//Dentro del constructor, se define una función de ejecutor que toma un parámetro resolve. Esta función se ejecutará inmediatamente cuando se construya la promesa.
//Dentro de la función de ejecutor, se utiliza setTimeout para simular una operación asincrónica. Se espera 3000 milisegundos (3 segundos).
//Después de 3000 milisegundos, se resuelve la promesa llamando a la función resolve con el argumento "Promise resuelta".
promesa.then((despedida) => {
    console.log(despedida)
})
//Se llama al método .then() en la promesa promesa, que se ejecutará cuando la promesa sea resuelta exitosamente.
//El método .then() recibe una función de devolución de llamada que toma un parámetro despedida. Esta función se ejecutará cuando la promesa se resuelva, y el valor resuelto se pasará como argumento.
//Dentro de la función de devolución de llamada, imprimimos el valor resuelto ("Promise resuelta") en la consola.