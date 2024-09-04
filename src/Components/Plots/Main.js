import React from "react";
import { Routes, Route } from 'react-router-dom';
import { DarkModeProvider } from "./DarkModeContext";
import Header from './Header';
import Hero from './Sections/Hero';
import About from './Sections/About';
import PopularAreas from './Sections/PopularAreas';  // Corrected component name
import Properties from './Sections/Properties';
import Services from './Sections/Service';
import Clients from './Sections/Clients';
import Contact from './Sections/Contact';
import Footer from './Footer';
import Detail from "./Sections/Detail";
import Career from './Sections/Career';
import Project1 from './Sections/project1';
import Project2 from './Sections/project2';
import Project3 from './Sections/project3';


const Main = () => {
    return (
        <>
            <DarkModeProvider>
                <Header />
                <Routes> {/* Using Routes to define different paths */}
                    <Route path="/" element={
                        <>
                            <Hero/>
                             <About/>
                            <PopularAreas/>
                           <Properties/>
                            <Services/>
                            <Clients/>
                           <Contact/> 
                           <Footer/>

                            </>
                        }
                    />
                    <Route path="/Detail" element={<Detail />} /> {/* Example detail page route */}
                    <Route path="/Career" element={<Career/>}/>
                    <Route path="/project1" element={<Project1/>}/>
                    <Route path="/project2" element={< Project2/>}/>
                    <Route path="/project3" element={<Project3/>}/>
                    <Route path="./Contact" element={<Contact/>}/>

                </Routes>
            </DarkModeProvider>
        </>
    );
}

export default Main;
