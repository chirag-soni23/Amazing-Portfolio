import React, { useContext, useEffect, useRef } from 'react';
import sky from '../assets/sky.png';
import { ReactTyped } from "react-typed";
import { ThemeContext } from '../context/ThemeContext';
import * as THREE from 'three';

const Home = () => {
  const { darkMode } = useContext(ThemeContext);
  const canvasRef = useRef(null);

  useEffect(() => {
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.z = 5;

    const renderer = new THREE.WebGLRenderer({ canvas: canvasRef.current, alpha: true });
    renderer.setSize(window.innerWidth, window.innerHeight);

    // Particle animation setup
    const particleCount = 5000;
    const particlesGeometry = new THREE.BufferGeometry();
    const particlesMaterial = new THREE.PointsMaterial({
      color: 0x08D665,
      size: 0.02,
      transparent: true,
    });

    const positions = [];
    for (let i = 0; i < particleCount; i++) {
      positions.push((Math.random() - 0.5) * 10);
      positions.push((Math.random() - 0.5) * 10);
      positions.push((Math.random() - 0.5) * 10);
    }
    particlesGeometry.setAttribute('position', new THREE.Float32BufferAttribute(positions, 3));

    const particles = new THREE.Points(particlesGeometry, particlesMaterial);
    scene.add(particles);

    const animate = () => {
      requestAnimationFrame(animate);

      particles.rotation.x += 0.001;
      particles.rotation.y += 0.001;

      renderer.render(scene, camera);
    };
    animate();

    // Cleanup on unmount
    return () => {
      renderer.dispose();
      particlesGeometry.dispose();
      particlesMaterial.dispose();
    };
  }, []);

  return (
    <div className="relative flex flex-col md:flex-row w-full items-center justify-between h-full p-6 px-40 mt-20 font-bold">
      <canvas ref={canvasRef} className="absolute top-0 left-0 w-full h-full -z-10" />

      <div className="text-white text-center md:text-left md:w-1/2 space-y-4 z-10">
        <h2 className="text-[#08D665] text-xl md:text-2xl">HI THERE,</h2>
        <h1 className={`text-3xl md:text-4xl font-bold uppercase ${darkMode ? "text-white" : "text-gray-500"}`}>
          I AM A <ReactTyped strings={["Chirag Soni","Software Engineer"]} typeSpeed={50} loop backSpeed={30} />
        </h1>
       
        <p className={`text-sm md:text-base max-w-lg mx-auto md:mx-0 ${darkMode ? "text-white" : "text-gray-500"}`}>
          I'm a Software Engineer with over 2 years of experience. My expertise is in creating and developing websites, apps, and more...
        </p>
        <button className="text-white bg-[#08D665] p-3 rounded-md mt-4">Hire me</button>
      </div>
      <div className="mt-8 md:mt-0 flex justify-center z-10">
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
