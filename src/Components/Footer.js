import * as React from 'react';
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


const InfoDialog = () => { 
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {setOpen(true);};
   
    const handleClose = () => {setOpen(false);};
   
    return (
    <div>
        <Button onClick={handleClickOpen}>
            <HelpOutlineIcon/>
        </Button>
        <Dialog open={open} onClose={handleClose} aria-labelledby="alert-dialog-title" aria-describedby="alert-dialog-description">
        <DialogTitle id="alert-dialog-title">{"About Verse"}</DialogTitle>
        <DialogContent>
            <DialogContentText id="alert-dialog-description">Tähän nääs infoa</DialogContentText>
        </DialogContent>
        <DialogActions>
            <Button onClick={handleClose} autoFocus>Ok</Button>
        </DialogActions>
        </Dialog>
    </div>
    );
   }

export default function Footer() {
  const [value, setValue] = React.useState(0);
  return (

      <Paper sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }} elevation={3}>
        <BottomNavigation
          showLabels
          value={value}
          onChange={(event, newValue) => {
            setValue(newValue);
          }}
        >
          <BottomNavigationAction label="Info" icon={<InfoIcon />  } onClick= {InfoDialog} />
          <BottomNavigationAction label="Favorites" icon={<FavoriteIcon />} />
          <BottomNavigationAction label="Archive" icon={<ArchiveIcon />} />
        </BottomNavigation>
      </Paper>
  );
}

