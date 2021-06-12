/// ejercicio 1 de suma

const sumar = (num1,num2) => {
    let resultado = num1 + num2;
    return resultado;
}


console.log(sumar(2, 3));
console.log(sumar(1.2, 3.4));
console.log(sumar(3,-5));


/// calcular area de un triangulo

const calcularAreaTriangulo = (base,altura) =>{
    return ((base * altura)/ 2);
}

console.log(calcularAreaTriangulo(3, 4)) // 6
console.log(calcularAreaTriangulo(5, 6)) // 15
