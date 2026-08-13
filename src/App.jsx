import React, { useEffect, useState } from 'react';
import Hero from './sections/Hero.jsx';
import About from './sections/About.jsx';
import Projects from './sections/Projects.jsx';
import Contact from './sections/Contact.jsx';
import { CodingElements } from './components';
import { navigationItems, personalInfo } from './constants/index';

const App = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <div className="min-h-screen w-full bg-white text-gray-900 overflow-x-hidden">
      {/* Subtle coding-themed background, fixed behind all content */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <CodingElements />
      </div>

      {/* Sticky minimal nav */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? 'bg-white/90 backdrop-blur-sm border-b border-gray-100 py-3' : 'bg-transparent py-5'
        }`}
      >
        <nav className="max-w-3xl mx-auto px-6 flex items-center justify-between">
          <a href="#top" className="font-semibold tracking-tight text-gray-900">
            {personalInfo.name}
          </a>
          <ul className="flex items-center gap-5 text-sm text-gray-600">
            {navigationItems.map((item) => (
              <li key={item.name}>
                <a href={item.href} className="hover:text-blue-600 transition-colors">
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </header>

      <main id="top" className="relative z-10">
        <Hero />
        <About />
        <Projects />
        <Contact />
      </main>
    </div>
  );
};

export default App;
