// las funciones pueden recibir funciones como parametos (ver notas drive clase 64 )

//**METODOS AVANZADOS DE ARRAYS */

//MAP
//recorre un array
//ejecuta una funcion por cada elemento
//no modifica el elemento original
//retorna un array nuevo
//crea un array nuevo a partir de las cosas que retorna la funcion


//**ejemplo1 */
const alumnas = ["Naty", "Yani", "Gabi", "Eli", "Sofi" ]

const mostrarEnConsola = (elemento) => {
     return elemento.toUpperCase()
}

const nuevoArray = alumnas.map(mostrarEnConsola)
console.log(nuevoArray)


//sintaxis habitual
const nuevoArray = alumnas.map((elemento) => {
    return elemento.toUpperCase()
})

//***ejemplo 2 */
const edades = [ 22, 34, 55, 64, 29, 88]

const multiplicar = (elemento) =>{
    return elemento *2
}

const edadesMultiplicadas = edades.map(multiplicar)
console.log(edadesMultiplicadas)



//**ejemplo 3 */
const nombres = ["cristian u", "Carola", "Yanina Bucca","Zuri", "Ivi" ]


const chequearU = (elemento) => {
    if (elemento.includes ("u")){
        return "si tiene la letra u"
    }else{
        return elemento
    }
}

const nombresConU = nombres.map(chequearU)
console.log(nombresConU)

