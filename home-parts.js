/* PCS marketing site — structural parts: Photo, Header (mega-menu), Hero,
   Marquee, TrustStrip, Footer, CookieBanner.
   Composes design-system primitives from window.PCSDesignSystem_269f6d
   and icons from window.PCSIcons. Extends window.PCSHome. */
(function () {
  const W = window.PCSHome = window.PCSHome || {};
  const CALENDLY = "https://calendly.com/propertyclinicsolutions/free-consultation";
  W.CALENDLY = CALENDLY;
  /* Ticketing link for the featured event (Empowerment Through Property). */
  const EVENTBRITE = "https://www.eventbrite.com/e/empowerment-through-property-landlord-expo-wealth-meets-health-tickets-1990065361066?lid=zj5izzdshlrl";
  W.EVENTBRITE = EVENTBRITE;
  /* Web3Forms access key for the contact form (form-to-email relay). Get a free
     key at https://web3forms.com (enter your inbox email) and paste it here. */
  const WEB3FORMS_KEY = "d379e4a7-a1d0-46b7-b087-16db369a8d3f";
  W.WEB3FORMS_KEY = WEB3FORMS_KEY;
  /* Brevo subscription-form endpoint for the newsletter signup. Created in Brevo
     (Contacts > Forms) with double opt-in ON, so Brevo sends the confirmation
     email and manages unsubscribes. The site posts the email here directly. */
  const BREVO_NEWSLETTER_URL = "https://c781fac4.sibforms.com/serve/MUIFACFLwA9tG6K2st4h_ItOJxsNbHLveaCEKOFPZNvIazvaLT2FeVi8B7Iy5NcEHFz8Htt7zRhwTuksYaXc7BU-aFHhxojW-QoczOiDlJfXLAL9imdp5rhsLZDa3AGfG1Wqc7L21-MSee3jmUphcbszI0Qvceo-AbZY049sFRXZSKSRsKpvIPGJxlBdh0XShgUBxTjfoqRFDWrxgw==";
  W.BREVO_NEWSLETTER_URL = BREVO_NEWSLETTER_URL;

  /* Google Analytics 4 — loaded only after the visitor accepts the "Statistics"
     cookie (GDPR). Cookieless Cloudflare analytics loads separately via the
     beacon in each page's <head>. */
  const GA4_ID = "G-5LQ774ZZNW";
  W.GA4_ID = GA4_ID;
  let ga4Loaded = false;
  function loadGA4() {
    if (ga4Loaded || !GA4_ID || GA4_ID.indexOf("G-") !== 0) return;
    ga4Loaded = true;
    const s = document.createElement("script");
    s.async = true;
    s.src = "https://www.googletagmanager.com/gtag/js?id=" + GA4_ID;
    document.head.appendChild(s);
    window.dataLayer = window.dataLayer || [];
    window.gtag = function () {
      window.dataLayer.push(arguments);
    };
    window.gtag("js", new Date());
    window.gtag("config", GA4_ID, {
      anonymize_ip: true
    });
  }
  W.loadGA4 = loadGA4;
  try {
    const saved = JSON.parse(localStorage.getItem("pcs-cookie-consent-v1") || "null");
    if (saved && saved.statistics) loadGA4();
  } catch (e) {}
  const RISK = "Your home may be repossessed if you do not keep up repayments on your mortgage.";
  W.RISK = RISK;
  const reduceMotion = () => typeof window !== "undefined" && window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  /* Counts a stat up from zero when it scrolls into view. Parses a leading
     number out of values like "500+", "£48m", "14 days" and keeps the rest. */
  function CountUp({
    value,
    duration = 1400
  }) {
    const ref = React.useRef(null);
    const [disp, setDisp] = React.useState(value);
    const [pop, setPop] = React.useState(false);
    React.useEffect(() => {
      const m = String(value).match(/^(\D*)([\d.,]+)(.*)$/);
      if (!m) {
        setDisp(value);
        return;
      }
      const pre = m[1],
        rawNum = m[2],
        suf = m[3];
      const target = parseFloat(rawNum.replace(/,/g, ""));
      if (isNaN(target)) {
        setDisp(value);
        return;
      }
      if (reduceMotion()) {
        setDisp(value);
        return;
      }
      const decimals = (rawNum.split(".")[1] || "").length;
      const fmt = n => pre + n.toLocaleString("en-GB", {
        minimumFractionDigits: decimals,
        maximumFractionDigits: decimals
      }) + suf;
      const el = ref.current;
      let raf,
        running = false,
        popTimer;
      const run = () => {
        running = true;
        const start = performance.now();
        const tick = now => {
          const t = Math.min(1, (now - start) / duration);
          const e = 1 - Math.pow(1 - t, 3);
          if (t < 1) {
            setDisp(fmt(target * e));
            raf = requestAnimationFrame(tick);
          } else {
            setDisp(value);
            running = false;
            setPop(true);
            popTimer = setTimeout(() => setPop(false), 380);
          }
        };
        raf = requestAnimationFrame(tick);
      };
      setDisp(fmt(0));
      if (!("IntersectionObserver" in window) || !el) {
        run();
        return;
      }
      // Re-fires every time the stat scrolls back into view.
      const io = new IntersectionObserver(ents => {
        ents.forEach(en => {
          if (en.isIntersecting) {
            if (!running) run();
          } else {
            if (raf) cancelAnimationFrame(raf);
            running = false;
            setDisp(fmt(0));
          }
        });
      }, {
        threshold: 0.5
      });
      io.observe(el);
      return () => {
        if (raf) cancelAnimationFrame(raf);
        clearTimeout(popTimer);
        io.disconnect();
      };
    }, [value, duration]);
    return /*#__PURE__*/React.createElement("span", {
      ref: ref,
      className: pop ? "pcs-count-pop" : "",
      style: {
        display: "inline-block"
      }
    }, disp);
  }
  W.CountUp = CountUp;

  /* Thin Royal-Blue bar at the very top that tracks scroll progress. */
  function ScrollProgress() {
    const ref = React.useRef(null);
    React.useEffect(() => {
      const onScroll = () => {
        const d = document.documentElement;
        const max = d.scrollHeight - d.clientHeight;
        const p = max > 0 ? d.scrollTop / max : 0;
        if (ref.current) ref.current.style.transform = "scaleX(" + Math.min(1, Math.max(0, p)) + ")";
      };
      window.addEventListener("scroll", onScroll, {
        passive: true
      });
      window.addEventListener("resize", onScroll);
      onScroll();
      return () => {
        window.removeEventListener("scroll", onScroll);
        window.removeEventListener("resize", onScroll);
      };
    }, []);
    return /*#__PURE__*/React.createElement("div", {
      ref: ref,
      "aria-hidden": "true",
      style: {
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        height: 3,
        zIndex: 120,
        background: "var(--pcs-blue)",
        transformOrigin: "left",
        transform: "scaleX(0)"
      }
    });
  }
  W.ScrollProgress = ScrollProgress;

  /* Unsplash photo with a branded gradient + symbol fallback that always shows
     if the network image fails to load. */
  function Photo({
    id,
    alt = "",
    h,
    tone = "blue",
    radius = 24,
    eager = false,
    style,
    className = ""
  }) {
    const grad = tone === "emerald" ? "linear-gradient(150deg,#E3F4EC,#d3ecdf)" : tone === "ink" ? "linear-gradient(150deg,#13224a,#0C1A3A)" : "linear-gradient(150deg,#E7ECFA,#dbe3f9)";
    const src = window.__resources && window.__resources["photo_" + id] || `assets/photos/${id}.jpg`;
    return /*#__PURE__*/React.createElement("div", {
      className: className,
      style: {
        position: "relative",
        height: h,
        borderRadius: radius,
        background: grad,
        overflow: "hidden",
        ...style
      }
    }, /*#__PURE__*/React.createElement("img", {
      src: window.__resources && window.__resources.logoSymbol || "assets/logos/pcs-symbol.svg",
      alt: "",
      "aria-hidden": "true",
      style: {
        position: "absolute",
        right: -28,
        bottom: -28,
        width: 180,
        opacity: tone === "ink" ? 0.16 : 0.12
      }
    }), /*#__PURE__*/React.createElement("img", {
      src: src,
      alt: alt,
      loading: eager ? "eager" : "lazy",
      onError: e => {
        e.currentTarget.style.display = "none";
      },
      style: {
        position: "absolute",
        inset: 0,
        width: "100%",
        height: "100%",
        objectFit: "cover",
        display: "block"
      }
    }));
  }
  W.Photo = Photo;
  const MORTGAGE_LINKS = [{
    icon: "key",
    title: "First-Time Buyers",
    desc: "From Agreement in Principle to keys in hand.",
    href: "first-time-buyers"
  }, {
    icon: "house2",
    title: "Remortgage",
    desc: "Switch before you slip onto the standard variable rate.",
    href: "remortgage"
  }, {
    icon: "trendingUp",
    title: "Buy to Let",
    desc: "Standard BTL, HMOs, limited company and portfolios.",
    href: "buy-to-let"
  }, {
    icon: "user",
    title: "Self-Employed Mortgages",
    desc: "Lenders who assess real income properly.",
    href: "self-employed"
  }, {
    icon: "calculator",
    title: "Mortgage Calculator",
    desc: "See what you could borrow in plain numbers.",
    href: "calculator"
  }];
  const PROTECTION_LINKS = [{
    icon: "heart",
    title: "Life Insurance",
    desc: "Cover that pays out so your home stays yours.",
    href: "life-insurance"
  }, {
    icon: "shield",
    title: "Income Protection",
    desc: "Replace part of your income if you cannot work.",
    href: "income-protection"
  }, {
    icon: "award",
    title: "Critical Illness",
    desc: "A lump sum if you are diagnosed with a serious illness.",
    href: "critical-illness"
  }, {
    icon: "building",
    title: "Buildings and Contents",
    desc: "Protect the building and everything inside it.",
    href: "buildings-contents"
  }];
  function MegaPanel({
    links,
    footnote,
    overview,
    onNavigate
  }) {
    const {
      Icon
    } = window.PCSIcons;
    return /*#__PURE__*/React.createElement("div", {
      style: {
        display: "grid",
        gridTemplateColumns: "repeat(2, minmax(0,1fr))",
        gap: 4
      }
    }, overview && /*#__PURE__*/React.createElement("a", {
      href: overview.href,
      onClick: onNavigate,
      className: "pcs-mega-link pcs-link-row",
      style: {
        gridColumn: "1 / -1",
        display: "flex",
        alignItems: "center",
        gap: 8,
        padding: "10px 16px",
        borderRadius: 12,
        textDecoration: "none",
        font: "700 14px var(--font-sans)",
        color: "var(--pcs-blue)"
      }
    }, overview.label, " ", /*#__PURE__*/React.createElement(Icon, {
      name: "arrowRight",
      size: 15
    })), links.map(l => /*#__PURE__*/React.createElement("a", {
      key: l.title,
      href: l.href,
      onClick: onNavigate,
      className: "pcs-mega-link",
      style: {
        display: "flex",
        gap: 14,
        padding: "14px 16px",
        borderRadius: 12,
        textDecoration: "none"
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        flex: "none",
        width: 40,
        height: 40,
        borderRadius: 10,
        background: "var(--pcs-blue-tint)",
        color: "var(--pcs-blue)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: l.icon,
      size: 20
    })), /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement("span", {
      style: {
        display: "block",
        font: "700 15px var(--font-sans)",
        color: "var(--pcs-ink)"
      }
    }, l.title), /*#__PURE__*/React.createElement("span", {
      style: {
        display: "block",
        font: "400 13.5px/1.4 var(--font-sans)",
        color: "var(--text-muted)",
        marginTop: 3
      }
    }, l.desc)))), footnote && /*#__PURE__*/React.createElement("div", {
      style: {
        gridColumn: "1 / -1",
        marginTop: 6,
        padding: "14px 16px",
        borderRadius: 12,
        background: "var(--pcs-emerald-tint)",
        display: "flex",
        alignItems: "center",
        gap: 12
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        flex: "none",
        width: 34,
        height: 34,
        borderRadius: 9,
        background: "#fff",
        color: "var(--pcs-emerald)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "check",
      size: 18
    })), /*#__PURE__*/React.createElement("span", {
      style: {
        font: "600 14px var(--font-sans)",
        color: "var(--pcs-ink)"
      }
    }, footnote)));
  }

  /* Site-wide event announcement bar. Sits above the sticky header, scrolls
     away on scroll, and can be dismissed (remembered per browser). */
  function AnnouncementBar() {
    const {
      Icon
    } = window.PCSIcons;
    const KEY = "pcs-announce-event-2026-08";
    const [show, setShow] = React.useState(true);
    React.useEffect(() => {
      try {
        if (localStorage.getItem(KEY)) setShow(false);
      } catch (e) {}
    }, []);
    const dismiss = e => {
      if (e) {
        e.preventDefault();
        e.stopPropagation();
      }
      try {
        localStorage.setItem(KEY, "1");
      } catch (e2) {}
      setShow(false);
    };
    if (!show) return null;
    const Seg = () => /*#__PURE__*/React.createElement("span", {
      style: {
        display: "inline-flex",
        alignItems: "center",
        gap: 12,
        padding: "0 14px",
        whiteSpace: "nowrap",
        font: "600 14px var(--font-sans)",
        color: "rgba(255,255,255,.92)"
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        display: "inline-flex",
        alignItems: "center",
        gap: 6,
        font: "700 11px var(--font-sans)",
        letterSpacing: ".14em",
        textTransform: "uppercase",
        color: "var(--pcs-gold)"
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "calendar",
      size: 13
    }), " Upcoming event"), /*#__PURE__*/React.createElement("span", null, "Empowerment Through Property: Wealth meets Health · Sat 1 August 2026, London"), /*#__PURE__*/React.createElement("span", {
      style: {
        display: "inline-flex",
        alignItems: "center",
        gap: 5,
        fontWeight: 700,
        color: "#fff"
      }
    }, "Reserve your place ", /*#__PURE__*/React.createElement(Icon, {
      name: "arrowRight",
      size: 13
    })), /*#__PURE__*/React.createElement("span", {
      style: {
        color: "var(--pcs-gold)",
        padding: "0 4px"
      },
      "aria-hidden": "true"
    }, "·"));
    return /*#__PURE__*/React.createElement("div", {
      style: {
        background: "var(--pcs-ink)",
        color: "#fff",
        position: "relative",
        overflow: "hidden"
      }
    }, /*#__PURE__*/React.createElement("a", {
      href: EVENTBRITE,
      target: "_blank",
      rel: "noopener",
      "aria-label": "Reserve your place at Empowerment Through Property, Saturday 1 August 2026, London",
      style: {
        display: "block",
        textDecoration: "none"
      }
    }, /*#__PURE__*/React.createElement("div", {
      className: "pcs-annmarquee",
      style: {
        display: "flex",
        width: "max-content",
        padding: "9px 0"
      }
    }, Array.from({
      length: 6
    }).map((_, i) => /*#__PURE__*/React.createElement(Seg, {
      key: i
    })))), /*#__PURE__*/React.createElement("button", {
      "aria-label": "Dismiss announcement",
      onClick: dismiss,
      style: {
        position: "absolute",
        right: 0,
        top: 0,
        bottom: 0,
        width: 42,
        background: "var(--pcs-ink)",
        border: "none",
        color: "rgba(255,255,255,.7)",
        cursor: "pointer",
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        zIndex: 2
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "x",
      size: 16
    })));
  }
  W.AnnouncementBar = AnnouncementBar;
  function Header() {
    const {
      Button
    } = window.PCSDesignSystem_269f6d;
    const {
      Icon
    } = window.PCSIcons;
    const [open, setOpen] = React.useState(null); // desktop mega: 'mortgages' | 'protection'
    const [drawer, setDrawer] = React.useState(false);
    const [scrolled, setScrolled] = React.useState(false);
    const closeTimer = React.useRef(null);
    React.useEffect(() => {
      const onScroll = () => setScrolled(window.scrollY > 80);
      window.addEventListener("scroll", onScroll, {
        passive: true
      });
      onScroll();
      return () => window.removeEventListener("scroll", onScroll);
    }, []);
    const enter = k => {
      clearTimeout(closeTimer.current);
      setOpen(k);
    };
    const leave = () => {
      closeTimer.current = setTimeout(() => setOpen(null), 140);
    };
    const closeAll = () => {
      setOpen(null);
      setDrawer(false);
    };
    const simpleLinks = [["Events", "events"], ["About", "about"], ["Contact", "contact"]];
    return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(ScrollProgress, null), /*#__PURE__*/React.createElement(AnnouncementBar, null), /*#__PURE__*/React.createElement("header", {
      style: {
        position: "sticky",
        top: 0,
        zIndex: 80,
        background: scrolled ? "rgba(255,255,255,.85)" : "rgba(247,247,244,.72)",
        backdropFilter: "blur(16px)",
        WebkitBackdropFilter: "blur(16px)",
        borderBottom: scrolled || open ? "1px solid var(--border-subtle)" : "1px solid transparent",
        transition: "background .25s, border-color .25s"
      },
      onMouseLeave: leave
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        maxWidth: 1200,
        margin: "0 auto",
        padding: "12px 28px",
        display: "flex",
        alignItems: "center",
        gap: 22
      }
    }, /*#__PURE__*/React.createElement("a", {
      href: "/",
      onClick: closeAll,
      style: {
        display: "flex",
        flex: "none"
      },
      "aria-label": "Property Clinic Solutions home"
    }, /*#__PURE__*/React.createElement("img", {
      src: window.__resources && window.__resources.logoH || "assets/logos/pcs-logo-horizontal.svg",
      alt: "Property Clinic Solutions",
      style: {
        height: 38
      }
    })), /*#__PURE__*/React.createElement("nav", {
      className: "pcs-nav",
      style: {
        display: "flex",
        alignItems: "center",
        gap: 6,
        marginLeft: 12
      }
    }, [["Mortgages", "mortgages"], ["Protection", "protection"]].map(([label, key]) => /*#__PURE__*/React.createElement("div", {
      key: key,
      onMouseEnter: () => enter(key),
      style: {
        position: "relative"
      }
    }, /*#__PURE__*/React.createElement("button", {
      className: "pcs-nav-btn",
      "aria-expanded": open === key,
      "aria-haspopup": "true",
      onClick: () => {
        window.location.href = key;
      },
      style: {
        display: "inline-flex",
        alignItems: "center",
        gap: 5,
        background: "none",
        border: "none",
        cursor: "pointer",
        font: "600 15px var(--font-sans)",
        color: open === key ? "var(--pcs-blue)" : "var(--text-body)",
        padding: "8px 12px",
        borderRadius: 8
      }
    }, label, /*#__PURE__*/React.createElement(Icon, {
      name: "chevronDown",
      size: 15,
      style: {
        transition: "transform .2s",
        transform: open === key ? "rotate(180deg)" : "none"
      }
    })))), simpleLinks.map(([label, href]) => /*#__PURE__*/React.createElement("a", {
      key: label,
      href: href,
      onClick: closeAll,
      className: "pcs-nav-btn",
      style: {
        font: "600 15px var(--font-sans)",
        color: "var(--text-body)",
        textDecoration: "none",
        padding: "8px 12px",
        borderRadius: 8
      }
    }, label))), /*#__PURE__*/React.createElement("div", {
      style: {
        marginLeft: "auto",
        display: "flex",
        alignItems: "center",
        gap: 14
      }
    }, /*#__PURE__*/React.createElement("a", {
      href: "tel:03334040589",
      className: "pcs-nav-phone",
      style: {
        display: "flex",
        alignItems: "center",
        gap: 7,
        font: "700 15px var(--font-sans)",
        color: "var(--pcs-ink)",
        textDecoration: "none",
        whiteSpace: "nowrap"
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "phone",
      size: 16
    }), " 0333 404 0589"), /*#__PURE__*/React.createElement(Button, {
      size: "sm",
      href: CALENDLY,
      target: "_blank",
      rel: "noopener",
      className: "pcs-book-btn"
    }, "Book a Consultation"), /*#__PURE__*/React.createElement("button", {
      className: "pcs-burger",
      "aria-label": "Open menu",
      onClick: () => setDrawer(true),
      style: {
        display: "none",
        background: "none",
        border: "none",
        color: "var(--pcs-ink)",
        cursor: "pointer",
        padding: 6
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "menu",
      size: 26
    })))), /*#__PURE__*/React.createElement("div", {
      className: "pcs-mega",
      onMouseEnter: () => clearTimeout(closeTimer.current),
      style: {
        position: "absolute",
        left: 0,
        right: 0,
        top: "100%",
        pointerEvents: open ? "auto" : "none",
        opacity: open ? 1 : 0,
        transform: open ? "translateY(0)" : "translateY(-8px)",
        transition: "opacity .18s var(--ease-out), transform .18s var(--ease-out)"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        maxWidth: 1200,
        margin: "0 auto",
        padding: "0 28px"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        background: "#fff",
        border: "1px solid var(--border-subtle)",
        borderRadius: 18,
        boxShadow: "var(--shadow-lg)",
        padding: 18,
        marginTop: 6,
        maxWidth: 720
      }
    }, open === "mortgages" && /*#__PURE__*/React.createElement(MegaPanel, {
      links: MORTGAGE_LINKS,
      overview: {
        label: "All mortgage services",
        href: "mortgages"
      },
      footnote: "Whole of market. 90+ lenders. No upfront fees.",
      onNavigate: closeAll
    }), open === "protection" && /*#__PURE__*/React.createElement(MegaPanel, {
      links: PROTECTION_LINKS,
      overview: {
        label: "All protection services",
        href: "protection"
      },
      footnote: "Independent across the whole UK protection market. Reviewed every year.",
      onNavigate: closeAll
    }))))), drawer && /*#__PURE__*/React.createElement(MobileDrawer, {
      onClose: () => setDrawer(false)
    }));
  }
  W.Header = Header;
  function MobileDrawer({
    onClose
  }) {
    const {
      Button
    } = window.PCSDesignSystem_269f6d;
    const {
      Icon
    } = window.PCSIcons;
    const Section = ({
      title,
      links
    }) => /*#__PURE__*/React.createElement("div", {
      style: {
        borderTop: "1px solid var(--border-subtle)",
        padding: "16px 0"
      }
    }, /*#__PURE__*/React.createElement("div", {
      className: "pcs-label",
      style: {
        color: "var(--pcs-blue)",
        marginBottom: 10
      }
    }, title), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        flexDirection: "column",
        gap: 4
      }
    }, links.map(l => /*#__PURE__*/React.createElement("a", {
      key: l.title,
      href: l.href,
      onClick: onClose,
      style: {
        font: "600 16px var(--font-sans)",
        color: "var(--pcs-ink)",
        textDecoration: "none",
        padding: "8px 0"
      }
    }, l.title))));
    return /*#__PURE__*/React.createElement("div", {
      style: {
        position: "fixed",
        inset: 0,
        zIndex: 130
      }
    }, /*#__PURE__*/React.createElement("div", {
      onClick: onClose,
      style: {
        position: "absolute",
        inset: 0,
        background: "rgba(12,26,58,.45)"
      }
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        position: "absolute",
        top: 0,
        right: 0,
        bottom: 0,
        width: "min(360px, 88vw)",
        background: "#fff",
        boxShadow: "var(--shadow-xl)",
        overflowY: "auto",
        padding: "18px 22px 32px"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        marginBottom: 8
      }
    }, /*#__PURE__*/React.createElement("img", {
      src: window.__resources && window.__resources.logoH || "assets/logos/pcs-logo-horizontal.svg",
      alt: "PCS",
      style: {
        height: 32
      }
    }), /*#__PURE__*/React.createElement("button", {
      "aria-label": "Close menu",
      onClick: onClose,
      style: {
        background: "none",
        border: "none",
        color: "var(--pcs-ink)",
        cursor: "pointer"
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "x",
      size: 26
    }))), /*#__PURE__*/React.createElement(Section, {
      title: "Mortgages",
      links: MORTGAGE_LINKS
    }), /*#__PURE__*/React.createElement(Section, {
      title: "Protection",
      links: PROTECTION_LINKS
    }), /*#__PURE__*/React.createElement(Section, {
      title: "More",
      links: [{
        title: "Events",
        href: "events"
      }, {
        title: "About",
        href: "about"
      }, {
        title: "Contact",
        href: "contact"
      }]
    }), /*#__PURE__*/React.createElement(Button, {
      size: "lg",
      fullWidth: true,
      href: CALENDLY,
      target: "_blank",
      rel: "noopener",
      style: {
        marginTop: 18
      }
    }, "Book a Consultation"), /*#__PURE__*/React.createElement("a", {
      href: "tel:03334040589",
      style: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        gap: 8,
        marginTop: 14,
        font: "700 16px var(--font-sans)",
        color: "var(--pcs-ink)",
        textDecoration: "none"
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "phone",
      size: 17
    }), " 0333 404 0589")));
  }
  function Hero() {
    const { Button } = window.PCSDesignSystem_269f6d;
    const { Icon } = window.PCSIcons;
    return /*#__PURE__*/React.createElement("section", {
      id: "top",
      className: "pcs-hero-dark",
      style: { padding: "80px 28px 88px", position: "relative", overflow: "hidden" }
    },
      /*#__PURE__*/React.createElement("div", { className: "pcs-hero-dots" }),
      /*#__PURE__*/React.createElement("div", { className: "pcs-hero-blob pcs-hero-blob-1" }),
      /*#__PURE__*/React.createElement("div", { className: "pcs-hero-blob pcs-hero-blob-2" }),
      /*#__PURE__*/React.createElement("div", { className: "pcs-hero-blob pcs-hero-blob-3" }),
      /*#__PURE__*/React.createElement("div", { className: "pcs-hero-blob pcs-hero-blob-4" }),
      /*#__PURE__*/React.createElement("div", {
        style: { maxWidth: 1200, margin: "0 auto", display: "grid", gridTemplateColumns: "1.05fr .95fr", gap: 60, alignItems: "center", position: "relative", zIndex: 1 },
        className: "pcs-hero-grid"
      },
        /*#__PURE__*/React.createElement("div", null,
          /*#__PURE__*/React.createElement("span", {
            className: "pcs-label pcs-hero-anim",
            style: { color: "var(--pcs-emerald)", display: "inline-flex", alignItems: "center", gap: 8, animationDelay: ".02s" }
          }, /*#__PURE__*/React.createElement(Icon, { name: "shield", size: 15 }), " Independent UK Mortgage and Protection Brokers"),
          /*#__PURE__*/React.createElement("h1", { className: "pcs-hero-title", style: { margin: "18px 0 0" } },
            /*#__PURE__*/React.createElement("span", { className: "pcs-hero-anim", style: { color: "var(--pcs-blue)", display: "block", animationDelay: ".12s" } }, "We advise."),
            /*#__PURE__*/React.createElement("span", { className: "pcs-hero-anim", style: { color: "var(--pcs-emerald)", display: "block", animationDelay: ".22s" } }, "We protect."),
            /*#__PURE__*/React.createElement("span", { className: "pcs-hero-anim", style: { color: "#fff", display: "block", animationDelay: ".32s" } }, "We teach.")
          ),
          /*#__PURE__*/React.createElement("p", {
            className: "pcs-hero-anim",
            style: { fontSize: 18, maxWidth: 520, margin: "22px 0 0", lineHeight: 1.65, color: "rgba(255,255,255,.65)", animationDelay: ".42s" }
          }, "For first-time buyers, self-employed, landlords, and complex cases. We stay with you across every mortgage, every protection review, and every stage of your property journey."),
          /*#__PURE__*/React.createElement("div", {
            className: "pcs-hero-anim",
            style: { display: "flex", gap: 12, marginTop: 32, flexWrap: "wrap", animationDelay: ".5s" }
          },
            /*#__PURE__*/React.createElement(Button, { size: "lg", href: CALENDLY, target: "_blank", rel: "noopener", rightIcon: /*#__PURE__*/React.createElement(Icon, { name: "arrowRight", size: 18 }) }, "Book a Free Consultation"),
            /*#__PURE__*/React.createElement("a", {
              href: "#events",
              style: { display: "inline-flex", alignItems: "center", gap: 8, padding: "13px 22px", borderRadius: 8, border: "1.5px solid rgba(255,255,255,.3)", color: "#fff", font: "600 15px var(--font-sans)", textDecoration: "none", transition: "border-color .2s" }
            }, /*#__PURE__*/React.createElement(Icon, { name: "calendar", size: 18 }), "See Upcoming Events")
          ),
          /*#__PURE__*/React.createElement("p", {
            className: "pcs-hero-anim",
            style: { margin: "24px 0 0", maxWidth: 500, font: "500 12.5px/1.5 var(--font-sans)", color: "rgba(255,255,255,.35)", display: "flex", gap: 8, animationDelay: ".58s" }
          }, /*#__PURE__*/React.createElement(Icon, { name: "shield", size: 16, style: { color: "rgba(255,255,255,.3)", flex: "none", marginTop: 1 } }), RISK)
        ),
        /*#__PURE__*/React.createElement("div", { style: { position: "relative" } },
          /*#__PURE__*/React.createElement("div", { className: "pcs-photo-bob" },
            /*#__PURE__*/React.createElement(Photo, {
              className: "pcs-hero-photo",
              id: "hero-townhouse",
              alt: "A row of classic English red-brick Victorian townhouses",
              h: 480,
              radius: 28,
              eager: true,
              style: { boxShadow: "0 40px 80px rgba(0,0,0,.5), 0 8px 24px rgba(0,0,0,.3)" }
            })
          ),
          /*#__PURE__*/React.createElement("div", {
            className: "pcs-hero-anim",
            style: { position: "absolute", left: -22, bottom: 20, background: "#fff", borderRadius: 18, boxShadow: "0 16px 48px rgba(0,0,0,.4)", padding: "14px 18px", display: "flex", alignItems: "center", gap: 12, maxWidth: 240, animationDelay: ".62s" }
          },
            /*#__PURE__*/React.createElement("span", { style: { flex: "none", width: 42, height: 42, borderRadius: 11, background: "var(--pcs-emerald-tint)", display: "flex", alignItems: "center", justifyContent: "center", color: "var(--pcs-emerald)" } },
              /*#__PURE__*/React.createElement(Icon, { name: "handshake", size: 21 })
            ),
            /*#__PURE__*/React.createElement("div", null,
              /*#__PURE__*/React.createElement("div", { style: { font: "800 16px var(--font-display)", color: "var(--pcs-ink)", letterSpacing: "-.01em" } }, "Whole of market"),
              /*#__PURE__*/React.createElement("div", { style: { font: "500 12px var(--font-sans)", color: "var(--text-muted)" } }, "90+ lenders, not a panel")
            )
          ),
          /*#__PURE__*/React.createElement("div", {
            className: "pcs-hero-anim",
            style: { position: "absolute", right: -14, top: 28, background: "var(--pcs-blue)", borderRadius: 14, boxShadow: "0 8px 24px rgba(0,42,177,.5)", padding: "10px 16px", display: "flex", alignItems: "center", gap: 8, animationDelay: ".72s" }
          },
            /*#__PURE__*/React.createElement(Icon, { name: "checkCircle", size: 17, style: { color: "var(--pcs-emerald)" } }),
            /*#__PURE__*/React.createElement("span", { style: { font: "700 13px var(--font-sans)", color: "#fff" } }, "FCA regulated")
          ),
          /*#__PURE__*/React.createElement("div", {
            className: "pcs-hero-anim",
            style: { position: "absolute", left: -10, top: "42%", background: "var(--pcs-gold)", borderRadius: 10, padding: "7px 14px", animationDelay: ".8s" }
          },
            /*#__PURE__*/React.createElement("span", { style: { font: "800 13px var(--font-sans)", color: "var(--pcs-ink)" } }, "No upfront fees")
          )
        )
      )
    );
  }
  W.Hero = Hero;
  function TrustStrip() {
    const {
      Icon
    } = window.PCSIcons;
    const items = ["Whole of Market", "90+ Lenders", "No Upfront Fees", "Independent Advice"];
    return /*#__PURE__*/React.createElement("section", {
      className: "pcs-truststrip",
      style: {
        background: "#fff",
        borderTop: "1px solid var(--border-subtle)",
        borderBottom: "1px solid var(--border-subtle)"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        maxWidth: 1200,
        margin: "0 auto",
        padding: "20px 28px",
        display: "flex",
        flexWrap: "wrap",
        gap: "12px 34px",
        justifyContent: "center",
        alignItems: "center"
      }
    }, items.map(t => /*#__PURE__*/React.createElement("span", {
      key: t,
      style: {
        display: "inline-flex",
        alignItems: "center",
        gap: 8,
        font: "600 14.5px var(--font-sans)",
        color: "var(--text-body)"
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "checkCircle",
      size: 18,
      style: {
        color: "var(--pcs-emerald)"
      }
    }), " ", t))));
  }
  W.TrustStrip = TrustStrip;
  function Marquee({
    items,
    tone = "ink"
  }) {
    const bg = tone === "blue" ? "var(--pcs-blue)" : "var(--pcs-ink)";
    const row = /*#__PURE__*/React.createElement("div", {
      className: "pcs-marquee-row",
      "aria-hidden": "false"
    }, items.concat(items).map((t, i) => /*#__PURE__*/React.createElement("span", {
      key: i,
      style: {
        display: "inline-flex",
        alignItems: "center",
        gap: 22,
        font: "800 22px var(--font-display)",
        letterSpacing: "-.01em",
        color: "rgba(255,255,255,.92)",
        padding: "0 22px"
      }
    }, t, /*#__PURE__*/React.createElement("span", {
      style: {
        color: "var(--pcs-gold)",
        fontSize: 18
      },
      "aria-hidden": "true"
    }, "·"))));
    return /*#__PURE__*/React.createElement("section", {
      style: {
        background: bg,
        overflow: "hidden",
        padding: "20px 0"
      }
    }, /*#__PURE__*/React.createElement("div", {
      className: "pcs-marquee"
    }, row));
  }
  W.Marquee = Marquee;
  function CookieBanner() {
    const {
      Button
    } = window.PCSDesignSystem_269f6d;
    const {
      Icon
    } = window.PCSIcons;
    const KEY = "pcs-cookie-consent-v1";
    const [show, setShow] = React.useState(false);
    const [expanded, setExpanded] = React.useState(false);
    const [prefs, setPrefs] = React.useState({
      functional: true,
      preferences: false,
      statistics: false,
      marketing: false
    });
    React.useEffect(() => {
      let saved = null;
      try {
        saved = localStorage.getItem(KEY);
      } catch (e) {}
      if (!saved) setShow(true);
    }, []);
    const persist = obj => {
      try {
        localStorage.setItem(KEY, JSON.stringify({
          ...obj,
          ts: Date.now()
        }));
      } catch (e) {}
      if (obj.statistics && W.loadGA4) W.loadGA4();
      setShow(false);
    };
    const acceptAll = () => persist({
      functional: true,
      preferences: true,
      statistics: true,
      marketing: true
    });
    const rejectAll = () => persist({
      functional: true,
      preferences: false,
      statistics: false,
      marketing: false
    });
    const savePrefs = () => persist(prefs);
    if (!show) return null;
    const Row = ({
      k,
      label,
      desc,
      locked
    }) => /*#__PURE__*/React.createElement("label", {
      style: {
        display: "flex",
        gap: 12,
        padding: "12px 0",
        borderTop: "1px solid var(--border-subtle)",
        cursor: locked ? "default" : "pointer"
      }
    }, /*#__PURE__*/React.createElement("input", {
      type: "checkbox",
      checked: locked ? true : prefs[k],
      disabled: locked,
      onChange: e => setPrefs(p => ({
        ...p,
        [k]: e.target.checked
      })),
      style: {
        width: 18,
        height: 18,
        marginTop: 2,
        accentColor: "var(--pcs-blue)",
        flex: "none"
      }
    }), /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement("span", {
      style: {
        display: "block",
        font: "700 14px var(--font-sans)",
        color: "var(--pcs-ink)"
      }
    }, label, locked && /*#__PURE__*/React.createElement("span", {
      style: {
        color: "var(--text-muted)",
        fontWeight: 500
      }
    }, " · always on")), /*#__PURE__*/React.createElement("span", {
      style: {
        display: "block",
        font: "400 13px/1.45 var(--font-sans)",
        color: "var(--text-muted)",
        marginTop: 2
      }
    }, desc)));
    return /*#__PURE__*/React.createElement("div", {
      role: "dialog",
      "aria-label": "Cookie preferences",
      "aria-modal": "false",
      style: {
        position: "fixed",
        left: 16,
        right: 16,
        bottom: 16,
        zIndex: 100,
        display: "flex",
        justifyContent: "center"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        width: "min(560px, 100%)",
        background: "#fff",
        border: "1px solid var(--border-subtle)",
        borderRadius: 18,
        boxShadow: "var(--shadow-xl)",
        padding: 22
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        gap: 12,
        alignItems: "flex-start"
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        flex: "none",
        width: 40,
        height: 40,
        borderRadius: 11,
        background: "var(--pcs-blue-tint)",
        color: "var(--pcs-blue)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "lock",
      size: 20
    })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
      style: {
        font: "700 17px var(--font-display)",
        color: "var(--pcs-ink)"
      }
    }, "We value your privacy"), /*#__PURE__*/React.createElement("p", {
      style: {
        font: "400 14px/1.55 var(--font-sans)",
        color: "var(--text-muted)",
        margin: "6px 0 0"
      }
    }, "We use cookies to run the site and, with your consent, to understand how it is used. You can accept all, reject all, or choose. See our Cookie Policy."))), expanded && /*#__PURE__*/React.createElement("div", {
      style: {
        marginTop: 14
      }
    }, /*#__PURE__*/React.createElement(Row, {
      k: "functional",
      label: "Functional",
      desc: "Required for the site to work. Cannot be switched off.",
      locked: true
    }), /*#__PURE__*/React.createElement(Row, {
      k: "preferences",
      label: "Preferences",
      desc: "Remember choices like your region or saved calculations."
    }), /*#__PURE__*/React.createElement(Row, {
      k: "statistics",
      label: "Statistics",
      desc: "Anonymous analytics that help us improve the site."
    }), /*#__PURE__*/React.createElement(Row, {
      k: "marketing",
      label: "Marketing",
      desc: "Used to make any advertising more relevant to you."
    })), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        gap: 10,
        marginTop: 18,
        flexWrap: "wrap"
      }
    }, /*#__PURE__*/React.createElement(Button, {
      size: "sm",
      onClick: acceptAll
    }, "Accept all"), /*#__PURE__*/React.createElement(Button, {
      size: "sm",
      variant: "outline",
      onClick: rejectAll
    }, "Reject all"), !expanded ? /*#__PURE__*/React.createElement(Button, {
      size: "sm",
      variant: "ghost",
      onClick: () => setExpanded(true)
    }, "Choose") : /*#__PURE__*/React.createElement(Button, {
      size: "sm",
      variant: "ghost",
      onClick: savePrefs
    }, "Save choices"))));
  }
  W.CookieBanner = CookieBanner;

  /* Newsletter popup — site-wide modal reusing the Brevo double-opt-in endpoint.
     Shows once per visitor after a short delay, dismissible (X / Esc / backdrop /
     "No thanks"), suppressed on the legal/utility pages. A dismissal or a signup
     sets a localStorage flag so it never nags returning visitors. Lives here (in
     the always-loaded parts file) so it works on the homepage and every K.Page. */
  const NP_KEY = "pcs_newsletter_seen";
  const NP_SUPPRESS = ["/privacy", "/complaints", "/cookie-policy"];
  function NewsletterPopup() {
    const {
      Button,
      Input
    } = window.PCSDesignSystem_269f6d;
    const {
      Icon
    } = window.PCSIcons;
    const [open, setOpen] = React.useState(false);
    const [sent, setSent] = React.useState(false);
    const dialogRef = React.useRef(null);
    const dismiss = React.useCallback(() => {
      setOpen(false);
      try {
        localStorage.setItem(NP_KEY, "1");
      } catch (e) {}
    }, []);
    React.useEffect(() => {
      try {
        const path = location.pathname.replace(/\.html$/, "");
        if (NP_SUPPRESS.some(p => path === p || path.endsWith(p))) return;
        if (localStorage.getItem(NP_KEY)) return;
      } catch (e) {
        return;
      }
      const t = setTimeout(() => setOpen(true), 9000);
      return () => clearTimeout(t);
    }, []);
    React.useEffect(() => {
      if (!open) return;
      const prev = document.activeElement;
      const onKey = e => {
        if (e.key === "Escape") {
          dismiss();
          return;
        }
        if (e.key === "Tab" && dialogRef.current) {
          const f = dialogRef.current.querySelectorAll('a[href],button,input,[tabindex]:not([tabindex="-1"])');
          if (!f.length) return;
          const first = f[0],
            last = f[f.length - 1];
          if (e.shiftKey && document.activeElement === first) {
            e.preventDefault();
            last.focus();
          } else if (!e.shiftKey && document.activeElement === last) {
            e.preventDefault();
            first.focus();
          }
        }
      };
      document.addEventListener("keydown", onKey);
      const t = setTimeout(() => {
        const el = dialogRef.current && dialogRef.current.querySelector("input");
        if (el) el.focus();
      }, 60);
      return () => {
        document.removeEventListener("keydown", onKey);
        clearTimeout(t);
        if (prev && prev.focus) prev.focus();
      };
    }, [open, dismiss]);
    if (!open) return null;
    return /*#__PURE__*/React.createElement("div", {
      role: "presentation",
      onMouseDown: e => {
        if (e.target === e.currentTarget) dismiss();
      },
      style: {
        position: "fixed",
        inset: 0,
        background: "rgba(8,12,28,.55)",
        backdropFilter: "blur(2px)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: 20,
        zIndex: 1000
      }
    }, /*#__PURE__*/React.createElement("div", {
      ref: dialogRef,
      role: "dialog",
      "aria-modal": "true",
      "aria-labelledby": "pcs-np-title",
      style: {
        background: "#fff",
        borderRadius: 24,
        padding: "34px 32px",
        maxWidth: 460,
        width: "100%",
        boxShadow: "var(--shadow-lg, 0 30px 80px rgba(8,12,28,.35))",
        position: "relative"
      }
    }, /*#__PURE__*/React.createElement("button", {
      type: "button",
      onClick: dismiss,
      "aria-label": "Close",
      style: {
        position: "absolute",
        top: 14,
        right: 14,
        width: 34,
        height: 34,
        borderRadius: 999,
        border: "none",
        background: "var(--surface-page, #f6f7fb)",
        cursor: "pointer",
        display: "grid",
        placeItems: "center",
        color: "var(--text-muted)"
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "x",
      size: 18
    })), sent ? /*#__PURE__*/React.createElement("div", {
      style: {
        textAlign: "center",
        padding: "8px 4px"
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "checkCircle",
      size: 40,
      style: {
        color: "var(--pcs-emerald)"
      }
    }), /*#__PURE__*/React.createElement("h2", {
      id: "pcs-np-title",
      style: {
        font: "800 24px/1.15 var(--font-display)",
        color: "var(--pcs-ink)",
        margin: "14px 0 8px"
      }
    }, "Almost there"), /*#__PURE__*/React.createElement("p", {
      className: "pcs-body",
      style: {
        fontSize: 15.5,
        margin: 0
      }
    }, "We have sent a confirmation email. Please click the link in it to complete your subscription (double opt-in)."), /*#__PURE__*/React.createElement("div", {
      style: {
        marginTop: 20
      }
    }, /*#__PURE__*/React.createElement(Button, {
      onClick: dismiss
    }, "Done"))) : /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("span", {
      className: "pcs-label",
      style: {
        color: "var(--pcs-emerald)"
      }
    }, "Stay Informed"), /*#__PURE__*/React.createElement("h2", {
      id: "pcs-np-title",
      style: {
        font: "800 27px/1.12 var(--font-display)",
        letterSpacing: "-.02em",
        color: "var(--pcs-ink)",
        margin: "10px 0 0"
      }
    }, "One email a month. Nothing more."), /*#__PURE__*/React.createElement("p", {
      className: "pcs-body",
      style: {
        fontSize: 15.5,
        marginTop: 10
      }
    }, "Mortgages, protection, market updates, and upcoming events. No spam. Unsubscribe any time."), /*#__PURE__*/React.createElement("form", {
      onSubmit: async e => {
        e.preventDefault();
        const fd = new FormData(e.target);
        fd.append("email_address_check", "");
        fd.append("locale", "en");
        try {
          await fetch(window.PCSHome.BREVO_NEWSLETTER_URL, {
            method: "POST",
            mode: "no-cors",
            body: fd
          });
        } catch (err) {}
        try {
          localStorage.setItem(NP_KEY, "1");
        } catch (err) {}
        setSent(true);
      },
      style: {
        marginTop: 20
      }
    }, /*#__PURE__*/React.createElement(Input, {
      label: "Email address",
      name: "EMAIL",
      type: "email",
      placeholder: "you@example.com",
      required: true,
      leftIcon: /*#__PURE__*/React.createElement(Icon, {
        name: "mail",
        size: 18
      })
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        marginTop: 14,
        display: "flex",
        gap: 10,
        flexWrap: "wrap"
      }
    }, /*#__PURE__*/React.createElement(Button, {
      type: "submit",
      size: "lg"
    }, "Subscribe"), /*#__PURE__*/React.createElement(Button, {
      type: "button",
      variant: "ghost",
      size: "lg",
      onClick: dismiss
    }, "No thanks")), /*#__PURE__*/React.createElement("p", {
      style: {
        font: "400 12px var(--font-sans)",
        color: "var(--text-muted)",
        margin: "12px 0 0"
      }
    }, "By subscribing you agree to our Privacy Policy.")))));
  }
  W.NewsletterPopup = NewsletterPopup;
  function Footer() {
    const {
      Icon
    } = window.PCSIcons;
    const cols = [{
      h: "Services",
      links: [["Residential Mortgages", "mortgages"], ["Buy to Let", "buy-to-let"], ["Remortgage", "remortgage"], ["Protection", "protection"]]
    }, {
      h: "Company",
      links: [["About Us", "about"], ["Events", "events"], ["Contact", "contact"]]
    }, {
      h: "Legal",
      links: [["Privacy Policy", "privacy"], ["Complaints", "complaints"], ["Cookie Policy", "cookie-policy"]]
    }, {
      h: "Tools",
      links: [["Mortgage Calculator", "calculator"]]
    }];
    const socials = [["facebook", "Facebook", "https://www.facebook.com/profile.php?id=61588038074490"], ["instagram", "Instagram", "https://www.instagram.com/propertyclinicsolutions/"], ["linkedin", "LinkedIn", "https://www.linkedin.com/company/property-clinic-solutions/"], ["tiktok", "TikTok", "https://www.tiktok.com/@propertyclinicsolutions"]];
    return /*#__PURE__*/React.createElement("footer", {
      style: {
        background: "var(--pcs-ink)",
        color: "rgba(255,255,255,.72)"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        maxWidth: 1200,
        margin: "0 auto",
        padding: "60px 28px 30px"
      }
    }, /*#__PURE__*/React.createElement("div", {
      className: "pcs-footer-grid",
      style: {
        display: "grid",
        gridTemplateColumns: "1.5fr 1fr 1fr 1fr 1fr",
        gap: 40
      }
    }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("img", {
      src: window.__resources && window.__resources.logoHRev || "assets/logos/pcs-logo-horizontal-reversed.svg",
      alt: "Property Clinic Solutions",
      style: {
        height: 40
      }
    }), /*#__PURE__*/React.createElement("p", {
      style: {
        font: "700 13px var(--font-sans)",
        letterSpacing: ".08em",
        textTransform: "uppercase",
        color: "rgba(255,255,255,.55)",
        margin: "16px 0 0"
      }
    }, "Professional Property People"), /*#__PURE__*/React.createElement("p", {
      style: {
        font: "400 14px/1.6 var(--font-sans)",
        marginTop: 10,
        maxWidth: 280
      }
    }, "Independent property finance and education for individuals, families, and investors across the UK."), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        gap: 10,
        marginTop: 20
      }
    }, socials.map(([icon, label, url]) => /*#__PURE__*/React.createElement("a", {
      key: label,
      href: url,
      target: "_blank",
      rel: "noopener",
      "aria-label": label,
      className: "pcs-social",
      style: {
        width: 38,
        height: 38,
        borderRadius: 10,
        border: "1px solid rgba(255,255,255,.18)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        color: "rgba(255,255,255,.8)"
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: icon,
      size: 18
    }))))), cols.map(c => /*#__PURE__*/React.createElement("div", {
      key: c.h
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        font: "700 12px var(--font-sans)",
        letterSpacing: ".14em",
        textTransform: "uppercase",
        color: "#fff",
        marginBottom: 14
      }
    }, c.h), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        flexDirection: "column",
        gap: 10
      }
    }, c.links.map(([l, href]) => /*#__PURE__*/React.createElement("a", {
      key: l,
      href: href,
      className: "pcs-foot-link",
      style: {
        font: "400 14px var(--font-sans)",
        color: "rgba(255,255,255,.72)",
        textDecoration: "none"
      }
    }, l)))))), /*#__PURE__*/React.createElement("div", {
      style: {
        borderTop: "1px solid rgba(255,255,255,.14)",
        marginTop: 44,
        paddingTop: 24,
        font: "400 12.5px/1.75 var(--font-sans)",
        color: "rgba(255,255,255,.58)"
      }
    }, /*#__PURE__*/React.createElement("p", {
      style: {
        margin: "0 0 10px"
      }
    }, "Property Clinic Solutions Limited is an Appointed Representative of BSL Financial Services Ltd, which is authorised and regulated by the Financial Conduct Authority under FRN 816566. Property Clinic Solutions Limited is registered in England and Wales (company number 15630130). Registered office: 1 Mychell House, Pincott Road, London, SW19 2NN."), /*#__PURE__*/React.createElement("p", {
      style: {
        margin: "0 0 10px"
      }
    }, /*#__PURE__*/React.createElement("strong", {
      style: {
        color: "rgba(255,255,255,.82)"
      }
    }, RISK)), /*#__PURE__*/React.createElement("p", {
      style: {
        margin: "0 0 14px"
      }
    }, "If you have a complaint we have been unable to resolve, you can refer it to the Financial Ombudsman Service. Visit financial-ombudsman.org.uk or call 0800 023 4567."), /*#__PURE__*/React.createElement("p", {
      style: {
        margin: 0,
        color: "rgba(255,255,255,.45)"
      }
    }, "© ", new Date().getFullYear(), " Property Clinic Solutions Limited. All rights reserved."))));
  }
  W.Footer = Footer;

  /* Cursor spotlight: a soft glow follows the pointer across any surface tagged
     .pcs-spotlight. Layered as a background image so it never covers text, and
     skipped entirely under reduced-motion. */
  (function initSpotlight() {
    if (reduceMotion()) return;
    const onMove = e => {
      const el = e.target.closest && e.target.closest(".pcs-spotlight");
      if (!el) return;
      const r = el.getBoundingClientRect();
      const x = e.clientX - r.left,
        y = e.clientY - r.top;
      el.style.backgroundImage = "radial-gradient(260px circle at " + x + "px " + y + "px, rgba(255,255,255,.14), transparent 60%)";
    };
    const onLeave = e => {
      const el = e.target.closest && e.target.closest(".pcs-spotlight");
      if (el) el.style.backgroundImage = "";
    };
    document.addEventListener("mousemove", onMove, {
      passive: true
    });
    document.addEventListener("mouseout", onLeave, {
      passive: true
    });
  })();
})();