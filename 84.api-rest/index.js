/*******Elementos del Dom**********/
const tabla = document.querySelector("#tabla")
const botonNuevoUsuario = document.querySelector("#boton-nuevo-usuario")
const contenedorFormulario= document.querySelector("#contenedor-formulario")
const formCrearUsuario= document.querySelector("#form-crear-usuario")
const nombreUsuario = document.querySelector("#nombre-usuario")
const emailUsuario = document.querySelector("#email-usuario")
const direccionUsuario = document.querySelector("#direccion-usuario")
const telefonoUsuario = document.querySelector("#telefono-usuario")
const crearUsuario = document.querySelector("#crear-usuario")
const botonVolver = document.querySelector("#boton-volver")

/*******funciones auxiliares**********/
const crearBotonesBorrar = () =>{
  const botonesBorrar = document.querySelectorAll(".boton-borrar");

  for (let i = 0; i < botonesBorrar.length; i++) {
      botonesBorrar[i].onclick = () =>{
          const idUsuarioABorrar = botonesBorrar[i].dataset.id;
          borrarUsuario(idUsuarioABorrar);
      }
  }
}

const borrarUsuario = (id) =>{
  fetch(`https://601da02bbe5f340017a19d60.mockapi.io/users/${id}`, {
      method: "DELETE",
  })
  .then((res) => res.json())
  .then((data) =>{
  recuperarDatosApi();
  })
}

const crearBotonesEditar = () =>{
  const botonesEditar = document.querySelectorAll(".boton-editar");

  for (let i = 0; i < botonesEditar.length; i++) {
      botonesEditar[i].onclick = () =>{
          const idUsuarioAEditar = botonesEditar[i].dataset.id;
          editarUsuario(idUsuarioAEditar);//***ojo no esta creada la funcion!!!***
      }
  }
}

const editarUsuario = (id) =>{
  fetch(`https://601da02bbe5f340017a19d60.mockapi.io/users/${id}`, {
      method: "PATCH",
      body: JSON.stringify(datosUsuarioEditar), //****ojo esta variable no esta declarada!!!****
      headers: {
    "Content-Type": "application/json"
  }
  })
  .then((res) => res.json())
  .then((data) =>{
  recuperarDatosApi();
  })
}


/*******Get para traer datos de mi Api**********/
const recuperarDatosApi= () =>{
  fetch("https://601da02bbe5f340017a19d60.mockapi.io/users")
.then((res) =>  res.json())
.then((data) => {
 crearTablaHTML(data)
})
}

recuperarDatosApi()

//PENDIENTE
//abrir formulario editar cuando se presione el icono de editar
//recuperar los datos en el formulario en los campos correspondientes del usuario que quiero editar
//cuando presiono el boton editar usuario ejecuto el metodo patch y actualizo la api
//ejecuto el get nuevamente para voolver a actualizar el html


/*******Crear tabla con los datos de la Api**********/
const crearTablaHTML = (data) => {
  const tabla = document.querySelector("#tabla")
  const html = data.reduce((acc, curr) => {
    return acc + `  
    <tr>
      <td>${curr.fullname}</td>
      <td>${curr.email}</td>
      <td>${curr.address}</td>
      <td>${curr.phone}</td>
      <td><button class= "boton-editar" data-id="${curr.id}"><i class="fas fa-pencil-alt"></i>
      </button></td>
      <td><button class= "boton-borrar" data-id="${curr.id}"><i class="fas fa-trash-alt"></i>
      </button></td>
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
    crearBotonesBorrar() //funcion para seleccionar los botones de borrado
    crearBotonesEditar() //funcion para seleccionar los botones de editar
}

/*******Boton para abrir el formulario para crear nuevo usuario**********/
botonNuevoUsuario.onclick = () =>{
  contenedorFormulario.classList.toggle("ocultar")
  tabla.classList.toggle("ocultar")
  botonNuevoUsuario.disabled = true
 }




/*******Post a la Api paracrear agregar nuevo usuario**********/
formCrearUsuario.onsubmit = (e) => {
e.preventDefault()

const nuevoUsuario = {
  fullname: nombreUsuario.value,
  email:emailUsuario.value,
  address:direccionUsuario.value,
  phone:telefonoUsuario.value,
}

fetch("https://601da02bbe5f340017a19d60.mockapi.io/users", {
  method: "POST", 
  
  body: JSON.stringify(nuevoUsuario), 

  headers: {
    "Content-Type": "application/json"
  }
})
  .then((res) => res.json())
  .then((data) => {
  console.log (data)
  recuperarDatosApi()  //traigo de nuevo los datos de la Api actualizados
  })
}

/*******Evento boton crear usuario**********/
crearUsuario.onclick = () =>{
  contenedorFormulario.classList.toggle("ocultar")
  tabla.classList.toggle("ocultar")
  botonNuevoUsuario.disabled = false
}

botonVolver.onclick = () =>{
  contenedorFormulario.classList.toggle("ocultar")
  tabla.classList.toggle("ocultar")
  botonNuevoUsuario.disabled = false
}



