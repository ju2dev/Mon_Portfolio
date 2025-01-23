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

  // Définir la couleur de fond en fonction de la page actuelle
  useEffect(() => {
    if (location.pathname === '/') {
      document.body.style.backgroundColor = '#F5B8B8'; // Accueil
    } else if (location.pathname === '/propos') {
      document.body.style.backgroundColor = '#D1C0FA'; // À propos
    } else if (location.pathname === '/passions') {
      document.body.style.backgroundColor = '#C0E2FA'; // Passion
    } else if (location.pathname === '/contact') {
      document.body.style.backgroundColor = '#FDF0C7'; // Contact
    } else {
      document.body.style.backgroundColor = 'white'; // Par défaut
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