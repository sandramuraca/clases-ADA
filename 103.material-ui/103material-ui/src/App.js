import './App.css';

import Button from '@mui/material/Button';


function App() {
  return (
    <div className="App">
      <h1>hola</h1>
      <Button variant="text">Text</Button>

      <Button variant="contained" disabled>Desabilitado</Button>

      <Button variant="contained" disableElevation>
      Disable elevation
    </Button>

    <Button variant="outlined">Primary</Button>
    <Button color="secondary">Secondary</Button>
    <Button variant="contained" color="success">
      Success
    </Button>
    <Button variant="outlined" color="error">
      Error
    </Button>
    
    </div>
  );
}

export default App;
