import React, { useEffect } from 'react';
import { getProjectBySlug, projectData } from '../data/projectsData';
import '../styles/components.css';
import OnpreoAppDetail from './OnpreoAppDetail';
import SookAppDetail from './SookAppDetail';
import OnpreoDesktopDetail from './OnpreoDesktopDetail';
import SmoothDetail from './SmoothDetail';
import IhopDetail from './IhopDetail';
import MoreProjects from './MoreProjects';

export default function ProjectDetail({ projectSlug, onSelectProject, navigateTo, goBack }) {
  // Find current project by slug (or fallback to ID if passed)
  const project = getProjectBySlug(projectSlug) || projectData[0];
  const projectId = project.id;

  // Route specific highly-custom layouts
  if (project.id === 2) {
    return <OnpreoDesktopDetail projectId={projectId} onSelectProject={onSelectProject} navigateTo={navigateTo} goBack={goBack} />;
  }
  if (project.id === 3) {
    return <OnpreoAppDetail projectId={projectId} onSelectProject={onSelectProject} navigateTo={navigateTo} goBack={goBack} />;
  }
  if (project.id === 4) {
    return <SookAppDetail projectId={projectId} onSelectProject={onSelectProject} navigateTo={navigateTo} goBack={goBack} />;
  }
  if (project.id === 11) {
    return <IhopDetail projectSlug={projectSlug} onSelectProject={onSelectProject} navigateTo={navigateTo} goBack={goBack} />;
  }
  if (project.id === 12) {
    return <SmoothDetail projectId={projectId} onSelectProject={onSelectProject} navigateTo={navigateTo} goBack={goBack} />;
  }

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

            {/* Figma Play Link Overlay */}
            {project.figmaLink && (
              <div className="project-image-wrap-copy" style={{ display: 'flex', justifyContent: 'center', marginBottom: '20px' }}>
                <a 
                  href={project.figmaLink} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="links-1 w-inline-block"
                  style={{ transition: 'transform 0.3s ease', display: 'inline-block' }}
                  onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.08)'}
                  onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'}
                >
                  <img 
                    src="https://cdn.prod.website-files.com/69e16e613fdbf624251e818c/6a596d2b61a337ae57a5cac7_play-button.png" 
                    loading="eager" 
                    alt="Play Prototype" 
                    className="playicon"
                  />
                </a>
              </div>
            )}

            {/* Main Hero Image or Video */}
            {project.videoUrl ? (
              <div className="video-sook" style={{ position: 'relative', paddingBottom: '56.25%', height: 0, overflow: 'hidden', borderRadius: '16px', marginBottom: '40px', background: '#000' }}>
                <iframe
                  src={project.videoUrl}
                  title={project.title}
                  style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', border: 0 }}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                ></iframe>
              </div>
            ) : (
              <div className="project-image-wrap">
                <img 
                  src={project.image} 
                  loading="eager" 
                  alt={project.title} 
                  className="projec-image-main-copy"
                />
              </div>
            )}

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

            {/* Showcase Images Deck / Thumbnails Grid */}
            {project.thumbnails && project.thumbnails.length > 0 && (
              <div className="project-thumb-wrap" style={{ display: 'flex', flexDirection: 'column', gap: '0' }}>
                {project.thumbnails.map((thumbnailObj, index) => {
                  if (Array.isArray(thumbnailObj)) {
                    // Render as an inner grid if it's an array. Use smaller minmax if 4 items are present to ensure a 4-column layout
                    const minWidth = thumbnailObj.length >= 4 ? '150px' : '300px';
                    return (
                      <div key={index} style={{ display: 'grid', gridTemplateColumns: `repeat(auto-fit, minmax(${minWidth}, 1fr))`, gap: '20px', margin: '20px 0' }}>
                        {thumbnailObj.map((subThumb, subIndex) => (
                          <div className="project-thumb" key={subIndex}>
                            <img 
                              src={subThumb} 
                              loading="lazy" 
                              alt={`${project.title} screenshot ${index + 1} - part ${subIndex + 1}`} 
                              className="project-thumb-image"
                              style={{ width: '100%', height: 'auto', display: 'block', objectFit: 'cover' }}
                            />
                          </div>
                        ))}
                      </div>
                    );
                  }
                  
                  // Render as a full-width single image
                  return (
                    <div className="project-thumb" key={index} style={{ width: '100%', margin: 0, padding: 0 }}>
                      <img 
                        src={thumbnailObj} 
                        loading="lazy" 
                        alt={`${project.title} screenshot ${index + 1}`} 
                        className="project-thumb-image"
                        style={{ width: '100%', height: 'auto', display: 'block', objectFit: 'cover' }}
                      />
                    </div>
                  );
                })}
              </div>
            )}

          </div>
        </div>
      </section>

      {/* More Projects Recommendations Section */}
      <MoreProjects currentProjectId={projectId} onSelectProject={onSelectProject} />
    </article>
  );
}
