# Security-Header – Konfigurationsvorlagen

Diese Website besteht aus statischen HTML/CSS/JS-Dateien ohne eigenen
Server-Prozess. HTTP-Security-Header (siehe `AUDIT-BEFUND.md`, Security-
Querschnitt) können deshalb **nicht im Code selbst**, sondern nur auf Ebene
des Hosting/Webservers gesetzt werden. Da bei Redaktionsschluss dieses
Audits noch kein Hoster feststand, liegen hier zwei einsatzbereite Vorlagen.

## Netlify / Cloudflare Pages

Die Datei `_headers` im Projektwurzelverzeichnis wird von beiden Anbietern
automatisch ausgewertet – keine weitere Konfiguration nötig, sobald dort
deployt wird.

## Apache (eigener Server / Shared Hosting)

`.htaccess` im Webroot ergänzen:

```apacheconf
<IfModule mod_headers.c>
  Header always set X-Content-Type-Options "nosniff"
  Header always set Referrer-Policy "strict-origin-when-cross-origin"
  Header always set Permissions-Policy "geolocation=(), microphone=(), camera=(), payment=(), usb=(), interest-cohort=()"
  Header always set X-Frame-Options "DENY"
  Header always set Cross-Origin-Opener-Policy "same-origin"
  Header always set Cross-Origin-Resource-Policy "same-origin"
  Header always set Content-Security-Policy-Report-Only "default-src 'self'; img-src 'self' data:; font-src 'self'; style-src 'self'; script-src 'self'; frame-src https://www.openstreetmap.org; object-src 'none'; base-uri 'self'; form-action 'self'; frame-ancestors 'none'"
  Header always set Strict-Transport-Security "max-age=63072000; includeSubDomains"
</IfModule>
```

## Nginx

```nginx
add_header X-Content-Type-Options "nosniff" always;
add_header Referrer-Policy "strict-origin-when-cross-origin" always;
add_header Permissions-Policy "geolocation=(), microphone=(), camera=(), payment=(), usb=(), interest-cohort=()" always;
add_header X-Frame-Options "DENY" always;
add_header Cross-Origin-Opener-Policy "same-origin" always;
add_header Cross-Origin-Resource-Policy "same-origin" always;
add_header Content-Security-Policy-Report-Only "default-src 'self'; img-src 'self' data:; font-src 'self'; style-src 'self'; script-src 'self'; frame-src https://www.openstreetmap.org; object-src 'none'; base-uri 'self'; form-action 'self'; frame-ancestors 'none'" always;
add_header Strict-Transport-Security "max-age=63072000; includeSubDomains" always;
```

## Wichtig: CSP ist bewusst Report-Only

Die Content-Security-Policy ist in allen drei Vorlagen als
`Content-Security-Policy-Report-Only` eingetragen, **nicht** als scharf
blockierende `Content-Security-Policy`. So werden Verstöße nur protokolliert
(sofern eine `report-to`/`report-uri`-Direktive ergänzt wird), ohne die
Seite zu beschädigen. Erst nach Beobachtung ohne unerwartete Verstöße auf
den scharfen Header umstellen – siehe `MASSNAHMEN.md`.

## HSTS: `preload` bewusst nicht gesetzt

`Strict-Transport-Security` ist ohne `preload`-Flag konfiguriert. Eine
Aufnahme in die Browser-HSTS-Preload-Liste ist praktisch unumkehrbar und
sollte erst nach bewusster, gesonderter Entscheidung erfolgen.
