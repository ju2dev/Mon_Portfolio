import React from 'react';
import { Link } from 'react-router-dom';
import './footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>&copy; {new Date().getFullYear()} Ju - Développeuse Web. Tous droits réservés.</p>
        <nav>
          <ul>
            <li><Link to="/Mention">Mentions légales</Link></li>
            <li><Link to="/Politique">Politique de confidentialité</Link></li>
            <li><Link to="/Contact">Contact</Link></li>
          </ul>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;