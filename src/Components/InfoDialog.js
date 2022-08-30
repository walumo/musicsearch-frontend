import * as React from 'react';
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
        <Button color="secondary" onClick={handleClickOpen}>
            <HelpOutlineIcon/> 
            &nbsp;&nbsp;INFO
            
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


  export default InfoDialog;