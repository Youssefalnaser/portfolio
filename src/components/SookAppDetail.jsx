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
          <h2 className="cs-h2">Überblick</h2>
          <div className="grid-cs _1-0-5">
            <div>
              <h3 className="cs-h3">Kurz gesagt</h3>
              <div className="cs-body-text">
                {project.overview}
                <br/><br/>
                Der Fokus lag auf einer intuitiven Nutzerführung, die den Kauf von authentischen arabischen Produkten vereinfacht und beschleunigt.
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
              Es gibt keine zentrale, vertrauenswürdige Plattform für arabische Produkte in Deutschland.
            </div>
            <div className="cs-body-text">
              Der arabische Produktmarkt in Deutschland ist stark fragmentiert. Ohne eine moderne digitale Lösung müssen Konsumenten oft verschiedene lokale Märkte aufsuchen, was Zeit und Vertrauen kostet.<br/><br/>
              Gleichzeitig mangelte es an schnellen Lieferoptionen (wie 30-Minuten-Delivery), was eine Lücke auf dem aktuellen Markt für diese Zielgruppe bedeutet.
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
            <h3 className="cs-h3">Mein Vorgehen</h3>
            <div className="cs-body-text">
              Um ein tiefes Verständnis für die Nutzer der App zu gewinnen, habe ich zunächst umfassende Recherchen durchgeführt. Auf Basis der Ergebnisse habe ich Personas erstellt und diese durch Problem-Statements und Empathy Maps ergänzt, um die Bedürfnisse und Herausforderungen der Nutzer klar abzubilden.
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
              Zunächst erstellte ich Wireframes, um erste Ideen schnell zu visualisieren. Nach mehreren Iterationen entwickelte ich Low-Fidelity-Wireframes, die ich schließlich zu einem interaktiven Prototypen ausbaute. Dieser Prototyp diente als Grundlage für anschließende Nutzertests.
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
            <h3 className="cs-h3">Feedback aus dem Testing</h3>
            <div className="cs-body-text">
              Um die Wireframes zu testen und erstes User-Feedback zu sammeln, lud ich Tester ein. Mein Ziel bestand darin, Usability-Probleme und Verbesserungsmöglichkeiten frühzeitig zu identifizieren.
            </div>
          </div>
          <div className="cs-img-bg" style={{ marginTop: 0, padding: 0, background: 'transparent', borderRadius: '24px', overflow: 'hidden' }}>
             <img src="./images/sook-app/problem-mockup.png" alt="Testing Insights" style={{ width: '100%', height: 'auto', borderRadius: '24px', display: 'block' }} />
          </div>
        </div>

        <div className="grid-cs grid-2x3">
          <div className="cs-grid-block">
            <div className="cs-tiny-text" style={{ color: '#fff' }}>01 / Suche</div>
            <div className="cs-body-text" style={{ fontWeight: 600 }}>Unübersichtliche Kategorien</div>
            <div className="cs-body-text">Die arabischen Spezialitäten waren schwer zu filtern.</div>
          </div>
          <div className="cs-grid-block">
            <div className="cs-tiny-text" style={{ color: '#fff' }}>02 / Warenkorb</div>
            <div className="cs-body-text" style={{ fontWeight: 600 }}>Fehlende Schnellaktionen</div>
            <div className="cs-body-text">Nutzer wollten Produkte direkt aus der Listenansicht hinzufügen.</div>
          </div>
          <div className="cs-grid-block">
            <div className="cs-tiny-text" style={{ color: '#fff' }}>03 / Vertrauen</div>
            <div className="cs-body-text" style={{ fontWeight: 600 }}>Qualitätssicherung</div>
            <div className="cs-body-text">Es fehlte eine klare Übersicht der Halal-Zertifikate.</div>
          </div>
          <div className="cs-grid-block">
            <div className="cs-tiny-text" style={{ color: '#fff' }}>04 / Checkout</div>
            <div className="cs-body-text" style={{ fontWeight: 600 }}>Feedback nach Aktion</div>
            <div className="cs-body-text">Nutzer waren unsicher über die exakte Lieferzeit.</div>
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
              <li>Einführung einer klaren Filterung nach Herkunft und Produkttyp</li>
              <li>"Quick Add" Buttons für häufig gekaufte Produkte hinzugefügt</li>
              <li>Deutliche Icons für Zertifikate (wie Halal, Vegan)</li>
              <li>Live-Tracking Map für die 30-Minuten-Lieferung</li>
            </ul>
          </div>
          <div>
            <div className="cs-body-text">
              Die Änderungen wurden direkt im High-Fidelity-Prototypen umgesetzt. Dabei habe ich besonderes Augenmerk auf eine konsistente und visuell ansprechende Gestaltung gelegt, die zur Identität von SOOK passt.
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
        <h3 className="cs-h3">Ergebnis und Ausblick</h3>
        <div className="cs-subline" style={{ marginBottom: '40px' }}>
          Die SOOK-App legt den Grundstein für ein digitales Erlebnis, das Konsumenten und authentische arabische Produkte nahtlos verbindet.
        </div>
        <div className="grid-cs grid-2x3">
          <div className="cs-grid-block">
             <div className="cs-body-text">Erweiterung der Anwendung um zusätzliche Rezepte und Bundle-Käufe.</div>
          </div>
          <div className="cs-grid-block">
             <div className="cs-body-text">Aufbau eines Loyalty-Programms.</div>
          </div>
          <div className="cs-grid-block">
             <div className="cs-body-text">Integration von mehr lokalen Supermärkten in weiteren Städten.</div>
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
          Die App wirkt leicht und einladend und unterstreicht gleichzeitig den authentischen Charakter von SOOK.
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
