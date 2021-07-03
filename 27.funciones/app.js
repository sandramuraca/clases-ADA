
//Funcion: código que escribo una vez y puedo ejecutar todas las veces que quiera

//definir funcion, se ejecuta cuando se le da la indicación

let funcionDeEjemplo = () =>{
    alert("Hola, estoy adentro de una funcion")
};

//para ejecutar la función:
funcionDeEjemplo();

/*La funcion primero se declara y luego se ejecuta, siempre en ese orden
El scope de una variable es su alcance, si esta dentro de una funcion
solo existe dentro de ella
Los parametros son los valores que reciben las funciones y 
estan dentro de los ()
*/

let saludar = (nombre) =>{
    alert(`Hola ${nombre}`);
}

let alumna = "Carla";
saludar(alumna);// puedo llamar una variable para que se ejecute en la fx

saludar("Lorena");
saludar("Pepe");


//usar un dato enviado por el usuario:

const insultoFavorito = prompt("cuales tu insulto favorito?");

let insultarAlVecino = (insulto) => {
    alert(`vecino: ${insulto}`);
}

insultarAlVecino(insultoFavorito);

//una funcion puede tener varios parametros

const presentar = ( nombre, apellido, profesion) =>{
    alert(`La alumna es: ${nombre} ${apellido} cuya ocupacion es ${profesion}`);
}

presentar("Chari", "Codazzi", "Azafata");
presentar("Sofi", "Garcia", "Empleada");

// tambien se pueden usar numeros en las funciones

const sumar = (num1, num2) =>{
    alert("La suma es:" + (num1 + num2))
}

sumar(2, 2);
sumar(10, 20);

//como extraer un valor de una funcion = RETURN

const numero1 = Number(prompt("ingrese un numero"));
const numero2 = Number(prompt("ingrese otro numero"));

const multiplicar = (num1, num2) =>{
    let multiplicacion = num1 * num2;
    return multiplicacion
}

let resultadoDeLaMultiplicacion = multiplicar(10, 10);

/*let resultadoDeLaMultiplicacion = multiplicar(numero1, numero2);*/

console.log(resultadoDeLaMultiplicacion);