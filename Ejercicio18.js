/**Después de realizar una llamada a un archivo local en formato json, utiliza el método then()
para filtrar los datos y mostrar solo los elementos que cumplan ciertos criterios (por ejemplo,
mostrar solo los nombres que comiencen con "A"). */

// const letra = x => x.nombres === nombre.toLowerCase().startsWith("a")
let llamada = function () {
  fetch("Ejercicio18.json")
    .then((response) => response.json())
    .then((data) => {
      console.log(data[0])
      let nombresFiltrados = data.filter((element) => element.nombres.startsWith("a"))
      console.log(nombresFiltrados.nombre)
    })
    // .catch((error) => {
    //   console.error("Error al cargar el archivo", error)
    // })
}
//Se define una variable llamada que contiene una función anónima.
//Dentro de la función, se utiliza fetch para realizar una solicitud de red para recuperar el archivo JSON "Ejercicio18.json".
//Se encadena una serie de métodos then para manejar la respuesta de la solicitud de red:
//.then((response) => response.json()): convierte la respuesta en formato JSON.
//.then((data) => { ... }): maneja los datos JSON obtenidos.
//En este bloque, se imprime el primer elemento de los datos en la consola usando console.log(data[0]).
//Luego, se filtran los nombres que comienzan con la letra "a" utilizando el método filter.
//Se intenta imprimir los nombres filtrados en la consola con console.log(nombresFiltrados.nombre). Sin embargo, hay un error en esta línea (que discutiré a continuación).
//Se proporciona un bloque catch (actualmente comentado) para manejar cualquier error que pueda ocurrir durante la solicitud de red.
llamada()
//Se llama a la función llamada, lo que activará el proceso de solicitud de red y el manejo de los datos resultantes.