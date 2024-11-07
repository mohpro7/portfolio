import React, { Suspense } from 'react';
import './Introduction.scss';

// Importer l'icône de manière lazy avec React.lazy()
const MdOutlineArrowCircleDown = React.lazy(() =>
  import('react-icons/md').then((module) => ({ default: module.MdOutlineArrowCircleDown }))
);

const Introduction = () => (
  <section id="introduction" className="introduction">
    <div className="content-wrapper">
      <h2>Besoin d'un Développeur<br /> Web ?</h2>
      <hr className="custom-hr" />
      <p>Développeur full stack en apprentissage, passionné par la technologie, 
        avec de solides compétences de base et toujours à la recherche d'améliorations 
        et d'apprentissage continu pour créer des solutions modernes.</p>

      {/* Utilisation de Suspense pour charger l'icône */}
      <a href="#portfolio" aria-label="Aller au portfolio">
        <Suspense fallback={<div>Chargement...</div>}>
          <MdOutlineArrowCircleDown color="#F04A4E" size={100} className="down-arrow" />
        </Suspense>
      </a>
    </div>
  </section>
);

export default Introduction;
