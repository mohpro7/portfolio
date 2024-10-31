import './Portfolio.scss'; 

const projects = [
  {
    title: "Projet Booki",
    technology:"HTML et CSS, ",
    description: "JavaScript intégration de l'interface du site avec du code HTML et CSS",
    imageUrl: "src/assets/images/Opera Instantané_2024-10-31_150008_www.figma.com.png",
    repoLink: "https://github.com/mohpro7/PROJE_1_Creez_la_page_d-accueil_d-une_agence_de_voyage.git"
  },
  {
    title: "Projet Sophie Bluel",
    technology:"JavaScript",
    description: "création de pages web dynamiques avec JavaScript, communiquation avec des APIs",
    imageUrl: "src/assets/images/Opera Instantané_2024-10-31_151120_www.figma.com.png",
    repoLink: "https://github.com/mohpro7/Portfolio-architecte-sophie-bluel.git"
  },
  {
    title: "Projet Nina",
    technology:"SEOquake, Lighthouse, Wave,",
    description: "améliorer les performances d'un site, son accessibilité et son référencement",
    imageUrl: "src/assets/images/Opera Instantané_2024-10-31_165710_nina-carducci.github.io.png",
    repoLink: "https://github.com/mohpro7/Nina-optimisation-2.git"
  },
  {
    title: "Projet kasa",
    technology:"Create React App, Node.js,",
    description: "Application utilisant React et React Router pour créer une expérience utilisateur moderne et réactive",
    imageUrl: "src/assets/images/Opera Instantané_2024-10-31_170743_www.figma.com.png",
    repoLink: "https://github.com/mohpro7/projet_kasa_vite.git"
  },
  {
    title: "Projet Mon Vieux Grimmoire",
    technology:"Node.js, Express, MongoDB, Mongoose",
    description: "Création d'un serveur afin de le connecter à une base de données, sécurisation des données et de leurs stockage, architecture MVC et création d'API RESTful",
    imageUrl: "src/assets/images/Opera Instantané_2024-10-31_171933_www.figma.com.png",
    repoLink: "https://github.com/mohpro7/P7-Dev-Web-livres.git"
  },
  {
    title: "Projet Planifiez le développement d'un site",
    technology:"PowerPoint, Asana, Word",
    description: "Mise en place d'une veille technologique, d'une fiche des spécifications techniques et gestion du projet avec Asana",
    imageUrl: "src/assets/images/th (7).webp",
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
            <img src={project.imageUrl} alt={`${project.title} screenshot`} className="card-image"/>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
