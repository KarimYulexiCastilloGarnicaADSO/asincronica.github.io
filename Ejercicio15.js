/**Crea una Promise que se rechace después de 2 segundos y captura el error para imprimir
"Error: Promise rechazada". */

let promesa = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject(new Error("Promise rechazada"))
  }, 2000)
})
//Se crea una nueva promesa utilizando el constructor Promise.
//Dentro de la función de ejecutor pasada al constructor, se utiliza setTimeout para simular una operación asincrónica que toma 2 segundos.
//Después de 2000 milisegundos, se llama a la función reject con un nuevo objeto Error que tiene el mensaje "Promise rechazada".
promesa.catch((error) => {
  console.error(error.message)
})
//Se encadena un método catch a la promesa promesa. Este método se ejecutará si la promesa es rechazada.
//Cuando la promesa es rechazada, el argumento del catch (en este caso, error) será el objeto Error que se pasó a reject.
//Dentro de la función de devolución de llamada del catch, se imprime el mensaje de error (error.message) en la consola usando console.error.