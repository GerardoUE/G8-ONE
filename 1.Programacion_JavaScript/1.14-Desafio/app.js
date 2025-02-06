// Desafíos finales:

//    Crea un programa que utilice console.log para mostrar un mensaje de bienvenida.
console.log('Hola Bienvenido.');

//    Crea una variable llamada "nombre" y asígnale tu nombre. Luego, utiliza console.log para mostrar el mensaje "¡Hola, [tu nombre]!" en la consola del navegador.
let nombre = 'Gerardo';
console.log(`Hola, ${nombre}`);

//    Crea una variable llamada "nombre" y asígnale tu nombre. Luego, utiliza alert para mostrar el mensaje "¡Hola, [tu nombre]!".
alert(`Hola, ${nombre}`);

//    Utiliza prompt y haz la siguiente pregunta: ¿Cuál es el lenguaje de programación que más te gusta?. Luego, almacena la respuesta en una variable y muestra la respuesta en la consola del navegador.
let lenguaje = prompt('¿Cuál es el lenguaje de programación que más te gusta?');
console.log(`El lenguaje que te gusta es : ${lenguaje}` );

//    Crea una variable llamada "valor1" y otra llamada "valor2", asignándoles valores numéricos de tu elección. Luego, realiza la suma de estos dos valores y almacena el resultado en una tercera variable llamada "resultado". Utiliza console.log para mostrar el mensaje "La suma de [valor1] y [valor2] es igual a [resultado]." en la consola.
let valor1 = 7;
let valo2 = 6;
let resultado = valor1 + valo2;

console.log(`La suma de ${valor1} y ${valo2} es igual a ${resultado}`)

//    Crea una variable llamada "valor1" y otra llamada "valor2", asignándoles valores numéricos de tu elección. Luego, realiza la resta de estos dos valores y almacena el resultado en una tercera variable llamada "resultado". Utiliza console.log para mostrar el mensaje "La diferencia entre [valor1] y [valor2] es igual a [resultado]." en la consola.
 valor1 = 17;
 valo2 = 6;
 resultado = valor1 - valo2;

console.log(`La diferencia entre ${valor1} y ${valo2} es igual a ${resultado}`)

//    Pide al usuario que ingrese su edad con prompt. Con base en la edad ingresada, utiliza un if para verificar si la persona es mayor o menor de edad y muestra un mensaje apropiado en la consola.
let edad = parseInt(prompt('Ingrese su edad :'))

if (edad > 18){
  alert('Es mayor de edad.')
}else{
  alert('Es menor de edad.')
}

//    Crea una variable "numero" y solicita un valor con prompt. Luego, verifica si es positivo, negativo o cero utilizando un if-else y muestra el mensaje correspondiente.
let numero = parseInt(prompt('Ingrese un numero :'));

if (numero > 0) {
  alert('El numero es positivo')
}else if(numero < 0){
  alert('El numero es negativo')
}else{
  alert('El numero es Cero')
}

//    Utiliza un bucle while para mostrar los números del 1 al 10 en la consola.
let conteo = 1;

while(conteo <= 10){
  console.log(conteo)
  conteo++
};

//    Crea una variable "nota" y asígnale un valor numérico. Utiliza un if-else para determinar si la nota es mayor o igual a 7 y muestra "Aprobado" o "Reprobado" en la consola.
let nota = 10;
console.log(`La nota es : ${nota} , tu estas :`)

if (nota >= 7){
  console('Aprobado')
}else{
  console.log('Reprobado')
};


//    Utiliza Math.random para generar cualquier número aleatorio y muestra ese número en la consola.
let random = Math.random();
console.log(random)
// o
console.log(Math.random())

//    Utiliza Math.random para generar un número entero entre 1 y 10 y muestra ese número en la consola.

console.log(Math.random()*10+1);

//   Utiliza Math.random para generar un número entero entre 1 y 1000 y muestra ese número en la consola.
console.log(Math.random()*1000+1);