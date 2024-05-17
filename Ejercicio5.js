/**Crear una función every que acepte un array y un callback y que:
• por cada elemento del array ejecute el callback pasándole dicho elemento como
argumento
• devuelva true si todas las llamadas al callback devolvieron true */

let array = [12, 15, 19]

function multiplo (multiplo) {
    return multiplo % 3 === 0
}

function every(array, multiplo) {
    return array.every(multiplo)
}

let multiplos = every(array,multiplo)
let tres = array.filter(multiplo)

console.log(tres)
console.log(multiplos)    