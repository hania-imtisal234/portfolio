import React from 'react';
import { motion } from 'framer-motion';

const FloatingElement = ({ position, delay = 0, size = 40, shape = 'circle' }) => {
  return (
    <motion.div
      className={`absolute ${position} pointer-events-none`}
      initial={{ opacity: 0, scale: 0, rotate: 0 }}
      animate={{ 
        opacity: [0.1, 0.3, 0.1], 
        scale: [1, 1.2, 1],
        rotate: [0, 180, 360],
        y: [0, -15, 0],
        x: [0, 8, 0],
      }}
      transition={{
        duration: 6,
        repeat: Infinity,
        delay,
        ease: "easeInOut",
      }}
      style={{
        width: size,
        height: size,
      }}
    >
      {shape === 'circle' && (
        <div className="w-full h-full bg-gradient-to-br from-purple-200 to-pink-300 rounded-full opacity-30"></div>
      )}
      {shape === 'square' && (
        <div className="w-full h-full bg-gradient-to-br from-blue-200 to-green-300 rounded-lg opacity-30"></div>
      )}
      {shape === 'triangle' && (
        <div 
          className="w-full h-full bg-gradient-to-br from-orange-200 to-red-300 opacity-30"
          style={{
            clipPath: "polygon(50% 0%, 0% 100%, 100% 100%)",
          }}
        />
      )}
    </motion.div>
  );
};

export default FloatingElement;
