import React, { useEffect } from 'react';
import '../styles/components.css';
import { projectData } from '../data/projectsData';
import MoreProjects from './MoreProjects';

export default function IhopDetail({ projectSlug, onSelectProject, navigateTo, goBack }) {
  const project = projectData.find(p => p.id === 11);

  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [projectSlug]);

  return (
    <article className="page-wrapper" style={{ paddingTop: '120px' }}>
      {/* 1. Hero & Overview */}
      <section className="margin-top">
        <div className="page-padding">
          <div className="container margin-top">
            
            <div className="global-heading" style={{ marginBottom: '60px' }}>
              <h1 className="display-01 align-center">{project.title}</h1>
              <div className="heading-subtitle">{project.subtitle}</div>
            </div>

            <div className="project-image-wrap">
              <img 
                src={project.image} 
                loading="eager" 
                alt={`${project.title} Mockup`} 
                className="projec-image-main-copy"
                style={{ borderRadius: '16px' }}
              />
            </div>

            <div style={{ marginTop: '80px' }}>
              <div className="top-bar">
                <div className="body-text-5 caps">/ Project Overview</div>
                <div className="body-text-5 caps">01</div>
              </div>
              
              <div className="grid-cs _1-0-5" style={{ marginTop: '40px' }}>
                <div>
                  <h3 className="cs-h3">The Problem</h3>
                  <div className="cs-body-text">
                    {project.overview}
                  </div>
                </div>
                <div className="grid-cs _1-1" style={{ gap: '20px' }}>
                  <div>
                    <div className="cs-tiny-text">Client</div>
                    <div className="cs-body-text">{project.client}</div>
                  </div>
                  <div>
                    <div className="cs-tiny-text">Role</div>
                    <div className="cs-body-text">{project.category}</div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 2. User Research & Persona */}
      <section className="margin-top" style={{ padding: '80px 0' }}>
        <div className="page-padding">
          <div className="container">
            <div className="top-bar">
              <div className="body-text-5 caps">/ User Research & Persona</div>
              <div className="body-text-5 caps">02</div>
            </div>
            
            <div style={{ marginTop: '40px', marginBottom: '40px' }}>
              <h2 className="cs-h2">Understanding the Target Audience</h2>
              <div className="cs-body-text" style={{ maxWidth: '800px' }}>
                To design an effective platform, we needed to understand our primary users. We developed user personas based on research, identifying core motivations like healthy living, and key challenges such as budget constraints and time efficiency.
              </div>
            </div>

            <div className="grid-cs _1-1" style={{ gap: '40px' }}>
              <div className="project-image-wrap" style={{ margin: 0, height: '100%' }}>
                <img 
                  src="./images/ihop/ihop-persona-visual.png" 
                  alt="Persona Profile" 
                  style={{ width: '100%', height: '100%', objectFit: 'contain', borderRadius: '12px' }} 
                />
              </div>
              <div className="project-image-wrap" style={{ margin: 0, height: '100%' }}>
                <img 
                  src="./images/ihop/ihop-persona-text.png" 
                  alt="Persona Goals and Challenges" 
                  style={{ width: '100%', height: '100%', objectFit: 'contain', borderRadius: '12px' }} 
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Wireframes & Architecture */}
      <section className="margin-top" style={{ padding: '80px 0' }}>
        <div className="page-padding">
          <div className="container">
            <div className="top-bar">
              <div className="body-text-5 caps">/ Wireframing</div>
              <div className="body-text-5 caps">03</div>
            </div>
            
            <div style={{ marginTop: '40px', marginBottom: '40px' }}>
              <h2 className="cs-h2">Information Architecture</h2>
              <div className="cs-body-text" style={{ maxWidth: '800px' }}>
                Before applying colors and typography, we established a robust structural foundation. The wireframes prioritize a clear hierarchy, ensuring users can navigate from catalog discovery to checkout with minimal friction.
              </div>
            </div>

            <div className="project-image-wrap" style={{ display: 'flex', justifyContent: 'center', padding: '40px', borderRadius: '16px' }}>
              <img 
                src="./images/ihop/ihop-wireframe.png" 
                alt="IHOP Wireframes" 
                style={{ width: '100%', maxWidth: '350px', height: 'auto', borderRadius: '12px', boxShadow: '0 10px 30px rgba(0,0,0,0.1)' }} 
              />
            </div>
          </div>
        </div>
      </section>

      {/* 4. High-Fidelity UI Design */}
      <section className="margin-top" style={{ padding: '80px 0' }}>
        <div className="page-padding">
          <div className="container">
            <div className="top-bar">
              <div className="body-text-5 caps">/ High-Fidelity UI</div>
              <div className="body-text-5 caps">04</div>
            </div>
            
            <div style={{ marginTop: '40px', marginBottom: '60px' }}>
              <h2 className="cs-h2">Final Design Execution</h2>
              <div className="cs-body-text" style={{ maxWidth: '800px' }}>
                The final interface reflects a fresh, organic, and inviting visual identity. We utilized clean whitespace, vibrant product imagery, and a warm color palette to build trust and appetite.
              </div>
            </div>

            <div className="grid-cs grid-3x2">
              <div className="project-image-wrap" style={{ margin: 0 }}>
                <img src="./images/ihop/ihop-ui-about.png" alt="IHOP UI About" style={{ width: '100%', borderRadius: '12px', boxShadow: '0 10px 30px rgba(0,0,0,0.08)' }} />
              </div>
              <div className="project-image-wrap" style={{ margin: 0 }}>
                <img src="./images/ihop/ihop-ui-produkte.png" alt="IHOP UI Home" style={{ width: '100%', borderRadius: '12px', boxShadow: '0 10px 30px rgba(0,0,0,0.08)' }} />
              </div>
              <div className="project-image-wrap" style={{ margin: 0 }}>
                <img src="./images/ihop/ihop-ui-katalog.png" alt="IHOP UI Katalog" style={{ width: '100%', borderRadius: '12px', boxShadow: '0 10px 30px rgba(0,0,0,0.08)' }} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Marketing & Branding */}
      <section className="margin-top" style={{ padding: '80px 0' }}>
        <div className="page-padding">
          <div className="container">
            <div className="top-bar">
              <div className="body-text-5 caps">/ Branding & Marketing</div>
              <div className="body-text-5 caps">05</div>
            </div>
            
            <div style={{ marginTop: '40px', marginBottom: '40px' }}>
              <h2 className="cs-h2">Holistic Brand Experience</h2>
              <div className="cs-body-text" style={{ maxWidth: '800px' }}>
                The UX/UI design system was extended into marketing materials. By creating cohesive promotional flyers and ads, we ensured that the user's experience with the brand is consistent from the first touchpoint to the final digital interaction.
              </div>
            </div>

            <div className="project-image-wrap" style={{ display: 'flex', justifyContent: 'center' }}>
              <img 
                src="./images/ihop/ihop-flyer.jpg" 
                alt="IHOP Marketing Flyer" 
                style={{ width: '100%', maxWidth: '600px', height: 'auto', borderRadius: '12px', boxShadow: '0 10px 30px rgba(0,0,0,0.1)' }} 
              />
            </div>
          </div>
        </div>
      </section>

      {/* 6. Conclusion */}
      <section className="margin-top" style={{ padding: '40px 0 100px 0' }}>
        <div className="page-padding">
          <div className="container">
            <div className="cs-divider" style={{ margin: '0 0 60px 0' }}></div>
            <h3 className="cs-h3">Fazit</h3>
            <div className="cs-subline" style={{ maxWidth: '900px' }}>
              From initial persona research to the final pixel-perfect interface, IHOP demonstrates a comprehensive user-centered design process. The result is a platform that feels natural, trustworthy, and visually engaging.
            </div>
          </div>
        </div>
      </section>

      <MoreProjects currentProjectId={project.id} onSelectProject={onSelectProject} />
    </article>
  );
}
