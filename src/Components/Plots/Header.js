import React, { useState, useEffect } from "react";
import {
  animateScroll as scroll,
  scroller,
} from "react-scroll";
import { Link as RouterLink } from "react-router-dom";
import { FaTimes, FaBars, FaPhoneAlt, FaUserCircle } from "react-icons/fa";
import logo from "./Assets/rohanlogo.png";
import { useDarkMode } from "./DarkModeContext";

function Header() {
  const { darkMode } = useDarkMode();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen((prev) => !prev);
  const closeMenu = () => setIsMenuOpen(false);


    

  const scrollToTop = () => {
    scroll.scrollToTop();
    closeMenu();
  };

  const scrollToSection = (section) => {
    closeMenu();
    console.log(`Attempting to scroll to ${section}`);
    scroller.scrollTo(section, {
      duration: 800,
      delay: 0,
      smooth: "easeInOutQuart",
      offset: -100,
    });
  };

  useEffect(() => {
    const sections = [
      "header",
      "about",
      "properties",
      "services",
      "testimonials",
      "career",
      "contact",

    ];
    sections.forEach((section) => {
      const element = document.getElementById(section);
      if (element) {
        console.log(`Section ${section} exists`);
      } else {
        console.log(`Section ${section} does not exist`);
      }
    });
  }, []);

  const navItems = [
    { link: "Home", path: "header", isInternal: true },
    { link: "About", path: "about", isInternal: true },
    { link: "Properties", path: "properties", isInternal: true },
    { link: "Service", path: "services", isInternal: true },
    { link: "Testimonials", path: "testimonials", isInternal: true },
    { link: "Career", path: "career", isInternal: true },
    { link: "Contact", path: "contact", isInternal: true },
    { link: "Construction", path: "/construction", isInternal: false },
    { link: "Home Page", path: "/", isInternal: false },
  ];

  return (
    <nav
      className={`${
        darkMode ? "dark bg-black" : "light bg-[#f3f3f3]"
      } flex justify-between items-center gap-4 lg:px-20 px-4 py-3 sticky top-0 z-30`}
    >
      <div id="logo">
        <img
          src={logo}
          alt="company logo"
          className="lg:w-[70px] w-[80px] dark:invert"
        />
      </div>
      <ul className="hidden lg:flex">
        {navItems.map(({ link, path, isInternal }) => (
          <li key={path}>
            {isInternal ? (
              link === "Home" ? (
                <button
                  className="text-black text-[15px] uppercase font-semibold cursor-pointer px-3 py-2 dark:text-white rounded-lg hover:bg-red-600 hover:text-white"
                  onClick={scrollToTop}
                >
                  {link}
                </button>
              ) : (
                <button
                  className="text-black text-[15px] uppercase font-semibold cursor-pointer px-3 py-2 dark:text-white rounded-lg hover:bg-red-600 hover:text-white"
                  onClick={() => scrollToSection(path)}
                >
                  {link}
                </button>
              )
            ) : (
              <RouterLink
                className="text-black text-[15px] uppercase font-semibold cursor-pointer px-3 py-2 dark:text-white rounded-lg hover:bg-red-600 hover:text-white"
                to={path}
              >
                {link}
              </RouterLink>
            )}
          </li>
        ))}
      </ul>

      <div
        className="flex justify-center items-center lg:hidden"
        onClick={toggleMenu}
      >
        {isMenuOpen ? (
          <FaTimes className="text-black dark:text-white text-2xl cursor-pointer" />
        ) : (
          <FaBars className="text-black dark:text-white text-2xl cursor-pointer" />
        )}
      </div>

      {isMenuOpen && (
        <div
          className="flex flex-col w-full h-fit bg-slate-800 p-4 absolute top-[80px] left-0"
          onClick={closeMenu}
        >
          <ul className="flex flex-col justify-center items-center gap-2 w-full">
            {navItems.map(({ link, path, isInternal }) => (
              <li key={path}>
                {isInternal ? (
                  link === "Home" ? (
                    <button
                      className="text-white uppercase font-semibold cursor-pointer p-3 rounded-lg hover:bg-red-600 hover:text-black w-full text-center"
                      onClick={scrollToTop}
                    >
                      {link}
                    </button>
                  ) : (
                    <button
                      className="text-white uppercase font-semibold cursor-pointer p-3 rounded-lg hover:bg-red-600 hover:text-black w-full text-center"
                      onClick={() => scrollToSection(path)}
                    >
                      {link}
                    </button>
                  )
                ) : (
                  <RouterLink
                    className="text-white uppercase font-semibold cursor-pointer p-3 rounded-lg hover:bg-red-600 hover:text-black w-full text-center"
                    to={path}
                  >
                    {link}
                  </RouterLink>
                )}
              </li>
            ))}
          </ul>
        </div>
      )}

      <div className="flex justify-center items-center lg:gap-8 gap-2">
        <div className="flex justify-center items-center lg:gap-3 gap-1">
          <FaPhoneAlt size={20} className="text-red-600" />
          <h1 className="lg:text-xl text-sm text-black dark:text-white font-semibold">
            9742571664
          </h1>
        </div>
        <FaUserCircle size={24} className="text-red-600" />
      </div>
    </nav>
  );
}

export default Header;
