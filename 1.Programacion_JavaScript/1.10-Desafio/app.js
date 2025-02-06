//  Crea un contador que comience en 1 y vaya hasta 10 usando un bucle 'while'. Muestra cada número.

let contador = 1;
while(contador <= 10){
    console.log(contador);
    contador = contador + 1;
};

//  Crea un contador que comience en 10 y vaya hasta 0 usando un bucle 'while'. Muestra cada número.

let contador = 10;
while(contador >= 0){
    console.log(contador);
    contador = contador - 1;
};

//  Crea un programa de cuenta regresiva. Pide un número y cuenta desde 0 hasta ese número utilizando un bucle 'while' en la consola del navegador.

let regresiva = parseInt(prompt('Ingresa un numero par ala cuenta regresiva'));

while(regresiva >= 0){
  console.log(regresiva)
  regresiva = regresiva - 1
}


//  Crea un programa de cuenta progresiva. Pide un número y cuenta desde 0 hasta ese número utilizando un bucle 'while' en la consola del navegador.

let progresiva = prompt('Ingrese un numero para la cuenta Progresiva :')
let contador = 0;

while( contador <= progresiva){
      console.log(contador)
      contador = contador + 1;
}