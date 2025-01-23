//return en las funciones es para retornar las respuestas, es bueno colocarlo al final como buena practica.

let numSecr = generarNumeroRandom(); // se hace el llamado de la funncion en la variable . esta variable se le conoce como Variable Global.

console.log(numSecr)

function asignarTextoElemento(elemento, texto){ //creamos las variables a usar, elemento y texto
    let elementoHTML = document.querySelector(elemento); //usamos elemento como variable, asi solo desde la invocacion usamos la etiqueta a usar
    elementoHTML.innerHTML = texto; //usamos texto, asi desde la invocacion ya colocamos texto 
}

function generarNumeroRandom(){ //se crea la funcion para generar un numero random
    return Math.floor(Math.random()*10)+1; //se retorna el math 
// let numeroRamdon = Math.floor(Math.random()*10)+1;  // se puede crear una variable y hacerner el retorno, a eso se le conoce como variable de bloque o privada.
}

function intentoDeUsuario(){
    alert('Click desde la function')
}

asignarTextoElemento('h1', 'Juego del numero Secreto'); //si lo vemos, al usar la funcion solo estamos ingresando los datos que queremos y la funcion ya lo hace el resto.
asignarTextoElemento('p', 'Ingrese un numero del 1 al 10'); //tiene el mismo aspecto que elemento , texto / solo es ingresar los datos y este los reemplaza.