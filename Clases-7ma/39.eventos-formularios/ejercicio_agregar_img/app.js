/*Agregar imágenes
Crear una página que:

Tenga un input para la url de la imagen, un botón que diga Agregar imagen y un contenedor flexible donde mostrar imágenes como en una grilla.
Al presionar el botón, si el input no está vacío, se agregue una imagen al contenedor cuyo src es el contenido del input y se borre el contenido del input.
Al hacer click en una imagen, esta se elimine.
1. obtener elementos del DOM
2. cuandos e presiona enviar (click) se debe agregar el atributo scr a a etiqueta img y se borra el input
3. cuando hago click a la img se resetea el src */

const inputImg = document.querySelector("#srcImg");
const buttonImg = document.querySelector("#addImg");
const img = document.querySelector("#img");

//se agrega a la imnagen el valor que se ingresa por el input
buttonImg.addEventListener("click", () => {
    if (inputImg != "") {
        img.src = inputImg.value;
        inputImg.value = ""; 
    } else{
        console.log ("ingreso un src vacia");
    }
});

//asi se resetea la imagen
img.addEventListener("click", () => {
    img.src = "";
})