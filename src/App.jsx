import React, { useRef } from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Portfolio from './components/Portfolio';
import Services from './components/Services';
import Blog from './components/Blog';
import Flags from './components/Flags';
import Contact from './components/Contact';
import Footer from './components/Footer';

const App = () => {
  const homeRef = useRef(null);
  const portfolioRef = useRef(null);
  const servicesRef = useRef(null);
  const blogRef = useRef(null);
  const flagsRef = useRef(null);
  const contactRef = useRef(null);

  return (
    <div className='p-2'>
      <Navbar 
        homeRef={homeRef}
        portfolioRef={portfolioRef}
        servicesRef={servicesRef}
        blogRef={blogRef}
        flagsRef={flagsRef}
        contactRef={contactRef}
      />
      <div ref={homeRef}><Home /></div>
      <div ref={portfolioRef}><Portfolio /></div>
      <div ref={servicesRef}><Services /></div>
      <div ref={blogRef}><Blog /></div>
      <div ref={flagsRef}><Flags /></div>
      <div ref={contactRef}><Contact /></div>
      <Footer />
    </div>
  );
}

export default App;
