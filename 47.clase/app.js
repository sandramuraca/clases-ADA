// hay metodos que modifican el array original y otros que si
//ver clase 46

//------METODOS-------
//------push---------- **(se usa mucho, los otros no)
//permite agregar un elemento al final de un array
//modifica el array original
const nombres = ["Vicky", "Eli", "Jenny", "Sofi"]
nombres.push("Gabi")
console.log(nombres)
//despues de esta accion el array ahora tiene incorporado el elemento que se "pusheo"

//Si tengo un array con edades y quiero guardar en un array solo las mayores de 18:
const edades = [ 8, 34, 12, 90, 88,43]

const mayoresDe18 = []

for (let i = 0; i < edades.length; i++) {
    if(edades[i] >= 18){
        mayoresDe18.push(edades[i])
    }
}

console.log(mayoresDe18)

//se utiliza mucho para filtrar


//-----pop------
//elimina el ultimo elemento de un array
//modifica el array original
//retorna el elemento eliminado

const alunmnas = ["Mika", "Gabi", "Pame", "Laura", "Maria"]
console.log (alunmnas.pop()) 
console.log (alunmnas)

//----shift-----
//elimina el primer elemento de un array
//modifica el array original
//retorna el elemento eliminado
console.log (alunmnas.shift())
console.log (alunmnas)

//-----unshift------
//eagrega un elemento al principio de un array
//modifica el array original
//retorna la nueva longitud del array

alunmnas.unshift("juana")
console.log (alunmnas)