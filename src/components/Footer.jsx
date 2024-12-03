import React, { useContext } from 'react'
import { ThemeContext } from '../context/ThemeContext'

const Footer = () => {
  const {darkMode} = useContext(ThemeContext);
  return (
    <div className='mt-20 mb-10'>
        <h1 className={` ${darkMode?"text-white":"text-gray-500"} text-center text-[15px] font-bold`}>Copyright © 2024 coders | All Rights Reserved</h1>
    </div>
  )
}

export default Footer