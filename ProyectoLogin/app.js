

function asignarTexto(elemento, texto){ 
  let elementoHTML = document.querySelector(elemento);
  elementoHTML.innerHTML = texto;
}

function condicionInicial() {
  asignarTexto('h1','Login')
  asignarTexto('p','Ingrese su usuario y contrasena')
}

condicionInicial();
