/**Crea una Promise que se resuelva después de 3 segundos y luego imprima "Promise
resuelta" cuando se cumpla. */

let promesa = new Promise((resolve) => {
    setTimeout(() => {
        resolve("Promise resuelta")
    }, 3000)
})
promesa.then((despedida) => {
    console.log(despedida)
})