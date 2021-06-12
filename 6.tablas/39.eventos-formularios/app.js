//elementos del DOM  que voy a usar
const button = document.getElementById("button");

const inputText = document.getElementById("inputText");

const checkbox = document.getElementById("checkbox");

const titulo = document.getElementById("tituto");

const formulario = document.getElementById("formulario");

const opciones = document.getElementById("opciones");

//inputText.value-> se utiliza para obstner el texto dentro del input
//checkbox.checked ->lo utilizo para obtener el estado, es un boolean
//event-> da informacion del evento y tiene sus propias funciones como 
//preventDefaul

//Acciones que voy a realizar

/*button.addEventListener("click", ()=>{
    alert(inputText.value);
});

button.addEventListener("click", (event)=>{
    event.preventDefault();
    console.log(event);
    console.log(inputText.value, chekbox.checked);
    if(checkbox.checked){
        alert("Hello!");
    }
});*/

//focus: cuando la barra titila en el campo de input, tiene la atencion
//blur: cuando se pierde el focus

/*inputText.addEventListener("focus", ()=>{
    console.log("hola");
});

inputText.addEventListener("blur", ()=>{
    console.log("chau");
});*/

//se va a ejecutar cada vez que el elemeto cambie de valor
inputText.addEventListener("input", ()=>{
    console.log(inputText.value);
    titulo.textContent = inputText.value;
});

inputText.value = "el valor que le quiero dar";

//evento que toma todo el formulario
formulario.addEventListener("submit", () => {
    alert("el formulario se envio");
});

