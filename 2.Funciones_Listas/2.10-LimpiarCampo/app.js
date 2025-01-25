//return en las funciones es para retornar las respuestas, es bueno colocarlo al final como buena practica.

let numSecr = generarNumeroRandom(); // se hace el llamado de la funncion en la variable . esta variable se le conoce como Variable Global.
let intento = 1;
console.log(numSecr)

function asignarTextoElemento(elemento, texto){ //creamos las variables a usar, elemento y texto
    let elementoHTML = document.querySelector(elemento); //usamos elemento como variable, asi solo desde la invocacion usamos la etiqueta a usar
    elementoHTML.innerHTML = texto; //usamos texto, asi desde la invocacion ya colocamos texto 
}

function generarNumeroRandom(){ //se crea la funcion para generar un numero random
    return Math.floor(Math.random()*10)+1; //se retorna el math 
// let numeroRamdon = Math.floor(Math.random()*10)+1;  // se puede crear una variable y hacerner el retorno, a eso se le conoce como variable de bloque o privada.
}

function verficarNumero(){ //funcion que se esta usando en input, donde ingresaremos nuestro numero
    let numeroUsuario = parseInt(document.getElementById('valorUsuario').value); // estamos tomando el valor a ingresar en tag input  / el .value es que quiere obtener el valor que ingresamos.

    if(numeroUsuario == numSecr){
        asignarTextoElemento('p',`Acertaste el numero en ${intento} ${intento == 1 ? 'vez' : 'veces'}`)
        vaciarCaja()
    }else{
        if(numSecr > numeroUsuario){
        asignarTextoElemento('p','El numero secreto es mayor')
        }else{
            asignarTextoElemento('p','El numero secreto es menor')
        }
    intento++
    vaciarCaja()
    }
    return;

}

function vaciarCaja(){
    document.querySelector('#valorUsuario').value = '';
}
