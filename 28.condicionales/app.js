// en las Funciones siempre pensar que recibe el programa y que retorna

//puedo llamar funciones desde adentro de otras funciones


// Operadores aritmeticos= + - * /
// Operador de asignación =

// Operadores relacionales < > <= >=  ==  ===  !=  !, siempre devuelven un booleano

const edadDelUsuario = prompt("Cuantos años tenes?");
const esMayorDeEdad = edadDelUsuario > 18;

//club de los No Homeros:
// preguntar al usuario su nombre
//Si el nombre del usuario NO es Homero, tenemos que mostrar un alert que diga
//"bienvenide a la web"

let nombreUsuario = prompt("Cual es su nombre?");

if (nombreUsuario != "Homero"){
    alert("bienvenide a la web!")
} else{
    alert ("usted no puede ingresar")
};
