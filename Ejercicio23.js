/**Realiza una llamada a un archivo local en formato json y maneja posibles errores utilizando
try/catch para mostrar un mensaje de error en caso de fallo. */

async function archivo() {
  try {
    let response = await fetch("Ejercicio23.json");
    if (!response.ok) {
      throw new Error('Error al cargar el archivo JSON');
    }
    const data = await response.json();
    console.log('Datos del archivo:', data);
  } catch (error) {
    console.error('Error al leer el archivo:', error.message);
  }
}

archivo();
