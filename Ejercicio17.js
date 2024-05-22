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
llamada()