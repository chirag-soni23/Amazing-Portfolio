import React, { useContext } from 'react'
import { ThemeContext } from '../context/ThemeContext'

const Flags = () => {
  const {darkMode} = useContext(ThemeContext);
  return (
    <div className="w-full mt-20 flex justify-center items-center gap-10">
         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 w-full max-w-5xl cursor-pointer">
 <div className='flex flex-col items-center justify-center gap-2 p-2 border border-white shadow-2xl shadow-gray-600 rounded-md'>
          <h1 className='text-[#08D665] font-bold text-3xl'>50+</h1>
          <h2 className={` ${darkMode?"text-white":"text-gray-500"} font-medium text-lg`}>Successful Projects</h2>
        </div>
        <div className='flex flex-col items-center justify-center gap-2 p-2 border border-white shadow-2xl shadow-gray-600 rounded-md'>
          <h1 className='text-[#08D665] font-bold text-3xl'>3+</h1>
          <h2 className={` ${darkMode?"text-white":"text-gray-500"} font-medium text-lg`}>Happy Clients</h2>
        </div>
        <div className='flex flex-col items-center justify-center gap-2 p-2 border border-white shadow-2xl shadow-gray-600 rounded-md'>
          <h1 className='text-[#08D665] font-bold text-3xl'>2+</h1>
          <h2 className={` ${darkMode?"text-white":"text-gray-500"} font-medium text-lg`}>Team Members</h2>
        </div>
        <div className='flex flex-col items-center justify-center gap-2 p-2 border border-white shadow-2xl shadow-gray-600 rounded-md'>
          <h1 className='text-[#08D665] font-bold text-3xl'>2+</h1>
          <h2 className={` ${darkMode?"text-white":"text-gray-500"} font-medium text-lg`}>Winning Awards</h2>
        </div>
    </div>
    </div>
  )
}

export default Flags
