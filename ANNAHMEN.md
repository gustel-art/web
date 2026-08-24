# Annahmenprotokoll

Grundlage: Antworten des Nutzers auf die Rückfrage in Phase 0.3 sowie aus dem
bisherigen Gesprächsverlauf bekannte Fakten (Google-Business-Eintrag).

| # | Annahme | Quelle | Auswirkung auf die Bewertung |
|---|---|---|---|
| 1 | Die Website ist rein informativ; es werden keine Verträge/Käufe/Buchungen online abgeschlossen (Kauf nur vor Ort im Laden). | Nutzerantwort | E-Commerce-Pflichten (Bereich F: Button-Lösung, Widerrufsrecht, PAngV, GPSR-Produktangaben) als **NICHT ANWENDBAR** bewertet. Muss neu geprüft werden, sobald ein Online-Shop/Buchungssystem hinzukommt. |
| 2 | Betreiber ist ein Einzelunternehmen (kein e.K., keine GmbH/GbR). | Nutzerantwort | Impressum benötigt den vollständigen bürgerlichen Namen der Inhaberin/des Inhabers statt Handelsregisterdaten; Registereintrag entfällt voraussichtlich. |
| 3 | Kleinstunternehmen im Sinne von § 3 Abs. 3 BFSG (< 10 Beschäftigte **und** ≤ 2 Mio. € Jahresumsatz/Bilanzsumme). | Nutzerantwort | BFSG-Barrierefreiheitspflichten (Bereich G, Barrierefreiheitserklärung nach Anlage 3) als **wahrscheinlich NICHT ANWENDBAR** bewertet – unabhängig davon wurde WCAG 2.1 AA als Qualitätsmaßstab technisch umgesetzt, da dies ohnehin guter Standard ist. |
| 4 | Hosting-Anbieter steht noch nicht fest. | Nutzerantwort | Angaben zu Server-Standort/-Anbieter und Logfile-Speicherdauer in der Datenschutzerklärung bleiben Platzhalter; Security-Header wurden als hosterunabhängige Vorlagen (`_headers`, `.htaccess`, Nginx) bereitgestellt statt fest verdrahtet. |
| 5 | Die Adresse „Wilhelmstraße 118/1, 89518 Heidenheim an der Brenz" aus dem Google-Eintrag ist zugleich die ladungsfähige Anschrift des Betreibers im Sinne des § 5 DDG. | Google-Business-Eintrag (vom Nutzer eingefügt) | Im Impressum als wahrscheinlicher Wert übernommen, aber ausdrücklich mit Bestätigungs-Platzhalter versehen, da eine Ladenadresse nicht zwingend mit der ladungsfähigen Anschrift identisch sein muss. |
| 6 | Keine KI-Systeme (Chatbot, KI-generierte Inhalte) im Einsatz. | Aus dem Code ersichtlich (keine entsprechenden Komponenten) | Bereich H (KI-Transparenz, Art. 50 KI-VO) als **NICHT ANWENDBAR** bewertet. |
| 7 | Die Website richtet sich ausschließlich an Verbraucher in Deutschland (regionaler Fahrradladen), kein internationales/mehrsprachiges Angebot. | Aus Geschäftsmodell ersichtlich | Keine Mehrsprachigkeits- oder grenzüberschreitenden Zusatzprüfungen vorgenommen. |
| 8 | Zahl der Beschäftigten liegt unter dem Schwellenwert des § 38 BDSG (< 20 Personen ständig mit automatisierter Verarbeitung personenbezogener Daten befasst), sodass kein Datenschutzbeauftragter gesetzlich zu bestellen ist. | Abgeleitet aus Annahme 3 (Kleinstunternehmen) | In der Datenschutzerklärung als vorläufige Einschätzung (nicht als Garantie) formuliert. |

Nicht abgefragt und daher als offener Punkt (nicht als Annahme) behandelt:
vollständiger Name der Inhaberin/des Inhabers, geschäftliche E-Mail-Adresse,
USt-IdNr., Bereitschaft zur Verbraucherschlichtung (§ 36 VSBG) — siehe
`OFFENE-PUNKTE.md`.
