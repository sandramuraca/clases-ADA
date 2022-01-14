import Card from"./Card"

const CardContainer = () => {
    return (
        <div>
          <h2>Titulo</h2>
          <a href="https://www.google.com">Soy un link</a>
          <div className="container-tarjetas">
            <Card></Card>
            <Card></Card>
            <Card></Card>
            <Card></Card>
            <Card></Card>
          </div>
        </div>
      )

}

export default CardContainer