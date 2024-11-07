import './Portfolio.scss'; 
import project1Image from '../../assets/images/Opera-Instantan2024-10-31150008www-imageonline.co-6068107.avif';
import project2Image from '../../assets/images/Opera-Instantan2024-10-31151120www-imageonline.co-4892836.avif';
import project3Image from '../../assets/images/Opera-Instantan2024-10-31165710nina-carducci-imageonline.co-5529075.avif';
import project4Image from '../../assets/images/Opera-Instantan2024-10-31170743www-imageonline.co-6840371.avif';
import project5Image from '../../assets/images/Opera-Instantan2024-10-31171933www-imageonline.co-5838837.avif';
import project6Image from '../../assets/images/agile.webp';

const projects = [
  {
    title: "Projet Booki",
    technology:"HTML et CSS, ",
    description: "JavaScript intégration de l'interface du site avec du code HTML et CSS",
    imageUrl: project1Image,
    repoLink: "https://github.com/mohpro7/PROJE_1_Creez_la_page_d-accueil_d-une_agence_de_voyage.git"
  },
  {
    title: "Projet Sophie Bluel",
    technology:"JavaScript",
    description: "création de pages web dynamiques avec JavaScript, communiquation avec des APIs",
    imageUrl: project2Image,
    repoLink: "https://github.com/mohpro7/Portfolio-architecte-sophie-bluel.git"
  },
  {
    title: "Projet Nina",
    technology:"SEOquake, Lighthouse, Wave,",
    description: "améliorer les performances d'un site, son accessibilité et son référencement",
    imageUrl: project3Image,
    repoLink: "https://github.com/mohpro7/Nina-optimisation-2.git"
  },
  {
    title: "Projet kasa",
    technology:"Create React App, Node.js,",
    description: "Application utilisant React et React Router pour créer une expérience utilisateur moderne et réactive",
    imageUrl: project4Image ,
    repoLink: "https://github.com/mohpro7/projet_kasa_vite.git"
  },
  {
    title: "Projet Mon Vieux Grimmoire",
    technology:"Node.js, Express, MongoDB, Mongoose",
    description: "Création d'un serveur afin de le connecter à une base de données, sécurisation des données et de leurs stockage, architecture MVC et création d'API RESTful",
    imageUrl: project5Image,
    repoLink: "https://github.com/mohpro7/P7-Dev-Web-livres.git"
  },
  {
    title: "Projet Planifiez le développement d'un site",
    technology:"PowerPoint, Asana, Word",
    description: "Mise en place d'une veille technologique, d'une fiche des spécifications techniques et gestion du projet avec Asana",
    imageUrl: project6Image,
    repoLink: "https://github.com/mohpro7/planification-de-projet.git"
  }
];

const Portfolio = () => {
  return (
    <section id="portfolio" className="portfolio">
      <h2>Mon Portfolio</h2>
      <div className="portfolio-container">
        {projects.map((project, index) => (
          <div 
            key={index} 
            className={`project-card ${index === 5 ? "project-card-special" : ""}`} // Ajoute une classe spéciale seulement pour la carte à l'index 5 
            onClick={() => window.open(project.repoLink, "_blank")} // Ouvre le lien dans un nouvel onglet
          >
            <div className="card-overlay">
              <h3>{project.title}</h3>
              <h4>{project.technology}</h4>
              <p>{project.description}</p>
            </div>
            <img src={project.imageUrl} alt={`${project.title} screenshot`} loading="lazy" className="card-image"/>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
