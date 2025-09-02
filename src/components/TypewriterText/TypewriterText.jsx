import React, { useState } from 'react';
import { motion } from 'framer-motion';

const TypewriterText = ({ text, className = "", delay = 0, speed = 20 }) => {
  const [displayText, setDisplayText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [typing, setTyping] = useState(false);

  React.useEffect(() => {
    setDisplayText("");
    setCurrentIndex(0);
    setTyping(false);
    const startTimeout = setTimeout(() => {
      setTyping(true);
    }, delay * 1000); // delay is in seconds for consistency with Framer Motion
    return () => clearTimeout(startTimeout);
  }, [text, delay]);

  React.useEffect(() => {
    if (!typing) return;
    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setDisplayText((prev) => prev + text[currentIndex]);
        setCurrentIndex((prev) => prev + 1);
      }, speed);
      return () => clearTimeout(timeout);
    }
  }, [currentIndex, text, speed, typing]);

  return (
    <motion.div
      className={`overflow-hidden ${className}`}
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay }}
    >
      <span className="inline-block">
        {displayText}
        {currentIndex < text.length ? (
          <motion.span
            className="inline-block w-0.5 h-5 bg-current ml-1"
            animate={{ opacity: [1, 0] }}
            transition={{ duration: 0.8, repeat: Infinity }}
          />
        ) : null}
      </span>
    </motion.div>
  );
};

export default TypewriterText;
