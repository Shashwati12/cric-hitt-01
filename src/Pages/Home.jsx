import React, { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { SlideTabsExample } from '../components/SlideTabs';
import { SmoothScrollHero } from '../components/SmoothScrollHero';
import vdo from "../assets/mainvdo.mp4";
import LeftRight from '../components/LeftRight';
import { motion } from 'framer-motion';
import { RevealLinks } from '../components/RevealLinks';
import Footer from '../components/Footer';
import { gsap } from 'gsap';
import ball2 from '../assets/ballhay.png'; // Replace with the actual image path
import { div } from 'framer-motion/client';
import logo from '../assets/logo.png'
import { VelocityText } from '../components/VelocityText';
function Home({user}) {
  const navigate = useNavigate();
  const location =useNavigate();
  const cursorRef = useRef(null);
  const containerRef = useRef(null);
  const [isLogout,setIslogout] =useState(true);
  
  function handlenav() {
    navigate('/signup');
  }

  useEffect(() => {
    const cursor = cursorRef.current;
    const container = containerRef.current;

    // Move the custom cursor with mouse movement
    const handleMouseMove = (e) => {
      gsap.to(cursor, {
        x: e.clientX,
        y: e.clientY,
        ease: "elastic.out",
        duration: 2.5,
      });
    };

    // Scale the cursor on hovering over the container
    const handleContainerMouseEnter = () => {
      gsap.to(cursor, { scale: 2 });
    };

    const handleContainerMouseLeave = () => {
      gsap.to(cursor, { scale: 1 });
    };

    document.body.addEventListener("mousemove", handleMouseMove);
    container.addEventListener("mouseenter", handleContainerMouseEnter);
    container.addEventListener("mouseleave", handleContainerMouseLeave);

    // Clean up event listeners
    return () => {
      document.body.removeEventListener("mousemove", handleMouseMove);
      container.removeEventListener("mouseenter", handleContainerMouseEnter);
      container.removeEventListener("mouseleave", handleContainerMouseLeave);
    };
  }, []);

  return (
    <div className="h-[100%] w-[100%] bg-black relative">
      {/* Custom Cursor */}
      <div ref={cursorRef} className="fixed top-0 left-0 h-12 w-12 bg-blueviolet rounded-full pointer-events-none z-50">
        <img src={ball2} alt="cursor" className="h-[30px] w-[30px] rounded-full" />
      </div>

      {/* Video as background */}
      <video autoPlay loop muted src={vdo} className="absolute top-0 left-0 w-full h-screen object-cover" />

      {/* Black overlay with reduced opacity */}
      <div className="absolute top-0 left-0 w-full h-screen bg-black opacity-50"></div>

      <motion.nav
        initial={{ y: -40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ type: "spring", stiffness: 600 }}
        className='flex justify-between px-2 py-4 mb-1 relative z-10 bg-transparent'
        style={{ background: 'rgba(0, 0, 0, 0.4)' }} // semi-transparent to blend with video
      >
        <div className="log ml-8">
          <motion.img src={logo} alt="#"
          animate={{rotate:360}}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "linear"
          }}
          />
        </div>

        <SlideTabsExample />


      {
          isLogout &&
          <div className="login-signup flex space-x-7">
          <button onClick={handlenav} className='bg-white text-black mr-5 font-bold rounded-r-3xl rounded-l-3xl h-[50px] w-[100px] hover:bg-blue-600 hover:text-white'>signin</button>
          </div>
      }
      {
          !isLogout &&
         
            <div className="flex items-center px-5">
              <div className="flex-shrink-0">
                {/* <User className="h-8 w-8 rounded-full" /> */}
              </div>
              <div className="ml-3">
                <div className="text-base font-medium text-gray-800">User Name</div>
                <div className="text-sm font-medium text-gray-500">user@example.com</div>
              </div>
            </div>
          
      }
       
      </motion.nav>

      <div className="relative z-10 h-screen flex flex-col justify-center items-center text-white">
        <RevealLinks />
      </div>

      <div ref={containerRef} className="relative">
        <SmoothScrollHero />
        <LeftRight />
        <VelocityText></VelocityText>
      </div>

      <Footer />
    </div>
  );
}

export default Home;
