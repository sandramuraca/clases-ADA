//API: servicio que expone informacion de una base de datos, la mejora para que la podamos ver.

//api rest: maneja su informacion con:
//se suman a la url base los distintos endpoints
//endpoints (categorias) - generalmente se agrega una extension a la url base
//recursos (informacion) - id generalmente

//estructura= BASE + ENDPOiNT + RECURSO

//parametros: es optativo
//query params o parametros de busqueda ---> permiten organizar la información
//estructura: character?gender=female&status=alive
// ? separa lo que queres buscar (endpoint) de las limitaciones 
// ejemplo: character (endpoint/personajes)? gender=female&status=alive
//                                       con & concateno las limitaciones  

//https://rickandmortyapi.com/api --> url base
//    base                        endpoints
//https://rickandmortyapi.com/api/character
//                               /location
//                               /episode 

//cuando una api tiene mucha informacion en el resultado de la busqueda, pagina el resultado, en la consola en la informacion devuelve si tiene una pagina previa o posterior. Esto se hace para optimizar la velocidad de respuesta

//para buscar un episorio
fetch("https://rickandmortyapi.com/api/episode?name=The%20Ricklantis%20Mixup")
.then((res) => res.json())
.then((data) => {
  console.log(data)
})

fetch("https://rickandmortyapi.com/api/character/1")
.then((res) => res.json())
.then((data) => {
  console.log(data)
})
