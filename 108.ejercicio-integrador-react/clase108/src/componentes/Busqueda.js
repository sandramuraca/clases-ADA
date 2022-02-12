import { Box } from '@mui/material';
import TextField from '@mui/material/TextField';
import { useState, useEffect } from 'react';

const Busqueda = () =>{
       

    return(
        <Box>
            <TextField sx={{
                        width: 400,
                        }}
                        id="outlined-name"
                        label="Ingresa el nombre del personaje"
                        //onChange={handleChange}
                    />
        </Box>
        
    )
}

export default Busqueda