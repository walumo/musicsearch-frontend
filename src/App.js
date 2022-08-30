import SpeechInput from "./Components/SpeechInput";
import Container from '@mui/material/Container';
import "./app.css";
import Footer from './Components/Footer';


function App() {

  return (
    <div>
      <Container maxWidth="sm" className="container text-centered">
        <SpeechInput/>
      </Container>
      <Footer/>
  </div>
  );
}
export default App;