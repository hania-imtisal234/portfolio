import React from 'react';
import { motion } from 'framer-motion';

const AnimatedDatabase = () => (
  <motion.div
    className="hidden lg:flex flex-col items-center absolute left-8 top-1/2 -translate-y-1/2 z-20"
    initial={{ opacity: 0, x: -40 }}
    animate={{ opacity: 1, x: 0 }}
    transition={{ duration: 1, delay: 0.5 }}
    style={{ width: 72 }}
  >
    <svg width="72" height="160" viewBox="0 0 72 160" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Cylinder body */}
      <ellipse cx="36" cy="28" rx="32" ry="18" fill="#2563eb" fillOpacity="0.9" />
      <rect x="4" y="28" width="64" height="104" rx="32" fill="#1e40af" />
      <ellipse cx="36" cy="132" rx="32" ry="18" fill="#2563eb" fillOpacity="0.9" />
      {/* Top highlight */}
      <ellipse cx="36" cy="28" rx="24" ry="10" fill="#60a5fa" fillOpacity="0.6" />
      {/* Bottom shadow */}
      <ellipse cx="36" cy="132" rx="24" ry="10" fill="#0f172a" fillOpacity="0.3" />
      {/* Outline */}
      <ellipse cx="36" cy="28" rx="32" ry="18" fill="none" stroke="#1e293b" strokeWidth="2" />
      <ellipse cx="36" cy="132" rx="32" ry="18" fill="none" stroke="#1e293b" strokeWidth="2" />
      <rect x="4" y="28" width="64" height="104" rx="32" fill="none" stroke="#1e293b" strokeWidth="2" />
      {/* Animated Data Lines */}
      <motion.rect
        x="20"
        width="4"
        height="80"
        rx="2"
        fill="#22d3ee"
        initial={{ y: 100 }}
        animate={{ y: [100, 40, 100] }}
        transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.rect
        x="36"
        width="4"
        height="80"
        rx="2"
        fill="#facc15"
        initial={{ y: 120 }}
        animate={{ y: [120, 60, 120] }}
        transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut', delay: 0.7 }}
      />
      <motion.rect
        x="52"
        width="4"
        height="80"
        rx="2"
        fill="#4ade80"
        initial={{ y: 140 }}
        animate={{ y: [140, 80, 140] }}
        transition={{ duration: 2.2, repeat: Infinity, ease: 'easeInOut', delay: 1.2 }}
      />
    </svg>
    <span className="mt-3 text-xs text-blue-900 font-mono tracking-wide opacity-70">DATABASE</span>
  </motion.div>
);

export default AnimatedDatabase;
