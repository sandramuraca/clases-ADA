/*Definí una función jugarPiedraPapelTijera que reciba como argumentos dos strings a y b que representen una jugada (piedra, papel, tijera) y retorne un string con un mensaje avisando qué jugada ganó (o si hubo empate)*/

const usuarioUnoPartidaUno = prompt("Usuario 1: piedra, papel o tijera?");
const usuarioDosPartidaUno = prompt("Usuario 2: piedra, papel o tijera?");

const usuarioUnoPartidaDos = prompt("Usuario 1: piedra, papel o tijera?");
const usuarioDosPartidaDos = prompt("Usuario 2: piedra, papel o tijera?");

const usuarioUnoPartidaTres = prompt("Usuario 1: piedra, papel o tijera?");
const usuarioDosPartidaTres = prompt(" Usuario 2: piedra, papel o tijera?");

const jugarPiedraPapelTijera = (a,b) => {
    if (a === b ) {
        return "¡Empate!";
    }
    else if (a === "tijera" && b === "piedra" || a === "piedra" && b === "tijera" ) {
        return "Gana piedra";
    }
    else if (a === "papel" && b === "tijera" || a === "tijera" && b === "papel" ) {
        return "Gana tijera";
    }
    else if (a === "papel" && b === "piedra" || a === "piedra" && b === "papel" ) {
        return "Gana papel";
    }
}

const partida1 = (jugarPiedraPapelTijera(usuarioUnoPartidaUno,usuarioDosPartidaUno));
alert(partida1);

const partida2 = (jugarPiedraPapelTijera(usuarioUnoPartidaDos,usuarioDosPartidaDos));
alert(partida2);

const partida3 = (jugarPiedraPapelTijera(usuarioUnoPartidaTres,usuarioDosPartidaTres));
alert(partida3);

/* ejercicio resuelto por Sofi:
const usuario1 = prompt("Cual es su nombre?");
const usuario2 = prompt("Cual es su nombre?");

const jugarPiedraPapelTijera = () => {
    const jugador1 = prompt(usuario1 + " " + "piedra, papel o tijera?");
    const jugador2 = prompt(usuario2 + " " + "piedra, papel o tijera?" );
if(jugador1 === jugador2){
        alert("empate!");
    }
    else if(jugador1 === "tijera" && jugador2 === "papel" || jugador1 === "piedra" && jugador2 === "tijera" || jugador1 === "papel" && jugador2 === "piedra"){
        alert(`gano ${usuario1}`);
    }
    else if(jugador1 === "papel" && jugador2 === "tijera" || jugador1 === "tijera" && jugador2 === "piedra" || jugador1 === "piedra" && jugador2 === "papel"){
        alert(`gano ${usuario2}`);
    }
  
}


jugarPiedraPapelTijera();

jugarPiedraPapelTijera();

jugarPiedraPapelTijera();*/

/* Resuelto por Jenny
const jugarPiedraPapelTijera = (jugador1,jugador2) =>{
 if(jugador1 === jugador2){
        return("¡Empate!");
    }
    else if(jugador1 === "tijera" && jugador2 === "papel" || jugador1 === "papel" && jugador2 === "tijera"){
        return("¡Ganó tijera!");
    }
    else if (jugador1 === "piedra" && jugador2 === "tijera" || jugador1 === "tijera" && jugador2 === "piedra"){
        return("¡Ganó piedra!");}
    else if (jugador1 === "papel" && jugador2 === "piedra" || jugador1 === "piedra" && jugador2 === "papel"){
        return("¡Ganó papel!");  
    }  
}*/