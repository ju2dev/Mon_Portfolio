import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import './nav.min.css';

const Nav = () => {
  const [activeScrollLink, setActiveScrollLink] = useState('');
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }, [location.pathname]);

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

      window.addEventListener('scroll', handleScroll);
      return () => window.removeEventListener('scroll', handleScroll);
    } else {
      setActiveScrollLink('');
    }
  }, [location.pathname]);

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

  const navItems = [
    { href: '#accueil', text: 'Accueil', id: 'accueil' },
    { href: '/propos', text: 'A propos', id: 'propos' },
    { href: '/passions', text: 'Passion', id: 'passion' },
    { href: '/contact', text: 'Contact', id: 'contact' }
  ];

  const isActive = (href) => {
    if (href.startsWith('#')) {
      // Si on est sur la page d'accueil et que c'est le lien "Accueil"
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