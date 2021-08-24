//METODOS DE ARRAYS: retornan cosas y pueden o no modificar un array


//SLICE
//retorna enementos de un array de acuerdo a su oisición
//no modifica el array
//recibe dos parametor:
//1 desde donde contar el array inclusive - 2 hasta donde cortar no inclusive

const moana = ["Moana", "tamatoa", "Maui", "hei hei"]
console.log(moana.slice(0,2))
console.log(moana)

//SPLICE
//modifica un array para agregar y quitar un elemento
//recibe 3 parametros
//1-posicion que agregamos o quitamos/ 2- la cantidad de elementos a agregar o quitar (no inclusive) / 3-los elementos que quiero agregar
//modifica el array original
/*
moana.splice(0, 3, "Abuela Tala")
console.log("splice", moana.splice(0, 3, "Abuela Tala"))
console.log(moana)
*/

//CONCAT
//concatena arrays

const frozen = ["ana", "Elsa", "Olaf"]
const moanaYFronzen = moana.concat(frozen)
console.log(moanaYFronzen)


//INCLUDES
//True si contiene el parametro - false si no lo incluye
//difrencia entre mayusculas y minusculas, por lo que para buscar se debe capitalizar
//busca elementos exactos, si es Tamatoa no devuelve true para tamatoa, tampoco busca parcialmente, busca lo que hay exacto entre comillas y comillas

console.log(moana.includes("tamatoa")) //busqueda exacta capitalizada
console.log(moana.includes("a")) // no busca parcialmente

//JOIN
//retorna un string con todos los elementos unidos por el parametro
//si no le paso ningun parametro muestra los elementos separados por comas sin espacio entre comas

console.log(moana.join(" - "))

//REVERSE
//modifica el array original, invierte el orden de los elementos
//no recibe parametros
//se utiliza por ejemplo para ordenar de mas caro a mas barato de la A a la Z
console.log(moana.reverse())
console.log(moana)
console.log(moana.reverse())

//SORT
//ordena alfabeticamente
//modifica el array original y no recibe parametros
//solo ordena alfabeticamente string, no aplica para numeros

console.log(moana.sort())
