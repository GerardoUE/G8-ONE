
let numSecr = 0; 
let intento = 0;
let listasNumerosSorteados = [];



function asignarTextoElemento(elemento, texto){ //creamos las variables a usar, elemento y texto
    let elementoHTML = document.querySelector(elemento); //usamos elemento como variable, asi solo desde la invocacion usamos la etiqueta a usar
    elementoHTML.innerHTML = texto; //usamos texto, asi desde la invocacion ya colocamos texto 
}

// Recursividad : Una funcion se llame a si misma
function generarNumeroRandom(){ //se crea la funcion para generar un numero random
    let numeroGenerado =  Math.floor(Math.random()*10)+1; //se retorna el math 
    // si el numero generado esta incluido en la lista
    if (listasNumerosSorteados.includes(numeroGenerado)){ //includes barre o revisa la lista de numeroGenerado y nos devulve un true o false si existe o no
        return generarNumeroRandom(); //llamamos a esta misma funcion que empieze de nuevo y nos de otro numero.
    }else{ // si el numero generado no esta incluido en la lista
        listasNumerosSorteados.push(numeroGenerado); //ingresamos el numero que se genero y los agregamos a nuestra lista o array
        return numeroGenerado // nos devuelve el numero generado
    }
}

//NOTA: al usar la rescursividad al momento de no haber nuevo nuevos a ingresar , se genera un error.

function verficarNumero(){ //funcion que se esta usando en input, donde ingresaremos nuestro numero
    let numeroUsuario = parseInt(document.getElementById('valorUsuario').value); // estamos tomando el valor a ingresar en tag input  / el .value es que quiere obtener el valor que ingresamos.
    console.log(numSecr)

    if(numeroUsuario == numSecr){
        asignarTextoElemento('p',`Acertaste el numero en ${intento} ${intento == 1 ? 'vez' : 'veces'}`)
        document.getElementById('reiniciar').removeAttribute('disabled'); //borra el valor que tiene un elemento input a traves del id y lo vulve deshabilitado
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

//se cargan todos los parametros iniciales
function condicionesIniciales(){
    asignarTextoElemento('h1', 'Juego del numero Secreto'); //si lo vemos, al usar la funcion solo estamos ingresando los datos que queremos y la funcion ya lo hace el resto.
    asignarTextoElemento('p', 'Ingrese un numero del 1 al 10'); //tiene el mismo aspecto que elemento , texto / solo es ingresar los datos y este los reemplaza.
    numSecr = generarNumeroRandom();
    intento = 1;
}
condicionesIniciales()

function reiniciarJuego(){
    vaciarCaja();
    condicionesIniciales();
    document.querySelector('#reiniciar').setAttribute('disabled',true);
    
}