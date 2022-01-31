import './App.css';
//import codigo de componente propio, tengo que escribir la ruta
import Card from './componentes/Card';
import CarouselLocal from './componentes/Carousel';

//import de libreria
//nombre de la funcion fron LIBRERIA
import {useState} from "react"
import { GoAlert as Alerta, GoGist as Codigo, GoCommentDiscussion as Mensaje} from "react-icons/go";
//import { GoGist } from "react-icons/go";

function App() {

  const [mostrarModalPrincipal, setMostrarModalPrincipal] = useState(false)
  const [mostrarModalTerminos, setMostrarModalTerminos] = useState(true)

  const handleClickAbrir = () =>{
    setMostrarModalPrincipal(true)
  }

  const handleClickCerrar = () =>{
    setMostrarModalPrincipal(false)
  }
  const handleClickCerrarModalTerminos = () =>{
    setMostrarModalTerminos(false)
  }

  const gatos = [
    {
      nombre: "Gatito triste", 
      precio: 20000,
      descripcion: "Gato muy triste"
    }, {
      nombre: "Gatito muuuy triste", 
      precio: 39000,
      descripcion: "Gato muuuuy triste"
    }, {
      nombre: "Gatito algo feliz", 
      precio: 500000,
      descripcion: "Gato que esta algo feliz"
    }
  ]

  return (
    <div>
      <h1>Estado</h1>

      <p>voy a poner iconos: se importan y luego se tratan como un componente. Se importan dentro del componente donde lo quiero usar</p>

      <h2>
      <Alerta/>
      <Codigo/>
      <Mensaje/>
      </h2>
      

      <div className='container-tarjetas'>
      {gatos.map(elemento => (
        <Card 
        nombre={elemento.nombre}
        precio={elemento.precio}
        descripcion={elemento.descripcion}  
          />
      ))}
             
      </div>
      

      <button onClick={handleClickAbrir}>Abrir Modal</button>

      {mostrarModalPrincipal &&
      <article className="modal">
        <h2>Soy un modal</h2>
        <p>Texto del modal , sarasa sarasa</p>
        <button onClick={handleClickCerrar}>Cerrar modal</button>
      </article>
      }

      {mostrarModalTerminos &&
      <article className="modal-terminos">
        <h2>Modal Terminos</h2>
        <p>Acepta términos y condiciones</p>
        <button onClick={handleClickCerrarModalTerminos}>Cerrar modal</button>
      </article>
      }

    <CarouselLocal />

    </div>
      
    
   
  );
}

export default App;
