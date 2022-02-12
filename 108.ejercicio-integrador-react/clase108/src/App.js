import Nav from './componentes/Nav';
import SeccionPrincipal from './componentes/SeccionPrincipal';
import Footer from './componentes/Footer';
import Box from '@mui/material/Box';


import './App.css';

const  App = () =>{
  return (
    <Box>
      <Nav/>
      <SeccionPrincipal/>
      <Footer />
    </Box>
    
  );
}

export default App;
