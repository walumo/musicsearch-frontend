import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import PlayCircleIcon from '@mui/icons-material/PlayCircle';
import './components.css'
import { CardActionArea, CardActions } from '@mui/material';
import * as ReactDOM from 'react-dom';
import React, { useState } from 'react';
import { width } from '@mui/system';

const SpotifyTest = ({embedUrl}) => (
    <>
    <iframe 
        src={embedUrl} 
        style={{'borderRadius': '12px' }}
        width="100%" height="80" 
        frameBorder="0" allowFullScreen=""
        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" 
        loading="lazy">
    </iframe>
    </>
)

const SongCard = ({result, lat, lon}) => {
    let embedUrl = result.WebPlayerUrl.replace('https://open.spotify.com/track/', 'https://open.spotify.com/embed/track/').concat('?utm_source=generator');
    const [showResults, setShowResults] = useState(false)
    console.log(embedUrl)

    return (
        <>
            <Card sx={{ }} >
                <CardContent>
                    <Box sx={{display: 'flex', flexDirecrtion: 'column', justifyContent: 'space-between' }}>
                        <Box sx={{ display: 'flex', flexDirection: 'column', alignContent: 'center', width: 1  }}>
                            <CardContent sx={{ flex: '1 0 auto'}}>
                                <Typography component="div" variant="h5">
                                {result.Artist}
                                </Typography>
                                <Typography variant="subtitle1" color="text.secondary" component="div">
                                {result.Track}
                                </Typography>
                                
                                  <CardActionArea >
                                  <img className='SpotifyLogo' alt='spotifyLogo' src={process.env.PUBLIC_URL+ '/Resources/spotifyLogo.jpg'} width={'50'} onClick={() => setShowResults(!showResults)} ></img>
                                  </CardActionArea>
                                  
                            </CardContent>   
                        </Box>
                        <Box sx={{ display: 'flex', alignItems: 'center', flexDirection: 'column', marginLeft: 'auto', pl: 1, pb: 1 }}>
                            <CardContent sx={{ flex: '1 0 auto' }}>
                                <CardMedia
                                    component="img"
                                    sx={{ width: 151, borderRadius: '2px' }}
                                    image={result.Image}
                                    alt="Album cover"
                                    
                                />
                            </CardContent>
                        </Box>
                    </Box>
        
                    <div sx={{ display: 'flex', alignItems: 'center', marginLeft: 'auto', pl: 1, pb: 1, width:1 }}>
                        <CardContent sx={{padding: 0 }}>
                                { showResults ? <SpotifyTest embedUrl={embedUrl}/> : null }
                        </CardContent>
                    </div>
                </CardContent>
            </Card>
            <br/>
        </>
    )
}

export default SongCard;
