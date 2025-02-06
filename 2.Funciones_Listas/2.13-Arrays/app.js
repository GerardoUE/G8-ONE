// ARRAY o ARREGLO : Un array, arreglo o lista en JavaScript es una estructura de datos que permite almacenar y 
// organizar múltiples valores en una sola variable. Los valores en un array pueden ser de cualquier tipo de dato, 
// como números, strings, objetos, otros arrays, y así sucesivamente. Los arrays en JavaScript son indexados, 
// lo que significa que cada valor dentro de ellos está asociado con un índice numérico, generalmente comenzando desde el índice 0.

//Creando un array: puedes crear un array declarando la variable y asignandole valores entre corechtes [].

let frutas = ['Manzana', 'Uva', 'Naranja']

//Añadiendo nuevos elementos : para agregar un nuevo elemento al final del arrayn, necesitas usar el metodo push.

frutas.push('Fresa'); //asi se agregar un nuevo elemento , en este caso fresa.
console.log(frutas);

// Eliminando el último elemento : Para eliminar el último elemento, puedes usar el método pop.

frutas.pop(); //Estamo eliminando el ultimo elemteno, en este caso fresa, ya que fue el ultimo que se tiene o habia agregado.
console.log(frutas)

// ver el tamano de la lista
console.log(frutas.length)
// 3


/* INDICE
Accediendo a los valores:  Los elementos de un array se acceden mediante índices numéricos, que comienzan en 0.

Índice	Elemento
0	"Manzana"
1	"Uva"
2	"Naranja"
*/

//La posicion de nuestro primer elemento siempre sera 0 
console.log(frutas[0]); // Salida: "Manzana"

//para saber el ultimo elemento de nustra lista , usamos length - 1
console.log(frutas[frutas.length-1])

//saber la posicion de nuestro ultimo elemento de la lista 
console.log(frutas.length-1); // Salida: "Naranja"

