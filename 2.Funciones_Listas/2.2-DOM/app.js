/* 

QUES ES DOM ? 

significado : Document Objec Model / Documento Modelado de Objetos.

- Es una representacion estructural de un documento HTML que permite a los lenguajes de prograacion, como javascript interactuar con el 
contenido , la estructura y el estilo de la pagina.

Aquí hay algunos puntos clave sobre el DOM:

    Estructura Jerárquica: El DOM organiza los elementos de la página en una estructura jerárquica. 
    Por ejemplo, un <div> puede contener varios <p> y <h1>, y así sucesivamente.

    Interacción Dinámica: Gracias al DOM, puedes cambiar el contenido de la página sin necesidad de recargarla. 
    Por ejemplo, puedes cambiar el texto de un encabezado o mostrar u ocultar elementos en respuesta a acciones del usuario.

    Métodos de Selección: Para interactuar con el DOM, utilizamos métodos como document.querySelector() o document.getElementById(), 
    que nos permiten seleccionar elementos específicos en la página.

    Propiedades y Métodos: Cada elemento en el DOM tiene propiedades y métodos que puedes utilizar. 
    Por ejemplo, puedes cambiar el texto de un elemento usando element.innerHTML o cambiar su estilo con element.style.

*/

// crearemos una variable y Usaremos document.querySelector() para selecionar que elemento de html usaremos.
let titulo = document.querySelector('h1');  //usaremos h1 , ponerlo entre comillas, recordar que es un elemnto string o tag o etiqueta.


// usaremos el element.innerHTML para modificar el elemento h1. 
// se reemplaza element por el nombre de la variable creada, porque ese se volvio nuestro elemento.
titulo.innerHTML = 'Juego del numero Secreto.';


// Ahora haremos otro ejemplo con el elemento p .

let parrafo = document.querySelector('p');
parrafo.innerHTML = 'Ingrese un numero del 1 al 10.'


// Como podemos obervar, ingresamos las modificaciones desde nuestro archivo Js solo usando los elementos y no tocamos nada en HTML.