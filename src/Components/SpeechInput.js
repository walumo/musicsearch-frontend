import React from 'react';
import createSpeechServicesPonyfill from 'web-speech-cognitive-services';
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';
import './components.css'
import axios, { Axios } from 'axios';

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
  axios.post('https://localhost:44326/Api/logger',
  {Artist:"Miikka S",Song:"Tää biisi ei jää soimaan sun päähän",Latitude:"984237",Longitude:"20384"});
}

  return (
    <div>
      <form>
        <input type="text" name="searchstring" placeholder={transcript}/>
      </form>
      <button className='SearchButton'  onMouseDown={resetAndListen} onMouseUp={abortListeningAndPost} onTouchStart={resetAndListen}  onTouchEnd={abortListeningAndPost}><img className='SearchImage' src={process.env.PUBLIC_URL+"/resources/logoEiTaustaa.png"}/></button>
    </div>
  );
};
export default SpeechInput;