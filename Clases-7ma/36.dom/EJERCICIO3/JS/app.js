let tamanioImagen = prompt (`ingrese el tamaño de la imagen:
                            1- Pequeño
                            2- Mediano
                            3- Grande`);

const idSelect = document.getElementById("cat");
const imgPequenia = "width: 20%;" 
const imgMedia = "width: 50%;"
const imgGrande = "width: 110%;"
cat.style = imgPequenia;

if (tamanioImagen == 1){
    idSelect.style = imgPequenia;
} else if (tamanioImagen == 2){
    idSelect.style = imgMedia;
}else if (tamanioImagen == 3){
    idSelect.style = imgGrande;
}

/*
const nombre = prompt("ingresa tu nombre");
const titulo = document.querySelector("h1");

titulo.innerHTML = `Hola ${nombre}`;

const estilos = "color: red; background-color: black;"
titulo.style =  estilos;*/
