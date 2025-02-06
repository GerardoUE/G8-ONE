//VARIABLES
let numSecreto = 6;
let numUser = 0;

//WHILE : su traduccion en mientras.
while(numSecreto != numUser){ // Se lee : Mientras que numSecreto no sea igual a numUser este loops o bucle seguira ejecutandose.
  numUser = prompt('Me indicas un numero entre 1 y 10 or favor!'); 
  console.log(numUser); 

  if (numSecreto == numUser){
    alert(`Acertaste, el numero es : ${numUser}`);
  } else{
    if(numSecreto > numUser){
      alert('El numero secreto es mayor')
    }else{
      alert('El numero secreto es menor')
    }
  };
};