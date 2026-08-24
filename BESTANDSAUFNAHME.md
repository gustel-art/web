# Bestandsaufnahme – technisches Ist-Verhalten

Stand: 24.08.2026. Ermittelt durch Code-Analyse und durch tatsächliches
Ausführen der Website in einem headless Chromium (Playwright) mit
Netzwerk-, Konsolen- und Storage-Tracing – nicht nur durch Grep nach
Stichwörtern.

## 1. Projektart und Stack

- Statische Website, kein Build-System, kein Framework, keine
  `package.json`/`composer.json`/`requirements.txt`.
- Dateien: `index.html`, `impressum.html`, `datenschutz.html`,
  `css/*.css`, `js/*.js`, `assets/`.
- Kein Backend, keine Datenbank, keine API-Endpunkte, keine
  Serverless-Functions, kein CMS.
- Deployment-Ziel: noch nicht festgelegt (statischer Host vorgesehen).
- Kein CI, kein `.env`, keine Secrets im Repository gefunden.

## 2. Geschäftsmodell (Phase 0.2)

Visitenkarten-/Informationsseite für einen stationären Fahrradladen
("Drahteselstall") in Heidenheim an der Brenz. Zielgruppe: Verbraucher
(B2C) vor Ort. Kein Online-Vertragsschluss, kein Warenkorb, keine Preise,
kein Login, keine Uploads, keine Zahlungen, kein Newsletter, kein
Chat/Chatbot. Erhobene Daten: keine serverseitige Erhebung durch die
Website selbst (siehe Formulare unten).

## 3. Netzwerkverhalten (verifiziert per Playwright-Trace)

**Vor jeder Nutzerinteraktion** (unmittelbar nach dem Laden von `index.html`):

| Externe Requests | Anzahl |
|---|---|
| Requests an Drittanbieter-Domains | **0** (verifiziert) |

Vor der Korrektur (siehe `MASSNAHMEN.md`) wurden hier unconditional
Requests an `fonts.googleapis.com`, `fonts.gstatic.com` und
`www.openstreetmap.org` ausgelöst.

**Nach Klick auf „Karte laden & Standort anzeigen"** im Kontaktbereich:

| Ziel | Zweck | Übertragene Daten |
|---|---|---|
| `www.openstreetmap.org` (iframe, `embed.html`) | Kartendarstellung des Standorts | IP-Adresse des Besuchers, Standard-HTTP-Header; ggf. vom Anbieter selbst gesetzte Cookies (außerhalb unserer Kontrolle) |

Keine weiteren externen Verbindungen bei normaler Nutzung (Navigation,
Öffnungszeiten-Anzeige, mobiles Menü, Kontaktformular-Interaktion, Team-/
Bewertungs-Anzeige) festgestellt.

## 4. Speicherung auf dem Endgerät

Verifiziert per `document.cookie`, `localStorage`, `sessionStorage` direkt
nach Seitenaufruf: **alle drei leer**. Die Website selbst setzt keine
Cookies und schreibt nicht in den Browser-Speicher. Kein Service Worker,
kein Cache Storage, keine erkennbaren Fingerprinting-Techniken.

Nach Laden der OpenStreetMap-Karte (nur auf Klick) kann der eingebettete
Drittanbieter-Frame eigene Cookies setzen; das liegt außerhalb der
Kontrolle dieser Website und ist in der Datenschutzerklärung offengelegt.

## 5. Formulare

Ein Kontaktformular existiert im Markup (`#contact-form`), ist aber
**standardmäßig ausgeblendet** (`hidden`), solange keine geschäftliche
E-Mail-Adresse in `js/config.js` hinterlegt ist (aktuell: leer). Anstelle
dessen wird ein „Jetzt anrufen"-Hinweis angezeigt.

Sobald eine E-Mail-Adresse hinterlegt wird, öffnet das Formular beim
Absenden lediglich einen `mailto:`-Link mit vorausgefülltem Betreff/Text
(`encodeURIComponent`-kodiert). Es gibt **keinen Server-Endpunkt**, an den
Formulardaten übertragen werden – die Verarbeitung findet ausschließlich im
E-Mail-Programm der besuchenden Person statt.

## 6. APIs

Keine vorhanden.

## 7. Konfiguration / exponierte Artefakte

- Kein `.git`-Verzeichnis im Auslieferungspfad enthalten (Repository-Root
  ≠ Web-Root wäre bei den meisten Hostern ohnehin nicht öffentlich).
- Keine `.env`-Datei, keine Zugangsdaten im Code.
- Keine Admin-Pfade, kein Verzeichnislisting (statischer Host-abhängig,
  aber keine serverseitige Logik, die sowas erzeugen könnte).
- `robots.txt` nicht vorhanden (unkritisch für diese Seitenart; siehe
  `OFFENE-PUNKTE.md`).

## 8. Dependencies

Keine. Keine `package-lock.json`, kein `node_modules`. Einzige externen
Assets waren (vor Korrektur) Google Fonts – jetzt lokal eingebunden
(`assets/fonts/*.woff2`, SIL Open Font License 1.1, siehe
`THIRD-PARTY-LICENSES.md`).

## 9. Datenlandkarte

| Datenart | Erhoben durch | Empfänger | Rechtsgrundlage (vorläufig) |
|---|---|---|---|
| IP-Adresse, Zugriffsdaten | Hosting-Anbieter (Server-Logfiles) | Hosting-Anbieter, Standort noch offen | Art. 6 Abs. 1 lit. f DSGVO |
| IP-Adresse | OpenStreetMap Foundation (nur nach Klick) | OpenStreetMap Foundation | Art. 6 Abs. 1 lit. a DSGVO (Einwilligung durch Klick) |
| Telefonisch mitgeteilte Daten | Ladenpersonal | Ladenpersonal (keine Website-Verarbeitung) | Art. 6 Abs. 1 lit. b/f DSGVO |
| Inhalte eines künftigen Kontaktformulars | Direkt im E-Mail-Client der besuchenden Person, nicht über einen Server dieser Website | Empfänger-Postfach (sobald E-Mail-Adresse hinterlegt) | Art. 6 Abs. 1 lit. b/f DSGVO |

## 10. Cookie-/Storage-Tabelle

| Name | Herkunft | Zweck | Lebensdauer | Vor Einwilligung aktiv? |
|---|---|---|---|---|
| – | – | Diese Website setzt keine eigenen Cookies. | – | – |

## 11. Externe Empfänger (Tabelle)

| Dienst | Vor Korrektur | Nach Korrektur | AV-Vertrag nötig? |
|---|---|---|---|
| Google Fonts (fonts.googleapis.com/gstatic.com) | Bei jedem Seitenaufruf geladen | **Entfernt** – Schriften lokal gehostet | entfällt |
| OpenStreetMap (openstreetmap.org) | Bei jedem Seitenaufruf geladen | Nur nach explizitem Klick | Klärungsbedarf, siehe `ANWALTLICHE-PRUEFUNG.md` (Einzelabruf-Einbettung vs. AV-Pflicht) |
| Hosting-Anbieter | – | – (Anbieter noch nicht gewählt) | Ja, sobald gewählt – `OFFENE-PUNKTE.md` |
