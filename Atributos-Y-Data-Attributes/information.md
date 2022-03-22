# Atributos y Data Attributes #

## Definiciones ##
Los atributos **data-** son una de las grandes incorporaciones en HTML5 y tienen un rol importante en el desarrollo de webs semánticas.

Los atributos **data** se crearon para almacenar información adicional sobre nuestros elementos HTML. Nos permite utilizar múltiples clases y darle mucha más semántica a nuestro código.

Un ejemplo sería:

``<a href="#" data-description="Document Object Model">DOM</a>``

### ¿Cómo se forman los atributos data? ###

Los atributos globales data-* forman una clase de atributos, estos son llamados datos modificables, permite a la información ser intercambiada entre el HTML y su representación en el DOM.

Un atributo data consta de un prefijo <data-> seguido del nombre que consideremos más apropiado para el valor que va a guardar.

Mediante estas, se puede acceder tanto al CSS como al JavaScript.

## Accediendo a los atributos y Data Attributes con JavaScript ##
Para leer estos valores en los atributos en JavaScript es muy sencillo, podemos utilizar el método `getAttribute()`con su nombre HTML completo para leerlos. 

Cabe destacar que hay otra manera más simple, que es mediante la propiedad `dataset`.

Tanto dataset, getAttibute y setAttribute , removeAttribute son las maneras que tenemos para acceder a los atributos y setearlos.

## ¿Cómo funciona la propiedad dataset? ##

El API `dataset` permite obtener y establecer los valores de los atributos data-* de una forma muy sencilla. Cada elemento del DOM tiene asociada la propiedad dataset, que es un objeto tipo DOMStringMap con todos sus atributos data-*.


Datos a tener en cuenta:

- NO se recomienda que incluya caracteres especiales distintos a [a-z].
- El valor del atributo daata-* puede ser cualquier cadena de texto. Siempre será el tipo de dato string.
- Los atributos data-* SON PRIVADOS DEL DOCUMENTO HTML, Esto quiere decir que cualquier sistema externo debería ignorarlos, incluyendo los motores de búsqueda.
- el atributo data-* no debería ser utilizado si existe otro atributo o elemento especídico para representar un dato, por ejemplo la fecha y hora, ya que tenemos la etiqueta <time> y podemos colocarlo dentro como contenido.

**Ejemplo con la propiedad dataset**

Código HTML

````
 <section class="cards">

         <article class="card"  data-message="ValueToShowInConsole">
            <p class="paragraph">Soy un párrafo</p>
        </article>

    </section>
````

Código JS

````
const $firstCard = document.querySelector(".card");

console.log($firstCard.dataset.message);
// ValueToShowInConsole
````

Como vemos, para acceder a nuestro valor de nuestro data-*, debemos de utilizar la propiedad dataset seguido del nombre del atributo quitandole el prefijo `data-`.

### ¿Cómo renombrar el valor de un data-*? ###

Para modificar el valor de un atributo data-*, es tan fácil como asignarle un nuevo valor.

Ejemplo:

Código JS

````
const $firstCard = document.querySelector(".card");
console.log($firstCard.dataset.message);
// ValueToShowInConsole

$firstCard.dataset.message = "Nuevo valor";
//Nuevo valor
````

### ¿Cómo eliminar el atributo data-* o quitarle su valor? ###

Si queremos quitarle el valor a algún atributo data-*, debemos dejarle un string vacío o asignarle el valor null.

Si queremos eliminar un atributo data-*, necesitaremos de utilizar la palabra clave `delete`. El valor devuelto será `undefined`.

Ejemplo:

Código JS

````
const $firstCard = document.querySelector(".card");
console.log($firstCard.dataset.message);
// ValueToShowInConsole

delete $firstCard.dataset.message;
````

## ¿Cómo funciona los métodos getAttribute() , setAttribute() , removeAttribute() y hasAttribute() ? ##

Con estos métodos, podemos obtener, establecer y eliminar el valor de los atributos data-* y borralos.

### getAttribute() ###

Con el método `getAttribute` logramos como bien dice la palabra, obtener el valor de nuestro atributo data-*.

**Ejemplo con el método getAttribute()**

Código JS

````
const $firstCard = document.querySelector(".card");

console.log($firstCard.getAttribute("data-firstCard"));
// ValueToShowInConsole
````

### setAttribute() ###

Con el método `setAttribute` logramos setear un valor y reasignarle otro nuevo a nuestro atributo data-*.

Ejemplo:

Código JS

````
console.log($firstCard.setAttribute("data-firstCard" , "Nuevo Valor"));
// Nuevo Valor
````

### removeAttribute() ###

Con el método `remoteAttribute` logramos eliminar un atributo data-*.

Ejemplo:

Código JS

````
console.log($firstCard.removeAttribute("data-firstCard"));
````

### hasAttribute() ###
El método `hasAttribute` devuelve un valor Boolean indicando si el elemento tiene el atributo especificado o no.

Ejemplo:

Código JS

````
console.log($firstCard.hasAttribute(data-firstCard));
// true
````
