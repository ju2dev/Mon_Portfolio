import React from 'react';
import './description.min.css';

import FleurBleu from '../../assets/img/fleur-bleu.png';
import FleurRose from '../../assets/img/fleur-rose.png';
import FleurJaune from '../../assets/img/fleur-jaune.png';
import FleurFonce from '../../assets/img/fleur-fonce.png';
import GitHub from '../../assets/img/github.svg';
import Telechargement from '../../assets/img/telechargement.svg';
import SASS from '../../assets/img/SASS.png';
import HTML from '../../assets/img/html.png';
import CSS from '../../assets/img/css.png';
import REACT from '../../assets/img/react.png';
import JS from '../../assets/img/js.png';
import Linkedin from '../../assets/img/Linkedin.png';
import Instagram from '../../assets/img/instagram.png';

const description = () => {
  return (
    <section id="accueil" className="main-container">
      <img 
        src={FleurBleu} 
        alt="fleur décorative" 
        className="corner-flower flower-top-left" 
      />
      <img 
        src={FleurRose} 
        alt="fleur décorative" 
        className="corner-flower flower-bottom-right" 
      />
      <img 
          src={FleurJaune} 
          alt="fleur décorative" 
          className="corner-flower flower-top-right" 
        />
        <img 
          src={FleurFonce}
          alt="fleur décorative" 
          className="corner-flower flower-left" 
        />
      
      <div className="text1">
        <h1>HEY !</h1>
      </div>
      
      <div className="text2">
        <h2>MOI C'EST JU.</h2>
      </div>
      
      <p className="role">Développeuse Web</p>
      
      <div className="buttons">
        <a href="https://github.com/ju2dev" className="btn github">
          <img src={GitHub} alt="GitHub" width="20" height="20" />
          {' '}Github
        </a>
        <a href="/Mon_Portfolio/CV2025.pdf" download className="btn cv">
          <img 
            src={Telechargement} 
            alt="Téléchargement CV" 
            width="20" 
            height="20" 
          />
          {' '}CV
        </a>
        <a href="https://www.linkedin.com/in/justine-piergiovanni-1390b230b/" target="_blank" rel="noopener noreferrer" className="btn linkedin">
    <img 
      src={Linkedin} 
      alt="LinkedIn" 
      width="20" 
      height="20" 
    />
    {' '}LinkedIn
  </a>

  {/* Bouton Instagram */}
  <a href="https://www.instagram.com/matthieu75_photo?igsh=cjNjNGlyNWFsMm1v" target="_blank" rel="noopener noreferrer" className="btn instagram">
    <img 
      src={Instagram} 
      alt="Instagram" 
      width="20" 
      height="20" 
    />
    {' '}Instagram
  </a>
      </div>
      
      <div className="container1">
        
        <div className="description">
          <p className='Bien'>Bienvenue sur mon portfolio !</p>
          <p className='dent'>J'ai 22 ans et toutes mes dents !</p> 
          <p className='Dev'> En tant que développeuse freelance, je me spécialise dans la création de sites web. </p>
          <p className='obj'>Mon objectif est de proposer des solutions sur mesure, optimisées pour la performance et l'expérience utilisateur.</p>
           
          <div className="competences">
            <p>Formé par Openclassroom, j'ai des compétences en :</p>
            <div className="competence-icons">
              <img src={SASS} alt="SASS" className="competence-icon" />
              <img src={REACT} alt="React" className="competence-icon" />
              <img src={JS} alt="JavaScript" className="competence-icon" />
              <img src={HTML} alt="HTML" className="competence-icon" />
              <img src={CSS} alt="CSS" className="competence-icon" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default description;