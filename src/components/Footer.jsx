import React from 'react';
import '../styles/components.css';

export default function Footer() {
  return (
    <footer className="footer-section">
      {/* Background Gradient */}
      <img 
        src="https://cdn.prod.website-files.com/69e16e603fdbf624251e812f/69e16e613fdbf624251e81da_Footer_Gradient_Bg.webp" 
        alt="Footer Gradient Overlay" 
        className="footer-gradient-bg"
        loading="lazy"
      />

      <div className="container footer-container">
        {/* Top Info Bar */}
        <div className="footer-top-wrap">
          <div className="phone-wrap">
            <a href="tel:015228072039" className="phone-number">
              015228072039
            </a>
          </div>
          
          <div className="social-icon-wrap">
            <a 
              href="https://www.linkedin.com/in/youssef-alnaser" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="social-link"
            >
              LI
            </a>
          </div>
        </div>

        {/* Huge Typographic Logo Overlay */}
        <div className="footer-logo-wrap">
          <img 
            src="https://cdn.prod.website-files.com/69e16e603fdbf624251e812f/6a597496a3e46ec67682bd22_Asset%203.svg" 
            alt="Youssef Alnaser" 
            className="footer-logo-img"
            loading="lazy"
          />
        </div>

        {/* Bottom Copyright Bar */}
        <div className="footer-bottom-bar">
          <div>© {new Date().getFullYear()} Youssef Alnaser. All rights reserved.</div>
          <div>UI/UX Portfolio</div>
        </div>
      </div>
    </footer>
  );
}
