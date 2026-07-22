import React from 'react';
import { projectData } from '../data/projectsData';
import '../styles/more-projects.css';

export default function MoreProjects({ currentProjectId, onSelectProject }) {
  // Filter internal case study projects (exclude current project & external links)
  const internalProjects = projectData.filter((p) => !p.externalLink);

  // Find index of current project in internalProjects
  const currentIndex = internalProjects.findIndex((p) => p.id === parseInt(currentProjectId));

  let recommendations = [];
  if (currentIndex !== -1 && internalProjects.length > 1) {
    const total = internalProjects.length;
    recommendations = [
      internalProjects[(currentIndex + 1) % total],
      internalProjects[(currentIndex + 2) % total],
      internalProjects[(currentIndex + 3) % total],
    ];
  } else {
    // Fallback if current project is external or not found
    recommendations = internalProjects.filter((p) => p.id !== parseInt(currentProjectId)).slice(0, 3);
  }

  return (
    <section className="more-projects-section">
      <div className="more-projects-container">
        <div className="more-projects-header">
          <h2 className="more-projects-title">Weitere Projekte</h2>
          <div className="more-projects-badge">/ 03 Projects</div>
        </div>

        <div className="more-projects-grid">
          {recommendations.map((recProject) => (
            <div
              key={recProject.id}
              className="more-project-card"
              onClick={() => onSelectProject(recProject.id)}
            >
              <div className="more-project-img-wrap">
                <img
                  src={recProject.image}
                  alt={recProject.title}
                  loading="lazy"
                />
                <div className="more-project-overlay">
                  <span>Projekt ansehen →</span>
                </div>
              </div>
              <div className="more-project-info">
                <h3 className="more-project-card-title">{recProject.title}</h3>
                <span className="more-project-year">/ {recProject.year}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
