import * as React from 'react';
import InfoDialog from "./InfoDialog";
import BottomNavigation from '@mui/material/BottomNavigation';
import InfoIcon from '@mui/icons-material/Info';
import Paper from '@mui/material/Paper';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import './components.css'

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
              <InfoDialog sx={{fontSize : "20px"}} title={howToTitle} description1={howToDescription1} howToDescription2={howToDescription2} buttonText={howToButtonText} icon={<HelpOutlineIcon sx={{ fontSize: "1em"}}/>}/>
              <InfoDialog sx={{fontSize : "20px"}} title={aboutTitle} description1={aboutDescription1} description2={aboutDescription2} buttonText={aboutButtonText} icon={<InfoIcon sx={{ fontSize: "1em"}}/>}/>
            </BottomNavigation>
          </Paper>
      );

}

export default Footer;