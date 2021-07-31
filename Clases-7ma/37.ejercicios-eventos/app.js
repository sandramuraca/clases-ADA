
//seleccionar un elemento del DOM


const titulo = document.getElementById("primero");

//se puede seleccionar por
// #id = #id+ id de la tiqueta
// class = . class + nombre de la clase
// tag = la etiqueta es sin nada

//querySelector me retorna el primer elemento de coincide

const titulo1 = document.querySelector("#primero");
const titulo2 = document.querySelector(".titulo");
const titulo3 = document.querySelector("h1");

titulo.innerText = "hola como estas?"

//solo me permite texto
titulo1.textContent = "mi texto";
//permite escribir html dentro
titulo1.innerHTML = "mi texto <p> que genial</p>"; // se puede agregar una clase de css
//modificacion de estilos en linea

titulo1.style = "background-color:#333333";

//modificacion de clases
titulo1.className = "rojo titulo texto";

//classList tiene muchos metodos para modficar las clases de un elemento
titulo1.className.add("texto");
titulo.className.remove("texto-grande");
