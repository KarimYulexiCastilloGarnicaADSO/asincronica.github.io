/**Crea un bucle que realice llamadas asincrónicas utilizando async/await para procesar una
lista de elementos uno por uno. */

async function bucle(element) {
  return new Promise((resolver) => {
    setTimeout(() => {
      console.log(element);
      resolver(`listo`);
    }, 2000);
  });
}
async function recorrer() {
  let lista = ["1", "5", "9", "12", "24"];
  let respuesta = "";
  for (let element of lista) {
    respuesta = await bucle(element);
  }
  console.log("ok", respuesta);
}
recorrer();
