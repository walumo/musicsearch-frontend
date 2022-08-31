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




const Footer = ({language}) => {
  const [value, setValue] = React.useState(0);
  
  let howToTitle;
  let howToDescription1;
  let howToDescription2;
  let howToButtonText;

  let aboutTitle;
  let aboutDescription1;
  let aboutDescription2;
  let aboutButtonText;

  if (language === "en-US") {
    howToTitle = 'How to';
    howToDescription1 = 'Press the button to record your speech and do a search';
    howToDescription2 = 'This is the second paragraph';
    howToButtonText = 'How to'

    aboutTitle = 'About';
    aboutDescription1 = 'Verse is a great app greated by great minds. Great!';
    aboutDescription2 = 'This could be more text';
    aboutButtonText = 'About';
    

  } else if (language === "fi-FI") {
    howToTitle = 'Käyttäminen';
    howToDescription1 = 'Paina nauhoitusnappia';
    howToDescription2 = 'Ja jotain lisää';
    howToButtonText = 'Käyttäminen'

    aboutTitle = 'Tietoa';
    aboutDescription1 = 'Verse on hieno sovellus';
    aboutDescription2 = 'Lisää tekstiä';
    aboutButtonText = 'Tietoa';

  } else if (language === "sv-SE") {
    howToTitle = 'Instruktioner';
    howToDescription1 = 'Tryck på knappen för att söka sångtexter';
    howToDescription2 = 'Mera text';
    howToButtonText = 'Instruktioner'

    aboutTitle = 'Om Verse';
    aboutDescription1 = 'Verse är den bästa appen du har använt!';
    aboutDescription2 = 'Lite mera text';
    aboutButtonText = 'Om Verse';
  }

return (
          <Paper sx={{ position: 'fixed', bottom: 0, left: 0, right: 0, height: '35px' }} elevation={3}>
            <BottomNavigation sx={{bgcolor: '#d3d8c5'}} showLabels value={value} onChange={(event, newValue) => { setValue(newValue); }} >
              <InfoDialog title={howToTitle} description1={howToDescription1} howToDescription2={howToDescription2} buttonText={howToButtonText} icon={<HelpOutlineIcon/>}/>
              <InfoDialog title={aboutTitle} description1={aboutDescription1} buttonText={aboutButtonText} icon={<InfoIcon/>}/>
            </BottomNavigation>
          </Paper>
      );

}
  // {language == "en-US"
  //             ? "English"
  //             : language == "fi-FI"
  //             ? "Suomi"
  //             : language == "sv-SE"
  //             ? "Svenska"
  //             : language
  //             }


export default Footer;