import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import './nav.min.css';

const Nav = () => {
  // State pour suivre le lien actif lors du scroll sur la page d'accueil
  const [activeScrollLink, setActiveScrollLink] = useState('');
  // Hooks de navigation et de localisation 
  const navigate = useNavigate();
  const location = useLocation();

   // Effet pour scroller en haut de page 
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }, [location.pathname]);

    // Effet pour gérer la détection du lien actif lors du scroll
  useEffect(() => {
    if (location.pathname === '/') {
      const navbar = document.querySelector('.navbar');
      const navbarHeight = navbar?.offsetHeight || 0;

      const handleScroll = () => {
        if (location.pathname !== '/') return;

        const fromTop = window.scrollY + navbarHeight + 50;
        const homeLinks = ['accueil', 'projets'];
        
        homeLinks.forEach((id) => {
          const section = document.getElementById(id);
          if (section) {
            if (
              section.offsetTop <= fromTop &&
              section.offsetTop + section.offsetHeight > fromTop
            ) {
              setActiveScrollLink(id);
            }
          }
        });
      };

        // Ajoute et supprime l'écouteur d'événements de scroll
      window.addEventListener('scroll', handleScroll);
      return () => window.removeEventListener('scroll', handleScroll);
    } else {
      setActiveScrollLink('');
    }
  }, [location.pathname]);

    // Gère les clics sur les liens de navigation
  const handleClick = (e, href) => {
    e.preventDefault();
    
    if ((href.startsWith('#') && location.pathname === '/') || 
        (!href.startsWith('#') && location.pathname === href)) {
      if (href.startsWith('#')) {
        scrollToSection(href.substring(1));
      }
    } else {
      if (href.startsWith('#')) {
        navigate('/');
        setTimeout(() => {
          scrollToSection(href.substring(1));
        }, 100);
      } else {
        navigate(href);
      }
    }
  };

   // Fonction pour scroller vers une section spécifique
  const scrollToSection = (sectionId) => {
    const targetSection = document.getElementById(sectionId);
    if (targetSection) {
      const navbar = document.querySelector('.navbar');
      const navbarHeight = navbar?.offsetHeight || 0;
      const targetPosition = targetSection.offsetTop - navbarHeight - 20;
      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth',
      });
    }
  };

  // Définition des éléments de navigation
  const navItems = [
    { href: '#accueil', text: 'Accueil', id: 'accueil' },
    { href: '/propos', text: 'A propos', id: 'propos' },
    { href: '/passions', text: 'Passion', id: 'passion' },
    { href: '/contact', text: 'Contact', id: 'contact' }
  ];

  // Détermine si un lien de navigation est actif
  const isActive = (href) => {
    if (href.startsWith('#')) {
      // Cas spécial pour le lien Accueil sur la page d'accueil
      if (href === '#accueil' && location.pathname === '/' && !activeScrollLink) {
        return true;
      }
      // On garde la logique existante pour le scroll
      return location.pathname === '/' && activeScrollLink === href.substring(1);
    }
    return location.pathname === href;
  };

  return (
    <nav className="navbar">
      <ul>
        {navItems.map(({ href, text }) => (
          <li key={href}>
            <a
              href={href}
              className={isActive(href) ? 'active' : ''}
              onClick={(e) => handleClick(e, href)}
            >
              {text}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Nav;