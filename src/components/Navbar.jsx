import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="w-full p-6 flex justify-between lg:px-40 sm:px-4 items-center  font-bold fixed z-10 left-0 top-0 right-0 bg-black">
      <div className="name">
        <h1 className="text-3xl text-[#08D665]">CHIRAG</h1>
      </div>
      {/* Hamburger Icon for small screens */}
      <div className="md:hidden text-white bg-[#08D665] flex items-center justify-center p-2 rounded text-2xl cursor-pointer" onClick={toggleMenu}>
        {isOpen ? <FaTimes /> : <FaBars />}
      </div>
      {/* Menu items */}
      <ul
        className={`${
          isOpen ? 'block' : 'hidden'
        } md:flex text-white outline-none items-center gap-6 absolute md:static top-20 left-0 w-full md:w-auto md:bg-transparent bg-black p-6 md:p-0 transition-all duration-300`}
      >
        <li className="hover:text-[#08D665] cursor-pointer transition-all duration-300">Home</li>
        <li className="hover:text-[#08D665] cursor-pointer transition-all duration-300">About</li>
        <li className="hover:text-[rgb(8,214,101)] cursor-pointer transition-colors duration-300">Services</li>
        <li className="hover:text-[#08D665] cursor-pointer transition-all duration-300">Portfolio</li>
        <li className="hover:text-[#08D665] cursor-pointer transition-all duration-300">Blog</li>
        <li className="hover:text-[#08D665] cursor-pointer transition-all duration-300">Contact</li>
      </ul>
    </div>
  );
};

export default Navbar;
