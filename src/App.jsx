import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import Hero from './sections/Hero.jsx';
import About from './sections/About.jsx';
import Projects from './sections/Projects.jsx';
import Contact from './sections/Contact.jsx';
import ArrowButton3D from './components/ArrowButton/ArrowButton3D.jsx';

const sections = [
  { id: 'hero', component: <Hero /> },
  { id: 'about', component: <About /> },
  { id: 'projects', component: <Projects /> },
  { id: 'contact', component: <Contact /> },
];

const App = () => {
  const scrollRef = useRef(null);
  const [current, setCurrent] = useState(0);

  // Scroll to a section by index
  const scrollToSection = idx => {
    const container = scrollRef.current;
    if (container && container.children[idx]) {
      const isDesktop = window.innerWidth >= 768; // md breakpoint
      
      if (isDesktop) {
        // Desktop: horizontal scroll
        container.children[idx].scrollIntoView({ behavior: 'smooth', inline: 'start' });
      } else {
        // Mobile: vertical scroll
        container.children[idx].scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
      setCurrent(idx);
    }
  };

  // Listen for scroll to update current index
  const handleScroll = () => {
    const container = scrollRef.current;
    if (!container) return;
    
    // Check if we're on desktop (horizontal scroll) or mobile (vertical scroll)
    const isDesktop = window.innerWidth >= 768; // md breakpoint
    
    if (isDesktop) {
      const { scrollLeft, offsetWidth } = container;
      const idx = Math.round(scrollLeft / offsetWidth);
      setCurrent(idx);
    } else {
      const { scrollTop, offsetHeight } = container;
      const idx = Math.round(scrollTop / offsetHeight);
      setCurrent(Math.min(idx, sections.length - 1));
    }
  };

  return (
    <div className="relative w-screen md:h-screen min-h-screen md:overflow-hidden">
      {/* Desktop: Horizontal scroll, Mobile: Vertical scroll */}
      <div
        ref={scrollRef}
        className="w-screen md:h-screen min-h-screen flex md:flex-row flex-col md:overflow-x-auto md:overflow-y-hidden overflow-x-hidden overflow-y-auto snap-x md:snap-mandatory snap-y snap-mandatory scrollbar-thin scrollbar-thumb-pastelPurple scrollbar-track-pastelGray"
        style={{ scrollBehavior: 'smooth' }}
        tabIndex={0}
        onScroll={handleScroll}
      >
        {sections.map(({ id, component }) => (
          <section
            key={id}
            id={id}
            className={`w-screen md:h-screen min-h-screen flex-shrink-0 flex-grow-0 snap-center md:snap-start overflow-y-auto ${
              id === 'about' ? '' : 'flex items-center justify-center'
            }`}
          >
            {component}
          </section>
        ))}
      </div>

      {/* Progress Dots */}
      <div className="absolute left-1/2 bottom-8 -translate-x-1/2 flex gap-3 z-40">
        {sections.map((_, idx) => (
          <motion.div
            key={idx}
            className={`w-4 h-4 rounded-full border-2 border-pastelPurple bg-white ${current === idx ? 'bg-pastelPurple' : 'opacity-60'}`}
            animate={{ scale: current === idx ? 1.3 : 1, opacity: current === idx ? 1 : 0.6 }}
            transition={{ type: 'spring', stiffness: 300, damping: 20 }}
            onClick={() => scrollToSection(idx)}
            style={{ cursor: 'pointer' }}
            aria-label={`Go to section ${idx + 1}`}
          />
        ))}
      </div>

      {/* Navigation Arrows - Desktop only */}
      {current > 0 && (
        <div className="hidden md:block">
          <ArrowButton3D direction="left" onClick={() => scrollToSection(current - 1)} />
        </div>
      )}
      {current < sections.length - 1 && (
        <div className="hidden md:block">
          <ArrowButton3D direction="right" onClick={() => scrollToSection(current + 1)} />
        </div>
      )}
    </div>
  );
};

export default App; 