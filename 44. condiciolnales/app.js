//querySelector - siempre trae el primer elemento que encuentra
//permite llamar los elementos por su selector de css, por su id o por su etiqueta de html, un hijo de una lista
const principal = document.querySelector(".principal")
const card = document.querySelector(".card")
const botonSaludo = document.querySelector("#saludo")

console.log("querySelector", card) // muestra solo 1 card


//querySelectorAll - trae siempre una Lista de elemtos
const principales = document.querySelectorAll(".principal")
const cards = document.querySelectorAll(".card")

console.log("querySelectorAll", cards)

//si quiero por ejemplo cambiar de color todas las cards, tengo que hacer un for para recorrer todos los elementos del array (la lista)

//Ejercicio
//HTML
//Seis divs con forma de tarjeta
//un boton que al hacer clickk haga que en todos los divs aparezca la frease "hola chicas"

//al hacerle click a cada tarjeta esa tarjeta cambie su color de fondo

botonSaludo.onclick = () => {
    //que en todas las cajas aparezca el saludo cuando rpesiono el boton
    for (let i = 0; i < cards.length; i++) {
        cards[i].textContent = "hola chicas"
    }
}

for (let i = 0; i < cards.length; i++) {
    //cuando presiono una card se cambia el fondo y el color de la letra, aplico estilo
    cards[i].onclick= ()=> {
        cards[i].style.backgroundColor = "red"
        cards[i].style.color = "white"

    }
}

//inner.HTML modifico el hTML DESDE JS
//ver ejemplo del word de la clase 44 con el ejemplo