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
          <h2 className="cs-h2">Überblick</h2>
          <div className="grid-cs _1-0-5">
            <div>
              <h3 className="cs-h3">Kurz gesagt</h3>
              <div className="cs-body-text">
                {project.overview}
                <br/><br/>
                Der Fokus lag auf einer intuitiven Nutzerführung, die Produktivität fördert und gleichzeitig eine reibungslose Verwaltung von Immobilien und Leads ermöglicht.
              </div>
            </div>
            
            <div className="grid-cs _1-1" style={{ gap: '20px' }}>
              <div>
                <div className="cs-tiny-text">Meine Rolle</div>
                <div className="cs-body-text">Konzeption<br/>UX-/UI-Design & Prototyping<br/>Grafiken & Animationen</div>
              </div>
              <div>
                <div className="cs-tiny-text">Zeitraum</div>
                <div className="cs-body-text">{project.date}</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="cs-divider"></div>

      {/* The Challenge */}
      <section className="cs-section">
        <h2 className="cs-h2">Die Herausforderung</h2>
        <div className="grid-cs _0-5-1">
          <div>
            <h3 className="cs-h3">Das Problem</h3>
            <div className="cs-subline" style={{ marginBottom: '20px' }}>
              Makler verbringen 70% ihrer Zeit außerhalb des Büros ohne optimalen Zugriff auf Kundendaten.
            </div>
            <div className="cs-body-text">
              Bislang bot Onpreo keine mobile Lösung für Makler an. Das führte zu eingeschränktem Komfort und begrenzter Flexibilität für die Agenten im Außendienst.<br/><br/>
              Ohne eine mobile CRM-App liefen Makler Gefahr, wichtige Informationen zu vergessen, Lead-Updates zu verpassen und Termine nicht optimal zu koordinieren.
            </div>
          </div>
        </div>
        <div className="cs-img-bg" style={{ padding: 0, background: 'transparent', marginTop: '40px' }}>
          <img src="/images/onpreo-app/testing-insights.png" alt="Onpreo App Challenge Mockup" style={{ width: '100%', height: 'auto', borderRadius: '16px', display: 'block' }} />
        </div>
      </section>

      {/* Approach */}
      <section className="cs-section">
        <div className="grid-cs _1-1">
          <div>
            <h3 className="cs-h3">Mein Vorgehen</h3>
            <div className="cs-body-text">
              Um ein tiefes Verständnis für die Nutzer der App zu gewinnen, habe ich zunächst umfassende Recherchen durchgeführt. Auf Basis der Ergebnisse habe ich Personas erstellt und diese durch Problem-Statements und Empathy Maps ergänzt, um die Bedürfnisse und Herausforderungen der Nutzer klar abzubilden.
            </div>
          </div>
          <div className="cs-img-bg" style={{ marginTop: 0, padding: 0, background: 'transparent', borderRadius: '24px', overflow: 'hidden', width: '100%' }}>
            <img src="/images/onpreo-app/problem-statement.png" alt="Problem Statement" style={{ width: '100%', height: 'auto', borderRadius: '24px', display: 'block', objectFit: 'cover' }} />
          </div>
        </div>
        
        <div className="grid-cs _1-1" style={{ marginTop: '40px', gap: '30px' }}>
          <div className="cs-img-bg" style={{ marginTop: 0, padding: 0, background: 'transparent', borderRadius: '24px', overflow: 'hidden' }}>
            <img src="/images/onpreo-app/empathy-map.png" alt="Empathy Map" style={{ width: '100%', height: 'auto', borderRadius: '24px', display: 'block' }} />
          </div>
          <div className="cs-img-bg" style={{ marginTop: 0, padding: 0, background: 'transparent', borderRadius: '24px', overflow: 'hidden' }}>
            <img src="/images/onpreo-app/user-persona.png" alt="User Persona" style={{ width: '100%', height: 'auto', borderRadius: '24px', display: 'block' }} />
          </div>
        </div>
      </section>

      {/* Prototyping */}
      <section className="cs-section">
        <div className="grid-cs _1-1">
          <div>
            <h3 className="cs-h3">Prototyping</h3>
            <div className="cs-body-text">
              Zunächst erstellte ich Wireframes, um erste Ideen schnell zu visualisieren. Nach mehreren Iterationen entwickelte ich Low-Fidelity-Wireframes, die ich schließlich zu einem interaktiven Prototypen ausbaute. Dieser Prototyp diente als Grundlage für anschließende Nutzertests.
            </div>
          </div>
          <div className="cs-img-bg" style={{ marginTop: 0, padding: 0, background: 'transparent' }}>
            <img src="/images/onpreo-app/wireframes.png" alt="Onpreo App Wireframes" style={{ width: '100%', height: 'auto', borderRadius: '12px', display: 'block' }} />
          </div>
        </div>
      </section>

      {/* Testing Feedback */}
      <section className="cs-section">
        <div className="grid-cs _1-1" style={{ marginBottom: '40px' }}>
          <div>
            <h3 className="cs-h3">Feedback aus dem Testing</h3>
            <div className="cs-body-text">
              Um die Wireframes zu testen und erstes User-Feedback zu sammeln, lud ich Tester ein. Mein Ziel bestand darin, Usability-Probleme und Verbesserungsmöglichkeiten frühzeitig zu identifizieren.
            </div>
          </div>
          <div className="cs-img-bg" style={{ marginTop: 0, padding: 0, background: 'transparent' }}>
             <img src="/images/onpreo-app/problem-mockup.png" alt="Testing Insights Mockup" style={{ width: '100%', height: 'auto', borderRadius: '12px', display: 'block' }} />
          </div>
        </div>

        <div className="grid-cs grid-2x3">
          <div className="cs-grid-block">
            <div className="cs-tiny-text" style={{ color: '#fff' }}>01 / Navigation</div>
            <div className="cs-body-text" style={{ fontWeight: 600 }}>Unübersichtliche Navigation</div>
            <div className="cs-body-text">Die Hauptmenüpunkte waren auf mobilen Geräten schwer erreichbar.</div>
          </div>
          <div className="cs-grid-block">
            <div className="cs-tiny-text" style={{ color: '#fff' }}>02 / Lead Management</div>
            <div className="cs-body-text" style={{ fontWeight: 600 }}>Fehlende Schnellaktionen</div>
            <div className="cs-body-text">Nutzer wollten Leads direkt aus der Listenansicht anrufen können.</div>
          </div>
          <div className="cs-grid-block">
            <div className="cs-tiny-text" style={{ color: '#fff' }}>03 / Terminplanung</div>
            <div className="cs-body-text" style={{ fontWeight: 600 }}>Kalender-Integration</div>
            <div className="cs-body-text">Es fehlte eine klare Übersicht der heutigen Termine auf dem Dashboard.</div>
          </div>
          <div className="cs-grid-block">
            <div className="cs-tiny-text" style={{ color: '#fff' }}>04 / Bestätigung</div>
            <div className="cs-body-text" style={{ fontWeight: 600 }}>Feedback nach Aktion</div>
            <div className="cs-body-text">Nutzer waren unsicher, ob eine Vertragsänderung erfolgreich gespeichert wurde.</div>
          </div>
        </div>
      </section>

      {/* Implementation */}
      <section className="cs-section">
        <div className="grid-cs _1-1">
          <div>
            <h3 className="cs-h3">Die Umsetzung</h3>
            <div className="cs-body-text" style={{ fontWeight: 600 }}>
              Auf Basis des Nutzer-Feedbacks habe ich den Prototypen gezielt verbessert:
            </div>
            <ul className="cs-list">
              <li>Einführung einer Bottom-Navigation für schnellen Zugriff</li>
              <li>Swipe-Gesten für Schnellaktionen bei Leads hinzugefügt</li>
              <li>Dashboard-Widget für die tagesaktuellen Termine</li>
              <li>Deutliche Toast-Benachrichtigungen nach Speicheraktionen</li>
            </ul>
          </div>
          <div>
            <div className="cs-body-text">
              Die Änderungen wurden direkt im High-Fidelity-Prototypen umgesetzt. Dabei habe ich besonderes Augenmerk auf eine konsistente und visuell ansprechende Gestaltung gelegt, die zur CI von Onpreo passt.
            </div>
          </div>
        </div>

        <div className="grid-cs grid-3x2" style={{ marginTop: '40px', gap: '20px' }}>
          <div className="cs-img-bg" style={{ padding: 0, background: 'transparent' }}>
            <img src="/images/onpreo-app/components-list-push.png" alt="List Item, Push Notification & Illustrationen" style={{ width: '100%', height: 'auto', borderRadius: '12px', display: 'block' }} />
          </div>
          <div className="cs-img-bg" style={{ padding: 0, background: 'transparent' }}>
            <img src="/images/onpreo-app/components-buttons.png" alt="Button & Swipe cards Button" style={{ width: '100%', height: 'auto', borderRadius: '12px', display: 'block' }} />
          </div>
          <div className="cs-img-bg" style={{ padding: 0, background: 'transparent' }}>
            <img src="/images/onpreo-app/components-card-modal.png" alt="Card and Modal" style={{ width: '100%', height: 'auto', borderRadius: '12px', display: 'block' }} />
          </div>
        </div>
      </section>

      {/* Result & Outlook */}
      <section className="cs-section">
        <h3 className="cs-h3">Ergebnis und Ausblick</h3>
        <div className="cs-subline" style={{ marginBottom: '40px' }}>
          Die Onpreo-App legt den Grundstein für ein digitales Erlebnis, das den mobilen Alltag der Makler drastisch vereinfacht.
        </div>
        <div className="grid-cs grid-2x3">
          <div className="cs-grid-block">
             <div className="cs-body-text">Erweiterung der Anwendung um zusätzliche Analytics-Funktionen.</div>
          </div>
          <div className="cs-grid-block">
             <div className="cs-body-text">Entwicklung eines Dark-Modes für bessere Lesbarkeit unterwegs.</div>
          </div>
          <div className="cs-grid-block">
             <div className="cs-body-text">Live-Integration von Google Maps für schnelle Routenplanung zu Objekten.</div>
          </div>
          <div className="cs-grid-block">
             <div className="cs-body-text">Zweite Usability-Study durchführen, um weiteres Feedback aus dem Feld zu sammeln.</div>
          </div>
        </div>
      </section>

      {/* Final Screens */}
      <section className="cs-section">
        <h3 className="cs-h3">Final Screens</h3>
        <div className="cs-subline" style={{ marginBottom: '40px' }}>
          Die App wirkt leicht und einladend und unterstreicht gleichzeitig den professionellen Charakter von Onpreo.
        </div>
        <div className="grid-cs grid-5x1" style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: '20px' }}>
          {/* Row 1: Screens 1 to 5 */}
          <div className="cs-img-bg" style={{ padding: 0, background: 'transparent' }}><img src="/images/onpreo-app/screens/screen-1.png" alt="Screen 1 - Splash Logo" style={{ width: '100%', height: 'auto', display: 'block', borderRadius: '16px' }} /></div>
          <div className="cs-img-bg" style={{ padding: 0, background: 'transparent' }}><img src="/images/onpreo-app/screens/screen-2.png" alt="Screen 2 - Akquise Welcome" style={{ width: '100%', height: 'auto', display: 'block', borderRadius: '16px' }} /></div>
          <div className="cs-img-bg" style={{ padding: 0, background: 'transparent' }}><img src="/images/onpreo-app/screens/screen-3.png" alt="Screen 3 - Pricing Plan" style={{ width: '100%', height: 'auto', display: 'block', borderRadius: '16px' }} /></div>
          <div className="cs-img-bg" style={{ padding: 0, background: 'transparent' }}><img src="/images/onpreo-app/screens/screen-4.png" alt="Screen 4 - Password Reset" style={{ width: '100%', height: 'auto', display: 'block', borderRadius: '16px' }} /></div>
          <div className="cs-img-bg" style={{ padding: 0, background: 'transparent' }}><img src="/images/onpreo-app/screens/screen-5.png" alt="Screen 5 - Dashboard Home" style={{ width: '100%', height: 'auto', display: 'block', borderRadius: '16px' }} /></div>

          {/* Row 2: Screens 6 to 10 */}
          <div className="cs-img-bg" style={{ padding: 0, background: 'transparent' }}><img src="/images/onpreo-app/screens/screen-6.png" alt="Screen 6 - Task Offen Details" style={{ width: '100%', height: 'auto', display: 'block', borderRadius: '16px' }} /></div>
          <div className="cs-img-bg" style={{ padding: 0, background: 'transparent' }}><img src="/images/onpreo-app/screens/screen-7.png" alt="Screen 7 - Call Modal" style={{ width: '100%', height: 'auto', display: 'block', borderRadius: '16px' }} /></div>
          <div className="cs-img-bg" style={{ padding: 0, background: 'transparent' }}><img src="/images/onpreo-app/screens/screen-8.png" alt="Screen 8 - Call Action" style={{ width: '100%', height: 'auto', display: 'block', borderRadius: '16px' }} /></div>
          <div className="cs-img-bg" style={{ padding: 0, background: 'transparent' }}><img src="/images/onpreo-app/screens/screen-9.png" alt="Screen 9 - Voice Recording Transkription" style={{ width: '100%', height: 'auto', display: 'block', borderRadius: '16px' }} /></div>
          <div className="cs-img-bg" style={{ padding: 0, background: 'transparent' }}><img src="/images/onpreo-app/screens/screen-10.png" alt="Screen 10 - Inbox Notifications" style={{ width: '100%', height: 'auto', display: 'block', borderRadius: '16px' }} /></div>

          {/* Row 3: Screens 11 to 15 */}
          <div className="cs-img-bg" style={{ padding: 0, background: 'transparent' }}><img src="/images/onpreo-app/screens/screen-11.png" alt="Screen 11 - Kontakt details" style={{ width: '100%', height: 'auto', display: 'block', borderRadius: '16px' }} /></div>
          <div className="cs-img-bg" style={{ padding: 0, background: 'transparent' }}><img src="/images/onpreo-app/screens/screen-12.png" alt="Screen 12 - Alle Notizen" style={{ width: '100%', height: 'auto', display: 'block', borderRadius: '16px' }} /></div>
          <div className="cs-img-bg" style={{ padding: 0, background: 'transparent' }}><img src="/images/onpreo-app/screens/screen-13.png" alt="Screen 13 - Aufgabe zuweisen" style={{ width: '100%', height: 'auto', display: 'block', borderRadius: '16px' }} /></div>
          <div className="cs-img-bg" style={{ padding: 0, background: 'transparent' }}><img src="/images/onpreo-app/screens/screen-14.png" alt="Screen 14 - Immobilien Daten" style={{ width: '100%', height: 'auto', display: 'block', borderRadius: '16px' }} /></div>
          <div className="cs-img-bg" style={{ padding: 0, background: 'transparent' }}><img src="/images/onpreo-app/screens/screen-15.png" alt="Screen 15 - Deals Besichtigung" style={{ width: '100%', height: 'auto', display: 'block', borderRadius: '16px' }} /></div>
        </div>
      </section>

      <div className="cs-divider"></div>

      {/* More Projects Recommendations Section */}
      <MoreProjects currentProjectId={projectId} onSelectProject={onSelectProject} />
    </div>
  );
}
