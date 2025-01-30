import React from 'react';
import './projects.min.css';

import GitHub from '../../assets/img/github.svg';
import KASA from '../../assets/img/KASA.png';
import OMF from '../../assets/img/OHMYFOOD.png';
import Archi from '../../assets/img/archi.png';
import Photo from '../../assets/img/photo.png';
import Debug from '../../assets/img/debug.png';
import Print from '../../assets/img/PRINT.png';
import Argent from '../../assets/img/argentbank.png';
import Portfolio from '../../assets/img/portfolio.png';
import SASS from '../../assets/img/SASS.png';
import HTML from '../../assets/img/html.png';
import CSS from '../../assets/img/css.png';
import REACT from '../../assets/img/react.png';
import JS from '../../assets/img/js.png';

const Projects = () => {
  return (
    <section className="projects-section-container">
      <div className="projects-grid">
        {/* Projet 1 */}
        <div className="project-card">
          <a href="https://github.com/ju2dev/Kasa">
            <div className="project-info">
              <img src={GitHub} alt="GitHub" className="github-icon1" />
              <span className="texte">Projet 1 : KASA</span>
            </div>
            <div className="project-inner">
              <div className="project-front">
                <img src={KASA} alt="Capture d'écran du projet KASA" />
              </div>
              <div className="project-back">
                <p className="project-texte">
                  <strong>
                    Développeuse front-end en freelance pour Kasa, la mission est de démarrer le projet React, développer l'application en suivant les maquettes Figma.
                  </strong>
                </p>
                <div className="icons-container">
                  <img src={CSS} alt="CSS" className="competence-icon1" />
                  <img src={REACT} alt="React" className="competence-icon21" />
                  <img src={JS} alt="JavaScript" className="competence-icon1" />
                </div>
              </div>
            </div>
          </a>
        </div>

        {/* Projet 2 */}
        <div className="project-card">
          <a href="https://github.com/ju2dev/OHMYFOOD">
            <div className="project-info">
              <img src={GitHub} alt="GitHub" className="github-icon2" />
              <span className="texte">Projet 2 : OHMYFOOD</span>
            </div>
            <div className="project-inner">
              <div className="project-front">
                <img src={OMF} alt="Projet 2" />
              </div>
              <div className="project-back">
                <p className="project-texte">
                  <strong>
                    Développer un site "mobile first" qui répertorie les menus de restaurants gastronomiques.
                  </strong>
                </p>
                <div className="icons-container">
                  <img src={SASS} alt="SASS" className="competence-icon1" />
                  <img src={HTML} alt="HTML" className="competence-icon1" />
                  <img src={CSS} alt="CSS" className="competence-icon1" />
                </div>
              </div>
            </div>
          </a>
        </div>

        {/* Projet 3 */}
        <div className="project-card">
          <a href="https://github.com/ju2dev/Portfolio-architecte">
            <div className="project-info">
              <img src={GitHub} alt="GitHub" className="github-icon3" />
              <span className="texte">Projet 3 : Portfolio architecte</span>
            </div>
            <div className="project-inner">
              <div className="project-front">
                <img src={Archi} alt="Projet 3" />
              </div>
              <div className="project-back">
                <p className="project-texte">
                  <strong>
                    Développeuse front-end pour l'agence ArchiWebos, la mission est de travailler la page de présentation des travaux, page de connexion de l'administrateur du site & faire une modale permettant d'uploader de nouveaux médias.
                  </strong>
                </p>
                <div className="icons-container">
                  <img src={JS} alt="JavaScript" className="competence-icon1" />
                  <img src={HTML} alt="HTML" className="competence-icon1" />
                  <img src={CSS} alt="CSS" className="competence-icon1" />
                </div>
              </div>
            </div>
          </a>
        </div>

        {/* Projet 4 */}
        <div className="project-card">
          <a href="https://github.com/ju2dev/Nina-Carducci---Photographe-Professionnelle">
            <div className="project-info1">
              <img src={GitHub} alt="GitHub" className="github-icon4" />
              <span className="texte-p">Projet 4 : Photographe Professionnelle</span>
            </div>
            <div className="project-inner">
              <div className="project-front">
                <img src={Photo} alt="Projet 4" />
              </div>
              <div className="project-back">
                <p className="project-texte">
                  <strong>
                    Développeuse freelance. Les missions sont de faire une optimisation globale du site tant sur les performances que sur le SEO, référencement local en utilisant Schema.org, metas pour les réseaux sociaux, l'accessibilité du site et donner rapport d'optimisation.
                  </strong>
                </p>
                <div className="icons-container">
                  <img src={JS} alt="JavaScript" className="competence-icon1" />
                  <img src={HTML} alt="HTML" className="competence-icon1" />
                  <img src={CSS} alt="CSS" className="competence-icon1" />
                </div>
              </div>
            </div>
          </a>
        </div>

        {/* Projet 5 */}
        <div className="project-card">
          <a href="https://github.com/ju2dev/Debuggez-le-site-d-une-agence-d-evenementiel">
            <div className="project-info1">
              <img src={GitHub} alt="GitHub" className="github-icon5" />
              <span className="texte">Projet 5 : Debuggez une agence événementiel</span>
            </div>
            <div className="project-inner">
              <div className="project-front">
                <img src={Debug} alt="Projet 5" />
              </div>
              <div className="project-back">
                <p className="project-texte">
                  <strong>
                    Optimisation du site d'une agence événementielle, quelques bugs entravent le bon usage par les visiteurs. 724events fait donc appel à vous pour finaliser le travail.
                  </strong>
                </p>
                <div className="icons-container">
                  <img src={SASS} alt="SASS" className="competence-icon1" />
                  <img src={REACT} alt="React" className="competence-icon21" />
                  <img src={JS} alt="JavaScript" className="competence-icon1" />
                </div>
              </div>
            </div>
          </a>
        </div>

        {/* Projet 6 */}
        <div className="project-card">
          <a href="https://github.com/ju2dev/PRINT">
            <div className="project-info">
              <img src={GitHub} alt="GitHub" className="github-icon6" />
              <span className="texte">Projet 6 : PRINT</span>
            </div>
            <div className="project-inner">
              <div className="project-front">
                <img src={Print} alt="Projet 6" />
              </div>
              <div className="project-back">
                <p className="project-texte">
                  <strong>
                    Développeuse front-end en freelance, la mission est de dynamiser le site Internet statique d'une petite imprimerie familiale nommée Print it.
                  </strong>
                </p>
                <div className="icons-container">
                  <img src={JS} alt="JavaScript" className="competence-icon1" />
                  <img src={HTML} alt="HTML" className="competence-icon1" />
                  <img src={CSS} alt="CSS" className="competence-icon1" />
                </div>
              </div>
            </div>
          </a>
        </div>

        {/* Projet 7 */}
        <div className="project-card">
          <a href="https://github.com/ju2dev/ArgentBank_Frontend">
            <div className="project-info">
              <img src={GitHub} alt="GitHub" className="github-icon7" />
              <span className="texte">Projet 7 : ARGENTBANK</span>
            </div>
            <div className="project-inner">
              <div className="project-front">
                <img src={Argent} alt="Projet 7" />
              </div>
              <div className="project-back">
                <p className="project-texte">
                  <strong>
                    Intégrer Argent Bank comme développeuse front-end pour gérer l'accès, la modification du pseudo, et la consultation sécurisée des profils utilisateurs.
                  </strong>
                </p>
                <div className="icons-container">
                  <img src={REACT} alt="React" className="competence-icon21" />
                  <img src={CSS} alt="CSS" className="competence-icon1" />
                </div>
              </div>
            </div>
          </a>
        </div>

       {/* Projet 8 */}
<div className="project-card">
  <a href="https://github.com/ju2dev/Mon_Portfolio">
    <div className="project-info">
      <img src={GitHub} alt="GitHub" className="github-icon8" />
      <span className="texte">Projet 8 : Portfolio</span>
    </div>
    <div className="project-inner">
      <div className="project-front">
        <img src={Portfolio} alt="Projet 8" />
      </div>
      <div className="project-back">
        <p className="project-texte">
          <strong>
            Création d'un portfolio pour mettre en avant les projets en utilisant React et des composants dynamiques.
          </strong>
        </p>
        <div className="icons-container">
          <img src={REACT} alt="React" className="competence-icon21" />
          <img src={CSS} alt="CSS" className="competence-icon1" />
          <img src={JS} alt="JavaScript" className="competence-icon1" />
        </div>
      </div>
    </div>
  </a>
</div>
      </div>

    </section>
  );
};

export default Projects;
