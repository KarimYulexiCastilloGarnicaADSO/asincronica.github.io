/**Crear una función find que acepte un array y un callback y que:
 * • por cada elemento del array ejecute el callback pasándole dicho elemento como
    argumento
    • devuelva el elemento pasado como argumento del primer callback que devuelva true
    • sí ningún callback devuelve true, devuelva undefined
*/

let array = [11, 8, 15]

function mostrar(element) {
    return element < 10
}

let menor = array.find(mostrar)

console.log(menor)