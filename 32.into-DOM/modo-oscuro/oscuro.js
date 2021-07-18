
const modoOscuro = prompt("SI: modo oscuro - NO: modo claro");

const titulo = document.querySelector("h1");
const subtitulo = document.querySelector("h2");
const parrafo = document.querySelector("p");
const body = document.querySelector("body");

if( modoOscuro === "SI"){
    titulo.style.color = "white"
    parrafo.style.color = "white"
    subtitulo.style.color = "white"
    body.style.backgroundColor = "black"
}