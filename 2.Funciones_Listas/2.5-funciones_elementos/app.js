/*
let titulo = document.querySelector('h1');  //usaremos h1 , ponerlo entre comillas, recordar que es un elemnto string o tag o etiqueta.
titulo.innerHTML = 'Juego del numero Secreto.';

let parrafo = document.querySelector('p');
parrafo.innerHTML = 'Ingrese un numero del 1 al 10.'
*/
// FUNCION : es un proceso que realiza una tarea , es un bloque de codigo que va a realizar un tarea y puede o no retornar un valor.

//Vamos a crear una funcion que se use tanto para titulo y el parrafo. funcion standar


function asignarTextoElemento(elemento, texto){ //creamos las variables a usar, elemento y texto
    let elementoHTML = document.querySelector(elemento); //usamos elemento como variable, asi solo desde la invocacion usamos la etiqueta a usar
    elementoHTML.innerHTML = texto; //usamos texto, asi desde la invocacion ya colocamos texto 
    return;
}

function intentoDeUsuario(){
    alert('Click desde la function');
    return;
}

asignarTextoElemento('h1', 'Juego del numero Secreto'); //si lo vemos, al usar la funcion solo estamos ingresando los datos que queremos y la funcion ya lo hace el resto.
asignarTextoElemento('p', 'Ingrese un numero del 1 al 10'); //tiene el mismo aspecto que elemento , texto / solo es ingresar los datos y este los reemplaza.