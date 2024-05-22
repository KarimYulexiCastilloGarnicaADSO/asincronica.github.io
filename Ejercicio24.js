/**Crear un objeto proxy usando la clase Proxy */

const persona = {
  nombre: "",
  apellido: "",
  edad: 0
}

const manejador = {
  set(obj, prop, valor) {
    if (Object.keys(obj).indexOf(prop) === -1) {
      return console.error(`la propiedad "${prop}" no existe en el objeto persona`)
    }

    if (
      (prop === "nombre" && prop === "apellido") && !(/^[A-Za-zÑñÁáÉéÍíÓóÚú\s]+$/g.test(valor))
    ) {
      return console.error(`la propiedad "${prop}" solo acepta letras y espacios en blanco`)
    }
    obj[prop] = valor
  }
}

const karim = new Proxy(persona, manejador)
karim.nombre = "Karim"
karim.apellido = "Castillo"
karim.edad = 17
karim.twitter = "@Karim"
console.log(karim)

console.log(persona)


