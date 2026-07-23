import React, { useEffect } from 'react';
import '../styles/case-study.css';
import { projectData } from '../data/projectsData';
import MoreProjects from './MoreProjects';

export default function OnpreoAppDetail({ projectId, onSelectProject }) {
  // Find current project by id
  const project = projectData.find((p) => p.id === parseInt(projectId)) || projectData[2];

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
          alt="Onpreo App Hero" 
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
                The focus was on an intuitive user flow that promotes productivity while simultaneously enabling smooth management of properties and leads.
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
              Real estate agents spend 70% of their time outside the office without optimal access to customer data.
            </div>
            <div className="cs-body-text">
              Previously, Onpreo offered no mobile solution for real estate agents. This led to restricted comfort and limited flexibility for agents in the field.<br/><br/>
              Without a mobile CRM app, agents ran the risk of forgetting important information, missing lead updates, and sub-optimally coordinating appointments.
            </div>
          </div>
        </div>
        <div className="cs-img-bg" style={{ padding: 0, background: 'transparent', marginTop: '40px' }}>
          <img src="./images/onpreo-app/testing-insights.png" alt="Onpreo App Challenge Mockup" style={{ width: '100%', height: 'auto', borderRadius: '16px', display: 'block' }} />
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
            <img src="./images/onpreo-app/problem-statement.png" alt="Problem Statement" style={{ width: '100%', height: 'auto', borderRadius: '24px', display: 'block', objectFit: 'cover' }} />
          </div>
        </div>
        
        <div className="grid-cs _1-1" style={{ marginTop: '40px', gap: '30px' }}>
          <div className="cs-img-bg" style={{ marginTop: 0, padding: 0, background: 'transparent', borderRadius: '24px', overflow: 'hidden' }}>
            <img src="./images/onpreo-app/empathy-map.png" alt="Empathy Map" style={{ width: '100%', height: 'auto', borderRadius: '24px', display: 'block' }} />
          </div>
          <div className="cs-img-bg" style={{ marginTop: 0, padding: 0, background: 'transparent', borderRadius: '24px', overflow: 'hidden' }}>
            <img src="./images/onpreo-app/user-persona.png" alt="User Persona" style={{ width: '100%', height: 'auto', borderRadius: '24px', display: 'block' }} />
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
          <div className="cs-img-bg" style={{ marginTop: 0, padding: 0, background: 'transparent' }}>
            <img src="./images/onpreo-app/wireframes.png" alt="Onpreo App Wireframes" style={{ width: '100%', height: 'auto', borderRadius: '12px', display: 'block' }} />
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
          <div className="cs-img-bg" style={{ marginTop: 0, padding: 0, background: 'transparent' }}>
             <img src="./images/onpreo-app/problem-mockup.png" alt="Testing Insights Mockup" style={{ width: '100%', height: 'auto', borderRadius: '12px', display: 'block' }} />
          </div>
        </div>

        <div className="grid-cs grid-2x3">
          <div className="cs-grid-block">
            <div className="cs-tiny-text" style={{ color: '#fff' }}>01 / Navigation</div>
            <div className="cs-body-text" style={{ fontWeight: 600 }}>Cluttered Navigation</div>
            <div className="cs-body-text">The main menu items were hard to reach on mobile devices.</div>
          </div>
          <div className="cs-grid-block">
            <div className="cs-tiny-text" style={{ color: '#fff' }}>02 / Lead Management</div>
            <div className="cs-body-text" style={{ fontWeight: 600 }}>Missing Quick Actions</div>
            <div className="cs-body-text">Users wanted to be able to call leads directly from the list view.</div>
          </div>
          <div className="cs-grid-block">
            <div className="cs-tiny-text" style={{ color: '#fff' }}>03 / Scheduling</div>
            <div className="cs-body-text" style={{ fontWeight: 600 }}>Calendar Integration</div>
            <div className="cs-body-text">A clear overview of todays appointments was missing from the dashboard.</div>
          </div>
          <div className="cs-grid-block">
            <div className="cs-tiny-text" style={{ color: '#fff' }}>04 / Confirmation</div>
            <div className="cs-body-text" style={{ fontWeight: 600 }}>Feedback nach Aktion</div>
            <div className="cs-body-text">Users were unsure if a contract change had been successfully saved.</div>
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
              <li>Introduction of bottom navigation for quick access</li>
              <li>Added swipe gestures for quick actions on leads</li>
              <li>Dashboard widget for daily appointments</li>
              <li>Clear toast notifications after save actions</li>
            </ul>
          </div>
          <div>
            <div className="cs-body-text">
              The changes were implemented directly in the high-fidelity prototype. I paid special attention to a consistent and visually appealing design that matches Onpreo CI.
            </div>
          </div>
        </div>

        <div className="grid-cs grid-3x2" style={{ marginTop: '40px', gap: '20px' }}>
          <div className="cs-img-bg" style={{ padding: 0, background: 'transparent' }}>
            <img src="./images/onpreo-app/components-list-push.png" alt="List Item, Push Notification & Illustrationen" style={{ width: '100%', height: 'auto', borderRadius: '12px', display: 'block' }} />
          </div>
          <div className="cs-img-bg" style={{ padding: 0, background: 'transparent' }}>
            <img src="./images/onpreo-app/components-buttons.png" alt="Button & Swipe cards Button" style={{ width: '100%', height: 'auto', borderRadius: '12px', display: 'block' }} />
          </div>
          <div className="cs-img-bg" style={{ padding: 0, background: 'transparent' }}>
            <img src="./images/onpreo-app/components-card-modal.png" alt="Card and Modal" style={{ width: '100%', height: 'auto', borderRadius: '12px', display: 'block' }} />
          </div>
        </div>
      </section>

      {/* Result & Outlook */}
      <section className="cs-section">
        <h3 className="cs-h3">Result and Outlook</h3>
        <div className="cs-subline" style={{ marginBottom: '40px' }}>
          The Onpreo app lays the foundation for a digital experience that drastically simplifies the mobile everyday life of real estate agents.
        </div>
        <div className="grid-cs grid-2x3">
          <div className="cs-grid-block">
             <div className="cs-body-text">Expansion of the application to include additional analytics features.</div>
          </div>
          <div className="cs-grid-block">
             <div className="cs-body-text">Development of a dark mode for better readability on the go.</div>
          </div>
          <div className="cs-grid-block">
             <div className="cs-body-text">Live integration of Google Maps for fast route planning to properties.</div>
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
          The app feels light and inviting while emphasizing the professional character of Onpreo.
        </div>
        <div className="grid-cs grid-5x1" style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: '20px' }}>
          {/* Row 1: Screens 1 to 5 */}
          <div className="cs-img-bg" style={{ padding: 0, background: 'transparent' }}><img src="./images/onpreo-app/screens/screen-1.png" alt="Screen 1 - Splash Logo" style={{ width: '100%', height: 'auto', display: 'block', borderRadius: '16px' }} /></div>
          <div className="cs-img-bg" style={{ padding: 0, background: 'transparent' }}><img src="./images/onpreo-app/screens/screen-2.png" alt="Screen 2 - Akquise Welcome" style={{ width: '100%', height: 'auto', display: 'block', borderRadius: '16px' }} /></div>
          <div className="cs-img-bg" style={{ padding: 0, background: 'transparent' }}><img src="./images/onpreo-app/screens/screen-3.png" alt="Screen 3 - Pricing Plan" style={{ width: '100%', height: 'auto', display: 'block', borderRadius: '16px' }} /></div>
          <div className="cs-img-bg" style={{ padding: 0, background: 'transparent' }}><img src="./images/onpreo-app/screens/screen-4.png" alt="Screen 4 - Password Reset" style={{ width: '100%', height: 'auto', display: 'block', borderRadius: '16px' }} /></div>
          <div className="cs-img-bg" style={{ padding: 0, background: 'transparent' }}><img src="./images/onpreo-app/screens/screen-5.png" alt="Screen 5 - Dashboard Home" style={{ width: '100%', height: 'auto', display: 'block', borderRadius: '16px' }} /></div>

          {/* Row 2: Screens 6 to 10 */}
          <div className="cs-img-bg" style={{ padding: 0, background: 'transparent' }}><img src="./images/onpreo-app/screens/screen-6.png" alt="Screen 6 - Task Offen Details" style={{ width: '100%', height: 'auto', display: 'block', borderRadius: '16px' }} /></div>
          <div className="cs-img-bg" style={{ padding: 0, background: 'transparent' }}><img src="./images/onpreo-app/screens/screen-7.png" alt="Screen 7 - Call Modal" style={{ width: '100%', height: 'auto', display: 'block', borderRadius: '16px' }} /></div>
          <div className="cs-img-bg" style={{ padding: 0, background: 'transparent' }}><img src="./images/onpreo-app/screens/screen-8.png" alt="Screen 8 - Call Action" style={{ width: '100%', height: 'auto', display: 'block', borderRadius: '16px' }} /></div>
          <div className="cs-img-bg" style={{ padding: 0, background: 'transparent' }}><img src="./images/onpreo-app/screens/screen-9.png" alt="Screen 9 - Voice Recording Transkription" style={{ width: '100%', height: 'auto', display: 'block', borderRadius: '16px' }} /></div>
          <div className="cs-img-bg" style={{ padding: 0, background: 'transparent' }}><img src="./images/onpreo-app/screens/screen-10.png" alt="Screen 10 - Inbox Notifications" style={{ width: '100%', height: 'auto', display: 'block', borderRadius: '16px' }} /></div>

          {/* Row 3: Screens 11 to 15 */}
          <div className="cs-img-bg" style={{ padding: 0, background: 'transparent' }}><img src="./images/onpreo-app/screens/screen-11.png" alt="Screen 11 - Kontakt details" style={{ width: '100%', height: 'auto', display: 'block', borderRadius: '16px' }} /></div>
          <div className="cs-img-bg" style={{ padding: 0, background: 'transparent' }}><img src="./images/onpreo-app/screens/screen-12.png" alt="Screen 12 - Alle Notizen" style={{ width: '100%', height: 'auto', display: 'block', borderRadius: '16px' }} /></div>
          <div className="cs-img-bg" style={{ padding: 0, background: 'transparent' }}><img src="./images/onpreo-app/screens/screen-13.png" alt="Screen 13 - Aufgabe zuweisen" style={{ width: '100%', height: 'auto', display: 'block', borderRadius: '16px' }} /></div>
          <div className="cs-img-bg" style={{ padding: 0, background: 'transparent' }}><img src="./images/onpreo-app/screens/screen-14.png" alt="Screen 14 - Immobilien Daten" style={{ width: '100%', height: 'auto', display: 'block', borderRadius: '16px' }} /></div>
          <div className="cs-img-bg" style={{ padding: 0, background: 'transparent' }}><img src="./images/onpreo-app/screens/screen-15.png" alt="Screen 15 - Deals Besichtigung" style={{ width: '100%', height: 'auto', display: 'block', borderRadius: '16px' }} /></div>
        </div>
      </section>

      <div className="cs-divider"></div>

      {/* More Projects Recommendations Section */}
      <MoreProjects currentProjectId={projectId} onSelectProject={onSelectProject} />
    </div>
  );
}



