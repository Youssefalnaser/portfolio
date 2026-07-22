import React, { useState, useEffect } from 'react';
import '../styles/components.css';

export default function Navbar({ navigateTo, currentView }) {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);

  const handleLinkClick = (e, targetId) => {
    e.preventDefault();
    setIsOpen(false);
    
    if (targetId === 'projects') {
      navigateTo('projects');
    } else {
      navigateTo('home', targetId);
    }
  };

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="container nav-wrapper">
        {/* Brand Logo */}
        <a href="#home" onClick={(e) => handleLinkClick(e, 'home')} className="nav-brand">
          <img 
            src="https://cdn.prod.website-files.com/69e16e603fdbf624251e812f/6a597443fb4e8948af2d6c5a_Asset%201.svg" 
            alt="Youssef Alnaser" 
          />
        </a>

        {/* Desktop Links */}
        <div className="nav-links">
          <a href="#home" onClick={(e) => handleLinkClick(e, 'home')} className={`nav-link ${currentView === 'home' ? 'active' : ''}`}>
            Home <span className="nav-number">01</span>
          </a>
          <a href="#about" onClick={(e) => handleLinkClick(e, 'about')} className="nav-link">
            About me <span className="nav-number">02</span>
          </a>
          <a href="#projects" onClick={(e) => handleLinkClick(e, 'projects')} className={`nav-link ${currentView === 'projects' ? 'active' : ''}`}>
            Work <span className="nav-number">03</span>
          </a>
          <a href="#talk" onClick={(e) => handleLinkClick(e, 'talk')} className="nav-link">
            Contact <span className="nav-number">04</span>
          </a>
        </div>

        {/* Mobile Toggle Button */}
        <div className={`menu-button ${isOpen ? 'active' : ''}`} onClick={toggleMenu}>
          <div className="menu-bar"></div>
          <div className="menu-bar"></div>
          <div className="menu-bar"></div>
        </div>

        {/* Mobile Fullscreen Overlay */}
        <div className={`mobile-nav-overlay ${isOpen ? 'active' : ''}`}>
          <div className="mobile-nav-links">
            <a href="#home" onClick={(e) => handleLinkClick(e, 'home')} className="mobile-nav-link">
              Home <span className="nav-number">01</span>
            </a>
            <a href="#about" onClick={(e) => handleLinkClick(e, 'about')} className="mobile-nav-link">
              About me <span className="nav-number">02</span>
            </a>
            <a href="#projects" onClick={(e) => handleLinkClick(e, 'projects')} className="mobile-nav-link">
              Work <span className="nav-number">03</span>
            </a>
            <a href="#talk" onClick={(e) => handleLinkClick(e, 'talk')} className="mobile-nav-link">
              Contact <span className="nav-number">04</span>
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
