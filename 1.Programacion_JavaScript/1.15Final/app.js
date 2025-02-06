//VARIABLES
let numMax = 100;
let numSecreto = Math.floor(Math.random()*numMax)+1; //Este seria el uso para un numero random que sera secreto
let numUser = 0;
let intento = 1;
let maximoIntento = 6;

//console.log(numSecreto) //Solo para verificar que numero secreto

while (numSecreto != numUser) {
  numUser = parseInt(prompt(`Me indicas un numero entre 1 y ${numMax} por favor!`));  //parseInt nos permite convertir el tipo de dato a Integer que seria Numero Entero , ya que lo que ingresaba,o era un string
  // console.log(typeof(numUser)) //typeof nos indica que tipo de dato es y nos damos cuenta que nuestro usuario ingresba tipo de dato string asi que lo vamos a cambiar

  if (numSecreto == numUser) {
          //Mensje de que acerto                                           // Operador Ternario para la palabra a escoger, vez o veces                                  
    alert(`Acertaste, el numero es : ${numUser} , lo hiciste en ${intento} ${intento == 1 ? 'vez' : 'veces'}`); 
  }else{
    if (numSecreto > numUser) {
      alert('El numero secreto es mayor')
    }else{
      alert('El numero secreto es menor')
    } 
    intento++;     //Incrementamos los intentos         
    if(intento > maximoIntento){ //Utiliamos un if para tener un maximo de intento (si intendos es mayor a 3)
      alert('Obtuviste tus maximos intentos');
      break; //break es freno y seria parar , con esto paramos el bucle while
    }
  };
};