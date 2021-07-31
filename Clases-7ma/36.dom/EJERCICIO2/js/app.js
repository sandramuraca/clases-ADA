//pide al usuario el dato
const colorBody = prompt("ingrese un color hexadecimal");

//selecciono una parte del DOM
const contenidoDoc = document.querySelector("body");

//creo una variable con el color que voy a aplicar, concateno el color con el atributo
const estilo = `background-color: ${colorBody}`;

//aplico a la constante donde seleccione la parte del DOM la constante en la que defini el color
contenidoDoc.style = estilo;