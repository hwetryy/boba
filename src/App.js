import Navbar from "./Navbar";
import Banner from "./Banner";
import { BrowserRouter } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import Profile from "./Components/Profile";
function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Banner />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
      
    </BrowserRouter>
  );
}

export default App;
