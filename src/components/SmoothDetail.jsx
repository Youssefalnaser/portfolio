import React, { useEffect } from 'react';
import { projectData } from '../data/projectsData';
import '../styles/components.css';
import MoreProjects from './MoreProjects';

export default function SmoothDetail({ projectId, onSelectProject, navigateTo, goBack }) {
  // Find current project
  const project = projectData.find((p) => p.id === parseInt(projectId));

  // Scroll to top when project changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [projectId]);

  return (
    <article className="page-wrapper" style={{ paddingTop: '120px' }}>
      <section className="margin-top">
        <div className="page-padding">
          <div className="container margin-top">
            
            {/* Project Header Title */}
            <div className="global-heading">
              <h1 className="display-01 align-center">{project.title}</h1>
              <div className="heading-subtitle">{project.subtitle}</div>
            </div>

            {/* Main Hero Image */}
            <div className="project-image-wrap">
              <img 
                src={project.image} 
                loading="eager" 
                alt={project.title} 
                className="projec-image-main-copy"
              />
            </div>

            {/* Overview Section */}
            <div>
              <div className="top-bar">
                <div className="body-text-5 caps">/ Overview</div>
                <div className="body-text-5 caps">N. 01</div>
              </div>
              
              <div className="project-details-block">
                <div className="project-details-title">
                  <div className="heading-subtitle full">{project.overview}</div>
                </div>
                <div className="project-item-wrap">
                  {project.client && (
                    <div className="project-item">
                      <div className="body-text-2 soft-text">Client</div>
                      <div className="body-text-2">{project.client}</div>
                    </div>
                  )}
                  {project.date && (
                    <div className="project-item">
                      <div className="body-text-2 soft-text">Date</div>
                      <div className="body-text-2">{project.date}</div>
                    </div>
                  )}
                  {project.category && (
                    <div className="project-item">
                      <div className="body-text-2 soft-text">Category</div>
                      <div className="body-text-2">{project.category}</div>
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* Final Result Section */}
            {(project.finalResult || project.finalResultDesc) && (
              <div>
                <div className="top-bar">
                  <div className="body-text-5 caps">/ Final Result</div>
                  <div className="body-text-5 caps">N. 02</div>
                </div>
                
                <div className="project-details-block">
                  {project.finalResult && (
                    <div className="project-details-title">
                      <div className="heading-subtitle full">{project.finalResult}</div>
                    </div>
                  )}
                  {project.finalResultDesc && (
                    <div className="project-text-2">
                      {project.finalResultDesc}
                    </div>
                  )}
                </div>
              </div>
            )}

            {/* Magazine Flipbook Embed (Replacing Thumbnails) */}
            <div className="project-thumb-wrap" style={{ marginTop: '40px' }}>
              <div 
                className="heyzine-embed-wrapper"
                style={{
                  width: '100%',
                  height: '80vh',
                  minHeight: '600px',
                  borderRadius: '12px',
                  overflow: 'hidden',
                  background: 'var(--bg-card)',
                  position: 'relative'
                }}
              >
                <iframe 
                  allowFullScreen="allowfullscreen" 
                  scrolling="no" 
                  className="fp-iframe" 
                  style={{ border: 'none', width: '100%', height: '100%' }} 
                  src="https://heyzine.com/flip-book/dfabacfac1.html"
                  title="SMooTH Magazine Flipbook"
                ></iframe>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* More Projects Recommendations Section */}
      <MoreProjects currentProjectId={projectId} onSelectProject={onSelectProject} />
    </article>
  );
}

