import React from 'react';
import './projet.css'; 

const Passions = () => {
  const projectData = [
    { imageUrl: "/images/project1.png", altText: "Projet 1", name: "Portfolio Justine" },
    { imageUrl: "/images/project2.png", altText: "Projet 2", name: "Site de photographie" },
    { imageUrl: "/images/project3.png", altText: "Projet 3", name: "Application To-Do" },
    { imageUrl: "/images/project4.png", altText: "Projet 4", name: "E-commerce Fleuriste" },
    { imageUrl: "/images/project5.png", altText: "Projet 5", name: "Blog Voyage" },
    { imageUrl: "/images/project6.png", altText: "Projet 6", name: "Portfolio Matthieu" },
    { imageUrl: "/images/project7.png", altText: "Projet 7", name: "Dashboard Admin" },
    { imageUrl: "/images/project8.png", altText: "Projet 8", name: "Site événementiel" },
    { imageUrl: "/images/project9.png", altText: "Projet 9", name: "Application Budget" },
    { imageUrl: "/images/project10.png", altText: "Projet 10", name: "Page de destination" },
    { imageUrl: "/images/project11.png", altText: "Projet 11", name: "Portfolio Créatif" },
    { imageUrl: "/images/project12.png", altText: "Projet 12", name: "Application Santé" },
    { imageUrl: "/images/project13.png", altText: "Projet 13", name: "Gestion des contacts" },
    { imageUrl: "/images/project14.png", altText: "Projet 14", name: "Site de musique" },
    { imageUrl: "/images/project15.png", altText: "Projet 15", name: "Carte interactive" },
    { imageUrl: "/images/project16.png", altText: "Projet 16", name: "Quiz en ligne" }
  ];

  return (
    <div className="projects-section-container-passion ">
      <section className="projects-section-passion">
        {projectData.map((project, index) => (
          <div className="project-card-passion" key={index}>
            <div className="project-image-passion">
              <img src={project.imageUrl} alt={project.altText} />
            </div>
            <div className="project-info-passion">
              <p>{project.name}</p>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
};

export default Passions;