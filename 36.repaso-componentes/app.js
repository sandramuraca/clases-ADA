const botonAbrirAcordeon = document.querySelector("#acordeon-abrir");
const acordeon = document.querySelector("#acordeon");

botonAbrirAcordeon.onclick = () =>{
    acordeon.classList.toggle("ocultar")
}