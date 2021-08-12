const nombres = ["Cande", "Eli", "Micky", "Sandra"]

nombres.length // representa la longitud del array
console.log(nombres.length)

//dentro de un for puedo hacer cualquier operación de js

//dado un array de 10 numeros retornar un numero que represente cuantos de ellos son positivos
/*pasos:
1. paso los arrays como parametros en la función
2.identifico cuales son los numeros positivos
3. los cuento, guardandolos en la variable cantidadDeNumerosPositivos */

const numeros = [1, 2, -8, -3, 5, 1, 9]
const masNumeros = [-8,44, 15, -20, 80, -14]

const cantidadDePositivos = (array) =>{

    let cantidadDeNumerosPositivos = 0

    for (let i = 0; i < array.length; i++) {
        
        if(array[i] >= 0){
        console.log(array[i])
        cantidadDeNumerosPositivos++
        }
    }
    return cantidadDeNumerosPositivos //el return se coloca fuera del for por cuando js encuentra un return corta la ejecucion de la funcion
}

cantidadDePositivos(numeros)
cantidadDePositivos(masNumeros)


//Ejercicio 2: Promedio de un curso
//Dado un array de 3 numeros, donde cada número representa la nota de una alumna, retornar el promedio final de nota del curso.

const numeros = [6, 8, 3] 

const promedio = (array) => {
    let sumaDeNotas = 0
    for (let i = 0; i < array.length; i++) {
        let nota = array[i]
        sumaDeNotas = sumaDeNotas + nota    
    }
    const promedioNotas = sumaDeNotas / (array.length)
    return promedioNotas
}

console.log(promedio(numeros))

//Ejercicio 3: Promedio de promoción
//Dado un array de 10 numeros, donde cada número representa la nota de una alumna, retornar el promedio tomando solo aquellas que tienen una nota mayor a 7.


const notas = [6,8,3,10,3,5,7,9,4,6]

const promedioPromocion = (array) => {
let sumaDeNotas = 0
let cantidadDeNotasMayoresASiete = 0
    for (let i = 0; i < array.length; i++) {
         if(array[i]>=7){           
         let nota = array[i]
         sumaDeNotas = sumaDeNotas + nota
         cantidadDeNotasMayoresASiete++
         console.log(array[i])
         }
    }
         const promedio = sumaDeNotas / (cantidadDeNotasMayoresASiete)
         console.log(promedio)
         return promedio
}
promedioPromocion(notas)


//Temperatura más alta
//Dado un array de cualquier longitud, compuesto por numeros que representan temperaturas de una región, se requiere retornar cuál fue la mayor temperatura.

const temperaturas = [ 0, 30, 15, 10, 3, 25, -7, 11, 28, 12]
const temperaturasBajoCero = [-10, -20, -30]

const temperaturaMayor = (array) =>{
    let temperaturaMasAlta = -Infinity

    for (let i = 0; i < array.length; i++) {
       if(array[i] > temperaturaMasAlta){
            temperaturaMasAlta = array[i]
       }
        
    }
    return temperaturaMasAlta
}

console.log(temperaturaMayor(temperaturas))
console.log(temperaturaMayor(temperaturasBajoCero))