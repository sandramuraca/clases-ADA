/*dado un array de 10 numeros, informar cuantos son positivos*/
/* PASOS:
1- Recibir un array de 10 elementos
2 - Verificar cada elemento y saber si es positivo (> a 0)
3- Agregar un contafot para informar cuantos son positivos
4- Informar resultado*/

const numberArray = [2, -10, -50, 5, 8, 12, -13, 25, 0, 65];
let positivosTotal = 0;

for(let i=0; i < numberArray.length; i++){
    if(numberArray[i] >= 0) {
        positivosTotal += 1;
    }
}

console.log("numeros positivos: ", positivosTotal);