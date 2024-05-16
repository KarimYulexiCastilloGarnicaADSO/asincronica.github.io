/**Crear una función filter que acepte un array y un callback y que:
• por cada elemento del array ejecute el callback pasándole dicho elemento como
argumento
• sí dicho callback devuelve true, pushea el elemento a un nuevo array
• devuelva el array final con los elementos que pasaron el "filtro". */

let array = [1, 2, 3, 4, 5]
let par = (par) => par % 2 === 0
let numeros = array.filter(par)

// let elemento = array.filter(function (par) {
//   return callback + 2
// })


console.log(array)
console.log(numeros)