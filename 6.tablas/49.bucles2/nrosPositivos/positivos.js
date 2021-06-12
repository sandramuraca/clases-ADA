// ------------- ejercicio ----------
// Dados un array de 10 números, informar cuantos de ellos son positivos.

/*
1- Recibir un array de 10 elementos
2- Verificar cada elemento y saber si es positivos
3- Agregar a un contador para informar cuantos son positivos
4- Informar resultado
*/

const numbersArray = [2, -10, -50, -5, -8, 12, -13, 25, 0, 65];
let positivosTotal = 0;

//opcion cantidad de positivos
for (let i = 0; i < numbersArray.length; i++) {
    if (numbersArray[i] >= 0){
        positivosTotal = positivosTotal +1;
    }
}

console.log('resultado:', positivosTotal);

//opcion positivos dentro de un array

const numbersArray = [2, -10, -50, -5, -8, 12, -13, 25, 0, 65];
let positivosTotal = [];

for (let i = 0; i < numbersArray.length; i++) {
    if (numbersArray[i] >= 0){
        positivosTotal.push(numbersArray[i]);
    }
}

console.log(positivosTotal);