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
  let madeBy = 'Aada, Ilari, Jutta, Miikka H., Miikka S., Erkki';

  if (language === "en-US") {
    howToTitle = 'How to';
    howToDescription1 = 'Press the button to record your speech and do a search';
    howToDescription2 = 'This is the second paragraph';
    howToButtonText = 'How to'

    aboutTitle = 'About';
    aboutDescription1 = 'Verse is made by:';
    aboutDescription2 = madeBy;
    aboutButtonText = 'About';

  } else if (language === "fi-FI") {
    howToTitle = 'Näin käytät Verseä';
    howToDescription1 = 'Versellä voit etsiä kappaleita sanoitusten perusteella. Voit käyttää puheentunnistusta tai kirjoittaa haun hakukenttään.';
    howToDescription2 = 'Paina logoa aloittaaksesi ja lopettaaksesi puheen nauhoittaminen. Voit vaihtaa sovelluksen kieltä, jolloin myös puheentunnistuksen kieli vaihtuu.';
    howToButtonText = 'Ohjeet'

    aboutTitle = 'Tietoa';
    aboutDescription1 = 'Versen ovat kehittäneet';
    aboutDescription2 = madeBy;
    aboutButtonText = 'Tietoa';

  } else if (language === "sv-SE") {
    howToTitle = 'Så här fungerar Verse';
    howToDescription1 = 'Man kan använda Verse för att söka låter på grund av sångtexter. Man kan använda röstinmatning för att diktera text eller skriva in texten som används.';
    howToDescription2 = 'Tryck bara Verse logon för att aktivera röstinmatning och trycka om för att stoppa. Du ser dina sökresultat inom kort. Du kan ändra appspråket, då ändras också röstinmatningsspråket.';
    howToButtonText = 'Instruktioner'

    aboutTitle = 'Om Verse';
    aboutDescription1 = 'Verse är tillverkad av ';
    aboutDescription2 = madeBy;
    aboutButtonText = 'Om Verse';
  }

return (
          <Paper sx={{ position: 'fixed', bottom: 0, left: 0, right: 0, height: '35px' }} elevation={3}>
            <BottomNavigation sx={{bgcolor: '#d3d8c5'}} showLabels value={value} onChange={(event, newValue) => { setValue(newValue); }} >
              <InfoDialog sx={{fontSize : "20px"}} title={howToTitle} description1={howToDescription1} description2={howToDescription2} buttonText={howToButtonText} icon={<HelpOutlineIcon sx={{ fontSize: "1em"}}/>}/>
              <InfoDialog sx={{fontSize : "20px"}} title={aboutTitle} description1={aboutDescription1} description2={aboutDescription2} buttonText={aboutButtonText} icon={<InfoIcon sx={{ fontSize: "1em"}}/>}/>
            </BottomNavigation>
          </Paper>
      );

}

export default Footer;