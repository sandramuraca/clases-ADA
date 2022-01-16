import "./App.scss"
import "./components/Button"
import Button from "./components/Button";

const App = () => {
  return (
    <div>
      <h1>Hola</h1>
      <Button 
       mensaje= "Chau"
       color ="rojo"/>
       <Button 
       mensaje= "Hola"
       color ="verde"/>
    </div>
  )
}

export default App;

//desestructuracion
//crear variable a partir de un objeto

// const persona ={
//   nombre: "juan",
//   apellido: "perez",
//   profesion: "carpintero"
// }

// const {nombre, apellido, profesion} = persona