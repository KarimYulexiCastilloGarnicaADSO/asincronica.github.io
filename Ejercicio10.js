/**Crear una función takeWhile que acepte un array y un callback y que:
• por cada elemento del array ejecute el callback pasándole dicho elemento como
argumento
• devuelva un array con los elementos hasta el primer callback que devolvió false
• (Inverso del dropWhile) */

function takeWhile(arr, callback) {
    let result = [];

    for (const element of arr) {

      if (!callback(element)) {
        break;
      }
      result.push(element);
    }
    //Iteramos sobre cada elemento del arreglo de entrada arr utilizando un bucle for...of.
    //Para cada elemento, verificamos si el resultado de llamar a la función de prueba callback con ese elemento es false. Si lo es, rompemos el bucle for con break, ya que hemos alcanzado un elemento que no cumple con la condición.
    //Si el elemento pasa la prueba, lo agregamos al arreglo result utilizando result.push(element).
    return result;
}
//Iteramos sobre cada elemento del arreglo de entrada arr utilizando un bucle for...of.
//Para cada elemento, verificamos si el resultado de llamar a la función de prueba callback con ese elemento es false. Si lo es, rompemos el bucle for con break, ya que hemos alcanzado un elemento que no cumple con la condición.
//Si el elemento pasa la prueba, lo agregamos al arreglo result utilizando result.push(element).
//Esta es una función llamada takeWhile que toma dos argumentos: arr (un arreglo) y callback (una función de prueba).
//Dentro de la función, inicializamos una variable llamada result como un arreglo vacío. Este arreglo almacenará los elementos tomados del arreglo de entrada.
let numbers = [1, 2, 3, 4, 5, 6];
let isEven = (num) => num % 2 === 0;

let takenNumbers = takeWhile(numbers, isEven);
console.log(takenNumbers); // [1, 2]
//Creamos un arreglo llamado numbers que contiene los números del 1 al 6.
//Definimos una función de prueba llamada isEven, que retorna true si un número es par y false si es impar.
//Llamamos a la función takeWhile pasando el arreglo numbers y la función isEven como argumentos, y asignamos el resultado a la variable takenNumbers.
//Imprimimos el resultado en la consola, que contendrá los números tomados del arreglo numbers hasta que se encuentre un número impar. En este caso, el resultado será [1, 2].