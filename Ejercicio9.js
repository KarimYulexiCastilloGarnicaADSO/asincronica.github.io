/**Crear una función dropWhile que acepte un array y un callback y que:
• por cada elemento del array ejecute el callback pasándole dicho elemento como
argumento
• devuelva un array con los elementos a partir del primer callback que devolvió false
• (Es decir, crea un nuevo array y va recorriendo elemento por elemento, mientras el
callback de true, no los agrega, cuando el callback da false por primera vez agrega
todos los elementos restantes a partir de dicho elemento inclusive) */

function dropWhile(array, callback) {
    let resultado = [];
    let foundFalse = false;
    //Definimos una función llamada dropWhile que toma dos parámetros: array y callback.
    //Declaramos una variable resultado y la inicializamos como un arreglo vacío. Este será el arreglo que retornará la función.
    //Declaramos una variable foundFalse y la inicializamos como false. Esta variable se utiliza para indicar si se ha encontrado un elemento que no cumple con la condición del callback.
    for (let element of array) {
        if (!foundFalse && !callback(element)) {
            foundFalse = true;
        }
        if (foundFalse) {
            resultado.push(element);
        }
    }
    //Iniciamos un bucle for...of para iterar sobre cada element en el arreglo array.
    //Dentro del bucle, verificamos si foundFalse es false y el element no cumple con la condición del callback (!callback(element)).
    //Si se encuentra un element que no cumple con la condición, establecemos foundFalse en true.
    //Si foundFalse es true, agregamos el element actual al arreglo resultado utilizando resultado.push(element).
    return resultado;
}
//Después de que el bucle termina, retornamos el arreglo resultado.
const numeros = [50, 10, 20, 30, 40, 5];
const multiploDe10 = (x) => x % 10 === 0;

const final = dropWhile(numeros, multiploDe10);
console.log(final); 
//Declaramos un arreglo numeros que contiene los números 50, 10, 20, 30, 40 y 5.
//Declaramos una función flecha multiploDe10 que toma un parámetro x y retorna true si x es un múltiplo de 10 (x % 10 === 0) y false en caso contrario.
//Llamamos a la función dropWhile con numeros y multiploDe10 como argumentos y asignamos el resultado a la variable final.
//Imprimimos el valor de final en la consola.