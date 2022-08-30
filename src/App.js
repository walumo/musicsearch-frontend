import SpeechInput from "./Components/SpeechInput";
import Container from '@mui/material/Container';
import "./app.css";
import AlertDialog from "./Components/InfoDialog";

function App() {

  return (
    <div>
      <Container maxWidth="sm" className="container text-centered">
        <SpeechInput/>
        <AlertDialog/>
      </Container>
  </div>
  );
}
export default App;