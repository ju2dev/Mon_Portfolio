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
        document.body.style.backgroundColor = '#FBC4CB'; 
        break;
      case '/propos':
        document.body.style.backgroundColor = '#EADCF9'; 
        break;
      case '/passions':
        document.body.style.backgroundColor = '#C0E2FA'; 
        break;
      case '/contact':
        document.body.style.backgroundColor = '#FDF0C7'; 
        break;
      case '/mention':
        document.body.style.backgroundColor = '#A8D5BA'; 
        break;
      case '/politique':
        document.body.style.backgroundColor = '#F9D5A7'; 
        break;
      default:
        document.body.style.backgroundColor = 'white';
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