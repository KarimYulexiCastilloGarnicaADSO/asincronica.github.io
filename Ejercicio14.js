/**Define una función asincrónica que espere 1 segundo y luego devuelva una cadena que
diga "Operación completada". Utiliza async/await. */


async function esperarYDevolver() {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  return "Operación completada";
}
//Se declara una función asíncrona llamada esperarYDevolver().
//Dentro de la función, se utiliza await para pausar la ejecución hasta que se complete la promesa devuelta por setTimeout(resolve, 1000). Esta promesa se resuelve después de 1000 milisegundos, lo que crea un retraso de un segundo antes de continuar.
//Después de que se resuelve la promesa, se retorna la cadena "Operación completada".
esperarYDevolver().then((resultado) => {
  console.log(resultado); 
});
//Se llama a la función esperarYDevolver() y se encadena un .then() para manejar el resultado de la función asíncrona.
//Cuando la promesa devuelta por esperarYDevolver() se resuelve, el resultado se pasa a la función de devolución de llamada proporcionada a .then().
//Dentro de la función de devolución de llamada, simplemente imprimimos el resultado ("Operación completada") en la consola.