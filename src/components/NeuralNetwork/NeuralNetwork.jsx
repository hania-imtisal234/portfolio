import React from 'react';
import { motion } from 'framer-motion';

const NeuralNetwork = () => {
  const nodes = Array.from({ length: 8 }, (_, i) => ({
    id: i,
    x: 10 + (i % 4) * 25,
    y: 20 + Math.floor(i / 4) * 20,
  }));

  const connections = [
    [0, 1], [0, 2], [1, 3], [2, 3], [4, 5], [4, 6], [5, 7], [6, 7],
    [0, 4], [1, 5], [2, 6], [3, 7], [0, 5], [1, 6], [2, 7],
  ];

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {/* Neural Network Nodes */}
      {nodes.map((node) => (
        <motion.div
          key={node.id}
          className="absolute w-3 h-3 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full"
          style={{
            left: `${node.x}%`,
            top: `${node.y}%`,
          }}
          initial={{ opacity: 0, scale: 0 }}
          animate={{
            opacity: [0.3, 0.8, 0.3],
            scale: [1, 1.5, 1],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            delay: node.id * 0.2,
            ease: "easeInOut",
          }}
        >
          {/* Node Pulse Effect */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full"
            animate={{
              scale: [1, 2, 1],
              opacity: [0.5, 0, 0.5],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              delay: node.id * 0.3,
              ease: "easeOut",
            }}
          />
        </motion.div>
      ))}

      {/* Neural Network Connections */}
      {connections.map((connection, index) => (
        <motion.div
          key={index}
          className="absolute h-0.5 bg-gradient-to-r from-blue-400/30 to-purple-500/30"
          style={{
            left: `${nodes[connection[0]].x}%`,
            top: `${nodes[connection[0]].y}%`,
            width: `${Math.abs(nodes[connection[1]].x - nodes[connection[0]].x)}%`,
            transform: `rotate(${Math.atan2(
              nodes[connection[1]].y - nodes[connection[0]].y,
              nodes[connection[1]].x - nodes[connection[0]].x
            ) * 180 / Math.PI}deg)`,
            transformOrigin: 'left center',
          }}
          initial={{ opacity: 0, scaleX: 0 }}
          animate={{
            opacity: [0, 0.5, 0],
            scaleX: [0, 1, 0],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            delay: index * 0.1,
            ease: "easeInOut",
          }}
        >
          {/* Data Flow Particles */}
          <motion.div
            className="absolute top-0 w-1 h-1 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full"
            animate={{
              x: [0, '100%'],
              opacity: [0, 1],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              delay: index * 0.2,
              ease: "linear",
            }}
          />
        </motion.div>
      ))}

      {/* Floating Data Packets */}
      {Array.from({ length: 6 }, (_, i) => (
        <motion.div
          key={i}
          className="absolute text-xs font-mono text-blue-400"
          style={{
            left: `${15 + i * 15}%`,
            top: `${10 + i * 15}%`,
          }}
          initial={{ opacity: 0, y: 20 }}
          animate={{
            opacity: [0, 0.6, 0],
            y: [0, -15, 0],
            x: [0, 100],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            delay: i * 0.5,
            ease: "easeInOut",
          }}
        >
          {['data', 'input', 'output', 'train', 'learn', 'cess'][i]}
        </motion.div>
      ))}

      {/* Background Grid Pattern */}
      <div className="absolute inset-0 opacity-5">
        {Array.from({ length: 20 }, (_, i) => (
          <motion.div
            key={i}
            className="absolute w-px h-full bg-blue-400"
            style={{ left: `${i * 5}%` }}
            animate={{
              opacity: [0, 0.3],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              delay: i * 0.1,
              ease: "easeInOut",
            }}
          />
        ))}
        {Array.from({ length: 20 }, (_, i) => (
          <motion.div
            key={i}
            className="absolute w-full h-px bg-blue-400"
            style={{ top: `${i * 5}%` }}
            animate={{
              opacity: [0, 0.3],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              delay: i * 0.1 + 2,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default NeuralNetwork;
