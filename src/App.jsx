import React, { useEffect } from 'react';
import { Routes, Route, useNavigate, useLocation, useParams } from 'react-router-dom';
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
import { getProjectSlug } from './data/projectsData';

function ProjectDetailWrapper() {
  const { slug } = useParams();
  const navigate = useNavigate();
  
  const handleSelectProject = (id) => {
    const nextSlug = getProjectSlug(id);
    navigate(`/project/${nextSlug}`);
  };

  const navigateTo = (targetView, targetSection = null) => {
    if (targetView === 'home') {
      navigate('/');
      if (targetSection) {
        setTimeout(() => {
          const element = document.getElementById(targetSection);
          if (element) {
            const headerOffset = 90;
            const elementPosition = element.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
            window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
          }
        }, 100);
      }
    } else if (targetView === 'projects') {
      navigate('/projects');
    }
  };

  const goBack = () => {
    navigate(-1);
  };

  return (
    <ProjectDetail 
      projectSlug={slug} 
      onSelectProject={handleSelectProject}
      navigateTo={navigateTo}
      goBack={goBack}
    />
  );
}

export default function App() {
  const navigate = useNavigate();
  const location = useLocation();

  // Scroll to top on route change (except when scrolling to a specific section on home)
  useEffect(() => {
    if (location.pathname !== '/') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [location.pathname]);

  const navigateTo = (targetView, targetSection = null) => {
    if (targetView === 'home') {
      navigate('/');
      if (targetSection) {
        setTimeout(() => {
          const element = document.getElementById(targetSection);
          if (element) {
            const headerOffset = 90;
            const elementPosition = element.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
            window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
          }
        }, 100);
      } else {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    } else if (targetView === 'projects') {
      navigate('/projects');
    }
  };

  const handleSelectProject = (id) => {
    const slug = getProjectSlug(id);
    navigate(`/project/${slug}`);
  };

  // Determine current view for Navbar active state
  const currentView = location.pathname === '/' ? 'home' 
                    : location.pathname === '/projects' ? 'projects' 
                    : location.pathname.startsWith('/project/') ? 'project-detail' 
                    : 'home';

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
      <Navbar navigateTo={navigateTo} currentView={currentView} />

      <Routes>
        <Route path="/" element={
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
        } />

        <Route path="/projects" element={
          <AllProjects onSelectProject={handleSelectProject} />
        } />

        <Route path="/project/:slug" element={<ProjectDetailWrapper />} />
      </Routes>

      {/* Shared Footer sections */}
      <Talk />
      <Footer />
    </div>
  );
}
