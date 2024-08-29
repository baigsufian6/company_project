import React from "react";
import { DarkModeProvider } from "./Plots/DarkModeContext"; // Ensure DarkModeProvider is correctly exported
import Header from './Plots/Header';
import Hero from './Sections/Hero';
import About from './Sections/About';
import PopularAreas from './Sections/PopularAreas';
import Properties from './Sections/Properties';
import Services from './Sections/Service';  // Make sure this path is correct
import Clients from './Sections/Clients';
import Contact from './Sections/Contact';
import Footer from './Plots/Footer';

const App = () => {
    return (
        <>
            <DarkModeProvider>
                <Header />
                <Hero />
                <About />
                <PopularAreas />
                <Properties />
                <Services />
                <Clients />
                <Contact />
                <Footer />
            </DarkModeProvider>
        </>
    );
}

export default App;
