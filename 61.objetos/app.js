//tipo datos primitivos

//tipo datos cinpuestos
//arrays
//funciones
//objetos

//const persona = ["caro", "Lerner", "27", "calle false 123"]

//console.log(`la cumpleañera se llama ${persona[0]} y tiene ${persona[2]} años`)

//los arrays sirven para listar cosas
//todos los objetos empiezan con {}
//pueden estar compuestos por cualquier tipo de dato
//los datos que guardan son "propiedad" --> NO SON VARIABLES
//las propiedades son un para CLAVE-VALOR
//no importa su orden a diferencia de los arrays, que para acceder a los elementos hay que llamar la posicion

const persona = {
    nombre: "Caro",
    edad: "27",
    domicilio: "calle falsa 123",
    tecnologiasQueConoce: ["HTML", "css", "Javascript"],
    ubicacionGeografica: {
        pais: "argentina",
        provincia: "buenos Aires",
        barrio: "avellaneda"
    }
}

console.log(persona)

//como llamo a una de las propiedades:
console.log(persona.nombre)

//capitalizar
console.log(persona.nombre.toUpperCase())

//acceder a un elemento dentro de un array que esta dentro de un objeto
console.log(persona.tecnologiasQueConoce[0])

//agregar una propiedad al objeto
persona.anioDeNacimiento = 1994
persona.signoZodiaco = "libra"

console.log(persona)

//acceder a una propiedad dentro de un objeto, dentro del objeto
console.log(persona.ubicacionGeografica.pais)

//si quiero chequear que un objeto tiene propiedades se usa el operador in
const seniora = {
    id: 0,
    edad: 25,
    nombre: "sandra",
    telefono: 123456 
}
//la pripiedad que quiero chequear se coloca como un string
console.log("id" in seniora)

//si quiero borrar una propiedad utilizo delete
delete seniora.telefono
console.log(seniora)

