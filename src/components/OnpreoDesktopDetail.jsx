import React, { useEffect } from 'react';
import '../styles/case-study.css';
import { projectData } from '../data/projectsData';
import MoreProjects from './MoreProjects';
import ImageSlider from './ImageSlider';

export default function OnpreoDesktopDetail({ projectId, onSelectProject, goBack }) {
  const project = projectData.find((p) => p.id === parseInt(projectId)) || projectData[1];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [projectId]);

  return (
    <div className="cs-page-wrapper">
      
      {/* Hero Section */}
      <section className="cs-section">
        <img 
          src={project.image} 
          alt="Onpreo Desktop Hero" 
          className="cs-header-img"
        />
        <div className="global-heading" style={{ marginBottom: '60px' }}>
          <h1 className="display-01 align-center">{project.title}</h1>
          <div className="heading-subtitle">{project.subtitle}</div>
        </div>
        
        {/* Overview Grid */}
        <div style={{ marginTop: '80px' }}>
          <h2 className="cs-h2">Projektübersicht</h2>
          <div className="grid-cs _1-0-5">
            <div>
              <h3 className="cs-h3">Zielsetzung</h3>
              <div className="cs-body-text">
                {project.overview}
                <br/><br/>
                Die Desktop-Version des Onpreo CRM war historisch gewachsen und litt unter visueller Überladung. Ziel war es, die Informationsarchitektur zu bereinigen und eine intuitive Arbeitsumgebung für Makler zu schaffen.
              </div>
            </div>
            
            <div className="grid-cs _1-1" style={{ gap: '20px' }}>
              <div>
                <div className="cs-tiny-text">Kunde</div>
                <div className="cs-body-text">onpreo AG</div>
              </div>
              <div>
                <div className="cs-tiny-text">Rolle</div>
                <div className="cs-body-text">UX/UI Redesign</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="cs-divider"></div>

      {/* Before / After Comparison 1: Dashboard */}
      <section className="cs-section">
        <h2 className="cs-h2">Dashboard & Übersicht</h2>
        <div className="grid-cs _0-5-1" style={{ marginBottom: '40px' }}>
          <div>
            <h3 className="cs-h3">Das Problem</h3>
            <div className="cs-body-text">
              Das alte Dashboard war mit Datenpunkten und Tabellen überfrachtet. Wichtige KPIs gingen in der Informationsflut unter, und die Navigation war komplex und wenig intuitiv.
            </div>
          </div>
          <div>
             <h3 className="cs-h3">Die Lösung</h3>
             <div className="cs-body-text">
              Eine klare visuelle Hierarchie. Die Einführung eines modularen Widget-Systems erlaubt es den Maklern, die wichtigsten Metriken sofort zu erfassen, ohne scrollen zu müssen. Die Navigation wurde vereinfacht und strukturiert.
             </div>
          </div>
        </div>
        
        <div className="cs-img-bg" style={{ padding: '0', overflow: 'hidden' }}>
          <ImageSlider 
            beforeImage="/dashboard.png"
            afterImage="https://cdn.prod.website-files.com/69e16e603fdbf624251e812f/6a2a07366f20b81700e265e6_MacBook%20Pro%2016_%20-%206.png"
            beforeLabel="Altes Dashboard"
            afterLabel="Neues Widget-System"
          />
        </div>
      </section>

      <div className="cs-divider"></div>

      {/* Before / After Comparison 2: Properties */}
      <section className="cs-section">
        <h2 className="cs-h2">Immobilien-Ansicht</h2>
        <div className="grid-cs _1-0-5" style={{ marginBottom: '40px' }}>
           <div>
             <h3 className="cs-h3">Klarheit statt Chaos</h3>
             <div className="cs-body-text">
              Die Listenansicht der Immobilien war vorher eine endlose, unstrukturierte Tabelle (links). Durch die Neugestaltung (rechts) wurden visuelle Trenner hinzugefügt, wichtige Status-Informationen hervorgehoben und Filter leichter zugänglich gemacht.
             </div>
          </div>
        </div>
        
        <div className="cs-img-bg" style={{ padding: '0', overflow: 'hidden' }}>
          <ImageSlider 
            beforeImage="/property.png"
            afterImage="https://cdn.prod.website-files.com/69e16e603fdbf624251e812f/6a2a0736ee56bf7e4bb9f41a_MacBook%20Pro%2016_%20-%2041.png"
            beforeLabel="Alte Tabelle"
            afterLabel="Neue strukturierte Liste"
          />
        </div>
      </section>

      <div className="cs-divider"></div>

      {/* Before / After Comparison 3: Lead Management */}
      <section className="cs-section">
        <h2 className="cs-h2">Lead-Verwaltung</h2>
        <div className="grid-cs _0-5-1" style={{ marginBottom: '40px' }}>
          <div>
            <h3 className="cs-h3">Das Problem</h3>
            <div className="cs-body-text">
              Die Lead-Ansicht bot keinen schnellen Zugriff auf Kommunikationshistorie oder nächste Schritte, was den Vertriebsprozess verlangsamte.
            </div>
          </div>
          <div>
             <h3 className="cs-h3">Die Lösung</h3>
             <div className="cs-body-text">
              Ein Kanban-ähnliches Board und erweiterte Detailansichten ermöglichen es nun, den Status jedes Leads sofort zu erkennen und Aktionen mit einem Klick auszuführen.
             </div>
          </div>
        </div>
        
        <div className="cs-img-bg" style={{ padding: '0', overflow: 'hidden' }}>
          <ImageSlider 
            beforeImage="/lead.png"
            afterImage="https://cdn.prod.website-files.com/69e16e603fdbf624251e812f/6a2a0736009020acd4f0e250_MacBook%20Pro%2016_%20-%2017.png"
            beforeLabel="Alte Lead-Ansicht"
            afterLabel="Neues Layout"
          />
        </div>
      </section>

      <div className="cs-divider"></div>

      {/* Before / After Comparison 4: Tasks */}
      <section className="cs-section">
        <h2 className="cs-h2">Aufgaben-Management</h2>
        <div className="grid-cs _1-0-5" style={{ marginBottom: '40px' }}>
           <div>
             <h3 className="cs-h3">Fokus auf das Wichtigste</h3>
             <div className="cs-body-text">
              Aufgaben wurden visuell komplett überarbeitet. Fälligkeitsdaten und Prioritäten sind durch intelligente Badges und Typografie-Regeln nun sofort ersichtlich, was die Tagesplanung der Makler massiv unterstützt.
             </div>
          </div>
        </div>
        
        <div className="cs-img-bg" style={{ padding: '0', overflow: 'hidden' }}>
          <ImageSlider 
            beforeImage="/mailcenter.png"
            afterImage="https://cdn.prod.website-files.com/69e16e603fdbf624251e812f/6a2a07363224b7933b55340d_MacBook%20Pro%2016_%20-%2027.png"
            beforeLabel="Altes Task-Board"
            afterLabel="Neues Layout"
          />
        </div>
      </section>

      <div className="cs-divider"></div>

      {/* Result Section */}
      <section className="cs-section">
        <h3 className="cs-h3">Fazit: {project.finalResult}</h3>
        <div className="cs-subline" style={{ marginBottom: '40px' }}>
          Durch das Redesign wurde die Einarbeitungszeit neuer Mitarbeiter drastisch reduziert und die Effizienz in der täglichen Arbeit gesteigert.
        </div>
        
        <div className="grid-cs grid-2x3">
           <div className="cs-grid-block">
             <div className="cs-tiny-text" style={{ color: '#fff' }}>01 / Fokus</div>
             <div className="cs-body-text">Reduktion der visuellen Komplexität um 40%</div>
           </div>
           <div className="cs-grid-block">
             <div className="cs-tiny-text" style={{ color: '#fff' }}>02 / Navigation</div>
             <div className="cs-body-text">Einführung einer flachen und intuitiven Sidebar</div>
           </div>
           <div className="cs-grid-block">
             <div className="cs-tiny-text" style={{ color: '#fff' }}>03 / Action</div>
             <div className="cs-body-text">Wichtige Call-to-Actions (CTAs) sind sofort erreichbar</div>
           </div>
        </div>
      </section>

      <div className="cs-divider"></div>

      {/* More Projects Recommendations Section */}
      <MoreProjects currentProjectId={projectId} onSelectProject={onSelectProject} />
    </div>
  );
}
