# DOM Traversing #

## ¿Cómo recorrer el DOM? ##
Para entender esto, primero debemos de saber que es el DOM Traversing. El DOM Traversing se trata de atravesar por el código HTML e ir seleccionando Elementos ya sea hijos, padres, hermanos, etc.

Es conclusión, mediante el DOM Traversing, podemos recorrer el HTML y seleccionar distintos elementos.

Entre ellos distinguen :
- hijos
- padres
- hermanos

## Hijos - children ##

### children ###
La propiedad `children` nos permite obtener los elementos HTML hijos de nuestro elemento seleccionado.

Es decir, si seleccionamos la etiqueta `body` y hacemos uso de la propiedad `children`, estaremos llamando a todos los hijos de nuestra etiqueta `body`.

Ejemplo con una lista.

Código HTML

````html
<ul class="list">
    
    <li><a href="x">Link 1</a>
    <li><a href="x">Link 2</a>
    <li><a href="x">Link 3</a>

</ul>
````

Código JS

````js
const $list = document.querySelector(".list");
console.log($list.children);

// HTMLCollection(3) [li, li, li]
````


### children[x] ###
En este caso, mediante los corchetes ([]) podemos especificar que hijo queremos seleccionar, ya sea el hijo del medio, el primer hijo, el cuarto, etc.

Ejemplo con la misma lista seleccionando el segundo `<li></li>`

Código HTML

````html
<ul class="list">

    <li><a href="x">Link 1</a>
    <li><a href="x">Link 2</a>
    <li><a href="x">Link 3</a>

</ul>    
````

Código JS

````js
const $list = document.querySelector(".list");
console.log($list.children[1]);
// <li><a href="#">Link 2</a></li>
````
Cómo se puede observar, seleccionamos el segundo elemento hijo de nuestra lista (`$list`).


## Seleccionar el Primer o Ultimo Hijo ##

### firstElementChild ###
La propiedad `firstElementChild` selecciona el primer elemento hijo del elemento padre llamado. Si no hay elementos hijos, el valor retornado será `null`.

Es decir, el primer elemento hijo de nuestro contendor padre.

Ejemplo:

Código HTML

````html
    <ul class="list">
        <li><a href="x">Link 1</a>
        <li><a href="x">Link 2</a>
        <li><a href="x">Link 3</a>
    </ul>
````

Código JS

````js
const $list = document.querySelector(".list");
console.log("$list.firstElementChild");
// <li><a href="#">Link 1</a></li>
````

Cómo se puede ver, estamos seleccionando el primer elemento hijo de nuestro elemento padre (`$list`).

### lastElementChild ###
La propiedad `lastElementChild` selecciona el último elemento hijo del elemento padre llamado. Si no hay elementos hijos, el valor retornado será `null`.

Es decir, el último elemento hijo de nuestro contendor padre.

Ejemplo:

Código HTML

````html
    <ul class="list">
        <li><a href="x">Link 1</a>
        <li><a href="x">Link 2</a>
        <li><a href="x">Link 3</a>
    </ul>
````

Código JS

````js
const $list = document.querySelector(".list");
console.log($list.lastElementChild);
// <li><a href="#">Link 3</a></li>
````


## Hermanos - sibling ##

### previusElementSibling ###

### nextElementSibling ###

## Padre - parent ##

### parentElement ###


Enfocado a los elementos, h1, p , a, etc,etc.

propiedades

parentElement = Nos devuelve el padre de nuestro elemento.

hermanos=>

previousElementSibling = el hermano anterior.
nextElementSibling = el hermano siguente.
 
 
método

closest("div") => busca el padre mas cercano del tipo de selector que le demos. 