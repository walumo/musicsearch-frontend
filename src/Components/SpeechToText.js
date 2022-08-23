import SpeechRecognition, {
    useSpeechRecognition
  } from "react-speech-recognition";
import { useState } from "react";
import { Box } from "@mui/system";

export default function SpeechToText() {
    const [message, messageSet] = useState("");
    const {
        transcript,
        resetTranscript,
        listening
    } = useSpeechRecognition({
        commands: [
        {
            command: "reset",
            callback: () => resetTranscript()
        },
        {
            command: "shut up",
            callback: () => messageSet("I wasn't talking.")
        },
        {
            command: "Hello",
            callback: () => messageSet("Hi there!")
        }
        ]
    });
    
    const listenContinuously = () => {
        SpeechRecognition.startListening({
          continuous: true,
          language: "en"
        });
      };
    
    return (
    <Box 
    component="form"
    sx={{
      '& > :not(style)': { m: 1, width: '25ch' },
    }}
    noValidate
    autoComplete="off">
        <span>listening: {listening ? "on" : "off"}</span>
        <button type="button" onClick={listenContinuously}>
            Listen
        </button>
        <button type="button" onClick={SpeechRecognition.stopListening}>
            Stop
        </button>
        <button type="button" onClick={resetTranscript}>
            Reset
        </button>
        <div>{message}</div>
        <div>
            <span>{transcript}</span>
        </div>
    </Box>
)}