import * as React from 'react';
import InfoDialog from "./InfoDialog";
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import InfoIcon from '@mui/icons-material/Info';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ArchiveIcon from '@mui/icons-material/Archive';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import './components.css'
import { lineHeight } from '@mui/system';




const Footer = () => {
  const [value, setValue] = React.useState(0);
  return (

      <Paper sx={{ position: 'fixed', bottom: 0, left: 0, right: 0, height: '35px' }} elevation={3}>
        <BottomNavigation sx={{bgcolor: '#d3d8c5'}} showLabels value={value} onChange={(event, newValue) => { setValue(newValue); }} >
          <InfoDialog title='About Verse' description='Verse is a great app greated by great minds. Great!' buttonText='INFO'/>
          {/* <BottomNavigationAction label="Info" icon={<InfoIcon />} />
          <BottomNavigationAction label="Favorites" icon={<FavoriteIcon />} />
          <BottomNavigationAction label="Archive" icon={<ArchiveIcon />} /> */}
        </BottomNavigation>
      </Paper>
  );
}

export default Footer;