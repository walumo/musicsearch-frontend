import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import Box from '@mui/material/Box';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import PlayCircleIcon from '@mui/icons-material/PlayCircle';
import './components.css'

// axios.post('https://localhost:44326/Api/logger',
// {Artist:{result.Artist},Song:{result.Track},Latitude:{lat},Longitude:{lon}});


const SongCard = ({result, lat, lon}) => {
    let embedUrl = result.WebPlayerUrl.replace('https://open.spotify.com/track/', 'https://open.spotify.com/embed/track/').concat('?utm_source=generator');
    
    return (
        <>
            <Card sx={{ display: 'flex' }}>
                <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                    <CardContent sx={{ flex: '1 0 auto' }}>
                        <Typography component="div" variant="h5">
                        {result.Artist}
                        </Typography>
                        <Typography variant="subtitle1" color="text.secondary" component="div">
                        {result.Track}
                        </Typography>
                    
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
                    </CardContent>
                </Box>
                <Box sx={{ display: 'flex', alignItems: 'center', marginLeft: 'auto', pl: 1, pb: 1 }}>
                    <CardMedia
                        component="img"
                        sx={{ width: 151 }}
                        image={result.Image}
                        alt="Album cover"
                    />
                </Box>
            </Card>
        </>
    )
}

export default SongCard;
