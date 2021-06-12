// devolver el numero menor

const obtenerMenor = (numeros) =>{
    console.log(numeros);

    let min = Infinity // es el num conceptual mas grande de todos

    for (const numero of numeros){
        console.log({min, numero, resultado:min > numero});
        if(min > numero){
            min = numero;
        }
    }
    return min;
};

console.log(obtenerMenor([5, 7, 99, 34, 54, 2, 12]));
