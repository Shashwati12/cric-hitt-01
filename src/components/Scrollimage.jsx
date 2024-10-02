import React, { useEffect, useRef, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import hardik from "../assets/hardik.webp";
import surya from "../assets/surya.webp";

export default function Scrollimage() {
  const controls1 = useAnimation();
  const controls2 = useAnimation();
  const ref1 = useRef(null);
  const ref2 = useRef(null);
  const [scrollY, setScrollY] = useState(0);
  const [image1Animated, setImage1Animated] = useState(false);
  const [image2Animated, setImage2Animated] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const updateAnimation = (ref, controls, direction, isAnimated, setAnimated) => {
      if (ref.current) {
        const { top, height } = ref.current.getBoundingClientRect();
        const screenHeight = window.innerHeight;
        const startPoint = screenHeight;

        if (top <= startPoint && !isAnimated) {
          const xOffset = direction === 1 ? "0%" : "0%";
          controls.start({ x: xOffset });
          setAnimated(true);
        } else if (top > startPoint && !isAnimated) {
          const xOffset = direction === 1 ? "100%" : "-100%";
          controls.start({ x: xOffset });
        }
      }
    };

    updateAnimation(ref1, controls1, 1, image1Animated, setImage1Animated);
    updateAnimation(ref2, controls2, -1, image2Animated, setImage2Animated);
  }, [scrollY, controls1, controls2, image1Animated, image2Animated]);

  return (
    <div className="min-h-[100%]">
      <div ref={ref1} className="relative h-screen overflow-hidden">
        <motion.div
          animate={controls1}
          transition={{ type: "spring", stiffness: 50, damping: 20 }}
          className="w-full h-full relative" 
        >
          <img src={hardik} alt="Landscape 1" className="w-full h-full object-cover   " />
          <div className="absolute  inset-0 flex items-center justify-center text-white text-l font-bold bg-black bg-opacity-30">
          HARDIK PANDYA DELIVERED A STUNNING ALL-ROUND PERFORMANCE IN THE T20 2024 WORLD CUP FINAL, LEADING INDIA TO VICTORY. WITH A CRUCIAL KNOCK OF 45* OFF 23 BALLS, HE STABILIZED THE CHASE UNDER PRESSURE. HIS DISCIPLINED BOWLING IN THE DEATH OVERS, PICKING 2 KEY WICKETS, CHOKED THE OPPOSITION'S RUN FLOW. PANDYA'S MATCH-WINNING IMPACT SECURED INDIA'S HISTORIC WIN.
          </div>
        </motion.div>
      </div>

      <div ref={ref2} className="relative h-screen overflow-hidden">
        <motion.div
          animate={controls2}
          transition={{ type: "spring", stiffness: 50, damping: 20 }}
          className="w-full h-full"
        >
          <img src={surya} alt="Landscape 2" className="w-full h-full object-cover" />
         
        </motion.div>
      </div>
    </div>
  );
}