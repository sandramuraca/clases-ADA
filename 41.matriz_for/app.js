////RESUMEN:

//     *MATRIZ ARRAY BIDIMENSIONALES
//     *Ciclo For con la matriz
//     *For dentro de un For



//Matriz - arrays bidimensionales
// arrays dentro de un array, sepados por comas (,) - detro de cada array hay elementos

const matriz =[
    ["Karen", "Flora", "Felini", "Boli"],//nombre mascota - posicion 0 del array matriz
    ["gato1", "gato2", "gato3", "gato4"],//tipo mascota -  posicion 1
    [11, 6, 6, 5]//edad mascota - posicion 2
]

console.log(matriz)

/*
El array multidimensional de respresenta como una tabla
primer fila - array posicion 0
segunda fila - array posicion 1
tercera fila - array posicion 2
 */

//como llamo a Karen? posicion del array dentro de la matriz, posicion del elemento dentro del array
console.log(matriz[0][0])

//clico for con la Matriz
for (let index = 0; index < matriz.length; index++) {
    const element = matriz[index];

    console.log("index", index) //veo posiciones
    console.log(element) //veo que compone cada posicion

}


//FOR ADENTRO DE UN FOR - 

for (let index = 0; index < matriz.length; index++) {
    const array = matriz[index];

    for (let j = 0; j < array.length; j++) {
        const element = array[j];
    
        //la j hay que hacer console.log dentro del parentesis,si no es undefined
        console.log("j", j)
        console.log(matriz[index][j])
    }
            
}

//dado un array de 10 numeros mostar los mayores a 5 en la consola

//pseudocodigo (generalmente representa una funcion)
/*
DESDE I = 0 HASTA 10
    DECLARO VARIABLE NUMERO COMO ARRAY [I]
    SI (NUMERO > 5) ENTONCES
    MOSTAR EN CONSOLA NUMERO
FIN DESDE I
*/

const edades= [1, 2, 66 , 11 , 14, 26, 8, 99, 6, 23]