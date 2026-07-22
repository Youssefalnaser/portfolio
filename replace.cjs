const fs = require('fs');

function translateFile(file, replacements) {
    let content = fs.readFileSync(file, 'utf8');
    for (const [de, en] of Object.entries(replacements)) {
        content = content.split(de).join(en);
    }
    fs.writeFileSync(file, content, 'utf8');
}

translateFile('src/components/OnpreoAppDetail.jsx', {
    'Die Herausforderung': 'The Challenge',
    'Das Problem': 'The Problem',
    'Makler verbringen 70% ihrer Zeit außerhalb des Büros ohne optimalen Zugriff auf Kundendaten.': 'Real estate agents spend 70% of their time outside the office without optimal access to customer data.',
    'Bislang bot Onpreo keine mobile Lösung für Makler an. Das führte zu eingeschränktem Komfort und begrenzter Flexibilität für die Agenten im Außendienst.': 'Previously, Onpreo offered no mobile solution for real estate agents. This led to restricted comfort and limited flexibility for agents in the field.',
    'Ohne eine mobile CRM-App liefen Makler Gefahr, wichtige Informationen zu vergessen, Lead-Updates zu verpassen und Termine nicht optimal zu koordinieren.': 'Without a mobile CRM app, agents ran the risk of forgetting important information, missing lead updates, and sub-optimally coordinating appointments.',
    'Mein Vorgehen': 'My Approach',
    'Um ein tiefes Verständnis für die Nutzer der App zu gewinnen, habe ich zunächst umfassende Recherchen durchgeführt. Auf Basis der Ergebnisse habe ich Personas erstellt und diese durch Problem-Statements und Empathy Maps ergänzt, um die Bedürfnisse und Herausforderungen der Nutzer klar abzubilden.': 'To gain a deep understanding of the app users, I first conducted comprehensive research. Based on the findings, I created personas and supplemented them with problem statements and empathy maps to clearly map out user needs and challenges.',
    'Zunächst erstellte ich Wireframes, um erste Ideen schnell zu visualisieren. Nach mehreren Iterationen entwickelte ich Low-Fidelity-Wireframes, die ich schließlich zu einem interaktiven Prototypen ausbaute. Dieser Prototyp diente als Grundlage für anschließende Nutzertests.': 'First, I created wireframes to quickly visualize initial ideas. After several iterations, I developed low-fidelity wireframes, which I finally expanded into an interactive prototype. This prototype served as the basis for subsequent user testing.',
    'Feedback aus dem Testing': 'Feedback from Testing',
    'Um die Wireframes zu testen und erstes User-Feedback zu sammeln, lud ich Tester ein. Mein Ziel bestand darin, Usability-Probleme und Verbesserungsmöglichkeiten frühzeitig zu identifizieren.': 'To test the wireframes and collect initial user feedback, I invited testers. My goal was to identify usability problems and areas for improvement early on.',
    'Unübersichtliche Navigation': 'Cluttered Navigation',
    'Die Hauptmenüpunkte waren auf mobilen Geräten schwer erreichbar.': 'The main menu items were hard to reach on mobile devices.',
    'Fehlende Schnellaktionen': 'Missing Quick Actions',
    'Nutzer wollten Leads direkt aus der Listenansicht anrufen können.': 'Users wanted to be able to call leads directly from the list view.',
    'Terminplanung': 'Scheduling',
    'Kalender-Integration': 'Calendar Integration',
    'Es fehlte eine klare Übersicht der heutigen Termine auf dem Dashboard.': 'A clear overview of todays appointments was missing from the dashboard.',
    'Bestätigung': 'Confirmation',
    'Nutzer waren unsicher, ob eine Vertragsänderung erfolgreich gespeichert wurde.': 'Users were unsure if a contract change had been successfully saved.',
    'Die Umsetzung': 'The Implementation',
    'Auf Basis des Nutzer-Feedbacks habe ich den Prototypen gezielt verbessert:': 'Based on user feedback, I specifically improved the prototype:',
    'Einführung einer Bottom-Navigation für schnellen Zugriff': 'Introduction of bottom navigation for quick access',
    'Swipe-Gesten für Schnellaktionen bei Leads hinzugefügt': 'Added swipe gestures for quick actions on leads',
    'Dashboard-Widget für die tagesaktuellen Termine': 'Dashboard widget for daily appointments',
    'Deutliche Toast-Benachrichtigungen nach Speicheraktionen': 'Clear toast notifications after save actions',
    'Die Änderungen wurden direkt im High-Fidelity-Prototypen umgesetzt. Dabei habe ich besonderes Augenmerk auf eine konsistente und visuell ansprechende Gestaltung gelegt, die zur CI von Onpreo passt.': 'The changes were implemented directly in the high-fidelity prototype. I paid special attention to a consistent and visually appealing design that matches Onpreo CI.',
    'Ergebnis und Ausblick': 'Result and Outlook',
    'Die Onpreo-App legt den Grundstein für ein digitales Erlebnis, das den mobilen Alltag der Makler drastisch vereinfacht.': 'The Onpreo app lays the foundation for a digital experience that drastically simplifies the mobile everyday life of real estate agents.',
    'Erweiterung der Anwendung um zusätzliche Analytics-Funktionen.': 'Expansion of the application to include additional analytics features.'
});

