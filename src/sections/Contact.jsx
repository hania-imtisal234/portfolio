import React from 'react';
import { motion } from 'framer-motion';
import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';
import { socialLinks, personalInfo } from '../constants/index';

const iconMap = { FaLinkedin, FaGithub, FaEnvelope };

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

const Contact = () => {
  return (
    <section id="contact" className="w-full py-20 px-6 border-t border-gray-100">
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.4 }}
          variants={fadeUp}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900">Get in touch</h2>
          <p className="mt-2 text-gray-500">
            Open to new opportunities — reach out at{' '}
            <a href={`mailto:${personalInfo.email}`} className="text-blue-700 underline decoration-blue-200 hover:decoration-blue-600">
              {personalInfo.email}
            </a>
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.4 }}
          variants={fadeUp}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mt-10 flex flex-col items-center gap-4"
        >
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
                  className="w-10 h-10 flex items-center justify-center rounded-full border border-gray-200 text-gray-600 hover:text-blue-600 hover:border-blue-300 transition-colors"
                >
                  <Icon size={16} />
                </a>
              );
            })}
          </div>
          <p className="text-xs text-gray-400">
            {personalInfo.location} · &copy; {new Date().getFullYear()} {personalInfo.name}
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
