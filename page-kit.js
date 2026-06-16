/* PCS marketing site — interior page kit.
   Reusable section components composed from the design system + icons.
   Exposes window.PCSKit. Load after home-parts.jsx. */
(function () {
  const K = window.PCSKit = window.PCSKit || {};
  const CALENDLY = window.PCSHome && window.PCSHome.CALENDLY || "https://calendly.com/propertyclinicsolutions/free-consultation";
  const RISK = "Your home may be repossessed if you do not keep up repayments on your mortgage.";
  K.RISK = RISK;
  const MAX = 1200;
  function cta(c) {
    if (!c) return null;
    const {
      Button
    } = window.PCSDesignSystem_269f6d;
    const {
      Icon
    } = window.PCSIcons;
    const ext = c.external !== false && /^https?:/.test(c.href || CALENDLY);
    return /*#__PURE__*/React.createElement(Button, {
      size: c.size || "lg",
      variant: c.variant || "primary",
      href: c.href || CALENDLY,
      target: ext ? "_blank" : undefined,
      rel: ext ? "noopener" : undefined,
      rightIcon: c.icon === false ? undefined : /*#__PURE__*/React.createElement(Icon, {
        name: c.iconName || "arrowRight",
        size: 18
      })
    }, c.label);
  }
  K.cta = cta;
  function Eyebrow({
    children,
    color = "var(--pcs-blue)"
  }) {
    return /*#__PURE__*/React.createElement("span", {
      className: "pcs-eyebrow",
      style: {
        color
      }
    }, children);
  }
  K.Eyebrow = Eyebrow;

  /* ---- Page hero ---- */
  function PageHero({
    eyebrow,
    title,
    sub,
    primary,
    secondary,
    compliance,
    photo,
    accent = "var(--pcs-blue)"
  }) {
    const {
      Icon
    } = window.PCSIcons;
    const {
      Photo
    } = window.PCSHome;
    const lines = Array.isArray(compliance) ? compliance : compliance ? [compliance] : [];
    return /*#__PURE__*/React.createElement("section", {
      style: {
        background: "var(--surface-page)",
        padding: "72px 28px 76px",
        overflow: "hidden"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        maxWidth: MAX,
        margin: "0 auto",
        display: "grid",
        gridTemplateColumns: photo ? "1.05fr .95fr" : "1fr",
        gap: 56,
        alignItems: "center"
      },
      className: "pcs-hero-grid"
    }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Eyebrow, {
      color: accent
    }, eyebrow), /*#__PURE__*/React.createElement("h1", {
      className: "pcs-page-title"
    }, title), sub && /*#__PURE__*/React.createElement("p", {
      className: "pcs-body",
      style: {
        fontSize: 18.5,
        maxWidth: 580,
        margin: "20px 0 0"
      }
    }, sub), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        gap: 12,
        marginTop: 30,
        flexWrap: "wrap"
      }
    }, cta(primary), secondary && cta({
      ...secondary,
      variant: secondary.variant || "outline",
      iconName: secondary.iconName
    })), lines.map((l, i) => /*#__PURE__*/React.createElement("p", {
      key: i,
      style: {
        margin: i === 0 ? "22px 0 0" : "8px 0 0",
        maxWidth: 560,
        font: "500 13.5px/1.5 var(--font-sans)",
        color: "var(--text-muted)",
        display: "flex",
        gap: 9
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "shield",
      size: 17,
      style: {
        color: accent,
        flex: "none",
        marginTop: 1
      }
    }), " ", l))), photo && /*#__PURE__*/React.createElement("div", {
      style: {
        position: "relative"
      }
    }, /*#__PURE__*/React.createElement(Photo, {
      className: "pcs-img-zoom",
      id: photo.id,
      alt: photo.alt,
      h: photo.h || 440,
      radius: 28,
      tone: photo.tone || "blue",
      eager: true
    }), photo.badge && /*#__PURE__*/React.createElement("div", {
      style: {
        position: "absolute",
        left: -20,
        bottom: -20,
        background: "#fff",
        borderRadius: 16,
        boxShadow: "var(--shadow-lg)",
        padding: "14px 18px",
        display: "flex",
        alignItems: "center",
        gap: 12,
        maxWidth: 250
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        flex: "none",
        width: 42,
        height: 42,
        borderRadius: 11,
        background: "var(--pcs-emerald-tint)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        color: "var(--pcs-emerald)"
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: photo.badge.icon || "checkCircle",
      size: 21
    })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
      style: {
        font: "800 17px var(--font-display)",
        color: "var(--pcs-ink)",
        letterSpacing: "-.01em"
      }
    }, photo.badge.title), /*#__PURE__*/React.createElement("div", {
      style: {
        font: "500 12.5px var(--font-sans)",
        color: "var(--text-muted)"
      }
    }, photo.badge.sub))))));
  }
  K.PageHero = PageHero;

  /* ---- Trust strip ---- */
  function TrustStrip({
    items
  }) {
    const {
      Icon
    } = window.PCSIcons;
    return /*#__PURE__*/React.createElement("section", {
      style: {
        background: "#fff",
        borderTop: "1px solid var(--border-subtle)",
        borderBottom: "1px solid var(--border-subtle)"
      }
    }, /*#__PURE__*/React.createElement("div", {
      className: "pcs-trust-strip",
      style: {
        maxWidth: MAX,
        margin: "0 auto",
        padding: "20px 28px",
        display: "flex",
        flexWrap: "wrap",
        gap: "12px 32px",
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
  K.TrustStrip = TrustStrip;
  function Head({
    eyebrow,
    title,
    lead,
    accent = "var(--pcs-blue)",
    dark,
    max = 720
  }) {
    return /*#__PURE__*/React.createElement("div", {
      style: {
        maxWidth: max,
        marginBottom: 44
      }
    }, /*#__PURE__*/React.createElement(Eyebrow, {
      color: dark ? "rgba(255,255,255,.7)" : accent
    }, eyebrow), /*#__PURE__*/React.createElement("h2", {
      className: "pcs-h2",
      style: {
        margin: "12px 0 0",
        color: dark ? "#fff" : "var(--pcs-ink)",
        fontWeight: 800,
        fontSize: "clamp(28px,3.4vw,36px)",
        lineHeight: 1.1,
        letterSpacing: "-.02em"
      }
    }, title), lead && /*#__PURE__*/React.createElement("p", {
      className: "pcs-body",
      style: {
        fontSize: 18,
        marginTop: 14,
        color: dark ? "rgba(255,255,255,.82)" : undefined
      }
    }, lead));
  }
  K.Head = Head;

  /* ---- Editorial prose ---- */
  function Prose({
    eyebrow,
    title,
    paras = [],
    accent,
    bg = "#fff"
  }) {
    return /*#__PURE__*/React.createElement("section", {
      className: "reveal",
      style: {
        background: bg,
        padding: "80px 28px"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        maxWidth: MAX,
        margin: "0 auto",
        display: "grid",
        gridTemplateColumns: "minmax(0,420px) 1fr",
        gap: 56,
        alignItems: "start"
      },
      className: "pcs-split-grid"
    }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Eyebrow, {
      color: accent || "var(--pcs-blue)"
    }, eyebrow), /*#__PURE__*/React.createElement("h2", {
      className: "pcs-h2",
      style: {
        margin: "12px 0 0",
        color: "var(--pcs-ink)",
        fontWeight: 800,
        fontSize: "clamp(28px,3.4vw,36px)",
        lineHeight: 1.1,
        letterSpacing: "-.02em"
      }
    }, title)), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        flexDirection: "column",
        gap: 16,
        maxWidth: 680
      }
    }, paras.map((p, i) => /*#__PURE__*/React.createElement("p", {
      key: i,
      className: "pcs-body",
      style: {
        fontSize: 17,
        margin: 0
      }
    }, p)))));
  }
  K.Prose = Prose;

  /* ---- Icon cards (key facts / how we help / values) ---- */
  function IconCards({
    eyebrow,
    title,
    lead,
    items,
    columns = 3,
    accent = "var(--pcs-blue)",
    bg = "var(--surface-page)",
    dark,
    card = true,
    note
  }) {
    const {
      Icon
    } = window.PCSIcons;
    return /*#__PURE__*/React.createElement("section", {
      className: "reveal",
      style: {
        background: dark ? "var(--pcs-ink)" : bg,
        padding: "80px 28px"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        maxWidth: MAX,
        margin: "0 auto"
      }
    }, /*#__PURE__*/React.createElement(Head, {
      eyebrow: eyebrow,
      title: title,
      lead: lead,
      accent: accent,
      dark: dark
    }), /*#__PURE__*/React.createElement("div", {
      className: "pcs-grid-" + columns,
      style: {
        display: "grid",
        gridTemplateColumns: "repeat(" + columns + ",1fr)",
        gap: card ? 20 : 2
      }
    }, items.map((it, i) => /*#__PURE__*/React.createElement("div", {
      key: i,
      style: card ? {
        background: dark ? "rgba(255,255,255,.04)" : "#fff",
        border: "1px solid " + (dark ? "rgba(255,255,255,.12)" : "var(--border-subtle)"),
        borderRadius: 16,
        padding: 26,
        boxShadow: dark ? "none" : "var(--shadow-sm)"
      } : {
        padding: "22px 24px 22px 0",
        borderTop: "1px solid " + (dark ? "rgba(255,255,255,.14)" : "var(--border-subtle)")
      }
    }, it.icon && /*#__PURE__*/React.createElement("span", {
      style: {
        width: 48,
        height: 48,
        borderRadius: 13,
        background: dark ? "rgba(255,255,255,.08)" : "var(--pcs-blue-tint)",
        color: dark ? "#fff" : accent,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        marginBottom: 16
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: it.icon,
      size: 23
    })), /*#__PURE__*/React.createElement("h3", {
      style: {
        font: "700 19px var(--font-display)",
        letterSpacing: "-.01em",
        color: dark ? "#fff" : "var(--pcs-ink)",
        margin: 0
      }
    }, it.title), /*#__PURE__*/React.createElement("p", {
      className: "pcs-body",
      style: {
        fontSize: 15,
        margin: "8px 0 0",
        color: dark ? "rgba(255,255,255,.74)" : undefined
      }
    }, it.body)))), note && /*#__PURE__*/React.createElement("p", {
      className: "pcs-body",
      style: {
        fontSize: 15,
        marginTop: 22,
        color: dark ? "rgba(255,255,255,.7)" : "var(--text-muted)",
        maxWidth: 760
      }
    }, note)));
  }
  K.IconCards = IconCards;

  /* ---- Service cards (linked, with optional bullets) ---- */
  function ServiceCards({
    eyebrow,
    title,
    lead,
    items,
    accent = "var(--pcs-blue)",
    bg = "#fff"
  }) {
    const {
      Icon
    } = window.PCSIcons;
    const toneBg = {
      blue: "var(--pcs-blue-tint)",
      emerald: "var(--pcs-emerald-tint)",
      gold: "var(--pcs-gold-tint)"
    };
    const toneFg = {
      blue: "var(--pcs-blue)",
      emerald: "var(--pcs-emerald)",
      gold: "#8a6310"
    };
    return /*#__PURE__*/React.createElement("section", {
      className: "reveal",
      style: {
        background: bg,
        padding: "80px 28px"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        maxWidth: MAX,
        margin: "0 auto"
      }
    }, /*#__PURE__*/React.createElement(Head, {
      eyebrow: eyebrow,
      title: title,
      lead: lead,
      accent: accent
    }), /*#__PURE__*/React.createElement("div", {
      className: "pcs-grid-2",
      style: {
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        gap: 20
      }
    }, items.map((it, i) => /*#__PURE__*/React.createElement("a", {
      key: i,
      href: it.href || "#",
      className: "pcs-path-card",
      style: {
        background: bg === "#fff" ? "var(--surface-page)" : "#fff",
        border: "1px solid var(--border-subtle)",
        borderRadius: 18,
        padding: 28,
        textDecoration: "none",
        display: "flex",
        flexDirection: "column"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        alignItems: "center",
        gap: 14
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        flex: "none",
        width: 52,
        height: 52,
        borderRadius: 14,
        background: toneBg[it.tone || "blue"],
        color: toneFg[it.tone || "blue"],
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: it.icon,
      size: 26
    })), /*#__PURE__*/React.createElement("h3", {
      style: {
        font: "700 21px var(--font-display)",
        color: "var(--pcs-ink)",
        margin: 0,
        letterSpacing: "-.01em"
      }
    }, it.title)), /*#__PURE__*/React.createElement("p", {
      className: "pcs-body",
      style: {
        fontSize: 15.5,
        margin: "16px 0 0"
      }
    }, it.body), it.bullets && /*#__PURE__*/React.createElement("ul", {
      style: {
        listStyle: "none",
        padding: 0,
        margin: "16px 0 0",
        display: "flex",
        flexDirection: "column",
        gap: 8
      }
    }, it.bullets.map((b, j) => /*#__PURE__*/React.createElement("li", {
      key: j,
      style: {
        display: "flex",
        gap: 9,
        font: "500 14px/1.45 var(--font-sans)",
        color: "var(--text-body)"
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "check",
      size: 17,
      style: {
        color: "var(--pcs-emerald)",
        flex: "none",
        marginTop: 2
      }
    }), " ", b))), it.link && /*#__PURE__*/React.createElement("span", {
      className: "pcs-link-row",
      style: {
        marginTop: "auto",
        paddingTop: 20,
        font: "700 15px var(--font-sans)",
        color: accent,
        display: "inline-flex",
        alignItems: "center",
        gap: 6
      }
    }, it.link, " ", /*#__PURE__*/React.createElement(Icon, {
      name: "arrowRight",
      size: 16
    })))))));
  }
  K.ServiceCards = ServiceCards;

  /* ---- Numbered timeline (3, 4, or 6 steps) ---- */
  function Timeline({
    eyebrow,
    title,
    lead,
    steps,
    cta: ctaObj,
    accent = "var(--pcs-blue)",
    bg = "var(--surface-page)"
  }) {
    const {
      Icon
    } = window.PCSIcons;
    const n = steps.length;
    const cols = n <= 3 ? n : n === 4 ? 4 : 3;
    return /*#__PURE__*/React.createElement("section", {
      className: "reveal",
      style: {
        background: bg,
        padding: "80px 28px"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        maxWidth: MAX,
        margin: "0 auto"
      }
    }, /*#__PURE__*/React.createElement(Head, {
      eyebrow: eyebrow,
      title: title,
      lead: lead,
      accent: accent
    }), /*#__PURE__*/React.createElement("div", {
      className: "pcs-timeline",
      style: {
        display: "grid",
        gridTemplateColumns: "repeat(" + cols + ",1fr)",
        gap: 26,
        position: "relative"
      }
    }, cols === n && /*#__PURE__*/React.createElement("div", {
      className: "pcs-timeline-rule",
      style: {
        position: "absolute",
        top: 32,
        left: 100 / n / 2 + "%",
        right: 100 / n / 2 + "%",
        height: 2,
        background: "var(--border-default)",
        zIndex: 0
      }
    }), steps.map((s, i) => /*#__PURE__*/React.createElement("div", {
      key: i,
      style: {
        position: "relative",
        zIndex: 1
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        width: 64,
        height: 64,
        borderRadius: "50%",
        background: accent,
        color: "#fff",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        boxShadow: "var(--shadow-brand)",
        border: "4px solid " + bg,
        font: "800 24px var(--font-display)"
      }
    }, s.icon ? /*#__PURE__*/React.createElement(Icon, {
      name: s.icon,
      size: 27
    }) : i + 1), /*#__PURE__*/React.createElement("div", {
      style: {
        font: "800 14px var(--font-display)",
        color: "var(--pcs-emerald)",
        marginTop: 18
      }
    }, "Step ", i + 1), /*#__PURE__*/React.createElement("h3", {
      style: {
        font: "700 20px var(--font-display)",
        color: "var(--pcs-ink)",
        margin: "3px 0 0",
        letterSpacing: "-.01em"
      }
    }, s.title), /*#__PURE__*/React.createElement("p", {
      className: "pcs-body",
      style: {
        fontSize: 15,
        margin: "8px 0 0"
      }
    }, s.body)))), ctaObj && /*#__PURE__*/React.createElement("div", {
      style: {
        marginTop: 44
      }
    }, cta(ctaObj))));
  }
  K.Timeline = Timeline;

  /* ---- Comparison / generic table ---- */
  function TableBlock({
    eyebrow,
    title,
    lead,
    head,
    rows,
    accent = "var(--pcs-blue)",
    bg = "#fff"
  }) {
    return /*#__PURE__*/React.createElement("section", {
      className: "reveal",
      style: {
        background: bg,
        padding: "80px 28px"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        maxWidth: MAX,
        margin: "0 auto"
      }
    }, /*#__PURE__*/React.createElement(Head, {
      eyebrow: eyebrow,
      title: title,
      lead: lead,
      accent: accent
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        overflowX: "auto"
      }
    }, /*#__PURE__*/React.createElement("table", {
      className: "pcs-table"
    }, /*#__PURE__*/React.createElement("thead", null, /*#__PURE__*/React.createElement("tr", null, head.map((h, i) => /*#__PURE__*/React.createElement("th", {
      key: i
    }, h)))), /*#__PURE__*/React.createElement("tbody", null, rows.map((r, i) => /*#__PURE__*/React.createElement("tr", {
      key: i
    }, r.map((c, j) => /*#__PURE__*/React.createElement("td", {
      key: j
    }, c)))))))));
  }
  K.TableBlock = TableBlock;

  /* ---- Stat band (dark) ---- */
  function StatBand({
    eyebrow,
    title,
    items,
    bg = "var(--pcs-ink)"
  }) {
    return /*#__PURE__*/React.createElement("section", {
      className: "reveal",
      style: {
        background: bg,
        padding: "72px 28px",
        color: "#fff"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        maxWidth: MAX,
        margin: "0 auto"
      }
    }, title && /*#__PURE__*/React.createElement(Head, {
      eyebrow: eyebrow,
      title: title,
      dark: true,
      max: 640
    }), /*#__PURE__*/React.createElement("div", {
      className: "pcs-grid-4",
      style: {
        display: "grid",
        gridTemplateColumns: "repeat(" + items.length + ",1fr)",
        gap: 24
      }
    }, items.map((it, i) => /*#__PURE__*/React.createElement("div", {
      key: i,
      style: {
        padding: "24px 0",
        borderTop: "2px solid rgba(255,255,255,.18)"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        font: "800 clamp(40px,4vw,54px)/1 var(--font-display)",
        letterSpacing: "-.03em",
        color: "#fff"
      }
    }, window.PCSHome.CountUp ? /*#__PURE__*/React.createElement(window.PCSHome.CountUp, {
      value: it.value
    }) : it.value), /*#__PURE__*/React.createElement("div", {
      style: {
        font: "600 15px var(--font-sans)",
        color: "rgba(255,255,255,.72)",
        marginTop: 12
      }
    }, it.label))))));
  }
  K.StatBand = StatBand;

  /* ---- List block (limitations / bullets with intro + outro) ---- */
  function ListBlock({
    eyebrow,
    title,
    intro,
    items,
    outro,
    accent = "var(--pcs-blue)",
    bg = "var(--surface-page)",
    icon = "check"
  }) {
    const {
      Icon
    } = window.PCSIcons;
    return /*#__PURE__*/React.createElement("section", {
      className: "reveal",
      style: {
        background: bg,
        padding: "80px 28px"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        maxWidth: 880,
        margin: "0 auto"
      }
    }, /*#__PURE__*/React.createElement(Head, {
      eyebrow: eyebrow,
      title: title,
      lead: intro,
      accent: accent,
      max: 760
    }), /*#__PURE__*/React.createElement("ul", {
      style: {
        listStyle: "none",
        padding: 0,
        margin: 0,
        display: "grid",
        gap: 12
      }
    }, items.map((t, i) => /*#__PURE__*/React.createElement("li", {
      key: i,
      style: {
        display: "flex",
        gap: 13,
        alignItems: "flex-start",
        background: "#fff",
        border: "1px solid var(--border-subtle)",
        borderRadius: 12,
        padding: "16px 18px",
        font: "500 16px/1.5 var(--font-sans)",
        color: "var(--text-body)"
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: icon,
      size: 20,
      style: {
        color: accent,
        flex: "none",
        marginTop: 1
      }
    }), " ", t))), outro && /*#__PURE__*/React.createElement("p", {
      className: "pcs-body",
      style: {
        fontSize: 17,
        marginTop: 22
      }
    }, outro)));
  }
  K.ListBlock = ListBlock;

  /* ---- Split feature (text + image) ---- */
  function Split({
    eyebrow,
    title,
    paras = [],
    bullets,
    photo,
    reverse,
    cta: ctaObj,
    accent = "var(--pcs-blue)",
    bg = "#fff"
  }) {
    const {
      Icon
    } = window.PCSIcons;
    const {
      Photo
    } = window.PCSHome;
    const text = /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Eyebrow, {
      color: accent
    }, eyebrow), /*#__PURE__*/React.createElement("h2", {
      className: "pcs-h2",
      style: {
        margin: "12px 0 0",
        color: "var(--pcs-ink)",
        fontWeight: 800,
        fontSize: "clamp(28px,3.4vw,36px)",
        lineHeight: 1.1,
        letterSpacing: "-.02em"
      }
    }, title), paras.map((p, i) => /*#__PURE__*/React.createElement("p", {
      key: i,
      className: "pcs-body",
      style: {
        fontSize: 17,
        margin: "14px 0 0"
      }
    }, p)), bullets && /*#__PURE__*/React.createElement("div", {
      style: {
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        gap: "12px 20px",
        marginTop: 22
      },
      className: "pcs-edu-list"
    }, bullets.map((b, i) => /*#__PURE__*/React.createElement("div", {
      key: i,
      style: {
        display: "flex",
        gap: 10,
        alignItems: "flex-start",
        font: "500 15px/1.4 var(--font-sans)",
        color: "var(--text-body)"
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "checkCircle",
      size: 19,
      style: {
        color: "var(--pcs-emerald)",
        flex: "none",
        marginTop: 1
      }
    }), " ", b))), ctaObj && /*#__PURE__*/React.createElement("div", {
      style: {
        marginTop: 26
      }
    }, cta(ctaObj)));
    const img = /*#__PURE__*/React.createElement(Photo, {
      className: "pcs-img-zoom",
      id: photo.id,
      alt: photo.alt,
      h: photo.h || 380,
      radius: 24,
      tone: photo.tone || "emerald"
    });
    return /*#__PURE__*/React.createElement("section", {
      className: "reveal",
      style: {
        background: bg,
        padding: "80px 28px"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        maxWidth: MAX,
        margin: "0 auto",
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        gap: 56,
        alignItems: "center"
      },
      className: "pcs-edu-grid"
    }, reverse ? /*#__PURE__*/React.createElement(React.Fragment, null, img, text) : /*#__PURE__*/React.createElement(React.Fragment, null, text, img)));
  }
  K.Split = Split;

  /* ---- FAQ accordion ---- */
  function FAQ({
    eyebrow,
    title,
    items,
    accent = "var(--pcs-blue)",
    bg = "var(--surface-page)"
  }) {
    const {
      Icon
    } = window.PCSIcons;
    return /*#__PURE__*/React.createElement("section", {
      className: "reveal",
      style: {
        background: bg,
        padding: "80px 28px"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        maxWidth: 840,
        margin: "0 auto"
      }
    }, /*#__PURE__*/React.createElement(Head, {
      eyebrow: eyebrow,
      title: title,
      accent: accent,
      max: 760
    }), /*#__PURE__*/React.createElement("div", {
      "data-faq-list": true
    }, items.map(([q, a], i) => /*#__PURE__*/React.createElement("details", {
      className: "faq",
      key: i,
      open: i === 0
    }, /*#__PURE__*/React.createElement("summary", null, /*#__PURE__*/React.createElement("span", {
      "data-faq-q": true
    }, q), /*#__PURE__*/React.createElement(Icon, {
      name: "chevronDown",
      size: 22,
      className: "chev"
    })), /*#__PURE__*/React.createElement("div", {
      className: "faq-body"
    }, /*#__PURE__*/React.createElement("p", {
      "data-faq-a": true
    }, a)))))));
  }
  K.FAQ = FAQ;

  /* ---- Final CTA band ---- */
  function CTABand({
    eyebrow,
    title,
    body,
    primary
  }) {
    const {
      Icon
    } = window.PCSIcons;
    return /*#__PURE__*/React.createElement("section", {
      className: "reveal",
      style: {
        background: "var(--surface-page)",
        padding: "88px 28px"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        maxWidth: MAX,
        margin: "0 auto"
      }
    }, /*#__PURE__*/React.createElement("div", {
      className: "pcs-spotlight",
      style: {
        background: "var(--pcs-blue)",
        borderRadius: 28,
        padding: "56px 48px",
        color: "#fff",
        position: "relative",
        overflow: "hidden",
        textAlign: "center"
      }
    }, /*#__PURE__*/React.createElement("img", {
      src: window.__resources && window.__resources.logoSymbolWhite || "assets/logos/pcs-symbol-white.svg",
      alt: "",
      "aria-hidden": "true",
      style: {
        position: "absolute",
        right: -40,
        bottom: -40,
        width: 240,
        opacity: .12
      }
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        position: "relative"
      }
    }, /*#__PURE__*/React.createElement(Eyebrow, {
      color: "rgba(255,255,255,.78)"
    }, eyebrow), /*#__PURE__*/React.createElement("h2", {
      style: {
        font: "800 clamp(30px,3.6vw,40px)/1.08 var(--font-display)",
        letterSpacing: "-.02em",
        margin: "12px auto 0",
        maxWidth: 720
      }
    }, title), body && /*#__PURE__*/React.createElement("p", {
      style: {
        font: "400 18px/1.55 var(--font-sans)",
        color: "rgba(255,255,255,.9)",
        margin: "14px auto 0",
        maxWidth: 560
      }
    }, body), /*#__PURE__*/React.createElement("div", {
      style: {
        marginTop: 28,
        display: "flex",
        justifyContent: "center"
      }
    }, cta({
      ...primary,
      variant: "secondary"
    }))))));
  }
  K.CTABand = CTABand;

  /* ---- Legal / policy page ---- */
  function Legal({
    eyebrow,
    title,
    updated,
    intro,
    sections
  }) {
    return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("section", {
      style: {
        background: "var(--pcs-ink)",
        color: "#fff",
        padding: "56px 28px 52px"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        maxWidth: 820,
        margin: "0 auto"
      }
    }, /*#__PURE__*/React.createElement(Eyebrow, {
      color: "rgba(255,255,255,.7)"
    }, eyebrow), /*#__PURE__*/React.createElement("h1", {
      className: "pcs-page-title",
      style: {
        color: "#fff"
      }
    }, title), updated && /*#__PURE__*/React.createElement("p", {
      style: {
        font: "500 14px var(--font-sans)",
        color: "rgba(255,255,255,.62)",
        margin: "14px 0 0"
      }
    }, "Last updated: ", updated))), /*#__PURE__*/React.createElement("article", {
      className: "reveal",
      style: {
        background: "#fff",
        padding: "60px 28px 80px"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        maxWidth: 820,
        margin: "0 auto"
      }
    }, intro && /*#__PURE__*/React.createElement("p", {
      className: "pcs-body",
      style: {
        fontSize: 18,
        margin: "0 0 8px"
      }
    }, intro), sections.map((sec, i) => /*#__PURE__*/React.createElement("section", {
      key: i,
      style: {
        marginTop: 40
      }
    }, sec.h && /*#__PURE__*/React.createElement("h2", {
      style: {
        font: "800 23px var(--font-display)",
        color: "var(--pcs-ink)",
        letterSpacing: "-.01em",
        margin: "0 0 14px"
      }
    }, sec.h), (sec.paras || []).map((p, j) => /*#__PURE__*/React.createElement("p", {
      key: j,
      className: "pcs-body",
      style: {
        fontSize: 16.5,
        margin: "0 0 14px"
      }
    }, p)), sec.list && /*#__PURE__*/React.createElement("ul", {
      style: {
        margin: "0 0 14px",
        paddingLeft: 0,
        listStyle: "none",
        display: "grid",
        gap: 10
      }
    }, sec.list.map((li, j) => {
      const item = Array.isArray(li) ? li : [li, null];
      return /*#__PURE__*/React.createElement("li", {
        key: j,
        style: {
          display: "flex",
          gap: 12,
          font: "400 16px/1.6 var(--font-sans)",
          color: "var(--text-body)"
        }
      }, /*#__PURE__*/React.createElement("span", {
        style: {
          flex: "none",
          width: 7,
          height: 7,
          borderRadius: 999,
          background: "var(--pcs-blue)",
          marginTop: 10
        }
      }), /*#__PURE__*/React.createElement("span", null, item[1] ? /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("strong", {
        style: {
          color: "var(--pcs-ink)"
        }
      }, item[0], "."), " ", item[1]) : item[0]));
    })))))));
  }
  K.Legal = Legal;

  /* ---- Page shell + boot ---- */
  function Page({
    children
  }) {
    const {
      Header,
      Footer,
      CookieBanner
    } = window.PCSHome;
    return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Header, null), /*#__PURE__*/React.createElement("main", {
      id: "main"
    }, children), /*#__PURE__*/React.createElement(Footer, null), /*#__PURE__*/React.createElement(CookieBanner, null));
  }
  K.Page = Page;
  K.initReveal = function () {
    const els = document.querySelectorAll(".reveal");
    if (!("IntersectionObserver" in window)) {
      els.forEach(e => e.classList.add("reveal--in"));
      return;
    }
    const io = new IntersectionObserver(entries => {
      entries.forEach(en => {
        if (en.isIntersecting) {
          en.target.classList.add("reveal--in");
          io.unobserve(en.target);
        }
      });
    }, {
      rootMargin: "0px 0px -8% 0px",
      threshold: 0.04
    });
    els.forEach(e => io.observe(e));
    setTimeout(() => els.forEach(e => e.classList.add("reveal--in")), 2600);
  };

  /* Build a FAQPage schema from rendered .faq blocks and inject once. */
  K.initFaqSchema = function () {
    const qs = document.querySelectorAll("[data-faq-q]");
    if (!qs.length) return;
    const main = [];
    document.querySelectorAll(".faq").forEach(f => {
      const q = f.querySelector("[data-faq-q]"),
        a = f.querySelector("[data-faq-a]");
      if (q && a) main.push({
        "@type": "Question",
        name: q.textContent,
        acceptedAnswer: {
          "@type": "Answer",
          text: a.textContent
        }
      });
    });
    if (!main.length) return;
    const s = document.createElement("script");
    s.type = "application/ld+json";
    s.textContent = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: main
    });
    document.head.appendChild(s);
  };
  K.boot = function (children) {
    ReactDOM.createRoot(document.getElementById("root")).render(/*#__PURE__*/React.createElement(Page, null, children));
    setTimeout(() => {
      K.initReveal();
      K.initFaqSchema();
    }, 120);
  };
})();