/**Crear una función map que acepte un array y un callback y que:
• por cada elemento del array ejecute el callback pasándole dicho elemento como
argumento
• obtenga el resultado
• lo pushee a un nuevo array
• devuelva el array final con el resultado de cada una de las llamadas al callback. */

let array = [1, 2, 3, 4, 5]
//Declaramos una variable array y la inicializamos con un arreglo que contiene los números del 1 al 5.
let modificacion = array.map(function (callback) {
  return callback * 3
})
//Utilizamos el método map en el arreglo array.
//El método map crea un nuevo arreglo al aplicar una función a cada elemento del arreglo original.
//La función anónima que se pasa a map toma cada elemento del arreglo original (referido como callback en este caso) y retorna el resultado de multiplicarlo por 3.
console.log(array)
console.log(modificacion)
//Imprimimos el arreglo original array en la consola.
//Imprimimos el nuevo arreglo modificacion, que es el resultado de aplicar la función map al arreglo original, en la consola.