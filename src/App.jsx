import React from 'react'
import Navbar from './components/Navbar'
import Home from './components/Home'
import Portfolio from './components/Portfolio'
import Services from './components/Services'
import Blog from './components/Blog'
import Flags from './components/Flags'
import Contact from './components/Contact'
import Footer from './components/Footer'

const App = () => {
  return (
    <div className='p-2'>
      <Navbar/>
      <Home/>
      <Portfolio/>
      <Services/>
      <Blog/>
      <Flags/>
      <Contact/>
      <Footer/>
    </div>
  )
}

export default App