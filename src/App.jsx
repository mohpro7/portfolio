import React, { useEffect, useState } from 'react';
import './global.scss';
import Header from './components/Header/Header';
import '../src/components/Header/Header.scss';
import Introduction from './components/Introduction/Introduction';
import Portfolio from './components/Projects/Portfolio';
import Skills from './components/Skills/Skills';
import Contact from './components/ContactForm/Contact';
import Footer from './components/footer/Footer';

const App = () => {
  const [activeSection, setActiveSection] = useState('');
  const [isInitialLoad, setIsInitialLoad] = useState(true);

  // Partie 1 : Gestion du Header qui change de couleur lors du scroll
  useEffect(() => {
    const header = document.querySelector('.header');
    const introductionSection = document.getElementById('introduction');
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          if (!introductionSection) return;

          const sectionHeight = introductionSection.offsetHeight;
          const sectionTop = introductionSection.offsetTop;
          const scrollPosition = window.scrollY;

          if (scrollPosition >= sectionTop + sectionHeight * 0.85) {
            header.classList.add('scrolled');
          } else {
            header.classList.remove('scrolled');
          }

          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Partie 2 : Détection de la section active
  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('section');
      let currentSection = '';

      sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        if (window.scrollY >= sectionTop - 200) {
          currentSection = section.id;
        }
      });

      setActiveSection(currentSection);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Partie 3 : Charger progressivement les autres sections après un certain délai
  useEffect(() => {
    const timer = setTimeout(() => setIsInitialLoad(false), 1000); // Charger les autres sections après 1 seconde
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="app">
      <Header activeSection={activeSection} />
      <Introduction />
      {!isInitialLoad && (
        <>
          <Portfolio />
          <Skills />
          <Contact />
        </>
      )}
      <Footer />
    </div>
  );
};

export default App;
