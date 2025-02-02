import React, { useState, useEffect } from 'react';

// Importation
import Arbre from '../../assets/img/images/arbre.jpeg';
import banane from '../../assets/img/images/banane.jpeg';
import cat from '../../assets/img/images/cat.jpeg';
import eau from '../../assets/img/images/eau.jpeg';
import ciel from '../../assets/img/images/ciel.jpeg';
import feu from '../../assets/img/images/feu.jpeg';
import tour from '../../assets/img/images/tour.jpeg';
import fleur from '../../assets/img/images/fleur.jpeg';
import grib from '../../assets/img/images/grib.jpeg';
import lumiere from '../../assets/img/images/lumiere.jpeg';
import paris from '../../assets/img/images/paris.jpeg';
import sacré from '../../assets/img/images/sacré.jpeg';
import cat1 from '../../assets/img/images/cat1.jpeg';
import arbres from '../../assets/img/images/arbres.jpeg';
import arc from '../../assets/img/images/arc.jpeg';
import dragon from '../../assets/img/images/dragon.jpeg';
import bouteille from '../../assets/img/images/bouteille.jpeg';
import toulon from '../../assets/img/images/toulon.jpeg';
import fleur1 from '../../assets/img/images/fleur1.jpeg';
import étoile from '../../assets/img/images/étoile.jpeg';

import tourE from '../../assets/img/images/tourE.jpeg';
import toulouse from '../../assets/img/images/toulouse.jpeg';
import status from '../../assets/img/images/status.jpeg';
import chat from '../../assets/img/images/chat.jpeg';
import pont from '../../assets/img/images/pont.jpeg';
import nuage from '../../assets/img/images/nuage.jpeg';
import abeille from '../../assets/img/images/abeille.jpeg';
import voiture from '../../assets/img/images/voiture.jpeg';
import Louvre from '../../assets/img/images/Louvre.jpeg';

import './projet.min.css';

