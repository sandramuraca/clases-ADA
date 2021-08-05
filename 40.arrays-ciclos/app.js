//Cuando quiero repetir cosas pero no se cuantas voy a usar el ciclo for

/* Estructura FOR de VSC

-la variable index va a ir tomando las posiciones o identificadores necesarios del array que quiero recorreo

-contar mientras que index sea menor a la longitud del array

for (let index = 0; index < array.length; index++) {
    //onst element = array[index];
    
}*/

// los arrays tb tienen longitud

const alumnas = ["gabi", "ELI", "STELLA", "Vicki", "Nati", "Claudia"]

for (let index = 0; index < alumnas.length; index++) {
    //const element = array[index];
    console.log(index) //trae las posiciones
    console.log(alumnas[index]) //trae el elemento que hay en cada posicion
}

//contar los elementos mayores a 18 años
//guardar esos elementos en la variable contador
//contador solo cuenta los elementos que son mayores a 18, en la vuelta que el elemento no cumple la condicion contador mantiene el valor de la vuelta anterior

const edades = [23, 27, 30, 21, 99, 6, 33, 4, 9]
let contador = 0

for (let index = 0; index < edades.length; index++) {
        
    if(edades[index] > 18){
        contador++
        console.log(edades[index]) //solo meustra las edades que cumplen las condiciones
    }
    console.log("index", index)
    console.log("contador", contador) 
      
}
console.log("contador", contador) //aca veo la cantidad de elementos que cumplen la condicion

//un array como parametro en una funcion
//que reciba array y retorne la cantidad de elementos > a 18 en ese array

const edadesPersonas = [5, 6, 28, 99, 3]
const numeros = [6, 3, 1, 99]

const mayoresA18 = (array) => {
    contador = 0

    for (let index = 0; index < array.length; index++) {
       if (array[index] > 18){
           contador++
       }
    }
    return contador
}

console.log(mayoresA18(edadesPersonas))
console.log(mayoresA18(numeros))

//me retorma true si encuentra algun elemento mayor a 18
//la variable "bandera" levanta la baderita cuando encuentra un elemento que cumpla con la condicion indicada

const numerosMayores = [22, 33, 40, 20]
const numerosMenores = [1, 2, 3, 4, 5]


const hayMayorA18 = (array) => {
    let hayMaroresDe18 = false //variable bandera o "flag"

    for (let index = 0; index < array.length; index++) {
       if (array[index] > 18){
           hayMaroresDe18 = true
       }
    }
    return hayMaroresDe18
}

console.log(hayMayorA18(numerosMayores))
console.log(hayMayorA18(numerosMenores))

//ARRAYS BIDIMENSIONALES
//array dentro de ptrp array

const persona = [
    ["Jenn", "Ivi", "Agus", "Sofi"]
    [28, 25, 22, 21]
   
]

