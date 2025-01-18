/*
Desafíos:

  1  Pregunta al usuario qué día de la semana es. Si la respuesta es "Sábado" o "Domingo", muestra "¡Buen fin de semana!". De lo contrario, muestra "¡Buena semana!".

  2  Verifica si un número ingresado por el usuario es positivo o negativo. Muestra una alerta informativa.

  3  Crea un sistema de puntuación para un juego. Si la puntuación es mayor o igual a 100, muestra "¡Felicidades, has ganado!". En caso contrario, muestra "Intentalo nuevamente para ganar.".

  4  Crea un mensaje que informe al usuario sobre el saldo de su cuenta, utilizando un template string para incluir el valor del saldo.

  5  Pide al usuario que ingrese su nombre mediante un prompt. Luego, muestra una alerta de bienvenida usando ese nombre.
*/

//1  Pregunta al usuario qué día de la semana es. Si la respuesta es "Sábado" o "Domingo", muestra "¡Buen fin de semana!". De lo contrario, muestra "¡Buena semana!".
let dia = 'Sabado' || 'Domingo';
let respuesta = prompt('Que dia de la semana es ?');

if(dia == respuesta){
  alert('¡Buen fin de semana!');
}else{
  alert('¡Buena semana!');
};

//Otra solucion para esto
let s = 'Sabado';
let d = 'Domingo';
let res = prompt('Que dia de la semana es?');

if( s == res){
  alert('¡Buen fin de semana!');
}else if(d == res){
  alert('¡Buen fin de semana!');
}else{
  alert('¡Buena semana!');
};

//  2  Verifica si un número ingresado por el usuario es positivo o negativo. Muestra una alerta informativa.
let num = prompt('Ingresa un numero');

if(num > 0){
  alert('El numero es positivo.');
}else{
  alert('El numero es negativo.');
};

//  3  Crea un sistema de puntuación para un juego. Si la puntuación es mayor o igual a 100, muestra "¡Felicidades, has ganado!". En caso contrario, muestra "Intentalo nuevamente para ganar.".

let punt = prompt('Ingresa la puntuacion');

if(punt >= 100 ){
  alert('¡Felicidades, has ganado!')
}else{
  alert("Intentalo nuevamente para ganar.")
}

// 4  Crea un mensaje que informe al usuario sobre el saldo de su cuenta, utilizando un template string para incluir el valor del saldo.
let saldo = 800;
alert(`El saldo en su cuenta es de : ${saldo}`)

// 5  Pide al usuario que ingrese su nombre mediante un prompt. Luego, muestra una alerta de bienvenida usando ese nombre.
let nombre = prompt('Ingrese su nombre :')
alert(`Hola, Bienvenido ${nombre}`)
