/*console.log("hola");

//tipos de indicaciones

alert("Hola, soy una alerta"); // no retorna nada, retorna undefined

prompt("Hola soy un prompt"); // retorna lo que el usuario ingresa, siempre lo va a interpretar como string

let respuestaDelUsuario = prompt("Por favor ingrese su nombre");

console.log(respuestaDelUsuario);

alert( "Hola" +" "+ respuestaDelUsuario);


let edadDelUsuario = prompt("Por favor ingrese su edad");

console.log(edadDelUsuario);

alert("tu año de nacimiento es:" + (2021 -edadDelUsuario));

//si quiero saber que tipo de dato es el que estoy usando uso typeof

console.log(typeof edadDelUsuario)

//----conversion de tipo de dato----

let nombre = "Sandra";
let edad = 42;

console.log(typeof nombre);
console.log(typeof edad);

let nombreANumero = Number(nombre);
let edadAString = String(edad);

console.log(typeof nombreANumero);
console.log(typeof edadAString);*/

// Capítulo 2: Introducción a JavaScript -- ejercicio 1

let nombre = prompt("¿Cual es tu nombre?");
let apellido = prompt("¿Cual es tu apellido?");

alert(`Hola ${nombre} ${apellido}, bienvenida a Ada`);