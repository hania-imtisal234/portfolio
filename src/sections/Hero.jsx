import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';
import { AnimatedCoder } from '../components';
import { personalInfo, socialLinks } from '../constants/index';

const iconMap = { FaLinkedin, FaGithub, FaEnvelope };

// Initials avatar shown until /public/profile.jpg is added
const initials = personalInfo.name
  .split(' ')
  .map((n) => n[0])
  .join('');
const fallbackAvatar = `data:image/svg+xml,${encodeURIComponent(
  `<svg xmlns="http://www.w3.org/2000/svg" width="128" height="128"><rect width="128" height="128" fill="#111827"/><text x="50%" y="50%" dy=".35em" text-anchor="middle" font-family="Arial, sans-serif" font-size="44" fill="#ffffff">${initials}</text></svg>`
)}`;

const Hero = () => {
  const [imgSrc, setImgSrc] = useState(personalInfo.photo);

  return (
    <section className="relative w-full pt-36 pb-20 px-6">
      <AnimatedCoder position="right" />
      <div className="max-w-3xl mx-auto flex flex-col items-center text-center">
        <motion.img
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          src={imgSrc}
          alt={personalInfo.name}
          onError={() => setImgSrc(fallbackAvatar)}
          className="w-28 h-28 md:w-32 md:h-32 rounded-full object-cover shadow-md ring-1 ring-gray-200 mb-6"
        />

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-lg text-gray-500"
        >
          Hey, I'm {personalInfo.name.split(' ')[0]} — {personalInfo.title.toLowerCase()}
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-2 text-4xl md:text-5xl font-bold text-gray-900 tracking-tight"
        >
          {personalInfo.headline}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-5 text-base md:text-lg text-gray-600 leading-relaxed w-full"
        >
          {personalInfo.intro}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-8 flex items-center gap-4"
        >
          <a
            href="#contact"
            className="px-6 py-3 bg-gray-900 text-white text-sm font-medium rounded-full hover:bg-gray-700 transition-colors"
          >
            Let's talk
          </a>
          <div className="flex items-center gap-3">
            {socialLinks.map((link) => {
              const Icon = iconMap[link.iconType] || FaEnvelope;
              return (
                <a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={link.name}
                  className="w-10 h-10 flex items-center justify-center rounded-full border border-gray-200 text-gray-600 hover:text-gray-900 hover:border-gray-400 transition-colors"
                >
                  <Icon size={16} />
                </a>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
