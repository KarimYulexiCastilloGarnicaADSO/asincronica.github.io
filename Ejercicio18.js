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
llamada()
