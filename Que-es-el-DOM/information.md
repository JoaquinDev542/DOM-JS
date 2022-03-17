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

- document.querySelector() => Devuelve el primer elemento del documento (utilizando un recorrido primero en profundidad pre ordenado de los nodos del documento) que coincida con el grupo especificado de selectores.
- document.querySelectorAll() => Devuelve una NodeList estática (no viva) que representa una lista de elementos del documento que coinciden con el grupo de selectores indicados.

Cabe destacar que querySelector devolverá null si no encuentra coincidencias.

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
