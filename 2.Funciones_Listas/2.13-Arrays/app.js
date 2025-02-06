// ARRAY o ARREGLO : Un array, arreglo o lista en JavaScript es una estructura de datos que permite almacenar y 
// organizar múltiples valores en una sola variable. Los valores en un array pueden ser de cualquier tipo de dato, 
// como números, strings, objetos, otros arrays, y así sucesivamente. Los arrays en JavaScript son indexados, 
// lo que significa que cada valor dentro de ellos está asociado con un índice numérico, generalmente comenzando desde el índice 0.

//Creando un array: puedes crear un array declarando la variable y asignandole valores entre corechtes [].

let frutas = ['Manzana', 'Uva', 'Naranja']

/*
Accediendo a los valores:  Los elementos de un array se acceden mediante índices numéricos, que comienzan en 0.

Índice	Elemento
0	"Manzana"
1	"Uva"
2	"Naranja"
*/

console.log(frutas[0]); // Salida: "Manzana"
console.log(frutas[2]); // Salida: "Naranja"

//Añadiendo nuevos elementos : para agregar un nuevo elemento al final del arrayn, necesitas usar el metodo push.

frutas.push('Fresa'); //asi se agregar un nuevo elemento , en este caso fresa.
console.log(frutas);

// Eliminando el último elemento : Para eliminar el último elemento, puedes usar el método pop.

frutas.pop(); //Estamo eliminando el ultimo elemteno, en este caso fresa, ya que fue el ultimo que se tiene o habia agregado.
console.log(frutas)

