/**Crear una función find que acepte un array y un callback y que:
 * • por cada elemento del array ejecute el callback pasándole dicho elemento como
    argumento
    • devuelva el elemento pasado como argumento del primer callback que devuelva true
    • sí ningún callback devuelve true, devuelva undefined
*/

function find(element, callback) {
    for(const element of callback) {
        if (callback(element)) {
            return element
        }
    }
    return undefined
}

let array = [8, 2, 3, 40, 33, 50]
let multiploDe10 = x => x % 10 === 0;

const resultado = find(numeros, multiploDe10);
console.log(resultado); 

