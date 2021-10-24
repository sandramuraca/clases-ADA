//AGREGAR CONTENIDO DEL OBJETO A MI HTML

const operaciones = [
    {
      descripcion: 'Cena con amigos',
      categoria: 'Categoria',
      fecha: '25/09/2021',
      monto: 2500,
      tipo: 'Gasto',
    },
    {
      descripcion: 'Comida para gatos',
      categoria: 'Categoria',
      fecha: '25/09/2021',
      monto: 3000,
      tipo: 'Gasto',
    },
    {
      descripcion: 'Alquler',
      categoria: 'Categoria',
      fecha: '25/09/2021',
      monto: 25000,
      tipo: 'Gasto',
    },
]

const tarjeta = document.querySelector("#tarjeta-operaciones")

let acc= ""

operaciones.map((operacion)=>{
    acc = acc+
    `<div clas= "fila">
       <h3>${operacion.descripcion}</h3>
       <h2>${operacion.categoria}</h2>
       <h3>${operacion.monto}</h3>
    </div>
   `
})

tarjeta.innerHTML = acc

// Declarar una funcion que se llame convertirOperacionesaHTML
// la funcion recibe como parametro un array de operaciones
// no debe retornar nada, debe pasar las operaciones a HTML 
// (con el estilo de Ahorradas en Bulma)