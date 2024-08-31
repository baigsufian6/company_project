// Header.js
import React, { useState } from 'react';
import { Link } from 'react-scroll';
import { FaTimes, FaBars, FaPhoneAlt, FaUserCircle } from 'react-icons/fa';
import logo from './Assets/rohanlogo.png';
import { useDarkMode } from './DarkModeContext';

function Header() {
    const { darkMode } = useDarkMode();
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => setIsMenuOpen(prev => !prev);
    const closeMenu = () => setIsMenuOpen(false);

    const navItems = [
        { link: 'Home', path: 'header' },
        { link: 'About', path: 'about' },
        { link: 'Properties', path: 'properties' },
        { link: 'Service', path: 'services' },
        { link: 'Testimonials', path: 'testimonials' },
        { link: 'Career', path: 'career' },  // Added Career link
        { link: 'Contact', path: 'contact' }
    ];

    return (
        <nav className={`${darkMode ? 'dark bg-black' : 'light bg-[#f3f3f3]'} flex justify-between items-center gap-4 lg:px-20 px-4 py-3 sticky top-0 z-30`}>
            <div id='logo'>
                <img src={logo} alt='company logo' className='lg:w-[70px] w-[80px] dark:invert' />
            </div>
            <ul className='hidden lg:flex'>
                {navItems.map(({ link, path }) => (
                    <li key={path}>
                        <Link 
                            className='text-black text-[15px] uppercase font-semibold cursor-pointer px-3 py-2 dark:text-white rounded-lg hover:bg-red-600 hover:text-white' 
                            to={path} 
                            spy={true} 
                            smooth={true} 
                            offset={-100}
                        >
                            {link}
                        </Link>
                    </li>
                ))}
            </ul>

            <div className='flex justify-center items-center lg:hidden' onClick={toggleMenu}>
                {isMenuOpen ? <FaTimes className='text-black dark:text-white text-2xl cursor-pointer' /> : <FaBars className='text-black dark:text-white text-2xl cursor-pointer' />}
            </div>

            {isMenuOpen && (
                <div className='flex flex-col w-full h-fit bg-slate-800 p-4 absolute top-[80px] left-0' onClick={closeMenu}>
                    <ul className='flex flex-col justify-center items-center gap-2 w-full'>
                        {navItems.map(({ link, path }) => (
                            <li key={path}>
                                <Link 
                                    className='text-white uppercase font-semibold cursor-pointer p-3 rounded-lg hover:bg-red-600 hover:text-black w-full text-center' 
                                    to={path} 
                                    spy={true} 
                                    smooth={true} 
                                    offset={-100}
                                >
                                    {link}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
            )}

            <div className='flex justify-center items-center lg:gap-8 gap-2'>
                <div className='flex justify-center items-center lg:gap-3 gap-1'>
                    <FaPhoneAlt size={20} className='text-red-600' />
                    <h1 className='lg:text-xl text-sm text-black dark:text-white font-semibold'>
                        9742571664
                    </h1>
                </div>
                <FaUserCircle size={24} className='text-red-600' />
            </div>
        </nav>
    );
}

export default Header;
