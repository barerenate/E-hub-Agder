import "./App.css";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import HubDignity from "./pages/HubDignity";
import HubJdd from "./pages/HubJdd";
import Apply from "./pages/Apply";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/hubdignity" element={<HubDignity />} />
        <Route path="/hubjdd" element={<HubJdd />} />
        <Route path="/apply" element={<Apply />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
