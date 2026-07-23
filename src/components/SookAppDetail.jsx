import React, { useEffect } from 'react';
import '../styles/case-study.css';
import { projectData } from '../data/projectsData';
import MoreProjects from './MoreProjects';

export default function SookAppDetail({ projectId, onSelectProject }) {
  // Find current project by id
  const project = projectData.find((p) => p.id === parseInt(projectId)) || projectData[3];

  // Scroll to top when project changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [projectId]);

  return (
    <div className="cs-page-wrapper">
      
      {/* Hero Section */}
      <section className="cs-section">
        <img 
          src={project.image} 
          alt="SOOK App Hero" 
          className="cs-header-img"
        />
        <div className="global-heading" style={{ marginBottom: '60px' }}>
          <h1 className="display-01 align-center">{project.title}</h1>
          <div className="heading-subtitle">{project.subtitle}</div>
        </div>
        
        {/* Overview Grid */}
        <div style={{ marginTop: '80px' }}>
          <h2 className="cs-h2">Overview</h2>
          <div className="grid-cs _1-0-5">
            <div>
              <h3 className="cs-h3">In short</h3>
              <div className="cs-body-text">
                {project.overview}
                <br/><br/>
                The focus was on an intuitive user flow that simplifies and speeds up the purchase of authentic Arabic products.
              </div>
            </div>
            
            <div className="grid-cs _1-1" style={{ gap: '20px' }}>
              <div>
                <div className="cs-tiny-text">My Role</div>
                <div className="cs-body-text">Concept<br/>UX/UI Design & Prototyping<br/>Graphics & Animations</div>
              </div>
              <div>
                <div className="cs-tiny-text">Timeframe</div>
                <div className="cs-body-text">{project.date}</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="cs-divider"></div>

      {/* The Challenge */}
      <section className="cs-section">
        <h2 className="cs-h2">The Challenge</h2>
        <div className="grid-cs _0-5-1">
          <div>
            <h3 className="cs-h3">The Problem</h3>
            <div className="cs-subline" style={{ marginBottom: '20px' }}>
              There is no central, trustworthy platform for Arabic products in Germany.
            </div>
            <div className="cs-body-text">
              The Arabic product market in Germany is highly fragmented. Without a modern digital solution, consumers often have to visit various local markets, which costs time and trust.<br/><br/>
              At the same time, there was a lack of fast delivery options (like 30-minute delivery), leaving a gap in the current market for this target group.
            </div>
          </div>
        </div>
        <div className="cs-img-bg" style={{ padding: 0, background: 'transparent', marginTop: '40px', borderRadius: '24px', overflow: 'hidden' }}>
          <img src="./images/sook-app/testing-insights.png" alt="SOOK App Challenge Mockup" style={{ width: '100%', height: 'auto', borderRadius: '24px', display: 'block', objectFit: 'cover' }} />
        </div>
      </section>

      {/* Approach */}
      <section className="cs-section">
        <div className="grid-cs _1-1">
          <div>
            <h3 className="cs-h3">My Approach</h3>
            <div className="cs-body-text">
              To gain a deep understanding of the app users, I first conducted comprehensive research. Based on the findings, I created personas and supplemented them with problem statements and empathy maps to clearly map out user needs and challenges.
            </div>
          </div>
          <div className="cs-img-bg" style={{ marginTop: 0, padding: 0, background: 'transparent', borderRadius: '24px', overflow: 'hidden', width: '100%' }}>
            <img src="./images/sook-app/problem-statement.png" alt="Problem Statement" style={{ width: '100%', height: 'auto', borderRadius: '24px', display: 'block', objectFit: 'cover' }} />
          </div>
        </div>
        
        <div className="grid-cs _1-1" style={{ marginTop: '40px', gap: '30px' }}>
          <div className="cs-img-bg" style={{ marginTop: 0, padding: 0, background: 'transparent', borderRadius: '24px', overflow: 'hidden' }}>
            <img src="./images/sook-app/empathy-map.png" alt="Empathy Map" style={{ width: '100%', height: 'auto', borderRadius: '24px', display: 'block' }} />
          </div>
          <div className="cs-img-bg" style={{ marginTop: 0, padding: 0, background: 'transparent', borderRadius: '24px', overflow: 'hidden' }}>
            <img src="./images/sook-app/user-persona.png" alt="User Persona" style={{ width: '100%', height: 'auto', borderRadius: '24px', display: 'block' }} />
          </div>
        </div>
      </section>

      {/* Prototyping */}
      <section className="cs-section">
        <div className="grid-cs _1-1">
          <div>
            <h3 className="cs-h3">Prototyping</h3>
            <div className="cs-body-text">
              First, I created wireframes to quickly visualize initial ideas. After several iterations, I developed low-fidelity wireframes, which I finally expanded into an interactive prototype. This prototype served as the basis for subsequent user testing.
            </div>
          </div>
          <div className="cs-img-bg" style={{ marginTop: 0, padding: 0, background: 'transparent', borderRadius: '24px', overflow: 'hidden' }}>
            <img src="./images/sook-app/wireframes.png" alt="SOOK App Wireframes" style={{ width: '100%', height: 'auto', borderRadius: '24px', display: 'block' }} />
          </div>
        </div>
      </section>

      {/* Testing Feedback */}
      <section className="cs-section">
        <div className="grid-cs _1-1" style={{ marginBottom: '40px' }}>
          <div>
            <h3 className="cs-h3">Feedback from Testing</h3>
            <div className="cs-body-text">
              To test the wireframes and collect initial user feedback, I invited testers. My goal was to identify usability problems and areas for improvement early on.
            </div>
          </div>
          <div className="cs-img-bg" style={{ marginTop: 0, padding: 0, background: 'transparent', borderRadius: '24px', overflow: 'hidden' }}>
             <img src="./images/sook-app/problem-mockup.png" alt="Testing Insights" style={{ width: '100%', height: 'auto', borderRadius: '24px', display: 'block' }} />
          </div>
        </div>

        <div className="grid-cs grid-2x3">
          <div className="cs-grid-block">
            <div className="cs-tiny-text" style={{ color: '#fff' }}>01 / SEARCH</div>
            <div className="cs-body-text" style={{ fontWeight: 600 }}>Cluttered Categories</div>
            <div className="cs-body-text">The Arabic specialties were hard to filter.</div>
          </div>
          <div className="cs-grid-block">
            <div className="cs-tiny-text" style={{ color: '#fff' }}>02 / CART</div>
            <div className="cs-body-text" style={{ fontWeight: 600 }}>Missing Quick Actions</div>
            <div className="cs-body-text">Users wanted to add products directly from the list view.</div>
          </div>
          <div className="cs-grid-block">
            <div className="cs-tiny-text" style={{ color: '#fff' }}>03 / TRUST</div>
            <div className="cs-body-text" style={{ fontWeight: 600 }}>Quality Assurance</div>
            <div className="cs-body-text">A clear overview of Halal certificates was missing.</div>
          </div>
          <div className="cs-grid-block">
            <div className="cs-tiny-text" style={{ color: '#fff' }}>04 / CHECKOUT</div>
            <div className="cs-body-text" style={{ fontWeight: 600 }}>Feedback after Action</div>
            <div className="cs-body-text">Users were unsure about the exact delivery time.</div>
          </div>
        </div>
      </section>

      {/* Implementation */}
      <section className="cs-section">
        <div className="grid-cs _1-1">
          <div>
            <h3 className="cs-h3">The Implementation</h3>
            <div className="cs-body-text" style={{ fontWeight: 600 }}>
              Based on user feedback, I specifically improved the prototype:
            </div>
            <ul className="cs-list">
              <li>Introduced clear filtering by origin and product type</li>
              <li>Added "Quick Add" buttons for frequently purchased products</li>
              <li>Clear icons for certificates (like Halal, Vegan)</li>
              <li>Live tracking map for the 30-minute delivery</li>
            </ul>
          </div>
          <div>
            <div className="cs-body-text">
              The changes were implemented directly in the high-fidelity prototype. I paid special attention to a consistent and visually appealing design that matches SOOK's identity.
            </div>
          </div>
        </div>

        <div className="grid-cs grid-3x2" style={{ marginTop: '40px', gap: '20px' }}>
          <div className="cs-img-bg" style={{ padding: 0, background: 'transparent', borderRadius: '24px', overflow: 'hidden' }}>
            <img src="./images/sook-app/design-system-colors.png" alt="SOOK Design System - Farben" style={{ width: '100%', height: 'auto', borderRadius: '24px', display: 'block' }} />
          </div>
          <div className="cs-img-bg" style={{ padding: 0, background: 'transparent', borderRadius: '24px', overflow: 'hidden' }}>
            <img src="./images/sook-app/design-system-buttons.png" alt="SOOK Design System - Buttons" style={{ width: '100%', height: 'auto', borderRadius: '24px', display: 'block' }} />
          </div>
          <div className="cs-img-bg" style={{ padding: 0, background: 'transparent', borderRadius: '24px', overflow: 'hidden' }}>
            <img src="./images/sook-app/design-system-cards.png" alt="SOOK Design System - Cards & Navbar" style={{ width: '100%', height: 'auto', borderRadius: '24px', display: 'block' }} />
          </div>
        </div>
      </section>

      {/* Result & Outlook */}
      <section className="cs-section">
        <h3 className="cs-h3">Result and Outlook</h3>
        <div className="cs-subline" style={{ marginBottom: '40px' }}>
          The SOOK app lays the foundation for a digital experience that seamlessly connects consumers with authentic Arabic products.
        </div>
        <div className="grid-cs grid-2x3">
          <div className="cs-grid-block">
             <div className="cs-body-text">Expanding the app with additional recipes and bundle purchases.</div>
          </div>
          <div className="cs-grid-block">
             <div className="cs-body-text">Building a loyalty program.</div>
          </div>
          <div className="cs-grid-block">
             <div className="cs-body-text">Integrating more local supermarkets in additional cities.</div>
          </div>
          <div className="cs-grid-block">
             <div className="cs-body-text">Conduct a second usability study to gather further feedback from the field.</div>
          </div>
        </div>
      </section>

      {/* Final Screens */}
      <section className="cs-section">
        <h3 className="cs-h3">Final Screens</h3>
        <div className="cs-subline" style={{ marginBottom: '40px' }}>
          The app feels light and inviting while emphasizing SOOK's authentic character.
        </div>
        <div className="grid-cs" style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '20px' }}>
          {/* Row 1: Screens 1 to 4 (Onboarding & Auth) */}
          <div className="cs-img-bg" style={{ padding: 0, background: 'transparent' }}><img src="./images/sook-app/screens/screen-1.jpg" alt="Screen 1 - Onboarding Categories" style={{ width: '100%', height: 'auto', display: 'block', borderRadius: '16px' }} /></div>
          <div className="cs-img-bg" style={{ padding: 0, background: 'transparent' }}><img src="./images/sook-app/screens/screen-2.jpg" alt="Screen 2 - Onboarding Discounts" style={{ width: '100%', height: 'auto', display: 'block', borderRadius: '16px' }} /></div>
          <div className="cs-img-bg" style={{ padding: 0, background: 'transparent' }}><img src="./images/sook-app/screens/screen-3.jpg" alt="Screen 3 - Onboarding 30 Min Delivery" style={{ width: '100%', height: 'auto', display: 'block', borderRadius: '16px' }} /></div>
          <div className="cs-img-bg" style={{ padding: 0, background: 'transparent' }}><img src="./images/sook-app/screens/screen-4.jpg" alt="Screen 4 - Store Login" style={{ width: '100%', height: 'auto', display: 'block', borderRadius: '16px' }} /></div>

          {/* Row 2: Screens 5 to 8 (Home & Discovery) */}
          <div className="cs-img-bg" style={{ padding: 0, background: 'transparent' }}><img src="./images/sook-app/screens/screen-5.jpg" alt="Screen 5 - Home Feed & Offers" style={{ width: '100%', height: 'auto', display: 'block', borderRadius: '16px' }} /></div>
          <div className="cs-img-bg" style={{ padding: 0, background: 'transparent' }}><img src="./images/sook-app/screens/screen-6.jpg" alt="Screen 6 - Categories List" style={{ width: '100%', height: 'auto', display: 'block', borderRadius: '16px' }} /></div>
          <div className="cs-img-bg" style={{ padding: 0, background: 'transparent' }}><img src="./images/sook-app/screens/screen-7.jpg" alt="Screen 7 - Search & Popular Tags" style={{ width: '100%', height: 'auto', display: 'block', borderRadius: '16px' }} /></div>
          <div className="cs-img-bg" style={{ padding: 0, background: 'transparent' }}><img src="./images/sook-app/screens/screen-8.jpg" alt="Screen 8 - Fleisch Product Grid" style={{ width: '100%', height: 'auto', display: 'block', borderRadius: '16px' }} /></div>

          {/* Row 3: Screens 9 to 12 (Cart, Checkout & Tracking) */}
          <div className="cs-img-bg" style={{ padding: 0, background: 'transparent' }}><img src="./images/sook-app/screens/screen-9.jpg" alt="Screen 9 - Süßigkeiten Category" style={{ width: '100%', height: 'auto', display: 'block', borderRadius: '16px' }} /></div>
          <div className="cs-img-bg" style={{ padding: 0, background: 'transparent' }}><img src="./images/sook-app/screens/screen-10.jpg" alt="Screen 10 - Warenkorb" style={{ width: '100%', height: 'auto', display: 'block', borderRadius: '16px' }} /></div>
          <div className="cs-img-bg" style={{ padding: 0, background: 'transparent' }}><img src="./images/sook-app/screens/screen-11.jpg" alt="Screen 11 - Zahlungserfolg" style={{ width: '100%', height: 'auto', display: 'block', borderRadius: '16px' }} /></div>
          <div className="cs-img-bg" style={{ padding: 0, background: 'transparent' }}><img src="./images/sook-app/screens/screen-12.png" alt="Screen 12 - Live Delivery Tracking" style={{ width: '100%', height: 'auto', display: 'block', borderRadius: '16px' }} /></div>
        </div>
      </section>

      <div className="cs-divider"></div>

      {/* More Projects Recommendations Section */}
      <MoreProjects currentProjectId={projectId} onSelectProject={onSelectProject} />
    </div>
  );
}



