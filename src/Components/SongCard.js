import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import Box from '@mui/material/Box';

const SongCard = ({result}) => {
    return (
        <>
            <Card sx={{ display: 'flex' }}>
                <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                    <CardContent sx={{ flex: '1 0 auto' }}>
                        <Typography component="div" variant="h5">
                        {result.ArtistinNimi}
                        </Typography>
                        <Typography variant="subtitle1" color="text.secondary" component="div">
                        {result.BiisinNimi}
                        </Typography>
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
