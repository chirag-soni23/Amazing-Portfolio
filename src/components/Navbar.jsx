import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import React, { useContext, useEffect, useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { ThemeContext } from '../context/ThemeContext';


gsap.registerPlugin(ScrollTrigger);

const Navbar = ({ homeRef, aboutRef, servicesRef, portfolioRef, blogRef, contactRef }) => {
  const [isOpen, setIsOpen] = useState(false);
  const {darkMode} = useContext(ThemeContext);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    if (window.innerWidth <= 768) {
      gsap.to(".navbar", {
        backgroundColor: "#ffffff",
        scrollTrigger: {
          trigger: ".navbar",
          start: "top top",
          toggleActions: "play none none reverse",
        },
      });
    }
  }, []);

  const scrollToSection = (ref) => {
    ref.current.scrollIntoView({ behavior: 'smooth' });
    setIsOpen(false); 
  };

  return (
    <div className={`navbar w-full p-6 flex justify-between lg:px-40 sm:px-4 items-center font-bold fixed z-50 left-0 top-0 right-0 ${darkMode?"bg-black":"bg-white"}`}>
      <div className="name">
        <h1 className="text-3xl text-[#08D665]">CHIRAG</h1>
      </div>
      {/* Hamburger Icon for small screens */}
      <div
        className="md:hidden text-white bg-[#08D665] flex items-center justify-center p-2 rounded text-2xl cursor-pointer"
        onClick={toggleMenu}
      >
        {isOpen ? <FaTimes /> : <FaBars />}
      </div>
      {/* Menu items */}
      <ul
        className={`${
          isOpen ? 'block' : 'hidden'
        } md:flex ${darkMode?"text-white":"text-gray-700"} outline-none items-center gap-6 absolute md:static top-20 left-0 w-full md:w-auto md:bg-transparent ${darkMode?"bg-black":"bg-gray-600"} p-6 md:p-0 transition-all duration-300`}
      >
        <li className="hover:text-[#08D665] cursor-pointer transition-all duration-300" onClick={() => scrollToSection(homeRef)}>Home</li>
        <li className="hover:text-[rgb(8,214,101)] cursor-pointer transition-all duration-300" onClick={() => scrollToSection(aboutRef)}>About</li>
        <li className="hover:text-[rgb(8,214,101)] cursor-pointer transition-colors duration-300" onClick={() => scrollToSection(servicesRef)}>Services</li>
        <li className="hover:text-[#08D665] cursor-pointer transition-all duration-300" onClick={() => scrollToSection(portfolioRef)}>Portfolio</li>
        <li className="hover:text-[#08D665] cursor-pointer transition-all duration-300" onClick={() => scrollToSection(blogRef)}>Blog</li>
        <li className="hover:text-[#08D665] cursor-pointer transition-all duration-300" onClick={() => scrollToSection(contactRef)}>Contact</li>
      </ul>
    </div>
  );
};

export default Navbar;
