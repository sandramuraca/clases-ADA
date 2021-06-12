//FUNCION: Fragmento de codigo que realiza una tarea
//entre parentesis van los parametros, valores que va a usar la funcion


//Funcion sin entrada ni salida, ni parametros
/*
const saludar = () =>{
    console.log (`hola`);
}
 saludar();*/

 /*
 let nombre = prompt ("ingrese su nombre");
 let apellido = prompt ("ingrese su apellido");

 alert (`hola ${nombre} ${apellido}, bievenida a Ada`);

let nombre = prompt("ingrese su nomnre"),
    apellido = prompt("ingrese si apellido");

const saludar = (nom,ape) =>{
    alert(`hola ${nom} ${ape} bienvenido a Ada`)
}

saludar(nombre, apellido);//estos valores vienen del prompt
saludar("pepe","argento"); /// estos valores ingresan directo a nom y ape*/

const libros = 100;
const pizarra = 120;
const revista = 150;

const IMPUESTO = 1.3;
const DESCUENTO = 0.9;
const imprimirPrecio = (item,nombre) => {
   /* let itemConImpuestos = calcularImpuestos(item);
    console.log(`El producto sale ${itemConImpuestos}`)*/
    let mensajePrecioFinal = `El producto ${nombre} sale ${(item * DESCUENTO) * IMPUESTO}`
    console.log(mensajePrecioFinal);
    alert(mensajePrecioFinal);
}

imprimirPrecio(libros,"libros");
imprimirPrecio(pizarra,"pizarra");
imprimirPrecio(revista,"revista");
