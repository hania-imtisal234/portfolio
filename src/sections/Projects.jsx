import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { WavyText, CodingElements, FloatingElement } from '../components';
import { projects } from '../constants/index';
import { 
  FaBrain, 
  FaLink, 
  FaRobot, 
  FaLaptopCode, 
  FaGlobe, 
  FaCog, 
  FaClipboardList,
  FaBriefcase 
} from 'react-icons/fa';

const getProjectIcon = (category) => {
  const iconConfig = {
    'Mental Health': { icon: FaBrain, color: '#8B5CF6' }, // Purple
    'Blockchain': { icon: FaLink, color: '#F59E0B' }, // Amber
    'Machine Learning': { icon: FaRobot, color: '#10B981' }, // Emerald
    'Full-Stack': { icon: FaLaptopCode, color: '#3B82F6' }, // Blue
    'Web Development': { icon: FaGlobe, color: '#06B6D4' }, // Cyan
    'System Programming': { icon: FaCog, color: '#6B7280' }, // Gray
    'Productivity': { icon: FaClipboardList, color: '#EF4444' }, // Red
  };
  return iconConfig[category] || { icon: FaBriefcase, color: '#6B7280' };
};

const ProjectCard = ({ project, index }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="group cursor-pointer h-full"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <motion.div 
        className="bg-gray-50 dark:bg-gray-800 blue:bg-blue-900 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-200 dark:border-gray-700 blue:border-blue-800 h-full flex flex-col"
        whileHover={{ 
          scale: 1.02,
        }}
        transition={{ duration: 0.2 }}
      >
        {/* Project Image with 3D effect */}
        <div className="relative h-32 bg-gradient-to-br from-blue-100 to-purple-100 dark:from-gray-600 dark:to-gray-700 blue:from-blue-700 blue:to-purple-800 overflow-hidden">
          <motion.div 
            className="absolute inset-0 bg-gradient-to-br from-blue-200 to-purple-200 dark:from-blue-800 dark:to-purple-800 blue:from-blue-600 blue:to-purple-700 opacity-70"
            animate={{
              scale: isHovered ? 1.1 : 1,
            }}
            transition={{ duration: 0.3 }}
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <motion.div 
              className="text-4xl"
              animate={{
                rotateY: isHovered ? 360 : 0,
                scale: isHovered ? 1.2 : 1,
              }}
              transition={{ duration: 0.5 }}
            >
              {(() => {
                const { icon: IconComponent, color } = getProjectIcon(project.category);
                return <IconComponent style={{ color }} />;
              })()}
            </motion.div>
          </div>
          {/* Category badge */}
          <motion.div className="absolute top-4 left-4">
            <span className="px-3 py-1 bg-white dark:bg-gray-600 blue:bg-blue-700 bg-opacity-95 dark:bg-opacity-95 blue:bg-opacity-95 text-sm font-medium text-gray-800 dark:text-gray-100 blue:text-blue-100 rounded-full shadow-sm">
              {project.category}
            </span>
          </motion.div>
        </div>
        
        {/* Project Content with 3D layers */}
        <div className="p-4 flex flex-col flex-grow">
          <motion.h3 
            className="text-lg font-bold text-gray-900 dark:text-white blue:text-blue-50 mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 blue:group-hover:text-blue-300 transition-colors"
          >
            {project.title}
          </motion.h3>
          <motion.p 
            className="text-gray-600 dark:text-gray-300 blue:text-blue-200 text-sm leading-relaxed mb-4 flex-grow"
          >
            {project.description}
          </motion.p>
          
          {/* Tags with staggered animation */}
          <div className="flex flex-wrap gap-2 mb-4">
            {project.tags.map((tag, tagIndex) => (
              <motion.span
                key={tagIndex}
                className="px-2 py-1 bg-gray-200 dark:bg-gray-600 blue:bg-blue-700 text-gray-700 dark:text-gray-200 blue:text-blue-100 text-xs rounded-full border border-gray-300 dark:border-gray-500 blue:border-blue-600"
                whileHover={{ 
                  scale: 1.1,
                  backgroundColor: "#3b82f6",
                  color: "white",
                  borderColor: "#3b82f6",
                }}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ 
                  duration: 0.3, 
                  delay: (index * 0.1) + (tagIndex * 0.05) 
                }}
              >
                {tag}
              </motion.span>
            ))}
          </div>

          {/* Project Links */}
          <div className="flex gap-2 mt-auto">
            {project.github && (
              <motion.a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="px-3 py-1 bg-gray-900 dark:bg-gray-600 blue:bg-blue-700 text-white text-xs rounded-full hover:bg-gray-700 dark:hover:bg-gray-500 blue:hover:bg-blue-600 transition-colors flex items-center gap-1"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z" clipRule="evenodd" />
                </svg>
                GitHub
              </motion.a>
            )}
            {project.liveDemo && (
              <motion.a
                href={project.liveDemo}
                target="_blank"
                rel="noopener noreferrer"
                className="px-3 py-1 bg-blue-600 dark:bg-blue-500 blue:bg-blue-600 text-white text-xs rounded-full hover:bg-blue-500 dark:hover:bg-blue-400 blue:hover:bg-blue-500 transition-colors flex items-center gap-1"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
                Demo
              </motion.a>
            )}
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

const Projects = () => (
  <div 
      className="w-full h-full bg-white dark:bg-gray-900 blue:bg-blue-950 relative overflow-y-auto theme-transition scrollbar-hide"
      style={{
        scrollbarWidth: 'none',
        msOverflowStyle: 'none',
        WebkitScrollbar: { display: 'none' }
      }}
    >
          {/* 3D Floating Background Elements */}
      <FloatingElement position="top-20 left-10" delay={0} size={60} />
      <FloatingElement position="top-40 right-20" delay={2} size={40} />
      <FloatingElement position="bottom-40 left-20" delay={4} size={50} />
      <FloatingElement position="bottom-20 right-10" delay={6} size={30} />
      <FloatingElement position="top-1/3 left-1/3" delay={8} size={35} />

      {/* Coding Elements */}
      <CodingElements />

      {/* Main Content Container with higher z-index */}
    <div className="relative z-20 w-full py-8 md:py-12">
      <div className="max-w-7xl mx-auto px-6 w-full">
        {/* Section Header with wavy text */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center mb-6 pt-8"
        >
          <WavyText 
            text="Tiny fraction of my work"
            className="text-xl md:text-2xl lg:text-3xl font-bold text-blue-600 dark:text-blue-400 blue:text-blue-300 mb-3"
            delay={0.2}
          />
          <p className="text-sm md:text-base text-gray-600 dark:text-gray-300 blue:text-blue-200 max-w-2xl mx-auto leading-relaxed">
            Showcasing my journey in software development - from mental health platforms to machine learning systems, each project represents my passion for creating meaningful digital solutions.
          </p>
        </motion.div>

        {/* Projects Grid with 3D effects */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} index={index} />
          ))}
        </div>

        {/* Call to Action with 3D effect */}
        {/* <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          className="text-center"
        >
          <WavyText 
            text="There's more work to explore. Feel free to get in touch to check it out."
            className="text-gray-600 dark:text-gray-300 blue:text-blue-200 mb-4"
            delay={0.6}
          />
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
              View case study
            </motion.span>
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600"
              initial={{ x: "-100%" }}
              whileHover={{ x: 0 }}
              transition={{ duration: 0.3 }}
            />
          </motion.a>
        </motion.div> */}
      </div>
    </div>
  </div>
);

export default Projects; 