//VARIABLES

let numSecreto = 6;
let numUser = 0;
let intento = 1;
let palabraVeces = 'vez'

while (numSecreto != numUser) {
  numUser = prompt('Me indicas un numero entre 1 y 10 por favor!'); 
  if (numSecreto == numUser) {
          //Mensje de que acerto
    alert(`Acertaste, el numero es : ${numUser} , lo hiciste en ${intento} ${palabraVeces}`);
  } else{
    if (numSecreto > numUser) {
      alert('El numero secreto es mayor')
    }else{
      alert('El numero secreto es menor')
    }
    intento = intento + 1
    palabraVeces = 'veces'
    if(intento > 3){ //Utiliamos un if para tener un maximo de intento (si intendos es mayor a 3)
      alert('Obtuviste tus maximos intentos');
      break; //break es freno y seria parar , con esto paramos el bucle while
    }
  };
};

