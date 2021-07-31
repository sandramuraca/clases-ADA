/*Crear una página que:

Tenga dos inputs, uno para el valor de kilómetros y otro para el de millas.
Cuando se modifica alguno de los dos inputs, el otro cambie automáticamente, realizando la conversión adecuada. Tener en cuenta que ki´lómetro es 0.62 millas, y una milla es 1.61 kilómetros.

1. obtener elementos del DOM
2. cuando cambia el primer imput cambia el valor del segundo
3. idem al anterior pero a la inversa
4.
 */

const inputKm = document.querySelector("#inputKM");
const inputMillas = document.querySelector("#inputMillas");

//1km = 0.62 millas
inputKm.addEventListener("input", () =>{
    inputMillas.value = Number(inputKm.value) * Number(0.62);
})

//1 millas = 1.61 km
inputMillas.addEventListener("input", () =>{
    inputKm.value = Number(inputMillas.value) * Number(1.61);
})
