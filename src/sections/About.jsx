import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  CodingElements, 
  NeuralNetwork, 
  AnimatedCoder
} from '../components';
import { skills } from '../constants/index';
import { 
  SiJavascript, 
  SiTypescript, 
  SiPython, 
  SiCplusplus,
  SiReact, 
  SiNodedotjs, 
  SiExpress, 
  SiNestjs,
  SiMongodb, 
  SiMysql, 
  SiPostgresql,
  SiDocker, 
  SiGit, 
  SiRedux,
  SiJira,
  SiKubernetes
} from 'react-icons/si';
import { FaCode, FaRobot } from 'react-icons/fa';

const getSkillIcon = (iconType) => {
  const iconMap = {
    SiJavascript,
    SiTypescript,
    SiPython,
    SiCplusplus,
    SiReact,
    SiNodedotjs,
    SiExpress,
    SiNestjs,
    SiMongodb,
    SiMysql,
    SiPostgresql,
    SiDocker,
    SiGit,
    SiRedux,
    SiJira,
    SiKubernetes,
    FaCode,
    FaRobot
  };
  return iconMap[iconType] || FaCode;
};

const About = () => {
  const [hoveredSkill, setHoveredSkill] = useState(null);

  return (
    <div 
      className="w-full min-h-screen bg-white dark:bg-gray-900 blue:bg-blue-950 relative overflow-y-auto theme-transition scrollbar-hide"
      style={{
        scrollbarWidth: 'none',
        msOverflowStyle: 'none',
        WebkitScrollbar: { display: 'none' }
      }}
    >
      {/* Coding Elements */}
      <CodingElements />
      <NeuralNetwork />
      {/* Animated Coder Character */}
      <AnimatedCoder />

      {/* Main Content Container with higher z-index */}
      <div className="relative z-20 min-h-screen py-8 md:py-12">
        <div className="max-w-5xl mx-auto px-6 w-full">
          {/* Section Header with wavy text */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-center mb-12"
          >
           
            <h2 className="text-2xl md:text-3xl text-blue-600 dark:text-blue-400 blue:text-blue-300 font-semibold mb-4">
              My Career Journey
            </h2>
          </motion.div>

          
          {/* Experience Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            className="mb-8"
          >
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white blue:text-blue-50 mb-6">Experience</h3>
            
            {/* TechVerx Experience */}
            <motion.div 
              className="bg-white dark:bg-gray-800 blue:bg-blue-900 rounded-xl p-6 mb-6 shadow-lg border border-gray-200 dark:border-gray-700 blue:border-blue-800"
              whileHover={{ scale: 1.02, rotateY: 2 }}
              style={{ transformStyle: "preserve-3d" }}
            >
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                <div>
                  <h4 className="text-lg font-bold text-gray-900 dark:text-white blue:text-blue-50">Software Engineer</h4>
                  <a 
                    href="https://www.techverx.com/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-blue-600 dark:text-blue-400 blue:text-blue-300 font-semibold underline hover:text-blue-800"
                  >
                    TECHVERX
                  </a>
                </div>
                <span className="text-sm text-gray-600 dark:text-gray-400 blue:text-blue-400 bg-gray-100 dark:bg-gray-700 blue:bg-blue-800 px-3 py-1 rounded-full mt-2 md:mt-0">
                  July 2024 - March 2025
                </span>
              </div>
              <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300 blue:text-blue-200">
                <li>• Collaborated with the Node.js lead on end-to-end MERN projects, taking over a critical project to ensure 100% on-time delivery after a key developer's departure</li>
                <li>• Led 5+ international client calls and independently managed 1 client, providing 3+ website demos, offering technical insights, and aligning project objectives</li>
                <li>• Constructed 2+ responsive SPAs using dynamic routing strategies, built 20+ reusable UI components</li>
                <li>• Streamlined application by using Redux for state management, debouncing for performance, and eliminating prop drilling</li>
                <li>• Developed and maintained 10+ secure RESTful APIs and 6+ CRON jobs to automate backend tasks. Improved response times by 25% using async/await and reduced API calls by 30% through data seeding, batching, and queuing</li>
                <li>• Built scalable Node.js backends using Express.js and RESTful APIs; implemented middleware for authentication, aggregation pipelines and custom mappers, improving system performance across 7+ high-demand client-side features</li>
                <li>• Containerized backend services using Docker to streamline development and deployment workflows across staging and production environments</li>
                <li>• Collaborated in 7+ technical meetings, providing backend solutions that resolved blockers and accelerated project delivery</li>
                <li>• Played a key role in making a POS frontend within 3 days, contributing to the team's ability to meet project deadlines consistently</li>
              </ul>
            </motion.div>

            {/* Emerald Labs Experience */}
                  <motion.div 
                    className="bg-white dark:bg-gray-800 blue:bg-blue-900 rounded-xl p-6 shadow-lg border border-gray-200 dark:border-gray-700 blue:border-blue-800"
                    whileHover={{ scale: 1.02, rotateY: 2 }}
                    style={{ transformStyle: "preserve-3d" }}
                  >
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                    <div>
                      <h4 className="text-lg font-bold text-gray-900 dark:text-white blue:text-blue-50">Software Engineer Intern</h4>
                      <a 
                      href="https://www.emerald-labs.com/" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-blue-600 dark:text-blue-400 blue:text-blue-300 font-semibold underline hover:text-blue-800"
                      >
                      EMERALD LABS
                      </a>
                    </div>
                    <span className="text-sm text-gray-600 dark:text-gray-400 blue:text-blue-400 bg-gray-100 dark:bg-gray-700 blue:bg-blue-800 px-3 py-1 rounded-full mt-2 md:mt-0">
                      June 2023 - August 2023
                    </span>
                    </div>
                    <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300 blue:text-blue-200">
                    <li>• Independently delivered a complete, production-ready project using the MERN stack as part of my internship capstone, handling the entire development lifecycle from planning to deployment</li>
                    <li>• Led development efforts among the intern team, proactively designing and implementing responsive UI components with React.js, Hooks, and Context API to meet project requirements</li>
                    <li>• Took initiative to handle complex tasks and contributed to key deliverables, resulting in improved project outcomes and recognition from supervisors</li>
                    </ul>
                  </motion.div>
                  </motion.div>

                  {/* Education Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
            className="mb-8"
          >
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white blue:text-blue-50 mb-6">Education</h3>
            <motion.div 
              className="bg-white dark:bg-gray-800 blue:bg-blue-900 rounded-xl p-6 shadow-lg border border-gray-200 dark:border-gray-700 blue:border-blue-800"
              whileHover={{ scale: 1.02, rotateY: 2 }}
              style={{ transformStyle: "preserve-3d" }}
            >
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                <div>
                  <h4 className="text-lg font-bold text-gray-900 dark:text-white blue:text-blue-50">BS (Computer Science)</h4>
                  <p className="text-blue-600 dark:text-blue-400 blue:text-blue-300 font-semibold">National University of Computer and Emerging Sciences</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400 blue:text-blue-400">Lahore</p>
                </div>
              </div>
              <div className="text-sm text-gray-700 dark:text-gray-300 blue:text-blue-200">
                <p className="font-semibold mb-2">Relevant Coursework:</p>
                <p className="leading-relaxed">Programming Fundamentals, OOP, DBMS, Operating Systems, Data Structures & Algorithms, AI, Software Testing, Communication & Presentation Skills, Computer Networks, Web Programming, Blockchain, Information Security, Computer Vision, Numerical Computing, Cloud Computing</p>
              </div>
            </motion.div>
          </motion.div>

          {/* Technical Skills Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8, ease: "easeOut" }}
            className="mb-8"
          >
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white blue:text-blue-50 mb-6">Technical Skills</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
              {skills.map((skill, index) => (
                  <motion.div
                    key={skill.name}
                    className="relative group"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 1.0 + index * 0.05 }}
                    onHoverStart={() => setHoveredSkill(skill.name)}
                    onHoverEnd={() => setHoveredSkill(null)}
                    whileHover={{ 
                      scale: 1.08,
                      y: -8,
                      rotateY: 5,
                      rotateX: 5,
                    }}
                    style={{ transformStyle: "preserve-3d" }}
                  >
                    <motion.div 
                      className="bg-white dark:bg-gray-800 blue:bg-blue-900 rounded-xl p-4 text-center shadow-lg border border-gray-200 dark:border-gray-700 blue:border-blue-800 transition-all duration-300 overflow-hidden"
                      style={{ transform: "translateZ(15px)" }}
                      animate={{
                        boxShadow: hoveredSkill === skill.name 
                          ? "0 25px 50px -12px rgba(0, 0, 0, 0.25), 0 0 0 1px rgba(59, 130, 246, 0.3), 0 0 20px rgba(59, 130, 246, 0.2)" 
                          : "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
                        borderColor: hoveredSkill === skill.name 
                          ? "rgba(59, 130, 246, 0.5)" 
                          : "transparent"
                      }}
                      transition={{ duration: 0.3 }}
                    >
                      <motion.div 
                        className="text-2xl mb-2 flex items-center justify-center h-8"
                        animate={{
                          scale: hoveredSkill === skill.name ? 1.2 : 1,
                          rotateY: hoveredSkill === skill.name ? 15 : 0,
                        }}
                        transition={{ duration: 0.3, type: "spring", stiffness: 300 }}
                      >
                      {(() => {
                        const IconComponent = getSkillIcon(skill.iconType);
                        return <IconComponent style={{ color: skill.color }} />;
                      })()}
                    </motion.div>
                    <motion.p 
                      className="text-sm font-medium text-gray-700 dark:text-gray-300 blue:text-blue-200"
                      style={{ transform: "translateZ(5px)" }}
                    >
                      {skill.name}
                    </motion.p>
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Contact CTA Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.0, ease: "easeOut" }}
            className="text-center"
          >
            <motion.div
              className=" dark:from-blue-900 dark:to-purple-900 blue:from-blue-800 blue:to-purple-800 rounded-2xl p-6 border border-blue-200 dark:border-blue-700 blue:border-blue-600"
              whileHover={{ scale: 1.02, rotateY: 2 }}
              style={{ transformStyle: "preserve-3d" }}
            >
              <h4 className="text-lg font-bold text-white-900 dark:text-white blue:text-blue-50 mb-2">
                Let's Build Something Amazing Together
              </h4>
              <p className="text-gray-700 dark:text-gray-300 blue:text-blue-200 mb-4">
                Ready to discuss your next project or opportunity?
              </p>
              <motion.button
                className="bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 blue:bg-blue-400 blue:hover:bg-blue-500 text-white font-semibold py-3 px-6 rounded-xl transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => {
                  // This will scroll to contact section
                  const contactSection = document.querySelector('[data-section="contact"]');
                  if (contactSection) {
                    contactSection.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
              >
                Get In Touch
              </motion.button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default About; 