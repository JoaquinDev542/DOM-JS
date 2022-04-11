// console.log("Crear, clonar y borrar elementos"); 

// const $list = document.getElementBy("list");
// const newElement = document.createElement("li");
// newElement.textContent = "Im a new element"

const $list = document.querySelector("#list");

let elementLi = document.createElement("li");
$list.appendChild(elementLi);
elementLi = elementLi.textContent = "Hijo 3";

let element2Li = document.createElement("li");
$list.insertBefore(element2Li , elementLi);
element2Li = element2Li.textContent("Primer elemento");