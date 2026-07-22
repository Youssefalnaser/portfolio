import React, { useEffect, useState } from 'react';
import '../styles/case-study.css';
import { projectData } from '../data/projectsData';
import MoreProjects from './MoreProjects';
import { ReactCompareSlider, ReactCompareSliderImage } from 'react-compare-slider';

const CompareSliderWithLabels = ({ beforeImage, afterImage, beforeLabel = "Before", afterLabel = "After" }) => {
  const [isInteracting, setIsInteracting] = useState(false);

  return (
    <div 
      className="cs-img-bg" 
      style={{ padding: '0', overflow: 'hidden', borderRadius: '12px', position: 'relative' }}
      onPointerDown={() => setIsInteracting(true)}
      onPointerUp={() => setIsInteracting(false)}
      onPointerLeave={() => setIsInteracting(false)}
      onTouchStart={() => setIsInteracting(true)}
      onTouchEnd={() => setIsInteracting(false)}
    >
      <div 
        className="ba-label ba-label-before" 
        style={{ opacity: isInteracting ? 0 : 1, zIndex: 10, transition: 'opacity 0.3s ease', pointerEvents: 'none' }}
      >
        {beforeLabel}
      </div>
      <div 
        className="ba-label ba-label-after" 
        style={{ opacity: isInteracting ? 0 : 1, zIndex: 10, transition: 'opacity 0.3s ease', pointerEvents: 'none' }}
      >
        {afterLabel}
      </div>
      <ReactCompareSlider
        itemOne={<ReactCompareSliderImage src={beforeImage} alt={beforeLabel} />}
        itemTwo={<ReactCompareSliderImage src={afterImage} alt={afterLabel} />}
        style={{ width: '100%', height: 'auto', aspectRatio: '16/10' }}
      />
    </div>
  );
};

const comparisonsData = [
  {
    id: "dashboard",
    title: "Dashboard & Overview",
    gridClass: "_0-5-1",
    contentLeft: {
      title: "The Problem",
      text: "The old dashboard was overloaded with data points and tables. Important KPIs were lost in the flood of information, and the navigation was complex and unintuitive."
    },
    contentRight: {
      title: "The Solution",
      text: "A clear visual hierarchy. The introduction of a modular widget system allows agents to immediately grasp the most important metrics without having to scroll. The navigation was simplified and structured."
    },
    beforeImage: "./images/onpreo-desktop/before/dashboard-before.png",
    afterImage: "https://cdn.prod.website-files.com/69e16e603fdbf624251e812f/6a2a07366f20b81700e265e6_MacBook%20Pro%2016_%20-%206.png"
  },
  {
    id: "properties",
    title: "Property View",
    gridClass: "_1-0-5",
    contentLeft: {
      title: "Clarity instead of Chaos",
      text: "The property list view was previously an endless, unstructured table (left). The redesign (right) added visual separators, highlighted important status information, and made filters more accessible."
    },
    beforeImage: "./images/onpreo-desktop/before/property-before.png",
    afterImage: "https://cdn.prod.website-files.com/69e16e603fdbf624251e812f/6a2a0736ee56bf7e4bb9f41a_MacBook%20Pro%2016_%20-%2041.png"
  },
  {
    id: "leads",
    title: "Lead Management",
    gridClass: "_0-5-1",
    contentLeft: {
      title: "The Problem",
      text: "The lead view offered no quick access to communication history or next steps, which slowed down the sales process."
    },
    contentRight: {
      title: "The Solution",
      text: "A Kanban-like board and expanded detail views now make it possible to instantly recognize the status of each lead and execute actions with one click."
    },
    beforeImage: "./images/onpreo-desktop/before/lead-before.png",
    afterImage: "https://cdn.prod.website-files.com/69e16e603fdbf624251e812f/6a2a0736009020acd4f0e250_MacBook%20Pro%2016_%20-%2017.png"
  },
  {
    id: "tasks",
    title: "Task Management",
    gridClass: "_1-0-5",
    contentLeft: {
      title: "Focus auf das Wichtigste",
      text: "Tasks were completely visually overhauled. Due dates and priorities are now immediately apparent through intelligent badges and typography rules, massively supporting the daily planning of agents."
    },
    beforeImage: "./images/onpreo-desktop/before/mailcenter-before.png",
    afterImage: "https://cdn.prod.website-files.com/69e16e603fdbf624251e812f/6a2a07363224b7933b55340d_MacBook%20Pro%2016_%20-%2027.png"
  }
];

