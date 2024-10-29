import React, { useContext } from 'react';
import sky from '../assets/sky.png';
import { ReactTyped } from "react-typed";
import { ThemeContext } from '../context/ThemeContext';

const Home = () => {
  const {darkMode} = useContext(ThemeContext);
  return (
    <div className="flex flex-col md:flex-row w-full items-center justify-between h-full p-6 px-40 mt-40 font-bold">
      <div className="text-white text-center md:text-left md:w-1/2 space-y-4">
        <h2 className="text-[#08D665] text-xl md:text-2xl">HI THERE,</h2>
        <h1 className={`text-3xl md:text-4xl font-bold uppercase ${darkMode ? "text-white" : "text-gray-500"}`}>I AM A  <ReactTyped strings={["chirag soni","software engineer"]}  typeSpeed={50} loop backSpeed={30} /></h1>
       
        <p className={`text-sm md:text-base max-w-lg mx-auto md:mx-0 ${darkMode ? "text-white" : "text-gray-500"}`}>
          I'm a Software Engineer with over 2 years of experience. My expertise is in creating and developing websites, apps, and more...
        </p>
        <button className="text-white bg-[#08D665] p-3 rounded-md mt-4">Hire me</button>
      </div>
      <div className="mt-8 md:mt-0 flex justify-center">
  <img 
    src={sky} 
    alt="Sky illustration" 
    className="w-full max-w-xs sm:max-w-md md:max-w-lg lg:max-w-xl h-auto" 
  />
</div>

    </div>
  );
};

export default Home;
