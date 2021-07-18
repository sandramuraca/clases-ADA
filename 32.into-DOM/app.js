//todo elemto va a tener funciones y propiedades asociadas

//DOCUMENT OBJET MODEL
//representacion del html que se hace JS

//Selectores
//cuando tengo mas de 1 elemeto con el mismo id solo selecciona el primer elemento
//querySelector selecciona el primer elemento que encuentra con esa clase

/*const parrafo = document.getElementById("primer-parrafo");
const segundoParrafo = document.getElementById("segundo-parrafo");


console.log(parrafo);
console.log(segundoParrafo);

const titulo = document.querySelector("h1"); //selector por etiqueta
const rojo = document.querySelector(".rojo"); //selector por clase
const primerParrafo = document.querySelector("#primer-parrafo");// selector por id
const tituloHijoDeContenedor = document.querySelector(".contenedor > h1"); // selecciono al h1 hijo del div contenedor que tiene la clase .contenedor

const azul = document.querySelector("#azul");

console.dir(azul); // me muestra todas las clases y propiedades de ese elemnto

console.log(azul.textContent);// me muestra el contenido del texto de ese elemento

//PROPIEDAD TEXT CONTENT
azul.textContent = "este texto lo modifique desde mi js";

const nombre = prompt("Por favor indique su nombre");
const titulo = document.querySelector(".verde");
titulo.textContent = `Hola ${nombre} Bienvenido a Dom`;*/

//PROPIEDAD CLASS LIST
//se puede ver en la consola 

const otroParrafo = document.querySelector(".segundo");
console.log(otroParrafo);//corroboro haber seleccionado el elemento
console.log(otroParrafo.classList);//me muestra todas las clases del elemento

//puedo modificar o agregar una clase a un elemento
otroParrafo.classList.add("violeta");// agrego esa clase al elemento seleccionado

//puedo tambien quitar una clase con classList.remove()

//PROPIEDAD STYLE
//se puede modificar agregando una clase
//se puede modificar agregando un stylo en linea - ver ejemplo modo oscuro


//MODIFICAR ATRIBUTOS
const imagen = document.getElementById("imagen");
console.log(imagen);//veo el elemento

//ver el atributo
console.log(imagen.src)

//modificar el atributo src
imagen.src = ""; //nuevo src que quiero que tenga la imagen


//de esta forma puedo modificar cualquier atributo de una elemto - ejemplo
//href

//VER EJERCICIOS MUMUKI --->MANEJO DE DOM--->INTRODUCCION AL DOM