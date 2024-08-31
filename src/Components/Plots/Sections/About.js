// import React, { useEffect } from "react";
// import { useNavigate } from 'react-router-dom';
// import { useDarkMode } from "../Contexts/DarkModeContext"; // Updated path if needed
// import aboutimg from '../Assets/comp.jpg'; // Updated path if needed
// import AOS from 'aos';
// import 'aos/dist/aos.css';

// const About = () => {
//     const navigate = useNavigate();

//     useEffect(() => {
//         AOS.init({
//             offset: 200,
//             duration: 800,
//             easing: 'ease-in-sine',
//             delay: 100,
//         });
//     }, []);

//     const { darkMode, toggleDarkMode } = useDarkMode();

//     return (
//         <section id='about' className={`${darkMode ? 'dark bg-black' : 'light bg-transparent'} w-full m-auto lg:px-40 px-10 py-20 grid lg:grid-cols-2 grid-cols-1 justify-center items-center gap-10`}>
//             <div>
//                 <img data-aos="zoom-in" src={aboutimg} alt="about img" className="rounded-2xl lg:w-[500px] lg:h-[600px]" />
//             </div>

//             <div className="flex flex-col justify-center items-start gap-8">
//                 <h1 data-aos='zoom-in' className="text-red-500 dark:text-white">WHO WE ARE</h1>
//                 <h1 data-aos="zoom-in" data-aos-delay="200" className="text-black text-[40px] font-semibold leading-10 dark:text-white">
//                     We are Rohan Infra Builders and Developers, dedicated to turning your dreams of owning a property into reality.
//                 </h1>
//                 <p data-aos="zoom-in" data-aos-delay="400" className="text-xl text-gray-600 dark:text-white text-justify">
//                     Our journey began with a vision to create spaces that people love. Today, our happy customers are a testament to our dedication. From the initial consultation to the final handover, we are with you every step of the way, ensuring a smooth and satisfying experience.
//                 </p>
//                 <button className="bg-red-600 dark:bg-red-700 hover:bg-black dark:hover:bg-white dark:hover:text-black text-lg p-4 w-full text-white font-semibold rounded-xl cursor-pointer transform hover:scale-110 transition-transform duration-300" onClick={() => navigate('/Detail')}>READ MORE</button>
//             </div>
//         </section>
//     );
// }

// export default About;


import React, { useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import { useDarkMode } from '../DarkModeContext'; // Correct path
import aboutimg from '../Assets/comp.jpg'; // Correct path
import AOS from 'aos';
import 'aos/dist/aos.css';

const About = () => {
    const navigate = useNavigate();

    useEffect(() => {
        AOS.init({
            offset: 200,
            duration: 800,
            easing: 'ease-in-sine',
            delay: 100,
        });
    }, []);

    const { darkMode, toggleDarkMode } = useDarkMode();

    return (
        <section id='about' className={`${darkMode ? 'dark bg-black' : 'light bg-transparent'} w-full m-auto lg:px-40 px-10 py-20 grid lg:grid-cols-2 grid-cols-1 justify-center items-center gap-10`}>
            <div>
                <img data-aos="zoom-in" src={aboutimg} alt="about img" className="rounded-2xl lg:w-[500px] lg:h-[600px]" />
            </div>

            <div className="flex flex-col justify-center items-start gap-8">
                <h1 data-aos='zoom-in' className="text-red-500 dark:text-white">WHO WE ARE</h1>
                <h1 data-aos="zoom-in" data-aos-delay="200" className="text-black text-[40px] font-semibold leading-10 dark:text-white">
                    We are Rohan Infra Builders and Developers, dedicated to turning your dreams of owning a property into reality.
                </h1>
                <p data-aos="zoom-in" data-aos-delay="400" className="text-xl text-gray-600 dark:text-white text-justify">
                    Our journey began with a vision to create spaces that people love. Today, our happy customers are a testament to our dedication. From the initial consultation to the final handover, we are with you every step of the way, ensuring a smooth and satisfying experience.
                </p>
                <button className="bg-red-600 dark:bg-red-700 hover:bg-black dark:hover:bg-white dark:hover:text-black text-lg p-4 w-full text-white font-semibold rounded-xl cursor-pointer transform hover:scale-110 transition-transform duration-300" onClick={() => navigate('/Detail')}>READ MORE</button>
            </div>
        </section>
    );
}

export default About;

