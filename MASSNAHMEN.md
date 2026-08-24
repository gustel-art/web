# Durchgeführte Maßnahmen

Chronologisch, mit Bezug zum jeweiligen Befund aus `AUDIT-BEFUND.md`.
Ausgangszustand: letzter Commit vor diesem Audit (Git-Historie im
Repository einsehbar) – jede Maßnahme unten ist einzeln nachvollziehbar.

## 1. Google Fonts entfernt, lokale Schriftarten eingebunden

- **Dateien:** `index.html` (Zeilen im `<head>`), neu: `css/fonts.css`,
  `assets/fonts/rubik-latin-variable.woff2`,
  `assets/fonts/nunito-sans-latin-variable.woff2`.
- **Was:** `<link rel="preconnect">`/`<link rel="stylesheet" href="https://fonts.googleapis.com/...">`
  entfernt; stattdessen `@font-face`-Deklarationen auf lokal ausgelieferte
  Variable-Font-Dateien (nur Latin-Subset, ~66 KB gesamt).
- **Warum:** Bereich C/D (§ 25 TDDDG, Art. 6 DSGVO) – eliminiert die
  unaufgeforderte IP-Übertragung an Google bei jedem Seitenaufruf
  vollständig, statt sie nur zu verschleiern.
- **Nebenwirkungsrisiko:** Gering. Verifiziert: `document.fonts` zeigt
  beide Familien als `status:loaded`; `getComputedStyle(h1).fontFamily`
  bestätigt Rubik wird tatsächlich verwendet.

## 2. OpenStreetMap-Karte hinter Klick-Gate gesetzt

- **Dateien:** `index.html` (`#map-consent`, `#contact-map`), `js/main.js`
  (Event-Listener statt sofortiger `iframe.src`-Zuweisung), `css/styles.css`
  (`.map-consent`-Styles).
- **Was:** Die Karte lädt nicht mehr automatisch; ein Hinweistext plus
  Button „Karte laden & Standort anzeigen" muss zuerst angeklickt werden.
- **Warum:** Bereich C/D – keine IP-Übertragung an OpenStreetMap vor
  expliziter Nutzerhandlung.
- **Nebenwirkungsrisiko:** Gering. Verifiziert per Netzwerk-Trace: 0
  externe Requests vor Klick, genau 1 Request (die iframe-URL) danach.

## 3. Impressum und Datenschutzerklärung angelegt

- **Dateien:** neu: `impressum.html`, `datenschutz.html`, `css/legal.css`,
  `js/legal.js`; geändert: `js/config.js` (`legal.impressumHref`/
  `datenschutzHref` zeigen jetzt auf die echten Seiten statt `#`).
- **Warum:** Bereich A/B – gesetzliche Pflichtangaben, bislang komplett
  fehlend.
- **Wichtig:** Enthält mehrere `[[PLATZHALTER]]`-Markierungen für Angaben,
  die nicht erfunden werden durften (Name der Inhaberin/des Inhabers,
  E-Mail-Adresse, USt-IdNr., Hosting-Anbieter). Diese Seiten sind **nicht
  veröffentlichungsreif**, bis die Platzhalter ersetzt sind – siehe
  `OFFENE-PUNKTE.md`.
- **Nebenwirkungsrisiko:** Keines für die bestehende Seite; zwei neue,
  eigenständige Unterseiten.

## 4. Inline-`<style>`/`<script>` aus den neuen Rechtsseiten in externe
   Dateien ausgelagert

- **Dateien:** `css/legal.css`, `js/legal.js` statt Inline-Blöcken in
  `impressum.html`/`datenschutz.html`.
- **Warum:** Ermöglicht eine `script-src 'self'; style-src 'self'`-CSP ohne
  `unsafe-inline` (Security-Querschnitt).
- **Nebenwirkungsrisiko:** Keines, rein strukturelle Auslagerung, Inhalt
  identisch.

## 5. Security-Header-Vorlagen ergänzt

- **Dateien:** neu: `_headers` (Netlify/Cloudflare Pages),
  `SECURITY-HEADERS.md` (Apache-/Nginx-Äquivalente); `<meta name="referrer">`
  in `index.html`/`impressum.html`/`datenschutz.html` ergänzt.
- **Warum:** Security-Querschnitt (fehlende Header). CSP bewusst als
  `Content-Security-Policy-Report-Only` eingetragen, **nicht** scharf
  geschaltet (Vorgabe: erst beobachten, dann durchsetzen) – wird erst
  wirksam, sobald tatsächlich bei einem der genannten Hoster deployt.
- **Nebenwirkungsrisiko:** Keines am aktuellen Code; die Header selbst
  entfalten erst beim Deployment Wirkung und müssen nach Hosting-Wahl
  final geprüft werden.

## 6. Barrierefreiheit: Heading-Hierarchie korrigiert

- **Dateien:** `index.html` (USP-Sektion: `aria-label` → `aria-labelledby`
  mit neuer versteckter `<h2>`), `css/styles.css` (`.visually-hidden`-Klasse
  ergänzt).
- **Warum:** WCAG 2.1 SC 1.3.1 – Sprung von H1 direkt zu H3 gefunden.
- **Nebenwirkungsrisiko:** Keines; visuell unverändert (Überschrift ist nur
  für Screenreader wahrnehmbar), automatisierter Nachlauf bestätigt
  lückenlose Hierarchie (`1,2,3,3,3,3,2,3,3,3,3,3,2,2,3,2,2,2,3,3,3,4,4,4`).

## 7. Horizontales Overflow bei 320px behoben

- **Dateien:** `css/styles.css` (`.contact-grid > * { min-width: 0; }`,
  `.map-consent .btn { white-space: normal; ... }`).
- **Warum:** WCAG 2.1 SC 1.4.10 (Reflow) – Seite scrollte bei 320px Breite
  horizontal (53px Überschuss), verursacht durch CSS-Grid-Kinder ohne
  `min-width: 0` und eine nicht umbrechende lange Button-Beschriftung.
- **Nebenwirkungsrisiko:** Keines; Layout bei größeren Breakpoints
  unverändert (nur `min-width` als zusätzliche Einschränkung ergänzt,
  keine bestehenden Werte entfernt). Visuell per Screenshot bei 320px
  nachgeprüft.

## 8. Lizenzdokumentation ergänzt

- **Dateien:** neu: `THIRD-PARTY-LICENSES.md`.
- **Warum:** Bereich J – Copyright-/Lizenztext für die (jetzt lokal
  gehosteten) Google-Fonts-Dateien war nicht dokumentiert.
- **Nebenwirkungsrisiko:** Keines.

---

## Nach jeder Änderung durchgeführte Prüfungen

- Playwright-Funktionstest der Startseite (Desktop 1440px, Mobile 320–390px)
  nach jeder Änderung, inkl. Konsolen-Fehler-Trace (durchgehend 0 Fehler
  nach den Korrekturen).
- Netzwerk-Trace vor/nach Nutzerinteraktion (siehe `BESTANDSAUFNAHME.md`
  und `RE-AUDIT.md`).
- Manuelle Tab-Reihenfolgen-Prüfung (15 Tab-Stopps, alle mit sichtbarem
  Fokus).
- Kontrastberechnung für alle geänderten/neuen Farb-Text-Kombinationen.
- Kein Build/Test-Runner vorhanden (statische Website) – „Build" bedeutet
  hier: Seite lädt fehlerfrei im Browser.
