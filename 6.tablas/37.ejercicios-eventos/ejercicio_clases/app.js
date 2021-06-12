
//paso 1 obtencio de dato
const textoTitulo = prompt("Ingrese el texto del titulo");
const clase1 = prompt("ingrese la primer clase");
const clase2 = prompt("ingrese la segunda clase");
const clase3 = prompt("ingrese la tercer clase");

// paso 2 seleccionar el elemento del dom que quiero modificar
const tituloDOM = document.querySelector(".titulo");

//paso 3 aplicar metodo para modificar el contenido del elemento por el que ingreso el usuario
tituloDOM.textContent = textoTitulo;

//paso 4 - modificar los estilos por los que ingreso el usuario
tituloDOM.classList.add(clase1);
tituloDOM.classList.add(clase2);
tituloDOM.classList.add(clase3);

//alternativa
tituloDOM.className = `${clase1} ${clase2} ${clase3}`;
