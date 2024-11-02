import './Header.scss';

const Header = ({ activeSection }) => {
  return (
    <header className="header">
      <div className="content-wrapper">
        <h1>mohmez</h1>
        <nav>
          <a href="#introduction" className={activeSection === 'introduction' ? 'active' : ''}>INTRODUCITON</a>
          <a href="#portfolio" className={activeSection === 'portfolio' ? 'active' : ''}>PROJETS</a>
          <a href="#skills" className={activeSection === 'skills' ? 'active' : ''}>COMPETENCE</a>
          <a href="#contact" className={activeSection === 'contact' ? 'active' : ''}>CONTACT</a>
        </nav>
      </div> 
    </header>
  );
};

export default Header;