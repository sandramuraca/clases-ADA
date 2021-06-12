//estructura de ciclo FOR  estandar que incrementa

for(let i = 0; i < 3; i++){
    //este bloque de codigo de repite 3 veces
    console.log(i) //0 , 1,  2
}

//estructura de ciclo FOR  estandar que es decreciente

for(let i = 3; i >= 0; i--){
    //este bloque de codigo de repite 3 veces
    console.log(i) //3, 2, 1 , 0
}

// ciclo WHILE se usa en los casos en que es indeterminada la condicion que se da para que se de el corte

    let n = 0;
    let x = 0;
    while (n < 3) {
      n++;
      x += n;
    }
    

// ciclo DO WHILE ???
let i = 0; 
do { 
  i += 1; console.log(i); 
} while (i < 5);

// asi como se recorre un array se puede recorrer un string:


const nombres = 'Vanesa';
let nombreAlRevez = "";
for(let i = nombres.length - 1; i >= 0; i--){
  console.log(nombres[i]);
  nombreAlRevez += nombres[i];
}
console.log(nombreAlRevez);

//FOR OF evolucion de FOR
/*
for...of recorre todos lo elementos del array dentro de su scope(dentro de la llaves)
y la variable declarada es el elemento del array
*/

const alumnas = ['chari', 'caro', 'zuri', 'sofi'];

for (const alumna of alumnas){
    console.log(alumna)
};

//FOR IN
/*
for...in recorre todos lo elementos del array dentro de su scope(dentro de la llaves)
y la variable declarada es el indice del array
*/
