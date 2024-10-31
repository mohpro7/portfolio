import React, { useEffect } from 'react';
import Header from './components/Header/Header';
import Introduction from './components/Introduction/Introduction';
import Skills from './components/Skills/Skills';
import '../src/components/Header/Header.scss';
import Portfolio from './components/Projects/Portfolio'

const App = () => {
  useEffect(() => {
    const header = document.querySelector('.header');
    const introductionSection = document.getElementById('introduction');
  
    const handleScroll = () => {
      // Récupère la hauteur de la section introduction et sa position par rapport au sommet de la page
      const sectionHeight = introductionSection.offsetHeight;
      const sectionTop = introductionSection.offsetTop;
  
      // Calcule la position actuelle du scroll (du haut de la fenêtre)
      const scrollPosition = window.scrollY;
  
      // Vérifie si 75% de la section est déjà cachée
      if (scrollPosition >= sectionTop + (sectionHeight * 0.75)) {
        header.classList.add('scrolled'); // Ajouter la classe pour changer la couleur du header
      } else {
        header.classList.remove('scrolled'); // Retirer la classe lorsque le scroll est en dehors de la zone
      }
    };
  
    // Ajouter l'écouteur de scroll
    window.addEventListener('scroll', handleScroll);
  
    // Nettoyage de l'écouteur de scroll pour éviter les fuites de mémoire
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="app">
      <Header />
      <Introduction />
      <Portfolio />
      <Skills />
    </div>
  );
};

export default App;
