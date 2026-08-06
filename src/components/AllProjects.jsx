import React, { useEffect, useState } from 'react';
import { projectData } from '../data/projectsData';
import '../styles/components.css';

export default function AllProjects({ onSelectProject }) {
  const [activeFilter, setActiveFilter] = useState('All');

  // Scroll to top when page opens
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const filters = ['All', 'UX/UI Design', 'Web Development', 'Visual & Marketing'];

  const filteredProjects = projectData.filter(project => {
    if (activeFilter === 'All') return true;
    
    const cat = project.category.toLowerCase();
    
    if (activeFilter === 'UX/UI Design') {
      return cat.includes('ux') || cat.includes('ui') || cat.includes('app') || cat.includes('crm') || cat.includes('enterprise');
    }
    if (activeFilter === 'Web Development') {
      return cat.includes('development');
    }
    if (activeFilter === 'Visual & Marketing') {
      return cat.includes('marketing') || cat.includes('advertising') || cat.includes('motion') || cat.includes('illustrator') || cat.includes('composition');
    }
    return true;
  });

  return (
    <section className="section" style={{ paddingTop: '160px' }}>
      <div className="container">
        {/* Top Header */}
        <div style={{ marginBottom: '40px', textAlign: 'center' }}>
          <h1 className="display-01">Work</h1>
        </div>

        {/* Filter Tabs */}
        <div className="filter-tabs-wrap" style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: '12px', marginBottom: '60px' }}>
          {filters.map((filter) => (
            <button
              key={filter}
              className={`filter-btn ${activeFilter === filter ? 'active' : ''}`}
              onClick={() => setActiveFilter(filter)}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* 12 Projects Grid Layout */}
        <div className="b-project-wrap">
          {filteredProjects.map((project) => (
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
