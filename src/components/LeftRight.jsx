import React from 'react';
import cricImage from '../assets/crci2.webp'; 

const Slider = ({ width, height, quantity, reverse }) => {
  const items = Array.from({ length: quantity }, (_, i) => i + 1);

  return (
    <div className={`w-full h-[${height}px] overflow-hidden relative`}>
      <div className={`flex absolute ${reverse ? 'animate-reversePlay' : 'animate-autoRun'}`}>
        {items.map((item) => (
          <div
            key={item}
            className={`absolute w-[${width}px] h-[${height}px] left-full transition-filter duration-500 grayscale hover:grayscale-0`}
            style={{ animationDelay: `${(30 / quantity) * (item - 1) - 30}s` }} 
          >
            <img src={cricImage} alt={`Item ${item}`} className="w-full h-full object-cover" />
          </div>
        ))}
      </div>
    </div>
  );
};

const LeftRight = () => {
  return (
    <main className="w-[90vw] max-w-[1200px] mx-auto">
      <Slider width={100} height={50} quantity={10} reverse={false} />
      <Slider width={400} height={400} quantity={9} reverse={true} />
    </main>
  );
};

export default LeftRight;
