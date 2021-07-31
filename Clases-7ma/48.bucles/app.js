// CICLOS Y BUCLES

// FOR OF

const edificios = ['casa', 'iglesia','depto', 'casa quinta'];

for(const edificio of edificios){
    console.log(edificio);
};

// POR INDICE en el primer log devuelve la posicion y la segunda el elemento
for(const edificio in edificios){
    console.log(edificio);
    console.log(edificios[edificio]);
};

/*
Que es un array?
Un array es una variable especial que puede contener más de un valor a la vez.
Es decir una variable que puede guardar mas variable dentro.
Se usa para evitar hacer algo como esto:
const persona1 = "Carla";
const persona2 = "Pepito";
const persona3 = "Flor"
en vez de eso podemos hacer:
const personas = ["Carla", "Pepito", "Flor"];
Puede tener infinitos elementos dentro como lo permita la memoria
Para acceder a un elemento solo hace falta colocar el numero del indice.Este empieza en cero
Ej:
si hago personas[0] -> estaria accediendo a "Carla"
si hago personas[2] -> estaria accediendo a "Flor"
si hago personas[3] -> me retornaria undefined por que no existe ese indice
Tambien puedo reemplazar un valor 
Ej:
personas[0] = "Leia";
ahora el array quedaria asi:
["Leia", "Pepito", "Flor"]
Para saber el largo de un array podemos usar la propiedad length
personas.length -> mostraria un 3 que hace referencia que tengo 3 elementos en el array
// Metodos de Array
Antes de empezar creamos otro array
const frutas = ["Manzana", "Banana"]
console.log(frutas.length) -> 2
Añadir un elemento al final de un Array:
const nuevaLongitud = frutas.push('Naranja') // Añade "Naranja" al final
// ["Manzana", "Banana", "Naranja"]
Eliminar el último elemento de un Array:
let ultimo = frutas.pop() // Elimina "Naranja" del final
// ["Manzana", "Banana"]
Añadir un elemento al principio de un Array:
let nuevaLongitud = frutas.unshift('Fresa') // Añade "Fresa" al inicio
// ["Fresa" ,"Manzana", "Banana"]
Eliminar el primer elemento de un Array:
let primero = frutas.shift() // Elimina "Fresa" del inicio
// ["Manzana", "Banana"]
Recortar elementos de un Array:
const nombres = ['Rita', 'Pedro', 'Miguel', 'Ana', 'Vanesa'];
const masculinos = nombres.slice(1, 3);
// masculinos contiene ['Pedro','Miguel']
primer parametro: es el inicio desde que elemento empieza a cortar
segundo parametro opcional: es el final de la extracción, slice extrae hasta, pero sin incluir el final.Es decir hasta el indice que coloquemos,Este tabien puede ser negativo
*/