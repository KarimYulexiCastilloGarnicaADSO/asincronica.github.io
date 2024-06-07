/**Realiza una llamada a un archivo local en formato json y maneja posibles errores utilizando
try/catch para mostrar un mensaje de error en caso de fallo. */

async function archivo() {
  try {
    let response = await fetch("Ejercicio23.json");
    //Se define una función asincrónica llamada archivo.
//Dentro de la función, se utiliza await para esperar a que la función fetch obtenga el archivo JSON "Ejercicio23.json". Esta función devuelve una promesa que se resuelve con la respuesta de la solicitud de red.
    if (!response.ok) {
      throw new Error('Error al cargar el archivo JSON');
    }
    //Se verifica si la respuesta de la solicitud es exitosa (response.ok devuelve true). Si la respuesta no es exitosa, se lanza un error utilizando throw new Error(). Este error será capturado por el bloque catch.
    const data = await response.json();
    //Si la respuesta es exitosa, se utiliza await para esperar a que se resuelva la promesa devuelta por response.json(), que convierte la respuesta en formato JSON. Esta promesa se resuelve con los datos del archivo JSON.
    console.log('Datos del archivo:', data);
    //Se imprime en la consola los datos del archivo JSON obtenidos correctamente.
  } catch (error) {
    console.error('Error al leer el archivo:', error.message);
  }
}
//Se capturan cualquier error que pueda ocurrir durante la ejecución del bloque try utilizando el bloque catch. Si ocurre un error, se imprime un mensaje de error en la consola.
archivo();
//Se llama a la función archivo() para iniciar el proceso de carga y procesamiento del archivo JSON.