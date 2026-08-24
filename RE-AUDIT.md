# Zweitprüfung (Re-Audit)

Vollständige Wiederholung der Verhaltensbeobachtung aus Phase 1 nach
Abschluss aller Maßnahmen – nicht nur an den geänderten Stellen. Alle
unten genannten Werte wurden in dieser Sitzung frisch per Playwright
(headless Chromium) gegen den aktuellen Code-Stand gemessen, nicht nur
behauptet.

## 1. Welche Befunde sind behoben?

| Befund | Status vorher | Verifikation nachher |
|---|---|---|
| Google Fonts laden unaufgefordert bei jedem Seitenaufruf | NICHT ERFÜLLT | Netzwerk-Trace: 0 externe Requests vor Interaktion. `document.fonts` zeigt „Rubik loaded" / „Nunito Sans loaded" aus lokalen Dateien. |
| OpenStreetMap-Karte lädt unaufgefordert | NICHT ERFÜLLT | Netzwerk-Trace: 0 externe Requests vor Klick; genau 1 Request (die Karten-URL) nach Klick auf „Karte laden". |
| Kein Impressum | NICHT ERFÜLLT | `impressum.html` existiert, von der Startseite per Footer-Link in 1 Klick erreichbar (verifiziert per Klick-Simulation), lädt fehlerfrei. |
| Keine Datenschutzerklärung | NICHT ERFÜLLT | `datenschutz.html` existiert, von der Startseite per Footer-Link in 1 Klick erreichbar, lädt fehlerfrei. |
| Heading-Sprung H1→H3 (USP-Bereich) | NICHT ERFÜLLT | Automatisierte Prüfung der gesamten Seite: `headingSkip: false` über alle 24 Überschriften. |
| Horizontales Overflow bei 320px | NICHT ERFÜLLT | `scrollWidth === clientWidth === 320` nach Fix. |
| Keine Security-Header-Konfiguration vorbereitet | NICHT ERFÜLLT | `_headers` + `SECURITY-HEADERS.md` (Apache/Nginx) vorhanden, CSP korrekt als Report-Only. |
| Keine Lizenzdokumentation für Google-Fonts-Dateien | NICHT ERFÜLLT | `THIRD-PARTY-LICENSES.md` vorhanden. |

## 2. Welche Befunde bestehen weiterhin – und warum?

- **Impressum/Datenschutzerklärung inhaltlich unvollständig** (mehrere
  `[[PLATZHALTER]]`): Fehlende Fakten (Name der Inhaberin/des Inhabers,
  geschäftliche E-Mail, USt-IdNr., Hosting-Anbieter, Schlichtungsbereitschaft)
  durften nicht erfunden werden. **Grund: Information fehlt**, siehe
  `OFFENE-PUNKTE.md`, Punkte 1–11.
- **Security-Header noch nicht live wirksam:** Die Vorlagen liegen bereit,
  entfalten aber erst Wirkung, sobald tatsächlich bei einem Hoster deployt
  wird. **Grund: technisch nicht lösbar ohne konkretes Deployment-Ziel.**
- **Organisatorische DSGVO-Pflichten** (Verarbeitungsverzeichnis,
  TOM-Dokumentation, Löschkonzept, Datenpannen-Prozess, ggf. AVV) bestehen
  unverändert fort. **Grund: nicht im Code lösbar** (siehe
  `OFFENE-PUNKTE.md`, Punkte 12–16).
- **Automatisiertes Accessibility-Tool (axe-core) nicht gelaufen:**
  **Grund: kein Netzwerkzugriff auf gängige CDNs in dieser Umgebung.**
  Manuelle/strukturelle Prüfung wurde stattdessen durchgeführt und
  dokumentiert.
- **Google-Rezensionen als Testimonials (Urheber-/Wettbewerbsrecht):**
  bewusst als `UNKLAR / MENSCHLICHE PRÜFUNG ERFORDERLICH` belassen, da
  auslegungsbedürftig. **Grund: Rechtsberatung erforderlich, nicht
  technisch entscheidbar.**

## 3. Sind neue Probleme entstanden?

Nein, keine festgestellt. Im Einzelnen geprüft:

