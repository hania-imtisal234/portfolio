import React from 'react';
import { motion } from 'framer-motion';

const WavyText = ({ text, className = "", delay = 0 }) => {
  return (
    <motion.div
      className={`overflow-hidden ${className}`}
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay }}
    >
      {text.split("").map((char, index) => (
        <motion.span
          key={index}
          className="inline-block"
          animate={{
            y: [0, -8, 0],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            delay: index * 0.03,
            ease: "easeInOut",
          }}
        >
          {char === " " ? "\u00A0" : char}
        </motion.span>
      ))}
    </motion.div>
  );
};

export default WavyText;
