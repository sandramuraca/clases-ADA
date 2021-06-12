//Defini una funcion CONTIENE que recibe como argumentos un numero y un array de numeros y devuelva si el numero se encuentra en sicho array

const contiene = (numeroAEncontrar, numeros) =>{
    for(const numero of numeros){
       if(numeroAEncontrar === numero){
           return true;
       } 
    }
    return false;
};
