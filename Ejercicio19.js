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
//Se define una función asíncrona obtenerDatos que utiliza un bloque try...catch para manejar errores.
//Dentro del bloque try, se realiza una solicitud de red para obtener el archivo JSON "Ejercicio19.json" utilizando fetch. Esta solicitud devuelve una promesa.
//Luego, se utiliza await para esperar a que la promesa se resuelva y se obtengan los datos de la respuesta en formato JSON.
//Estos datos JSON se devuelven desde la función obtenerDatos.
//Si hay algún error durante la obtención de los datos, se captura en el bloque catch y se imprime un mensaje de error en la consola.
async function mostrarEdadPrimeraPersona() {
  const datos = await obtenerDatos();
  if (datos && datos.personas && datos.personas.length > 0) {
    const primeraPersona = datos.personas[2];
    console.log(`La edad de ${primeraPersona.nombre} es ${primeraPersona.edad} años.`);
  } else {
    console.log('No se encontraron datos válidos.');
  }
}
//Se define otra función asíncrona mostrarEdadPrimeraPersona que espera a que se resuelva la promesa devuelta por obtenerDatos utilizando await.
//Luego, se verifica si los datos obtenidos son válidos y si hay al menos una persona en el arreglo personas.
//Si los datos son válidos y hay al menos una persona, se accede a la primera persona en el arreglo y se muestra su nombre y edad en la consola.
//Si no se encuentran datos válidos o no hay personas en el arreglo, se imprime un mensaje indicando que no se encontraron datos válidos
mostrarEdadPrimeraPersona();
//Se llama a la función mostrarEdadPrimeraPersona para iniciar el proceso de obtención de datos y mostrar la edad de la primera persona en la consola.