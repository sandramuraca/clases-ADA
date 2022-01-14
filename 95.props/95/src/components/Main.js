import Card from "./Card"
import "./styles/main.css"


const Main = ()=> {
    return(
        <main className="main">
            <h1>Bienvenidos</h1>
            <div className="conteiner-card">
                <Card 
                nombre="Karen"
                imagen= "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZdhnWVeO5sTGetBtn0Hf9mkugl7IhbOmwnw&usqp=CAU" />

                <Card 
                nombre="Flora"
                imagen= "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCWcb-OofVwsD3lb7Y30esSfB9PmqXeWqHzg&usqp=CAU" />

                <Card 
                nombre="Boli"
                imagen= "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRsWw9Ms-lYgjHPSP7ZZxJXvYyAZdQa1qyDSA&usqp=CAU" />
                
            </div>
        </main>
    )
}

export default Main