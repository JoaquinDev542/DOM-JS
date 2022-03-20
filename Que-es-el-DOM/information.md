# ¿Qué es el DOM en JavaScript? #
El DOM o Modelo de Objeto de Documento (Document Object Model) es una interfaz de programación para los documentos HTML y XML. Facilita una representación estructuradda del documento y define de qué manera los programas pueden acceder, al fin de modificar, tanto su estructura, estilo y contenido.

En conclusión, el DOM da una representación del documento como un grupo de nodos y objetos estructurados que tienen propiedades y métodos. Conecta las páginas web a scripts o lenguajes de programación.

Todas las propiedades, métodos y eventos disponibles para la manipulación y la creación de páginas web está organizado dentro de objetos. Un ejemplo, sería el objeto document que representa al documento mismo y así sucesivamente.

## DOM y JavaScript ##
Se complementan entre ellos, ya que el DOM no es un lenguaje de programación pero sin él, el lenguaje JavaScript no tiene ningún modelo o noción de las páginas web. 

El contenido de la página es almacenado en el DOM y el acceso y la manipulación se hace vía JavaScript, podría representarse de la siguiente manera:

API(web o página XML) = DOM + JS(lenguaje de script)

EL DOM fue diseñado para ser independiente de cualquier lenguaje de programación particular.

## ¿Cómo se accede al DOM? ##
Para acceder, aparte de crear un elemento `<script></script>` necesitaremos de las palabras claves **document** o **window**, todo esto, logra que se pueda manipular el documento mismo o sus diferentes partes, las cuales son los varios elementos de una página web.

De esta manera, logramos acceder a nuestro código HTML.

Un ejemplo podría ser:

**Código HTML**
```
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="styles.css">
    <title>DOM</title>
</head>
<body>
    <h1>DOM</h1>
    <script src="main.js"></script>
</body>
</html>
```

**Código JS**
```
console.log(document);
```

De esta manera, accedemos a todo el código HTML en nuestra consola.


## Diferenciar entre Nodos y Elementos ##
Un Nodo en el DOM es cualquier etiqueta del cuerpo, ya sea un párrafo, el body o incluso comentarios de texto. Con JavaScript, podemos modificar etiquetas con el uso de eventos.

Las que nos va a interesar a nosotros en la manipulación del DOM en JavaScript serán: 

- Node.ELEMENT_NODE => Un elemento node como una etiqueta <p> , <div> , etc.
- Node.TEXT_NODE => El contenido dentro de un elemento, ya sea el texto o el Attr.

## Document ##
La interfaz `document` representa cualquier página web cargada en el navegador y sirve como punto de entrada al contenido de la página web, que es el árbol DOM. Es decir, el código HTML.

La interfaz `document` describe las propiedades y métodos comunes para cualquier tipo de documento.

En conclusión, es el nodo raíz del documento HTML.

## Acceder al DOM mediante Selectores ##
Esta es la manera de acceder al DOM y manipularlo con nuestro JS.

**Métodos**

- document.getElementById("id") => Encuentra un elemento html mediante el Id.
- document.getElementsByClassName("class") => Encuentra un elemento html mediante clases.
- document.getElementsByTagName("tag") => Encuentra un elemento html mediante las etiquetas.
- document.getElementsByName("nombre") => Encuentra el atributo name="nombre" en nuestro código HTML. Funciona para los forms y sus inputs.

- document.querySelector() => Recibe un selector válido de CSS y devuelve el primer elemento del documento (utilizando un recorrido primero en profundidad pre ordenado de los nodos del documento) que coincida con el grupo especificado de selectores.
- document.querySelectorAll() => Devuelve una NodeList estática (no viva) que representa una lista de elementos del documento que coinciden con el grupo de selectores indicados.

Cabe destacar que querySelector devolverá null si no encuentra coincidencias.

Por último, se puede agregar varios selectores en nuestro querySelector, un ejemplo de esto sería:

