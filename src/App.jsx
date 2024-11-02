import React, { useEffect, useState } from 'react';
import Header from './components/Header/Header';
import Introduction from './components/Introduction/Introduction';
import Skills from './components/Skills/Skills';
import Portfolio from './components/Projects/Portfolio';
import '../src/components/Header/Header.scss';
import Contact from './components/ContactForm/Contact';
import './global.scss';

const App = () => {
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    // Partie 1 : Gestion du Header qui change de couleur lors du scroll de 75% de la section Introduction
    const header = document.querySelector('.header');
    const introductionSection = document.getElementById('introduction');

    const handleScroll = () => {
      if (!introductionSection) return;

      const sectionHeight = introductionSection.offsetHeight;
      const sectionTop = introductionSection.offsetTop;
      const scrollPosition = window.scrollY;

      // Vérifie si 75% de la section est déjà cachée
      if (scrollPosition >= sectionTop + sectionHeight * 0.75) {
        header.classList.add('scrolled');
      } else {
        header.classList.remove('scrolled');
      }
    };

    window.addEventListener('scroll', handleScroll);

    // Nettoyage de l'écouteur pour éviter les fuites de mémoire
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    // Partie 2 : Détection de la section active pour changer la couleur des liens de navigation
    const sections = document.querySelectorAll('section');
    const options = {
      threshold: 0.4, // Détecte quand 60% de la section est visible
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    }, options);

    sections.forEach((section) => {
      observer.observe(section);
    });

    return () => {
      sections.forEach((section) => {
        observer.unobserve(section);
      });
    };
  }, []);

  return (
    <div className="app">
      <Header activeSection={activeSection} />
      <Introduction />
      <Portfolio />
      <Skills />
      <Contact />
    </div>
  );
};

export default App;
