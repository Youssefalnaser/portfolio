import React from 'react';
import '../styles/components.css';

export default function Talk() {
  return (
    <section id="talk" className="cta-section">
      {/* Background & Gradients */}
      <div className="cta-bg-image-wrap">
        <img 
          src="https://cdn.prod.website-files.com/69e16e603fdbf624251e812f/69e16e613fdbf624251e81e8_CTA_bg_Image.webp" 
          alt="CTA Sand Background" 
          className="cta-bg-image"
          loading="lazy"
        />
        <div className="cta-dark-gradient"></div>
      </div>

      <div className="container cta-container">
        {/* Call to Action Text */}
        <div className="cta-content">
          <h2 className="display-02">
            Anything in Mind?<br/>
            <span className="soft-text">Let’s Talk</span>
          </h2>
          <a href="mailto:yousefalnaser@example.com" className="button-secondary">
            Let's Discuss
          </a>
        </div>

        {/* Stacked Showcase Images */}
        <div className="cta-image-deck">
          <div className="cta-card cta-card-left">
            <img 
              src="https://cdn.prod.website-files.com/69e16e603fdbf624251e812f/6a05281ef758aafd99a9c6a7_Screenshot%202026-05-14%20033924.png" 
              alt="Mockup Left" 
              loading="lazy"
            />
          </div>
          <div className="cta-card cta-card-main">
            <img 
              src="https://cdn.prod.website-files.com/69e16e603fdbf624251e812f/6a052846700fc5f7bd47807f_Screenshot%202026-05-14%20034120.png" 
              alt="Mockup Center" 
              loading="lazy"
            />
          </div>
          <div className="cta-card cta-card-right">
            <img 
              src="https://cdn.prod.website-files.com/69e16e603fdbf624251e812f/6a05281e4d9460d525af22b9_Screenshot%202026-05-14%20033943.png" 
              alt="Mockup Right" 
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
