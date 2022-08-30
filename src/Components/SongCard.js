import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import './components.css'
import React from 'react';




const SpotifyTest = ({embedUrl}) => (
    <>
    <iframe 
        className='embedPlayerClass'
        title='spotifyPlayer'
        src={embedUrl} 
        style={{'borderRadius': '0px 0px 12px 12px' }}
        width="100%" height="80" 
        frameBorder="0" allowFullScreen=""
        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" 
        loading="eager">
    </iframe>
    </>
)

function truncate(result) {
    if (result.length > 40) {
       return result.substring(0, 40) + '...';
    }
    return result;
}

function printSpotify(embedUrl){
    if (embedUrl!=="null"){
       return (<SpotifyTest embedUrl={embedUrl}/>) 
    }   
    else{
        return (<div className='spotifyNotFound' > 
            
            <p>Spotify not found</p>
            
            </div>)
    }                            
}

const SongCard = ({result}) => {
    let embedUrl= " "
    //    console.log (embedUrl);
    //    console.log (result.WebPlayerUrl);
    
    if (result.WebPlayerUrl.includes('track')){
        embedUrl = result.WebPlayerUrl
        .replace('https://open.spotify.com/track/', 'https://open.spotify.com/embed/track/')
        .concat('?utm_source=generator');
        }
        else{
            embedUrl= "null"
        }
   

     return (
        
        <div className='Card'>
                <Card sx={{borderRadius: '12px 12px 0px 0px' }} >
                    <CardContent sx={{padding: 0, "&:last-child": {paddingBottom: 0}
        }}>
                        <Box sx={{display: 'flex', flexDirection: 'row', textAlign:"start"}}>
                            <Box sx={{ display: 'flex', flexDirection: 'column', alignContent: 'start', width: 1 }}>
                                <CardContent id="contentBox" sx={{ flex: '1 0 auto', paddingLeft: '3em', paddingTop: '2em'}}>
                                    <Typography component="div" variant="h4">
                                    {truncate(result.Artist)}
                                    </Typography>
                                    <Typography variant="h6" color="text.secondary" component="div">
                                    {result.Track}
                                    </Typography>
                                    <Typography variant="h6" color="text.secondary">
                                    {result.ReleaseYear}
                                    </Typography>
                                </CardContent>   
                            </Box>
                            <Box sx={{ display: 'flex', alignItems: 'center', flexDirection: 'column', marginLeft: 'auto' }}>
                                <CardContent sx={{ flex: '1 0 auto' }}>
                                    <CardMedia
                                        id="coverImage"
                                        component="img"
                                        sx={{ borderRadius: '8px' }}
                                        image={result.Image}
                                        alt="Album cover"
                                        
                                    />
                                </CardContent>
                            </Box>
                        </Box>
            
                      
                    </CardContent>
                </Card>
               
               {printSpotify(embedUrl)}
            </div>
        
    )
 
}

export default SongCard;
