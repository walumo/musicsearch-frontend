import React, { Component } from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import TextInput from './TextInput';
import {useState} from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';






const ShowSong = () => {

  const Json = [
    {
    "ArtistinNimi": "Post Malone",
    "BiisinNimi": "Paranoid",
    "Image": "https://images.genius.com/ef176757a5735c7a104dd735543c1d20.1000x1000x1.png",
    "Hotti": false,
    "JulkaisuVuosi": 2018
    },
    {
    "ArtistinNimi": "Ty Dolla $ign (Ft. Joe Moses)",
    "BiisinNimi": "Paranoid",
    "Image": "https://images.genius.com/f420f88b7ed1237a86d7b059d1dfa4d0.600x600x1.jpg",
    "Hotti": false,
    "JulkaisuVuosi": 2013
    },
    {
    "ArtistinNimi": "Radiohead",
    "BiisinNimi": "Paranoid Android",
    "Image": "https://images.genius.com/bb8f17187f42bb0b4a0dcc17cad65355.1000x1000x1.png",
    "Hotti": false,
    "JulkaisuVuosi": 1997
    },
    {
    "ArtistinNimi": "Black Sabbath",
    "BiisinNimi": "Paranoid",
    "Image": "https://images.genius.com/dbb5a2790ba660b074638ccdb27e07c6.600x602x1.jpg",
    "Hotti": false,
    "JulkaisuVuosi": 1970
    },
    {
    "ArtistinNimi": "Kanye West (Ft. Mr. Hudson)",
    "BiisinNimi": "Paranoid",
    "Image": "https://images.genius.com/feaa5aacd67b003ec2f6d5f87a0d2a3d.600x600x1.jpg",
    "Hotti": false,
    "JulkaisuVuosi": 2008
    },
    {
    "ArtistinNimi": "Ty Dolla $ign (Ft. B.o.B)",
    "BiisinNimi": "Paranoid (B.o.B Remix)",
    "Image": "https://images.genius.com/b00bca776c4b76a28c64b3e94193cb08.500x500x1.jpg",
    "Hotti": false,
    "JulkaisuVuosi": 2013
    },
    {
    "ArtistinNimi": "Juice WRLD",
    "BiisinNimi": "Paranoid",
    "Image": "https://images.genius.com/6264a57b912218145f8a2931d0925d80.500x500x1.jpg",
    "Hotti": false,
    "JulkaisuVuosi": 2017
    },
    {
    "ArtistinNimi": "French Montana (Ft. Johnny Maycash)",
    "BiisinNimi": "Paranoid",
    "Image": "https://images.genius.com/007e1aa20dbb3a27f7efb876d68b2e88.1000x1000x1.jpg",
    "Hotti": false,
    "JulkaisuVuosi": 2013
    },
    {
    "ArtistinNimi": "Ty Dolla $ign (Ft. French Montana, Mustard & Trey Songz)",
    "BiisinNimi": "Paranoid (Remix)",
    "Image": "https://images.rapgenius.com/d9ac036931e0d12810f4ae6273b98f44.500x500x1.jpg",
    "Hotti": false,
    "JulkaisuVuosi": 2014
    }
    ]

  const [geniusResults, setGeniusResults] = useState(Json);
  return (
    <div className="card-centered">
      <Card sx={{ display: 'flex' }}>
        <Box sx={{ display: 'flex', flexDirection: 'column' }}>
          <CardContent sx={{ flex: '1 0 auto' }}>
            <Typography component="div" variant="h5">
              {geniusResults[0].ArtistinNimi}
            </Typography>
            <Typography variant="subtitle1" color="text.secondary" component="div">
              {geniusResults[0].BiisinNimi} <br/>
              {geniusResults[0].JulkaisuVuosi}
            </Typography>
          </CardContent>
        </Box>
        <Box sx={{ display: 'flex', alignItems: 'center', marginLeft: 'auto', pl: 1, pb: 1 }}>
          <CardMedia
            component="img"
            sx={{ width: 151 }}
            image={geniusResults[0].Image}
            alt="Album cover"
          />
        
        </Box>
      </Card>


      <Card sx={{ display: 'flex' }}>
        <Box sx={{ display: 'flex', flexDirection: 'column' }}>
          <CardContent sx={{ flex: '1 0 auto' }}>
            <Typography component="div" variant="h5">
              {geniusResults[1].ArtistinNimi}
            </Typography>
            <Typography variant="subtitle1" color="text.secondary" component="div">
              {geniusResults[1].BiisinNimi} <br/>
              {geniusResults[1].JulkaisuVuosi}
            </Typography>
          </CardContent>
        </Box>
        <Box sx={{ display: 'flex', alignItems: 'center', float: 'right', marginLeft: 'auto', pl: 1, pb: 1 }}>
          <CardMedia
            component="img"
            sx={{ width: 151 }}
            image={geniusResults[1].Image}
            alt="Album cover"
        />
        
        </Box>
      </Card>

    

    








      {/* <Card sx={{ maxWidth: 345 }}>
        
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
          {geniusResults[0].ArtistinNimi}
          </Typography>
          <Typography variant="body2" color="text.secondary">
          {geniusResults[0].BiisinNimi} <br/>
          {geniusResults[0].JulkaisuVuosi}
          </Typography>
        </CardContent>
        <CardMedia
          component="img"
          // height="140"
          sx={{ width: 151 }}
          image={geniusResults[0].Image}
          alt="album cover"
        />
        <CardActions>
          <Button size="small">Share</Button>
          <Button size="small">Learn More</Button>
        </CardActions>
      </Card> */}
    </div>
    // <div>
    //   <h2>{geniusResults[0].ArtistinNimi}</h2>
    //   <h1>{geniusResults[0].BiisinNimi}</h1>
    //   <p>{geniusResults[0].JulkaisuVuosi}</p>
    //   <img src={geniusResults[0].Image}/>

    // </div>
  )
}


export default ShowSong;