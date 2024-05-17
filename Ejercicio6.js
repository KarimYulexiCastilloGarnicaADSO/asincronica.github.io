/**Crear una función some que acepte un array y un callback y que:
• por cada elemento del array ejecute el callback pasándole dicho elemento como
argumento
• devuelva true si al menos una de las llamadas al callback devolvió true */

let array = [1, 2, 3, 4, 5, 10]

function mayor(numero) {
    return numero >= 10
}

console.log(array.some(mayor))