import "./TarjetaGato.css"

const TarjetaGato = ({nombre, descripcion, imagen}) => {

    return(
     <div classname="tarjeta-gato">
         <h1>{nombre}</h1>
         <p>{descripcion}</p>
         <div className="contenedor-img-gato">
            <img className="img-gato" src={imagen} />
         </div>
    </div>
    )
}

export default TarjetaGato