
import Button from "./Button"

const Section = (props) => {
    return (
        <div className="contenedor-section">
            <h1>{props.titulo}</h1>
            <h2>{props.subtitulo}</h2>
            <img src= {props.imagen}/>
            <Button 
            texto= {props.textoBoton}/>
        </div>
    )
}

export default Section