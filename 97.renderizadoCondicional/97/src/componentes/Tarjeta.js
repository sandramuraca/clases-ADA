import "./Tarjeta.css"

const Tarjeta = ({title, price, thumbnail, shiping, condition, color, discount}) => {
    //console.log(props)
    console.log(price, shiping, discount)
    

    const porcentajeDeDescuento = 0
    const textoDescuento = "% off"

    return (
        <article className={color}>
          
            <h2>{title}</h2>
            <h3>{price}</h3>
            <img src={thumbnail}/>

            <p>{shiping===true && "Envío gratuito"}</p>

            {shiping===true && <p>"Envío gratuito"</p>}

            <p>{condition === "new" ? "NUevo" : "Usado"}</p>

            <p>{discount > porcentajeDeDescuento && discount + "% off"}</p>

            {discount !== 0 && <p>{discount} % off</p>}

            <p>{discount > porcentajeDeDescuento && `${discount} ${textoDescuento}`}</p>

        </article>

    )
}

export default Tarjeta