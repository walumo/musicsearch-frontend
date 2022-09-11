import React, { useEffect, useState } from 'react';
import createSpeechServicesPonyfill from 'web-speech-cognitive-services';
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';
import './components.css'
import OutcomePage from './OutcomePage';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Fade from '@mui/material/Fade';
import { ScaleLoader } from 'react-spinners';
import SearchIcon from '@mui/icons-material/Search';
import Footer from './Footer';
import NoSearchResults from './NoSearchResults';

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

  const axios = require('axios');
  const [coordinates, setCoordinates] = useState({});
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [language, setLanguage] = useState("en-US");
  const [searchButtonUrl, setSearchButtonUrl] = useState("/resources/searchbutton.png");
  const [geniusResults, setGeniusResults] = useState(0);
  const [loading, setLoading] = useState(false)
  const [manualInput, setManualInput] = useState("");
  const [noResults, setNoResults] = useState(false);

  useEffect(()=> {

    SpeechRecognition.abortListening();

    const options = {
      enableHighAccuracy: true,
      timeout: 5000,
      maximumAge: 0
    };
    
    function success(pos) {
      let crd = pos.coords;
      //console.log(crd.latitude)
      //console.log(crd.longitude)
      setCoordinates({"lat":crd.latitude, "lon": crd.longitude})
    }
    
    function error(err) {
      console.warn(`ERROR(${err.code}): ${err.message}`);
    }

    navigator.geolocation.getCurrentPosition(success, error, options);
    navigator.mediaDevices.getUserMedia({audio: true, video: false})
  },[])

  const {
    transcript,
    resetTranscript,
    browserSupportsSpeechRecognition,
    listening
  } = useSpeechRecognition();

  // console.log(transcript)

  const startListening = () => SpeechRecognition.startListening({
    continuous: true,
    language: language
  });

  if (!browserSupportsSpeechRecognition) {
    return null;
  }

  //Reset transcript, change button red and start listening
  const resetAndListen =() => {
    setSearchButtonUrl("/resources/recordbutton.png")
    resetTranscript()
    startListening()
    //{console.log(listening? "Listening" : "Not listening")}
  }

  //Stop listening, change button to default and call API with transcript value
  const abortListening =() => {
    setSearchButtonUrl("/resources/searchbutton.png")
    SpeechRecognition.abortListening();
    fetchData(transcript);
    // console.log("Calling verse-api with: " +transcript);
    // {console.log(listening? "Listening" : "Not listening")}
  }
  
  //Handlers for locale options
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  function handleCloseChangeLocale(language){
      setAnchorEl("");
      setLanguage(language);
  }

  const handleManualInput = (event) => {
    setManualInput(event.target.value)
    //console.log(manualInput)
  }

  const handleManualInputFetchData = (input) => {
    fetchData(input);
    setManualInput("");
    resetTranscript();
  }

  //Get data from API when user lifts from search button
  const fetchData = async (queryString) => {
      try {
        setGeniusResults([]);
          setNoResults(false)
          setLoading(true);
          const result = await axios.get('https://localhost:5000/Api/songs', { params: { q: queryString }});
          if (result.data.Result.length === 0){
            setNoResults(true);
          }
          setGeniusResults(result.data);
          setLoading(false);
      } catch (err) {
          console.error(err);
      }
    };
  
    const handleKeyPress = (event) => {
      if(event.key === 'Enter'){
        handleManualInputFetchData(manualInput)
      }
    }    
    
  return (
    <div>
      <div className='inputFieldWrapper'>
        <input onChange={handleManualInput} onKeyPress={handleKeyPress} className='searchInput' type="text" name="searchstring" placeholder={transcript} value={manualInput} />
        <button className='magnifierGlassButton' onClick={()=>handleManualInputFetchData(manualInput)}>
          <SearchIcon className='SearchIcon' sx={{ fontSize: "2em"}}/>
        </button>
      </div>
      
      <button className='SearchButton' onClick={listening? abortListening : resetAndListen }> 
          <img className='SearchImage'alt="Searchbutton" src={process.env.PUBLIC_URL+ searchButtonUrl} />
      </button>

      <ScaleLoader color="#ffffff" loading={loading} size={150} />

      <NoSearchResults noResults={noResults} language={language}/>

      <div className='languageButton'>
            <Button
              id="fade-button"
              aria-controls={open ? 'fade-menu' : undefined}
              aria-haspopup="true"
              aria-expanded={open ? 'true' : undefined}
              onClick={handleClick}>
                  
              {language === "en-US"
              ? "English"
              : language === "fi-FI"
              ? "Suomi"
              : language === "sv-SE"
              ? "Svenska"
              : language
              }

            </Button>

            <Menu
              id="fade-menu"
              MenuListProps={{
                'aria-labelledby': 'fade-button',
              }}
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
              TransitionComponent={Fade}>

              <MenuItem id="menuItem" onClick={()=>handleCloseChangeLocale("en-US")}>English</MenuItem>
              <MenuItem id="menuItem" onClick={()=>handleCloseChangeLocale("fi-FI")}>Suomi</MenuItem>
              <MenuItem id="menuItem" onClick={()=>handleCloseChangeLocale("sv-SE")}>Svenska</MenuItem>
            </Menu>
            <Footer language={language}/>
          </div>
      <OutcomePage geniusResults={geniusResults} lat={coordinates.lat} lon={coordinates.lon}/>
    </div>
  );
  
};
export default SpeechInput;
