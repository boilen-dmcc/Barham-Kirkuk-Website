/* ==========================================================================
   BARHAM KIRKUK — SITE BEHAVIOR
   Nav scroll/mobile menu, EN/AR language switching + RTL, dynamic content
   rendering from data/site-data.js, reveal animations, counters, filters,
   contact form (mailto fallback).
   ========================================================================== */
(function(){
  "use strict";

  var LANG_KEY = "bk-lang";
  var reduceMotion = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  /* ---------------- Icons (inline SVG, stroke-based, brand-neutral) ---------------- */
  var ICONS = {
    flame: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M12 2c1 3-3 4-3 8a3 3 0 0 0 6 0c0-1-.5-2-1-2 1 2 2 3 2 5a4 4 0 0 1-8 0c0-4 4-6 4-11Z"/></svg>',
    gears: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><circle cx="9" cy="9" r="3"/><circle cx="17" cy="16" r="2.4"/><path d="M9 2v2M9 14v2M2 9h2M14 9h2M4.5 4.5l1.4 1.4M13 4.5l-1.4 1.4M4.5 13.5l1.4-1.4M17 12.3v1.4M17 19.3v1.4M13.5 16l1 .8M20.5 16l-1 .8"/></svg>',
    processing: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><rect x="4" y="9" width="4" height="10"/><rect x="10" y="4" width="4" height="15"/><rect x="16" y="12" width="4" height="7"/></svg>',
    industrial: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M3 21V10l5 3V10l5 3V10l5 3v8H3Z"/><path d="M3 21h18"/></svg>',
    pipeline: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M3 8h9a3 3 0 0 1 3 3v0a3 3 0 0 0 3 3h3"/><circle cx="3" cy="8" r="1.4"/><circle cx="21" cy="14" r="1.4"/></svg>',
    wrench: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M14.7 6.3a4 4 0 0 0-5.4 5.4L3 18l3 3 6.3-6.3a4 4 0 0 0 5.4-5.4l-2.7 2.7-2-2 2.7-2.7Z"/></svg>',
    shield: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M12 2 4 5v6c0 5 3.5 8.5 8 11 4.5-2.5 8-6 8-11V5l-8-3Z"/></svg>',
    engineering: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 3"/></svg>',
    team: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><circle cx="9" cy="8" r="3"/><path d="M2 20c0-3.3 3.1-6 7-6s7 2.7 7 6"/><circle cx="18" cy="9" r="2.3"/><path d="M16.5 13.3c2.5.4 4.5 2.3 4.5 4.7"/></svg>',
    quality: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M12 2 3 7v6c0 5 4 8.5 9 9 5-.5 9-4 9-9V7l-9-5Z"/><path d="m8.5 12 2.3 2.3L16 9.5"/></svg>',
    growth: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M3 17 9 11l4 4 8-8"/><path d="M15 7h6v6"/></svg>',
    leaf: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M20 4C10 4 4 10 4 18c8 0 14-6 16-14Z"/><path d="M4 20 12 12"/></svg>',
    pin: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M12 21s7-6.6 7-12a7 7 0 0 0-14 0c0 5.4 7 12 7 12Z"/><circle cx="12" cy="9" r="2.3"/></svg>',
    mail: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><rect x="3" y="5" width="18" height="14" rx="1.5"/><path d="m3.5 6 8.5 7 8.5-7"/></svg>',
    phone: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M5 4h4l1.5 4.5L8 10.5a12 12 0 0 0 5.5 5.5l1.9-2.5L20 15v4a1 1 0 0 1-1 1C10.7 20 4 13.3 4 5a1 1 0 0 1 1-1Z"/></svg>',
    arrow: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14M13 6l6 6-6 6"/></svg>'
  };
  var SERVICE_ICON_KEYS = ["flame","gears","processing","industrial","pipeline","wrench"];
  var INDUSTRY_ICON_KEYS = ["flame","gears","processing","industrial","engineering","wrench","shield"];
  var WHY_ICON_KEYS = ["shield","engineering","wrench","team","quality","growth"];
  var HSE_ICON_KEYS = ["shield","leaf","quality","team"];
  var SOCIAL_ICONS = {
    linkedin: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5ZM3 9h4v12H3zM9 9h3.8v1.7h.05c.53-.95 1.83-1.95 3.77-1.95 4.03 0 4.78 2.5 4.78 5.75V21h-4v-5.8c0-1.38-.03-3.16-1.98-3.16-1.98 0-2.28 1.5-2.28 3.06V21H9z"/></svg>',
    facebook: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M13.5 21v-8h2.7l.4-3.1h-3.1V8c0-.9.25-1.5 1.6-1.5H16.7V3.7C16.2 3.6 15 3.5 13.7 3.5c-2.8 0-4.7 1.7-4.7 4.8v2.6H6.3V14H9v8Z"/></svg>',
    youtube: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M21.6 7.2a2.7 2.7 0 0 0-1.9-1.9C18 5 12 5 12 5s-6 0-7.7.3A2.7 2.7 0 0 0 2.4 7.2 28 28 0 0 0 2 12a28 28 0 0 0 .4 4.8 2.7 2.7 0 0 0 1.9 1.9C6 19 12 19 12 19s6 0 7.7-.3a2.7 2.7 0 0 0 1.9-1.9A28 28 0 0 0 22 12a28 28 0 0 0-.4-4.8ZM10 15V9l5.2 3Z"/></svg>'
  };

  function getLang(){
    var stored = null;
    try{ stored = localStorage.getItem(LANG_KEY); }catch(e){}
    return stored || "en";
  }
  function setLangStorage(lang){
    try{ localStorage.setItem(LANG_KEY, lang); }catch(e){}
  }
  function getByPath(obj, path){
    return path.split(".").reduce(function(acc,key){ return (acc && acc[key] !== undefined) ? acc[key] : null; }, obj);
  }

  function applyTranslations(lang){
    var data = window.SITE_DATA[lang];
    if(!data) return;
    document.documentElement.setAttribute("lang", lang);
    document.documentElement.setAttribute("dir", data.dir);
    document.body.classList.toggle("lang-ar", lang === "ar");

    document.querySelectorAll("[data-i18n]").forEach(function(el){
      var val = getByPath(data, el.getAttribute("data-i18n"));
      if(val !== null && typeof val === "string") el.textContent = val;
    });
    document.querySelectorAll("[data-i18n-html]").forEach(function(el){
      var val = getByPath(data, el.getAttribute("data-i18n-html"));
      if(val !== null && typeof val === "string") el.innerHTML = val;
    });
    document.querySelectorAll("[data-i18n-placeholder]").forEach(function(el){
      var val = getByPath(data, el.getAttribute("data-i18n-placeholder"));
      if(val !== null) el.setAttribute("placeholder", val);
    });

    document.querySelectorAll(".lang-switch button").forEach(function(btn){
      btn.classList.toggle("active", btn.getAttribute("data-lang") === lang);
      btn.setAttribute("aria-pressed", btn.getAttribute("data-lang") === lang ? "true" : "false");
    });

    renderDynamicContent(lang, data);
  }

  /* ---------------- Dynamic content renderers ---------------- */
  function renderDynamicContent(lang, data){
    renderStats(data);
    renderServices(data);
    renderProjects(data);
    renderIndustries(data);
    renderWhy(data);
    renderHse(data);
    renderSustainability(data);
    renderFooterServices(data);
    renderContactInfo(data);
  }

  function renderStats(data){
    var wrap = document.getElementById("stats-grid");
    if(!wrap || !data.stats) return;
    wrap.innerHTML = data.stats.map(function(s){
      return '<div class="stat-item reveal">' +
        '<strong data-count-to="'+ s.value +'" data-suffix="'+ s.suffix +'">0'+ s.suffix +'</strong>' +
        '<span>'+ s.label +'</span></div>';
    }).join("");
    initCounters(wrap);
    observeReveal(wrap.querySelectorAll(".reveal"));
  }

  function renderServices(data){
    var wrap = document.getElementById("services-grid");
    if(!wrap || !data.services) return;
    wrap.innerHTML = data.services.items.map(function(s, i){
      var sizeClass = s.size === "large" ? "is-large" : (s.size === "small" ? "is-small" : "");
      var darkClass = s.dark ? "is-dark" : "";
      var icon = ICONS[SERVICE_ICON_KEYS[i % SERVICE_ICON_KEYS.length]];
      return '<div class="service-card '+sizeClass+' '+darkClass+' reveal">' +
        '<span class="num">0'+ (i+1) +'</span>' +
        '<div class="icon">'+ icon +'</div>' +
        '<h3>'+ s.title +'</h3>' +
        '<div class="bar"></div>' +
        '<p>'+ s.desc +'</p>' +
        '<a class="link-arrow" href="pages/services.html">'+ data.services.exploreLabel +' '+ ICONS.arrow +'</a>' +
        '</div>';
    }).join("");
    observeReveal(wrap.querySelectorAll(".reveal"));
  }

  function renderProjects(data){
    var wrap = document.getElementById("projects-grid");
    if(!wrap || !data.projects) return;
    var activeFilter = wrap.getAttribute("data-active-filter") || data.projects.filters[0];
    var items = data.projects.items;
    var isAllPage = wrap.getAttribute("data-full-list") === "true";
    var filters = data.projects.filters;
    var showItems = items.filter(function(p){
      return activeFilter === filters[0] || p.type === activeFilter;
    });
    if(!isAllPage) showItems = showItems.slice(0,6);

    wrap.innerHTML = showItems.map(function(p, i){
      return '<article class="project-card reveal">' +
        '<div class="thumb"><div class="industrial-pattern'+ (i % 2 ? " alt" : "") +'"></div></div>' +
        '<div class="overlay"></div>' +
        '<div class="content">' +
          '<span class="type">'+ p.type +'</span>' +
          '<h3>'+ p.title +'</h3>' +
          '<span class="loc">'+ p.location +'</span>' +
          '<span class="view"><a class="link-arrow" href="#">'+ data.projects.viewLabel +' '+ ICONS.arrow +'</a></span>' +
        '</div></article>';
    }).join("");
    observeReveal(wrap.querySelectorAll(".reveal"));

    var filterBar = document.getElementById("projects-filter");
    if(filterBar){
      filterBar.innerHTML = filters.map(function(f){
        return '<button data-filter="'+ f +'" class="'+ (f===activeFilter?"active":"") +'">'+ f +'</button>';
      }).join("");
      filterBar.querySelectorAll("button").forEach(function(btn){
        btn.addEventListener("click", function(){
          wrap.setAttribute("data-active-filter", btn.getAttribute("data-filter"));
          renderProjects(window.SITE_DATA[getLang()]);
        });
      });
    }
  }

  function renderIndustries(data){
    var wrap = document.getElementById("industries-grid");
    if(!wrap || !data.industries) return;
    wrap.innerHTML = data.industries.items.map(function(name, i){
      var icon = ICONS[INDUSTRY_ICON_KEYS[i % INDUSTRY_ICON_KEYS.length]];
      return '<div class="industry-item reveal"><div class="icon">'+ icon +'</div><h3>'+ name +'</h3></div>';
    }).join("");
    observeReveal(wrap.querySelectorAll(".reveal"));
  }

  function renderWhy(data){
    var wrap = document.getElementById("why-grid");
    if(!wrap || !data.why) return;
    wrap.innerHTML = data.why.items.map(function(item, i){
      var icon = ICONS[WHY_ICON_KEYS[i % WHY_ICON_KEYS.length]];
      return '<div class="why-item reveal"><div class="icon">'+ icon +'</div><h3>'+ item.title +'</h3><p>'+ item.desc +'</p></div>';
    }).join("");
    observeReveal(wrap.querySelectorAll(".reveal"));
  }

  function renderHse(data){
    var wrap = document.getElementById("hse-list");
    if(!wrap || !data.hse) return;
    wrap.innerHTML = data.hse.items.map(function(item, i){
      return '<div class="item"><h4>'+ item.title +'</h4><p>'+ item.desc +'</p></div>';
    }).join("");
  }

  function renderSustainability(data){
    var wrap = document.getElementById("sustainability-list");
    if(!wrap || !data.sustainability) return;
    wrap.innerHTML = data.sustainability.items.map(function(name){
      return '<li class="why-item reveal" style="border-top:2px solid var(--red);padding:1.2rem 0;">'+ name +'</li>';
    }).join("");
    observeReveal(wrap.querySelectorAll(".reveal"));
  }

  function renderFooterServices(data){
    var wrap = document.getElementById("footer-services-list");
    if(!wrap || !data.footer) return;
    wrap.innerHTML = data.footer.servicesList.map(function(s){
      return '<li><a href="'+ (isInPagesDir() ? "" : "pages/") +'services.html">'+ s +'</a></li>';
    }).join("");
  }

  function renderContactInfo(data){
    var wrap = document.getElementById("contact-info-list");
    if(!wrap || !window.COMPANY_INFO) return;
    var c = window.COMPANY_INFO;
    wrap.innerHTML =
      '<div class="item"><div class="icon">'+ ICONS.pin +'</div><div><h4>'+ data.contact.addressLabel +'</h4><p>'+ c.location[data.lang] +'</p></div></div>' +
      '<div class="item"><div class="icon">'+ ICONS.mail +'</div><div><h4>'+ data.contact.emailLabel +'</h4><p><a href="mailto:'+ c.email +'">'+ c.email +'</a></p></div></div>' +
      '<div class="item"><div class="icon">'+ ICONS.phone +'</div><div><h4>'+ data.contact.phoneLabel +'</h4><p><a href="tel:'+ c.phone.replace(/\s+/g,"") +'">'+ c.phone +'</a></p></div></div>';
  }

  function isInPagesDir(){
    return /\/pages\//.test(window.location.pathname);
  }

  /* ---------------- Counters ---------------- */
  function initCounters(scope){
    var els = scope.querySelectorAll("[data-count-to]");
    els.forEach(function(el){
      el.textContent = "0" + el.getAttribute("data-suffix");
    });
  }
  function runCounter(el){
    var target = parseInt(el.getAttribute("data-count-to"), 10);
    var suffix = el.getAttribute("data-suffix") || "";
    if(reduceMotion || isNaN(target)){ el.textContent = target + suffix; return; }
    var start = 0, duration = 1400, startTime = null;
    function step(ts){
      if(!startTime) startTime = ts;
      var progress = Math.min((ts - startTime) / duration, 1);
      var eased = 1 - Math.pow(1 - progress, 3);
      var val = Math.round(start + (target - start) * eased);
      el.textContent = val + suffix;
      if(progress < 1) requestAnimationFrame(step);
    }
    requestAnimationFrame(step);
  }

  /* ---------------- Reveal on scroll ---------------- */
  var revealObserver = ("IntersectionObserver" in window) ? new IntersectionObserver(function(entries){
    entries.forEach(function(entry){
      if(entry.isIntersecting){
        entry.target.classList.add("is-visible");
        if(entry.target.hasAttribute("data-count-to")) runCounter(entry.target);
        revealObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.2 }) : null;

  function observeReveal(list){
    if(!list) return;
    list.forEach(function(el){
      if(reduceMotion){ el.classList.add("is-visible"); if(el.hasAttribute("data-count-to")) runCounter(el); return; }
      if(revealObserver) revealObserver.observe(el);
      else el.classList.add("is-visible");
    });
  }

  /* ---------------- Nav ---------------- */
  function initNav(){
    var nav = document.querySelector(".nav");
    if(!nav) return;
    function onScroll(){
      nav.classList.toggle("is-scrolled", window.scrollY > 40);
    }
    onScroll();
    window.addEventListener("scroll", onScroll, { passive:true });

    var toggle = document.querySelector(".nav-toggle");
    var links = document.querySelector(".nav-links");
    if(toggle && links){
      toggle.addEventListener("click", function(){
        var open = toggle.classList.toggle("is-open");
        links.classList.toggle("is-open", open);
        toggle.setAttribute("aria-expanded", open ? "true" : "false");
      });
      links.querySelectorAll("a").forEach(function(a){
        a.addEventListener("click", function(){
          toggle.classList.remove("is-open");
          links.classList.remove("is-open");
          toggle.setAttribute("aria-expanded","false");
        });
      });
    }
  }

  /* ---------------- Language switch buttons ---------------- */
  function initLangSwitch(){
    document.querySelectorAll(".lang-switch button").forEach(function(btn){
      btn.addEventListener("click", function(){
        var lang = btn.getAttribute("data-lang");
        setLangStorage(lang);
        applyTranslations(lang);
      });
    });
  }

  /* ---------------- Contact form (static-site friendly) ---------------- */
  function initContactForm(){
    var form = document.getElementById("contact-form");
    if(!form) return;
    form.addEventListener("submit", function(e){
      e.preventDefault();
      var data = new FormData(form);
      var lang = getLang();
      var subject = encodeURIComponent("Website Inquiry: " + (data.get("subject") || ""));
      var bodyLines = [
        "Name: " + data.get("name"),
        "Company: " + data.get("company"),
        "Email: " + data.get("email"),
        "Phone: " + data.get("phone"),
        "",
        data.get("message")
      ];
      var body = encodeURIComponent(bodyLines.join("\n"));
      // EDIT: replace mailto with a hosted form endpoint (e.g. Formspree) when available.
      window.location.href = "mailto:" + window.COMPANY_INFO.email + "?subject=" + subject + "&body=" + body;
    });
  }

  /* ---------------- Footer year & misc ---------------- */
  function initMisc(){
    document.querySelectorAll("[data-year]").forEach(function(el){ el.textContent = new Date().getFullYear(); });
    document.querySelectorAll("[data-company-email]").forEach(function(el){ el.textContent = window.COMPANY_INFO.email; el.setAttribute("href","mailto:"+window.COMPANY_INFO.email); });
    document.querySelectorAll("[data-company-phone]").forEach(function(el){ el.textContent = window.COMPANY_INFO.phone; el.setAttribute("href","tel:"+window.COMPANY_INFO.phone.replace(/\s+/g,"")); });
    document.querySelectorAll("[data-social-linkedin]").forEach(function(el){ el.setAttribute("href", window.COMPANY_INFO.social.linkedin); el.innerHTML = SOCIAL_ICONS.linkedin; });
    document.querySelectorAll("[data-social-facebook]").forEach(function(el){ el.setAttribute("href", window.COMPANY_INFO.social.facebook); el.innerHTML = SOCIAL_ICONS.facebook; });
    document.querySelectorAll("[data-social-youtube]").forEach(function(el){ el.setAttribute("href", window.COMPANY_INFO.social.youtube); el.innerHTML = SOCIAL_ICONS.youtube; });
  }

  document.addEventListener("DOMContentLoaded", function(){
    initNav();
    initLangSwitch();
    initContactForm();
    initMisc();
    applyTranslations(getLang());
    observeReveal(document.querySelectorAll(".reveal:not(#services-grid .reveal):not(#projects-grid .reveal):not(#industries-grid .reveal):not(#why-grid .reveal):not(#stats-grid .reveal)"));
  });
})();
