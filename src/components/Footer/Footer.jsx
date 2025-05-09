import { FaGithub, FaLinkedin } from 'react-icons/fa';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <p className="footer-text">&copy; {new Date().getFullYear()} Ezequiel Henrique. Todos os direitos reservados.</p>
        <div className="footer-icons">
          <a href="https://github.com/ezequielhenrique" target="_blank"><FaGithub className="footer-icon" /></a>
          <a href="https://www.linkedin.com/in/ezequielhenrique" target="_blank"><FaLinkedin className="footer-icon" /></a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
