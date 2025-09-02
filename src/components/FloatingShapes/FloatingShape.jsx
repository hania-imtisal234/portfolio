import React, { useState } from 'react';
import { motion } from 'framer-motion';

const FloatingShape = ({ shape = 'circle', position = '', delay = 0, size = 60 }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      className={`absolute ${position} cursor-pointer select-none`}
      initial={{ opacity: 0, scale: 0, rotate: 0 }}
      animate={{
        opacity: isHovered ? 0.8 : 0.6,
        scale: isHovered ? 1.2 : [1, 1.1, 1],
        rotate: isHovered ? 180 : [0, 10, -10, 0],
        y: isHovered ? 0 : [0, -20, 0],
      }}
      transition={{
        duration: isHovered ? 0.3 : 4,
        repeat: isHovered ? 0 : Infinity,
        delay,
        ease: "easeInOut",
      }}
      style={{
        width: size,
        height: size,
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {shape === 'circle' && (
        <div className="w-full h-full bg-gradient-to-br from-purple-200 to-pink-300 rounded-full shadow-lg hover:shadow-xl transition-shadow duration-300"></div>
      )}
      {shape === 'square' && (
        <div className="w-full h-full bg-gradient-to-br from-blue-200 to-green-300 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"></div>
      )}
      {shape === 'triangle' && (
        <div 
          className="w-full h-full bg-gradient-to-br from-orange-200 to-red-300 shadow-lg hover:shadow-xl transition-shadow duration-300"
          style={{
            clipPath: "polygon(50% 0%, 0% 100%, 100% 100%)",
          }}
        />
      )}
      {shape === 'star' && (
        <div 
          className="w-full h-full bg-gradient-to-br from-yellow-200 to-orange-300 shadow-lg hover:shadow-xl transition-shadow duration-300"
          style={{
            clipPath: "polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)",
          }}
        />
      )}
    </motion.div>
  );
};

export default FloatingShape;
