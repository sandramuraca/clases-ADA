//EVENTOS DE FORMULARIO 21-07-2021

const inputNombre = document.querySelector("#input-nombre")

//elementos para validar contraseña
const inputContrasenia =  document.querySelector("#contrasenia")
const inputConfirmacionContrasenia =  document.querySelector("#confirmar-contrasenia")
const error =  document.querySelector("#error")


console.log(inputNombre)


//EVENTOS BASICOS DE FORMULARIOS
//Focus: hacer foco en el elemento, titila el cursos
//blur: estuvo en foco y deja de estarlo

const mostrarElementoEnFoco = () =>{
    console.log("el elemento esta en foco")
}

const mostrarElementoEnBlur = () =>{
    console.log("el elemento ya no esta en foco")
}

inputNombre.onfocus = mostrarElementoEnFoco
inputNombre.onblur = mostrarElementoEnBlur

//change: cambios, se ejecuta cuando se presiona ENTER

const escucharCambios = () =>{
    console.log("el elemento cambio")
}
inputNombre.onchange = escucharCambios

//input: muestra cada tecla que se tipea
const escucharCadaTipeo = () =>{
    console.log("el usuario esta tipeando")
}
inputNombre.oninput = escucharCadaTipeo

const verValueDelTipeo = (event) =>{
    console.log(event.target.value)
}
inputNombre.oninput = verValueDelTipeo

/******validar contraseña */

const confirmarSiContraseniasSonIguales = () =>{

    const contrasenia1 = inputContrasenia.value
    const contrasenia2 = inputConfirmacionContrasenia.value

    if(contrasenia1 !== contrasenia2){
        inputContrasenia.style.borderColor = "#ff0000"
        inputConfirmacionContrasenia.style.borderColor = "#ff0000"
        error.textContent = "Las contraseñas deBen ser iguales"
        error.style.color = "#ff0000"
        
    }
    else{
        inputContrasenia.style.borderColor = "#00FF00"
        inputConfirmacionContrasenia.style.borderColor = "#00FF00"
        error.textContent = "Contraseñas validas"
    }
}

inputConfirmacionContrasenia.onblur = confirmarSiContraseniasSonIguales


/*******validar en vivo */

const nombreInput = document.querySelector("#nombre-input")
const contraseniaInput = document.querySelector("#contrasenia-input")
const mensaje = document.querySelector("#mensaje")

const validarEnVivo = () =>{
    const nombre = nombreInput.value
    const contrasenia = contraseniaInput.value

    if(contrasenia.toUpperCase().includes(nombre.toUpperCase())){
        mensaje.textContent = "La contraseña icluye el nombre"
        mensaje.style.color = "#ff0000"
    }
}

contraseniaInput.oninput = validarEnVivo

/*****FORMULARIO - SEGUNDA APRTE DE LA CLASE***** */
//submit envia la informacion y se actualiza la pagina
//se que se envia por que se actualiza la dir de la url
// todos mis elementos de formulario van a tener 4 eventos asociados:
// onfocus --> el usuario hace foco
// onblur --> el usuario saca el foco
// onchange --> el usuario envia un valor
// oninput --> el usuario escribe algo 

const form = document.querySelector("#formulario")
const inputEdad = document.getElementById("edad")
const inputProvincia = document.getElementById("provincia")
const inputGato = document.getElementById("gato")
const inputPerro = document.getElementById("perro")
const inputConejo = document.getElementById("conejo")
const inputSuenios = document.getElementById("suenios")
const inputColor = document.getElementById("color")
const inputAmorConejos = document.getElementById("amor-conejos")


form.onsubmit = () =>{
    alert("el formulario se envio")
    console.log("el formulario se envio")
}

//Quiero evitar que el formulario se enviar se usa prevent default
form.onsubmit = (event) =>{
    event.preventDefault()
    console.log(inputEdad.value)

  console.log(inputProvincia.value)

  console.log(inputGato.value)
  console.log(inputGato.checked)

  console.log(inputPerro.value)
  console.log(inputPerro.checked)
  
  console.log(inputConejo.value)
  console.log(inputConejo.checked)
  
  
  console.log(inputSuenios.value)
  console.log(inputColor.value)
  console.log(inputAmorConejos.value)
}

//EJEMPLO BASICO PARA GENERADOR MEME
const textoInput = document.getElementById("texto")
const textoResultado = document.getElementById("resultado-texto")
const colorInput = document.getElementById("color")
const imagenInput = document.getElementById("imagen")
const resultadoImagen = document.getElementById("resultado-imagen")

textoInput.oninput = () => {
  textoResultado.textContent = textoInput.value 
}

colorInput.oninput = () => {
  // colorInput.value 
  textoResultado.style.color = colorInput.value
}

imagenInput.oninput = () => {
  // imagenInput.value
  resultadoImagen.src = imagenInput.value 

}