import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

export const SlideTabsExample = () => {
  return (
    <div className="bg-white/10 rounded-xl shadow-md backdrop-blur-sm border border-white/30 fixed top-3 left-[35%] ">
      <SlideTabs />
    </div>
  );
};

const SlideTabs = () => {
  const [position, setPosition] = useState({
    left: 0,
    width: 0,
    opacity: 0,
  });

 

  

  return (
    <ul
      onMouseLeave={() => {
        setPosition((pv) => ({
          ...pv,
          opacity: 0,
        }));
      }}
      className="relative mx-auto flex w-fit rounded-full  border-black  p-1"
    >
      <Tab  setPosition={setPosition}>HOME</Tab>
      <Tab  setPosition={setPosition}>ABOUT</Tab>
      <Tab routepath="/registration" setPosition={setPosition} >TOURNAMENTS</Tab>
      <Tab routepath="/middle" setPosition={setPosition}>HALL OF FAME</Tab>
      

      <Cursor position={position} />
    </ul>
  );
};

const Tab = ({ children, setPosition,routepath }) => {
  const ref = useRef(null);
  const navigate =useNavigate();
  function handlenav(){
    navigate(routepath)
  }
  return (
    <li
      onClick={handlenav}
      ref={ref}
      onMouseEnter={() => {
        if (!ref?.current) return;

        const { width } = ref.current.getBoundingClientRect();

        setPosition({
          left: ref.current.offsetLeft,
          width,
          opacity: 1,
        });
      }}
      className="relative z-10 block cursor-pointer px-3 py-1.5 text-xs uppercase text-white mix-blend-difference md:px-5 md:py-3 md:text-base"
    >
      {children}
    </li>
  );
};

const Cursor = ({ position }) => {
  return (
    <motion.li
      animate={{
        ...position,
      }}
      className="absolute z-0 h-7 rounded-full bg-white md:h-12"
    />
  );
};