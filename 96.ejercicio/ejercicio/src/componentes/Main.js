import "./Main.scss"
import "./section"
import Section from "./section"

const Main = ()=>{
    return(
        <div>
            <Section
            titulo="Soy una gatita"
            subtitulo="Me llamo Flora"
            imagen="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZdhnWVeO5sTGetBtn0Hf9mkugl7IhbOmwnw&usqp=CAU"
            textoBoton= "primero" />
            <Section 
            titulo="Soy un perrito"
            subtitulo="Me llamo Firulais"
            imagen="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSAhrZ7cjjI7oCwpIr25_rvCg--UF8qRxglsA&usqp=CAU"
            textoBoton= "Segundo" 
            />
        </div>
    )
}

export default Main