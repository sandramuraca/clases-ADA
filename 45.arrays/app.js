//en esta clase vemos como usar una variable acumuladora con los arrays
// como construir Html desde mJS con inner.HTML
//apuntes en https://docs.google.com/document/d/10kaNkk9uoCVVswXnYZz9gPvhtlflbYLNyA0H2vQumk4/edit


//ejercicios:


//1. Hacer un codigo que recorra el array numeros y muestre en consola la suma de todos ellos. El resultado deberia ser 24.

const numeros = [5, 7, 8, 4]

let acc = 0

for (let i = 0; i < numeros.length; i++) {
   acc = acc+ numeros[i]
}

console.log(acc)

//2. Dado el anterior array de nombres, hacer un codigo que recorra todos los nombres y muestre en consola el mensaje

const nombres = ["Ana", "Elsa", "Olaf", "Sven", "Hans"]

let acumuladora = ` `

for (let i = 0; i < nombres.length; i++) {
      acumuladora = acumuladora + `${nombres[i]} -`
}

console.log(acumuladora)

//3. Dado el mismo array, hacer un codigo que muestre en consola el siguiente mensaje:
//<li>Ana</li><li>Elsa</li><li>Ana</li><li>Olaf</li><li>Sven</li><li>Hans</li>

let items = ``



//4. Dado el mismo array, hacer un codigo que muestre en el HTML de la pagina una lista ordenada con todos los nombres. El "ul" ya deberia estar en el HTML. El resto se debe hacer con javascript.

/*
const personajesFrozen = document.querySelector(".personajesFrozen")

let lis = ``
for (let i = 0; i < nombres.length; i++) {
    lis = lis + `<li>${nombres[i]}</li>`
}

console.log(lis)

personajesFrozen.innerHTML = lis
*/

//METODOS DE ARRAYS
//.slice recorta una porcion de un array - recibe 2 parametros

const persFrozen = ["Ana", "Elsa", "Sven", "Hans"]
//los parametros es desde que posicion hasta que posición no inclusive
//si no indico el segundo parametro trae los elementos hasta le final del array
console.log(persFrozen.slice(1, 3))

//puedo guardar en una variable nueva los elementos seleccionados con el slice

const persSeleccionados = persFrozen.slice(1, 2)
console.log(persSeleccionados)

//.splice recibe 3 parametros-- permite agregar y quitar elementos a un array
//1° parametro desde donde voy a agregar o quitar
//2° parametro cuantos elementos quiero contar
//3° parametro lo que quiero agregar 
//puedo agregar optativamente un 4to, 5to, x cantidad de elementos que quiera agregar
console.log(persFrozen.splice(0, 1, "Olaf"))