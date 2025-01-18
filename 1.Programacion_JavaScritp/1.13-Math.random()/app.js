//VARIABLES

let numSecreto = Math.floor(Math.random()*10)+1; //Este seria el uso para un numero random que sera secreto
let numUser = 0;
let intento = 1;
let maximoIntento = 3;

//console.log(numSecreto) //Solo para verificar que numero secreto

while (numSecreto != numUser) {
  numUser = parseInt(prompt('Me indicas un numero entre 1 y 10 por favor!'));  //parseInt nos permite convertir el tipo de dato a Integer que seria Numero Entero , ya que lo que ingresaba,o era un string
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

// El uso de librerias en js es importante para usar o incorporar a tu pagina en este caso usaremos la libreria Math que es para formulas matematicas.
// la pagina a usar official esta en MDN : https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Math/random
/*
Para el uso de funciones dentro de Math se tiene que agregar un . y la funcion a llamar ejem :  Math.random() o Math.floor().

Math.random() : La función Math.random en JavaScript genera un número decimal aleatorio entre 0 (inclusivo) y 1 (exclusivo) de forma pseudoaleatoria. 
Esto significa que los números generados pueden estar en cualquier lugar entre 0 (inclusivo) y casi 1 (exclusivo), con una precisión de hasta 16 decimales. 
La función Math.random utiliza un valor interno inicial que generalmente se basa en la hora actual del sistema, generando números pseudoaleatorios.

Math.random()*10 : no arrojaria numero al azar hasta el 10, pero el problema con esto es
que nos arroja con decimal y tambien con 0.888 o 3.58383 , la cual el usuario no prodria adivinar.

Math.floor() : no permite eliminar el decimal , no realiza redondeo solo elimina el decimal, si tenemos 3.589 seria 3 o si tenemos 8.8888 seria a 8.


El uso de estas 2 funciones juntas o anidadas seria asi: 
Math.floor(Math.random()*10)
3

Pero como funciona? , es facil se toma desde el nucleo lo vemos paso a paso:
se ejecuta la funcion Math.random() que nos da resultado : 0.3584939
la cual lo multiplicamos x10 : 0.3584939 *10  = 3.584939
y el Math.floor() nos quita los decimales : Math.floor(3.584939) = 3

en la consola se podra interpretar asi: 

Math.random()
0.3584939

0.3584939 * 10
3.584939

Math.floor(3.584939)
3


PERO ahora nos damos cuenta que no llega hasta 10 y tambien da algunos resultados 0 (basicamente es de 0 a 9)
la cual en nuentro codigo pedios indicar al usuario un numero de 1 al 10
como solucionamos esto? , es facil le sumamos 1

Math.floor(Math.random()*10)+1 

asi que cuando salga 0 sumando 1 el 1 , ya seria 1
y cuando salga 9 , ya sumano 1 serian 10 


*/