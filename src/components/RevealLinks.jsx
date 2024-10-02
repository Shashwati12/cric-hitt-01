import React from "react";
import { motion } from "framer-motion";

export const RevealLinks = () => {
  return (
    <section 
    className="relative z-10 h-screen flex flex-col justify-center items-center text-white">
      <motion.div
      whileHover={{color:"#1d4ed8"}}
      initial={{x:1000,opacity:0}}
      animate={{x:0,opacity:1}}
      transition={{
        duration:2,
        type: "spring",
        stiffness: 600
      }}
      
      >
      <FlipLink href="#">The</FlipLink>
      </motion.div>

      <motion.div
      whileHover={{color:"#1d4ed8"}}
      initial={{x:-1000,opacity:0}}
      animate={{x:0,opacity:1}}
      transition={{
        duration:2,
        type: "spring",
        stiffness: 600
      }}
      >
      <FlipLink href="#">Ultimate</FlipLink>
      </motion.div>

      <motion.div
      whileHover={{color:"#1d4ed8"}}
      initial={{x:1000,opacity:0}}
      animate={{x:0,opacity:1}}
      transition={{
        duration:2,
        type: "spring",
        stiffness: 600
      }}
      >
      <FlipLink href="#">Cricket</FlipLink>
      </motion.div>

      <motion.div
      whileHover={{color:"#1d4ed8"}}
      initial={{x:-1000,opacity:0}}
      animate={{x:0,opacity:1}}
      transition={{
        duration:2,
        type: "spring",
        stiffness: 600
      }}
      >
      <FlipLink href="#">Destination</FlipLink>
      </motion.div>


    </section>
  );
};

const DURATION = 0.25;
const STAGGER = 0.025;

const FlipLink = ({ children, href }) => {
  return (
    <motion.a
      initial="initial"
      whileHover="hovered"
      href={href}
      className="relative block overflow-hidden whitespace-nowrap text-4xl font-black uppercase sm:text-7xl md:text-8xl lg:text-9xl"
      style={{
        lineHeight: 0.75,
      }}
    >
      <div>
        {children.split("").map((l, i) => (
          <motion.span
            variants={{
              initial: {
                y: 0,
              },
              hovered: {
                y: "-100%",
              },
            }}
            transition={{
              duration: DURATION,
              ease: "easeInOut",
              delay: STAGGER * i,
            }}
            className="inline-block"
            key={i}
          >
            {l}
          </motion.span>
        ))}
      </div>
      <div className="absolute inset-0">
        {children.split("").map((l, i) => (
          <motion.span
            variants={{
              initial: {
                y: "100%",
              },
              hovered: {
                y: 0,
              },
            }}
            transition={{
              duration: DURATION,
              ease: "easeInOut",
              delay: STAGGER * i,
            }}
            className="inline-block"
            key={i}
          >
            {l}
          </motion.span>
        ))}
      </div>
    </motion.a>
  );
};