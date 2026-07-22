import React from 'react';
import { projectData } from '../data/projectsData';
import '../styles/components.css';

const ArrowIcon = () => (
  <svg width="29" height="12" viewBox="0 0 29 12" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M0 6L27 6L21.5 1" stroke="currentColor" strokeWidth="1.2"/>
  </svg>
);

// Select the exact 4 featured projects for the home page matching Webflow
const featuredIds = [2, 3, 4, 5];
const homeProjects = featuredIds.map(id => projectData.find(p => p.id === id));

export default function Projects({ onExploreAll, onSelectProject }) {
  // Compute topOffsets incrementally starting from 120, incrementing by 35
  let currentOffset = 120;
  // Compute scales incrementally starting from 0.94, incrementing by 0.02
  let currentScale = 0.94;

  return (
    <section id="projects" className="section">
      <div className="container">
        {/* Section Top Bar */}
        <div className="top-bar">
          <div className="caps">/ Projects</div>
          <div className="caps">N. 02</div>
        </div>

        {/* Content Layout */}
        <div className="projects-container">
          {/* Sticky Left Date Timeline */}
          <div className="projects-sticky-left">
            <div className="projects-timeline-year">(23-26)</div>
          </div>

          {/* Center Stacking Cards List */}
          <div className="projects-list">
            {homeProjects.map((project, index) => {
              const offset = currentOffset + (index * 35);
              const scale = currentScale + (index * 0.02);
              
              return (
                <div 
                  key={project.id} 
                  className="project-card sticky-card"
                  onClick={() => {
                    if (project.externalLink) {
                      window.open(project.externalLink, '_blank');
                    } else {
                      onSelectProject(project.id);
                    }
                  }}
                  style={{ 
                    '--sticky-top': `${offset}px`,
                    '--sticky-scale': scale,
                    cursor: 'pointer'
                  }}
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
              );
            })}
          </div>

          {/* Sticky Right Explore All Link */}
          <div className="projects-sticky-right">
            <a 
              href="#projects" 
              onClick={(e) => {
                e.preventDefault();
                onExploreAll();
              }} 
              className="explore-all-btn"
            >
              Explore All <ArrowIcon />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
