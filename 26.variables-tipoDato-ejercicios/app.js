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

console.log(typeof edadDelUsuario)*/

//----conversion de tipo de dato----

let nombre = "Sandra";
let edad = 42;

console.log(typeof nombre);
console.log(typeof edad);

let nombreANumero = Number(nombre);
let edadAString = String(edad);

console.log(typeof nombreANumero);
console.log(typeof edadAString);

// Mumuki Capítulo 2: Introducción a JavaScript -- ejercicio 1

let nombre = prompt("¿Cual es tu nombre?");
let apellido = prompt("¿Cual es tu apellido?");

alert(`Hola ${nombre} ${apellido}, bienvenida a Ada`);

// Mumuki Capítulo 2: Introducción a JavaScript -- ejercicio 2

let gusto1 = prompt("¿Cuál es el primer gusto?");
let gusto2 = prompt("¿Cuál es el segundo gusto?");
let gusto3 = prompt("¿Cuál es el tercer gusto?");

alert(`Aquí tiene su helado de ${gusto1}, ${gusto2} y ${gusto3}`);

// Mumuki Capítulo 2: Introducción a JavaScript -- ejercicio 3

let nombreUsuario = prompt("¿Cuál es tu nombre?");
let apellidoUsuario = prompt("¿Cuál es tu apellido?");
let edadUsuario = prompt("¿Cuál es tu edad?");
let nacionalidadUsuario = prompt("¿Cuál es tu nacinalidad?");
let idUsuario = prompt("¿Cuál es tu número de documento?");

alert(`El nuevo perfil fue ingresado al sistema: 
        nombre: ${nombreUsuario}, 
        apellido: ${apellidoUsuario}, 
        edad: ${edadUsuario}, 
        nacionalidad: ${nacionalidadUsuario}, 
        número de documento: ${idUsuario}`);


// Mumuki Capítulo 2: Introducción a JavaScript -- ejercicio 4

let playlist = prompt(`¿Cuál es el nombre de la playlist?`);
let cancion1 = prompt(`¿Cuál es la primera canción?`);
let cancion2 = prompt(`¿Cuál es la segunda canción?`);
let cancion3 = prompt(`¿Cuál es la tercera canción?`);

alert(`Se ha creado la playlist ${playlist} con las canciones ${cancion1}, ${cancion2}, ${cancion3}`);

// Mumuki Capítulo 2: Introducción a JavaScript -- ejercicio 5

let calle = prompt("¿Cuál es la calle?");
let numero = prompt("¿Cuál es el número?");
let departamento = prompt("¿Cuál es el departamento?");
let codigoPostal = prompt("¿Cuál es el código postal?");
let ciudad = prompt("¿Cúal es la ciudad?");
let pais = prompt("¿Cúal es el país?");

alert(`La dirección que ha ingresado es: ${calle} ${numero} ${departamento}, ${codigoPostal}, ${ciudad}, ${pais}`);

// Mumuki Capítulo 2: Introducción a JavaScript -- ejercicio 6

let edad = prompt("Ingresá una edad por favor")
let edadPerro = Number(7);
let resultado = edadUsuario * edadPerro;

alert(`El equivalente de ${edad} en años perros es: ${resultado}`);

// Mumuki Capítulo 2: Introducción a JavaScript -- ejercicio 7

let minutos = prompt("Ingresá una cantidad de minutos");
let segundos = Number(60);
let resultado = minutos * segundos;

alert(`El resultado de la conversión de ${minutos} minutos a segundos es: ${resultado}`);

// Mumuki Capítulo 2: Introducción a JavaScript -- ejercicio 8

let dias = prompt("Ingresá una cantidad de días por favor");
let segundosEnUnDia = Number(86400);
let resultado = dias * segundosEnUnDia;

alert(`El resultado de la conversión de ${dias} días a segundos es: ${resultado}`);

// Mumuki Capítulo 2: Introducción a JavaScript -- ejercicio 9

let kilometros = prompt("Ingresá una cantidad de kilómetros por favor");
let equivalenteKmAMilla = Number(0.6213);
let resultado = kilometros * equivalenteKmAMilla;

alert(`resultado de la conversión de ${kilometros} kilometros a millas es: ${resultado}`);