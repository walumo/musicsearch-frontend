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
import { CardActions } from '@mui/material';

const SongCard = ({result, lat, lon}) => {
    let embedUrl = result.WebPlayerUrl.replace('https://open.spotify.com/track/', 'https://open.spotify.com/embed/track/').concat('?utm_source=generator');
    
    return (
        <>
            <Card sx={{ }} >
         <CardContent>
               <Box sx={{display: 'flex', flexDirecrtion: 'column', justifyContent: 'space-between' }}>
                <Box sx={{ display: 'flex', flexDirection: 'column', alignContent: 'center' }}>
                    <CardContent sx={{ flex: '1 0 auto',marginRight:'auto' }}>
                        <Typography component="div" variant="h5">
                        {result.Artist}
                        </Typography>
                        <Typography variant="subtitle1" color="text.secondary" component="div">
                        {result.Track}
                        </Typography>
                    
                    </CardContent>
                    
                </Box>
                <Box sx={{ display: 'flex', alignItems: 'center', flexDirection: 'column', marginLeft: 'auto', pl: 1, pb: 1 }}>
                    <CardContent sx={{ flex: '1 0 auto' }}>
                    <CardMedia
                        component="img"
                        sx={{ width: 151 }}
                        image={result.Image}
                        alt="Album cover"
                        />
                    </CardContent>
                </Box>
                </Box>
      
           
                
               <Box sx={{ display: 'flex', alignItems: 'center', marginLeft: 'auto', pl: 1, pb: 1 }}>
                     <Accordion>
                        <AccordionSummary>
                            <PlayCircleIcon/>
                            {/* aria-controls="panel1a-content"
                            id="panel1a-header" */}
                        </AccordionSummary>
                        <AccordionDetails>
                            <iframe 
                            src={embedUrl} 
                            style={{'borderRadius': '12px'}}
                            width="100%" height="80" 
                            frameBorder="0" allowFullScreen=""
                            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" 
                            loading="lazy"></iframe>
                        </AccordionDetails>
                    </Accordion>
               
                </Box>
                    </CardContent>
            </Card>
        </>
    )
}

export default SongCard;
