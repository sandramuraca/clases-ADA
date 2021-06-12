/*obtenerMenor(numeros)
Crear una función obtenerMenor que tome como argumento un array de números numeros y devuelva el menor de ellos. Ejemplo:

obtenerNumeroMenor(5, 7, 99, 34, 54, 2, 12) // 2

1. crear la funcion
2. crear un ciclo que vaya de uno en uno, que empice en el elemento 0 del array y termine en el ultimo elemento
3. arroje el resultado con el numero menor*/

const arrai1 = [5, 7, 99, 34, 54, 2, 12];
const arrai2 = [5, 7, 99, 34, 54, 2, 12, 0];

const obtenerMenor = (parametro) =>{
    let menor = Infinity;
    for (let i = 0; i < parametro.length; i = i+1) {
        if (menor > parametro[i] ){
            menor = parametro[i]
        }
    }
    return menor;
        
}

console.log(obtenerMenor(arrai1));
console.log(obtenerMenor(arrai2));

