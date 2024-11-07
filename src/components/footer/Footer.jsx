import './Footer.scss';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="content-wrapper">
        <p>&copy; {new Date().getFullYear()} Mohmez - Tous droits réservés</p>
        
        <a href="https://www.linkedin.com/in/ton-profil/" target="_blank" rel="noopener noreferrer" className="linkedin-link">
            <img src="../../assets/images/linkedin-logo-png-2027-Windows.ico" alt="lien linkedin" />    
        </a>
      </div>
    </footer>
  );
};

export default Footer;
