//VARIABLES

let numSecreto = 6;
let numUser = 0;
let intento = 1;
//let palabraVeces = 'vez'

while (numSecreto != numUser) {
  numUser = prompt('Me indicas un numero entre 1 y 10 por favor!'); 
  if (numSecreto == numUser) {
          //Mensje de que acerto  // OPERADOR TERNARIO : es el unico operador que usa 3 operandos (condición ? expr1 : expr2)
    alert(`Acertaste, el numero es : ${numUser} , lo hiciste en ${intento} ${intento == 1 ? 'vez' : 'veces'}`); // Uso del OPERADOR TERNARIO : si la expresion es verdadera 'intento == 1 , se usa la expresion 1 'vez' de lo contrario devuelve el varlor de la exprecion 2 'veces'
  } else{
    if (numSecreto > numUser) {
      alert('El numero secreto es mayor')
    }else{
      alert('El numero secreto es menor')
    } 
    //uso de incrementadores
    // intento = intento + 1   (Se usa de una manera detallada)
    // intento += 1;           (Se actualizo a una manera mas simple )
    intento++;                //Se usa actualmente   
    
  //palabraVeces = 'veces'
    
    if(intento > 3){ //Utiliamos un if para tener un maximo de intento (si intendos es mayor a 3)
      alert('Obtuviste tus maximos intentos');
      break; //break es freno y seria parar , con esto paramos el bucle while
    }
  };
};

