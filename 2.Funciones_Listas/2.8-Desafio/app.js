//    Crear una función que muestre "¡Hola, mundo!" en la consola.
function saludo(){
  console.log('¡Hola, mundo!')
  
}
saludo();

//    Crear una función que reciba un nombre como parámetro y muestre "¡Hola, [nombre]!" en la consola.
function saludos(nombre){
  console.log(`¡Hola, ${nombre}!`)
}
saludos('Gerardo');

//    Crear una función que reciba un número como parámetro y devuelva el doble de ese número.
function doble(numero){
  return numero * 2
}
console.log(doble(2))


//    Crear una función que reciba tres números como parámetros y devuelva su promedio.
function promedio(x, y, z){
  let prom = Math.floor((x + y + z) / 3);
  return prom
}
console.log(promedio(15, 18, 20))

//    Crear una función que reciba dos números como parámetros y devuelva el mayor de ellos.
function mayor(x , y){
  if(x > y){
    return x
  }else{
    return y
  }
}
console.log(mayor(13, 6))
console.log(mayor(1, 8))

//    Crear una función que reciba un número como parámetro y devuelva el resultado de multiplicar ese número por sí mismo.
function multi(x){
  return x * x;
}
console.log(multi(8))