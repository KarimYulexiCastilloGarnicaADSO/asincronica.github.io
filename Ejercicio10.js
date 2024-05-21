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
    return result;
}

let numbers = [1, 2, 3, 4, 5, 6];
let isEven = (num) => num % 2 === 0;

let takenNumbers = takeWhile(numbers, isEven);
console.log(takenNumbers); // [1, 2]

  