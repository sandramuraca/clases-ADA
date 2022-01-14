import "./styles/card.css"

const Card = (props) => {

    console.log(props)

    //los parametros de un componente se llaman PROPS

    return(
    <article className="card">
        <h2>{props.nombre}</h2>
        <img src= {props.imagen} />
    </article>
    )
}

export default Card