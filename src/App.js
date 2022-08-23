//import { Route } from "react-router-dom";
import SearchPage from "./Components/SearchPage";
import SpeechToText from "./Components/SpeechToText";
import OutcomePage from './Components/OutcomePage';
import { BrowserRouter, Route, Routes, Switch } from 'react-router-dom';
import SpeechInput from "./Components/SpeechInput";

function App() {
  return (
    <div>
      <h1>Welcome to React Router!</h1>
      <SpeechInput/>

      {/* <SearchPage />
      <SpeechToText /> */}
    {/* <Routes>
      <Route path="/" element={<Home />} />
      <Route path="about" element={<About />} />
    </Routes> */}
    {/* <Routes>
      <Route path="outcomepage" element={<OutcomePage />} />
    </Routes> */}
  </div>
  );
}
export default App;


