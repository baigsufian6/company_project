import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDarkMode } from "../DarkModeContext";
import area1 from '../Assets/new2.png';
import area2 from '../Assets/new1.png';
import area3 from '../Assets/new3.png';
import AOS from 'aos';
import 'aos/dist/aos.css';

const PopularAreas = () => {

    useEffect(() => {
        AOS.init({
            offset: 200,
            duration: 800,
            easing: 'ease-in-sine',
            delay: 100,
        });
    }, []);

    const { darkMode } = useDarkMode();
    const navigate = useNavigate();

    return (
        <>
            <div className={`${darkMode ? 'dark bg-black' : 'light bg-transparent'}`}>
                <section className={`${darkMode ? 'dark bg-gray-800' : 'light bg-red-100'}
                lg:w-[90%] w-full h-fit m-auto rounded-xl flex flex-col items-center lg:px-20 px-6 py-20 gap-20`}>
                    <div id='top' className='w-full flex flex-col items-center gap-8'>
                        <div>
                            <h1 data-aos='zoom-in' className='text-red-500 dark:text-white text-4xl'>LATEST PROJECTS</h1>
                        </div>
                        <div className='grid lg:grid-cols-3 grid-cols-1 gap-6 w-full'>
                            <div 
                                data-aos='zoom-in' 
                                data-aos-delay='400' 
                                style={{ backgroundImage: `url(${area1})` }}
                                className='bg-cover bg-center h-[400px] rounded-xl shadow-red cursor-pointer'
                                onClick={() => navigate('./project1')}
                            ></div>
                            <div 
                                data-aos='zoom-in' 
                                data-aos-delay='400' 
                                style={{ backgroundImage: `url(${area2})` }}
                                className='bg-cover bg-center h-[400px] rounded-xl shadow-red cursor-pointer'
                                onClick={() => navigate('./project2')}
                            ></div>
                            <div 
                                data-aos='zoom-in' 
                                data-aos-delay='400' 
                                style={{ backgroundImage: `url(${area3})` }}
                                className='bg-cover bg-center h-[400px] rounded-xl shadow-red cursor-pointer'
                                onClick={() => navigate('./project3')}
                            ></div>
                        </div>
                    </div>
                    <div id='bottom' className='w-full grid lg:grid-cols-3 grid-cols-1 lg:justify-center justify-start items-start gap-6'>
                        <div data-aos='slide-up' data-aos-delay="200" className="flex justify-center lg:items-center gap-8 w-full">
                            <h1 className='text-black text-7xl font-semibold dark:text-white'>52+</h1>
                            <h1 className="text-gray-500 text-xl">PROJECTS ARE SOLD OUT</h1>
                        </div>
                        <div data-aos='slide-up' data-aos-delay="200" className="flex justify-center lg:items-center gap-8 w-full">
                            <h1 className='text-black text-7xl font-semibold dark:text-white'>2.5K+</h1>
                            <h1 className="text-gray-500 text-xl">CUSTOMERS SATISFACTION</h1>
                        </div>
                        <div data-aos='slide-up' data-aos-delay="200" className="flex justify-center lg:items-center gap-8 w-full">
                            <h1 className='text-black text-7xl font-semibold dark:text-white'>7+</h1>
                            <h1 className="text-gray-500 text-xl">LATEST PROJECTS</h1>
                        </div>
                    </div>
                </section>
            </div>
        </>
    );
}

export default PopularAreas;

