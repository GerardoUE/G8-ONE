/*
//Prueba de una Funcion de fecha , Arrow Function

//una estandar
function suma (a, b){
  return a + b
}

//arrow function

const suma = (a, b) =>{
  a + b
}

// inline

const suma = (a,b) => a + b

*/

// Me aburri asi que voy a hacer un verificador de login
let user = 'Gerardo'
let passUser = '';
let passSys = 'Hola';
let intentos = 0;

while (passUser != passSys){
  passUser = prompt(`Bienvenido ${user}, ingrese su password :`);

  if(passUser == passSys){
    alert(`Ingrese Exitoso, ingreso en ${intentos} ${intentos == 1 ? 'vez' : 'veces'}`)
  }else{
    alert('Vuelve a intentarlo.')

    intentos++
    if (intentos == 3){
    alert(`Superaste los maximos de ${intentos} intentos, vuelve a intentarlo mas tarde.`);
    break;
    }
  }
}