//VARIABLES
let numSecreto = 6;
let numUser = prompt('Me indicas un numero');

console.log(numUser); 


  //La condicion se cumple si numScreto es igual a numUser
if (numSecreto == numUser){
  //Acetamos, la condicion se cumplio    //para usar variables en texto se usa ${variable} de esta manera e invoca la variable o codigo de Js
  alert(`Acertaste, el numero es : ${numUser}`); //remplazamos la comilla simple '' por las comillas invertidad `` para el uso de variable en texto
}
else{
  //No acertamos, la condicion no se cumplio
  alert('No acertaste el numero 😔');
};