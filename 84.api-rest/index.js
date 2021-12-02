

fetch("https://601da02bbe5f340017a19d60.mockapi.io/users")
.then((res) =>  res.json())
.then((data) => {
 crearTablaHTML(data)
})

const crearTablaHTML = (data) => {
  const tabla = document.querySelector("#tabla")
  const html = data.reduce((acc, curr) => {
    return acc + `  
    <tr>
      <td>${curr.fullname}</td>
      <td>${curr.email}</td>
      <td>${curr.address}</td>
      <td>${curr.phone}</td>
      <td><button id="${curr.id}">Editar usuario</button></td>
    </tr>
    `
  }, `
    <tr>
      <th>Nombre</th>
      <th>Email</th>
      <th>Direccion</th>
      <th>Telefono</th>
      <th>Acciones</th>
    </tr>
    `)

    tabla.innerHTML = html
}

const formCrearUsuario= document.querySelector("#form-crear-usuario")
const nombreUsuario = document.querySelector("#nombre-usuario")
const emailUsuario = document.querySelector("#email-usuario")
const direccionUsuario = document.querySelector("#direccion-usuario")
const telefonoUsuario = document.querySelector("#telefono-usuario")

formCrearUsuario.onsubmit = (e) => {
e.preventDefault()
console.log(nombreUsuario.value)

fetch("https://601da02bbe5f340017a19d60.mockapi.io/users", {
  method: "POST", 
  // la api me va a decir lo que tengo que mandar en el body
  body: JSON.stringify({
    fullname: nombreUsuario.value,
    email:emailUsuario.value,
    address:direccionUsuario.value,
    phone:telefonoUsuario.value,
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
}

