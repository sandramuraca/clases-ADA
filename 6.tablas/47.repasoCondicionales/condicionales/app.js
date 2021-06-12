//consicionles
/* 
if(condicion true){
    codigo que debe ejecutarse si se cumple la condicion
}*/

const usuarioEdad = Number(prompt("cual es tu edad?"));
//const usuarioEdad = parseInt(prompt("cual es tu edad?")); -->parcear

if(usuarioEdad == 18){
    console.log("Puede ver el contenido");
};

//operadores ternarios--> manera mas corta de escribir un CONDICIONAL

/*Sintaxis:
(condicion) ? true : false;
es decir dada una condicion se ejecuta una parte o la otra, las partes estan divididas por los dos puntos*/

let numero = 2;

let mensaje = (numero === 2) ? 'El numero es 2' : 'El numero no es dos';

console.log(mensaje);

//switch

/*Sintaxis:

switch(expresion){
    case label1:
    Lo que debe ejecutarse si es true
    break;

    case label2:
    Lo que debe ejecutarse si es true
    break;

    case label3:
    Lo que debe ejecutarse si es true
    break;

    default:
    Lo que se debe ejecutar si no se cumplen ninguna de las condiciones anteriores
    break
};
*/
