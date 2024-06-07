/**Crear un objeto proxy usando la clase Proxy */

const persona = {
  nombre: "",
  apellido: "",
  edad: 0
}
//Se define un objeto persona con tres propiedades (nombre, apellido y edad), inicializadas con valores predeterminados:
const manejador = {
  set(obj, prop, valor) {
    //Se define un objeto manejador que contiene un método set, utilizado para interceptar y controlar las asignaciones de propiedades al objeto persona:
    if (Object.keys(obj).indexOf(prop) === -1) {
      //Dentro del método set, se comprueba si la propiedad que se intenta asignar existe en el objeto persona:
      //Object.keys(obj) devuelve un arreglo con las claves del objeto obj.
//indexOf(prop) busca la propiedad prop en el arreglo de claves. Si no se encuentra, devuelve -1.
//Si la propiedad no existe en el objeto persona, se muestra un mensaje de error y se retorna.
      return console.error(`la propiedad "${prop}" no existe en el objeto persona`)
    }

    if (
      (prop === "nombre" && prop === "apellido") && !(/^[A-Za-zÑñÁáÉéÍíÓóÚú\s]+$/g.test(valor))
    ) {
      //Luego, se verifica si el valor asignado a las propiedades nombre y apellido contiene solo letras y espacios en blanco, utilizando una expresión regular:
      //^[A-Za-zÑñÁáÉéÍíÓóÚú\s]+$ es una expresión regular que verifica si el valor contiene solo letras y espacios en blanco.
//Si el valor no cumple con la expresión regular y la propiedad es nombre o apellido, se muestra un mensaje de error y se retorna.
      return console.error(`la propiedad "${prop}" solo acepta letras y espacios en blanco`)
    }
    obj[prop] = valor
    //Si pasa todas las validaciones, se asigna el valor a la propiedad del objeto persona:
  }
}
//Se cierra el método set y el objeto manejador:
const karim = new Proxy(persona, manejador)
//Se crea un objeto Proxy llamado karim que envuelve al objeto persona y utiliza el objeto manejador para controlar las operaciones de asignación:
karim.nombre = "Karim"
karim.apellido = "Castillo"
karim.edad = 17
karim.twitter = "@Karim"
//Se asignan valores a las propiedades nombre, apellido, edad y twitter del objeto karim:
console.log(karim)
//Se imprime el objeto karim en la consola para ver los resultados de las asignaciones:
console.log(persona)
//Se imprime el objeto persona original en la consola para verificar que solo el objeto karim ha sido modificado: