import Card from"./Card";
import CardContainer from "./CardContainer";



const App = () => {
  const nombre = "Sandra"
  
  return (
    

    <div className= "contenerdor">
      <h1>Hola {nombre} </h1>
      <Card></Card>
      <CardContainer></CardContainer>
      <CardContainer></CardContainer>
      <CardContainer></CardContainer>
    </div>
    
  )
}

export default App