// State pour gérer la modal et la navigation des images
const Passions = () => {
  const [selectedImage, setSelectedImage] = useState(null); // Image actuel
  const [isClosing, setIsClosing] = useState(false); // Fermeture de la modal
  const [currentIndex, setCurrentIndex] = useState(0);

   // Tableau contenant images
  const projectData = [
    { imageUrl: Arbre, altText: "Projet 1", name: "Un arbre dans un parc" },
    { imageUrl: tour, altText: "Projet 2", name: "Tour Eiffel" },
    { imageUrl: cat, altText: "Projet 3", name: "Cathédrale d'Albi" },
    { imageUrl: sacré, altText: "Projet 4", name: "Sacré Coeur" },
    { imageUrl: grib, altText: "Projet 5", name: "Mon jolie chaton" },
    { imageUrl: feu, altText: "Projet 6", name: "Feu d'artifice - 14 Juillet 2023" },
    { imageUrl: paris, altText: "Projet 7", name: "Café Paris" },
    { imageUrl: lumiere, altText: "Projet 8", name: "Des petites lumières" },
    { imageUrl: eau, altText: "Projet 9", name: "Sur une île" },
    { imageUrl: ciel, altText: "Projet 10", name: "Jolie ciel" },
    { imageUrl: fleur, altText: "Projet 11", name: "Fleur orange" },
    { imageUrl: banane, altText: "Projet 12", name: "Bananier" },
    { imageUrl: cat1, altText: "Projet 13", name: "Cathédrale d'Albi" },
    { imageUrl: arbres, altText: "Projet 14", name: "Arbres dans un parc" },
    { imageUrl: arc, altText: "Projet 15", name: "Arc de triomphe" },
    { imageUrl: dragon, altText: "Projet 16", name: "Dragon lumière" },
    { imageUrl: bouteille, altText: "Projet 17", name: "Bouteille dans un magasin" },
    { imageUrl: toulon, altText: "Projet 18", name: "Port de Toulon" },
    { imageUrl: fleur1, altText: "Projet 19", name: "Fleur" },
    { imageUrl: étoile, altText: "Projet 20", name: "Ma magnifique écaille de tortue" },
    { imageUrl: tourE, altText: "Projet 21", name: "Tour Eiffel entre les feuilles" },
    { imageUrl: toulouse, altText: "Projet 22", name: "Mairie de Toulouse" },
    { imageUrl: status, altText: "Projet 23", name: "Status d'Albi" },
    { imageUrl: chat, altText: "Projet 24", name: "Siamois" },
    { imageUrl: pont, altText: "Projet 25", name: "Pont " },
    { imageUrl: nuage, altText: "Projet 26", name: "Nuage" },
    { imageUrl: abeille, altText: "Projet 27", name: "Abeille sur une fleur" },
    { imageUrl: voiture, altText: "Projet 28", name: "Ferrari Jaune" },
    { imageUrl: Louvre, altText: "Projet 29", name: "Louvre" },
  ];

  // Fonction pour ouvrir la modal quand une image est cliquée
  const openModal = (image, index) => {
    setSelectedImage(image); // Défini
    setCurrentIndex(index); // Mémorise
    setIsClosing(false);
  };

    // Fonction pour fermer la modal
  const closeModal = () => {
    setIsClosing(true); // Déclencher l'animation 
    setTimeout(() => {
      setSelectedImage(null);
      setIsClosing(false);
    }, 300);
  };

   // Fonction pour naviguer entre les images (précédent/suivant)
  const navigateImage = (direction) => {
    // Calculer le nouvel index en boucle (revient au début si on dépasse)
    const newIndex = (currentIndex + direction + projectData.length) % projectData.length;
    setSelectedImage(projectData[newIndex].imageUrl);
    setCurrentIndex(newIndex);
  };

   // Hook useEffect pour gérer les événements clavier
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (selectedImage) {
        switch (event.key) {
          case 'Escape':
            closeModal(); // Fermer la modal avec la touche Échap
            break;
          case 'ArrowLeft':
            navigateImage(-1); // Image précédente avec flèche gauche
            break;
          case 'ArrowRight':
            navigateImage(1); // Image suivante avec flèche droite
            break;
          default:
            break;
        }
      }
    };

    // Ajouter et supprimer l'écouteur d'événements
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [selectedImage, currentIndex]);

  return (
    <>
     {/* Section description de la passion */}
      <div className="container4">
        <p className="passion-description">
          La photographie est bien plus qu'un simple passe-temps pour moi, c'est une véritable passion qui me permet de capturer et de célébrer les moments éphémères de la vie. Chaque image raconte une histoire, émotions et détails, transformant des instants fugaces en souvenirs durables.
        </p>
      </div>
      {/* Grille des projets/images */}
      <div className="projects-section-container-passion">
        <section className="projects-section-passion">
          {projectData.map((project, index) => (
            <div
              className="project-card-passion"
              key={index}
            >
               {/* Carte de projet cliquable */}
              <div 
                className="project-image-passion clickable" 
                onClick={() => openModal(project.imageUrl, index)}
              >
                <img src={project.imageUrl} alt={project.altText} />
              </div>
              {/* Informations du projet */}
              <div className="project-info-passion">
                <p className='texte-passion'>{project.name}</p>
              </div>
            </div>
          ))}
        </section>
        {/* Modal pour afficher l'image en grand */}
        {selectedImage && (
          <div 
            className={`modal ${isClosing ? 'closing' : ''}`}
            onClick={closeModal}
          >
            <div 
              className="modal-content" 
              onClick={(e) => e.stopPropagation()}
            >
              {/* Bouton de fermeture */}
              <button className="close-button" onClick={closeModal}>
                &times;
              </button>
              {/* Bouton navigation gauche */}
              <button 
                className="nav-button nav-left" 
                onClick={(e) => {
                  e.stopPropagation();
                  navigateImage(-1);
                }}
              >
                &#10094;
              </button>
               {/* Image en grand */}
              <img 
                src={selectedImage} 
                alt="Image en grand" 
                className="modal-image" 
              />
              {/* Bouton navigation droite */}
              <button 
                className="nav-button nav-right" 
                onClick={(e) => {
                  e.stopPropagation();
                  navigateImage(1);
                }}
              >
                &#10095;
              </button>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Passions;