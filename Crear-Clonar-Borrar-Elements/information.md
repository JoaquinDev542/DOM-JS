# Crear , Insertar, Clonar y Borrar Elementos #

## Crear Elementos

### createElement()
El método `createElement()` nos permite crear un elemento HTML especificado por su tagName, es decir, por su nombre de etiqueta.

Su sintaxis es:

````js
const elementToCreate = document.createElement(tagName);
````

tagName: En el parámetro tagName, irá entre comillas la etiqueta HTML.

Ejemplo:

````js
const elementP = document.createElement("p");
````

Si le queremos agregar contenido a esa etiqueta, será tan sencillo como usar la propieadad `textContent`

````js
const elementP = document.createElement("p");
elementP = elementP.textContent = "Soy un párrafo";
````

## Insertar Elementos ##

### appendChild ###
El método de nodo `appendChild` agrega un nuevo nodo al final de la lista de un elemento hijo de un elemento padre especificado. Es decir, el elemento creado siempre se coloca como último elemento.

Su sintaxis es:

````html
 <ul id="list">
    <li>Hijo 1</li>
    <li>Hijo 2</li>
</ul> 
````

````js
const $list = document.querySelector("#list");

let elementLi = document.createElement("li");
$list.appendChild(elementLi);
elementLi = elementLi.textContent = "Hijo 3";
````

Como podemos ver, siempre aparecerá como último elemento. Cabe destacar, que primero hay que colocar el elemento creado y luego darle estilos, valores, etc.

## Insertar Elementos ##

### insertBefore(newElement , referenceElement) ###
El método de nodo `insertBefore` inserta un nodo antes del nodo de referencia como hijo de un nodo padre indicado. Es decir, el método `insertBefore` inserta un nodo como hijo de un nodo padre.

Si ya hay un elemento hijo en nuestro elemento padre, este elemento se pasará como segunda posición, dejando al elemento que contiene el `insertBefore` como primer hijo.


### insertAdjacentElement(position , element) ###
**Valores de position**
- beforebegin
- afterbegin
- beforeend
- afterend

insertAdjacentElement(position , element)


insertAdjacentHTML = no se usa nunca xd
insertAdjacentText = no se usa nunca xd


positions2 = before(), prepend(), append(), after() 




replaceWith(newChild)


Clonar y eliminar elementos

cloneNode(true|false)
remove() 
removeChild(child)
