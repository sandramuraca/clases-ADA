const nombre = prompt("ingresa tu nombre");
const titulo = document.querySelector("h1");

titulo.innerHTML = `Hola ${nombre}`;

const estilos = "color: red; background-color: black;"
titulo.style =  estilos;

