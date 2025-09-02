import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const CodeTyping = ({ code, className = "", delay = 0 }) => {
  const [displayedCode, setDisplayedCode] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (currentIndex < code.length) {
      const timer = setTimeout(() => {
        setDisplayedCode(code.slice(0, currentIndex + 1));
        setCurrentIndex(currentIndex + 1);
      }, 50 + delay * 1000);
      return () => clearTimeout(timer);
    }
  }, [currentIndex, code, delay]);

  return (
    <motion.div
      className={`font-mono text-green-400 ${className}`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, delay }}
    >
      {displayedCode}
      {currentIndex < code.length && (
        <motion.span
          className="text-green-400"
          animate={{ opacity: [1, 0] }}
          transition={{ duration: 0.5, repeat: Infinity, repeatType: "reverse" }}
        >
          |
        </motion.span>
      )}
    </motion.div>
  );
};

export default CodeTyping;
