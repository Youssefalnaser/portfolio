import React, { useState, useEffect, useRef } from 'react';
import '../styles/components.css';

export default function About() {
  const [exp, setExp] = useState(0);
  const [projects, setProjects] = useState(0);
  const sectionRef = useRef(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;
          
          // Animate Experience (0 to 1)
          let expStart = 0;
          const expEnd = 1;
          const expTimer = setInterval(() => {
            expStart += 1;
            setExp(expStart);
            if (expStart >= expEnd) clearInterval(expTimer);
          }, 300);

          // Animate Projects (0 to 10)
          let projStart = 0;
          const projEnd = 10;
          const projTimer = setInterval(() => {
            projStart += 1;
            setProjects(projStart);
            if (projStart >= projEnd) clearInterval(projTimer);
          }, 80);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section id="about" ref={sectionRef} className="section">
      <div className="container">
        {/* Section Top Bar */}
        <div className="top-bar">
          <div className="caps">/ About</div>
          <div className="caps">N. 01</div>
        </div>

        {/* Section Content */}
        <div className="about-content">
          {/* Portrait Image */}
          <div className="about-img-wrap">
            <img 
              src="https://cdn.prod.website-files.com/69e16e603fdbf624251e812f/69ee9c92e2c220d60316b022_Gemini_Generated_Image_kwludwkwludwkwlu%201.png" 
              alt="Youssef Alnaser Portrait" 
              className="about-image"
            />
          </div>

          {/* Right Text Bio & Stats */}
          <div className="about-text-wrap">
            <h2 className="about-bio">
              I'm a UI/UX designer turning complex problems into simple, beautiful digital products.
              <span className="soft-text"> from DE Wolfenbüttel.</span>
            </h2>

            {/* Download CV Action Button */}
            <div className="about-actions" style={{ margin: '15px 0 25px' }}>
              <a 
                href="https://drive.google.com/file/d/1Lvt7f54hrWgAz7rwratmKON_w2Kjbifn/view" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="button-secondary"
                style={{ padding: '0.8rem 2.2rem', fontSize: '0.85rem' }}
              >
                Download CV
              </a>
            </div>

            {/* Stats Items */}
            <div className="about-stats">
              <div className="stat-item">
                <span className="stat-number">{exp}+</span>
                <span className="stat-text">
                  Years Experience<br/>
                  <span className="soft-text">Deliver with excellence</span>
                </span>
              </div>

              <div className="stat-item">
                <span className="stat-number">{projects}+</span>
                <span className="stat-text">
                  Completed Projects<br/>
                  <span className="soft-text">Projects that speak</span>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
