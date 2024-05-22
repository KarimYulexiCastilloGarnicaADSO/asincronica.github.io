/**Crea una función asincrónica que realice una llamada a un archivo local en formato json y
luego manipule los datos recibidos para mostrar información específica. */

async function obtenerDatos() {
  try {
    let respuesta = fetch("Ejercicio19.json")
    let datos = (await respuesta).json()
    return datos
  }
  catch (error) {
    console.error("Error al obtener los datos", error)
  }
}

async function mostrarEdadPrimeraPersona() {
  const datos = await obtenerDatos();
  if (datos && datos.personas && datos.personas.length > 0) {
    const primeraPersona = datos.personas[2];
    console.log(`La edad de ${primeraPersona.nombre} es ${primeraPersona.edad} años.`);
  } else {
    console.log('No se encontraron datos válidos.');
  }
}
mostrarEdadPrimeraPersona();