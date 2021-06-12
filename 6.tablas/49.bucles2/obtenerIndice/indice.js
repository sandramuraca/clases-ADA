/*Definí una función obtenerIndice que reciba como argumento un valor cualquiera valor y un array cualquiera array y devuelva el índice del primer ítem con dicho valor en el array, o -1 si no hay ninguno.
obtenerIndice(12, [5, 7, 12, 34, 54, 2, 12]) 2
obtenerIndice(83, [5, 7, 12, 34, 54, 2, 12]) -1
 -for in -> para ver el indice
 -voy a buscar el numero y cuando lo encuentra retorno el indice

*/

const obtenerIndice = (numeroABuscar, numeros) => {
    for(const indice in numeros){
      if( numeros[indice] === numeroABuscar){
       return indice;   
      }
    }
    return -1;
}

console.log(obtenerIndice(12, [5, 7, 12, 34, 54, 2, 12]));
console.log(obtenerIndice(83, [5, 7, 12, 34, 54, 2, 12]));