/**Crear una función findIndex que acepte un array y un callback y que:
• por cada elemento del array ejecute el callback pasándole dicho elemento como
argumento
• devuelva el índice del elemento pasado como argumento del primer callback que
devuelva true
• sí ningún callback devuelve true, devuelva undefined */

let array = [10, 20, 30, 40, 5]

let mayor = (element) => element > 10

console.log(array.findIndex(mayor))