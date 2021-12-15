//MANERAS ALTERNATIVAS DE ESCRIBIR COSAS QUE YA SABEMOS

//funcion flecha, cuando tiene un solo parametro el parentesis es optativo

const duplicar = num1 =>{
    return num1*2
}

console.log(duplicar(4))

//retorno implicito, puedo prescindir del return
//cuando no tiene llaves luego de la flecha
//y no tiene la palabre return, js asume que
//lo que la funcion reotrna es lo que viene inmediatamente despues de la flecha
//sirve para funciones muy sencillas (de 1 sola linea)

// const duplicar = num2 => num2 * 2

// console.log(duplicar(8))

//ejemplo con objeto, se usa el () para envolver el objeto

const construirObjeto = (nombre, edad) => ({
    nombre: nombre,
    edad: edad,
})

console.log(construirObjeto("Carola", 22)) 


//condicional
const edad = 17
const mostrarMensajeMayorEdad = (edad) => {
    if (edad >= 18) {
        return "Podes ingresar a la pagina"
    }
    else{
        return "No podes ingresar a la pagina"
    }
}

console.log(mostrarMensajeMayorEdad(21))

//mismo condicional con operador ternario
const mostrarMensajeMayorEdad2 = edad => edad >= 18 ? "podes ingredar a la pagina" : "No podes ingresar a la pagina"

console.log(mostrarMensajeMayorEdad2(17))

//operador de cortocircuito
//es una expresion
//si la primer cosa es verdadera, hago la segunda
//si no es verdadera, no hace nada

if (edad > 18) {
    alert ("mayor a 18")
}

edad > 18 && alert("mayor a 18")

//PROMESAS (JS ASINCRONO)
//consumimos promesas: vamos a tener metodos que nos retornan promesas
//se plantea, se puede cumpli o no, pero cuando se plantea no sabemos si va a ocurrir
//estados de una promesa
//pendiente
//resuelta
//rechazada

setTimeout(() =>{
console.log("hola")
}, 3000)

//tiene dos parametros, una funcion y milisegundos, es el tiempo que tiene que esperar para ejecutar el codigo que esta entre las llaves

//azucar sintactica, es lo mimo que una promesa, escrito mas lindo
//async await
//siempre en una funcion
//esa funcion la definidmos como funcion ASINCRONA

//EJEMPLOS - distintas maneras de escribir algo
//Sintaxis tradicional

const baseUrl = "http://reqres.in/api/"

const obtenerUsuarios3 = () => {
    fetch (baseUrl + "users")
    .then (res => res.json)
    .then(data => {
        console.log(data)
    })
}

//Sintaxis con async away
const obtenerUsuarios4 = async () => {
    const res = await fetch(baseUrl)
    const data = await res.jason() 
    console.log(data)
    return data
}

console.log(obtenerUsuarios4())