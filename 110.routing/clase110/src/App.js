import './App.css';
import { BrowserRouter, Routes, Route, Link } from "react-router-dom"
import Blog from './componentes/Blog';
import Contacto from './componentes/Contacto';
import Home from './componentes/Home';

const App = () => {

  
  return (
    <div className="App">
      <BrowserRouter>
      <nav>
        {/* el componente link funciona solo para linkear paginas internas y tiene que estar dentro de BrouserRputer */}
        <Link to="/">Home</Link>
        <Link to="/blog">Blog</Link>
        <Link to="/contacto">Contacto</Link>


      </nav>
        <Routes>
            <Route path='/' element= {<Home/>}/>
            <Route path='/blog' element= {<Blog/>}/>
            <Route path='/contacto' element= {<Contacto/>}/>
        </Routes>

      </BrowserRouter>

      <h1>App con ruteo</h1>
          
      <footer>
        {/* para links a paginas externas se usa a href */}
        <a href='http://twitter.com'>visita mi twitter</a>
      </footer>
    </div>
  );
}

export default App;
