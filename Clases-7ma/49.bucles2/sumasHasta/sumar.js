
/*Definí una función sumarImparesHasta que reciba como argumento un número numero y que devuelva la suma de todos los impares empezando desde 0 hasta dicho numero inclusive.

sumarImparesHasta(5) // (1 + 3 + 5 = 9)
9 
sumarImparesHasta(13)
49
sumarImparesHasta(47)
576*/
 
const sumarImparesHasta = (numero) => {     
    let resultado = 0;
    for (let step = 0; step <= numero ; step++){
        if(step%2 !== 0){
            resultado += step;
            //resultado = resultado + step;
        }
    }
    return resultado;
}

console.log(sumarImparesHasta(5));
console.log(sumarImparesHasta(13));
console.log(sumarImparesHasta(47));