# Zweirad Brenztal – Website für Fahrradläden

Statische, schnelle Website für einen Fahrradladen (Beispiel: Heidenheim an
der Brenz). Kein Build-Tool, kein Framework, keine Abhängigkeiten – läuft
überall, wo statische Dateien ausgeliefert werden können.

## Lokal ansehen

```bash
python3 -m http.server 8000
# dann im Browser: http://localhost:8000
```

(Ein einfacher `Doppelklick auf index.html`" funktioniert für das Grundlayout
auch, aber die Karte lädt zuverlässiger über einen lokalen Server.)

## Anpassen an deinen Laden

**Alles Inhaltliche steckt in einer einzigen Datei: [`js/config.js`](js/config.js).**
Dort änderst du:

- Ladenname, Slogan, Gründungsjahr
- Adresse (inkl. Koordinaten für die Kartenanzeige)
- Telefon, E-Mail, Social-Media-Links
- Öffnungszeiten pro Wochentag (inkl. Mittagspause oder Ruhetag)
- Hero-Text und Trust-Badges
- Leistungen/Services (beliebig viele Karten, Icon frei wählbar)
- Über-uns-Text und Kennzahlen
- Team (optional – leeres Array blendet den Abschnitt aus)
- Kundenstimmen (optional – leeres Array blendet den Abschnitt aus)
- Links zu Impressum/Datenschutz

Verfügbare Icon-Namen stehen in [`js/icons.js`](js/icons.js) (`bike`,
`wrench`, `battery`, `shield`, `bag`, `ruler`, `clock`, `tag`, `heart`,
`badge`, `mapPin`, `phone`, `mail`, `star`, `instagram`, `facebook`, ...).

Nach dem Speichern von `config.js` einfach die Seite neu laden – `js/main.js`
baut Navigation, Hero, Leistungs-Kacheln, Öffnungszeiten-Tabelle (inkl.
Live-Status „Jetzt geöffnet"/„Geschlossen"), Karte und Footer automatisch
daraus auf. Es muss kein HTML angefasst werden.

## Design

- Farben: Petrol/Tanne (`--color-primary`, Vertrauen & Handwerk) kombiniert
  mit kräftigem Orange (`--color-accent`, Call-to-Action/Energie).
- Typografie: Rubik (Überschriften) + Nunito Sans (Fließtext).
- Tokens liegen zentral in [`css/styles.css`](css/styles.css) (`:root`) –
  Farben, Radien und Abstände lassen sich dort global anpassen.
- Mobile-first, responsive (375 / 768 / 1024 / 1440 px), Tastatur-
  navigierbar, sichtbare Fokus-Zustände, `prefers-reduced-motion` wird
  respektiert.

## Kontaktformular

Das Formular im Kontaktbereich öffnet beim Absenden das E-Mail-Programm des
Besuchers mit vorausgefüllter Nachricht (`mailto:`) – es ist kein eigenes
Backend nötig. Für eine echte serverseitige Zustellung (z. B. über einen
Formular-Service) kann `js/main.js` später erweitert werden.

## Struktur

```
index.html          Seitenstruktur (Platzhalter, die von main.js befüllt werden)
css/styles.css       Design-System (Farben, Typografie, Layout, Responsive)
js/config.js         ALLE Inhalte – hier anpassen
js/icons.js          SVG-Icon-Set
js/main.js           Rendert config.js in die Seite, Karte, Öffnungszeiten-Logik, Menü
assets/favicon.svg   Favicon
```
