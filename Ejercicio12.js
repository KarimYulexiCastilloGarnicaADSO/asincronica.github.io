/**La función incorporada setTimeout utiliza callbacks. Crea una alternativa basada en
promesas.
La función delay(ms) debería devolver una promesa. Esa promesa debería resolverse
después de ms milisegundos, para que podamos agregarle. then, así: */

function delay(ms) {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve("Esto sirve");
      }, ms);
    });
  }
  
  // Ejemplo de uso:
  delay(3000).then(() => console.log("Se ejecutará después de 3 segundos"));
  
let _vPromise = _rPromise();
console.log(_vPromise)
delay(3000).then(() => console.log("se ejecutara ddespues de 3 segundos"))