let datoTemperatura = prompt("Ingrese la temperatura en °:");

let mensaje ="La temperatura actual es: "

let temperaturaActual = document.getElementById("titulo");

/*
if (datoTemperatura <= 0){
    temperaturaActual.textContent = `${mensaje}  ${datoTemperatura}`;
    temperaturaActual.classList.add("blue"); 
} else if (datoTemperatura >= 0 && datoTemperatura < 15) {
    temperaturaActual.textContent = `${mensaje}  ${datoTemperatura}`;
    temperaturaActual.classList.add("lightblue"); 
} else if (datoTemperatura >= 15 && datoTemperatura < 25) {
    temperaturaActual.textContent = `${mensaje}  ${datoTemperatura}`;
    temperaturaActual.classList.add("green");
} else if (datoTemperatura >= 25 && datoTemperatura < 30) {
    temperaturaActual.textContent = `${mensaje}  ${datoTemperatura}`;
    temperaturaActual.classList.add("yellow");
} else if (datoTemperatura >= 30 && datoTemperatura < 35) {
    temperaturaActual.textContent = `${mensaje}  ${datoTemperatura}`;
    temperaturaActual.classList.add("orange");
} else if (datoTemperatura >= 35) {
    temperaturaActual.textContent = `${mensaje}  ${datoTemperatura}`;
    temperaturaActual.classList.add("red");
} */
temperaturaActual.textContent = `${mensaje}  ${datoTemperatura}`;
if (datoTemperatura <= 0){
    temperaturaActual.classList.add("blue"); 
} else if (datoTemperatura >= 0 && datoTemperatura < 15) {
    temperaturaActual.classList.add("lightblue"); 
} else if (datoTemperatura >= 15 && datoTemperatura < 25) {
    temperaturaActual.classList.add("green");
} else if (datoTemperatura >= 25 && datoTemperatura < 30) {
    temperaturaActual.classList.add("yellow");
} else if (datoTemperatura >= 30 && datoTemperatura < 35) {
    temperaturaActual.classList.add("orange");
} else if (datoTemperatura >= 35) {
    temperaturaActual.classList.add("red");
}
    