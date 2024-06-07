/**Crea un bucle que realice llamadas asincrónicas utilizando async/await para procesar una
lista de elementos uno por uno. */

async function bucle(element) {
  //Se define una función asíncrona llamada bucle que toma un parámetro element:
  return new Promise((resolver) => {
    setTimeout(() => {
      console.log(element);
      resolver(`listo`);
    }, 2000);
  });
  //Dentro de bucle, se devuelve una nueva promesa que se resolverá después de un retraso de 2 segundos utilizando setTimeout:
  //setTimeout ejecuta una función después de un retraso especificado (en este caso, 2000 milisegundos o 2 segundos).
//Dentro de la función de setTimeout, se imprime el elemento que se pasa como argumento a la función bucle.
//Luego, se resuelve la promesa con la cadena "listo". Esto significa que la promesa se considerará resuelta y cualquier función await que esté esperando esta promesa continuará su ejecución.
}
async function recorrer() {
  //A continuación, se define otra función asíncrona llamada recorrer:
  let lista = ["1", "5", "9", "12", "24"];
  //En recorrer, se crea una lista de elementos llamada lista:
  let respuesta = "";
  //Se declara una variable llamada respuesta que se inicializa como una cadena vacía:
  for (let element of lista) {
    //Se utiliza un bucle for...of para recorrer cada elemento de la lista:
    respuesta = await bucle(element);
    //Dentro del bucle, se utiliza await para esperar a que la función bucle se resuelva para el elemento actual:
    //Esto detiene la ejecución de recorrer hasta que la promesa devuelta por bucle se resuelva.
//La variable respuesta se actualiza con el valor que se resuelve de la promesa devuelta por bucle.
  }
  console.log("ok", respuesta);
  //Después de que se complete el bucle, se imprime "ok" junto con el valor de respuesta:
}
recorrer();
//Finalmente, se llama a la función recorrer para iniciar el proceso de recorrer la lista y esperar a que se resuelvan todas las promesas generadas por bucle: