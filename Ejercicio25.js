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

  const handler = {
    set(target, property, value) {
      if (typeof value === 'string') {
        // Alternativa 1: Expresión regular para eliminar espacios en blanco al inicio y al final
        value = value.replace(/^\s+|\s+$/g, '');

        // Alternativa 2: Método replace para eliminar espacios en blanco al inicio y al final
        // value = value.replace(/^\s*/, '').replace(/\s*$/, '');
      }

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

      if (!valid) {
        console.error(errorMessage);
        return false;
      }

      target[property] = value;
      return true;
    }
  };

  return new Proxy({}, handler);
}

// Ejemplo de uso
let validatedObject = createValidatedObject();

validatedObject.numeric = 123;          
validatedObject.numeric = " abc ";      
validatedObject.alphanumeric = "abc";   
validatedObject.alphanumeric = " 123 "; 
validatedObject.email = " test@test.com "; 
validatedObject.email = " test@.com ";     
validatedObject.date = " 2024-05-22 ";  
validatedObject.date = " not a date ";  
