import './Introduction.scss';
import { MdOutlineArrowCircleDown } from "react-icons/md";


const Introduction = () => (
  <section id="introduction" className="introduction">
    <div className="content-wrapper">
      <h2>Besoin d'un Développeur<br /> Web ?</h2>
      <hr className="custom-hr" />
      <p>Développeur full stack en apprentissage, passionné par la technologie, 
        avec de solides compétences de base et toujours à la recherche d'améliorations 
        et d'apprentissage continu pour créer des solutions modernes.</p>
        <a href="#portfolio"><MdOutlineArrowCircleDown color="#F04A4E" size={100} className='down-arrow'/ > </a> 
    </div>
  </section>
);

export default Introduction;