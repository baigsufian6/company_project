import React from "react";
import { DarkModeProvider } from "./DarkModeContext";
import Header from './Header';
import Hero from '../Sections/Hero';
import About from  '../Sections/About';
import popularAreas from '../Sections/PopularAreas';
import Properties from '../Sections/Properties';
import Services from '../Sections/Service';
import Clients from '../Sections/clients';
import Contact from '../Sections/Contact';
import Footer from './Footer';

const Main = ()=>{
    return (
        <>
        <DarkModeProvider>
            <Header/>
            <Hero/>
            <About/>
            <popularAreas/>
            <Properties/>
            <Services/>
            <Clients/>
            <Contact/>
            <Footer/>
        </DarkModeProvider>
        </>
    )
}

export default Main;