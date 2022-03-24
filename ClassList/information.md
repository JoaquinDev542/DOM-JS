# ClassList y Modificación de clases en el DOM

## ¿Qué es classList?
La propiedad de lectura `classList` nos permite activar las lista de tokens(DOMTokenList) de los atributos de clase del elemento. Es decir, usar `classList` es una forma práctica de acceder a la lista de clases de un elemento.

``$title.classList.[add,remove,ect,ect]``

Es decir, acceder a las clases de nuestro elemento HTMl y agregarle clases, removerlas, reemplazarlas,etc.


## Métodos para la modificación de clases
Estos son los métodos que tenemos para la modificación de clases.

### add() ###
- element.classList.add("className" , "className2"); => El método `add` permite añadir una o más clases a nuestro elemento HTML. Si estas clases ya existieran en el atributo del elemento, serán ignoradas.

**Ejemplo:**

Código HTML

`<h1 class="title" data-info="Titulo principal">Soy un h1</h1>`


```js
const $title = document.querySelector(".title");

$title.classList.add("main-title");
```

OutPut

`<h1 class="title main-title" data-info="Titulo principal">Soy un h1</h1>`


### remove() ###
- element.classList.remove("classNameToRemove" , "classNameToRemove2"); => El método `remove` nos permite eliminar una o más clases a nuestro elemento HTML.

**Ejemplo:**

Codigo HTML

`<h1 class="title main-title" data-info="Titulo principal">Soy un h1</h1>`


Código JS


`$title.classList.remove("main-title");`


OutPut

`<h1 class="title" data-info="Titulo principal">Soy un h1</h1>`


### toggle()
- element.classList.toggle("className" , [force]) => El método `toggle` nos permite poner o quitar una clase mediante un funcionamiento que demos, por ejemplo cuando hagamos "click", que se coloque la clase, y cuando repitamos el "click" que se quite la clase. Muy utilizado en los menú responsive. (force vendría a hacer un "click").


### contains()
- element.classList.contains("className"); => El método `contains` devuelve un valor boolean (true/false), dependiendo si tiene o no esa clase. Es decir, comprueba si esa clase existe o no.

Código HTML

`<h1 class="title" data-info="Titulo principal">Soy un h1</h1>`

Código JS

```js
if($title.classList.contains("title") === true) {
    console.log("Nuestro h1, contiene la clase title");
} else {
    console.log("Nuestro h1, NO contiene la clase title");
}
```

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
