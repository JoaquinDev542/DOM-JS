const $title = document.querySelector(".title");
const $paragraph = document.querySelector("#paragraph");
const $input = document.querySelector(".input");



console.log($title);
console.log($paragraph);
console.log($input);


console.log($input.value);
// Soy un texto en un input

console.log($paragraph.id);
// paragraph

console.log($title.textContent);
// Propiedades Principales más Usadas

console.log($title.innerHTML);
// Propiedades Principales más <span>Usadas</span>

// $title.textContent = "Cambiando el valor del contenido";
$paragraph.id = "nuevoID";

console.log($paragraph);

$input.value = "cambio el valor";