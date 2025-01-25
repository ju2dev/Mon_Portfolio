import React, { useState, useEffect } from 'react';

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

import './projet.css';

const Passions = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [isClosing, setIsClosing] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const projectData = [
    { imageUrl: Arbre, altText: "Projet 1", name: "Arbre" },
    { imageUrl: tour, altText: "Projet 2", name: "Site de photographie" },
    { imageUrl: cat, altText: "Projet 3", name: "Application To-Do" },
    { imageUrl: sacré, altText: "Projet 4", name: "E-commerce Fleuriste" },
    { imageUrl: grib, altText: "Projet 5", name: "Blog Voyage" },
    { imageUrl: feu, altText: "Projet 6", name: "Portfolio Matthieu" },
    { imageUrl: paris, altText: "Projet 7", name: "Dashboard Admin" },
    { imageUrl: lumiere, altText: "Projet 8", name: "Site événementiel" },
    { imageUrl: eau, altText: "Projet 9", name: "Application Budget" },
    { imageUrl: ciel, altText: "Projet 10", name: "Page de destination" },
    { imageUrl: fleur, altText: "Projet 11", name: "Portfolio Créatif" },
    { imageUrl: banane, altText: "Projet 12", name: "Application Santé" },
    { imageUrl: cat1, altText: "Projet 13", name: "Arbre" },
    { imageUrl: arbres, altText: "Projet 14", name: "Site de photographie" },
    { imageUrl: arc, altText: "Projet 15", name: "Application To-Do" },
    { imageUrl: dragon, altText: "Projet 16", name: "E-commerce Fleuriste" },
    { imageUrl: bouteille, altText: "Projet 17", name: "Blog Voyage" },
    { imageUrl: toulon, altText: "Projet 18", name: "Portfolio Matthieu" },
    { imageUrl: fleur1, altText: "Projet 19", name: "Dashboard Admin" },
    { imageUrl: étoile, altText: "Projet 20", name: "Site événementiel" },
  ];

  const openModal = (image, index) => {
    setSelectedImage(image);
    setCurrentIndex(index);
    setIsClosing(false);
  };

  const closeModal = () => {
    setIsClosing(true);
    setTimeout(() => {
      setSelectedImage(null);
      setIsClosing(false);
    }, 300);
  };

  const navigateImage = (direction) => {
    const newIndex = (currentIndex + direction + projectData.length) % projectData.length;
    setSelectedImage(projectData[newIndex].imageUrl);
    setCurrentIndex(newIndex);
  };

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (selectedImage) {
        switch (event.key) {
          case 'Escape':
            closeModal();
            break;
          case 'ArrowLeft':
            navigateImage(-1);
            break;
          case 'ArrowRight':
            navigateImage(1);
            break;
          default:
            break;
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [selectedImage, currentIndex]);

  return (
    <>
      <div className="container3">
        <p className="passion-description">
          La photographie est bien plus qu'un simple passe-temps pour moi, c'est une véritable passion qui me permet de capturer et de célébrer les moments éphémères de la vie. Chaque image raconte une histoire, émotions et détails, transformant des instants fugaces en souvenirs durables.
        </p>
      </div>
      <div className="projects-section-container-passion">
        <section className="projects-section-passion">
          {projectData.map((project, index) => (
            <div
              className="project-card-passion"
              key={index}
            >
              <div 
                className="project-image-passion clickable" 
                onClick={() => openModal(project.imageUrl, index)}
              >
                <img src={project.imageUrl} alt={project.altText} />
              </div>
              <div className="project-info-passion">
                <p className='texte-passion'>{project.name}</p>
              </div>
            </div>
          ))}
        </section>
        {selectedImage && (
          <div 
            className={`modal ${isClosing ? 'closing' : ''}`}
            onClick={closeModal}
          >
            <div 
              className="modal-content" 
              onClick={(e) => e.stopPropagation()}
            >
              <button className="close-button" onClick={closeModal}>
                &times;
              </button>
              <button 
                className="nav-button nav-left" 
                onClick={(e) => {
                  e.stopPropagation();
                  navigateImage(-1);
                }}
              >
                &#10094;
              </button>
              <img 
                src={selectedImage} 
                alt="Image en grand" 
                className="modal-image" 
              />
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