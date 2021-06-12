/*esContraseniaValida(contrasenia)
Crear una función esValida que tome como argumento una contrasenia (string) y devuelva true si tiene 8 caracteres o más o false si tienen menos de 8 caracteres

esValida('contraseniaMuySegura') // true
esValida('abc123') // false*/

const esValida = (contraenia) => {
    if(contraenia.length >= 8){
        return true;
    } else{
        return false;
    }
};

//version corta
const esValida = (contraenia) => {
    return contraenia.length >= 8
}; // esto es lo mismo que la funcion anterior


console.log(esValida('contraseniaMuySegura'));
console.log(esValida('abc123'));

const esClaveValida = esValida('abc123');
console.log(esClaveValida);

const pass = "casa";
console.log(esClaveValida(pass));