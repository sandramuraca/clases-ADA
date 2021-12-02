//METODO AVANZADO --- REDUCE

//para cada tipo de problema se utiliza un metodo distinto para resolverlo:
//map sirve para retornar todos los elementos del array original modificado
//filter sirve para retornar un array con algunos de los elementos modificados
//find devuelve uno de los elementos modificados

//a partir de un array
//quiero quedarme con UN SOLO VALOR
//y ese valor NO es un elemento del array original


/****redudce recibe 2 parametos
 * 1) una funcion
 * 2) valor inicial de la acumuladora
 *******/
const numeros = [1, 2, 3, 4, 5, 6, 7]

//suma de loes elementos de un array
const sumaNumeros = numeros.reduce ((acc, elemento)=>{
return (acc + elemento)

}, 0)
console.log(sumaNumeros)

//promedio de todos los numeros
const promedioNumeros = numeros.reduce ((acc, elemento)=>{
    return acc + (elemento / numeros.length)
}, 0)
console.log(promedioNumeros)

//suma de todos los numeros del array
//un string con los elementos del array
// promedio de todos los mumeros de este array

//stirng con todos los nombres concatenados
const nombres = ["Laura", "Romi", "Lore"]

const resultado = nombres.reduce ((acc, elemento)=>{

    return acc + elemento
}, "")
console.log(resultado)

//agregar etiquetas

const liNombres = nombres.reduce((acc, elemento)=>{
return acc + "<li>" + elemento + "</li>"
},"")
 console.log(liNombres)
//con este codigo puedo pasar la variable con un inner html
