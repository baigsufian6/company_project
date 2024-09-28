// src/Main.js
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './NavbarPlot';
import Home from './Pages/HomePlot';
import About from './Pages/AboutPlot';
import Career from './Pages/CareerPlot';
import Latest from './Pages/ProjectPlot';
import Contact from './Pages/ContactPlot';
import Calculator from './Pages/CalculatorPlot';
import PopularAreas from './Pages/PopularAreas'; // Import PopularAreas
import Project1 from './Pages/chunchadri';
import Project2 from './Pages/devanhalli';
import Project3 from './Pages/bigbanyan';




const Main = () => (
   <>
    <Navbar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="project" element={<Latest />} />
      <Route path="career" element={<Career />} />
      <Route path="contact" element={<Contact />} />
      <Route path="calculator" element={<Calculator />} />
      <Route path="popular-areas" element={<PopularAreas />} /> {/* New route */}
      {/* Define other routes here */}
      <Route path="/" element={<PopularAreas />} />
        <Route path="/chunchadri" element={<Project1 />} />
        <Route path="/devanhalli" element={<Project2 />} />
        <Route path="/bigbanyan" element={<Project3 />} />

    </Routes>
  </>
);

export default Main;
