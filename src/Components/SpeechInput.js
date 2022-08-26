import React, { useEffect, useState } from 'react';
import createSpeechServicesPonyfill from 'web-speech-cognitive-services';
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';
import './components.css'
import axios, { Axios } from 'axios';
import OutcomePage from './OutcomePage';



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
    language: 'en-US'
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

  return (
    <div>
  
      <form>
        <input type="text" name="searchstring" placeholder={transcript}/>
      </form>

      <button className='SearchButton'  onMouseDown={resetAndListen} onMouseUp={abortListeningAndPost} onTouchStart={resetAndListen}  onTouchEnd={abortListeningAndPost}><img className='SearchImage' src={process.env.PUBLIC_URL+"/resources/searchbutton.png"}/></button>
      <OutcomePage queryString={transcript} lat={coordinates.lat} lon={coordinates.lon}/>
    </div>
  );
};
export default SpeechInput;