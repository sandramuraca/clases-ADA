//si quiero cuequear que un objeto tiene propiedades se usa el operador in
const seniora = {
    id: 0,
    edad: 25,
    nombre: "sandra",
    telefono: 123456 
}
//la pripiedad que quiero chequear se coloca como un string
console.log("id" in seniora)

//si quiero borrar una propiedad utilizo delete
delete seniora.telefono
console.log(seniora)

//JavaScript Object Notation
//JSON
//es sintaxis para mandar informacion en la web- tiene una estructura similar a los objetos
//sirve para enviar y recibir informacion a otras paginas web
//sirve para guardar informacion en el navegador - tp ahorradas

//exiete una manera de convertir a JSON un objeto de JS
const senioraJSON = JSON.stringify(seniora)

//el resultado es un string, y es el formato que el navegador necesita para guardar información, en ese caso lo guarde en una variable
console.log(senioraJSON)


//para guardar informacion en el almacenamiento local se utiliza una par "clave-valor" --->setItem ---> pasa la info del objeto a un JSON
                    //clave(key)  valor
localStorage.setItem("seniora", senioraJSON)
// esta informacion la puedo verificar:
//inspeccionar / aplicacion / almacenamiento local / http.... ahi veo los datos que guarde

//objetener info de local storage --> devuelve un JSON
const infoGuardada = localStorage.getItem("seniora")
console.log(infoGuardada)

//convierto JSON a JS
//infoGardada tiene la informacion se seniora en JSON
const infoGuardadaConvertidaAJa = JSON.parse(infoGuardada)


//PROCESO PARA GUARDAR INFO EN EL LOCAL STORAGE
//1. tener un objeto en JS
//2. Lo tengo que convertir a JSON -->JSON.strongify(objeto)
//3. lo tengo que guardar en el local storage --> localStorage.setItem(clave, valor)
//4. lo obtengo del local storage -->localStorage.getItem(clave)
//5. lo convierto a js --> JSON.parse(variable donde guarde la info de la clave)

//para chequear si exite info en el local storage (ver drive)

//ver  codigo Malena de la clase de hoy, modo oscuiro

//---------CLASE 63-------------
//REPASO DE OBJETOS Y EJERCITACION INTEGRADORA
