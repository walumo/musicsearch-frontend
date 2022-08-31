import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import './components.css'


const InfoDialog = ({title, description1, description2, buttonText, icon}) => { 


    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {setOpen(true);};
   
    const handleClose = () => {setOpen(false);};
   
    return (
    <div>
        <Button id='TextColorPetrol' color= "secondary" onClick={handleClickOpen}>
            {icon} 
            &nbsp;{buttonText}
            
        </Button>
        <Dialog open={open} onClose={handleClose} aria-labelledby="alert-dialog-title" aria-describedby="alert-dialog-description">
            <DialogTitle className='DialogBox' id="alert-dialog-title">{title}</DialogTitle>
            <DialogContent className='DialogBox'>
                <DialogContentText id="alert-dialog-description">
                    {description1}
                    <br/> <br/>
                    {description2}
                    </DialogContentText>
            </DialogContent>
            <DialogActions className='DialogBox'>
                <Button id='TextColorBlack' onClick={handleClose} autoFocus>ok</Button>
            </DialogActions>
        </Dialog>
    </div>
    );
   }


  export default InfoDialog;