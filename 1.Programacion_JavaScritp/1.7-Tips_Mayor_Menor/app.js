//VARIABLES
let numSecreto = 6;
let numUser = prompt('Me indicas un numero entre 1 y 10 or favor!');

console.log(numUser); 


if (numSecreto == numUser){
  alert(`Acertaste, el numero es : ${numUser}`);
} else{ //se realiza una condiconal anidada dentro de else 
  if(numSecreto > numUser){
    alert('El numero secreto es mayor')
  }else{
    alert('El numero secreto es menor')
  }
  //alert('No acertaste el numero 😔');
};