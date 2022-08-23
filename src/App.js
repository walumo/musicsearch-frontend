//import { Route } from "react-router-dom";
import SearchPage from "./Components/SearchPage";
import OutcomePage from './Components/OutcomePage';
import { BrowserRouter, Route, Routes, Switch } from 'react-router-dom';

function App() {
  return (
    <div>
      <SearchPage />
    <h1>Welcome to React Router!</h1>
    {/* <Routes>
      <Route path="/" element={<Home />} />
      <Route path="about" element={<About />} />
    </Routes> */}
    <Routes>
      <Route path="outcomepage" element={<OutcomePage />} />
    </Routes>
  </div>
  );
}
export default App;


