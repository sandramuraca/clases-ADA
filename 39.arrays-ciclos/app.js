//variar el valor de una variable

let edad = 34
edad = edad + 1 //35
edad++ //es lo mismo que: edad = edad+1 --> es una manera abreviada // aqui el resultado va a ser 36

//si en vez se suma 1 quiero sumar 2
edad += 2 //38

//CICLOS FOR - CICLOS DE REPETICION

/*
Que es contar?
- comienzo por un numero
- determino hasta cuanto voy a contar
- añ numero original le voy sumando un numero cada vez
0
 0 + 1 = 1
   1 +1 = 2
    2 + 1 = 3
JS hace este proceso cuando cuenta, puede sumar de a 1 de a 2 / 3 / 4...

El ciclo de repeticion se inicia con FOR y separa las condiciones con ;:

for(condiciones de inicio; finalizacion; incremento){
    bloque de codigo que se va a ejecutar 
    tantas veces como le haya indicado
}

    inicio - conta mientras que sea true - cantidad de incremento
for (let i =           0; i <= 10;            i++){
    console.log("hola")
}

*/

for (let i = 0; i <= 10; i++){
    console.log("hola")
}

//que muestre la variable i y que cuente de 2 en 2 
for (let i = 0; i <= 10; i+=2){
    console.log(i)
}


//EJEMPLOS
//1-nro pares del 1 al 100

for(let i = 0; i <= 100; i+=2){
    console.log(i)
}
//2-numeros del 100 al 1

for (let i = 100 ; i >= 1; i--){
    console.log(i)
}

//3-nros que empiecen en 100 decreciendo de 3 en 3 hasta llegar a 1

for (let i = 100 ; i >= 1; i-=3){
    console.log(i)
}

//ARRAYS: es una coleccion de cosas
//tienen metodos propios

const alunmas = ["naty", "tati", "ro", "ele"]

//ver elemento de la posicion 0
console.log(alunmas[0])

//cuando capturo el elemento le puedo aplicar el metodo de string
console.log(alunmas[0].toUpperCase())

//cuando seleccionamos varios elementos con js, convierte esos elementos en array

const titulo = document.querySelector("#titulo")
console.log(titulo)

const parrafos = document.querySelectorAll(".parrafo")
console.log(parrafos) // nuestra una array con los dos parrafos

//si quiero aplicar un metodo a un elemento de un array lo tengo que seleccionar con [] y luego aplicar el metodo que quisiera

parrafos[1].onclick = () =>{
    console.log("click en un parrafo")
    parrafos[1].style.color = "green"
}

// hacer un ciclo for con un array

const chicas = ["Jenni", "Zuri", "Ivi", "Sandra", "Ele"]

for (let i = 0; i <5; i++){
    console.log(i) //aca muestra el valor de las posiciones
    console.log(chicas[i]) // muestra el elemento que esta en cada una de las posiciones, recorre el array
}