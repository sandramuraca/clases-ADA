import './App.css';
import Blog from './componentes/Blog';
import Contacto from './componentes/Contacto';
import Home from './componentes/Home';
import { useState } from "react";

const App = () => {

  const [paginaAMostrar, setPaginaAMostrar] = useState("home")

  // const handleClickHome = () =>{
  //   setPaginaAMostrar("home")
  // }

  // const handleClickBlog = () =>{
  //   setPaginaAMostrar("blog")
  // }

  // const handleClickContacto = () =>{
  //   setPaginaAMostrar("contacto")
  // }

  //las funciones con el handleclick se pueden llamar directamente en el evento onclick ==> handleClickBlog = () => setPaginaAMostrar("blog"), eto se hace cuando la funcion hae solo 1 cosa como por ejemplo cambiar el estado, si la funcion hace mas coas se hace como esta arriba

  return (
    <div className="App">
      
      <nav>
        <ul>
          <li onClick={ () => setPaginaAMostrar("home") } >Home</li>
          <li onClick={ () => setPaginaAMostrar("blog") } >Blog</li>
          <li onClick={ () => setPaginaAMostrar("contacto") } >Contacto</li>
        </ul>
      </nav>

      {paginaAMostrar === "home" && <Home />}
      {paginaAMostrar === "blog" && <Blog />}
      {paginaAMostrar === "contacto" && <Contacto />}
           
    </div>
  );
}

export default App;
