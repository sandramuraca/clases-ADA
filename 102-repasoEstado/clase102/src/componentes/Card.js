import "./Card.css"
import {useState} from "react"



const Card = ({nombre, precio, descripcion})=> {

    const [mostrarDescripcion, setMostrarDescripcion ] = useState(false)

    const handleMouseEnter = () =>{
        setMostrarDescripcion(true)
    }

    const handeMouseLeave = () =>{
        setMostrarDescripcion(false)
    }

    return(

        <article className="card" 
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handeMouseLeave}>
            <h2>Nombre:{nombre}</h2>
            <p>Precio: $ {precio}</p>

            {mostrarDescripcion &&
            <p>Descripción: {descripcion}</p>
            }
            

        </article>
    )
}

export default Card