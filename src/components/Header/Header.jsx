import './Header.scss';

const Header = () => {
  return (
    <header className="header">
      <h1>mohmez</h1>
      <nav>
        <a href="#introduction">Introduction</a>
        <a href="#projects">Projets</a>
        <a href="#skills">Compétences</a>
        <a href="#contact">Contact</a>
      </nav>
    </header>
  );
};

export default Header;