translateFile('src/components/SookAppDetail.jsx', {
    'Die Herausforderung': 'The Challenge',
    'Das Problem': 'The Problem',
    'Der arabische Produktmarkt in Deutschland ist stark fragmentiert. Ohne eine moderne digitale Lösung müssen Konsumenten oft verschiedene lokale Märkte aufsuchen, was Zeit und Vertrauen kostet.': 'The Arabic product market in Germany is highly fragmented. Without a modern digital solution, consumers often have to visit various local markets, which costs time and trust.',
    'Ohne eine zuverlässige E-Commerce-Plattform bleiben viele hochwertige arabische Produkte schwer zugänglich.': 'Without a reliable e-commerce platform, many high-quality Arabic products remain hard to access.',
    'Mein Vorgehen': 'My Approach',
    'Um ein tiefes Verständnis für die Nutzer der App zu gewinnen, habe ich zunächst umfassende Recherchen durchgeführt. Auf Basis der Ergebnisse habe ich Personas erstellt und diese durch Problem-Statements und Empathy Maps ergänzt, um die Bedürfnisse und Herausforderungen der Nutzer klar abzubilden.': 'To gain a deep understanding of the app users, I first conducted comprehensive research. Based on the findings, I created personas and supplemented them with problem statements and empathy maps to clearly map out user needs and challenges.',
    'Zunächst erstellte ich Wireframes, um erste Ideen schnell zu visualisieren. Nach mehreren Iterationen entwickelte ich Low-Fidelity-Wireframes, die ich schließlich zu einem interaktiven Prototypen ausbaute. Dieser Prototyp diente als Grundlage für anschließende Nutzertests.': 'First, I created wireframes to quickly visualize initial ideas. After several iterations, I developed low-fidelity wireframes, which I finally expanded into an interactive prototype. This prototype served as the basis for subsequent user testing.',
    'Feedback aus dem Testing': 'Feedback from Testing',
    'Um die Wireframes zu testen und erstes User-Feedback zu sammeln, lud ich Tester ein. Mein Ziel bestand darin, Usability-Probleme und Verbesserungsmöglichkeiten frühzeitig zu identifizieren.': 'To test the wireframes and collect initial user feedback, I invited testers. My goal was to identify usability problems and areas for improvement early on.',
    'Unübersichtliche Kategorien': 'Cluttered Categories',
    'Die Produktkategorien waren zu verschachtelt und schwer navigierbar.': 'Product categories were too nested and hard to navigate.',
    'Fehlende Vertrauenssignale': 'Missing Trust Signals',
    'Es fehlte eine klare Übersicht der Halal-Zertifikate.': 'A clear overview of Halal certificates was missing.',
    'Komplizierter Checkout': 'Complicated Checkout',
    'Der Bezahlvorgang hatte zu viele unnötige Schritte.': 'The checkout process had too many unnecessary steps.',
    'Sprachbarrieren': 'Language Barriers',
    'Nutzer wünschten sich eine einfache Möglichkeit, zwischen Arabisch und Deutsch zu wechseln.': 'Users wanted an easy way to switch between Arabic and German.',
    'Die Umsetzung': 'The Implementation',
    'Auf Basis des Nutzer-Feedbacks habe ich den Prototypen gezielt verbessert:': 'Based on user feedback, I specifically improved the prototype:',
    'Einführung einer flachen und intuitiven Kategorie-Navigation': 'Introduction of a flat and intuitive category navigation',
    'Sichtbare Halal-Siegel und Kundenbewertungen auf Produktdetailseiten': 'Visible Halal seals and customer reviews on product detail pages',
    'Ein One-Page-Checkout zur Reduzierung von Kaufabbrüchen': 'A one-page checkout to reduce cart abandonment',
    'Ein dominanter Language-Switch-Button im Profilbereich': 'A dominant language-switch button in the profile area',
    'Die Änderungen wurden direkt im High-Fidelity-Prototypen umgesetzt. Dabei habe ich besonderes Augenmerk auf eine moderne, warme Gestaltung gelegt, die die kulturelle Identität widerspiegelt.': 'The changes were implemented directly in the high-fidelity prototype. I paid special attention to a modern, warm design that reflects cultural identity.',
    'Ergebnis und Ausblick': 'Result and Outlook',
    'Die SOOK App schafft Vertrauen und Bequemlichkeit in einem stark wachsenden, aber unterversorgten Markt.': 'The SOOK app creates trust and convenience in a rapidly growing but underserved market.',
    'Erweiterung der Plattform um ein Community-Rezept-Feature.': 'Expansion of the platform to include a community recipe feature.'
});

translateFile('src/components/OnpreoDesktopDetail.jsx', {
    'Zielsetzung': 'Objective',
    'Zielgruppe': 'Target Audience',
    'Meine Rolle': 'My Role',
    'Immobilienmakler & Administratoren': 'Real Estate Agents & Admins',
    'End-to-End UX/UI Design': 'End-to-End UX/UI Design'
});
