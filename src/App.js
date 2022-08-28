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