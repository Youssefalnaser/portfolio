import React, { useState, useEffect } from 'react';
import './styles/main.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import AllProjects from './components/AllProjects';
import ProjectDetail from './components/ProjectDetail';
import Expertise from './components/Expertise';
import Resume from './components/Resume';
import Talk from './components/Talk';
import Footer from './components/Footer';

export default function App() {
  const [view, setView] = useState('home'); // 'home' | 'projects' | 'project-detail'
  const [previousView, setPreviousView] = useState('home');
  const [selectedProjectId, setSelectedProjectId] = useState(null);
  const [scrollTarget, setScrollTarget] = useState(null);

  // Handle scrolling to section when returning to Home view
  useEffect(() => {
    if (view === 'home' && scrollTarget) {
      const timeoutId = setTimeout(() => {
        const element = document.getElementById(scrollTarget);
        if (element) {
          const headerOffset = 90;
          const elementPosition = element.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

          window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
          });
        }
        setScrollTarget(null);
      }, 50);

      return () => clearTimeout(timeoutId);
    }
  }, [view, scrollTarget]);

  // Handle browser back button (popstate)
  useEffect(() => {
    const handlePopState = (event) => {
      if (event.state) {
        setView(event.state.view || 'home');
        setSelectedProjectId(event.state.projectId || null);
      } else {
        // Fallback if no state
        setView('home');
        setSelectedProjectId(null);
      }
    };

    window.addEventListener('popstate', handlePopState);
    
    // Initial state push if we load the page fresh
    if (!window.history.state) {
      window.history.replaceState({ view: 'home', projectId: null }, "", "/");
    }

    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const navigateTo = (targetView, targetSection = null) => {
    if (targetView !== view) {
      setPreviousView(view);
    }
    if (targetView === 'home') {
      setView('home');
      setSelectedProjectId(null);
      window.history.pushState({ view: 'home', projectId: null }, "", "/");
      if (targetSection) {
        setScrollTarget(targetSection);
      } else {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    } else if (targetView === 'projects') {
      setView('projects');
      setSelectedProjectId(null);
      window.history.pushState({ view: 'projects', projectId: null }, "", "/projects");
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleSelectProject = (id) => {
    setPreviousView(view);
    setSelectedProjectId(id);
    setView('project-detail');
    
    // Update URL dynamically based on project ID
    const projectSlug = `project-${id}`;
    window.history.pushState({ view: 'project-detail', projectId: id }, "", `/projects/${projectSlug}`);
    
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const goBack = () => {
    setView(previousView);
    setSelectedProjectId(null);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="page-wrapper">
      {/* Global Background Gridlines */}
      <div className="bg-line-wrap">
        <div className="bg-line"></div>
        <div className="bg-line"></div>
        <div className="bg-line"></div>
        <div className="bg-line"></div>
      </div>

      {/* Shared Header Navigation */}
      <Navbar navigateTo={navigateTo} currentView={view} />

      {/* Conditionally render views */}
      {view === 'home' && (
        <>
          <Hero />
          <About />
          <Projects 
            onExploreAll={() => navigateTo('projects')} 
            onSelectProject={handleSelectProject} 
          />
          <Expertise />
          <Resume />
        </>
      )}

      {view === 'projects' && (
        <AllProjects onSelectProject={handleSelectProject} />
      )}

      {view === 'project-detail' && (
        <ProjectDetail 
          projectId={selectedProjectId} 
          onSelectProject={handleSelectProject}
          navigateTo={navigateTo}
          goBack={goBack}
        />
      )}

      {/* Shared Footer sections */}
      <Talk />
      <Footer />
    </div>
  );
}