export default function OnpreoDesktopDetail({ projectId, onSelectProject, goBack }) {
  const project = projectData.find((p) => p.id === parseInt(projectId)) || projectData[1];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [projectId]);

  return (
    <div className="cs-page-wrapper">
      
      {/* Hero Section */}
      <section className="cs-section">
        <img 
          src={project.image} 
          alt="Onpreo Desktop Hero" 
          className="cs-header-img"
        />
        <div className="global-heading" style={{ marginBottom: '60px' }}>
          <h1 className="display-01 align-center">{project.title}</h1>
          <div className="heading-subtitle">{project.subtitle}</div>
        </div>
        
        {/* Overview Grid */}
        <div style={{ marginTop: '80px' }}>
          <h2 className="cs-h2">Project Overview</h2>
          <div className="grid-cs _1-0-5">
            <div>
              <h3 className="cs-h3">Objective</h3>
              <div className="cs-body-text">
                {project.overview}
                <br/><br/>
                The desktop version of the Onpreo CRM had grown organically over time and suffered from visual overload. The goal was to clean up the information architecture and create an intuitive work environment for real estate agents.
              </div>
            </div>
            
            <div className="grid-cs _1-1" style={{ gap: '20px' }}>
              <div>
                <div className="cs-tiny-text">Client</div>
                <div className="cs-body-text">onpreo AG</div>
              </div>
              <div>
                <div className="cs-tiny-text">Role</div>
                <div className="cs-body-text">UX/UI Redesign</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="cs-divider"></div>

      {/* Dynamic Before / After Comparisons */}
      {comparisonsData.map((comp) => (
        <React.Fragment key={comp.id}>
          <section className="cs-section">
            <h2 className="cs-h2">{comp.title}</h2>
            <div className={`grid-cs ${comp.gridClass}`} style={{ marginBottom: '40px' }}>
              <div>
                <h3 className="cs-h3">{comp.contentLeft.title}</h3>
                <div className="cs-body-text">{comp.contentLeft.text}</div>
              </div>
              {comp.contentRight && (
                <div>
                  <h3 className="cs-h3">{comp.contentRight.title}</h3>
                  <div className="cs-body-text">{comp.contentRight.text}</div>
                </div>
              )}
            </div>
            
            <CompareSliderWithLabels 
              beforeImage={comp.beforeImage} 
              afterImage={comp.afterImage} 
            />
          </section>

          <div className="cs-divider"></div>
        </React.Fragment>
      ))}

      {/* Result Section */}
      <section className="cs-section">
        <h3 className="cs-h3">Conclusion: {project.finalResult}</h3>
        <div className="cs-subline" style={{ marginBottom: '40px' }}>
          The redesign drastically reduced the onboarding time for new employees and increased efficiency in daily work.
        </div>
        
        <div className="grid-cs grid-2x3">
           <div className="cs-grid-block">
             <div className="cs-tiny-text" style={{ color: '#fff' }}>01 / Focus</div>
             <div className="cs-body-text">Reduction of visual complexity by 40%</div>
           </div>
           <div className="cs-grid-block">
             <div className="cs-tiny-text" style={{ color: '#fff' }}>02 / Navigation</div>
             <div className="cs-body-text">Introduction of a flat and intuitive sidebar</div>
           </div>
           <div className="cs-grid-block">
             <div className="cs-tiny-text" style={{ color: '#fff' }}>03 / Action</div>
             <div className="cs-body-text">Important Call-to-Actions (CTAs) are immediately accessible</div>
           </div>
        </div>
      </section>

      <div className="cs-divider"></div>

      {/* More Projects Recommendations Section */}
      <MoreProjects currentProjectId={projectId} onSelectProject={onSelectProject} />
    </div>
  );
}


