/**
 * ============================================================================
 *  SHOP-KONFIGURATION
 * ============================================================================
 *  Diese Datei ist die EINZIGE Stelle, die du bearbeiten musst, um die
 *  komplette Website an deinen Fahrradladen anzupassen: Name, Adresse,
 *  Öffnungszeiten, Leistungen, Team, Bewertungen etc.
 *
 *  Die Seite (js/main.js) liest diese Daten aus und baut daraus automatisch
 *  Navigation, Hero, Leistungs-Kacheln, Öffnungszeiten-Tabelle, Karte und
 *  Footer. Du musst KEIN HTML anfassen.
 *
 *  Icons: siehe js/icons.js für die verfügbaren Icon-Namen (icon: "...").
 * ============================================================================
 */

window.SHOP_CONFIG = {

  // ---------------------------------------------------------------------
  // Grunddaten
  // ---------------------------------------------------------------------
  shopName: "Zweirad Brenztal",
  claim: "Ihr Fahrradladen in Heidenheim an der Brenz",
  founded: 1994, // Gründungsjahr -> wird für "seit XXXX" genutzt

  // ---------------------------------------------------------------------
  // Adresse & Standort
  // ---------------------------------------------------------------------
  address: {
    street: "Hauptstraße 24",
    zip: "89522",
    city: "Heidenheim an der Brenz",
    region: "Baden-Württemberg",
    country: "Deutschland",
    // Koordinaten für die Kartenanzeige (OpenStreetMap, kein API-Key nötig)
    lat: 48.6763,
    lng: 10.1526,
  },

  // ---------------------------------------------------------------------
  // Kontakt
  // ---------------------------------------------------------------------
  contact: {
    phone: "+49 7321 12345",
    phoneDisplay: "07321 12345",
    whatsapp: "+4973211234567",
    email: "info@zweirad-brenztal.de",
  },

  social: {
    instagram: "https://instagram.com/",
    facebook: "https://facebook.com/",
  },

  // ---------------------------------------------------------------------
  // Öffnungszeiten
  // day: 0 = Montag ... 6 = Sonntag
  // Für einen freien Tag: closed: true
  // Für Mittagspause: zwei Zeitfenster in "slots" angeben
  // ---------------------------------------------------------------------
  openingHours: [
    { day: 0, label: "Montag", slots: [["09:00", "13:00"], ["14:00", "18:00"]] },
    { day: 1, label: "Dienstag", slots: [["09:00", "13:00"], ["14:00", "18:00"]] },
    { day: 2, label: "Mittwoch", slots: [["09:00", "13:00"], ["14:00", "18:00"]] },
    { day: 3, label: "Donnerstag", slots: [["09:00", "13:00"], ["14:00", "18:00"]] },
    { day: 4, label: "Freitag", slots: [["09:00", "13:00"], ["14:00", "18:00"]] },
    { day: 5, label: "Samstag", slots: [["09:00", "13:00"]] },
    { day: 6, label: "Sonntag", slots: [], closed: true },
  ],

  // ---------------------------------------------------------------------
  // Hero-Bereich
  // ---------------------------------------------------------------------
  hero: {
    title: "Radfahren beginnt bei uns.",
    subtitle:
      "Verkauf, Reparatur und E-Bike-Service für Heidenheim und das Brenztal – persönliche Beratung von Ihrem Meisterbetrieb vor Ort.",
    primaryCta: { label: "Termin vereinbaren", href: "#kontakt" },
    secondaryCta: { label: "Leistungen ansehen", href: "#leistungen" },
    badges: [
      { icon: "badge", text: "Meisterbetrieb seit 1994" },
      { icon: "clock", text: "Werkstatt oft am selben Tag" },
      { icon: "mapPin", text: "Mitten in Heidenheim" },
    ],
  },

  // ---------------------------------------------------------------------
  // USPs / Vertrauenselemente (kurze Leiste unter dem Hero)
  // ---------------------------------------------------------------------
  usps: [
    {
      icon: "wrench",
      title: "Meisterwerkstatt",
      text: "Fachgerechte Reparatur durch geprüfte Zweiradmechaniker.",
    },
    {
      icon: "clock",
      title: "Schneller Service",
      text: "Standardreparaturen häufig noch am selben Tag erledigt.",
    },
    {
      icon: "tag",
      title: "Faire Preise",
      text: "Transparente Kostenvoranschläge – keine versteckten Kosten.",
    },
    {
      icon: "heart",
      title: "Lokal verwurzelt",
      text: "Seit 1994 verlässlicher Fahrradpartner im Brenztal.",
    },
  ],

  // ---------------------------------------------------------------------
  // Leistungen (werden automatisch als Karten dargestellt)
  // ---------------------------------------------------------------------
  services: [
    {
      icon: "bike",
      title: "Fahrradverkauf",
      text: "Trekking-, Stadt-, Renn-, Kinder- und Lastenräder namhafter Marken – inklusive persönlicher Beratung und Probefahrt.",
    },
    {
      icon: "battery",
      title: "E-Bike Center",
      text: "Beratung, Verkauf und Service rund ums E-Bike: Akku-Diagnose, Software-Updates und Motor-Check.",
    },
    {
      icon: "wrench",
      title: "Reparatur & Inspektion",
      text: "Bremsen, Schaltung, Reifen, Laufräder – wir bringen Ihr Rad wieder sicher auf die Straße.",
    },
    {
      icon: "shield",
      title: "Diebstahlschutz & Codierung",
      text: "Rahmencodierung und Beratung zu Schlössern, damit Ihr Rad da bleibt, wo es hingehört.",
    },
    {
      icon: "bag",
      title: "Zubehör & Ausstattung",
      text: "Helme, Beleuchtung, Taschen, Kindersitze und Bekleidung – alles für sicheres und komfortables Radfahren.",
    },
    {
      icon: "ruler",
      title: "Bike-Fitting",
      text: "Individuelle Anpassung von Sitzposition und Rahmengröße für entspanntes, effizientes Fahren.",
    },
  ],

  // ---------------------------------------------------------------------
  // Über uns
  // ---------------------------------------------------------------------
  about: {
    title: "Ihr Fahrradladen mitten in Heidenheim",
    text:
      "Seit 1994 dreht sich bei uns alles ums Fahrrad. Als familiengeführter Meisterbetrieb kennen wir die Strecken im Brenztal und auf der Ostalb genauso gut wie die Technik in Ihrem Rad. Ob neues Wunschrad, dringende Reparatur oder Umstieg aufs E-Bike – wir beraten ehrlich, reparieren zuverlässig und sind auch nach dem Kauf für Sie da.",
    stats: [
      { value: "30+", label: "Jahre Erfahrung" },
      { value: "12.000+", label: "reparierte Räder" },
      { value: "4.9/5", label: "Kundenbewertung" },
    ],
  },

  // ---------------------------------------------------------------------
  // Team (optional – leeres Array blendet den Abschnitt aus)
  // ---------------------------------------------------------------------
  team: [
    { name: "Markus Weller", role: "Inhaber & Zweiradmechanikermeister", initials: "MW" },
    { name: "Sabine Kaiser", role: "Verkauf & Beratung", initials: "SK" },
    { name: "Tobias Herrmann", role: "E-Bike Service", initials: "TH" },
  ],

  // ---------------------------------------------------------------------
  // Kundenstimmen (optional – leeres Array blendet den Abschnitt aus)
  // ---------------------------------------------------------------------
  testimonials: [
    {
      text: "Schnelle, ehrliche Beratung und meine Reparatur war noch am selben Tag fertig. Besser geht's nicht.",
      author: "Julia S.",
      rating: 5,
    },
    {
      text: "Endlich ein Laden, der sich mit E-Bikes wirklich auskennt. Top Service, faire Preise.",
      author: "Andreas R.",
      rating: 5,
    },
    {
      text: "Seit Jahren mein Fahrradladen in Heidenheim – immer freundlich und kompetent.",
      author: "Familie Bauer",
      rating: 5,
    },
  ],

  // ---------------------------------------------------------------------
  // Footer / rechtliches (Platzhalter-Links, bitte anpassen)
  // ---------------------------------------------------------------------
  legal: {
    impressumHref: "#",
    datenschutzHref: "#",
  },
};
