import {useState, useEffect } from "react";
import './App.css';
import CardPersonajes from "./componentes/CardPersonajes";
import Box from '@mui/material/Box'; 
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import SearchIcon from '@mui/icons-material/Search';


function App() {
  const [personajes, setPersonajes] = useState([]);
  const [valorDelInput, setValorDelInput] = useState("");
  const [busqueda, setBusqueda] = useState("");
  
 // personajes inicia en un estado que es un array vacio
//personakjes inicia como un array vacio
 // en el segundo then cambio el estado de personajes, a los datos que trae data, setPersonaje es = data.results
 
  useEffect(() => {
    // nos permite determinar que un codigo se va a ejecutar
    // solo en algunas ocasiones
    //cuando el array de dependencias esta vacio se ejecuta una sola vez

    fetch("https://rickandmortyapi.com/api/character")
      .then((res) => res.json())
      .then((data) => setPersonajes(data.results));
  }, []);

  useEffect(() => {
    // nos permite determinar que un codigo se va a ejecutar
    // solo en algunas ocasiones
    //cuando el array de dependencias esta vacio se ejecuta una sola vez

    fetch(`https://rickandmortyapi.com/api/character?name=${busqueda}`)
      .then((res) => res.json())
      .then((data) => setPersonajes(data.results));
  }, [busqueda]);

  const handleChange = (e) =>{
    setValorDelInput(e.target.value)
  }

  const handleClick = () =>{
    setBusqueda(valorDelInput)
  }
  return (
    <Box>
      <Typography variant="h1" component="div"  align="center" bgcolor="black" color="white" >
        Rick and Morty
      </Typography>

      <Typography variant="h4"  component="div" align="center" bgcolor="black" color="white">
        Personaje buscado:{valorDelInput}
      </Typography>

      <Box sx={{display: "flex", 
                flexWrap: "wrap", 
                //bgcolor: "black", 
                justifyContent: "center",
                p:2,
             }}>

        <TextField sx={{
          width: 400,
          }}
          id="outlined-name"
          label="Ingresa el nombre del personaje"
          //value={valorDelInput}
          onChange={handleChange}
        />
        <Button margin="normal" variant="outline" endIcon={<SearchIcon/>} onClick={handleClick} >
          Buscar
        </Button>
    
      </Box>
     
      <Box sx={{display: "flex", 
                flexWrap: "wrap", 
                bgcolor: "black", 
                justifycontent: "center",
                p:2}}>
      
        {personajes.map((personaje) => (
        
            <CardPersonajes
            img={personaje.image}
            name={personaje.name}
            status={personaje.status}
            species={personaje.species}
            />
        
        ))}

        
      </Box>
    </Box>
  );

}

export default App;
