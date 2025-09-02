import React from 'react';
import { motion } from 'framer-motion';

const ArrowButton3D = ({ direction = 'right', onClick, className = '' }) => {
  return (
    <motion.button
      className={`fixed bottom-8 z-40 w-16 h-16 bg-white dark:bg-gray-800 blue:bg-blue-900 rounded-full shadow-lg border border-gray-200 dark:border-gray-700 blue:border-blue-700 flex items-center justify-center text-gray-600 dark:text-gray-300 blue:text-blue-200 hover:text-blue-500 dark:hover:text-blue-400 blue:hover:text-blue-300 transition-colors duration-300 ${direction === 'left' ? 'left-8' : 'right-8'} ${className}`}
      whileHover={{ 
        scale: 1.1, 
        rotate: direction === 'left' ? -5 : 5,
        y: -2
      }}
      whileTap={{ scale: 0.95 }}
      onClick={onClick}
      style={{
        transformStyle: "preserve-3d",
      }}
    >
      <motion.svg 
        className="w-8 h-8" 
        fill="none" 
        stroke="currentColor" 
        viewBox="0 0 24 24"
        style={{
          transform: `translateZ(10px)`,
        }}
      >
        {direction === 'left' ? (
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        ) : (
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        )}
      </motion.svg>
    </motion.button>
  );
};

export default ArrowButton3D; 