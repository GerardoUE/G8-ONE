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
  };
};

