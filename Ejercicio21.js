/**Realiza tres Promises, algunas de las cuales se resuelvan y otras se rechacen. Utiliza
Promise.allSettled() para obtener información sobre el estado de todas las Promises. */

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
Promise.allSettled([promesa, promesa2, promesa3])
  .then((resuts) => {
    console.log(resuts)
  })
  .catch((error) => {
    console.error('Error:', error);
  },)