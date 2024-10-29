import React, { useRef, useEffect } from 'react';
import LocomotiveScroll from 'locomotive-scroll';
import 'locomotive-scroll/dist/locomotive-scroll.css';

import Navbar from './components/Navbar';
import Home from './components/Home';
import Portfolio from './components/Portfolio';
import Services from './components/Services';
import Blog from './components/Blog';
import Flags from './components/Flags';
import Contact from './components/Contact';
import Footer from './components/Footer';
import DarkLightTheme from './Themes/DarkLightTheme';

const App = () => {
  const containerRef = useRef(null);
  const homeRef = useRef(null);
  const portfolioRef = useRef(null);
  const servicesRef = useRef(null);
  const blogRef = useRef(null);
  const flagsRef = useRef(null);
  const contactRef = useRef(null);

  useEffect(() => {
    const scroll = new LocomotiveScroll({
      el: containerRef.current,
      smooth: true
    });

    return () => {
      scroll.destroy();
    };
  }, []);

  return (
    <div ref={containerRef} className='p-2' data-scroll-container>
      <Navbar 
        homeRef={homeRef}
        portfolioRef={portfolioRef}
        servicesRef={servicesRef}
        blogRef={blogRef}
        flagsRef={flagsRef}
        contactRef={contactRef}
      />
      <div ref={homeRef} data-scroll-section><Home /></div>
      <div ref={portfolioRef} data-scroll-section><Portfolio /></div>
      <div ref={servicesRef} data-scroll-section><Services /></div>
      <div ref={blogRef} data-scroll-section><Blog /></div>
      <div ref={flagsRef} data-scroll-section><Flags /></div>
      <div ref={contactRef} data-scroll-section><Contact /></div>
      <div data-scroll-section><Footer /></div>
      <DarkLightTheme/>
    </div>
  );
}

export default App;
