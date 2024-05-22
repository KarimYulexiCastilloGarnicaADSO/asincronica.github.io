/**Crea tres Promises que se resuelvan después de diferentes intervalos de tiempo y luego
utilice Promise.all() para mostrar un mensaje cuando todas se hayan resuelto. */

let promesa = new Promise((resolve, reject) => {
  setTimeout(() => resolve("Primera promesa cumplida"), 3000)
  console.log(1)
});
let promesa2 = new Promise((resolve, reject) => {
  setTimeout(() => resolve("Hola"), 3000)
  console.log(2)
});
let promesa3 = new Promise((resolve, reject) => {
  setTimeout(() => resolve("xd"), 3000)
  console.log(3)
});
Promise.all([promesa, promesa2, promesa3])
  .then((values) => {
    console.log(values)
  })
  .catch((error) => {
    console.error('Error:', error);
  },)
