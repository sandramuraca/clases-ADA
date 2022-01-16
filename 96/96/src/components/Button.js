import "./Button.scss"

//desestructurar las props
const Button = ({color, mensaje}) => {
    //console.log(props)
    return (
        <button className={`boton ${color}`}>{mensaje}</button>
    )
}

export default Button