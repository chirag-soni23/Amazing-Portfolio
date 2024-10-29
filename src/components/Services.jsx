import React, { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';

const Services = () => {
  const {darkMode} = useContext(ThemeContext);
  return (
    <div className="w-full mt-20 flex items-center flex-col gap-10">
      <h1 className={`uppercase font-bold text-2xl md:text-3xl  ${darkMode?"text-white":"text-gray-500"}`}>
        My <span className="text-[#08D665]">services</span>
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 p-4 w-full max-w-5xl cursor-pointer uppercase">
        {/* Web Design */}
        <div className="bg-black text-white font-bold border border-solid border-white flex flex-col items-center justify-center p-8 sm:p-6 gap-10 rounded-lg hover:text-[#08D665] transition-colors duration-300">
          <img
            src="https://amazing-portfolio-umber.vercel.app/assets/img/service/icon-responsive.svg"
            alt="Web Design Icon"
            className="w-16 h-16 sm:w-20 sm:h-20"
          />
          <h1 className="text-lg sm:text-xl">Web Design</h1>
        </div>

        {/* Development */}
        <div className="bg-black text-white font-bold border border-solid border-white flex flex-col items-center justify-center p-8 sm:p-6 gap-10 rounded-lg hover:text-[#08D665] transition-colors duration-300">
          <img
            src="https://amazing-portfolio-umber.vercel.app/assets/img/service/icon-email.svg"
            alt="Development Icon"
            className="w-16 h-16 sm:w-20 sm:h-20"
          />
          <h1 className="text-lg sm:text-xl">Development</h1>
        </div>

        {/* Graphic Design */}
        <div className="bg-black text-white font-bold border border-solid border-white flex flex-col items-center justify-center p-8 sm:p-6 gap-10 rounded-lg hover:text-[#08D665] transition-colors duration-300">
          <img
            src="https://amazing-portfolio-umber.vercel.app/assets/img/service/icon-lock.svg"
            alt="Graphic Design Icon"
            className="w-16 h-16 sm:w-20 sm:h-20"
          />
          <h1 className="text-lg sm:text-xl">Graphic Design</h1>
        </div>

        {/* Responsive Design */}
        <div className="bg-black text-white font-bold border border-solid border-white flex flex-col items-center justify-center p-8 sm:p-6 gap-10 rounded-lg hover:text-[#08D665] transition-colors duration-300">
          <img
            src="https://amazing-portfolio-umber.vercel.app/assets/img/service/icon-easy.svg"
            alt="Responsive Design Icon"
            className="w-16 h-16 sm:w-20 sm:h-20"
          />
          <h1 className="text-lg sm:text-xl">Responsive Design</h1>
        </div>

        {/* Marketing */}
        <div className="bg-black text-white font-bold border border-solid border-white flex flex-col items-center justify-center p-8 sm:p-6 gap-10 rounded-lg hover:text-[#08D665] transition-colors duration-300">
          <img
            src="https://amazing-portfolio-umber.vercel.app/assets/img/service/service-icon-bg.svg"
            alt="Marketing Icon"
            className="w-16 h-16 sm:w-20 sm:h-20"
          />
          <h1 className="text-lg sm:text-xl">Marketing</h1>
        </div>

        {/* Support */}
        <div className="bg-black text-white font-bold border border-solid border-white flex flex-col items-center justify-center p-8 sm:p-6 gap-10 rounded-lg hover:text-[#08D665] transition-colors duration-300">
          <img
            src="https://amazing-portfolio-umber.vercel.app/assets/img/service/icon-responsive.svg"
            alt="Support Icon"
            className="w-16 h-16 sm:w-20 sm:h-20"
          />
          <h1 className="text-lg sm:text-xl">Support</h1>
        </div>
      </div>
    </div>
  );
};

export default Services;
