//import { Route } from "react-router-dom";
import SearchPage from "./Components/SearchPage";
import SpeechToText from "./Components/SpeechToText";
import OutcomePage from './Components/OutcomePage';
import { BrowserRouter, Route, Routes, Switch } from 'react-router-dom';
import SpeechInput from "./Components/SpeechInput";
import Container from '@mui/material/Container';
import "./app.css";


function App() {
  return (
    <div>
      <Container maxWidth="sm" className="container text-centered">
        
        <SpeechInput/>
      </Container>
  </div>
  );
}
export default App;


