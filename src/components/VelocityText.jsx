

import {
  motion,
  useScroll,
  useVelocity,
  useTransform,
  useSpring,
} from "framer-motion";
import React, { useRef } from "react";

export const VelocityText = () => {
  const targetRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end start"],
  });

  const scrollVelocity = useVelocity(scrollYProgress);

  const skewXRaw = useTransform(
    scrollVelocity,
    [-0.5, 0.5],
    ["45deg", "-45deg"]
  );
  const skewX = useSpring(skewXRaw, { mass: 3, stiffness: 400, damping: 50 });

  const xRaw = useTransform(scrollYProgress, [0, 1], [0, -4000]);
  const x = useSpring(xRaw, { mass: 3, stiffness: 400, damping: 50 });

  return (
    <section ref={targetRef} className="h-[600px] bg-black">
      <div className="sticky top-0 flex h-screen items-center overflow-hidden">
        <motion.h1
          style={{ skewX, x, fontSize: '400px' }} // Set font size to 400px
          className="origin-bottom-left whitespace-nowrap text-white font-black uppercase leading-[0.85]"
        >
          Cric-hitt
        </motion.h1>
      </div>
    </section>
  );
};
