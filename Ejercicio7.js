/**Crear una función find que acepte un array y un callback y que:
 * • por cada elemento del array ejecute el callback pasándole dicho elemento como
    argumento
    • devuelva el elemento pasado como argumento del primer callback que devuelva true
    • sí ningún callback devuelve true, devuelva undefined
*/

let array = [11, 8, 15]
//Declaramos una variable array y la inicializamos con un arreglo que contiene los números 11, 8 y 15.
function mostrar(element) {
    return element < 10
}
//Definimos una función llamada mostrar que toma un parámetro element.
//La función retorna true si element es menor que 10 (element < 10) y false en caso contrario.
let menor = array.find(mostrar)
//Utilizamos el método find en el arreglo array con la función mostrar como argumento.
//El método find busca el primer elemento en el arreglo array que cumple con la condición definida por la función mostrar y lo retorna.
//Asignamos el resultado de array.find(mostrar) a la variable menor.
console.log(menor)
//Imprimimos el valor de menor en la consola.