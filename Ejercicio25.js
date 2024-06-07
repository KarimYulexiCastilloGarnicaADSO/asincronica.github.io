/**Usar un proxy para la validación de los valores de propiedades
• Cuando declaremos que el atributo es numérico solo perimimos que ingresen
números
• Cuando declaremos que el atributo es alfanumérico solo permitimos que ingresen
letras
• Cuando declaremos que el atributo es un email, solo permitimos que ingresen
correos
• Cuando declaremos que el atributo es de tipo date, solo permitimos que ingresen
fechas
• Para todos los atributos no se puede ingresar espacios en blanco tanto al inicio como
al final de estos y se debe mostrar el error personalizado por consola */

function createValidatedObject() {
  const validationRules = {
    numeric: (value) => !isNaN(value) && typeof value === 'number',
    alphanumeric: (value) => /^[a-zA-Z]+$/.test(value),
    email: (value) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value),
    date: (value) => !isNaN(Date.parse(value))
  };
//Se define un objeto validationRules que contiene funciones de validación para diferentes tipos de datos
  const handler = {
    set(target, property, value) {
      //Se define un objeto handler que contiene un método set para manejar las asignaciones de propiedades al objeto proxy:
      if (typeof value === 'string') {
        // Alternativa 1: Expresión regular para eliminar espacios en blanco al inicio y al final
        value = value.replace(/^\s+|\s+$/g, '');

        // Alternativa 2: Método replace para eliminar espacios en blanco al inicio y al final
        // value = value.replace(/^\s*/, '').replace(/\s*$/, '');
      }
      //Dentro del método set, se realiza un preprocesamiento si el valor asignado es una cadena, eliminando los espacios en blanco al inicio y al final:
      let valid = true;
      let errorMessage = '';

      switch (property) {
        case 'numeric':
          valid = validationRules.numeric(Number(value));
          errorMessage = `Error: El valor para '${property}' debe ser un número.`;
          break;
        case 'alphanumeric':
          valid = validationRules.alphanumeric(value);
          errorMessage = `Error: El valor para '${property}' debe contener solo letras.`;
          break;
        case 'email':
          valid = validationRules.email(value);
          errorMessage = `Error: El valor para '${property}' debe ser un correo electrónico válido.`;
          break;
        case 'date':
          valid = validationRules.date(value);
          errorMessage = `Error: El valor para '${property}' debe ser una fecha válida.`;
          break;
        default:
          console.error(`Error: El tipo de atributo '${property}' no es soportado.`);
          return false;
      }
      //Luego, se lleva a cabo la validación del valor según el tipo de propiedad:
      if (!valid) {
        console.error(errorMessage);
        return false;
      }
      //Si la validación no pasa, se muestra un mensaje de error y se retorna false para indicar que la asignación no fue exitosa
      target[property] = value;
      return true;
    }
    //Si la validación pasa, se asigna el valor a la propiedad del objeto proxy y se retorna true para indicar que la asignación fue exitosa
  };
  //Se cierra el método set y el objeto handler
  return new Proxy({}, handler);
}
//Se define una función createValidatedObject que devuelve un nuevo objeto proxy creado a partir de un objeto vacío y el handler definido anteriormente
// Ejemplo de uso
let validatedObject = createValidatedObject();
//Se crea un nuevo objeto proxy llamado validatedObject utilizando la función createValidatedObject
validatedObject.numeric = 123;          
validatedObject.numeric = " abc ";      
validatedObject.alphanumeric = "abc";   
validatedObject.alphanumeric = " 123 "; 
validatedObject.email = " test@test.com "; 
validatedObject.email = " test@.com ";     
validatedObject.date = " 2024-05-22 ";  
validatedObject.date = " not a date ";  
//Se realizan una serie de asignaciones de propiedades al objeto validatedObject para demostrar cómo funciona la validación.