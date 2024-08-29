import React from "react";
import { useDarkMode } from "./DarkModeContext";
import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube, FaBuilding,FaFax,FaMobile,FaArrowUp,FaMoon,FaSun} from 'react-icons/fa';
import { Link } from 'react-scroll';
import { IoMdMail} from 'react-icons/io'
import prop7 from '../Assets/rohanproject5.png';
import prop8 from '../Assets/rohanproject6.png';


const Footer = ()=>{

    const { darkMode, toggleDarkMode } = useDarkMode();
    return(
    <>
    <footer className={`${darkMode ? 'dark bg-black' : 'light bg-gray-800'}
    w-full m-auto lg:px-20 px-10 py-20 grid lg:grid-cols-3 grid-cols-1 justify-center
    items-start lg:gap-20 gap-10`}>
        <div className='flex flex-col justify-center items-start gap-5'>
            <h1 className='text-white text-2xl font-semibold'>About Us</h1>
            <p className='text-slate-200 text-justify'>Life is a journey filled with ups and downs, but it's the persistence and determination to keep moving forward that defines us. Challenges are inevitable, but they are also opportunities in disguise, pushing us beyond our comfort zones and helping us grow. Embrace each moment with an open heart and a resilient spirit, knowing that every step you take brings you closer to your goals. Remember, it's not about how fast you reach your destination, but how much you learn and grow along the way. Keep believing in yourself, stay focused, and never underestimate the power of perseverance. The best is yet to come.






</p>
            <div id='social-icons' className='flex  justify-start  items-center 
            gap-4 mt-4'>
                <div className='p-3 rounded-xl bg-white hover:bg-red-600 
                hover:text-white cursor-pointer transform hover:scale-110 transition-transform
                duration-300'>
                     <FaFacebookF className='size-5' />
                </div>
                <div className='p-3 rounded-xl bg-white hover:bg-red-600 
                hover:text-white cursor-pointer transform hover:scale-110 transition-transform
                duration-300'>
                     <FaInstagram className='size-5' />
                </div>
                <div className='p-3 rounded-xl bg-white hover:bg-red-600 
                hover:text-white cursor-pointer transform hover:scale-110 transition-transform
                duration-300'>
                     <FaTwitter className='size-5' />
                </div>
                <div className='p-3 rounded-xl bg-white hover:bg-red-600 
                hover:text-white cursor-pointer transform hover:scale-110 transition-transform
                duration-300'>
                     <FaYoutube className='size-5' />
                </div>
            </div>
            <h1 className='text-white mt-8'>Copyright Real Estate, All Rights are reserved</h1>
        </div>

        <div className='flex flex-col justify-center items-start gap-5'>
            <h1 className='text-white text-2xl font-semibold'>Contact Us</h1>
            <div className='flex justify-center items-center gap-3'>
                <FaBuilding className='text-white size-5'/>
                <p className='text-slate-200'>Rajajinagar 6th Block </p>
            </div>
            <div className='flex justify-center items-center gap-3'>
                <FaMobile className='text-white size-5'/>
                <p className='text-slate-200'>9742571664</p>
            </div>
            {/* <div className='flex justify-center items-center gap-3'>
                <FaFax className='text-white size-5'/>
                <p className='text-slate-200'>na</p>
            </div> */}
            <div className='flex justify-center items-center gap-3'>
                <IoMdMail className='text-white size-5'/>
                <p className='text-slate-200'>rohaninfrabuilderrs@gmail.com</p>
            </div>
        </div>

        <div className='flex flex-col justify-center items-start gap-5'>
            <h1 className='text-white text-2xl font-semibold '>Latest Properties</h1>
            <div className='flex justify-center items-center gap-4'>
                <img src={prop7} alt="" className='w-[120px] rounded-lg transform hover:scale-110 cursor-pointer transition-transform duration-300' ></img>
                <div>
                    <h1 className='text-lg text-white'>villa with amazing view</h1>
                    <p className='text-slate-400'>2.5cr</p>
                </div>
            </div>
            <div className='flex justify-center items-center gap-4'>
                <img src={prop8} alt="" className='w-[120px] rounded-lg transform hover:scale-110 cursor-pointer transition-transform duration-300' ></img>
                <div>
                    <h1 className='text-lg text-white'>villa with amazing view</h1>
                    <p className='text-slate-400'>2.5cr</p>
                </div>
            </div>
        </div>
    </footer>

    <div id='icon-box' className='bg-red-600 p-4 rounded-full hover:bg-black
    cursor-pointer fixed lg:bottom-12 bottom-6 right-6'>
        <Link to='hero' spy={true} offset={-100} smooth={true}>
        <FaArrowUp className='size-6 text-white'/>
        </Link>
    </div>

    <div>
        <button onClick={toggleDarkMode} className='flex items-center p-4 rounded-full
        bg-orange-500 fixed lg:top-52 right-6 top-6'>
           {darkMode ? <FaMoon size={25} className='text-black'/> : <FaSun size={25} className='text-black' />}
        </button>
    </div>
    </>
    )
}

export default Footer;