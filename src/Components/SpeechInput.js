import React, { useEffect, useState } from 'react';
import createSpeechServicesPonyfill from 'web-speech-cognitive-services';
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';
import './components.css'
import axios, { Axios } from 'axios';
import OutcomePage from './OutcomePage';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Fade from '@mui/material/Fade';



const SUBSCRIPTION_KEY = '53b4ab187c3d4fdc81515c0369724f3f';
const REGION = 'northeurope';

const { SpeechRecognition: AzureSpeechRecognition } = createSpeechServicesPonyfill({
  credentials: {
    region: REGION,
    subscriptionKey: SUBSCRIPTION_KEY,
  }
});
SpeechRecognition.applyPolyfill(AzureSpeechRecognition);

const SpeechInput = () => {

  const [coordinates, setCoordinates] = useState({});
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [language, setLanguage] = useState("en-US");
  useEffect(()=> {
    const options = {
      enableHighAccuracy: true,
      timeout: 5000,
      maximumAge: 0
    };
    
    function success(pos) {
      let crd = pos.coords;
      console.log(crd.latitude)
      console.log(crd.longitude)
      setCoordinates({"lat":crd.latitude, "lon": crd.longitude})
    }
    
    function error(err) {
      console.warn(`ERROR(${err.code}): ${err.message}`);
    }
    
    navigator.geolocation.getCurrentPosition(success, error, options);
  
  },[])
  
  const {
    transcript,
    resetTranscript,
    browserSupportsSpeechRecognition
  } = useSpeechRecognition();

  console.log(transcript)
  const startListening = () => SpeechRecognition.startListening({
    continuous: true,
    language: language
  });

  if (!browserSupportsSpeechRecognition) {
    return null;
  }
  const resetAndListen =() => {
    
    resetTranscript()
    startListening()
  }

  const abortListeningAndPost =() => {
    SpeechRecognition.abortListening();
    console.log(transcript);
  }
  
  
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  function handleCloseChangeLocale(language){
      setAnchorEl(null);
      setLanguage(language);
      console.log("changed language to: " +language);
      
  }

  return (
    <div>
        
      <form>
        <input type="text" name="searchstring" placeholder={transcript}/>
      </form>

      <button className='SearchButton'  onMouseDown={resetAndListen} onMouseUp={abortListeningAndPost} onTouchStart={resetAndListen}  onTouchEnd={abortListeningAndPost}><img className='SearchImage' src={process.env.PUBLIC_URL+"/resources/searchbutton.png"}/></button>
      <OutcomePage queryString={transcript} lat={coordinates.lat} lon={coordinates.lon}/>
      <div>
            <Button
              id="fade-button"
              aria-controls={open ? 'fade-menu' : undefined}
              aria-haspopup="true"
              aria-expanded={open ? 'true' : undefined}
              onClick={handleClick}
            >
              {language}
            </Button>
            <Menu
              id="fade-menu"
              MenuListProps={{
                'aria-labelledby': 'fade-button',
              }}
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
              TransitionComponent={Fade}
            >
              <MenuItem onClick={()=>handleCloseChangeLocale("en-US")}>english</MenuItem>
              <MenuItem onClick={()=>handleCloseChangeLocale("fi-FI")}>suomi</MenuItem>
              <MenuItem onClick={()=>handleCloseChangeLocale("sv-SE")}>Martti</MenuItem>
              
            </Menu>
          </div>
    </div>
  );

  
};
export default SpeechInput;