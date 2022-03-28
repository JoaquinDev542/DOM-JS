# Propiedades Directas Principales

## Propiedades Directas Más Utilizadas

La mayoría de las propiedades de los elementos son los atributos HTML, pero también hay otras que permiten manipular el elemento dentro del DOM.

### id:

La propiedad `id` indica el identificador del elemento.

#### ¿Cómo obtener el valor del ID?

Para obtener el valor del ID, basta con llamar a la propiedad `id` por delante del nombre de nuestro elemento.

Código HTML

```html
 <p id="paragraph">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Numquam, nihil.</p>
```

Código JS

```javascript
const $paragraph = document.querySelector("#paragraph");
console.log($paragraph.id);
// paragraph
```

#### Reasignar valor del ID

Si queremos reasignar un valor ID, utilizaremos el mismo método que para reasignar un valor de tipo String.

Ejemplo:

Código HTML

```html
 <p id="paragraph">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Numquam, nihil.</p>
```

Código JS

```javascript
const $paragraph = document.querySelector("#paragraph");
$paragraph.id = "nuevoID"
console.log($paragraph.id);
// nuevoID
```

### value:

La propiedad `value` devuelve o actualiza el valor del nodo actual.

#### ¿Cómo obtener el valor del value?

Para obtener el valor del `value` en nuestro JavaScript, necesitaremos unicamente llamar a la propiedad luego de haber llamado nuestro elemento.

Código HTML

```
    <input type="text" class="input" value="Soy un texto en un input">
```

Código JS

```javascript
const $input = document.querySelector(".input");
console.log($input.value);
// Soy un texto en un input
```

#### Reasignar valor del Value

Para reasignarlo, usaremos el mismo método que tiene un elemento tipo String.

Ejemplo:

Código HTML

```
    <input type="text" class="input" value="Soy un texto en un input">
```

Código JS

```javascript
const $input = document.querySelector(".input");
$input.value = "Tengo un nuevo valor";
console.log($input.value);
// Tengo un nuevo valor
```

### textContent:

La propiedad `textContent` de la interfaz Node, representa el contenido de texto de un nodo y sus descendientes.

El valor devuelto, será una cadena de texto el valor null.

Estableciendo `textContent` en un nodo, elimina todos sus hijos y los reemplaza con un solo nodo de texto con el valor dado.

#### ¿Cómo obtener el valor de textContent?

Para obtener el valor del textContent, es decir el contenido de nuestro elemento, tendremos que llamar a nuestro elemento seguido de la propiedad `textContent`.

Ejemplo:

Código HTML

```
 <h1 class="title">Propiedades Principales más <span>Usadas</span></h1>
```

Código JS

```javascript
const $title = document.querySelector(".title");
console.log($title.textContent);
// Propiedades Principales más Usadas
```

Como podemos observar, nos devuelve el contenido de nuestro elemento.

#### Reasignar valor del textContent

Para reasignar el valor del `textContent`, debemos de usar la misma manera que usariamos para reasignar un valor de un elemento tipo String.

Código HTML

```
 <h1 class="title">Propiedades Principales más <span>Usadas</span></h1>
```

Código JS

```javascript
const $title = document.querySelector(".title");
$title.textContent = "Soy un texto nuevo";
console.log($title.textContent);
// Soy un texto nuevo
```

### innerHTML:

La propiedad `innerHTML` devuelve o establece la sintaxis HTML describiendo los descendientes del elemento.

Al establecerse, se reemplaza la sintaxis HTML del elemento por la nueva. Es decir, podemos eliminar todas las etiquetas hijas de nuestro elemento padre y cambiandolo por un texto.

No recomendado, por el hecho de que si tenemos hijos dentro de nuestro elemento padre, cuando lo mandemos a llamar, saldrán las etiquetas hijas en vez de simplemente el contenido del texto. Ya que no interpretará la cadena pasada como HTML, sino como texto plano.

#### ¿Cómo obtener el valor de innerHTML?

Para obtener el valor del innerHTML, es decir el contenido de nuestro elemento, tendremos que llamar a nuestro elemento seguido de la propiedad `innerHTML`.

Es decir, devuelve texto HTML.

Código HTML

```html
<ul class="list">
    <li class="list__item">Lista 1</li>
    <li class="list__item">Lista 2</li>
    <li class="list__item">Lista 3</li>
</ul>
```

Código JS

```javascript
const $list = document.querySelector(".list");

console.log("$title.innerHTML");
// <li class="list__item">Lista 1</li>
// <li class="list__item">Lista 2</li>
// <li class="list__item">Lista 3</li>
```

#### Reasignar valor del innerHTML

Para reasignar el valor del `innerHTML`, debemos de usar la misma manera que usariamos para reasignar un valor de un elemento tipo String.

Ejemplo:

Código HTML

```html
<ul class="list">
    <li class="list__item">Lista 1</li>
    <li class="list__item">Lista 2</li>
    <li class="list__item">Lista 3</li>
</ul>
```

Código JS

```javascript
const $list = document.querySelector(".list");

$list.innerHTML = "Soy un texto que romple con la lista";
// Soy un texto que romple con la lista
```

Como podemos observar, al usar la propiedad `innerHTML` los elementos hijos se mostrarán en pantalla incluyendo las etiquetas como si fuesen un elemento String.

#### Usos de innerHTML

* La propiedad innerHTML se puede usar para ver el código HTML de la página actual, incluida la que haya sido modificada dinámicamente.
* Reemplazar el contenido de un elemento. (Si hay hijos dentro, estos se romperán y perderán)

### Diferencias entre textContent y innerHTML

* `innerText` no devolverá el texto de los elementos que están ocultos con CSS, mientras que `textContent` si lo hará.
* `innerHTML` obtiene o establece el contenido HTML del elemento. `textContent` NO codifica y decodifica el texto, por lo tanto, nos permite trabajar solo con la parte del contenido del elemento.
* `textContent` es una propiedad del objeto Node. `innerHTMl` es una propiedad del objeto Element y HTMLElement.

En conclusión, si se necesita introducir solo texto, utilizamos `textContent`. Si necesitamos introducir código HTML, utilizaremos `innerHTML`.

### outerHTML
