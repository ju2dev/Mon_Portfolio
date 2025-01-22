// App.jsx
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import About from './Pages/Propos';
import Passion from './Pages/Passions';
import Contact from './Pages/Contact';
import Mention from './Pages/Mention';
import Politique from './Pages/Politique';
import Nav from './Composants/NavBar/nav';

const App = () => {
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