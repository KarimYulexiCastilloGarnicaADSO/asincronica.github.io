/**Crear una función filter que acepte un array y un callback y que:
• por cada elemento del array ejecute el callback pasándole dicho elemento como
argumento
• sí dicho callback devuelve true, pushea el elemento a un nuevo array
• devuelva el array final con los elementos que pasaron el "filtro". */

let array = [1, 2, 3, 4, 5]
//Declaramos una variable array y la inicializamos con un arreglo que contiene los números del 1 al 5.
let par = (par) => par % 2 === 0
//Declaramos una función flecha par que toma un parámetro par y retorna true si par es un número par (par % 2 === 0) y false en caso contrario.
//par % 2 devuelve el resto de la división de par entre 2.
//Si el resto es 0, el número es par
let numeros = array.filter(par)
//Utilizamos el método filter en el arreglo array.
//El método filter crea un nuevo arreglo con todos los elementos del arreglo original que pasan una prueba (definida por la función par).
//La función par se aplica a cada elemento del arreglo array, y solo los elementos para los cuales la función retorna true se incluyen en el nuevo arreglo numeros.


// let elemento = array.filter(function (par) {
//   return callback + 2
// })
console.log(array)
console.log(numeros)
//Imprimimos el arreglo original array en la consola.
//Imprimimos el nuevo arreglo numeros, que es el resultado de aplicar el método filter al arreglo original, en la consola.