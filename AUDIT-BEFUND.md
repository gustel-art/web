# Audit-Befund

Bewertungsschema je Fund: **Bereich | Status | Anwendbarkeit | Rechtsgrundlage
| Beobachtung | Risiko | Lösung | Umgesetzt**

Status-Werte: ERFÜLLT · TEILWEISE ERFÜLLT · NICHT ERFÜLLT · NICHT ANWENDBAR ·
UNKLAR / MENSCHLICHE PRÜFUNG ERFORDERLICH

---

## Teil 1 – Rechtlicher Audit

### A. Anbieterkennzeichnung (Impressum)

- **Status:** War NICHT ERFÜLLT (kein Impressum vorhanden) → jetzt TEILWEISE ERFÜLLT (Struktur + verifizierbare Angaben umgesetzt, mehrere Pflichtangaben als Platzhalter offen)
- **Anwendbarkeit:** Ja – jede geschäftsmäßige Website benötigt ein Impressum, unabhängig vom Vorliegen eines Online-Shops.
- **Rechtsgrundlage:** § 5 DDG.
- **Beobachtung:** `index.html` verlinkte vor der Korrektur auf `#` statt auf eine echte Seite; es existierte keine Impressum-Seite im Repository.
- **Risiko:** Abmahnung durch Mitbewerber/Verbraucherschutzverbände (häufigster Abmahngrund bei Kleinunternehmen-Websites); Bußgeld nach § 26 DDG möglich, Eintrittswahrscheinlichkeit bei fehlendem Impressum vergleichsweise hoch.
- **Konkrete Lösung:** `impressum.html` angelegt, im Footer verlinkt (1 Klick von jeder Seite erreichbar), mit allen ermittelbaren Angaben (Adresse, Telefon) befüllt; fehlende Pflichtangaben (Name der Inhaberin/des Inhabers, E-Mail, ggf. USt-IdNr./Registerdaten) als `[[PLATZHALTER]]` markiert.
- **Umgesetzt:** teilweise (technisch/strukturell ja; inhaltlich vollständig erst nach Ergänzung der Platzhalter durch den Betreiber).

### B. Datenschutzerklärung und Transparenz

