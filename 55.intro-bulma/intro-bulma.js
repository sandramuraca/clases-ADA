//botons loading
const botonCargar = document.querySelector("#boton-cargar")

botonCargar.onclick = () =>{
    botonCargar.classList.add("is-loading")
    //botonCargar.toggle("is-loading")
}


//presionar el boton Abrir modal y que se abra el modal

const abrirModal = document.querySelector("#abrir-modal")
const modal = document.querySelector(".modal")
const cerrarModal = document.querySelector(".delete")

abrirModal.onclick = () =>{
    modal.classList.add("is-active")
}

//cerrar modal
cerrarModal.onclick = () =>{
    modal.classList.remove("is-active")
}