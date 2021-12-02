//FETCH es un metodo que tiene dos parametros:
//la direccion a la que me tengo que comunicar
//objeto (este es obligatorio cuando hacer un post)

//VERBOS O METODOS HTTP

//GET - peticion de tipo GET pido información a una dirección
//pedimos informacion
//mandamos una peticion a una url y la api nos responde con información
//recibo como json
//convierto a js

fetch("https://reqres.in//api/users?pasge=2")
.then((res) => res.jason())
.then((data) => {
    console.log(data)
})



//POST
//crear informacion
// toda peticion http tiene dos campos opcinales
//header: info para el backend
//body: informacion que quiero que se agregue
//tengo que convertir a json

fetch("https://reqres.in/api/users", {
  method: "POST", 
  // la api me va a decir lo que tengo que mandar en el body
  body: JSON.stringify({
    name: "morpheus",
    job: "leader"
  }), 
  // la api me va a decir lo que tengo que mandar en los headers
  headers: {
    "Content-Type": "application/json"
  }
})
.then((res) => res.json())
.then((data) => {
    console.log (data)
})

//respuesta de la api: status code --> como salio la peracion?
//200: salio todo bien
//400: algo salio mal por el front
//500: algo salio mal por el back

//ACTUALIZAR INFORMACIÓN
//PUT: sirve para modificar TODA la informacion de un objeto
//PATCH: sirve para modificar ALGUNAS propiedades de un objeto
//se hace a la direccion del objeto en particular donde esta el objeto que quiero modificar

fetch("https://reqres.in/api/users/2",{
    method: "PUT",
    body: JSON.stringify({
        "first_name" : "lalala",
    }),
    headers: {
        "Content-Type": "application/json"
      }
    })
    .then((res) => res.json())
    .then((data) => {
    console.log (data)
})
//DELETE
//Borrar información

fetch("https://reqres.in/api/users/2",{
    method: "DELETE",
      headers: {
        "Content-Type": "application/json"
      }
    })
//     .then((res) => res.json())
//     .then((data) => {
//     console.log (data)
// })


