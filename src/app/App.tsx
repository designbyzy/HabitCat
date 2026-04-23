import { useEffect, useState } from 'react';
import Home from '../imports/Home/Home';
import Mission from '../imports/Mission/Mission';
import Problem from '../imports/Problem/Problem';
import Solution from '../imports/Solution/Solution';
import Persona from '../imports/Persona/Persona';
import ExperienceMapEnhanced from './components/ExperienceMapEnhanced';
import Development from './components/Development';
import Prototype from './components/Prototype';

export default function App() {
  const [activeSection, setActiveSection] = useState(0);
  const [scrollProgress, setScrollProgress] = useState(0);

  const sections = [
    { id: 'home', label: 'Home', Component: Home },
    { id: 'mission', label: 'Mission', Component: Mission },
    { id: 'problem', label: 'Problem', Component: Problem },
    { id: 'persona', label: 'Persona', Component: Persona },
    { id: 'solution', label: 'Solution', Component: Solution },
    { id: 'experience-map', label: 'Experience Map', Component: ExperienceMapEnhanced },
    { id: 'development', label: 'Development', Component: Development },
    { id: 'prototype', label: 'Prototype', Component: Prototype },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight / 2;
      const currentSection = sections.findIndex((_, index) => {
        const element = document.getElementById(sections[index].id);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          return scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight;
        }
        return false;
      });
      if (currentSection !== -1) {
        setActiveSection(currentSection);
      }

      // Calculate scroll progress
      const windowHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrolled = (window.scrollY / windowHeight) * 100;
      setScrollProgress(scrolled);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial call
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (index: number) => {
    const element = document.getElementById(sections[index].id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="relative">
      {/* Scroll Progress Bar */}
      <div className="fixed top-0 left-0 w-full h-2 bg-[#f464b2] bg-opacity-20 z-[100]">
        <div
          className="h-full bg-[#fdfc60] transition-all duration-150 ease-out"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      {/* Floating Navigation */}
      <nav className="fixed top-6 left-1/2 -translate-x-1/2 z-50 bg-[#fdfc60] rounded-full shadow-[0px_8px_24px_rgba(0,0,0,0.2)] px-4 py-2 flex gap-2 max-w-[95vw] overflow-x-auto">
        {sections.map((section, index) => (
          <button
            key={section.id}
            onClick={() => scrollToSection(index)}
            className={`px-4 py-2 rounded-full font-['Plus_Jakarta_Sans:Bold',sans-serif] font-bold text-xs whitespace-nowrap transition-all duration-300 ${
              activeSection === index
                ? 'bg-[#f464b2] text-[#fdfc60] scale-110 shadow-lg'
                : 'bg-transparent text-[#f464b2] hover:bg-[#f464b2] hover:text-[#fdfc60] hover:scale-105'
            }`}
          >
            {section.label}
          </button>
        ))}
      </nav>

      {/* Back to Top Button */}
      {scrollProgress > 10 && (
        <button
          onClick={() => scrollToSection(0)}
          className="fixed bottom-8 left-8 z-50 bg-[#fdfc60] text-[#f464b2] w-14 h-14 rounded-full shadow-lg hover:scale-110 transition-all duration-300 flex items-center justify-center font-bold text-2xl"
          style={{
            opacity: 0,
            animation: 'fadeIn 0.3s ease-out forwards'
          }}
        >
          ↑
        </button>
      )}

      {/* Scroll Indicator (only on first section) */}
      {activeSection === 0 && (
        <div className="fixed bottom-8 left-1/2 -translate-x-1/2 z-40 flex flex-col items-center gap-2 animate-bounce">
          <p className="font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium text-[#fdfc60] text-sm">
            Scroll to explore
          </p>
          <div className="text-[#fdfc60] text-2xl">↓</div>
        </div>
      )}

      {/* Cat Paw Decorations */}
      <div className="fixed bottom-24 right-8 text-6xl opacity-20 pointer-events-none z-40 animate-bounce" style={{ animationDuration: '3s' }}>
        🐾
      </div>
      <div className="fixed top-1/3 left-8 text-5xl opacity-10 pointer-events-none z-40 animate-pulse" style={{ animationDuration: '4s' }}>
        🐾
      </div>

      {/* Sections */}
      {sections.map((section, index) => (
        <section
          key={section.id}
          id={section.id}
          className="min-h-screen relative"
          style={{
            opacity: 0,
            animation: `fadeIn 0.8s ease-out ${index * 0.1}s forwards`,
          }}
        >
          <section.Component />
        </section>
      ))}

      <style>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        html {
          scroll-behavior: smooth;
        }

        /* Hide scrollbar for navigation */
        nav::-webkit-scrollbar {
          display: none;
        }
        nav {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </div>
  );
}