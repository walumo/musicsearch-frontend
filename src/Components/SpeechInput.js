import React from 'react';
import createSpeechServicesPonyfill from 'web-speech-cognitive-services';
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';
import './components.css'

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

  return (
    <div>
      
      <form>
        
        <input type="text" name="searchstring" placeholder={transcript}/>
       
        
      </form>


      <button className='SearchButton'  onMouseDown={resetAndListen} onMouseUp={SpeechRecognition.abortListening} onTouchStart={resetAndListen}  onTouchEnd={SpeechRecognition.abortListening} ><img className='SearchImage' src={process.env.PUBLIC_URL+"/resources/logoEiTaustaa.png"}/></button>
     
    </div>
  );
};
export default SpeechInput;