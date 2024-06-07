/**Escriba una función imprimirNumeros(desde, hasta) que genere un número cada segundo,
comenzando desde desde y terminando con hasta.
Haz dos variantes de la solución describiendo el paso a paso de cada una de ellas:
• Usando setInterval.
• Usando setTimeout anidado */

let desde = parseInt(prompt("Ingrese el numero en que empieza"))
let hasta = parseInt(prompt("Ingrese el numero en que termina"))
//Estas dos líneas piden al usuario que ingrese dos números: el número inicial (desde) y el número final 
//(hasta). La función prompt muestra una ventana emergente que solicita al usuario una entrada de texto. 
//parseInt convierte la entrada de texto en un número entero.

// function imprimirNumeros(desde, hasta) {
//   let contador = desde
//   //Aquí definimos la función imprimirNumeros que toma dos parámetros: desde y hasta.
//   //Declaramos una variable contador y la inicializamos con el valor de desde. Esta variable se usará para llevar la cuenta de los números que se imprimen.

//   const idIntervalo = setInterval(() => {
//     //Utilizamos setInterval para ejecutar una función cada 1000 milisegundos (1 segundo). setInterval devuelve un identificador único (guardado en idIntervalo)
//     // que se puede usar para detener el intervalo más tarde.
//     if (contador == hasta) {
//       clearInterval(idIntervalo)
//     }
//     //Dentro de la función del intervalo, verificamos si contador es igual a hasta.
//     //Si contador es igual a hasta, llamamos a clearInterval con idIntervalo para detener el intervalo y así dejar de ejecutar la función periódicamente.
//     console.log(contador)
//     //Imprimimos el valor actual de contador en la consola.
//     contador++
//     //Incrementamos el valor de contador en 1.
//   }, 1000) 
// }
// //La función pasada a setInterval se ejecutará cada 1000 milisegundos (1 segundo), imprimiendo el valor de contador y luego incrementándolo hasta que contador sea igual a hasta.
// imprimirNumeros(desde, hasta)
//Finalmente, llamamos a imprimirNumeros(desde, hasta) para iniciar el proceso usando los valores proporcionados por el usuario.






function imprimirNumeros(desde, hasta) {
  function imprimir(numero) {
    console.log(numero)
    //Aquí definimos la función imprimirNumeros que toma dos parámetros: desde y hasta.
    //Dentro de imprimirNumeros, definimos una función interna llamada imprimir que toma un parámetro numero. 
    //Esta función es responsable de imprimir el número actual en la consola.
    if (numero < hasta) {
      setTimeout(() => {
        imprimir(numero + 1)
      }, 1000)
    }
    else {
      console.log("Terminar")
    }
  }
  //Se imprime el número actual en la consola.
  //La función luego comprueba si numero es menor que hasta. Si es así, usa setTimeout para llamar a la función imprimir nuevamente después de 1 segundo (1000 milisegundos), incrementando numero en 1.
  //Si numero no es menor que hasta, se imprime "Terminar" en la consola. Esto marca el final de la secuencia.
  imprimir(desde)
}
imprimirNumeros(desde, hasta)
//Después de definir las funciones, llamamos a imprimir con el valor inicial desde para comenzar la secuencia.
//Finalmente, llamamos a imprimirNumeros(desde, hasta) para iniciar el proceso usando los valores proporcionados por el usuario.