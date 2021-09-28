/*Ejercicio 1
Crear una variable llamada user, a la que le vamos a asignar un objeto.
El objeto tiene que tener 4 propiedades: firstName, lastName, email, age, con tus datos
Mostrar en consola el objeto user
Mostrar en la consola el nombre y la edad de la persona: "Hola, mi nombre es [ACA EL NOMBRE DE PILA] y tengo [ACA LA EDAD] años"*/

const user = {
    firstName: "Sandra",
    lastName: "Muraca",
    email: "sandramuraca78@gamil.com",
    age: "42"
}

console.log(`Hola, mi nombre es ${user.firstName} y tengo ${user.age} años`)

/*Ejercicio 2
Tenemos un listado de personas y necesitamos guardarlo en una base de datos
Los datos que tenemos son un id, email, nombre y teléfono
Crear un objeto para cada persona que nos pasaron
Mostrar por consola todos los objetos creados*/

const usuarioAda = {
    id: 1,
    nombre: "Ada Lovelace",
    email: "ada@gmail.com",
    telefono: "1234567890"
}

const usuarioGrace = {
    id: 2,
    nombre: "Grace Hopper",
    email: "grace@hotmail.com",
    telefono: "0987654321"
}

const usuarioHedy = {
    id: 3,
    nombre: "Hedy Lamarr",
    email: "hedy@gmail.com",
    telefono: "6789054321"
}

const usuarioRadia = {
    id: 4,
    nombre: "Radia Perlman",
    email: "radia@yahoo.com",
    telefono: "1234509876"
}

const usuarioSheryl = {
    id: 5,
    nombre: "Sheryl Sandberg",
    email: "sheryl@facebook.com",
    telefono: "5432167890"
}

console.log(usuarioAda, usuarioGrace, usuarioHedy, usuarioRadia, usuarioSheryl )

/*Ejercicio 3
Con los objetos creados en el ejercicio anterior, mostrar en la consola los siguientes datos de cada persona:
// 1. El nombre de Ada:

// 2. El ID de Grace

// 3. El email de Hedy

// 4. El ID y nombre de Radia

// 5. El telefono de Sheryl*/

console.log(usuarioAda.nombre)
console.log(usuarioGrace.email)
console.log(usuarioRadia.id)
console.log(usuarioSheryl.telefono)

/*Ejercicio 4
Tenemos un objeto con información de un disco:
const disco = {
  
};
Mostrar en consola el siguiente mensaje usando las propiedades del objeto:
El disco Wasting Light de la banda Foo Fighters se lanzó en el año 2011*/

const disco = {
    id: 1,
    nombre: 'Wasting Light',
    anioLanzamiento: 2011,
    cantidadDeTemas: 12,
    banda: {
      nombre: 'Foo Fighters',
      anioFormacion: 1994
    }
  }

  console.log(`El ${disco.nombre} de la banda ${disco.banda.nombre} se lanzó en el año ${disco.anioLanzamiento} `)

/*Ejercicio 5
Crear un array llamado tecnologiasConocidas donde se listen las tecnologias que aprendiste durante el curso y las que ya supieras de antes

Agregar al objeto creado en el ejercicio 1 dos propiedades:

sabeProgramar: true
tecnologiasConocidas: [el array que creaste recien]*/

user.tecnologiasConocidas = ["HTML", "css", "js", "bulma", "bootstrap"]
user.sabeProgramar = true
console.log(user)

/*Ejercicio 6
Crear una funcion llamada mostrarTecnologias que reciba como parametros las propiedades recien creadas
Dentro de la funcion, crear la siguiente lógica:
Si la propiedad "sabeProgramar" es true, mostrar en consola la siguiente frase: "Hola, mi nombre es [ACA EL NOMBRE] y programo en [ACA EL LISTADO DE LENGUAJES/TECNOLOGIAS]"
Ejecutar la funcion*/

const mostrarTecnologias = (user) =>{
    if(user.sabeProgramar === true){
       saludo = `Hola, mi nombre es ${user.firstName} y programo en ${user.tecnologiasConocidas}`
    }
    return saludo
}

console.log(mostrarTecnologias(user))




// VER EL RESTO DE LOS EJERCICIOS
//https://github.com/malerey/Objetos/blob/master/README.md