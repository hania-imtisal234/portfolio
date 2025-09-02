import React from 'react';
import { motion } from 'framer-motion';

const AnimatedCoder = ({ position = 'right' }) => {
  const positionClass = position === 'right' 
    ? "hidden lg:block absolute right-4 lg:right-8 top-1/2 -translate-y-1/2 w-48 lg:w-64 h-48 lg:h-64 pointer-events-none z-20"
    : "hidden lg:block absolute left-4 lg:left-8 top-1/2 -translate-y-1/2 w-48 lg:w-64 h-48 lg:h-64 pointer-events-none z-20";
  
  const initialX = position === 'right' ? 100 : -100;

  return (
    <motion.div
      className={positionClass}
      initial={{ opacity: 0, x: initialX }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 1, delay: 0.5 }}
    >
      {/* Coder Head */}
      <motion.div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-16 h-16 bg-gray-800 dark:bg-gray-700 blue:bg-blue-800 rounded-full border-4 border-gray-600 dark:border-gray-500 blue:border-blue-600"
        animate={{
          y: [0, -5, 0],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        {/* Eyes */}
        <motion.div
          className="absolute top-4 left-3 w-2 h-2 bg-white rounded-full"
          animate={{
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute top-4 right-3 w-2 h-2 bg-white rounded-full"
          animate={{
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 0.5,
          }}
        />
        {/* Glasses */}
        <motion.div
          className="absolute top-3 left-1 w-6 h-4 border-2 border-gray-400 rounded-full"
          animate={{
            rotateY: [0, 5, 0],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute top-3 right-1 w-6 h-4 border-2 border-gray-400 rounded-full"
          animate={{
            rotateY: [0, -5, 0],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
        />
      </motion.div>

      {/* Coder Body */}
      <motion.div
        className="absolute top-16 left-1/2 -translate-x-1/2 w-20 h-24 bg-gray-700 dark:bg-gray-600 blue:bg-blue-700 rounded-t-3xl"
        animate={{
          y: [0, -3, 0],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 0.2,
        }}
      >
        {/* Arms */}
        <motion.div
          className="absolute top-4 -left-2 w-3 h-8 bg-gray-700 dark:bg-gray-600 blue:bg-blue-700 rounded-full"
          animate={{
            rotate: [0, 15, 0],
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute top-4 -right-2 w-3 h-8 bg-gray-700 dark:bg-gray-600 blue:bg-blue-700 rounded-full"
          animate={{
            rotate: [0, -15, 0],
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 0.5,
          }}
        />
      </motion.div>

      {/* Floating Code Elements around the coder */}
      {Array.from({ length: 8 }, (_, i) => (
        <motion.div
          key={i}
          className="absolute font-mono text-xs text-green-400 opacity-60"
          style={{
            left: `${20 + (i % 4) * 15}%`,
            top: `${30 + Math.floor(i / 4) * 20}%`,
          }}
          initial={{ opacity: 0, scale: 0 }}
          animate={{
            opacity: 0.6,
            scale: 1,
            y: [0, -10, 0],
            rotate: [0, 360],
          }}
          transition={{
            duration: 0.8,
            delay: i * 0.2,
            y: {
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.1,
            },
            rotate: {
              duration: 4,
              repeat: Infinity,
              ease: "linear",
              delay: i * 0.2,
            }
          }}
        >
          {['const', 'let', 'var', 'function', 'return', 'if', 'else', 'for'][i]}
        </motion.div>
      ))}

      {/* Floating Tech Icons */}
      {['⚛️', '🎮', '✨', '💻'].map((icon, index) => (
        <motion.div
          key={icon}
          className="absolute text-lg opacity-40"
          style={{
            left: `${10 + index * 20}%`,
            top: `${70 + index * 10}%`,
          }}
          initial={{ opacity: 0, scale: 0 }}
          animate={{
            opacity: 0.4,
            scale: 1,
            y: [0, -8, 0],
            rotateY: [0, 180, 360],
          }}
          transition={{
            duration: 0.6,
            delay: index * 0.3,
            y: {
              duration: 1.5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: index * 0.2,
            },
            rotateY: {
              duration: 3,
              repeat: Infinity,
              ease: "linear",
              delay: index * 0.1,
            }
          }}
        >
          {icon}
        </motion.div>
      ))}

      {/* Typing Animation */}
      <motion.div
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-48 h-16 bg-gray-900 dark:bg-gray-800 blue:bg-blue-900 rounded-lg shadow-lg border border-gray-600 dark:border-gray-500 blue:border-blue-600"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1 }}
      >
        <div className="p-2 font-mono text-xs text-green-400">
          <motion.div
            animate={{
              opacity: [1, 0, 1],
            }}
            transition={{
              duration: 1,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            $ coding...
          </motion.div>
          <motion.div
            className="text-blue-400"
            animate={{
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 0.5,
            }}
          >
            $ npm install awesome
          </motion.div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default AnimatedCoder;
