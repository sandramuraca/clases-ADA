/****EJERCICIO INTEGRADOR PARTE 2 ******/

//FUNCIONES AUXILIARES (1ER PARTE DEL EJERCICIO)

//SALUDAR USUARIO: recibE como parámetro un objeto y que modificae el HTML saludando con el nombre del usuario
const saludar = (user) =>{
    titulo.textContent = `Hola, ${user.nombreUsuario}!`
}

//MODIFICAR NOMBRE de un usuario (siempre que la propiedad del nombre del usuario en el objeto sea nombreUsuario)
const modificarNombreDeUsuario = (user, nuevoNombre) =>{
    user.nombreUsuario = nuevoNombre
}

//MODIFICAR CONSTRASEÑA
const modificarContrasenia = (user, nuevaContrasenia) =>{
    user.contrasenia = nuevaContrasenia
}

//CONVERTIR A JSON, convierto a JSON los datos del objeto que paso en el parametro, en este caso (user)
const convertiraJSON = (user) =>{
    return JSON.stringify(user)
}

//CONVERTIR DESDE JSON, recibo un json y lo conveierto a objeto
const convertirDesdeJSON = (objetoEnJSON) =>{
    return JSON.parse(objetoEnJSON)
}

//GUARDAR EN LOCAL STORAGE (el string que pasamos como parametro es la clave con la que guarda en el local storage)
const guardarEnLocalStorage = (objeto, string) =>{
    const objetoJSON = convertiraJSON(objeto)
    localStorage.setItem(string, objetoJSON)
}

//guardarEnLocalStorage(usuario4, "UsuariosClave")


//LEER DESDE LOCAL STORAGE(recibe un strong que es la clave del elemento que tengo guardado en el local storage)
const leerDesdeLocalStorage = (clave) =>{
    const datosDesdeLocalStorage = localStorage.getItem(clave)
    return convertirDesdeJSON(datosDesdeLocalStorage)
}
//console.log(leerDesdeLocalStorage("UsuariosClave"))


//***EJERCICIO***


// Elementos DOM
const titulo = document.querySelector("#titulo")
const buttonInicio = document.querySelector("#iniciar-sesion")
const buttonEnviar = document.querySelector("#enviar")
const inputUsuario = document.querySelector("#usuario")
const inputPass = document.querySelector("#contrasenia")
const formulario = document.querySelector("#formulario")
const buttonCambiarDatos = document.querySelector("#cambiar-datos")
const buttonCerrarSesion = document.querySelector("#cerrar-sesion")
const botonCambioDatosYCierre = document.querySelector(".sesion-iniciada")

const formularioCambioDatos = document.querySelector("#formulario-cambio-datos")
const inputNuevoUsuario = document.querySelector("#nuevo-usuario")
const inputNuevoPass = document.querySelector("#nueva-contrasenia")
const buttonEnviarCambios = document.querySelector("#enviar-cambios")

// Variable global de estado de sesion
let sesionIniciada = false

//Datos definidos para el usuario
const usuarioDefault = {
    nombreUsuario: "Carlos",
    contrasenia: "123456"
}

//Iniciar sesion
buttonInicio.onclick = () => {
    formulario.classList.remove("ocultar")
}

const usuarioLogeado = (usuario) =>{
       if(inputUsuario.value === usuario.nombreUsuario &&
        inputPass.value === usuario.contrasenia) {
            saludar(usuario)
            buttonInicio.classList.add("ocultar")
            formulario.classList.add("ocultar")
            buttonCambiarDatos.classList.remove("ocultar")
            buttonCerrarSesion.classList.remove("ocultar")
            sesionIniciada = true
        }else {
            alert("usuario o contraseña erroneos")
        }
}

buttonEnviar.onclick= () =>{
    usuarioLogeado(usuarioDefault)
}

console.log(usuarioDefault)
   
//Cambiar datos
buttonCambiarDatos.onclick = () =>{
    titulo.textContent = "Hola!"
    formularioCambioDatos.classList.remove("ocultar")
    buttonCambiarDatos.classList.add("ocultar")
    buttonCerrarSesion.classList.add("ocultar")
}

buttonEnviarCambios.onclick = ()=>{
    const modificarNombreDeUsuario = (user, nuevoNombre) =>{
    user.nombreUsuario = nuevoNombre
    return user       
    }
    const modificarContrasenia = (user, nuevaContrasenia) =>{
    user.contrasenia = nuevaContrasenia
    return user
    }

    modificarNombreDeUsuario(usuarioDefault, inputNuevoUsuario.value)
    modificarContrasenia(usuarioDefault, inputNuevoPass.value) 
    
    console.log(usuarioDefault)
    
    const nuevoUsuarioLogeado = (usuario) =>{
        if(inputNuevoUsuario.value === usuario.nombreUsuario &&
            inputNuevoPass.value === usuario.contrasenia) {
             saludar(usuario)
             buttonInicio.classList.add("ocultar")
             formularioCambioDatos.classList.add("ocultar")
             buttonCambiarDatos.classList.remove("ocultar")
             buttonCerrarSesion.classList.remove("ocultar")
             sesionIniciada = true
         }else {
             alert("usuario o contraseña erroneos")
         }
 }
    nuevoUsuarioLogeado(usuarioDefault)
}

//cerrar sesion
buttonCerrarSesion.onclick = () =>{
    sesionIniciada = false
    titulo.textContent = "Hola!"
    botonCambioDatosYCierre.classList.add("ocultar")
    buttonInicio.classList.remove("ocultar")
}


