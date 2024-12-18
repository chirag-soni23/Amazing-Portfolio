import React, { useContext } from 'react';
import { FaSun, FaMoon } from 'react-icons/fa';
import { ThemeContext } from '../context/ThemeContext.jsx';

const DarkLightTheme = () => {
  const { darkMode, toggleTheme } = useContext(ThemeContext);

  return (
    <div onClick={toggleTheme} className="theme-toggle fixed bg-slate-900 shadow-white shadow 2xl flex justify-center items-center right-10 bottom-10 rounded-full p-2 cursor-pointer">
      <button className="theme-button">
        {darkMode ? <FaSun size={24} color="#FFD700" /> : <FaMoon size={24} color="#1E90FF" />}
      </button>
    </div>
  );
};

export default DarkLightTheme;
