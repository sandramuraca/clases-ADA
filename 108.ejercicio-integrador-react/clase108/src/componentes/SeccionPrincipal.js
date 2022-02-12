import Box from '@mui/material/Box';
import {useState, useEffect } from "react";
import Tarjeta from './Tarjeta';
import Busqueda from './Busqueda';




const SeccionPrincipal = () =>{

    const [personajes, setPersonajes] = useState([]);

    useEffect(() => {
    fetch("https://rickandmortyapi.com/api/character")
    .then((res) => res.json())
    .then((data) => setPersonajes(data.results));
    }, []);

 

    return(
        <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}
        >
            <Box>
                <Busqueda/>                
            </Box>
        
            <Box sx={{ display: "flex", flexWrap: "wrap", justifyContent:"Center", m: 4 }}
            >           
                {personajes.map((personaje) =>(

                    <Tarjeta
                    imagen={personaje.image}
                    nombre={personaje.name}
                    status={personaje.status}
                    />
            
                ))}
                        
            </Box>
        </Box>
    )
}

export default SeccionPrincipal