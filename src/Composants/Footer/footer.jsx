import React from 'react';
import { Link } from 'react-router-dom';
import './footer.min.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>&copy; {new Date().getFullYear()} Ju - Développeuse Web. Tous droits réservés.</p>
        <nav>
          <ul>
            <li><Link to="/mention">Mentions légales</Link></li>
            <li><Link to="/politique">Politique de confidentialité</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;