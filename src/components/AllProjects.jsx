import React, { useEffect } from 'react';
import { projectData } from '../data/projectsData';
import '../styles/components.css';

export default function AllProjects({ onSelectProject }) {
  // Scroll to top when page opens
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <section className="section" style={{ paddingTop: '160px' }}>
      <div className="container">
        {/* Top Header */}
        <div style={{ marginBottom: '60px', textAlign: 'center' }}>
          <h1 className="display-01">Work</h1>
        </div>

        {/* Section Top Bar */}
        <div className="top-bar">
          <div className="caps">/ Project</div>
          <div className="caps">N. 01</div>
        </div>

        {/* 12 Projects Grid Layout */}
        <div className="b-project-wrap">
          {projectData.map((project) => (
            <div 
              key={project.id} 
              className="project-card" 
              onClick={() => {
                if (project.externalLink) {
                  window.open(project.externalLink, '_blank');
                } else {
                  onSelectProject(project.id);
                }
              }}
              style={{ marginBottom: '40px', cursor: 'pointer' }}
            >
              <div className="project-card-image-wrap">
                <img src={project.image} alt={project.title} loading="lazy" />
                {[2, 3, 4].includes(project.id) && (
                  <div className="case-study-overlay">
                    <span>Zur Case Study</span>
                  </div>
                )}
              </div>
              <div className="project-card-info">
                <span className="project-title">{project.title}</span>
                <span className="project-year">/ {project.year}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