- **Regression im bestehenden Funktionsumfang:** Startseite, mobile
  Navigation (Klick-Test: Menü öffnet auf volle Höhe 624px bei 700px
  Viewport, `opacity: 1`), Öffnungszeiten-Anzeige, Team-/Bewertungsbereich,
  Kontaktbereich – alle unverändert funktionsfähig.
- **Neue Angriffsfläche:** Keine neuen externen Verbindungen eingeführt;
  im Gegenteil wurden zwei entfernt (Google Fonts) bzw. hinter eine
  Nutzerhandlung gelegt (OpenStreetMap). Die zwei neuen HTML-Seiten
  (`impressum.html`, `datenschutz.html`) sind rein statisch, ohne
  Formulare oder dynamische Verarbeitung außer der Jahreszahl-Anzeige.
- **Neue Barriere:** Keine; die versteckte H2 im USP-Bereich ist rein additiv
  (nur für Screenreader wahrnehmbar), das Karten-Consent-Element nutzt
  reguläre, fokussierbare `<button>`-Elemente.
- **Konsolenfehler:** 0 JavaScript-Fehler auf Start-, Impressum- und
  Datenschutzseite im finalen Testlauf.

## 4. Funktioniert die Website weiterhin?

Kein Build-Schritt und keine Testsuite vorhanden (statische Website) –
„Funktioniert" wurde durch tatsächliches Laden und Bedienen im Browser
geprüft:

| Flow | Ergebnis |
|---|---|
| Startseite laden (Desktop 1280px) | OK, kein Konsolenfehler |
| Startseite laden (Mobile 320–390px) | OK, kein horizontales Scrollen |
| Navigation / Anchor-Links | OK |
| Mobiles Menü öffnen/schließen | OK |
| Öffnungszeiten-Tabelle inkl. Live-Status | OK (unverändert, nicht Teil dieses Audits) |
| Karte laden (Klick-Interaktion) | OK, lädt erst nach Klick |
| Footer-Link → Impressum | OK, korrekte URL/Titel |
| Footer-Link → Datenschutz | OK, korrekte URL/Titel |
| Formulare/Login/Checkout | Nicht anwendbar (nicht vorhanden) |
| Suche | Nicht anwendbar (nicht vorhanden) |

## 5. Welche Informationen fehlen noch?

25 offene Punkte, vollständig aufgeführt in `OFFENE-PUNKTE.md`. Kurzfassung
der wichtigsten: Name der Inhaberin/des Inhabers, geschäftliche
E-Mail-Adresse, USt-IdNr. (falls vorhanden), Hosting-Anbieter, Bereitschaft
zur Verbraucherschlichtung (§ 36 VSBG), Datenschutzbeauftragte:r (falls
vorhanden).

## 6. Punkte für die anwaltliche Prüfung

Siehe `ANWALTLICHE-PRUEFUNG.md` – 9 priorisierte Fragen, davon 3 mit hoher
Priorität (Impressum-Anschrift, elektronische Kontaktpflicht ohne E-Mail,
Streitschlichtungserklärung).

## 7. Restrisiko-Einschätzung

Die gravierendsten technischen Datenschutzmängel (unaufgeforderte
Drittanbieter-Requests, fehlendes Impressum/fehlende Datenschutzerklärung,
zwei echte Accessibility-Bugs) wurden behoben und automatisiert
nachgeprüft. Ein **relevantes Restrisiko besteht dennoch**, solange die
Pflichtangaben im Impressum unvollständig sind (insbesondere die fehlende
Kontakt-E-Mail-Adresse) – das ist der derzeit wahrscheinlichste
Abmahngrund. Weitere Restrisiken betreffen Punkte, die außerhalb des
Codes liegen (Hosting-Wahl, AVV, organisatorische DSGVO-Pflichten) sowie
mehrere rechtlich auslegungsbedürftige Fragen (Google-Rezensionen,
Streitschlichtungspflicht ohne Online-Vertragsschluss).

**Weder vollständige Rechtskonformität noch absolute Sicherheit können
zugesichert werden.** Diese Prüfung ersetzt keine anwaltliche Beratung.
