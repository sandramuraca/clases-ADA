// las funciones pueden recibir funciones como parametos (ver notas drive clase 64 )
 
//****CLASE 64 - 65 - 66 */

//**METODOS AVANZADOS DE ARRAYS */
//los principales son:
//map
//forEach
//filter
//reduce
//fond
//every
//some

//son metodos que sirven para recorrer arrays....

//******************************************************* */

// ****MAP *****
//recorre un array que recibe
//ejecuta la funcion a cada elemento
//crea un array nuevo a partir de los elementos que retorna la funcion
//generalmente se utiliza para tomar una información recibida del BE y transformarla a lo que necesito en el FE
//no modifica el elemento original
//el array que crea tiene la misma longitud que el array original que se recorre
//si no retorno nada crea un array con undefined

//SINTAXIS HABITUAL
//nombreDelArray.nombreDelMetodo(funcionAEjecutar)
//nombreDelArray.nombreDelMetodo( () => {})
// entre los parentesis voy a indicar el nombre del parametro que representa a cada elemento del array que voy a recorrer.
//dentro de los parentesis se declara en primer lugar el "parametro obligatorio" que representa al elemento
//se pueden declarar dos parametros mas:
//nombreDelArray.nombreDelMetodo( (elemento, index, arrar) => {})
//                                  obl       optativos
//siempre en ese orden
//siempre se escriben los 3 parametros aunque no se usen

//ejemplo 1:
const nuevoArrayDePersonajes =  personalesCancelados = ["Manossanta", "Porcel", "Yayo", "Tinelli", "Cris Morena"]
personalesCancelados.map( (personaje) => {
    console.log(personaje.toUpperCase())
    return personaje.toUpperCase()
    //la funcion de ejecuta por cada elemento del array
})

console.log(nuevoArrayDePersonajes)

//**ejemplo 2 */
const alumnas = ["Naty", "Yani", "Gabi", "Eli", "Sofi" ]

const mostrarEnConsola = (elemento) => {
     return elemento.toUpperCase()
}

const nuevoArray = alumnas.map(mostrarEnConsola)
console.log(nuevoArray)


//sintaxis habitual
const nuevoArray2 = alumnas.map((elemento) => {
    return elemento.toUpperCase()
})

//***ejemplo 3 */
const edades = [ 22, 34, 55, 64, 29, 88]

const multiplicar = (elemento) =>{
    return elemento *2
}

const edadesMultiplicadas = edades.map(multiplicar)
console.log(edadesMultiplicadas)



//**ejemplo 4 */
const nombres = ["cristian u", "Carola", "Yanina Bucca","Zuri", "Ivi", "Agus", "Mumuki" ]


const chequearU = (elemento) => {
    if (elemento.includes ("u")){
        return "si tiene la letra u"
    }else{
        return elemento
    }
}

const nombresConU = nombres.map(chequearU)
console.log(nombresConU)

// **** FILTER *****
//se aplica cuando quiero filtrar algunos elementos de un array
//si tengo un array de 5 y tres cumplen la condicion me devuelve un nuevo array de 3
//a partir de un array me quedo con ALGUNOS ELEMENTOS que cumplen una condicion
//tengo que retornar la condición que tienen que cumplir esos elementos para poder filtrar
//se crea un array con los true de la condicion planteada (la condicion es una pregunta, le pregunta a cada elemento si cumple la condicion, si la respuesta es true, lo agrega al nuevo array)
//si no hay ningun elemento que cumpla con las funciones devuelve un array vacio

//ejemplo 1

const listaNombres = ["cristian u", "Carola", "Yanina Bucca","Zuri", "Ivi", "Agus", "Mumuki" ]

const nombresConUFiltrados = listaNombres.filter((nombre)=> {
 return nombre.includes("u")
})

console.log(nombresConUFiltrados)

//ejemplo 2

const edadesPersonas = [3, 5, 8, 89, 54, 18, 66, 4]

const mayoresDeEdad = edadesPersonas.filter((edad) =>{
    return edad >= 18
})

console.log(mayoresDeEdad)

//ejemplo 3: array con objetos
//el elemento se trata como un objeto

const departamentos = [
    {
        precio:25000,
        tienePileta: true,
        ubicacion: "caba"
    },

    {
        precio:60000,
        tienePileta: true,
        ubicacion: "caba"
    }
]

const deptosConPileta = departamentos.filter((departamento) =>{
    return departamento.tienePileta && departamento.precio <= 30000
})

console.log(deptosConPileta)

// **** FIND *****

//funciona igual a filter, pero retorna un solo elemento
//retorna el primer elemento dentro del array que cumple esa condicion
// si no hay ningun elemento que cumpla la consicion devuelve undefined


const mayoresDeEdad2 = edadesPersonas.find((edad) =>{
    return edad >= 18
})

console.log(mayoresDeEdad2)



// **** EVERY - SOME *****
//retorna booleanos
//responde preguntas

// **EVERY***
//Analiza todos los elementos del array, si al menos uno no cumple retorna false
//si todos los elementos del arrar cumplen devuelte true

const edadesPersonas2 = [3, 5, 8, 89, 54, 18, 66, 4]

const sonTodosMayoresDeEdad = edadesPersonas2.every ((edad) =>{
return edad > 18
})

console.log(sonTodosMayoresDeEdad)

const edadesPersonas3 = [89, 54, 66]

const sonTodosMayoresDeEdad2 = edadesPersonas3.every ((edad) =>{
    return edad > 18
    })
    
    console.log(sonTodosMayoresDeEdad2)


//**SOME */
//A AL INVERSA DE EVERY, cuando al menos uno cumple la condicion devuelve TRUE