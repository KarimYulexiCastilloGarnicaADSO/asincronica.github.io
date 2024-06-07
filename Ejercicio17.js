/**Realiza una llamada a un archivo local Muestra en formato json, luego muestre los datos
obtenidos en la consola. */

let llamada = function () {
  setTimeout(() => {
    fetch("Ejercicio17.json")
    .then((response) => response.json())
      .then((data) => {
      console.log(data)
      })
      .catch((error) => {
      console.error("Error al cargar el archivo", error)
    })
  }, 2000)
}
//Se define una variable llamada que contiene una función anónima.
//Dentro de la función, se utiliza setTimeout para esperar 2000 milisegundos (2 segundos) antes de ejecutar el bloque de código que sigue.
//Dentro de setTimeout, se realiza una solicitud de red utilizando fetch para recuperar el archivo JSON "Ejercicio17.json".
//Después de que la solicitud de red se completa, se encadena una serie de métodos then para manejar la respuesta.
//.then((response) => response.json()): convierte la respuesta en formato JSON.
//.then((data) => { console.log(data) }): imprime los datos JSON en la consola.
//.catch((error) => { console.error("Error al cargar el archivo", error) }): maneja cualquier error que ocurra durante la solicitud de red y lo imprime en la consola.
llamada()
//Se llama a la función llamada, lo que activará el proceso de solicitud de red después de un retraso de 2000 milisegundos.