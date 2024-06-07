/**Crear una función some que acepte un array y un callback y que:
• por cada elemento del array ejecute el callback pasándole dicho elemento como
argumento
• devuelva true si al menos una de las llamadas al callback devolvió true */

let array = [1, 2, 3, 4, 5, 10]
//Declaramos una variable array y la inicializamos con un arreglo que contiene los números 1, 2, 3, 4, 5 y 10.
function mayor(numero) {
    return numero >= 10
}
//Definimos una función llamada mayor que toma un parámetro numero.
//La función retorna true si numero es mayor o igual a 10 (numero >= 10) y false en caso contrario.
console.log(array.some(mayor))
//Utilizamos el método some en el arreglo array con la función mayor como argumento.
//El método some verifica si al menos uno de los elementos del array cumple con la condición definida por la función mayor.
//console.log imprime el resultado de array.some(mayor) en la consola.