import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { WavyText, CodingElements, FloatingElement } from '../components';
import { socialLinks } from '../constants/index';
import { FaLinkedin, FaEnvelope, FaGithub, FaInstagram, FaCheckCircle, FaExclamationTriangle } from 'react-icons/fa';

const getSocialIcon = (iconType) => {
  const iconMap = {
    FaLinkedin,
    FaEnvelope,
    FaGithub,
    FaInstagram
  };
  return iconMap[iconType] || FaEnvelope;
};

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [focusedField, setFocusedField] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null); // 'success', 'error', or null

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    // For Netlify Forms, we can use the native form submission
    // But we'll enhance it with our state management
    const form = e.target;
    const formData = new FormData(form);
    
    // Ensure form-name is present
    formData.set('form-name', 'contact');
    
    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: new URLSearchParams(formData).toString()
    })
    .then(response => {
      if (response.ok) {
        setSubmitStatus('success');
        setFormData({ name: '', email: '', message: '' });
      } else {
        throw new Error(`HTTP ${response.status}: ${response.statusText}`);
      }
    })
    .catch(error => {
      console.error('Form submission error:', error);
      setSubmitStatus('error');
    })
    .finally(() => {
      setIsSubmitting(false);
    });
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
    // Clear any previous status when user starts typing
    if (submitStatus) {
      setSubmitStatus(null);
    }
  };

  return (
    <div className="w-full md:h-full min-h-screen bg-white dark:bg-gray-900 blue:bg-blue-950 relative md:overflow-hidden overflow-y-auto theme-transition">
      {/* 3D Floating Background Elements */}
      <FloatingElement position="top-20 left-10" delay={0} size={60} shape="circle" />
      <FloatingElement position="top-40 right-20" delay={2} size={40} shape="square" />
      <FloatingElement position="bottom-40 left-20" delay={4} size={50} shape="triangle" />
      <FloatingElement position="bottom-20 right-10" delay={6} size={30} shape="circle" />
      <FloatingElement position="top-1/3 left-1/3" delay={8} size={35} shape="square" />

      {/* Coding Elements */}
      <CodingElements />

      {/* Main Content Container with higher z-index */}
      <div className="relative z-20 md:h-full min-h-screen flex items-center justify-center py-8 md:py-0">
        <div className="max-w-4xl mx-auto px-6 w-full">
          {/* Section Header with wavy text */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-center mb-6"
          >
            <WavyText 
              text="Think we vibe?"
              className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white blue:text-blue-50 mb-3"
              delay={0.2}
            />
            <WavyText 
              text="Get in touch"
              className="text-xl md:text-2xl font-bold text-gray-900 dark:text-white blue:text-blue-50"
              delay={0.4}
            />
          </motion.div>

          {/* Contact Form with 3D effects */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="max-w-2xl mx-auto mb-8"
            style={{ transformStyle: "preserve-3d" }}
          >
            <motion.form 
              onSubmit={handleSubmit}
              name="contact"
              method="POST"
              action="/"
              data-netlify="true"
              data-netlify-honeypot="bot-field"
              className="space-y-3 bg-white dark:bg-gray-800 blue:bg-blue-900 rounded-2xl p-5 shadow-2xl border border-gray-200 dark:border-gray-700 blue:border-blue-700"
              style={{ transform: "translateZ(20px)" }}
            >
              {/* Hidden inputs for Netlify */}
              <input type="hidden" name="form-name" value="contact" />
              <div style={{ display: 'none' }}>
                <label>
                  Don't fill this out if you're human: <input name="bot-field" />
                </label>
              </div>
              <motion.div
                whileHover={{ scale: 1.02 }}
                style={{ transformStyle: "preserve-3d" }}
              >
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 blue:text-blue-200 mb-2">
                  Name
                </label>
                <motion.input
                  id="name"
                  name="name"
                  type="text"
                  value={formData.name}
                  onChange={handleChange}
                  onFocus={() => setFocusedField('name')}
                  onBlur={() => setFocusedField(null)}
                  className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 blue:border-blue-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 bg-white dark:bg-gray-700 blue:bg-blue-800 text-gray-900 dark:text-white blue:text-blue-50"
                  placeholder="Your name"
                  required
                  style={{
                    transform: focusedField === 'name' ? "translateZ(10px)" : "translateZ(0px)",
                  }}
                  animate={{
                    scale: focusedField === 'name' ? 1.02 : 1,
                    borderColor: focusedField === 'name' ? "#3b82f6" : "#d1d5db",
                  }}
                />
              </motion.div>
              
              <motion.div
                whileHover={{ scale: 1.02 }}
                style={{ transformStyle: "preserve-3d" }}
              >
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 blue:text-blue-200 mb-2">
                  Email
                </label>
                <motion.input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  onFocus={() => setFocusedField('email')}
                  onBlur={() => setFocusedField(null)}
                  className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 blue:border-blue-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 bg-white dark:bg-gray-700 blue:bg-blue-800 text-gray-900 dark:text-white blue:text-blue-50"
                  placeholder="your@email.com"
                  required
                  style={{
                    transform: focusedField === 'email' ? "translateZ(10px)" : "translateZ(0px)",
                  }}
                  animate={{
                    scale: focusedField === 'email' ? 1.02 : 1,
                    borderColor: focusedField === 'email' ? "#3b82f6" : "#d1d5db",
                  }}
                />
              </motion.div>
              
              <motion.div
                whileHover={{ scale: 1.02 }}
                style={{ transformStyle: "preserve-3d" }}
              >
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 blue:text-blue-200 mb-2">
                  Message
                </label>
                <motion.textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  onFocus={() => setFocusedField('message')}
                  onBlur={() => setFocusedField(null)}
                  rows="3"
                  className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 blue:border-blue-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 resize-none bg-white dark:bg-gray-700 blue:bg-blue-800 text-gray-900 dark:text-white blue:text-blue-50"
                  placeholder="Tell me about your project..."
                  required
                  style={{
                    transform: focusedField === 'message' ? "translateZ(10px)" : "translateZ(0px)",
                  }}
                  animate={{
                    scale: focusedField === 'message' ? 1.02 : 1,
                    borderColor: focusedField === 'message' ? "#3b82f6" : "#d1d5db",
                  }}
                />
              </motion.div>
              
              <motion.button
                type="submit"
                disabled={isSubmitting}
                className={`w-full py-2 font-semibold rounded-lg transition-colors duration-300 relative overflow-hidden group ${
                  isSubmitting 
                    ? 'bg-gray-400 dark:bg-gray-600 blue:bg-blue-400 cursor-not-allowed' 
                    : 'bg-gray-900 dark:bg-blue-600 blue:bg-blue-700 hover:bg-gray-800 dark:hover:bg-blue-700 blue:hover:bg-blue-600'
                } text-white`}
                whileHover={!isSubmitting ? { 
                  scale: 1.02,
                  rotateY: 5,
                  rotateX: 5,
                } : {}}
                whileTap={!isSubmitting ? { scale: 0.98 } : {}}
                style={{
                  transformStyle: "preserve-3d",
                  transform: "translateZ(15px)",
                }}
              >
                <motion.span className="relative z-10">
                  {isSubmitting ? 'Sending...' : 'Send message'}
                </motion.span>
                {!isSubmitting && (
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600"
                    initial={{ x: "-100%" }}
                    whileHover={{ x: 0 }}
                    transition={{ duration: 0.3 }}
                  />
                )}
              </motion.button>

              {/* Status Messages */}
              {submitStatus === 'success' && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mt-4 p-3 bg-green-100 dark:bg-green-900 blue:bg-green-800 border border-green-300 dark:border-green-700 blue:border-green-600 rounded-lg text-green-800 dark:text-green-200 blue:text-green-100 text-sm flex items-center gap-2"
                >
                  <FaCheckCircle />
                  Message sent successfully! I'll get back to you soon.
                </motion.div>
              )}
              
              {submitStatus === 'error' && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mt-4 p-3 bg-red-100 dark:bg-red-900 blue:bg-red-800 border border-red-300 dark:border-red-700 blue:border-red-600 rounded-lg text-red-800 dark:text-red-200 blue:text-red-100 text-sm flex items-center gap-2"
                >
                  <FaExclamationTriangle />
                  <div>
                    <p className="font-semibold">Unable to send message</p>
                    <p>Please contact me directly via email or social media links below.</p>
                  </div>
                </motion.div>
              )}
            </motion.form>
          </motion.div>

          {/* Social Links with 3D effects */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            className="text-center"
          >
            <p className="text-gray-600 dark:text-gray-300 blue:text-blue-200 mb-6">
              Or connect with me on social media
            </p>
            <div className="flex justify-center space-x-8">
              {socialLinks.map((link, index) => (
                <motion.a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative bg-white dark:bg-gray-800 blue:bg-blue-900 p-4 rounded-full shadow-lg border border-gray-200 dark:border-gray-700 blue:border-blue-700 hover:shadow-xl transition-all duration-300"
                  whileHover={{ 
                    scale: 1.15,
                    y: -5,
                  }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ 
                    duration: 0.5, 
                    delay: 0.8 + index * 0.1,
                    type: "spring",
                    stiffness: 200,
                  }}
                  style={{
                    transformStyle: "preserve-3d",
                  }}
                >
                  <motion.span
                    className="block text-2xl flex items-center justify-center w-6 h-6"
                    whileHover={{
                      scale: 1.1,
                    }}
                    transition={{
                      duration: 0.2,
                    }}
                  >
                    {(() => {
                      const IconComponent = getSocialIcon(link.iconType);
                      return <IconComponent style={{ color: link.color, width: '100%', height: '100%' }} />;
                    })()}
                  </motion.span>
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
      <CodingElements />
    </div>
  );
};

export default Contact; 