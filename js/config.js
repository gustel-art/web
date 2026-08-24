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
  shopName: "Drahteselstall",
  claim: "Der Fahrradladen in Heidenheim an der Brenz",

  // ---------------------------------------------------------------------
  // Adresse & Standort
  // ---------------------------------------------------------------------
  address: {
    street: "Wilhelmstraße 118/1",
    zip: "89518",
    city: "Heidenheim an der Brenz",
    region: "Baden-Württemberg",
    country: "Deutschland",
    // Koordinaten grob geschätzt (Stadtzentrum Heidenheim) – für eine exakte
    // Marker-Position: Adresse in Google Maps suchen, Rechtsklick auf den
    // Punkt -> die dort angezeigten Koordinaten hier eintragen.
    lat: 48.6785,
    lng: 10.1502,
  },

  // ---------------------------------------------------------------------
  // Kontakt
  // ---------------------------------------------------------------------
  contact: {
    phone: "+49 171 1411117",
    phoneDisplay: "0171 1411117",
    // Keine öffentlich gelistete E-Mail-Adresse gefunden -> leer lassen,
    // bis eine echte Adresse feststeht. Bei leerem Wert blendet die Seite
    // den E-Mail-Kontaktweg automatisch aus.
    email: "",
  },

  social: {
    instagram: "",
    facebook: "",
  },

  // ---------------------------------------------------------------------
  // Google-Bewertung (laut Google-Eintrag: 4,6 ★ bei 11 Rezensionen)
  // ---------------------------------------------------------------------
  googleRating: {
    value: "4,6",
    count: 11,
  },

  // ---------------------------------------------------------------------
  // Öffnungszeiten
  // day: 0 = Montag ... 6 = Sonntag
  // Für einen freien Tag: closed: true
  // Für Mittagspause: zwei Zeitfenster in "slots" angeben
  //
  // Laut Google-Eintrag: nur samstags von 8-20 Uhr geöffnet.
  // ---------------------------------------------------------------------
  openingHours: [
    { day: 0, label: "Montag", slots: [], closed: true },
    { day: 1, label: "Dienstag", slots: [], closed: true },
    { day: 2, label: "Mittwoch", slots: [], closed: true },
    { day: 3, label: "Donnerstag", slots: [], closed: true },
    { day: 4, label: "Freitag", slots: [], closed: true },
    { day: 5, label: "Samstag", slots: [["08:00", "20:00"]] },
    { day: 6, label: "Sonntag", slots: [], closed: true },
  ],

  // ---------------------------------------------------------------------
  // Hero-Bereich
  // ---------------------------------------------------------------------
  hero: {
    title: "Radfahren beginnt bei uns.",
    subtitle:
      "Ihr Fahrradladen in Heidenheim an der Brenz – persönliche Beratung, Verkauf und Service vor Ort.",
    primaryCta: { label: "Kontakt aufnehmen", href: "#kontakt" },
    secondaryCta: { label: "Leistungen ansehen", href: "#leistungen" },
    badges: [
      { icon: "star", text: "4,6 ★ bei Google (11 Rezensionen)" },
      { icon: "clock", text: "Geöffnet Samstag 8–20 Uhr" },
      { icon: "mapPin", text: "Wilhelmstraße, Heidenheim" },
    ],
  },

  // ---------------------------------------------------------------------
  // USPs / Vertrauenselemente (kurze Leiste unter dem Hero)
  // ---------------------------------------------------------------------
  usps: [
    {
      icon: "bike",
      title: "Große Auswahl",
      text: "Vom Kinderrad bis zum E-Bike – viele hochwertige Gebrauchträder für jede Altersklasse.",
    },
    {
      icon: "heart",
      title: "Ehrliche Beratung",
      text: "Freundlich und ehrlich, ohne Verkaufsdruck – das bestätigen zahlreiche Kund:innen.",
    },
    {
      icon: "tag",
      title: "Faire Preise",
      text: "Gutes Preis-Leistungs-Verhältnis bei Neu- und Gebrauchträdern.",
    },
    {
      icon: "openSign",
      title: "Nur samstags geöffnet",
      text: "8–20 Uhr in der Wilhelmstraße – bitte Öffnungszeiten beachten.",
    },
  ],

  // ---------------------------------------------------------------------
  // Leistungen (werden automatisch als Karten dargestellt)
  // Die ersten beiden Karten spiegeln wieder, was Kund:innen in Google-
  // Rezensionen tatsächlich hervorheben (große Auswahl, Gebrauchträder,
  // faire Beratung). Reparatur & Zubehör sind typische Ergänzungen eines
  // Fahrradladens als Ausgangspunkt – bitte bei Bedarf anpassen.
  // ---------------------------------------------------------------------
  services: [
    {
      icon: "bike",
      title: "Neu- & Gebrauchträder",
      text: "Große Auswahl für jede Altersklasse – vom Kinderrad über Stadt- und Rennräder bis zum E-Bike. Viele hochwertige Gebrauchträder zu fairen Preisen.",
    },
    {
      icon: "battery",
      title: "E-Bikes",
      text: "Beratung und Verkauf rund ums E-Bike aus unserem Sortiment.",
    },
    {
      icon: "heart",
      title: "Ehrliche Beratung",
      text: "Freundliche, ehrliche Beratung – ohne Verkaufsdruck, bis Sie das passende Rad gefunden haben.",
    },
    {
      icon: "wrench",
      title: "Reparatur & Service",
      text: "Bremsen, Schaltung, Reifen und mehr – wir bringen Ihr Rad wieder sicher auf die Straße.",
    },
    {
      icon: "bag",
      title: "Zubehör & Ausstattung",
      text: "Helme, Beleuchtung, Taschen und Kindersitze für sicheres und komfortables Radfahren.",
    },
  ],

  // ---------------------------------------------------------------------
  // Über uns
  // ---------------------------------------------------------------------
  about: {
    title: "Ihr Fahrradladen mitten in Heidenheim",
    text:
      "Der Drahteselstall ist Ihr Fahrradladen in der Wilhelmstraße in Heidenheim an der Brenz. Kund:innen schätzen die große Auswahl – vom Kinderrad bis zum E-Bike, viele davon hochwertig gebraucht und fair bepreist – sowie die freundliche, ehrliche Beratung ohne Verkaufsdruck. Wir sind samstags von 8 bis 20 Uhr für Sie da.",
    stats: [
      { value: "4,6 ★", label: "Google-Bewertung" },
      { value: "11", label: "Rezensionen" },
    ],
  },

  // ---------------------------------------------------------------------
  // Team (optional – leeres Array blendet den Abschnitt aus)
  // Herr Ziller wird in einer Google-Rezension als freundlicher Ansprech-
  // partner genannt. Rolle ist nicht offiziell bestätigt (vermutlich
  // Inhaber) – bitte bei Bedarf korrigieren oder weitere Personen ergänzen.
  // ---------------------------------------------------------------------
  team: [
    { name: "Herr Ziller", role: "Beratung & Verkauf", initials: "HZ" },
  ],

  // ---------------------------------------------------------------------
  // Kundenstimmen – ausgewählte, unbearbeitete Original-Zitate aus echten
  // Google-Rezensionen des Drahteselstall (mit Vorname/Anzeigename, wie bei
  // Google öffentlich einsehbar). Weitere Rezensionen: siehe Google-Eintrag.
  // ---------------------------------------------------------------------
  testimonials: [
    {
      text: "Große Auswahl an Fahrrädern für jede Altersklasse. Freundliche und ehrliche Beratung. Habe gefunden, was ich wollte und bin sehr glücklich mit meinem Fahrrad. Vielen Dank!",
      author: "Lukas",
      rating: 5,
    },
    {
      text: "Sehr viele gebrauchte Räder in top Zustand zu wirklich fairen Preisen. Jede Art von Rad über eBikes, Rennräder, Stadträder zu Kinderräder.",
      author: "Kathi Schim",
      rating: 5,
    },
    {
      text: "Haben gerade ein Rad gekauft, klasse Beratung, freundlich und super Preis-Leistung.",
      author: "Rana Abduljalil",
      rating: 5,
    },
    {
      text: "Habe mir ein schönes gebrauchtes Fahrrad zum fairen Preis gekauft. Super Betreuung und gute Auswahl :)",
      author: "Nihâl Yldrm",
      rating: 5,
    },
  ],

  // ---------------------------------------------------------------------
  // Footer / rechtliches (Platzhalter-Links, bitte anpassen)
  // ---------------------------------------------------------------------
  legal: {
    impressumHref: "impressum.html",
    datenschutzHref: "datenschutz.html",
  },
};
