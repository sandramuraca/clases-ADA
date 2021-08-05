//FUNCIONES NATIVAS o METODOS PARA STRINGS

//number()
//String()
//Boolean()

/*Propiedades de strings
la LONGITUD del string es una de las propiedades fundamentales
para  conocer la longitud de utiliza LENGTH
*/

const nombre = "Sandra";
const otroNombre = "CRISTIAN";
let nuevoNombre = "Victoria";

console.log(nombre.length);//muestra la longitud del nombre

const longitudDNombre = nombre.length; //en esta variable guardo la longitud de la variable a la que le estoy aplicando .legth

//Capitalizaciones en Mayusculas y minusculas:
console.log(nombre.toUpperCase());
console.log(otroNombre.toLocaleLowerCase());
//si aplico estas funcniones si no guardo en una variable no modifica 
//la variable original

//aqui guardo en las variables los nombres modificados
const nombreConMayusculas = nombre.toUpperCase();
const nombreConMinusculas = otroNombre.toLocaleLowerCase();

console.log(nombreConMayusculas);
console.log(nombreConMinusculas);

//tambien puedo guardar el nuevo valor en la variable asi
//siempre que la variable sea LET
nuevoNombre = nuevoNombre.toUpperCase();
console.log(nuevoNombre);

//charAt--> que caracter hay en un lugar especifico del string
const usuario = "Mika";
console.log(usuario.charAt(0));
console.log(usuario.charAt(1));
console.log(usuario.charAt(2));
console.log(usuario.charAt(3));
console.log(usuario.charAt(4));

//SLICE--> toma un string y lo corta empezando por la posicion que 
//se le indique y termina en la posicion que se le indique

const dato = "eliana";
console.log(dato.slice(1,4));

//normalizar datos
const dato1 = "miKa";
const primeraLetra = dato1.charAt(0);
const restoDelNombre = dato1.slice(1); //dentro del parentesis le paso desde donde hasta donde cortar si el segundaparametro no esta corta hasta el final del string

const primeraEnMayuscula = primeraLetra.toUpperCase();
const restoEnMinuscula = restoDelNombre.toLocaleLowerCase();
console.log(primeraEnMayuscula);
console.log(restoEnMinuscula);
const nombreNormalizado = primeraEnMayuscula+restoEnMinuscula;
console.log(nombreNormalizado);

//esto se puede hacer en una funcion:

const capitalizarNombre = (user) =>{
    const primeraLetra = user.charAt(0);
    const restoDelNombre = user.slice(1);
    const primeraEnMayuscula = primeraLetra.toUpperCase();
    const restoEnMinuscula = restoDelNombre.toLocaleLowerCase();
    const nombreNormalizado = primeraEnMayuscula+restoEnMinuscula;

    return nombreNormalizado;
};

console.log(capitalizarNombre("AnDREA"));
console.log(capitalizarNombre("MAURO"));

//replace
//recibe dos parametros
//el segundo el valor por el cual se debe reemplazar
//solo reemplaza la primer aparicion del valor

const frase = "Aguante River Plate";
console.log(frase.replace("v", "B"));

const otraFrase ="Griselda en fan de Indio Solari";
console.log(otraFrase.replace("Indio Solari", "Ricardo Montaner"));

//expresiones regulares O REGEX
/*
/[ae]/ //todas las palabras que tengan una a y una e
/patron/ y modificadores o flags = g //g es flag global
i // flag insencibles al caso, deberia ser ignora la capitalizacion

"mika"
"jenny"
"robot" //no esta incluido en el patron*/

const cancion = "la mar Estaba serena";
const cancionConA = cancion.replace(/e/gi, "a");//puse g para que tome todas las e y la i para que tome la mayusucula

console.log(cancionConA);

const cancionConI = cancion.replace(/[ae]/gi, "i");
console.log(cancionConI);

/*Escribir una funcion que encuentre malas palabras en un juego infantil
y las reemplacre por****
listado de malas palabras:
culo
puto
ojete
mierda
Lo puedo hacer con un .replace por cada palabra o hacer una  exoresion regular con todas las palabras que quiero cambiar (ver imagen guardada en notas)
*/

//MATCH
//Puede recibir un string o una expresion regular y retorna una lista
const nota = "esta frase tiene una mala palabra";
console.log(nota.match('mala palabra'));

//INCLUDES
//idem que match pero retorna un booleano
//no recibe expresiones regulares
console.log(nota.includes('mala palabra'));

//indexOf
//retorna en que posicion se encuentra el caracter que le paso
//indexOf siempre retorna un numero, si le pongo algo que no encuentra retorna -1

const alumna = 'Diamela';
console.log(alumna.indexOf('m'));
console.log(alumna.indexOf('h'));

//FUNCIONES NATIVAS PARA NUMEROS
//sintaxis varibale.nombreDelmetodo
//Math.nombreDelMetodo()
//si quiero aplicar uno de estos metodos a string me devuelve NaN

const decimal = 33.5;
console.log(decimal);
console.log(Math.round(decimal));// para arriba o abajo segun si esta mas cerca del medio o no
console.log(Math.ceil(decimal)); //redonde para arriba
console.log(Math.floor(decimal));//redondea para abjo

//isNaN sirve para chequear que el dato es un numero
console.log(isNaN(NaN));
console.log(isNaN(33));
//chequeo si un numero es NaN (no es un numero) no lo guardo en la base de datos por que lo que quiero guardar es un numero // FUNCION MAS USADA//

