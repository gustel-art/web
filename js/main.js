/**
 * Rendert die komplette Seite aus window.SHOP_CONFIG (config.js).
 * Kein Framework, kein Build-Schritt – reines DOM-Scripting.
 */
(function () {
  "use strict";

  const cfg = window.SHOP_CONFIG;
  const icons = window.ICONS || {};

  if (!cfg) {
    console.error("SHOP_CONFIG fehlt – bitte js/config.js prüfen.");
    return;
  }

  /** Kleiner Helfer: Element per id */
  const $ = (id) => document.getElementById(id);

  /** Icon-Element befüllen */
  function setIcon(el, name) {
    if (!el) return;
    el.innerHTML = icons[name] || "";
  }

  /** Alle [data-icon] Platzhalter im aktuellen DOM befüllen */
  function hydrateIcons(root = document) {
    root.querySelectorAll("[data-icon]").forEach((el) => {
      setIcon(el, el.getAttribute("data-icon"));
    });
  }

  function el(tag, className, html) {
    const node = document.createElement(tag);
    if (className) node.className = className;
    if (html !== undefined) node.innerHTML = html;
    return node;
  }

  // -------------------------------------------------------------------
  // Branding
  // -------------------------------------------------------------------
  document.title = `${cfg.shopName} – Fahrradladen in ${cfg.address.city}`;
  const metaDesc = document.querySelector('meta[name="description"]');
  if (metaDesc) {
    metaDesc.setAttribute(
      "content",
      `${cfg.shopName}: ${cfg.hero.subtitle}`
    );
  }

  ["brand-name", "footer-brand-name", "footer-year-brand"].forEach((id) => {
    const node = $(id);
    if (node) node.textContent = cfg.shopName;
  });

  const footerClaim = $("footer-claim");
  if (footerClaim) footerClaim.textContent = cfg.claim;

  const footerYear = $("footer-year");
  if (footerYear) footerYear.textContent = new Date().getFullYear();

  // -------------------------------------------------------------------
  // Header: Telefon + mobiles Menü
  // -------------------------------------------------------------------
  const headerPhone = $("header-phone");
  if (headerPhone) headerPhone.href = `tel:${cfg.contact.phone.replace(/\s+/g, "")}`;
  const headerPhoneText = $("header-phone-text");
  if (headerPhoneText) headerPhoneText.textContent = cfg.contact.phoneDisplay;

  const menuToggle = $("menu-toggle");
  const mainNav = $("main-nav");
  if (menuToggle && mainNav) {
    menuToggle.addEventListener("click", () => {
      const isOpen = mainNav.classList.toggle("is-open");
      menuToggle.setAttribute("aria-expanded", String(isOpen));
      setIcon(menuToggle.querySelector(".icon"), isOpen ? "close" : "menu");
    });
    mainNav.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => {
        mainNav.classList.remove("is-open");
        menuToggle.setAttribute("aria-expanded", "false");
        setIcon(menuToggle.querySelector(".icon"), "menu");
      });
    });
  }

  // -------------------------------------------------------------------
  // Hero
  // -------------------------------------------------------------------
  $("hero-eyebrow").textContent = `Fahrradladen in ${cfg.address.city}`;
  $("hero-title").textContent = cfg.hero.title;
  $("hero-subtitle").textContent = cfg.hero.subtitle;

  const heroPrimary = $("hero-cta-primary");
  heroPrimary.textContent = cfg.hero.primaryCta.label;
  heroPrimary.href = cfg.hero.primaryCta.href;

  const heroSecondary = $("hero-cta-secondary");
  heroSecondary.textContent = cfg.hero.secondaryCta.label;
  heroSecondary.href = cfg.hero.secondaryCta.href;

  const heroBadges = $("hero-badges");
  (cfg.hero.badges || []).forEach((badge) => {
    const li = el("li", null, `<span class="icon" data-icon="${badge.icon}"></span><span>${badge.text}</span>`);
    heroBadges.appendChild(li);
  });

  // -------------------------------------------------------------------
  // USPs
  // -------------------------------------------------------------------
  const uspsGrid = $("usps-grid");
  (cfg.usps || []).forEach((usp) => {
    const item = el(
      "div",
      "usp-item",
      `<span class="usp-icon" data-icon="${usp.icon}"></span>
       <div>
         <h3>${usp.title}</h3>
         <p>${usp.text}</p>
       </div>`
    );
    uspsGrid.appendChild(item);
  });

  // -------------------------------------------------------------------
  // Services / Leistungen
  // -------------------------------------------------------------------
  const servicesGrid = $("services-grid");
  (cfg.services || []).forEach((service) => {
    const card = el(
      "article",
      "service-card",
      `<div class="service-icon" data-icon="${service.icon}"></div>
       <h3>${service.title}</h3>
       <p>${service.text}</p>`
    );
    servicesGrid.appendChild(card);
  });

  // -------------------------------------------------------------------
  // Über uns
  // -------------------------------------------------------------------
  $("about-title").textContent = cfg.about.title;
  $("about-text").textContent = cfg.about.text;
  const aboutStats = $("about-stats");
  (cfg.about.stats || []).forEach((stat) => {
    const wrap = el("div", null, `<dt>${stat.value}</dt><dd>${stat.label}</dd>`);
    aboutStats.appendChild(wrap);
  });

  // -------------------------------------------------------------------
  // Team (optional)
  // -------------------------------------------------------------------
  if (cfg.team && cfg.team.length) {
    $("team").hidden = false;
    $("nav-team-item").hidden = false;
    const teamGrid = $("team-grid");
    cfg.team.forEach((member) => {
      const card = el(
        "div",
        "team-card",
        `<div class="team-avatar">${member.initials}</div>
         <h3>${member.name}</h3>
         <p>${member.role}</p>`
      );
      teamGrid.appendChild(card);
    });
  }

  // -------------------------------------------------------------------
  // Bewertungen (optional)
  // -------------------------------------------------------------------
  if (cfg.testimonials && cfg.testimonials.length) {
    $("bewertungen").hidden = false;
    $("nav-reviews-item").hidden = false;
    const grid = $("testimonial-grid");
    cfg.testimonials.forEach((t) => {
      const stars = Array.from({ length: t.rating || 5 })
        .map(() => `<span class="icon" data-icon="star"></span>`)
        .join("");
      const card = el(
        "figure",
        "testimonial-card",
        `<div class="testimonial-stars">${stars}</div>
         <blockquote>„${t.text}“</blockquote>
         <figcaption class="testimonial-author">${t.author}</figcaption>`
      );
      grid.appendChild(card);
    });
  }

  // -------------------------------------------------------------------
  // Kontakt: Adresse, Telefon, E-Mail
  // -------------------------------------------------------------------
  $("contact-address-line1").textContent = cfg.address.street;
  $("contact-address-line2").textContent = `${cfg.address.zip} ${cfg.address.city}`;

  const contactPhone = $("contact-phone");
  contactPhone.textContent = cfg.contact.phoneDisplay;
  contactPhone.href = `tel:${cfg.contact.phone.replace(/\s+/g, "")}`;

  const contactEmailItem = $("contact-email-item");
  const contactEmail = $("contact-email");
  if (cfg.contact.email) {
    contactEmail.textContent = cfg.contact.email;
    contactEmail.href = `mailto:${cfg.contact.email}`;
  } else if (contactEmailItem) {
    contactEmailItem.hidden = true;
  }

  // Social links (Kontakt- und Footer-Bereich)
  function buildSocialLinks(container) {
    if (!cfg.social) return;
    Object.entries(cfg.social).forEach(([key, url]) => {
      if (!url) return;
      const iconName = key === "instagram" ? "instagram" : key === "facebook" ? "facebook" : null;
      if (!iconName) return;
      const a = el("a", null, `<span class="icon" data-icon="${iconName}"></span>`);
      a.href = url;
      a.target = "_blank";
      a.rel = "noopener noreferrer";
      a.setAttribute("aria-label", `${cfg.shopName} auf ${key}`);
      container.appendChild(a);
    });
  }
  buildSocialLinks($("social-links"));
  buildSocialLinks($("footer-social-links"));

  // Footer Kontakt-Liste
  const footerContact = $("footer-contact");
  footerContact.appendChild(el("li", null, `<span class="icon" data-icon="mapPin"></span><span>${cfg.address.street}, ${cfg.address.zip} ${cfg.address.city}</span>`));
  footerContact.appendChild(el("li", null, `<span class="icon" data-icon="phone"></span><a href="tel:${cfg.contact.phone.replace(/\s+/g, "")}">${cfg.contact.phoneDisplay}</a>`));
  if (cfg.contact.email) {
    footerContact.appendChild(el("li", null, `<span class="icon" data-icon="mail"></span><a href="mailto:${cfg.contact.email}">${cfg.contact.email}</a>`));
  }

  // Impressum/Datenschutz
  if (cfg.legal) {
    $("footer-impressum").href = cfg.legal.impressumHref || "#";
    $("footer-datenschutz").href = cfg.legal.datenschutzHref || "#";
  }

  // -------------------------------------------------------------------
  // Öffnungszeiten: Tabelle + Live-Status
  // -------------------------------------------------------------------
  const hoursTableBody = document.querySelector("#hours-table tbody");
  const now = new Date();
  const todayIndex = (now.getDay() + 6) % 7; // JS: 0=So -> um zu 0=Mo verschieben

  function formatSlots(day) {
    if (day.closed || !day.slots || !day.slots.length) return "geschlossen";
    return day.slots.map((slot) => `${slot[0]}–${slot[1]} Uhr`).join(", ");
  }

  function isOpenNow(day, date) {
    if (day.closed || !day.slots || !day.slots.length) return false;
    const minutesNow = date.getHours() * 60 + date.getMinutes();
    return day.slots.some(([start, end]) => {
      const [sh, sm] = start.split(":").map(Number);
      const [eh, em] = end.split(":").map(Number);
      const startMin = sh * 60 + sm;
      const endMin = eh * 60 + em;
      return minutesNow >= startMin && minutesNow < endMin;
    });
  }

  (cfg.openingHours || []).forEach((day) => {
    const row = document.createElement("tr");
    if (day.day === todayIndex) row.classList.add("is-today");
    row.innerHTML = `<td>${day.label}</td><td>${formatSlots(day)}</td>`;
    hoursTableBody.appendChild(row);
  });

  const todayEntry = (cfg.openingHours || []).find((d) => d.day === todayIndex);
  const statusDot = $("status-dot");
  const statusText = $("status-text");
  if (todayEntry) {
    const open = isOpenNow(todayEntry, now);
    statusDot.classList.add(open ? "is-open" : "is-closed");
    statusText.textContent = open ? "Jetzt geöffnet" : "Aktuell geschlossen";
  } else {
    statusDot.classList.add("is-closed");
    statusText.textContent = "Öffnungszeiten siehe unten";
  }

  // -------------------------------------------------------------------
  // Karte (OpenStreetMap-Embed, kein API-Key nötig)
  // -------------------------------------------------------------------
  const map = $("contact-map");
  if (map && cfg.address.lat && cfg.address.lng) {
    const { lat, lng } = cfg.address;
    const delta = 0.01;
    const bbox = `${lng - delta}%2C${lat - delta}%2C${lng + delta}%2C${lat + delta}`;
    map.src = `https://www.openstreetmap.org/export/embed.html?bbox=${bbox}&layer=mapnik&marker=${lat}%2C${lng}`;
  }

  // -------------------------------------------------------------------
  // Kontaktformular (öffnet das Mail-Programm mit vorbefüllter Nachricht –
  // keine eigene Backend-Anbindung nötig)
  // -------------------------------------------------------------------
  const form = $("contact-form");
  const formHint = $("form-hint");
  if (form && !cfg.contact.email) {
    // Keine E-Mail-Adresse hinterlegt -> Formular kann nicht per mailto:
    // zugestellt werden. Stattdessen ausblenden und auf Anruf verweisen.
    form.hidden = true;
    const callHint = $("call-hint");
    if (callHint) {
      callHint.hidden = false;
      $("call-hint-link").href = `tel:${cfg.contact.phone.replace(/\s+/g, "")}`;
    }
  } else if (form) {
    form.addEventListener("submit", (event) => {
      event.preventDefault();
      const name = $("cf-name").value.trim();
      const email = $("cf-email").value.trim();
      const message = $("cf-message").value.trim();

      if (!name || !email || !message) {
        formHint.dataset.state = "error";
        formHint.textContent = "Bitte füllen Sie alle Felder aus.";
        return;
      }

      const subject = encodeURIComponent(`Anfrage von ${name} über die Website`);
      const body = encodeURIComponent(`${message}\n\n— ${name} (${email})`);
      window.location.href = `mailto:${cfg.contact.email}?subject=${subject}&body=${body}`;

      formHint.dataset.state = "success";
      formHint.textContent = "Ihr E-Mail-Programm öffnet sich mit der ausgefüllten Nachricht.";
    });
  }

  // -------------------------------------------------------------------
  // Zum Schluss: alle statischen [data-icon]-Platzhalter im HTML befüllen
  // -------------------------------------------------------------------
  hydrateIcons();
})();
