# Estilos y Variables CSS #

## El Objeto Style ##
El objeto `style`, permite mediante código JavaScript, acceder, modificar, eliminar propiedades y valores de nuestro código CSS. El objeto `style` nos devuelve un objeto CSSStyleDeclaration con todas sus propiedades CSS. 

Tenemos que tener en cuenta, que cuando vamos a llamar alguna propiedad CSS en JavaScript, debemos de usar el formato camelCase.

Un ejemplo sería:

En vez de escribir la propiedad => `background-color`, lo haremos de la siguente manera => `backgroundColor`.

## Maneras de interactuar con los estilos de nuestro elemento HTML ##

## Obtener un valor CSS ##
- console.log(nameClass.style);
- console.log(nameClass.getAttribute("style"));
- console.log(getComputedStyle(nameClass));

"style" => propiedad CSS.

### console.log(nameClass.style) ###
Esta es la manera más común y usada para llamar a interactuar las propiedades y valores en CSS.

Ejemplo:

Código HTML

`<h1 class="title">Soy un titulo</h1>`

Código JS

````
const $title = document.querySelector(".title");

console.log($title.style);
````

OutPut
`CSSStyleDeclaration {accentColor:"", additiveSymbols: "" , etc etc etc}`

Es decir, devolverá todas las propiedades de CSS en nuestro elemento HTML.


### console.log(getComputedStyle($title)); ###

Esta es otra manera para acceder a todas las propiedades CSS de nuestra etiqueta HTML. 

Si queremos acceder a una propiedad en especifico, utilizaremos el método `getPropertyValue("propertyName")`

Ejemplo:

Código HTML

`<h1 class="title">Soy un titulo</h1>`

Código JS

````
const $title = document.querySelector(".title");

console.log(getComputedStyle($title).getPropertyValue("color"));
````

OutPut
`rgb(255,0,0)`


### console.log(getComputedStyle($title)); ###
Esta manera, es accediendo al atributo style. 

Esto lo utilizaremos cuando queramos acceder a una propiedad CSS dentro de nuestro style en línea.

Ejemplo:

Código HTML

`<h1 class="title" style="color: green;">Soy un titulo</h1>`

Código JS

````
const $title = document.querySelector(".title");

console.log($title.getAttribute("style"));
````

OutPut
`color:green;`


## Cambiar un valor CSS ##
- console.log($title.color = "red");
- console.log($title.style.setProperty("color" , "red"));
- console.log(getComputedStyle($title).setProperty("color" , "green"));

###  console.log(nameClass.propertyName = "value" ###
Cuando queremos cambiar el valor de una propiedad, lo haremos de la misma manera que si fuese la reasignación de una variable.

Ejemplo:

Código HTML

`<h1 class="title" style="color: green;">Soy un titulo</h1>`

Código JS

````
const $title = document.querySelector(".title");

console.log($title.color = "red");
````

OutPut 
`red`


###  console.log(nameClass.style.setProperty("property" , "value") ###

Ejemplo:

Código HTML

`<h1 class="title" style="color: green;">Soy un titulo</h1>`

const $title = document.querySelector(".title");

Código JS

````
$title.getAttribute("color");
console.log($title);
console.log($title.style.setProperty("color" , "blue"));
console.log($title);
`````

