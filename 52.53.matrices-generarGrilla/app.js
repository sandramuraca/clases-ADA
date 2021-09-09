//RESUMEN:
//           *METODOS:
//           *Math.random()
//           *Math.floor()
//           *Math.ceil()
//           *Math.round()
//           *Nro al azar dentro de un rango
//           *match 3 - grilla de emojis random / Mumuki Matrices 4           Generar Grilla  --> en archivo 



//MVP --> Minimum Viable Project
//cuando tenemos un proyecto grande hay que ir  armando de a poco cosas pequeñas y que funcionen


//Math.random() me da un numero al azar entre 0 y 1 (con muchos decimales)
console.log(Math.random())

//Math.floor() --> piso
console.log(Math.floor(5.9))

//Math.ceil() --> techo
console.log(Math.ceil(5.9))

//Math.round() --> redondeo desde el medio
console.log(Math.round(5.9))
console.log(Math.round(5.3))

//Un numero al zar de 0 a 10 (10 no inclusive)
const numeroRandom1 = Math.floor(Math.random()*10)
console.log(numeroRandom1)

//Un numero al zar de 0 a 100 (100 no inclusive)
const numeroRandom2 = Math.floor(Math.random()*100)
console.log(numeroRandom2)

//Un numero al zar de 0 a 3 (13 no inclusive)
const numeroRandom3 = Math.floor(Math.random()*3)
console.log(numeroRandom3)



//funcion auxiliar
const obtenerNumeroAlAzar = () =>{
    numeroAlAzar = Math.floor(Math.random()*10)
    return numeroAlAzar
}

console.log(obtenerNumeroAlAzar())

//funcion que genera emijis al azar pasados dentro de un array
const arr = ["🍋", "🍓", "🥝", "🍇", "🍌"] //array.length=5
const arrayLargo = ["🍺", "🍦", "🍸", "🥂", "🍰", "🍧", "🍩", "🍨", "🍹"] //array.length=9

const obtenerNumeroAlAzar2 = (array) => {
    numeroAlAzar = Math.floor(Math.random() * array.length) //devuelve un nro al azar entre 0 y el numero que representa array.length (5 o 9 segun los ejemplos)
    return numeroAlAzar
}

console.log(obtenerNumeroAlAzar2(arr))
console.log(obtenerNumeroAlAzar2(arrayLargo))

//esa funcion se puede escribir tambien de esta forma:
const obtenerNumeroAlAzar3 = (array) => {
    return Math.floor(Math.random() * array.length) //devuelve un nro al azar entre 0 y el numero que representa array.length (5 o 9 segun los ejemplos)
  
}

const numeroAlAzarCorto = obtenerNumeroAlAzar3(arr)
const numeroAlAzarLargo = obtenerNumeroAlAzar3(arrayLargo)

console.log(numeroAlAzarCorto)
console.log(numeroAlAzarLargo)