``document.querySelectorAll(#menu ul);``
De esta manera, seleccionaría todos los elementos ul dentro del contenedor con el ID menu.


Ejemplos de querySelector con los diferentes selectores:

- document.querySelector('h1');
- document.querySelector('.title');
- document.querySelector('#title');


De esta manera, podríamos almacenar elementos HTML dentro de una variable/constante de JavaScript.

Ejemplo:

**Código HTML**

``<h1>Soy un H1</h1>``

**Código JS**

``let titulo = document.querySelector('h1');`` => almacenando una etiqueta h1 en nuestro javascript.

## Elementos del Documento ##

Con las siguientes palabras claves, podremos acceder especificamente a una parte de nuestro elemento HTML.

``
document.head
document.body
document.documentElement
document.doctype
document.charset
document.title
document.links
document.images
document.forms
document.styleSheets
document.scripts
``

- document.head  => Devuelve el elemento <head> del documento actual.
- document.body => Devuelve el elemento <body> del documento actual.
- document.documentElement => Devuelve el elemento <html> del documento actual.
- document.doctype => Devuelve la versión de nuestro código <html>.
- document.charset => Devuelve la codificación de caracteres usada en la hoja de estilos.
- document.title => Devuelve el titulo de la página de nuestra línea de código <title>.
- document.links => Devuelve todos los links que hayan en la página, es decir la etiqueta <a>.
- document.images => Devuelve todas las imágenes que hayan en la página, es decir la etiqueta <img>.
- document.forms => Devuelve todos los formularios que hayan en la página, es decir la etiqueta <form>.
- document.styleSheets => Devuelve todos <link> que haya de CSS.
- document.scripts => Devuelve todos <scripts> que haya en nuestro código HTML.




## Element ##
Una vez tenemos el elemento HTML, podemos modificarlo.

Element hereda la interfaz genética Node, y juntos, estas dos interfaces proporcionan muchos métodos y propiedades utilizables sobre los elementos individuales.

**Propiedades**

- attributes => Todos los atributos asociados a un elemento.
- childNodes => Todos los nodos hijos de un elemento.
- className => La clase de un elemento.
- clientWidth => El ancho interior del elemento.
- clientHeight => El alto interior del elemento.
- dir => La direccionalidad del elemento. 
- firstChild => El primer hijo del elemento, devolverá null si no hay.
- id => La identificación del elemento.
- innerHTML => El contenido y el código que hay dentro del elemento
- lang => El lenguaje de los atributos, texto y contenido del elemento.
- lastChild => El último hijo directo del elemento, null si no hay.
- localName => La parte local del nombre cualificado del elemento.


- name => El nombre del elemento.
- namespaceURI => El URI del espacio del nombre de ese nodo, null si no está especificado.
- nextSibling => El nodo inmediatamente posterior al primero dado en el árbol, null si no hay.
- nodeName => El nombre del nodo de ese elemeno.
- nodeType => Un número que representa el tipo del nodo. Lo mismo que 1 para los elementos DOM. 
- nodeValue => El valor del nodo. Lo mismo que null para los elementos DOM. 
- offsetHeight => El alto de un elemento, tal cual está escrito en la composición.
- offsetLeft => La distancia que hay desde el borde izquierdo del elemento al de su offsetParent. 
- offsetParent => El elemento del cual todos los cálculos de distancia son actualmente computados. 
- offsetTop => La distancia desde el borde superior del elemento hasta el de su offsetParent. 
- offsetWidth => El ancho de un elemento, tal cual está escrito en la composición. 
- ownerDocument => El documento en le cual está ese nodo, null si no hay.


- parentNode => El elemento original, es decir, el elemento padre de ese nodo. Null si no hay dentro del documento de DOM.
- prefix => El prefijo del espacio de nombre del nodo, null si no está especificado.
- previousSibling => El nodo inmediatamente anterior al primero dado en el árbol, null si no hay
- scrollHeight => Muestra la altura del deslizamiento del elemento.
- scrollLeft => Obtiene/establece el offset de scroll izquierdo de un elemento.
- scrollTop => Obtiene/establece el offset de scroll superior de un elemento.
- scrollWidth => Muestra el ancho de deslizamiento de un elemento.
- style => Un objeto representando las declaraciones de los atributos de estilo del elemento.
- tabIndex => Obtiene/establece la posición del elemento en el órden de tabulación.
- tagName => El nombre dado de la etiqueta para el elemento dado.
- textContent => Obtiene/establece los contenidos textuales de un elemento y todos sus descendentes.

**Métodos**


<!-- https://developer.mozilla.org/es/docs/Web/API/Element -->

<!-- https://developer.mozilla.org/es/docs/Web/API/Document_Object_Model/Introduction#probando_el_api_del_dom -->

<!-- https://bluuweb.github.io/javascript/02-dom/#buscar-elementos-html -->


<!-- https://www.youtube.com/watch?v=XydYN4ZQL9s -->
<!-- https://www.youtube.com/watch?v=qcntA-rcKcQ -->
<!-- https://www.youtube.com/watch?v=sVitHchciMw -->
<!-- https://www.youtube.com/watch?v=m7VxR9CxU2s -->