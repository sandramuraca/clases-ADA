/*
https://breakingbadapi.com/documentation

Comunicandote con la api, obtené una lista de todos los recursos disponibles**
Por cada uno de ellos, hacé una tarjeta en HTML (por ejemplo: todos los personajes)

Al hacer click en cada tarjeta,

La lista de tarjetas debe ocultarse.
Debes hacer un fetch al recurso específico usando el id que te da la api
Debes hacer una tarjeta de detalles del recurso
Seguí el código de la clase anterior para guiarte.*/

//Seleccion elemtos del Dom y Variables
const UrlBase = "https://www.breakingbadapi.com/api/"
const endPointCharacters = "https://breakingbadapi.com/api/characters"
const cardPersonajes = document.querySelector("#card-personajes")


const traerInfoPersonajes= () =>{
  fetch(endPointCharacters)
  .then((res) =>  res.json())
  .then((data) => {
   crearTarjeta(data)
   //console.log(data)
  })
}

traerInfoPersonajes()


const crearTarjeta = (data) =>{

    const mostrarEnHtml = data.reduce ((acc, elemento) =>{

        return acc + 
        `
        <div>
            <img id="imagen-personaje" src="${elemento.img}" alt="">
        </div>
        <p id="nombre-personaje">Nombre:${elemento.name}</p>
        <p id="nickname-personaje">Nick Name:${elemento.nickname}</p>
        <p id="ocupacion-personaje">Ocupación: ${elemento.occupation}</p>
        <p id="status-personaje">Status: ${elemento.status}</p>
        `
    }, "")
    cardPersonajes.innerHTML = mostrarEnHtml
}

traerInfoPersonajes()