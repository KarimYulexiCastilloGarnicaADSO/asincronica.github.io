/**Crear una función every que acepte un array y un callback y que:
• por cada elemento del array ejecute el callback pasándole dicho elemento como
argumento
• devuelva true si todas las llamadas al callback devolvieron true */

let array = [12, 15, 19]
//Declaramos una variable array y la inicializamos con un arreglo que contiene los números 12, 15 y 19.
function multiplo (multiplo) {
    return multiplo % 3 === 0
}
//Definimos una función llamada multiplo que toma un parámetro multiplo.
//La función retorna true si multiplo es un múltiplo de 3 (multiplo % 3 === 0) y false en caso contrario.
function every(array, multiplo) {
    return array.every(multiplo)
}
//Definimos una función llamada every que toma dos parámetros: array y multiplo.
//La función retorna el resultado de aplicar el método every al array con la función multiplo.
//array.every(multiplo) verifica si todos los elementos del array pasan la prueba implementada por la función multiplo. Si todos los elementos son múltiplos de 3, retorna true; de lo contrario, retorna false.
let multiplos = every(array,multiplo)
//Declaramos una variable multiplos y la inicializamos con el resultado de llamar a la función every con array y multiplo como argumentos.
let tres = array.filter(multiplo)
//Declaramos una variable tres y la inicializamos con el resultado de aplicar el método filter al array usando la función multiplo.
//array.filter(multiplo) crea un nuevo arreglo con todos los elementos del array que son múltiplos de 3, es decir, aquellos para los que multiplo retorna true.
console.log(tres)
console.log(multiplos)   
//Imprimimos el arreglo tres en la consola.
//Imprimimos el valor de multiplos en la consola. 