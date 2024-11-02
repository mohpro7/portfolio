import React, { useState, useEffect, useRef } from 'react';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaVuejs } from 'react-icons/fa';
import { SiAsana, SiExpress, SiMongodb } from 'react-icons/si';
import { DiVisualstudio, DiGithub } from 'react-icons/di';
import PythonIcon from '../../assets/images/python-svg-1.png';
import './Skills.css';

const Skills = () => {
  const skillsRef = useRef(null); // Référence pour la section des compétences

  // Initialisation de AOS et gestion de l'observateur
  useEffect(() => {
    AOS.init({
      duration: 800, // Durée de l'animation en millisecondes
      once: false, // Pour relancer l'animation à chaque apparition
      offset: 100, // Décalage par rapport au bas de la fenêtre pour déclencher l'animation
      easing: 'ease-in-out', // Courbe de l'animation
    });

    // Création de l'observateur d'intersection
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Relance AOS lorsque la section est visible
            AOS.refreshHard();
          }
        });
      },
      {
        threshold: 0.5, // La section doit être à moitié visible pour déclencher l'animation
      }
    );

    // Observer la section de compétences
    if (skillsRef.current) {
      observer.observe(skillsRef.current);
    }

    // Nettoyage de l'observateur à la désinstallation
    return () => {
      if (skillsRef.current) {
        observer.unobserve(skillsRef.current);
      }
    };
  }, []);

  const skills = [
    {
      category: "Langages",
      list: [
        { name: "JavaScript", percentage: 50, icon: <FaJs size={130} color="#f0db4f" /> },
        { name: "CSS", percentage: 50, icon: <FaCss3Alt size={130} color="#2965f1" /> },
        { name: "HTML5", percentage: 80, icon: <FaHtml5 size={130} color="#E34F26" /> },
        { name: "Python", percentage: 30, icon: <img src={PythonIcon} alt="Python Icon" width={130} height={130} /> },
      ],
    },
    {
      category: "Frameworks et Bibliothèques",
      list: [
        { name: "React", percentage: 40, icon: <FaReact size={130} color="#61DBFB" /> },
        { name: "Vue.js", percentage: 30, icon: <FaVuejs size={130} color="#42b883" /> },
        { name: "Express.js", percentage: 50, icon: <SiExpress size={130} color="#68a063" /> },
        { name: "MongoDB", percentage: 30, icon: <SiMongodb size={130} color="#4DB33D" /> },
      ],
    },
    {
      category: "Divers",
      list: [
        { name: "VS Code", percentage: 80, icon: <DiVisualstudio size={130} color="#0078d7" /> },
        { name: "GitHub", percentage: 50, icon: <DiGithub size={130} color="#181717" /> },
        { name: "Asana", percentage: 40, icon: <SiAsana size={130} color="#F04A4E" /> },
        { name: "Node.js", percentage: 50, icon: <FaNodeJs size={130} color="#273346" /> },
      ],
    },
  ];

  const [hoveredSkill, setHoveredSkill] = useState(null);
  const [displayPercentage, setDisplayPercentage] = useState(0);

  useEffect(() => {
    let interval;

    if (hoveredSkill !== null) {
      setDisplayPercentage(0);
      let progress = 0;

      interval = setInterval(() => {
        if (progress < skills[hoveredSkill.category].list[hoveredSkill.index].percentage) {
          progress += 1;
          setDisplayPercentage(progress);
        } else {
          clearInterval(interval);
        }
      }, 15);
    }

    return () => {
      clearInterval(interval);
    };
  }, [hoveredSkill]);

  const handleMouseEnter = (categoryIndex, skillIndex) => {
    if (hoveredSkill === null || hoveredSkill.index !== skillIndex) {
      setHoveredSkill({ category: categoryIndex, index: skillIndex });
    }
  };

  const handleMouseLeave = () => {
    setHoveredSkill(null);
  };

  // Définition de la fonction interpolateColor
  const interpolateColor = (color1, color2, factor) => {
    const c1 = parseInt(color1.slice(1), 16);
    const c2 = parseInt(color2.slice(1), 16);

    const r1 = (c1 >> 16) & 0xff;
    const g1 = (c1 >> 8) & 0xff;
    const b1 = c1 & 0xff;

    const r2 = (c2 >> 16) & 0xff;
    const g2 = (c2 >> 8) & 0xff;
    const b2 = c2 & 0xff;

    const r = Math.round(r1 + factor * (r2 - r1));
    const g = Math.round(g1 + factor * (g2 - g1));
    const b = Math.round(b1 + factor * (b2 - b1));

    return `rgb(${r}, ${g}, ${b})`;
  };

  // Dégradé progressif des couleurs en fonction du pourcentage
  const getInterpolatedColor = (percentage) => {
    if (percentage <= 20) {
      return interpolateColor('#0000FF', '#00FF00', percentage / 20);
    } else if (percentage <= 40) {
      return interpolateColor('#00FF00', '#FFFF00', (percentage - 20) / 20);
    } else if (percentage <= 60) {
      return interpolateColor('#FFFF00', '#FFA500', (percentage - 40) / 20);
    } else if (percentage <= 80) {
      return interpolateColor('#FFA500', '#FF0000', (percentage - 60) / 20);
    } else {
      return interpolateColor('#FF0000', '#FF0000', (percentage - 80) / 20);
    }
  };

  return (
    <section ref={skillsRef} className="skills-section" id='skills'>
      <div className='content-wrapper'>
        {skills.map((category, categoryIndex) => (
          <div key={categoryIndex} className="skills-category" data-aos="fade-up">
            <h3>{category.category}</h3>
            <div className="skills-container">
              {category.list.map((skill, skillIndex) => (
                <div
                  key={skillIndex}
                  className="skill-item"
                  onMouseEnter={() => handleMouseEnter(categoryIndex, skillIndex)}
                  onMouseLeave={handleMouseLeave}
                >
                  <div className="circle-container">
                    {hoveredSkill && hoveredSkill.category === categoryIndex && hoveredSkill.index === skillIndex && (
                      <CircularProgressbar
                        value={displayPercentage}
                        text={`${displayPercentage}%`}
                        styles={buildStyles({
                          pathColor: getInterpolatedColor(displayPercentage),
                          textColor: "#000",
                          trailColor: "#d6d6d6",
                        })}
                      />
                    )}
                  </div>
                  <div className="icon-container">
                    {skill.icon}
                    <p className="skill-name">{skill.name}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
