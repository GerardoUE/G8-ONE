/*
// Crea una función que calcule el índice de masa corporal (IMC) de una persona a partir de su altura en metros y peso en kilogramos, que se recibirán como parámetros.

function imc(alt, peso){
  let masa = peso / (alt * alt);
  
  return masa
}

console.log(imc(1.65, 60))

// Crea una función que calcule el valor del factorial de un número pasado como parámetro.


function fact(valor){
  valor = parseInt(valor);
  let numero = 0;
  let resul = 1;
  
  while (numero < valor) {
      numero ++ 
      resul = numero * resul;
  }
  console.log(`El numero factorial es ${numero} y su valor es ${resul}`)
  return resul
}

console.log(fact(prompt('Ingrese el valor para factorizar')))


// Crea una función que convierta un valor en dólares, pasado como parámetro, y devuelva el valor equivalente en reales(moneda brasileña,si deseas puedes hacerlo con el valor del dólar en tu país). Para esto, considera la cotización del dólar igual a R$4,80.

function cambio (dolar) {
  dolar = parseInt(dolar)
  let reales = 4.80;
  let cambio = dolar * reales;
  
  console.log(`El cambio de $${dolar} ${ dolar == 1 ? 'dolar' : 'dolares'}, a reales es R$${cambio} ${ reales == 1 ? 'real' : 'reales'}`)
  return cambio
}

console.log(cambio(1))


// Crea una función que muestre en pantalla el área y el perímetro de una sala rectangular, utilizando la altura y la anchura que se proporcionarán como parámetros.

let altura = prompt('Ingresa la altura : ');
let anchura = prompt('Ingresa la anchura : ');
let area = 0;
let perimetro = 0;

function areaPerimetro(altu,anchu){
    
    area = altu * anchu;
    perimetro = 2 * altu + anchu * 2;
    return console.log(`El area del rectangulo es ${area}. 
        Y el primetro es  ${perimetro}  `);
}

areaPerimetro(altura,anchura);


// Crea una función que muestre en pantalla el área y el perímetro de una sala circular, utilizando su radio que se proporcionará como parámetro. Considera Pi = 3,14.

let radio = prompt('Ingresa el radio del circulo : ');

let area = 0;
let perimetro = 0;
let pi =3.14;
function areaPerimetro(radio,pi){
    
    area = pi *(radio*radio);
    perimetro = 2 * pi * radio;
    return console.log(`El area del circulo es ${area}. 
        Y el primetro es  ${perimetro}  `);
}

areaPerimetro(radio,pi);


// Crea una función que muestre en pantalla la tabla de multiplicar de un número dado como parámetro. 

let numUser = prompt('Ingresa el número que deseas la tabla : ');
let tabla = '';
function tablaMultiplicar(numUser){
    
    for(let i=0;i<=10;i++){
       
     tabla =  console.log(` ${numUser} x ${i} = ${ (i*numUser) } \n`);
    }
   return;
}

tablaMultiplicar(numUser);
*/