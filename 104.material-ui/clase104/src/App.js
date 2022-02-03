import './App.css';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import { CardActions, CardContent, IconButton } from '@mui/material';
import Typography from '@mui/material/Typography';
import CardMedia from '@mui/material/CardMedia';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import Rating from '@mui/material/Rating';
import Chip from '@mui/material/Chip';

function App() {
  return (
    <div>
       <Box
        sx={{
          //border: 1,
          borderRadius: 2,
          bgcolor: 'info.main', 
          boxShadow: 1,
          color: 'white',
        }}
       >
         hola
       </Box>

       <Button variant="contained"
       sx={{
        margin: 2 
       }}>Contained</Button>
       
       <Card sx={{
        margin: 2,
        }}>
          <CardContent>
            <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
            Word of the Day
            </Typography>
            <Typography variant="h5" color="primary" component="div">
             be nev o lent
            </Typography>
            <Typography sx={{ mb: 1.5 }} color="text.secondary">
            adjective
            </Typography>
            <Typography variant="body2">
             well meaning and kindly.
            <br />
            {'"a benevolent smile"'}
            </Typography>
          </CardContent>
          
           <CardActions>
            <Button variant="text">Text</Button>
            <Button variant="contained"> hola </Button>
            <Button variant="outlined">Outlined</Button>
          </CardActions>
        </Card>

        <h2>Ejercicios clase</h2>
        <h3>Segunda card</h3>

      <Box sx={{ mx: "auto", width: 400, mb:6 }}
      > 
        <Card sx={{ maxWidth: 345 }}>
        <CardMedia
          component="img"
          height="140"
          image="http://www.placekitten.com/200"
          alt="gatito"
        />
        <CardContent>
          <Typography variant="h6">
            Our changing Planet
          </Typography>
          <Typography  gutterBottom variant="body1" color="text.secondary">
            By Kurt Wagner
          </Typography>
          <Typography variant="body2" color="text.secondary">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
          </Typography>

        </CardContent>
        <CardActions>
          <Button size="medium" color="secondary">Read</Button>
          <Button size="medium" color="secondary">Bookmark</Button>
          <IconButton>
            <FavoriteIcon></FavoriteIcon>
          </IconButton>
          <IconButton>
            <ShareIcon></ShareIcon>
          </IconButton>
        </CardActions>
      </Card>
        
      <h3>Tercera card</h3>
      <Card sx={{ maxWidth: 345 }}>
        
        <CardMedia
          component="img"
          height="194"
          image="http://www.placekitten.com/300"
          alt="gatito"
        />
        <CardContent>
          <Typography variant="h5">
            Gatito Mirando
          </Typography>
          <Rating
          name="simple-controlled"
          value={4.5}
          precision={0.5}
          />
          <Typography variant="body2" color="text.rprimary" fontWeight="medium" gutterBottom>
            $ ralladito - no esta a la venta
          </Typography>
          <Typography variant="body2" color="text.secondary">
            This impressive paella is a perfect party dish and a fun meal to cook
            together with your guests. 
          </Typography>
          <hr color="#cecccc"></hr>
          <Typography variant="body2" color="text.rprimary" fontWeight="medium"  gutterBottom>
            Dias de visita
          </Typography>
        </CardContent>
        
        
        <CardActions>
        <Chip label="Lunes" color="secondary" />
        <Chip label="Martes" />
        <Chip label="Miercoles" />
        <Chip label="Jueves" />
        </CardActions>
          
        <Button  color="secondary">Reserve</Button>
          
      </Card>
    </Box>   
    </div>
  );
}

export default App;
