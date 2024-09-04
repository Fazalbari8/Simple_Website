import About from './About/About';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Body from './Body/Body';
import Contact from './Contact/Contact';
import Footer from './Footer/Footer';
import Inventery from './Inventery/Inventery';
import Navbar from './Navbar/Navbar';
import Shopnow from './Shopnow/Shopnow';
import Header from './Header/main'
function App() {
  return (
    <>
      <Router>
      <Routes>
        <Route path="/" element={<Body />} />
        <Route path="/Inventery" element={<Inventery />} />
        <Route path="/About" element={<About />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/Shopnow" element={<Shopnow />} />

      </Routes>
    </Router>
    {/* <Header/> */}
    </>
  );
}

export default App;
