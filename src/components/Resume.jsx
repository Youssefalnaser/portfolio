import React, { useState } from 'react';
import '../styles/components.css';

const resumeItems = [
  {
    role: "UI/UX Designer",
    company: "onpreo AG",
    date: "Apr 2026 – Present",
    desc: "Designing digital products end-to-end — mobile UI, Webflow websites, marketing campaigns and print materials as part of a professional product team.",
    tags: ["UI/UX Design", "Webflow", "Mobile", "Marketing Design"]
  },
  {
    role: "Bachelorarbeit (Grade 1.3)",
    company: "onpreo AG",
    date: "Dec 2025 – Mar 2026",
    desc: "Conceived and designed a user-centred mobile CRM app for real estate agents — based on UX research, cognitive load theory and an interactive Figma prototype.",
    tags: ["UX Research", "Information Architecture", "Figma Prototype", "Mobile UI", "Visual Concept"]
  },
  {
    role: "Praktikant – Webdesign & UI/UX",
    company: "onpreo AG",
    date: "Sep 2025 – Nov 2025",
    desc: "Designed and developed web projects using Figma and Webflow. Created UI components for mobile interfaces and produced marketing and print materials.",
    tags: ["Figma", "Webflow", "UI Components", "Print Design"]
  },
  {
    role: "Werkstudent – Media Design",
    company: "Auerswald GmbH & Co. KG",
    date: "Apr 2022 – Jun 2022",
    desc: "Supported the design team in creating digital marketing materials and visual content.",
    tags: ["Adobe Suite", "Digital Design", "Marketing Materials"]
  },
  {
    role: "Media Designer – Digital & Print",
    company: "Riaz Al Basha",
    date: "Jan 2021 – Jun 2021",
    desc: "Designed digital and print materials for a furniture brand — product catalogues, social media visuals and promotional content.",
    tags: ["Print Design", "Digital Design", "Adobe Suite", "Social Media"]
  }
];

export default function Resume() {
  const [activeIndex, setActiveIndex] = useState(0);

  const toggleIndex = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section id="resume" className="section resume-section">
      <div className="container resume-container-grid">
        {/* Sticky Left Title */}
        <div className="resume-title-wrap">
          <h2 className="display-03">My<br/>Resume</h2>
        </div>

        {/* Right Accordion List */}
        <div className="resume-list">
          {resumeItems.map((item, idx) => {
            const isActive = activeIndex === idx;
            return (
              <div 
                key={idx} 
                className={`resume-wrapper ${isActive ? 'active' : ''}`}
              >
                {/* Header Bar */}
                <div 
                  className="resume-headline-bar"
                  onClick={() => toggleIndex(idx)}
                >
                  <div className="resume-date">{item.date}</div>
                  <h3 className="resume-position">{item.role}</h3>
                  <div className="resume-company">{item.company}</div>
                  <div className="resume-toggle-icon"></div>
                </div>

                {/* Collapsible Details Body */}
                <div className="resume-description">
                  <p className="resume-text">{item.desc}</p>
                  <div className="resume-tags">
                    {item.tags.map((tag, tIdx) => (
                      <span key={tIdx} className="resume-tag">{tag}</span>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
