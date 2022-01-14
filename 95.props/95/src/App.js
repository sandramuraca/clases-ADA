import "./App.css"
import Nav from "./components/Nav"
import Main from "./components/Main"
import Footer from "./components/Footer"
import Boton from "./components/Boton"

const App = () =>{
  return(
    <div className="contenedor">
      <Nav></Nav>
      <Main></Main>
      <Footer></Footer>
    </div>
  )
}

export default App