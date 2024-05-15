/**Escriba una función imprimirNumeros(desde, hasta) que genere un número cada segundo,
comenzando desde desde y terminando con hasta.
Haz dos variantes de la solución describiendo el paso a paso de cada una de ellas:
• Usando setInterval.
• Usando setTimeout anidado */

let desde = parseInt(prompt("Ingrese el numero en que empieza"))
let hasta = parseInt(prompt("Ingrese el numero en que termina"))

// function imprimirNumeros(desde, hasta) {
//   let contador = desde
  
//   const idIntervalo = setInterval(() => {
    
//     if (contador == hasta) {
//       clearInterval(idIntervalo)
//     }
//     console.log(contador)

//     contador++
    
//   }, 1000) 
// }
// imprimirNumeros(desde, hasta)

function imprimirNumeros(desde, hasta) {
  function imprimir(numero) {
    console.log(numero)

    if (numero < hasta) {
      setTimeout(() => {
        imprimir(numero + 1)
      }, 1000)
    }
    else {
      console.log("Terminar")
    }
  }
  imprimir(desde)
}
imprimirNumeros(desde, hasta)
