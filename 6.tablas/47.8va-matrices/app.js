// 
//matrices: son arrays anidado dentro de arrays, array multimensional

const equipo1 = ["Adrian", "Mati", "Meli"];
const equipo2 = ["Ludmila", "Agostina"];
const equipo3 = ["Mailen", "Valentina"];

const teams = [equipo1, equipo2, equipo3];

console.log(equipo1[1]); 
console.log(teams[0][1]);

const torneo = [
  "Liga profesional",
  "10/10/2021",
  20,
  teams,
  "Mar del Plata",
  "Argentina"
];

console.log(torneo[3][0][1]);

console.log(torneo.indexOf(teams));//posicion de equipos dentro de torneo

//recorrero todos los datos del torneo

/*for(let dato of torneo){
    console.log(dato)
}*/


//traer los jugadores de los equipos recorriendo con array / FOR TRADICIONAL
for(let i =0; i < torneo.length; i++){
    console.log(torneo[i]);
    //i= indice de cada elemento del array torneo
    if(typeof(torneo[i]) === 'object'){
        for(let j = 0; j < teams.length; j++){
            console.log(teams[j]);
            //j= indice de cada elemnto de team= de cada equipo
            for(let k = 0; k < teams[j].length; k++){
                //k= indice de cada elemnto de equipos, equipos lo llamo desde teams[j]
                console.log(teams[j][k])
            }
        }
        
    }
}


//traer los jugadores de los equipos recorriendo con array / FOR OF
for(const dato of torneo){
        //recorro todos los datos de torneo
    if(typeof(dato) === 'object'){
        //identifico que elemento es un objeto = equipos
        for(const team of teams){
            //recorro cada uno de los equipos
            for(const player of team){
                console.log(player);
            }
        }
    } 
}

