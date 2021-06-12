//selecciono el elemento del html
const miBoton = document.querySelector("#miBoton");
const miInput = document.querySelector("#miInput");

//al elemento seleccionado le agrego un escichador de evento
//esta funcion define que es lo que va a pasar (el click)
//y que hace cuando ese evento suceda
// 2 parametros string = accion a la que va a reaccionar
//
miBoton.addEventListener("click", () => {
    alert ("hola como estas?");
});

//keypress= cuando toco la tecla
//keyup= cuando suelto la tecla (sube)
//keydown =cuando presiono (baja y queda presionada)
//puedo usar event que tiene informacion del evento
//ejemplo la tecla que se toco o el elemento afectado
//event.key muestra la letra que toque

miInput.addEventListener("keypress", (event) => {
    console.log(event);
    if (event.key == "s"){
    alert ("hola como estas?");
    }
});