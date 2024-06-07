/**. En el siguiente código hay una llamada programada setTimeout, luego se ejecuta un cálculo
pesado que demora más de 100 ms en finalizar.
¿Cuándo se ejecutará la función programada y por qué se ejecutará?
a) Después del bucle.
b) Antes del bucle.
c) Al comienzo del bucle.
 ¿Qué va a mostrar alert()? */

let i = 0 
//Declaramos una variable i y la inicializamos con el valor 0.
setTimeout(() => alert(i), 100)
//Utilizamos setTimeout para programar la ejecución de una función anónima después de 100 milisegundos. Esta función mostrará una alerta con el valor de i en ese momento.
for (let j = 0; j < 100000000; j++) {
  i++  
}
//Iniciamos un bucle for que se ejecuta 100 millones de veces (j va de 0 a 99,999,999).
//Dentro del bucle, incrementamos el valor de i en 1 en cada iteración.
/**La funcion programada se ejecuta despues del bucle y se ejecuta porque javascript es un lenguaje de un 
 * solo hilo por lo tanto primero se ejecuta el for y luego del tiempo de espera de 0.1 segundos y el alert 
 * nos muestra el 100000000 porque el valor de i al comienzo es de 0, y al pasar el bulcle y el tiempo el 
 * valor de i se modifica y por lo tanto toma el valor de 100000000 
 */