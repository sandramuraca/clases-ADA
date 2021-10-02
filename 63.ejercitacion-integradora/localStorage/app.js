/* ***EJERCICIOS LOCAL STORAGE *****
https://github.com/malerey/localstorage-ejercicios

1-Crea tres objetos usuario1, usuario2, usuario3 que tengan las propiedades nombreUsuario y contrasenia como strings.
2- Definí una función saludar que reciba como parámetro un objeto y que modifique el HTML de tu página para que aparezca un h1 que diga "Hola, {nombreUsuario}".
3- Probá tu función con los tres objetos definidos antes.
*/

const titulo = document.querySelector("#titulo")

const usuario1 = {
    nombreUsuario: "Sandra",
    contrasenia: "asd123456"
}

const usuario2 = {
    nombreUsuario: "Juan",
    contrasenia: "asd456789"
}

const usuario3 = {
    nombreUsuario: "Pedro",
    contrasenia: "asd789456"
}

const usuario4 = {
    nombreUsuario: "Laura",
    contrasenia: "789123"
}

const saludar = (user) =>{
    titulo.textContent = `Hola, ${user.nombreUsuario}!`
    console.log("se esta ejecutando la funcion salkudar")
}


//saludar(usuario1)
//saludar(usuario2)
//saludar(usuario3)

//4- Definí una función modificarNombreDeUsuario que reciba dos parametros: un objeto usuario y un string nuevoNombre. La función debe retornar el objeto con la propiedad nombreUsuario modificada para tener el valor de nuevoNombre.

const modificarNombreDeUsuario = (user, nuevoNombre) =>{
    user.nombreUsuario = nuevoNombre
}

modificarNombreDeUsuario(usuario1, "Claudia")
//saludar(usuario1)

//6- Definí una función modificarContrasenia que reciba dos parametros: un objeto usuario y un string nuevaContrasenia. La función debe retornar el objeto con la propiedad contrasenia modificada para tener el valor de nuevaContraseni

const modificarContrasenia = (user, nuevaContrasenia) =>{
    user.contrasenia = nuevaContrasenia
}
modificarContrasenia(usuario1, "rrrrrr")
console.log(usuario1)

//8- Crea la función convertirAJSON. La función debe recibir un objeto usuario como parámetro y retornar el objeto convertido a JSON.
const convertiraJSON = (user) =>{
    return JSON.stringify(user)
}

const convertidoAJASON1 = convertiraJSON(usuario1)
const convertidoAJASON2 = convertiraJSON(usuario2)
const convertidoAJASON3 = convertiraJSON(usuario3)

//9- Crea la función convertirDesdeJSON. La función debe recibir una cadena JSON objetoJSON y retornar la cadena convertida a un objeto de Javascript.

const convertirDesdeJSON = (objetoEnJSON) =>{
    return JSON.parse(objetoEnJSON)
}

const JSONconvertidoAObjeto1 = convertirDesdeJSON(convertidoAJASON1)
console.log(JSONconvertidoAObjeto1)

//10- Definí la función guardarEnLocalStorage que reciba como parámetro un objeto de Javascript y un string, y guarde en localStorage la cadena con el string como nombre de la clave (Recordá que antes de guardar un objeto en localStorage hay que convertirlo a JSON: usá la función convertirAJSON que declaraste antes)

const guardarEnLocalStorage = (objeto, string) =>{
    const objetoJSON = convertiraJSON(objeto)
    localStorage.setItem(string, objetoJSON)
}

guardarEnLocalStorage(usuario4, "UsuariosClave")

//11- Definí la función leerDesdeLocalStorage que reciba como parámetro un string clave y retorne un objeto de Javascript con los datos guardados bajo esa clave en localStorage. (Utilizá la función convertirDesdeJSON!)

const leerDesdeLocalStorage = (clave) =>{
 const datosDesdeLocalStorage = localStorage.getItem(clave)
 return convertirDesdeJSON(datosDesdeLocalStorage)
}

console.log(leerDesdeLocalStorage("UsuariosClave"))



//*****SEGUNDA PARTE EJERCICIO****/



const buttonInicio = document.querySelector("#iniciar-sesion")
const buttonEnviar = document.querySelector("#enviar")
const inputUsuario = document.querySelector("#usuario")
const inputPass = document.querySelector("#contrasenia")
const formulario = document.querySelector("#formulario")
const buttonCambiarDatos = document.querySelector("#cambiar-datos")
const buttonCerrarSesion = document.querySelector("#cerrar-sesion")

buttonInicio.onclick = () => {
    formulario.classList.remove("ocultar")
}

const usuario5 = {
    nombreUsuario: "Carlos",
    contrasenia: "123456"
}

const comprobarDatos = (usuario) =>{
    console.log(inputUsuario.value)
    console.log(inputPass.value)
    if(inputUsuario.value === usuario.nombreUsuario &&
        inputPass.value === usuario.constrasenia){
            saludar(usuario)
            buttonInicio.classList.add("ocultar")
            buttonCambiarDatos.classList.remove("ocultar")
            buttonCerrarSesion.classList.remove("ocultar")
        }
}

buttonEnviar.onclick= () =>{
    comprobarDatos(usuario5)
}