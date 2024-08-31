import React from "react";
import { useDarkMode } from "./DarkModeContext";
import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube, FaBuilding, FaMobile, FaArrowUp, FaMoon, FaSun } from 'react-icons/fa';
import { IoMdMail } from 'react-icons/io';
import prop7 from './Assets/rohanproject5.png';
import prop8 from './Assets/rohanproject6.png';
import { Link } from 'react-scroll';

const Footer = () => {
  const { darkMode, toggleDarkMode } = useDarkMode();

  return (
    <>
      <footer className={`${darkMode ? 'dark bg-black' : 'light bg-gray-800'}
        w-full m-auto lg:px-20 px-10 py-20 grid lg:grid-cols-3 grid-cols-1 justify-center
        items-start lg:gap-20 gap-10`}>
        <div className='flex flex-col justify-center items-start gap-5'>
          <h1 className='text-white text-2xl font-semibold'>Contact Us</h1>
          <div className='flex justify-center items-center gap-3'>
            <FaBuilding className='text-white text-2xl' />
            <p className='text-slate-200'>Rajajinagar 6th Block</p>
          </div>
          <div className='flex justify-center items-center gap-3'>
            <FaMobile className='text-white text-2xl' />
            <p className='text-slate-200'>9742571664</p>
          </div>
          <div className='flex justify-center items-center gap-3'>
            <IoMdMail className='text-white text-2xl' />
            <p className='text-slate-200'>rohaninfrabuilderrs@gmail.com</p>
          </div>
        </div>

        <div className='flex flex-col justify-center items-start gap-5'>
          <h1 className='text-white text-2xl font-semibold'>Latest Properties</h1>
          <div className='flex justify-center items-center gap-4'>
            <img src={prop7} alt="Property 1" className='w-[120px] rounded-lg transform hover:scale-110 cursor-pointer transition-transform duration-300' />
            <div>
              <h1 className='text-lg text-white'>Villa with Amazing View</h1>
              <p className='text-slate-400'>2.5cr</p>
            </div>
          </div>
          <div className='flex justify-center items-center gap-4'>
            <img src={prop8} alt="Property 2" className='w-[120px] rounded-lg transform hover:scale-110 cursor-pointer transition-transform duration-300' />
            <div>
              <h1 className='text-lg text-white'>Villa with Amazing View</h1>
              <p className='text-slate-400'>2.5cr</p>
            </div>
          </div>
        </div>

        <div className='flex flex-col justify-center items-end gap-4'>
          <h1 className='text-white text-2xl font-semibold mb-4'></h1>
          <div id='social-icons' className='flex flex-row justify-center items-center gap-4'>
            <div className='p-3 rounded-full bg-white hover:bg-red-600 hover:text-white cursor-pointer transform hover:scale-110 transition-transform duration-300'>
              <FaFacebookF className='text-2xl' />
            </div>
            <div className='p-3 rounded-full bg-white hover:bg-red-600 hover:text-white cursor-pointer transform hover:scale-110 transition-transform duration-300'>
              <FaInstagram className='text-2xl' />
            </div>
            <div className='p-3 rounded-full bg-white hover:bg-red-600 hover:text-white cursor-pointer transform hover:scale-110 transition-transform duration-300'>
              <FaTwitter className='text-2xl' />
            </div>
            <div className='p-3 rounded-full bg-white hover:bg-red-600 hover:text-white cursor-pointer transform hover:scale-110 transition-transform duration-300'>
              <FaYoutube className='text-2xl' />
            </div>
          </div>
        </div>
      </footer>

      <div id='icon-box' className='bg-red-600 p-4 rounded-full hover:bg-black cursor-pointer fixed lg:bottom-12 bottom-6 right-6'>
        <Link to='hero' spy={true} offset={-100} smooth={true}>
          <FaArrowUp className='text-white text-2xl' />
        </Link>
      </div>

      <div>
        <button onClick={toggleDarkMode} className='flex items-center p-4 rounded-full bg-orange-500 fixed lg:top-52 right-6 top-6'>
          {darkMode ? <FaMoon size={25} className='text-black' /> : <FaSun size={25} className='text-black' />}
        </button>
      </div>

      {/* Centered Copyright Message */}
      <div className=' bg-gray-800 py-2 text-center'>
      <h1 className="text-center py-10 bg-gray-800 text-white">
        <p>&copy; {new Date().getFullYear()} Rohan Infra. All Rights Reserved.</p>
      </h1>
      </div>
    </>
  );
}

export default Footer;
