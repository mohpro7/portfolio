import React, { useState, useEffect, useRef, Suspense } from 'react';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import PythonIcon from '../../assets/images/python-svg-1.png';
import './Skills.scss';
import Sass from '../../assets/images/sass.ico';

// Lazy loading des icônes
const FaHtml5 = React.lazy(() => import('react-icons/fa').then(module => ({ default: module.FaHtml5 })));
const FaCss3Alt = React.lazy(() => import('react-icons/fa').then(module => ({ default: module.FaCss3Alt })));
const FaJs = React.lazy(() => import('react-icons/fa').then(module => ({ default: module.FaJs })));
const FaReact = React.lazy(() => import('react-icons/fa').then(module => ({ default: module.FaReact })));
const FaNodeJs = React.lazy(() => import('react-icons/fa').then(module => ({ default: module.FaNodeJs })));
const SiAsana = React.lazy(() => import('react-icons/si').then(module => ({ default: module.SiAsana })));
const SiExpress = React.lazy(() => import('react-icons/si').then(module => ({ default: module.SiExpress })));
const SiMongodb = React.lazy(() => import('react-icons/si').then(module => ({ default: module.SiMongodb })));
const DiGithub = React.lazy(() => import('react-icons/di').then(module => ({ default: module.DiGithub })));


const Skills = () => {
  const skillsRef = useRef(null); // Référence pour la section des compétences

  useEffect(() => {
    AOS.init({
      duration: 800,
      once: false,
      offset: 100,
      easing: 'ease-in-out',
    });

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            AOS.refreshHard();
          }
        });
      },
      {
        threshold: 0.5,
      }
    );

    if (skillsRef.current) {
      observer.observe(skillsRef.current);
    }

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
        {
          name: "JavaScript",
          percentage: 50,
          icon: <FaJs size={130} color="#f0db4f" />,
        },
        {
          name: "CSS",
          percentage: 50,
          icon: <FaCss3Alt size={130} color="#2965f1" />,
        },
        {
          name: "HTML5",
          percentage: 80,
          icon: <FaHtml5 size={130} color="#E34F26" />,
        },
        {
          name: "Python",
          percentage: 30,
          icon: <img src={PythonIcon} alt="Python Icon" width={130} height={130} loading="lazy" />,
        },
      ],
    },
    {
      category: "Frameworks et Bibliothèques",
      list: [
        {
          name: "React",
          percentage: 40,
          icon: <FaReact size={130} color="#61DBFB" />,
        },
        {
          name: "Express.js",
          percentage: 50,
          icon: <SiExpress size={130} color="#68a063" />,
        },
        {
          name: "Scss",
          percentage: 60,
          icon: <img src={Sass} alt="Scss Icon" width={130} height={130} loading="lazy" />,
        },

      ],
    },
    {
      category: "Divers",
      list: [
        {
          name: "GitHub",
          percentage: 50,
          icon: <DiGithub size={130} color="#181717" />,
        },
        {
          name: "Asana",
          percentage: 40,
          icon: <SiAsana size={130} color="#F04A4E" />,
        },
        {
          name: "Node.js",
          percentage: 50,
          icon: <FaNodeJs size={130} color="#273346" />,
        },
        {
          name: "MongoDB",
          percentage: 30,
          icon: <SiMongodb size={130} color="#4DB33D" />,
        },
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

  return (
    <section ref={skillsRef} className="skills-section" id="skills">
      <div className="content-wrapper">
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
                    {hoveredSkill &&
                      hoveredSkill.category === categoryIndex &&
                      hoveredSkill.index === skillIndex && (
                        <CircularProgressbar
                          value={displayPercentage}
                          text={`${displayPercentage}%`}
                          styles={buildStyles({
                            pathColor: '#F04A4E',
                            textColor: '#000',
                            trailColor: '#d6d6d6',
                          })}
                        />
                      )}
                  </div>
                  <Suspense fallback={<div>Chargement...</div>}>
                    <div className="icon-container">
                      {skill.icon}
                      <p className="skill-name">{skill.name}</p>
                    </div>
                  </Suspense>
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
