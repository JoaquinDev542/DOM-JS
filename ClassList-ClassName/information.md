# ClassList y Modificación de clases en el DOM #

## ¿Qué es classList? ##
La propiedad de lectura `classList` nos permite activar las lista de tokens(DOMTokenList) de los atributos de clase del elemento. Es decir, usar `classList` es una forma práctica de acceder a la lista de clases de un elemento.

``$title.classList.[add,remove,ect,ect]``

Es decir, acceder a las clases de nuestro elemento HTMl y agregarle clases, removerlas, reemplazarlas,etc.


## Métodos para la modificación de clases ##
Estos son los métodos que tenemos para la modificación de clases.

### add() ###
- element.classList.add("className" , "className2"); => El método `add` permite añadir una o más clases a nuestro elemento HTML. Si estas clases ya existieran en el atributo del elemento, serán ignoradas.

**Ejemplo:**

Código HTML

`<h1 class="title" data-info="Titulo principal">Soy un h1</h1>`

Código JS

````js
const $title = document.querySelector(".title");

$title.classList.add("main-title");
````

OutPut
`//<h1 class="title main-title" data-info="Titulo principal">Soy un h1</h1>`


### remove() ###
- element.classList.remove("classNameToRemove" , "classNameToRemove2"); => El método `remove`nos permite eliminar una o más clases a nuestro elemento HTML.

**Ejemplo:**

Código HTML

`<h1 class="title main-title" data-info="Titulo principal">Soy un h1</h1>`

Código JS

` $title.classList.remove("main-title"); `

OutPut
`//<h1 class="title" data-info="Titulo principal">Soy un h1</h1>`


### toggle() ###
- element.classList.toggle("className" , [force]) => El método `toggle` nos permite poner o quitar una clase mediante un funcionamiento que demos (funciona como una palanca), por ejemplo cuando hagamos "click", que se coloque la clase, y cuando repitamos el "click" que se quite la clase. Muy utilizado en los menú responsive. (force vendría a hacer un "click").

Si el elemento no tiene una clase se la agrega, y si la tiene se la quita.

Ejemplo:

Código HTMl

````html
<a href="#" class="link">Toggle</a>

<h1 class="title title--principal" data-info="Titulo principal">Soy un h1</h1>
````

Código CSS

````css
.title {
    color:red;
}

.title.active {
    color:green;
}
````

Código JS

````js
const $title = document.querySelector(".title");
const $link = document.querySelector(".link");

$link.addEventListener ("click" , () => {
    $title.classList.toggle("active");
})
````

OutPut:
Cuando le damos click en nuestro enlace se cambiará el color de rojo a verde, y cuando le hagamos click de nuevo, volverá el color rojo. Ya que cuando hacemos `"click"` se agrega una clase, y cuando reclickeamos, quitamos la clase.


### contains() ###
- element.classList.contains("className"); => El método `contains` devuelve un valor boolean (true/false), dependiendo si tiene o no esa clase. Es decir, comprueba si esa clase existe o no.

Código HTML

`<h1 class="title" data-info="Titulo principal">Soy un h1</h1>`

Código JS

````js
if($title.classList.contains("title") === true) {
    console.log("Nuestro h1, contiene la clase title");
} else {
    console.log("Nuestro h1, NO contiene la clase title");
}
````

OutPut
`//Nuestro h1, contiene la clase title`


### replace() ###
- element.classList.replace("oldClass" , "newClass"); => El método `replace` reemplaza una clase por otra nueva.

Código HTML

`<h1 class="title" data-info="Titulo principal">Soy un h1</h1>`

Código JS

`$title.classList.replace("title" , "newClass");`

OutPut
`<h1 class="newClass"data-info="Titulo principal">Soy un h1</h1>`


# ClassName #
La propiedad `className`, nos permite devolver el nombre de nuestra clase. Es decir, obtiene y establece el valor del atributo `class` del elemento especificado.

El hecho de que coloquemos `className` en vez de `class`, se debe a que `class` es una palabra reservada para la creación de clases en la Programación Orientada a Objetos, por ende, utilizamos `className` para evitar conflictos.

La diferencia con la palabra reservada `classList`, es que está devolverá un DOMTokenList, muy parecido a un array con la posición que tenga la clase, cuál es el valor, etc.
