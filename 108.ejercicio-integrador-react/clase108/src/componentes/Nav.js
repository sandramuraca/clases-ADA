
import Box from '@mui/material/Box';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';


const Nav = ()=>{
    return (
        <Box sx={{ flexGrow: 1 }}>
          <AppBar 
          position="fixed"
          sx={{ bgcolor: "black"}}>
            <Toolbar>
              <IconButton
                size="large"
                edge="start"
                color="inherit"
                aria-label="menu"
                sx={{ mr: 2 }}
              >
              <MenuIcon />
              </IconButton>
              <Typography variant="h4" component="div" sx={{ flexGrow: 1 }}>
                Rick & Morty
              </Typography>
              <Button color="inherit">Principal</Button>
              <Button color="inherit">Detalle</Button>
            </Toolbar>
          </AppBar>
        </Box>
      );

}

export default Nav