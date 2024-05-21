/**Define una función asincrónica que espere 1 segundo y luego devuelva una cadena que
diga "Operación completada". Utiliza async/await. */


async function esperarYDevolver() {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  return "Operación completada";
}

esperarYDevolver().then((resultado) => {
  console.log(resultado); 
});


