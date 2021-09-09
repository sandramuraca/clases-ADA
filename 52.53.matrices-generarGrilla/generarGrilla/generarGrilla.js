//Ejercicio Mumuki
//dada una matriz, llevar esa matriz a html en forma de tabla
//generar una grilla con elementos al azar
//Problemas a resolver:
//como elijo un elemento al azar?
// como agrego ese elemento a otro array?
//como genero una grilla?
//como genero una grilla con x cantidad de filas
//como genero una grilla con x cantidad de columnas?


//--ELEMENTOS DEL DOM---
//const grilla = document.querySelector(".grilla")


//-----FUNCIONES AUXILIARES----
//---FUNCION PARA GENERAR NUMEROS AL AZAR---como devuelvo emojis (numeros) al azar? --> en ese caso los emojis son numeros, que a su vez son las posiciones del array
//esta funcion la voy a reutilizar como funcion auxiliar

const arr = ["🍋", "🍓", "🥝", "🍇", "🍌"] //array.length=5
const arrayLargo = ["🍺", "🍦", "🍸", "🥂", "🍰", "🍧", "🍩", "🍨", "🍹"] //array.length=9

const obtenerNumeroAlAzar = (array) => {
    return Math.floor(Math.random() * array.length) //devuelve un nro al azar entre 0 y el numero que representa array.length (5 o 9 segun los ejemplos)
    
}

//en la variable -numeroAlAzar- guardo el nro que me genera la ejecucion de la funcion -obtenerNumeroAlAzar-, cuando llamo la funcion le paso como parametro el array que quiero que tome en cuenta para generar un numero al azar 
let numeroAlAzar = (obtenerNumeroAlAzar(arr))
console.log(numeroAlAzar)

//let numeroAlAzar = (obtenerNumeroAlAzar(arrayLargo))
//console.log(numeroAlAzar)


//--FUNCION PARA GENERAR ARRAY CON NUMEROS AL AZAR ---> los numeros al azar fueron generados en la funcion anterior,*obtenerNumeroAlAzar* utilizada como auxiliar. Esos números se van a ser la posicion del array, y de esa posición pusheo el elemento, en este caso es un emoji
const generarArrayAlAzar =(columnas, items) =>{
    
    let resultado = []

    for (let i = 0; i < columnas; i++) {
        //emojiAlAzar es la variable donde guardo el numero al azar que me retorna la funcion obtenerNumeroAlAzar = es un numero
        const emojiAlAzar = obtenerNumeroAlAzar(items) //items= array que paso en parametro
        resultado.push(items[emojiAlAzar])
        
    }
    return resultado
}

const arrayGatos = ["🐱","❤", "🐟", "📦", "🐈", "🧶"]
console.log(generarArrayAlAzar(5, arrayGatos))


//---FUNCIONA PARA GENERAR UNA MATRIZ---
//problemas a resolver:
//crear una funcion que reciba 3 parametros: filas, columnas, items
//generar arrays vacios (?) y pushearlos dentro de la variable "resultado" declarada dentro de la funcion como acumuladora
//la cantidad de arrays vacios a pushear estara definida por el parametro "Filas"
//ir pusheando dentro de esos arrays vacios elementos ramdom
//la cantidad de elementos a pushear estara definida por el parámetro "columna"
//los elementos a pushear estarán definimos por el parametro "item"


const generarGrilla = (filas, columnas, items) =>{
    let matriz= []
   
    for (let i = 0; i < filas; i++) {
        const arrayAlAzar = generarArrayAlAzar(columnas, items)
        //genero cantidad de columnas que le paso por parametro e items que tambien le paso por parametro
        matriz.push(arrayAlAzar)
    }
    return matriz
}

console.log(generarGrilla(2, 3, [1, 2]))

//posible resultado
// // [
//   ['c', 'c', 'a'], 
//   ['c', 'a', 'a'], 
//   
// ]

//---PASAR LA GRILLA AL HTML---
//Tengo que tomar la grilla del la funcion generarGrilla y convertirlo a string para llevarlo al HTML con inner.HTML

const grillaJS = generarGrilla(3, 3, [arrayGatos])
console.log(grillaJS)



const convertirAString = (matriz) =>{
    let resultado = []

    for (let i = 0; i < matriz.length; i++) {
       for (let j = 0; j < matriz.length; j++) {
         
           resultado.push(`<div class="item"></div>`)
       }
        
    }
   return resultado.join("") 
    
}

const grillaEnHtml = convertirAString(grillaJS)

grillaJS.innerHtml = grillaEnHtml

//---DIFICULTAD DEL JUEGO---

