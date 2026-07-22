import React from 'react';
import '../styles/components.css';

const PlusIcon = () => (
  <div className="plus-icon-shape">
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M14.75 7.74854L0.75 7.74853" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
      <path d="M7.74805 0.75L7.74805 14.75" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
    </svg>
  </div>
);

export default function Hero() {
  return (
    <header id="home" className="hero-section">
      {/* Background Image */}
      <div className="hero-bg-image-wrap">
        <img 
          src="https://cdn.prod.website-files.com/69e16e603fdbf624251e812f/69e192343c8b88335ad0cf3f_DSC05615%201.webp" 
          alt="Youssef Alnaser Background" 
          className="hero-bg-image"
        />
      </div>

      {/* Decorative Grid Pluses */}
      <div className="body-shape plus-top-left"><PlusIcon /></div>
      <div className="body-shape plus-top-right"><PlusIcon /></div>
      <div className="body-shape plus-bottom-left"><PlusIcon /></div>
      <div className="body-shape plus-bottom-right"><PlusIcon /></div>

      <div className="container hero-container">
        {/* Top Badges */}
        <div className="hero-top">
          <div className="hero-top-left">
            UI/UX Design /<br/>
            Web Design / Prototyping /
          </div>

          <div className="hero-top-right">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M1.35 6.75012H18.15M1.35 12.7501H18.15M0.75 9.75012C0.75 10.932 0.982792 12.1023 1.43508 13.1943C1.88738 14.2862 2.55031 15.2784 3.38604 16.1141C4.22177 16.9498 5.21392 17.6127 6.30585 18.065C7.39778 18.5173 8.5681 18.7501 9.75 18.7501C10.9319 18.7501 12.1022 18.5173 13.1942 18.065C14.2861 17.6127 15.2782 16.9498 16.114 16.1141C16.9497 15.2784 17.6126 14.2862 18.0649 13.1943C18.5172 12.1023 18.75 10.932 18.75 9.75012C18.75 7.36317 17.8018 5.07399 16.114 3.38616C14.4261 1.69833 12.1369 0.750122 9.75 0.750122C7.36305 0.750122 5.07387 1.69833 3.38604 3.38616C1.69821 5.07399 0.75 7.36317 0.75 9.75012Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M9.24967 0.750122C7.56501 3.44973 6.67188 6.56799 6.67188 9.75012C6.67188 12.9323 7.56501 16.0505 9.24967 18.7501M10.2497 0.750122C11.9343 3.44973 12.8275 6.56799 12.8275 9.75012C12.8275 12.9323 11.9343 16.0505 10.2497 18.7501" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
            Based in Germany
          </div>
        </div>

        {/* Bottom Signature Headline & Scroll Indicator */}
        <div className="hero-bottom">
          <div className="hero-heading-wrap">
            <span className="hero-subtitle soft-text">Hi, I am</span>
            <h1 className="display-01 hero-title">Youssef</h1>
            <h1 className="hero-title-last">Alnaser</h1>
          </div>

          <a href="#about" className="hero-scroll-indicator">
            <span>Scroll down</span>
            <span className="scroll-arrow">↓</span>
          </a>
        </div>
      </div>
    </header>
  );
}
