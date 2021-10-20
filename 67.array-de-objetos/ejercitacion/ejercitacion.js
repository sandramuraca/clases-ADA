const operaciones = [
    {
      descripcion: 'Sueldo',
      categoria: 'Trabajo',
      fecha: '01/01/2021',
      monto: 50000,
      tipo: 'Ganancia',
    },
    {
      descripcion: 'Pago de alquiler',
      categoria: 'Alquiler',
      fecha: '02/01/2021',
      monto: 15000,
      tipo: 'Gasto',
    },
    {
      descripcion: 'Pago de expensas',
      categoria: 'Alquiler',
      fecha: '02/01/2021',
      monto: 5000,
      tipo: 'Gasto',
    },
    {
      descripcion: 'Pago de internet',
      categoria: 'Servicios',
      fecha: '10/01/2021',
      monto: 2000,
      tipo: 'Gasto',
    },
    {
      descripcion: 'Trabajo freelance',
      categoria: 'Trabajo',
      fecha: '15/01/2021',
      monto: 20000,
      tipo: 'Ganancia',
    },
    {
      descripcion: 'Cena con amigas',
      categoria: 'Salidas',
      fecha: '18/01/2021',
      monto: 1500,
      tipo: 'Gasto',
    },
  ];
  
//1) Mostrar en consola "Cena con amigas" (encontralo en el array de objetos)
  console.log(operaciones[5].descripcion)

  
//2)Mostrar en consola "10/01/2021"
  console.log(operaciones[3].fecha)
  
//3)Mostrar en consola "Servicios"
  console.log(operaciones[3].categoria)

// 4)Crea un nuevo objeto llamado nuevaOperacion con los siguientes valores: para descripcion, "Veterinaria". Para categoria, "Mascotas". Para fecha, "19/01/2021". Para monto, "2500". Para tipo, "Gasto".
nuevaOperacion = {
    descripcion: 'Veterinaria',
    categoria: 'Mascotas',
    fecha: '19/01/2021',
    monto: 2500,
    tipo: 'Gasto',
}
  
//5)Agrega el objeto recien creado al array operaciones.
operaciones.push(nuevaOperacion)
console.log(operaciones)

//6) Recorre con un map operaciones y guarda el array resultante con el nombre copiaOperaciones. El nuevo array sera exactamente igual al anterior, pero en lugar de tener el monto como un numero, lo tendra como un string. (Pista: despues de hacer el ejercicio 6, chequea con un console log que operaciones siga teniendo sus propiedades monto como numero. Si no es asi, recorda usar el spread operator!)

//*****VER*** */
const copiaSegura = [...operaciones]
const copiaOperaciones = copiaSegura.map((dato) =>{
    
 
     const montoAString = String(dato.monto);
     console.log(typeof(montoAString))
  return copiaSegura;
})

console.log(copiaOperaciones)
  

//7) Recorre con un filter operaciones y guarda el array resultante con el nombre filtroOperaciones. El array nuevo debera tener solo aquellas operaciones cuyo monto sea mayor a 3000.

const filtroOperaciones = operaciones.filter((elemento)=>{
 return elemento.monto > 3000
})

console.log(filtroOperaciones)
  
//8)Recorre con un filter operaciones y guarda el array resultante con el nombre ganancias. El array nuevo debera tener solo aquellas operaciones cuyo tipo sea "Ganancia" en lugar de "Gastos".

//*******VER***** */

// const ganancias = operaciones.filter((elemento)=>{
//     return elemento.tipo === 'Ganancia'
// })

// console.log(ganancias)
  
//9)Recorre con un map operaciones y guarda en una nueva variable totalGastos la suma de todos los montos de los objetos cuyo tipo sea "gasto" (Pista: vas a necesitar una acumuladora)*/

//*******VER***** */