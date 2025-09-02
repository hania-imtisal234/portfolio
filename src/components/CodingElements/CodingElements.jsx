import React from 'react';
import { motion } from 'framer-motion';
import { codeSnippets, matrixKeywords } from '../../constants';

const CodingElements = ({ variant = 'default' }) => {
  const snippets = codeSnippets[variant] || codeSnippets.default;
  const keywords = matrixKeywords[variant] || matrixKeywords.default;

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {/* Floating Code Snippets */}
      {snippets.map((snippet, index) => (
        <motion.div
          key={index}
          className={`absolute font-mono text-xs ${snippet.color} opacity-15`}
          style={{
            left: `${10 + index * 15}%`,
            top: `${20 + index * 10}%`,
          }}
          initial={{ opacity: 0, y: 30, rotateX: -45 }}
          animate={{
            opacity: 0.15,
            y: 0,
            rotateX: 0,
            rotateY: [0, 180, 360],
          }}
          transition={{
            duration: 0.6,
            delay: index * 0.2,
            y: {
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
              delay: index * 0.3,
            },
            rotateY: {
              duration: 6,
              repeat: Infinity,
              ease: "linear",
              delay: index * 0.2,
            }
          }}
        >
          {snippet.code}
        </motion.div>
      ))}

      {/* Matrix Rain Effect */}
      {Array.from({ length: 12 }, (_, i) => (
        <motion.div
          key={i}
          className="absolute text-green-400 text-xs opacity-15"
          style={{
            left: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [-10, 110],
            opacity: [0, 0.2, 0],
          }}
          transition={{
            duration: Math.random() * 2 + 1.5,
            repeat: Infinity,
            ease: "linear",
            delay: Math.random() * 1.5,
          }}
        >
          {keywords[Math.floor(Math.random() * keywords.length)]}
        </motion.div>
      ))}
    </div>
  );
};

export default CodingElements;
