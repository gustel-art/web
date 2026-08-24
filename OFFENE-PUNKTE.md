# Offene Punkte

Alles, was **nicht** technisch im Code lösbar war (fehlende Fakten,
organisatorische Pflichten, wirtschaftliche/rechtliche Entscheidungen).
Ohne Erledigung dieser Punkte sind `impressum.html` und `datenschutz.html`
**nicht veröffentlichungsreif**.

## Platzhalter in `impressum.html` (zwingend vor Veröffentlichung zu ersetzen)

1. Vollständiger Vor- und Nachname der Inhaberin/des Inhabers.
2. Bestätigung, dass „Wilhelmstraße 118/1, 89518 Heidenheim an der Brenz"
   die ladungsfähige Anschrift ist (oder Angabe der abweichenden Anschrift).
3. Geschäftliche E-Mail-Adresse (Pflichtangabe nach § 5 Abs. 1 Nr. 2 DDG).
4. Umsatzsteuer-Identifikationsnummer, falls vorhanden.
5. Handelsregisterdaten, falls doch als e.K. eingetragen (nach Nutzerangabe
   aktuell nicht der Fall).
6. Bereitschaft/Verpflichtung zur Teilnahme an einem
   Streitbeilegungsverfahren nach § 36 VSBG.

## Platzhalter in `datenschutz.html`

7. Vollständiger Name der Inhaberin/des Inhabers (Duplikat von Punkt 1).
8. Geschäftliche E-Mail-Adresse (Duplikat von Punkt 3).
9. Name und Sitz des Hosting-Anbieters, sobald gewählt.
10. Konkrete Server-Logfile-Speicherdauer beim gewählten Hoster.
11. Name/Kontakt eines Datenschutzbeauftragten, falls entgegen der aktuellen
    Einschätzung doch einer bestellt ist oder werden muss.

## Organisatorische DSGVO-Pflichten (nicht im Code lösbar)

12. Verzeichnis von Verarbeitungstätigkeiten (Art. 30 DSGVO) – auch für
    Kleinstunternehmen grundsätzlich zu prüfen, ob eine Ausnahme greift.
13. Dokumentation technisch-organisatorischer Maßnahmen (TOMs), insbesondere
    sobald ein Hosting-Anbieter feststeht.
14. Löschkonzept für ggf. anfallende Daten (z. B. Kontaktanfragen).
15. Prozess für den Umgang mit Datenpannen (Art. 33, 34 DSGVO).
16. Auftragsverarbeitungsvertrag (AVV) mit dem künftigen Hosting-Anbieter.

## Security / Hosting (abhängig von einer noch offenen Entscheidung)

17. Hosting-Anbieter wählen; danach `_headers`-Datei (Netlify/Cloudflare
    Pages) tatsächlich deployen bzw. `.htaccess`/Nginx-Konfiguration aus
    `SECURITY-HEADERS.md` einspielen.
18. Nach einigen Tagen Betrieb: `Content-Security-Policy-Report-Only`
    auswerten (setzt eine `report-to`/`report-uri`-Auswertung voraus, die
    noch einzurichten ist) und erst danach auf scharfe
    `Content-Security-Policy` umstellen.
19. HTTPS-Erzwingung/HSTS beim gewählten Hoster verifizieren (in dieser
    Umgebung ohne Live-Deployment nicht prüfbar).

## Sonstiges

20. `robots.txt` und eine XML-Sitemap sind aktuell nicht vorhanden – für
    diese Seitenart nicht zwingend erforderlich, aber empfehlenswert für
    die Auffindbarkeit; keine rechtliche Pflicht.
21. `config.js` wird von Personen ohne Entwicklungshintergrund bearbeitet
    werden (Zweck der config-getriebenen Architektur). Da Inhalte per
    `innerHTML` gerendert werden, sollte künftig eingefügter Text **kein**
    rohes HTML/JavaScript enthalten (Self-XSS-Risiko im eigenen Browser der
    bearbeitenden Person, kein Angriffsvektor gegen Website-Besucher:innen,
    aber dennoch vermeidbar). Keine Code-Änderung vorgenommen, da dies eine
    Abwägung zwischen Einfachheit der Config-Bearbeitung und zusätzlicher
    Escaping-Logik ist, die außerhalb des Audit-Auftrags liegt.
22. Icon-only-Team-Avatare zeigen Initialen als Text – kein offener Punkt,
    nur zur Vollständigkeit erwähnt: enthält keine echten Fotos, daher
    keine Alt-Text-Frage bei Bildern.
23. Bewertung aus Bereich I (Google-Rezensionen als Zitate) wurde als
    `UNKLAR / MENSCHLICHE PRÜFUNG ERFORDERLICH` an
    `ANWALTLICHE-PRUEFUNG.md` übergeben.

## Automatisiertes Accessibility-Tool nicht verfügbar

24. `axe-core` konnte in dieser Umgebung nicht geladen werden (kein
    Netzwerkzugriff auf gängige CDNs). Die Barrierefreiheitsprüfung in
    `AUDIT-BEFUND.md` beruht auf manuellen/strukturellen Playwright-Checks.
    Ein automatisierter axe-core- oder Lighthouse-Lauf vor Veröffentlichung
    wird empfohlen.

## WCAG 2.2 AA (empfohlenes Zielbild, nicht Pflichtmaßstab)

25. Nicht vollständig geprüft (u. a. exakte Zielgrößen nach SC 2.5.8,
    „Consistent Help", Alternativen zu Ziehbewegungen – letztere ohnehin
    nicht relevant, da keine Drag-Interaktionen vorhanden sind).
