/*Funciones nativas*/

//String

const texto = "HOLA COMO ESTAS?";
const texto1 = "hola como estas?";

//.lenght me dice el largo de mi stirng - propiedad

console.log(texto,length);

//pasa a MAYUSCULA - función por eso lleva ()
console.log(texto.toUpperCase());

//pasa a minuscula - función por eso lleva ()
console.log(texto.toLowerCase());


console.log(texto == texto1); // devuelve false por que los textos no son iguales para que devuelva true:

console.log(texto.toUpperCase() == texto1.toUpperCase); //esto los iguala a todo a mayuscula

//.slice recorta cadena de texto, tiene dos parametros el caracter en el que inicia y el caracter donde termina cuenta al primero como 0

let cadena1 = "la mañana se nos viene encima";
let cadena2 = cadena1.slice(3,10);

//.includes retorna un true si el string que busco esta en el otro string, el segundo parametro es el que busca posicion a partir de la cual empieza a buscar y cuenta caracteres
console.log("ballena azul".includes("ballena",));

//.indexOf a diferencia del include me dice en posicion se encuentra la palabra que busco, si no la encuentra me decuelve un -1

"Blue Whale".indexOf("Blue")    // returns 0
"Blue Whale".indexOf("Blute")   // returns -1
"Blue Whale".indexOf("Whale",0) // returns 5
"Blue Whale".indexOf("Whale",5) // returns 5

//.replace busca los que le indicas en el primer parametro y lo reemplaza por el segundo, solo cambia el primero no todas las coincidencias

const p = 'The quick brown fox jumps over the lazy dog. If the dog reacted, was it really lazy?';
console.log(p.replace("dog", 'fox'));
console.log(p.replace(/[ou]/gi, 'i'))
