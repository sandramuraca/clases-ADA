//Clase 51 - Resumen
//         *Matriz: concepto y ejemplos
//         *Matriz cuadrada  
//         *for dentro de otro for           


// ---Matrices---
//Array compuesto por otros arrays

const nombres = ["Carolina", "Carola", "Gabi", "Naty"]

console.log(nombres[0])

const edad = [18, 37, 89]

//podemos tener un array con varios tipos de elementos, incluso otro array
const mixto = [18, "string", true, [2, 3, 4], nombres]

console.log(mixto)

//para acceder a un elemento que esta en un array dentro de otro, se llama a la posicion del array y luego la posicion del elemento que busco
console.log(mixto[3][0])

//Ejemplos de matrices:
//se puede entender como un sistema de filas y columnas
const matriz =[[1, 2, 3],
               [22, 33, 44], 
               [555, 666, 777]]

const alumnas =[
    ["Diame", "Caro", "Cande"],
    ["Giardini", "Lerner", "Gaitan"],
    [21, 26, 22],
    ["diame 686", "av.lernenr 543", "San Martin 105"]
]

//accedo a los datos de Diamela, esto es una matriz cuadrada, misma cantidad de filas y columnas
    //col-fila
console.log(alumnas[0][0])
console.log(alumnas[1][0])
console.log(alumnas[2][0])
console.log(alumnas[3][0])

//accedo a los datos de Caro
console.log(alumnas[0][1])
console.log(alumnas[1][1])
console.log(alumnas[2][1])
console.log(alumnas[3][1])

//accedo a los datos de Cande
console.log(alumnas[0][2])
console.log(alumnas[1][2])
console.log(alumnas[2][2])
console.log(alumnas[3][2])

//como recorro un array que tiene otro array dentro? 
//con un for dentro de otro for
//el primer for identificado con (i) va a recorrer las posiciones, que en el ejemplo anterior son las "filas", es decir el array de nombres, el de apellido y el de edades
//el segundo for identificado con (j) va a recorrer cada uno de los arrays es decir cada una de las [i] -que son posiciones y arrays-

for (let i = 0; i < alumnas.length; i++) {
    console.log("i", i)
    console.log(alumnas[i])
    
    //asi puedo ver cada uno de los elemento de uno en uno
    for (let j = 0; j < alumnas[i].length; j++) {
       console.log("j",j)
       console.log(alumnas[i][j])        
    }
}

//encontrar el nro mayor dentro de una matriz

const matrizNumeros = [
    [1, 2, 3, 4, 5, 6],
    [99, 88, 77, 55, 66, 22],
    [555, 666, 888],
    [1111, 2222, 3333, 8888]
]

let masGrande = 0

for (let i = 0; i < matrizNumeros.length; i++) {
    for (let j = 0; j < matrizNumeros[i].length; j++) {
        if(matrizNumeros[i][j] > masGrande){
            masGrande = matrizNumeros[i][j]
        }
    }
    
}
console.log(masGrande)

//Ejercicio Mumuki: ejercicio 2 de Matrices: Sumar

const numeros = [[4, 5], [2, 7, 1], [8, 10]]

const sumar = (array) => {
   let resultado = 0

   for (let i = 0; i < array.length; i++) {
       for (let j = 0; j < array[i].length; j++) {
          
        resultado = resultado + array[i][j]
       }
    }
    return resultado
}

console.log(sumar(numeros))

//Ejercicio Mumuki: ejercicio 6 de Matrices: Obtener fila mas larga

const lista = [[1, 4], [3, 7, 5, 10, 14], [1]]
const lista1 = [[1], [3, 7], [6]]

const obtenerFilaMasLarga = (matriz) =>{
   let masLarga = 0

    for (let i = 0; i < matriz.length; i++) {
      if(matriz[i].length > masLarga){
        masLarga = matriz[i].length
      }
    }
    return masLarga
}

console.log(obtenerFilaMasLarga(lista))
console.log(obtenerFilaMasLarga(lista1))