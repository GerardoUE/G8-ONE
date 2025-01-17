//alert('Hola Mundo'); //Nos parecer un mensaje de alerta en el navegador
/*
VARIABLES
let 'Tipo de variable modificable';
const 'Tipo de variable no modificable';
var 'Tipo de variable odificable que ya nso se usa'

numUser es el nombre de la variable donde guardamos datos (puede llamar asi o como quieres, la funcion de una variable es guardar, almacenar o reservar datos que se usaran despues)

Camel Case : es el nombre que se le da al nombre de variable que se usa de esta manera nombreUsuario 
cuando empieza la segunda plabra pegado en mayuscula.
*/
let numSecreto = 6;
let numUser = prompt('Me indicas un numero'); // con prompt Nos aparece un mensaje de ingresar un dato en el navegador, ese dato ingresado se guarda en la variable numUser

console.log(numUser); //Nos aparece el dto ingresado en la consola del navegador que se muestra presionando F12 , a eso se le lama imprimir y se ve en otros lenguajes mayor mente con print

//IF : se traduce como si , se usa como condicional para realizar una accion ejmp: Si numSecreto es igual a numUser se realizar una alerta con el mensaje 'Acertaste el numero 😁'

if (numSecreto == numUser){
  alert('Acertaste el numero 😁')
}

