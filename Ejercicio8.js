/**Crear una función findIndex que acepte un array y un callback y que:
• por cada elemento del array ejecute el callback pasándole dicho elemento como
argumento
• devuelva el índice del elemento pasado como argumento del primer callback que
devuelva true
• sí ningún callback devuelve true, devuelva undefined */

let array = [10, 20, 30, 40, 5]
//Declaramos una variable array y la inicializamos con un arreglo que contiene los números 10, 20, 30, 40 y 5.
let mayor = (element) => element > 10
//Definimos una función flecha llamada mayor que toma un parámetro element.
//La función retorna true si element es mayor que 10 (element > 10) y false en caso contrario.
console.log(array.findIndex(mayor))
//Utilizamos el método findIndex en el arreglo array con la función mayor como argumento.
//El método findIndex busca el primer índice en el arreglo array donde el elemento cumple con la condición definida por la función mayor y retorna ese índice.
//console.log imprime el resultado de array.findIndex(mayor) en la consola.