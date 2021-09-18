//NODOS

const tarjeta = document.querySelector(".card")
const contenedorCard = document.querySelector(".contenedor-card")

//tarjeta.innerHTML = `<button>clicl aqui</button>`

//en este console.log vamos a ver el padre de tarjeta
console.log(tarjeta.parentElement)


//en este console.log vamos a ver los hijos de tarjeta, siempre va a traer un array aunque tenga un solo hijo
console.log(tarjeta.children)

//puedo seleccionar un elemento por su padre
tarjeta.parentElement.style.backgroundColor = "red"
//es igual a
contenedorCard.style.backgroundColor = "red"

//si un elemento tiene varios hijos y quiero seleccionar 1, tengo que llamarlo por su posicion dentro del array
tarjeta.children[0].style.color = "white"

//si tengo varios hijos en el elemento y quiero aplicar un cambio en todos lo aplico con un for
console.log(texto.children)

for (let i = 0; i < texto.children.length; i++) {
      texto.children[i].style.color= "blue"
}//revisar esto



