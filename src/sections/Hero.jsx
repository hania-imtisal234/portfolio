import React, { useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';
import { FloatingElement, FloatingShape, CodingElements, CodeTyping } from '../components';
import AnimatedCoder from '../components/AnimatedCoder/AnimatedCoder';


const Hero = () => {
  const [cursorVariant, setCursorVariant] = useState("default");
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);
  
  // Use motion values for mouse position instead of state
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  
  const springConfig = { damping: 25, stiffness: 700 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  const handleMouseMove = (e) => {
    const { left, top, width, height } = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - left) / width - 0.5) * 2;
    const y = -((e.clientY - top) / height - 0.5) * 2;
    
    // Update motion values directly instead of state
    mouseX.set(x);
    mouseY.set(y);
    
    cursorX.set(e.clientX - 16);
    cursorY.set(e.clientY - 16);
  };



  // Animated Database Component
  const AnimatedDatabase = () => (
    <motion.div
      className="hidden lg:flex flex-col items-center absolute left-8 top-1/2 -translate-y-1/2 z-20"
      initial={{ opacity: 0, x: -40 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 1, delay: 0.5 }}
      style={{ width: 72 }}
    >
      {/* Modern SVG Database Cylinder */}
      <svg width="72" height="160" viewBox="0 0 72 160" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Cylinder body */}
        <ellipse cx="36" cy="28" rx="32" ry="18" fill="#2563eb" fillOpacity="0.85" />
        <rect x="4" y="28" width="64" height="104" rx="32" fill="#1e40af" />
        <ellipse cx="36" cy="132" rx="32" ry="18" fill="#2563eb" fillOpacity="0.85" />
        {/* Top highlight */}
        <ellipse cx="36" cy="28" rx="24" ry="10" fill="#60a5fa" fillOpacity="0.5" />
        {/* Bottom shadow */}
        <ellipse cx="36" cy="132" rx="24" ry="10" fill="#0f172a" fillOpacity="0.3" />
        {/* Outline */}
        <ellipse cx="36" cy="28" rx="32" ry="18" fill="none" stroke="#1e293b" strokeWidth="2" />
        <ellipse cx="36" cy="132" rx="32" ry="18" fill="none" stroke="#1e293b" strokeWidth="2" />
        <rect x="4" y="28" width="64" height="104" rx="32" fill="none" stroke="#1e293b" strokeWidth="2" />
        {/* Animated Data Lines */}
        <motion.rect
          x="20" width="4" height="80" rx="2"
          fill="#22d3ee"
          initial={{ y: 100 }}
          animate={{ y: [100, 40, 100] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.rect
          x="36" width="4" height="80" rx="2"
          fill="#facc15"
          initial={{ y: 120 }}
          animate={{ y: [120, 60, 120] }}
          transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut", delay: 0.7 }}
        />
        <motion.rect
          x="52" width="4" height="80" rx="2"
          fill="#4ade80"
          initial={{ y: 140 }}
          animate={{ y: [140, 80, 140] }}
          transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut", delay: 1.2 }}
        />
      </svg>
      {/* Database Label */}
      <span className="mt-4 text-xs text-blue-900 dark:text-blue-200 font-mono tracking-wide opacity-70">DATABASE</span>
    </motion.div>
  );

  return (
    <div 
      className="w-full min-h-screen bg-white dark:bg-gray-900 blue:bg-blue-950 relative overflow-y-auto theme-transition scrollbar-hide"
      style={{
        scrollbarWidth: 'none',
        msOverflowStyle: 'none',
        WebkitScrollbar: { display: 'none' }
      }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setCursorVariant("visible")}
      onMouseLeave={() => setCursorVariant("hidden")}
    >
      <AnimatedDatabase />
      {/* Awesome Custom Cursor */}
      <motion.div
        className="fixed top-0 left-0 w-8 h-8 bg-blue-500 dark:bg-blue-400 blue:bg-blue-300 rounded-full pointer-events-none z-50 mix-blend-difference"
        style={{
          x: cursorXSpring,
          y: cursorYSpring,
        }}
        variants={{
          visible: { opacity: 1, scale: 1 },
          hidden: { opacity: 0, scale: 0 },
        }}
        animate={cursorVariant}
        transition={{ duration: 0.2 }}
      />

      {/* Awesome 3D Floating Shapes */}
      <FloatingShape shape="cube" position="top-20 left-10" delay={0.5} size={80} />
      <FloatingShape shape="sphere" position="top-40 right-20" delay={1} size={60} />
      <FloatingShape shape="pyramid" position="bottom-40 left-20" delay={1.5} size={70} />
      <FloatingShape shape="cube" position="bottom-20 right-10" delay={2} size={50} />
      <FloatingShape shape="sphere" position="top-1/3 left-1/3" delay={2.5} size={40} />

      {/* Additional Floating Elements */}
      <FloatingElement position="top-32 left-32" delay={1} size={45} shape="circle" />
      <FloatingElement position="top-60 right-32" delay={2.5} size={35} shape="square" />
      <FloatingElement position="bottom-32 left-1/2" delay={3} size={40} shape="triangle" />
      <FloatingElement position="top-1/2 right-20" delay={1.8} size={30} shape="circle" />

      {/* Awesome 3D Coding Elements */}
      <CodingElements variant="default" />

      {/* Animated Coder Character - with higher z-index */}
      <div className="relative z-30">
        <AnimatedCoder position="right" />
      </div>
      {/* Subtle background elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-900 dark:to-purple-900 blue:from-blue-800 blue:to-purple-800 rounded-full opacity-30"></div>
        <div className="absolute bottom-20 right-10 w-24 h-24 bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-900 dark:to-pink-900 blue:from-purple-800 blue:to-pink-800 rounded-full opacity-20"></div>
      </div>

      {/* Awesome Code Editor Background */}
      <div className="absolute top-1/4 right-1/4 w-80 h-64 bg-gray-900 dark:bg-gray-800 blue:bg-blue-900 rounded-lg shadow-2xl opacity-20">
        <div className="bg-gray-800 dark:bg-gray-700 blue:bg-blue-800 px-4 py-2 rounded-t-lg flex items-center space-x-2">
          <div className="w-3 h-3 bg-red-500 rounded-full"></div>
          <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
          <div className="w-3 h-3 bg-green-500 rounded-full"></div>
          <span className="text-gray-400 text-sm ml-2">developer.js</span>
        </div>
        <div className="p-4 font-mono text-xs">
          <CodeTyping code="const developer = {" delay={1} />
          <CodeTyping code="  name: 'Hania Imtisal'," delay={2} />
          <CodeTyping code="  role: 'Software Engineer'," delay={3} />
          <CodeTyping code="  stack: ['MERN', 'Node.js', 'React']," delay={4} />
          <CodeTyping code="  experience: '1.5+ years'" delay={5} />
          <CodeTyping code="};" delay={6} />
        </div>
      </div>

      {/* Main content with proper z-index */}
      <div className="relative z-10 min-h-screen px-6 py-8 md:py-12 flex items-center justify-center">
        <div className="max-w-4xl mx-auto text-center">
          {/* Greeting with regular text */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="mb-6"
          >
            <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 blue:text-blue-200 font-medium">
             Hey, I'm 
            </p>
          </motion.div>

          {/* Main headline with awesome 3D effect */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="mb-6"
          >
            <motion.h1 
              className="text-3xl md:text-5xl lg:text-6xl font-bold leading-tight text-gray-900 dark:text-white blue:text-blue-50"
              style={{
                transformStyle: "preserve-3d",
              }}
              animate={{
                rotateX: [0, 5, 0],
                rotateY: [0, -5, 0],
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <motion.span 
                className="block"
                style={{
                  transform: `translateZ(20px)`,
                }}
              >
                Hania Imtisal
              </motion.span>
              {/* <motion.span 
                className="block"
                style={{
                  transform: `translateZ(40px)`,
                }}
              >
                Software Engineer
              </motion.span> */}
              <motion.span 
                className="block text-xl md:text-2xl lg:text-3xl font-normal text-gray-600 dark:text-gray-300 blue:text-blue-200 mt-3"
                style={{
                  transform: `translateZ(10px)`,
                }}
              >
               Software Engineer
              </motion.span>
            </motion.h1>
          </motion.div>

          {/* Description with regular text */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            className="mb-8"
          >
            <p className="text-base md:text-lg text-gray-600 dark:text-gray-300 blue:text-blue-200 max-w-2xl mx-auto leading-relaxed">
              Experienced MERN stack developer with 1.5+ years of professional experience, working independently on complex projects. 
              Proven track record of delivering scalable solutions and enhancing user engagement through innovative real-time systems. 
              Proficient in JavaScript and Agile methodologies, with strong communication skills demonstrated in client interactions and technical presentations.
            </p>
          </motion.div>

          {/* Call to action with awesome 3D hover effect */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
          >
            <motion.a
              href="#contact"
              className="inline-block px-8 py-4 bg-gray-900 dark:bg-blue-600 blue:bg-blue-700 text-white font-semibold rounded-full hover:bg-gray-800 dark:hover:bg-blue-700 blue:hover:bg-blue-600 transition-colors duration-300 relative overflow-hidden group"
              whileHover={{ 
                scale: 1.05,
                rotateY: 5,
                rotateX: 5,
              }}
              whileTap={{ scale: 0.95 }}
              style={{
                transformStyle: "preserve-3d",
              }}
            >
              <motion.span
                className="relative z-10"
                style={{
                  transform: "translateZ(20px)",
                }}
              >
                Let's collaborate
              </motion.span>
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600"
                initial={{ x: "-100%" }}
                whileHover={{ x: 0 }}
                transition={{ duration: 0.3 }}
              />
            </motion.a>
          </motion.div>
        </div>
      </div>

      {/* Simple Animated Background Elements */}
      <motion.div
        className="absolute top-1/4left-1/4 w-32 h-32 bg-gradient-to-br from-blue-100 to-purple-100 dark:from-blue-800 dark:to-purple-800 blue:from-blue-700 blue:to-purple-700 rounded-full opacity-30"
        initial={{ scale: 0.8 }}
        animate={{ scale: [0.8, 1.2, 0.8] }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <motion.div
        className="absolute bottom-14 right-1/4 w-24 h-24 bg-gradient-to-br from-purple-100 to-pink-100 dark:from-purple-800 dark:to-pink-800 blue:from-purple-700 blue:to-pink-700 rounded-full opacity-30"
        initial={{ scale: 0.9 }}
        animate={{ scale: [0.9, 1.1, 0.9] }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1,
        }}
      />
    </div>
  );
};

export default Hero;
