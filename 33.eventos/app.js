//EVENTOS --  CLASE 19-07-2021

//modo claro oscuro
const body = document.getElementById("body")
const claro = document.getElementById("claro")
const oscuro = document.getElementById("oscuro")

oscuro.onclick = () =>{
  body.classList.add("oscuro")
}

claro.onclick = () =>{
  body.classList.remove("oscuro")
}

//ejemplo boton
const boton = document.getElementById("haceme-click")
const imagen = document.querySelector("img")


const saludar = () => {
  console.log("hola") //saluda en la consola
  imagen.src = "http://placekitten.com/g/200/300" //muestra imagen
}

console.dir(boton)

boton.onclick = saludar

const like = document.getElementById("corazon")
const gatito = document.getElementById("imagen")
const cantidadDeLikes = document.getElementById("cantidad-de-likes")

const convertirARojo = () => {
  // quitar un like
  if (like.style.color === "rgb(255, 0, 0)") {
    like.style.color = "#000000"
    cantidadDeLikes.textContent = "0"
  }
  // agregar un like
  else {
    like.style.color = "#FF0000"
    cantidadDeLikes.textContent = "1.000.000"
  }
}

gatito.onclick = convertirARojo 

/***** MODAL ******/
const modal = document.getElementById("modal")
const botonDeAbrirModal = document.getElementById("abrir-modal")
const botonCerrarModal = document.getElementById("cerrar-modal")

const mostrarModal = () => {
  modal.style.display = "block"
}

botonDeAbrirModal.onclick = mostrarModal

const ocultarModal = () =>{
    modal.style.display = "none"
}

botonCerrarModal.onclick = ocultarModal

