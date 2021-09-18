// 1. Hacer una funcion "ordenarAlfabeticamente" que reciba un array y lo retorne ordenado alfabeticamente. 

const frozen = ["Elsa", "Hans", "Olaf", "Ana", "Kristoff"]
const moana = ["Moana", "Tamatoa", "Maui", "Hei Hei"]

const ordenarAlfabeticamente = (array) => {
    const arrayOrdenado = array.sort()
    return arrayOrdenado
}

const arrayOrdenadoAlfabeticamente1 = ordenarAlfabeticamente(frozen)
console.log(arrayOrdenadoAlfabeticamente1)

const arrayOrdenadoAlfabeticamente2 = ordenarAlfabeticamente(moana)
console.log(arrayOrdenadoAlfabeticamente2)

// 2. Hacer una funcion "revertirOrden" que reciba un array y retorne sus elementos en orden inverso. 

const revertirOrden = (array) => {
    const arrayRevertido = array.reverse()
    return arrayRevertido
}

const arrayRevertido1 = revertirOrden(moana)
console.log(arrayRevertido1)
const arrayRevertido2 = revertirOrden(frozen)
console.log(arrayRevertido2)

// 3. Hacer una funcion "incluyeNombre" que reciba un array y un string y retorne true si el array incluye al string, o false en caso contrario. 
const incluyeNombre = (array, nombre) => {
    const nombreIncluido = array.includes(nombre)
    return nombreIncluido
}

const nombreInluido1 = incluyeNombre(moana, "Ana")
console.log(nombreInluido1)
const nombreInluido2 = incluyeNombre(frozen, "Ana")
console.log(nombreInluido2)

// 4. Hacer una funcion "ultimosDos" que reciba un array y retorne un array con los ultimos dos elementos del original. 

const ultimosDos = (array) => {
    const revertir = array.reverse()
    const ultimos = revertir.slice(0,2)
    return ultimos
}

const ultimos1 = ultimosDos(frozen)
console.log(ultimos1)
const ultimos2 = ultimosDos(moana)
console.log(ultimos2)

//otra forma
/*
const ultimosDos = (array) => {
    const untimos2 = array.length-1
    return untimos2
}

const ultimos3 = ultimosDos(frozen)
console.log(ultimos3)
const ultimos4 = ultimosDos(moana)
console.log(ultimos4)*/

