// estructura de un if
/* si (se cumple esta condicion){ entonces
    (ejecutar este codigo) 
}
si la condicion es TRUE ejecuta
si la condicion es FALSE no lee el fragmento de codigo
*/

//IF --- ELSE

const colorSemaforo = "rojo";

if (colorSemaforo === "verde"){
    alert("podes avanzar");
} 
else {
    alert("no podes avanzar");
}

/*IF ELSE IF
si (pasa algo-condicion){
    (hace esto)
} en cambio si (pasa otra cosa-condicion){
    (hace esto otro)
} en cambio {
    (hace esta otra cosa)
}
*/

if (color === "rojo"){
    alert("detenerse");
} else if (color === "amarillo"){
    alert("precausion");
} else if (color === "verde"){
    alert("avazar");
} else {
    alert("color invalido")
} // else es condicion default-->no es mandatorio puede no estar, pero es la opcion que cierra todas las opciones

//OPERADORES LOGICOS
// && ---> Y ---> todas las condiciones tienen que ser true
// || ---> O ---> una u otra condicion tiene que ser true

//Para estudiar en ADA tenes que ser mujer y mayor de edad:
// es este caso para que pueda estudiar en ADA tienen que ser tru las 2 condiciones
const siEsMujer = true;
const esMayorDeEdad = true;

// puede ver la pelicula si es mayor de 18 o va acompa;ad de sus padres

const edad = prompt("decime tu edad");
const vaAcompaniadoDeSusPadres = prompt("Si va acompa;adp [pr sus padres diga SI, no no, diga NO");

if (edad >= 18 || vaAcompaniadoDeSusPadres === "si"){
    alert('Puede ver la pelicula');
} else{
    alert("no puede ver la pelicula");
}


