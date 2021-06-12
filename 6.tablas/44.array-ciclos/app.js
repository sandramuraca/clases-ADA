//-----ARRAY------: collecion de elementos del mismo tipo

//sirven para guardar datos de distonto tipo - nros, string, boolean -
//Se inicia con [] y los elemtos que contiene se separan con (,), es como un armario con distintos cajones donde se guardan cosas

const frutas = ["manzana", "banana", "pera", "mango"];

const edades = [1, 2, 3, 4, 5];

const vacio = []; // este array esta vacio y se puede llenar con datos posteriormente

//como acceder a los valores del array?
//nombreArray[posicionElemnto]

console.log(frutas[2]); // pera - cuenta desde 0, el primer elemento del array es posicion 0

//para saber la longitud de un array se utiliza la propiedad .lenght (inicia en 1)- Ej

console.log(edades.length);

console.log(vacio.length)

const ultimoElemento = frutas[frutas.length];
console.log(ultimoElemento);

//Añadir nuevo elemento al array, se agrega al final de la lista - propiedad .push ==> arreglo.push(elementoNuevo);

frutas.push("frutilla", "naranja", "melon"); // puedo agregar 1 o muchos elementos

//eliminar ultimo elemento del array - propiedad .pop

const ultimaFruta = frutas.pop();
console.log("ultimafruta", ultimaFruta);
console.log("arreglo frutas", frutas);

//Agregar elemento al inicio de un Array - propiedad unshift
frutas.unshift("coco");
console.log("frutas unshift", frutas);

//Elimina ek orimer elemento del array - propiedad .shift
const primerFruta = frutas.shift();
console.log("primer fruta", primerFruta);
console.log("Frutas shift", frutas);

//obtener la posición de un elemento: indexOf
const elemento3 = frutas.indexOf("manzana");
console.log("indexOf de manzana:", elemento3);



