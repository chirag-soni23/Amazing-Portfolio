import React, { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';

const Portfolio = () => {
  const {darkMode} = useContext(ThemeContext);
  return (
    <div className="w-full mt-10 flex items-center flex-col gap-10">
      <h1 className={`uppercase font-bold text-2xl md:text-3xl ${darkMode?"text-white":"text-gray-500"}`}>
        My <span className="text-[#08D665]">portfolio</span>
      </h1>
      <div className="cursor-pointer uppercase grid grid-cols-2 md:grid-cols-4 gap-4 p-4 w-full max-w-screen-lg">
        <div className="bg-[#08D665] text-white p-2 text-center rounded-full shadow-lg hover:bg-black hover:text-[#08F665] hover:border-[#08D665] border outline-none flex items-center justify-center">
          All
        </div>
        <div className="bg-[#08D665] text-white p-2 text-center rounded-full shadow-lg hover:bg-black hover:text-[#08F665] hover:border-[#08D665] border flex items-center justify-center">
          Design
        </div>
        <div className="bg-[#08D665] text-white p-2 text-center rounded-full shadow-lg tracking-tighter hover:bg-black hover:text-[#08F665] hover:border-[#08D665] border flex items-center justify-center">
          Development
        </div>
        <div className="bg-[#08D665] text-white p-2  text-center rounded-full shadow-lg hover:bg-black hover:text-[#08F665] hover:border-[#08D665] border flex items-center justify-center">
          Print
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
