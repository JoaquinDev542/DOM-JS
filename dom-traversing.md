# DOM Traversing

### ¿Cómo recorrer el DOM?

Para entender esto, primero debemos de saber que es el DOM Traversing. El DOM Traversing se trata de atravesar por el código HTML e ir seleccionando Elementos ya sea hijos, padres, hermanos, etc.

Es conclusión, mediante el DOM Traversing, podemos recorrer el HTML y seleccionar distintos elementos.

Entre ellos distinguen :

* hijos
* padres
* hermanos

### Hijos - children

#### children

La propiedad `children` nos permite obtener los elementos HTML hijos de nuestro elemento seleccionado.

Es decir, si seleccionamos la etiqueta `body` y hacemos uso de la propiedad `children`, estaremos llamando a todos los hijos de nuestra etiqueta `body`.

Ejemplo con una lista.

Código HTML

```html
<ul class="list">
    
    <li><a href="x">Link 1</a>
    <li><a href="x">Link 2</a>
    <li><a href="x">Link 3</a>

</ul>
```

Código JS

```javascript
const $list = document.querySelector(".list");
console.log($list.children);

// HTMLCollection(3) [li, li, li]
```

#### children\[x]

En este caso, mediante los corchetes (\[]) podemos especificar que hijo queremos seleccionar, ya sea el hijo del medio, el primer hijo, el cuarto, etc.

Ejemplo con la misma lista seleccionando el segundo `<li></li>`

Código HTML

```html
<ul class="list">

    <li><a href="x">Link 1</a>
    <li><a href="x">Link 2</a>
    <li><a href="x">Link 3</a>

</ul>    
```

Código JS

```javascript
const $list = document.querySelector(".list");
console.log($list.children[1]);
// <li><a href="#">Link 2</a></li>
```

Cómo se puede observar, seleccionamos el segundo elemento hijo de nuestra lista (`$list`).

### Seleccionar el Primer o Ultimo Hijo

#### firstElementChild

La propiedad `firstElementChild` selecciona el primer elemento hijo del elemento padre llamado. Si no hay elementos hijos, el valor retornado será `null`.

Es decir, el primer elemento hijo de nuestro contendor padre.

Ejemplo:

Código HTML

```html
    <ul class="list">
        <li><a href="x">Link 1</a>
        <li><a href="x">Link 2</a>
        <li><a href="x">Link 3</a>
    </ul>
```

Código JS

```javascript
const $list = document.querySelector(".list");
console.log("$list.firstElementChild");
// <li><a href="#">Link 1</a></li>
```

Cómo se puede ver, estamos seleccionando el primer elemento hijo de nuestro elemento padre (`$list`).

#### lastElementChild

La propiedad `lastElementChild` selecciona el último elemento hijo del elemento padre llamado. Si no hay elementos hijos, el valor retornado será `null`.

Es decir, el último elemento hijo de nuestro contendor padre.

Ejemplo:

Código HTML

```html
    <ul class="list">
        <li><a href="x">Link 1</a>
        <li><a href="x">Link 2</a>
        <li><a href="x">Link 3</a>
    </ul>
```

Código JS

```javascript
const $list = document.querySelector(".list");
console.log($list.lastElementChild);
// <li><a href="#">Link 3</a></li>
```

### Hermanos - sibling

#### previusElementSibling

La propiedad `previusElementSibling` selecciona el elemento hermano anterior dentro de la lista de hijos de su padre. Si el elemento no tiene ningún hermano, el valor retornado será `null`.

Ejemplo:

Código HTML

```html
<section class="parent">
    <p class="sibling1">Lorem ipsum dolor sit amet.</p>
    <h3 class="sibling2">Lorem, ipsum dolor.</h3>
    <span class="sibling">Lorem ipsum dolor sit amet consectetur adipisicing.</span>
</section>
```

Código JS

```javascript
const $sibling = document.querySelector(".sibling");
console.log($sibling.previousElementSibling);
// <h3 class="sibling2">Lorem, ipsum dolor.</h3> 
```

Como se puede observar, selecciona el hermano anterior a nuestro elemento `<span class="sibling"></span>`

#### nextElementSibling

La propiedad `nextElementSibling` selecciona el elemento hermano posterior dentro de la lista de hijos de su padre. Si el elemento no tiene ningún hermano, el valor retornado será `null`.

Ejemplo:

Código HTML

```html
<section class="parent">
    <p class="sibling1">Lorem ipsum dolor sit amet.</p>
    <h3 class="sibling2">Lorem, ipsum dolor.</h3>
    <span class="sibling">Lorem ipsum dolor sit amet consectetur adipisicing.</span>
</section>
```

Código JS

```javascript
const $sibling2 = document.querySelector(".sibling2");
console.log($sibling2.nextElementSibling);
//<span class="sibling">Lorem ipsum dolor sit amet consectetur adipisicing.</span>
```

Como podemos ver, selecciona al hermano posterior a él, en este caso, al span con la clase `sibling`.

### Padre - parent

#### parentElement

La propiedad `parentElement` selecciona y devuelve el elemento padre de nuestro elemento. Si no obtiene ningún elemento padre, el valor retornado será null.

Es decir, nos devolverá neustro padre contenedor.

Ejemplo:

Código HTML

```html
<body>
    <ul class="list">
        <li><a href="x">Link 1</a>
        <li><a href="x">Link 2</a>
        <li><a href="x">Link 3</a>
    </ul>
    <section class="parent">
        <p class="sibling1">Lorem ipsum dolor sit amet.</p>
        <h3 class="sibling2">Lorem, ipsum dolor.</h3>
        <span class="sibling">Lorem ipsum dolor sit amet consectetur adipisicing.</span>
    </section>
    <script src="main.js"></script>
</body>
```

Código JS

```javascript
const $parent = document.querySelector(".parent");
console.log($parent.parentElement);
// <body></body>
```

Como podemos observar, el valor retornado por la propiedad parentElement es el padre de nuestro elemento HTML.



### Método closest()

El método `closest()` nos permite atravesar los elementos hasta que encuentre el padre más cercano de ese parámetro que le hayamos dado.

Es decir, atravesaremos elementos hasta que el parámetro coincida con nuestro elemento HTML.

Si no encuentra un padre cercano, el valor retornado será `null`.

Sintaxis: `targetElement.closest(selectors);`

Ejemplo:

Código HTML

```html
<div class="myDiv">
    <span class="mySpan">
        <strong class="myStrong">Im a text</strong>
    </span>
</div>
```

Código JS

```javascript
const $myStrong = document.querySelector(".myStrong");
console.log($myStrong.closest("div"));
// <div class="myDiv"</div>
```

Este método nos servirá cuando queramos buscar el elemento padre más cercano y no sepamos cual es, simplemente mediante el parámetro lo encontraremos.