- **Status:** War NICHT ERFÜLLT (keine Datenschutzerklärung vorhanden) → jetzt TEILWEISE ERFÜLLT
- **Anwendbarkeit:** Ja – Website verarbeitet personenbezogene Daten (Server-Logs, optional IP-Übertragung an OpenStreetMap).
- **Rechtsgrundlage:** Art. 12–14 DSGVO.
- **Beobachtung:** Keine Datenschutzerklärung im Repository; externe Dienste (Google Fonts, OpenStreetMap) liefen ohne jede Offenlegung.
- **Risiko:** Bußgeld nach Art. 83 DSGVO, Abmahnrisiko durch Mitbewerber (vgl. EuGH C-21/23 „Lindenapotheke", BGH-Urteile vom 27.03.2025).
- **Konkrete Lösung:** `datenschutz.html` angelegt, Inhalt anhand der tatsächlichen Datenflüsse aus `BESTANDSAUFNAHME.md` erstellt (nicht anhand einer generischen Vorlage). Deckt Hosting/Logfiles, Schriftarten, Karte, Kontaktwege, Google-Rezensionen, Betroffenenrechte, Aufsichtsbehörde ab.
- **Umgesetzt:** teilweise (Struktur und tatsächliches Verhalten korrekt beschrieben; Hosting-Anbieter und Kontaktdaten als Platzhalter offen).

### C. Cookies, Tracking, Consent

- **Status:** War NICHT ERFÜLLT (Drittanbieter-Requests vor jeder Interaktion) → jetzt ERFÜLLT
- **Anwendbarkeit:** Ja, dem Grunde nach – tatsächlich werden nach der Korrektur aber keine nicht-erforderlichen Zugriffe mehr vor Einwilligung ausgelöst, sodass aktuell **kein Consent-Banner erforderlich** ist.
- **Rechtsgrundlage:** § 25 TDDDG, Art. 6, 7 DSGVO.
- **Beobachtung (vorher):** `index.html` lud beim Seitenaufruf unbedingt `fonts.googleapis.com`, `fonts.gstatic.com` (IP-Übertragung an Google) sowie – über `js/main.js`, Funktion zur Kartenanzeige – automatisch `www.openstreetmap.org` per iframe. Netzwerk-Trace vor Korrektur: 3 externe Domains vor jeder Interaktion.
- **Beobachtung (nachher):** Netzwerk-Trace zeigt 0 externe Requests vor Interaktion (siehe `BESTANDSAUFNAHME.md`, Abschnitt 3). Die Karte lädt nur nach explizitem Klick mit vorgeschaltetem Hinweistext.
- **Risiko (vor Fix):** Bußgeld, Abmahnung; nach Fix: verbleibendes Risiko sehr gering, da die Vermeidung der Fremd-Requests der sicherste technische Lösungsweg ist (kein Banner, das fehlerhaft konfiguriert sein könnte).
- **Konkrete Lösung:** (1) Schriftarten lokal gehostet (`css/fonts.css`, `assets/fonts/*.woff2`) – Google-Fonts-Verbindung vollständig entfernt. (2) OpenStreetMap-Karte hinter Klick-Gate gesetzt (`#map-consent`, `js/main.js`).
- **Umgesetzt:** ja.

### D. Externe Dienste, APIs, CDNs, Fonts, Analytics, Social Media, Embeds

- **Status:** War NICHT ERFÜLLT → jetzt ERFÜLLT (für die aktuell vorhandenen Dienste)
- **Anwendbarkeit:** Ja.
- **Rechtsgrundlage:** § 25 TDDDG, Art. 6, 28, 44 ff. DSGVO.
- **Beobachtung:** Siehe Bereich C. Zusätzlich: Social-Media-Links (Instagram/Facebook) sind in `js/config.js` aktuell leer und werden dadurch gar nicht gerendert (kein Social-Plugin, kein Tracking-Pixel vorhanden).
- **Risiko:** s. Bereich C.
- **Konkrete Lösung:** s. Bereich C. Für die Kartendarstellung wurde zusätzlich `referrerpolicy="strict-origin-when-cross-origin"` statt `no-referrer-when-downgrade` gesetzt, um weniger Referrer-Informationen an OpenStreetMap zu übertragen.
- **Umgesetzt:** ja, für den aktuellen Funktionsumfang. Bei künftiger Ergänzung weiterer Drittdienste (Social-Buttons, Analytics) ist diese Bewertung neu vorzunehmen.

### E. Formulare, Newsletter, Kontaktaufnahme

- **Status:** ERFÜLLT
- **Anwendbarkeit:** Ja (Kontaktformular vorhanden, wenn auch aktuell ausgeblendet).
- **Rechtsgrundlage:** Art. 5 Abs. 1 lit. c DSGVO (Datenminimierung).
- **Beobachtung:** Formular fragt nur Name, E-Mail, Nachricht ab (minimal). Es gibt keinen Server-Endpunkt; Übertragung erfolgt ausschließlich per `mailto:` direkt aus dem E-Mail-Programm der besuchenden Person – die Website selbst verarbeitet oder speichert keine Formulardaten. Kein Newsletter vorhanden.
- **Risiko:** Gering.
- **Konkrete Lösung:** Keine Änderung nötig; Formular bleibt sinnvollerweise ausgeblendet, solange keine geschäftliche E-Mail-Adresse feststeht (verhindert einen funktionslosen `mailto:`-Link).
- **Umgesetzt:** ja (bestehendes Verhalten war bereits datenschutzfreundlich; Datenschutzerklärung wurde entsprechend ergänzt, siehe Bereich B).

### F. Verbraucher- und E-Commerce-Recht

- **Status:** NICHT ANWENDBAR
- **Anwendbarkeit:** Nein – laut Nutzerangabe (siehe `ANNAHMEN.md`, #1) werden keine Verträge online geschlossen; kein Warenkorb, keine Preise, kein Checkout im Code vorhanden. Button-Lösung, Widerrufsrecht/§ 356a BGB-Widerrufsbutton, PAngV, GPSR-Produktangaben, Kündigungsbutton (§ 312k BGB) greifen daher nicht.
- **Rechtsgrundlage:** § 312i, § 312j, § 356a, § 312k BGB; PAngV; VO (EU) 2023/988 (GPSR).
- **Beobachtung:** Kein Code-Hinweis auf Zahlungsabwicklung, Warenkorb oder Vertragsschluss.
- **Risiko:** Entfällt bei Anwendbarkeit „Nein". Muss bei Einführung eines Online-Shops zwingend neu geprüft werden.
- **Konkrete Lösung:** Keine Umsetzung nötig.
- **Umgesetzt:** entfällt.

### G. Barrierefreiheit (BFSG)

- **Status:** NICHT ANWENDBAR (Anwendbarkeit BFSG), technische WCAG-2.1-AA-Qualität dennoch ERFÜLLT (mit einer behobenen und keiner bekannten offenen kritischen Abweichung)
- **Anwendbarkeit:** Laut Nutzerangabe Kleinstunternehmen (`ANNAHMEN.md`, #3) → Ausnahme nach § 3 Abs. 3 BFSG für Dienstleistungen einschlägig; zudem reine Informationsseite ohne Verbraucher-E-Commerce. Damit nach aktueller Einschätzung **kein** BFSG-Pflichtenkreis (inkl. Barrierefreiheitserklärung nach Anlage 3) einschlägig. Diese Einschätzung beruht auf Nutzerangaben, nicht auf geprüften Bilanz-/Personalunterlagen → als Annahme, nicht als Faktenfeststellung zu verstehen.
- **Rechtsgrundlage:** BFSG, BFSGV, EN 301 549 V3.2.1 (WCAG 2.1 AA).
- **Beobachtung:** Details siehe Teil 3 (Accessibility-Audit) unten.
- **Risiko:** Gering (Ausnahme greift voraussichtlich); bei Wachstum über die Schwellenwerte neu zu bewerten.
- **Konkrete Lösung:** WCAG 2.1 AA wurde unabhängig von der rechtlichen Pflicht als Qualitätsstandard umgesetzt/geprüft (gute Praxis, größere Zielgruppe, kein Mehraufwand mehr rückgängig zu machen).
- **Umgesetzt:** ja (technische Prüfung), rechtliche Pflicht-Doku (Barrierefreiheitserklärung) bewusst nicht angelegt, da nicht anwendbar.

### H. KI-Transparenz

- **Status:** NICHT ANWENDBAR
- **Anwendbarkeit:** Nein – kein Chatbot, kein Voicebot, keine KI-generierten/manipulierten Medieninhalte im Code identifizierbar.
- **Rechtsgrundlage:** Art. 50 VO (EU) 2024/1689 (KI-VO).
- **Beobachtung:** Keine entsprechenden Komponenten im Code.
- **Risiko:** Entfällt.
- **Konkrete Lösung:** Keine.
- **Umgesetzt:** entfällt.

### I. Urheber-, Marken- und Wettbewerbsrecht

- **Status:** TEILWEISE ERFÜLLT / UNKLAR bei einem Punkt
- **Anwendbarkeit:** Ja.
- **Rechtsgrundlage:** UrhG, MarkenG, UWG (insb. § 5b Abs. 3 UWG für Bewertungen).
- **Beobachtung:**
  1. Alle Icons sind selbst erstellte Inline-SVGs (kein Fremdmaterial) – unkritisch.
  2. Schriftarten Rubik/Nunito Sans: SIL Open Font License 1.1, Selbst-Hosting ausdrücklich erlaubt – siehe `THIRD-PARTY-LICENSES.md`.
  3. Die als Kundenstimmen wiedergegebenen Zitate sind wörtliche Auszüge aus öffentlich bei Google einsehbaren Rezensionen zu diesem Unternehmen, inkl. der bei Google öffentlich angezeigten Anzeigenamen. § 5b Abs. 3 UWG verlangt bei Verbraucherbewertungen Transparenz darüber, ob und wie deren Echtheit sichergestellt wird.
- **Risiko:** Punkt 3: gering bis mittel – kurze Alltagsrezensionen erreichen häufig nicht die für Urheberschutz nötige Schöpfungshöhe, das ist aber im Einzelfall zu beurteilen; zusätzlich ist unklar, ob eine Herkunftsangabe/Echtheitshinweis nach § 5b Abs. 3 UWG erforderlich ist.
- **Konkrete Lösung:** In `datenschutz.html` (Abschnitt 8) transparent offengelegt, dass es sich um echte Google-Rezensionen handelt. Eine ausdrückliche „Diese Bewertungen sind unverändert von Google übernommen"-Kennzeichnung direkt auf der Startseite wurde **nicht** automatisch ergänzt, um keine ungeprüfte rechtliche Aussage zu treffen.
- **Umgesetzt:** teilweise – Transparenzhinweis in der Datenschutzerklärung ergänzt; endgültige Bewertung als `UNKLAR / MENSCHLICHE PRÜFUNG ERFORDERLICH` an `ANWALTLICHE-PRUEFUNG.md` übergeben.

### J. Open-Source-Lizenzen

- **Status:** ERFÜLLT
- **Anwendbarkeit:** Ja (Google-Fonts-Dateien).
- **Rechtsgrundlage:** SIL Open Font License 1.1.
- **Beobachtung:** Keine Software-Dependencies (kein `package.json`). Einzige Drittanbieter-Assets: zwei Schriftdateien.
- **Risiko:** Sehr gering.
- **Konkrete Lösung:** `THIRD-PARTY-LICENSES.md` angelegt.
- **Umgesetzt:** ja.

### K. Sonstige Anwendbarkeitsprüfungen

- DSA-Pflichten: NICHT ANWENDBAR (keine Vermittlungs-/Hosting-/Plattformdienste).
- NIS2/BSIG-neu: NICHT ANWENDBAR (kein einschlägiger Sektor/keine Schwellenwerte ersichtlich); rein informativer Hinweis, keine Umsetzung nötig.
- BITV 2.0: NICHT ANWENDBAR (keine öffentliche Stelle).
- Branchenrecht (HWG, Glücksspiel, Finanzdienstleistungen, LMIV etc.): NICHT ANWENDBAR (Fahrradladen, keine einschlägigen Produkte/Dienstleistungen erkennbar).
- Organisatorische DSGVO-Pflichten (Verzeichnis von Verarbeitungstätigkeiten, TOM-Dokumentation, Löschkonzept, Datenpannen-Prozess): **nicht im Code lösbar** → siehe `OFFENE-PUNKTE.md`.

---

## Teil 2 – Security-Audit (OWASP-orientiert)

Da die Website **keinen Server-Prozess, kein Backend, keine Datenbank und
keine Authentifizierung** besitzt, sind große Teile des OWASP-Top-10-Katalogs
strukturell nicht anwendbar. Das ist eine reale Aussage über die Angriffs-
fläche, keine Schwäche der Prüfung.

| Kategorie | Status | Beobachtung/Risiko |
|---|---|---|
| A01 Broken Access Control | NICHT ANWENDBAR | Keine Routen, kein Login, keine Autorisierungslogik vorhanden. |
| A02 Security Misconfiguration | TEILWEISE ERFÜLLT | Kein Debug-Modus, keine `.env`/Secrets im Code. HTTP-Security-Header können mangels Server nicht im Code gesetzt werden → Vorlagen für `_headers`/`.htaccess`/Nginx bereitgestellt (`SECURITY-HEADERS.md`), aber **erst nach Deployment beim gewählten Hoster wirksam** → `OFFENE-PUNKTE.md`. |
| A03 Software Supply Chain Failures | NICHT ANWENDBAR | Keine Dependencies, kein Lockfile nötig, keine Lifecycle-Skripte. |
| A04 Cryptographic Failures | UNKLAR / MENSCHLICHE PRÜFUNG ERFORDERLICH | HTTPS-Erzwingung/HSTS hängt vom künftigen Hoster ab (Vorlage bereitgestellt, aber nicht verifizierbar ohne konkretes Ziel). Keine Passwörter/Secrets im Code gefunden. |
| A05 Injection (inkl. XSS) | ERFÜLLT | `js/main.js` befüllt DOM per `innerHTML` ausschließlich mit Inhalten aus der eigenen, entwicklerseitig gepflegten `js/config.js` – keine Nutzereingaben werden ungefiltert ins DOM geschrieben. Kein Backend, keine SQL/Command-Injection-Fläche. Restrisiko: Würde `config.js` künftig von Nicht-Entwickler:innen mit rohem, unvalidiertem Text befüllt, könnte darin enthaltenes HTML/JS ausgeführt werden (Self-XSS-Risiko, kein externer Angriffsvektor) – siehe `OFFENE-PUNKTE.md`. |
| A06 Insecure Design | NICHT ANWENDBAR | Keine Login-/Preis-/Rabattlogik, kein Missbrauchspotenzial durch fehlende Rate-Limits, da keine serverseitigen Endpunkte existieren. |
| A07 Authentication Failures | NICHT ANWENDBAR | Keine Authentifizierung vorhanden. |
| A08 Software/Data Integrity Failures | ERFÜLLT | Keine externen Skripte mehr eingebunden (Google Fonts entfernt); die verbleibende externe Ressource (OpenStreetMap-iframe) ist kein ausführbares Skript im eigenen Kontext. |
| A09 Security Logging & Alerting | NICHT ANWENDBAR | Keine serverseitige Logik, die sicherheitsrelevante Ereignisse protokollieren könnte. |
| A10 Mishandling of Exceptional Conditions | ERFÜLLT | Kein serverseitiger Code, der Stacktraces/interne Pfade preisgeben könnte. Playwright-Konsolen-Trace zeigte keine unbehandelten JS-Fehler/Promise-Rejections beim normalen Durchlauf. |

### Querschnitt

- **CSRF:** NICHT ANWENDBAR (keine zustandsändernden Server-Requests).
- **Content Security Policy:** War nicht vorhanden → jetzt als **Report-Only**-Vorlage in `_headers`/`.htaccess`/Nginx-Beispiel hinterlegt (`SECURITY-HEADERS.md`), bewusst noch nicht scharf geschaltet.
- **Weitere Security-Header:** In denselben Vorlagen ergänzt (`X-Content-Type-Options`, `Referrer-Policy`, `Permissions-Policy`, `X-Frame-Options`, `Cross-Origin-Opener-Policy`, `Cross-Origin-Resource-Policy`, `Strict-Transport-Security` ohne `preload`). Zusätzlich `<meta name="referrer">` direkt im HTML gesetzt (wirkt unabhängig vom Hoster).
- **Datei-Uploads:** NICHT ANWENDBAR (keine Upload-Funktion).
- **Open Redirects/Clickjacking/Tabnabbing:** Alle `target="_blank"`-Links (Social-Links, OSM-Datenschutzlink) tragen bereits `rel="noopener noreferrer"` – ERFÜLLT.
- **Third-Party-Skripte:** Auf das technisch nötige Minimum reduziert (aktuell: keine mehr außer dem optionalen OpenStreetMap-iframe nach Klick).
- **Verfügbarkeit/Missbrauch:** NICHT ANWENDBAR (keine ressourcenintensiven Endpunkte).
- **Sensible Daten in Logs/API-Antworten:** NICHT ANWENDBAR (keine API, keine serverseitigen Logs im eigenen Code).

---

## Teil 3 – Barrierefreiheit (WCAG 2.1 AA, technischer Prüfmaßstab)

Automatisiertes Tool (axe-core) war in dieser Umgebung nicht erreichbar
(kein Netzwerkzugriff auf den CDN) → Prüfung erfolgte **manuell/strukturell**
per Playwright (Tastatur-Trace, Fokus-Reihenfolge, Heading-Struktur,
Landmark-Struktur, Kontrastberechnung nach WCAG-Formel, Reflow bei 320px/
200%-Zoom-Simulation). Das ist als Einschränkung zu verstehen, nicht als
vollständiger Ersatz für ein automatisiertes Audit-Tool oder einen Test mit
echten Screenreader-Nutzer:innen.

| Prüfpunkt | Status | Beobachtung |
|---|---|---|
| Sprache/`lang`-Attribut | ERFÜLLT | `<html lang="de">` auf allen Seiten. |
| Skip-Link | ERFÜLLT | Erster Tab-Stopp ist „Zum Inhalt springen", funktionsfähig, sichtbar bei Fokus. |
| Sichtbarer Fokusindikator | ERFÜLLT | 3px Outline auf allen 15 getesteten Tab-Stopps nachgewiesen, keine `outline: none` ohne Ersatz gefunden. |
| Tastaturbedienbarkeit | ERFÜLLT | Alle interaktiven Elemente (Nav, Buttons, mobiles Menü, Karten-Button, Formularfelder) per Tab erreichbar; keine Fokusfalle beobachtet. |
| Heading-Hierarchie | War NICHT ERFÜLLT → jetzt ERFÜLLT | Sprung H1→H3 im USP-Bereich gefunden (keine H2 vorhanden) und durch versteckte `<h2 class="visually-hidden">` behoben; automatisierter Nachlauf bestätigt keinen Sprung >1 Ebene mehr. |
| Landmarks | ERFÜLLT | `header`, `nav`, `main`, `footer` vorhanden und eindeutig. |
| Farbkontraste (Text) | ERFÜLLT | Alle geprüften Vordergrund-/Hintergrund-Paare (Fließtext, Überschriften, Button-Beschriftungen, Footer-Text/-Links, Platzhalter-Hinweisbox) erreichen ≥ 4,5:1 (rechnerisch nach der WCAG-Kontrastformel ermittelt, siehe Prüfprotokoll in diesem Audit). |
| Reflow bei 320px Breite | War NICHT ERFÜLLT → jetzt ERFÜLLT | Horizontales Overflow (373px Inhalt in 320px Viewport) durch fehlendes `min-width: 0` auf CSS-Grid-Kindern (`.contact-grid`) sowie eine nicht umbrechende lange Button-Beschriftung verursacht. Beide Ursachen behoben, Nachprüfung: `scrollWidth === clientWidth`. |
| Icon-only-Bedienelemente | ERFÜLLT | Keine gefunden ohne zugänglichen Namen (entweder `aria-hidden` auf rein dekorativen Icons oder begleitender Text/`aria-label`). |
| Reduzierte Bewegung | ERFÜLLT | `@media (prefers-reduced-motion: reduce)` global gesetzt (bestand bereits vor diesem Audit). |
| Formular-Labels | ERFÜLLT | Alle sichtbaren Formularfelder (Kontaktformular) haben verknüpfte `<label for>`. |
| Viewport-Zoom nicht deaktiviert | ERFÜLLT | `<meta name="viewport">` ohne `maximum-scale`/`user-scalable=no`. |
| Consent-Element barrierefrei | ERFÜLLT | Neuer Karten-Consent-Bereich nutzt normale, fokussierbare `<button>`-Elemente mit sichtbarem Fokus – keine reinen Div-Click-Handler. |
| WCAG-2.2-AA-Zielbild (empfohlen, nicht Pflichtmaßstab) | UNKLAR / MENSCHLICHE PRÜFUNG ERFORDERLICH | Nicht vollständig geprüft (z. B. Zielgrößen 24×24px CSS-Pixel im Detail, „Consistent Help"). Buttons/Touch-Targets sind mit min. 44–46px Höhe bereits großzügig dimensioniert, aber keine vollständige 2.2-Prüfung durchgeführt. |

**Nicht geprüft** (außerhalb des Website-Codes bzw. mangels Testressourcen):
Screenreader-Test mit realer Software (NVDA/JAWS/VoiceOver), automatisiertes
axe-core-Scan, PDF-Dokumente (keine vorhanden), Video-/Audio-Inhalte (keine
vorhanden).
