import { Route } from "react-router-dom";
import SearchPage from "./Components/SearchPage";
import SpeechToText from "./Components/SpeechToText";

function App() {
  return (
    <div>
      <h1>Welcome to React Router!</h1>
      <SearchPage />
      <SpeechToText />
    {/* <Routes>
      <Route path="/" element={<Home />} />
      <Route path="about" element={<About />} />
    </Routes> */}
  </div>
  );
}

export default App;


