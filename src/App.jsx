// App.jsx
import React, { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Home from './Pages/Home';
import About from './Pages/Propos';
import Passion from './Pages/Passions';
import Contact from './Pages/Contact';
import Mention from './Pages/Mention';
import Politique from './Pages/Politique';
import Nav from './Composants/NavBar/nav';

const App = () => {
  const location = useLocation();

  useEffect(() => {
    console.log('Chemin actuel :', location.pathname);
  
    switch (location.pathname) {
      case '/':
        document.body.style.backgroundColor = '#F5B8B8'; // Accueil
        break;
      case '/propos':
        document.body.style.backgroundColor = '#D1C0FA'; // À propos
        break;
      case '/passions':
        document.body.style.backgroundColor = '#C0E2FA'; // Passions
        break;
      case '/contact':
        document.body.style.backgroundColor = '#FDF0C7'; // Contact
        break;
      case '/mention':
        document.body.style.backgroundColor = '#E8D7F2'; // Mentions légales
        break;
      case '/politique':
        document.body.style.backgroundColor = '#C0F7FA'; // Politique
        break;
      default:
        document.body.style.backgroundColor = 'white'; // Autres pages
    }
  }, [location]);

  return (
    <>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/propos" element={<About />} />
        <Route path="/passions" element={<Passion />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/mention" element={<Mention />} />
        <Route path="/politique" element={<Politique />} />
      </Routes>
    </>
  );
};

export default App;