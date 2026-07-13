/* PCS marketing site — body sections. Extends window.PCSHome.
   Copy is taken verbatim from PCS-Website-Copy-All-Pages.docx (Homepage).
   Client-story quotes are realistic placeholders to be swapped for real ones. */
(function () {
  const W = window.PCSHome = window.PCSHome || {};
  const CALENDLY = W.CALENDLY;
  const EVENTBRITE = W.EVENTBRITE;
  const CountUp = W.CountUp;
  function Eyebrow({
    children,
    color = "var(--pcs-blue)"
  }) {
    return /*#__PURE__*/React.createElement("span", {
      className: "pcs-label",
      style: {
        color
      }
    }, children);
  }

  /* 1 — What We Do */
  function Services() {
    const {
      Card
    } = window.PCSDesignSystem_269f6d;
    const {
      Icon
    } = window.PCSIcons;
    const items = [{
      icon: "house2",
      tone: "blue",
      title: "Mortgages",
      body: "For first-time buyers, remortgages, buy-to-let, self-employed, and complex cases. We search the whole UK market and recommend the deal that fits, not the easiest to process.",
      link: "Explore Mortgages",
      href: "mortgages"
    }, {
      icon: "shield",
      tone: "emerald",
      title: "Protection",
      body: "Life cover, critical illness, income protection, and home insurance, built around your real situation. Independent recommendations across the whole market, reviewed every year.",
      link: "Explore Protection",
      href: "protection"
    }, {
      icon: "cap",
      tone: "gold",
      title: "Education",
      body: "In-person and online events on property, mortgages, credit, and protection. From free community evenings to ticketed deep-dive sessions taught by working professionals.",
      link: "Explore Events",
      href: "events"
    }];
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
        background: "var(--surface-page)",
        padding: "88px 28px"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        maxWidth: 1200,
        margin: "0 auto"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        maxWidth: 680,
        marginBottom: 44
      }
    }, /*#__PURE__*/React.createElement(Eyebrow, {
      color: "var(--pcs-emerald)"
    }, "What We Do"), /*#__PURE__*/React.createElement("h2", {
      className: "pcs-h2",
      style: {
        margin: "12px 0 0"
      }
    }, "Three services. One relationship. Built around you."), /*#__PURE__*/React.createElement("p", {
      className: "pcs-body",
      style: {
        fontSize: 18,
        marginTop: 14
      }
    }, "Most brokers stop at the mortgage. We do not. We advise on the right deal, protect what matters, and teach you the things most advisers never explain.")), /*#__PURE__*/React.createElement("div", {
      className: "pcs-grid-3",
      style: {
        display: "grid",
        gridTemplateColumns: "repeat(3,1fr)",
        gap: 22
      }
    }, items.map(it => /*#__PURE__*/React.createElement(Card, {
      key: it.title,
      interactive: true,
      padding: 30
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        width: 56,
        height: 56,
        borderRadius: 15,
        background: toneBg[it.tone],
        color: toneFg[it.tone],
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: it.icon,
      size: 28
    })), /*#__PURE__*/React.createElement("h3", {
      style: {
        font: "700 22px var(--font-display)",
        letterSpacing: "-.01em",
        color: "var(--pcs-ink)",
        margin: "18px 0 0"
      }
    }, it.title), /*#__PURE__*/React.createElement("p", {
      className: "pcs-body",
      style: {
        fontSize: 15.5,
        margin: "10px 0 0"
      }
    }, it.body), /*#__PURE__*/React.createElement("a", {
      href: it.href,
      style: {
        marginTop: "auto",
        paddingTop: 18,
        font: "700 15px var(--font-sans)",
        color: "var(--pcs-blue)",
        display: "inline-flex",
        alignItems: "center",
        gap: 6,
        textDecoration: "none"
      },
      className: "pcs-link-row"
    }, it.link, " ", /*#__PURE__*/React.createElement(Icon, {
      name: "arrowRight",
      size: 16
    })))))));
  }
  W.Services = Services;

  /* 2 — Why PCS */
  function WhyPCS() {
    const {
      Icon
    } = window.PCSIcons;
    const W2 = window.PCSHome;
    const points = [{
      icon: "shield",
      title: "Independent and FCA regulated",
      body: "Authorised and regulated through our principal firm. Independent across both mortgages and protection."
    }, {
      icon: "scale",
      title: "Whole of market access",
      body: "90+ lenders and the full UK protection market. We choose what fits you, not what fits a panel."
    }, {
      icon: "users",
      title: "Specialist in complex cases",
      body: "Self-employed, contractor day rates, adverse credit, unusual properties. We do not turn people away."
    }, {
      icon: "cap",
      title: "Education built in",
      body: "We teach our clients what most advisers will not. Through events, content, and one to one explanation."
    }, {
      icon: "calendar",
      title: "Reviewed every year",
      body: "Your mortgage and protection are not set and forget. We review your cover and rate annually so you stay on the right deal as life changes."
    }];
    return /*#__PURE__*/React.createElement("section", {
      className: "reveal",
      style: {
        background: "#fff",
        padding: "88px 28px"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        maxWidth: 1200,
        margin: "0 auto",
        display: "grid",
        gridTemplateColumns: ".82fr 1.18fr",
        gap: 56,
        alignItems: "start"
      },
      className: "pcs-why-grid"
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        position: "sticky",
        top: 96
      },
      className: "pcs-why-head"
    }, /*#__PURE__*/React.createElement(Eyebrow, null, "Why PCS"), /*#__PURE__*/React.createElement("h2", {
      className: "pcs-h2",
      style: {
        margin: "12px 0 0"
      }
    }, "Advice you can trust. For life."), /*#__PURE__*/React.createElement("p", {
      className: "pcs-body",
      style: {
        fontSize: 18,
        marginTop: 14,
        maxWidth: 380
      }
    }, "We are not a comparison website. We are not tied to a panel. We are an independent brokerage that stays with you across every transaction, every review, and every stage of your property journey."), /*#__PURE__*/React.createElement("div", {
      style: {
        marginTop: 26
      }
    }, /*#__PURE__*/React.createElement(W2.Photo, {
      className: "pcs-img-zoom",
      id: "why-home",
      alt: "A beautifully renovated UK home interior",
      h: 220,
      radius: 20,
      tone: "emerald"
    }))), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        gap: 2
      },
      className: "pcs-why-points"
    }, points.map((p, i) => /*#__PURE__*/React.createElement("div", {
      key: p.title,
      style: {
        padding: "24px 22px",
        borderTop: "1px solid var(--border-subtle)",
        borderLeft: i % 2 ? "1px solid var(--border-subtle)" : "none"
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        width: 46,
        height: 46,
        borderRadius: 12,
        background: "var(--pcs-blue-tint)",
        color: "var(--pcs-blue)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: p.icon,
      size: 22
    })), /*#__PURE__*/React.createElement("h3", {
      style: {
        font: "700 18px var(--font-display)",
        color: "var(--pcs-ink)",
        margin: "14px 0 0"
      }
    }, p.title), /*#__PURE__*/React.createElement("p", {
      className: "pcs-body",
      style: {
        fontSize: 14.5,
        margin: "8px 0 0"
      }
    }, p.body))))));
  }
  W.WhyPCS = WhyPCS;

  /* 3 — By the Numbers */
  function Numbers() {
    const items = [{
      value: "500+",
      label: "Clients helped"
    }, {
      value: "90+",
      label: "Lenders accessed"
    }, {
      value: "12+",
      label: "Community events delivered"
    }, {
      value: "5+",
      label: "UK cities served"
    }];
    return /*#__PURE__*/React.createElement("section", {
      className: "reveal pcs-spotlight",
      style: {
        background: "var(--pcs-ink)",
        padding: "72px 28px",
        color: "#fff"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        maxWidth: 1200,
        margin: "0 auto"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        maxWidth: 640,
        marginBottom: 40
      }
    }, /*#__PURE__*/React.createElement(Eyebrow, {
      color: "rgba(255,255,255,.7)"
    }, "Track Record"), /*#__PURE__*/React.createElement("h2", {
      style: {
        font: "800 36px/1.1 var(--font-display)",
        letterSpacing: "-.02em",
        margin: "12px 0 0"
      }
    }, "Real work. Real clients. Real outcomes.")), /*#__PURE__*/React.createElement("div", {
      className: "pcs-grid-4",
      style: {
        display: "grid",
        gridTemplateColumns: "repeat(4,1fr)",
        gap: 24
      }
    }, items.map(it => /*#__PURE__*/React.createElement("div", {
      key: it.label,
      style: {
        padding: "24px 0",
        borderTop: "2px solid rgba(255,255,255,.18)"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        font: "800 54px/1 var(--font-display)",
        letterSpacing: "-.03em",
        color: "#fff"
      }
    }, /*#__PURE__*/React.createElement(CountUp, {
      value: it.value
    })), /*#__PURE__*/React.createElement("div", {
      style: {
        font: "600 15px var(--font-sans)",
        color: "rgba(255,255,255,.72)",
        marginTop: 12
      }
    }, it.label))))));
  }
  W.Numbers = Numbers;

  /* 4 — How We Work */
  function HowWeWork() {
    const {
      Button
    } = window.PCSDesignSystem_269f6d;
    const {
      Icon
    } = window.PCSIcons;
    const steps = [{
      n: "1",
      icon: "phone",
      title: "Free call",
      body: "A 15 to 30 minute conversation. We listen, ask the right questions, and tell you honestly whether we can help."
    }, {
      n: "2",
      icon: "search",
      title: "Whole of market research",
      body: "We compare 90+ lenders or insurers and bring you the options that genuinely fit your situation, with the reasoning behind each."
    }, {
      n: "3",
      icon: "handshake",
      title: "We handle the rest",
      body: "Application, paperwork, and lender liaison all the way to completion. Then we stay in touch and review your cover or rate annually."
    }];
    return /*#__PURE__*/React.createElement("section", {
      className: "reveal",
      style: {
        background: "var(--surface-page)",
        padding: "88px 28px"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        maxWidth: 1200,
        margin: "0 auto"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        maxWidth: 640,
        marginBottom: 50
      }
    }, /*#__PURE__*/React.createElement(Eyebrow, null, "How We Work"), /*#__PURE__*/React.createElement("h2", {
      className: "pcs-h2",
      style: {
        margin: "12px 0 0"
      }
    }, "Three steps. No pressure at any point.")), /*#__PURE__*/React.createElement("div", {
      className: "pcs-timeline",
      style: {
        display: "grid",
        gridTemplateColumns: "repeat(3,1fr)",
        gap: 28,
        position: "relative"
      }
    }, /*#__PURE__*/React.createElement("div", {
      className: "pcs-timeline-rule",
      style: {
        position: "absolute",
        top: 36,
        left: "16%",
        right: "16%",
        height: 2,
        background: "var(--border-default)",
        zIndex: 0
      }
    }), steps.map(s => /*#__PURE__*/React.createElement("div", {
      key: s.n,
      style: {
        position: "relative",
        zIndex: 1
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        width: 72,
        height: 72,
        borderRadius: "50%",
        background: "var(--pcs-blue)",
        color: "#fff",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        boxShadow: "var(--shadow-brand)",
        border: "4px solid var(--surface-page)"
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: s.icon,
      size: 30
    })), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        alignItems: "baseline",
        gap: 10,
        marginTop: 20
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        font: "800 15px var(--font-display)",
        color: "var(--pcs-emerald)"
      }
    }, "Step ", s.n)), /*#__PURE__*/React.createElement("h3", {
      style: {
        font: "700 22px var(--font-display)",
        color: "var(--pcs-ink)",
        margin: "4px 0 0",
        letterSpacing: "-.01em"
      }
    }, s.title), /*#__PURE__*/React.createElement("p", {
      className: "pcs-body",
      style: {
        fontSize: 15.5,
        margin: "10px 0 0",
        maxWidth: 320
      }
    }, s.body)))), /*#__PURE__*/React.createElement("div", {
      style: {
        marginTop: 44
      }
    }, /*#__PURE__*/React.createElement(Button, {
      size: "lg",
      href: "get-started",
      rightIcon: /*#__PURE__*/React.createElement(Icon, {
        name: "arrowRight",
        size: 18
      })
    }, "Get Started"))));
  }
  W.HowWeWork = HowWeWork;

  /* 5 — Education + Featured Event */
  function Education() {
    const {
      Button,
      Badge
    } = window.PCSDesignSystem_269f6d;
    const {
      Icon
    } = window.PCSIcons;
    const W2 = window.PCSHome;
    const list = ["Free first-time buyer evenings", "Landlord and portfolio workshops", "Credit, affordability, and protection masterclasses", "Online sessions for clients who cannot travel"];
    return /*#__PURE__*/React.createElement("section", {
      id: "events",
      className: "reveal",
      style: {
        background: "#fff",
        padding: "88px 28px",
        scrollMarginTop: 80
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        maxWidth: 1200,
        margin: "0 auto",
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        gap: 56,
        alignItems: "center"
      },
      className: "pcs-edu-grid"
    }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Eyebrow, {
      color: "var(--pcs-gold)"
    }, "Why We Teach"), /*#__PURE__*/React.createElement("h2", {
      className: "pcs-h2",
      style: {
        margin: "12px 0 0"
      }
    }, "Most brokers will not explain it. We will."), /*#__PURE__*/React.createElement("p", {
      className: "pcs-body",
      style: {
        fontSize: 18,
        marginTop: 14
      }
    }, "Property finance is full of decisions that cost people money for years because no one explained the trade-offs at the start. We run free community events, paid deep-dive workshops, and online sessions so our clients and our community can make informed decisions, not lucky ones."), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        gap: "12px 20px",
        marginTop: 24
      },
      className: "pcs-edu-list"
    }, list.map(t => /*#__PURE__*/React.createElement("div", {
      key: t,
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
    }), " ", t)))), /*#__PURE__*/React.createElement("div", {
      style: {
        background: "var(--surface-page)",
        border: "1px solid var(--border-subtle)",
        borderRadius: 24,
        overflow: "hidden",
        boxShadow: "var(--shadow-md)"
      }
    }, /*#__PURE__*/React.createElement("div", {
      className: "pcs-img-zoom",
      style: {
        position: "relative",
        background: "var(--pcs-ink)",
        height: 420,
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
      }
    }, /*#__PURE__*/React.createElement("img", {
      src: "assets/photos/event-flyer.jpg",
      alt: "Empowerment Through Property: Landlord and Investment Expo flyer",
      onError: e => {
        e.currentTarget.onerror = null;
        e.currentTarget.src = "assets/photos/1511578314322-379afb476865.jpg";
        e.currentTarget.style.objectFit = "cover";
        e.currentTarget.style.height = "100%";
        e.currentTarget.style.maxWidth = "100%";
      },
      style: {
        maxHeight: "100%",
        maxWidth: "100%",
        objectFit: "contain",
        display: "block"
      }
    }), /*#__PURE__*/React.createElement("span", {
      style: {
        position: "absolute",
        top: 16,
        left: 16
      }
    }, /*#__PURE__*/React.createElement(Badge, {
      tone: "gold",
      variant: "solid"
    }, "Featured event"))), /*#__PURE__*/React.createElement("div", {
      style: {
        padding: 26
      }
    }, /*#__PURE__*/React.createElement("h3", {
      style: {
        font: "700 24px/1.15 var(--font-display)",
        color: "var(--pcs-ink)",
        letterSpacing: "-.01em",
        margin: 0
      }
    }, "Empowerment Through Property: Wealth meets Health"), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        flexDirection: "column",
        gap: 10,
        margin: "18px 0 0"
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        display: "flex",
        alignItems: "center",
        gap: 10,
        font: "600 15px var(--font-sans)",
        color: "var(--text-body)"
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "calendar",
      size: 18,
      style: {
        color: "var(--pcs-blue)"
      }
    }), " Saturday 1 August 2026, 12 PM – 6 PM"), /*#__PURE__*/React.createElement("span", {
      style: {
        display: "flex",
        alignItems: "flex-start",
        gap: 10,
        font: "500 15px/1.4 var(--font-sans)",
        color: "var(--text-body)"
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "mapPin",
      size: 18,
      style: {
        color: "var(--pcs-blue)",
        flex: "none",
        marginTop: 1
      }
    }), " Grove House, 27 Hammersmith Grove, London, W6 0NE")), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        gap: 12,
        marginTop: 24,
        flexWrap: "wrap"
      }
    }, /*#__PURE__*/React.createElement(Button, {
      href: EVENTBRITE,
      target: "_blank",
      rel: "noopener"
    }, "Reserve Your Place"), /*#__PURE__*/React.createElement(Button, {
      variant: "outline",
      href: "events"
    }, "See All Upcoming Events"))))));
  }
  W.Education = Education;

  /* Filled star (the icon set's star is an outline; reviews want a solid gold star). */
  function Star({
    on
  }) {
    return /*#__PURE__*/React.createElement("svg", {
      width: "18",
      height: "18",
      viewBox: "0 0 24 24",
      "aria-hidden": "true",
      style: {
        display: "block",
        flex: "none"
      },
      fill: on ? "var(--pcs-gold)" : "var(--border-default)"
    }, /*#__PURE__*/React.createElement("path", {
      d: "M12 17.27 18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"
    }));
  }
  /* The Google "G" mark (attribution that the review comes from Google). */
  function GoogleG() {
    return /*#__PURE__*/React.createElement("svg", {
      width: "20",
      height: "20",
      viewBox: "0 0 48 48",
      "aria-label": "Google review",
      style: {
        flex: "none"
      }
    }, /*#__PURE__*/React.createElement("path", {
      fill: "#4285F4",
      d: "M45.12 24.5c0-1.56-.14-3.06-.4-4.5H24v8.51h11.84c-.51 2.75-2.06 5.08-4.39 6.64v5.52h7.11c4.16-3.83 6.56-9.47 6.56-16.17z"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "#34A853",
      d: "M24 46c5.94 0 10.92-1.97 14.56-5.33l-7.11-5.52c-1.97 1.32-4.49 2.1-7.45 2.1-5.73 0-10.58-3.87-12.31-9.07H4.34v5.7C7.96 41.07 15.4 46 24 46z"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "#FBBC05",
      d: "M11.69 28.18C11.25 26.86 11 25.45 11 24s.25-2.86.69-4.18v-5.7H4.34C2.85 17.09 2 20.45 2 24s.85 6.91 2.34 9.88l7.35-5.7z"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "#EA4335",
      d: "M24 10.75c3.23 0 6.13 1.11 8.41 3.29l6.31-6.31C34.91 4.18 29.93 2 24 2 15.4 2 7.96 6.93 4.34 14.12l7.35 5.7c1.73-5.2 6.58-9.07 12.31-9.07z"
    }));
  }
  function VerifiedTick() {
    return /*#__PURE__*/React.createElement("svg", {
      width: "16",
      height: "16",
      viewBox: "0 0 24 24",
      "aria-label": "Verified",
      style: {
        flex: "none"
      }
    }, /*#__PURE__*/React.createElement("circle", {
      cx: "12",
      cy: "12",
      r: "11",
      fill: "#4285F4"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M7 12.4l3.2 3.2L17 9",
      fill: "none",
      stroke: "#fff",
      strokeWidth: "2.2",
      strokeLinecap: "round",
      strokeLinejoin: "round"
    }));
  }
  function ReviewCard({
    r
  }) {
    const {
      Avatar
    } = window.PCSDesignSystem_269f6d;
    const pRef = React.useRef(null);
    const [open, setOpen] = React.useState(false);
    const [overflow, setOverflow] = React.useState(false);
    React.useEffect(() => {
      const el = pRef.current;
      if (el) setOverflow(el.scrollHeight > el.clientHeight + 2);
    }, []);
    return /*#__PURE__*/React.createElement("article", {
      "data-rev": true,
      className: "pcs-story-card",
      style: {
        flex: "0 0 clamp(280px, 80vw, 360px)",
        scrollSnapAlign: "start",
        background: "#fff",
        border: "1px solid var(--border-subtle)",
        borderRadius: 18,
        boxShadow: "var(--shadow-sm)",
        padding: 26,
        display: "flex",
        flexDirection: "column"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        alignItems: "center",
        gap: 13
      }
    }, /*#__PURE__*/React.createElement(Avatar, {
      name: r.name,
      src: r.avatar,
      size: "md"
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        flex: 1,
        minWidth: 0
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        font: "700 15px var(--font-sans)",
        color: "var(--pcs-ink)"
      }
    }, r.name), /*#__PURE__*/React.createElement("div", {
      style: {
        font: "500 13px var(--font-sans)",
        color: "var(--text-muted)"
      }
    }, r.when)), /*#__PURE__*/React.createElement(GoogleG, null)), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        alignItems: "center",
        gap: 8,
        margin: "14px 0 0"
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        display: "flex",
        gap: 2
      }
    }, [0, 1, 2, 3, 4].map(i => /*#__PURE__*/React.createElement(Star, {
      key: i,
      on: i < (r.rating || 5)
    }))), /*#__PURE__*/React.createElement(VerifiedTick, null)), /*#__PURE__*/React.createElement("p", {
      ref: pRef,
      className: open ? "" : "pcs-rev-text",
      style: {
        font: "400 15px/1.6 var(--font-sans)",
        color: "var(--text-body)",
        margin: "13px 0 0"
      }
    }, r.text), (overflow || open) && /*#__PURE__*/React.createElement("button", {
      onClick: () => setOpen(o => !o),
      className: "pcs-link-row",
      style: {
        alignSelf: "flex-start",
        marginTop: 12,
        background: "none",
        border: "none",
        padding: 0,
        cursor: "pointer",
        font: "600 14px var(--font-sans)",
        color: "var(--pcs-blue)"
      }
    }, open ? "Show less" : "Read more"));
  }

  /* 6 — Google reviews (scrolling). Replace the reviews array with your real
     ones and set GOOGLE_REVIEWS_URL to your Google profile link. */
  function ClientStories() {
    const {
      Icon
    } = window.PCSIcons;
    const trackRef = React.useRef(null);
    const GOOGLE_REVIEWS_URL = "https://www.google.com/search?q=Property+Clinic+Solutions";
    const reviews = [{
      name: "Patience Mensah",
      when: "3 weeks ago",
      rating: 5,
      text: "Emmanuel work is professional and unique we just met Emmanuel two months ago with sad and sorrow but Emmanuel told us, he will help us to get a mortgage offer that time our hope was gone because we was having a different broker who didn't help us to got an offer and our money was wasted but when we met Emmanuel everything was consistently and happy😊😃 and Emmanuel brought hope to our side. Anytime we give Emmanuel a message, he responds quickly, and even weekends always respond to our calls. Recently, Emmanuel has been the best broker. I recommended Emmanuel to everybody who is struggling to get a mortgage offer. We are thankful for your tremendous support during this time. Your generous work was a blessing to us. Word can not express how grateful we are. thank you very much. God bless you Emmanuel 🙏❤️"
    }, {
      name: "Mary Oberiko",
      when: "4 weeks ago",
      rating: 5,
      text: "We cannot recommend Emmanuel enough. From the very beginning, he was straightforward, professional, and incredibly easy to talk to. He kept us informed throughout the whole process and made what had been a stressful journey feel much more manageable. Not only did he secure our mortgage offer, but he also went the extra mile to negotiate us a better deal, which we truly appreciated. His communication, knowledge, and dedication were outstanding from start to finish. Emmanuel was genuinely a breath of fresh air, and we now feel we have a trusted broker for life. We would highly recommend him to anyone looking for a reliable, honest, and hardworking mortgage broker."
    }, {
      name: "Adeola Banjo",
      when: "6 weeks ago",
      rating: 5,
      text: "I am happy I chose PCS. Thank you for a job well-done."
    }, {
      name: "Aasia Henry",
      when: "10 weeks ago",
      rating: 5,
      text: "I had an outstanding experience with Property Clinic Solutions. After several unsuccessful attempts to secure a mortgage with other providers, they made what felt impossible, possible. Emmanuel, in particular, went above and beyond, working tirelessly, staying persistent, and guiding me through every step of the process. His dedication, expertise, and clear communication made all the difference. I’m incredibly grateful for the support I received and would highly recommend Property Clinic Solutions to anyone struggling to get a mortgage. Truly a first-class service."
    }, {
      name: "Sheila Nyaluyima",
      when: "15 weeks ago",
      rating: 5,
      text: "Emmanuel was a great help to me in achieving my mortgage offer. He worked really hard and was there to answer any questions I had. I would greatly recommend him. He was not frustrated once with the painful process of applying to different lenders each time, really appreciate all you did for me and my family. Thank you from the bottom of my heart."
    }, {
      name: "Risikat Adekoluejo",
      when: "15 weeks ago",
      rating: 5,
      text: "I had an exceptional experience working with Property Clinic Solutions. From the very beginning, it was clear that he always puts his clients first. He was incredibly dedicated, never backing down until we received that important call confirming our mortgage approval. His perseverance and commitment made a significant difference in our journey to homeownership. The day we walked into our new house, we felt a wave of gratitude, knowing that we had the best support throughout the process. I highly recommend Mr Emmanuel Olutokun to anyone looking to secure a mortgage. His professionalism and client-focused approach truly set him apart from others. Thank you for your time, support, help and service 🙏"
    }, {
      name: "Augustus Kodua",
      when: "16 weeks ago",
      rating: 5,
      text: "The entire Property Clinic Solutions team were brilliant and went over and beyond in helping me own my 1st ever home. Emmanuel was extremely helpful in liaising with the solicitors and although they had got me a mortgage, they continued to offer support until I finally completed and got my keys. I will surely be using them again and will recommend them to all my family and friends."
    }, {
      name: "Shazna Begum",
      when: "16 weeks ago",
      rating: 5,
      text: "I had an excellent experience with Property Clinic. Emmanuel was a great adviser who supported me throughout the process of securing a mortgage on my Right to Buy property. The process took around two years, and during that time he was extremely helpful, particularly when it came to renewing my mortgage. I am very grateful for his consistent support and the clear, reliable communication he provided throughout. I would highly recommend Emmanuel to anyone considering purchasing a home or needing expert mortgage advice."
    }, {
      name: "Elizabeth Afon",
      when: "20 weeks ago",
      rating: 5,
      text: "It took sometime to get a good broker, I tried 5 different brokers who made it seem getting on the ladder was almost impossible. However I was referred to Property Clinic Solutions and everything happened so smoothly. Mr Emmanuel was so professional and calmly talked/walked me through the process (whilst being also very practical). I do not regret using Property Clinic Solutions and would recommend them over and over again. Thank you for making this journey easy and possible."
    }, {
      name: "Femi Olowe",
      when: "21 weeks ago",
      rating: 5,
      text: "Great service, enquiries responded to on time."
    }, {
      name: "Emmanuel",
      when: "21 weeks ago",
      rating: 5,
      text: "The absolute best. Demonstrated in-depth knowledge of the processes, very warm attitude, courteous and professional. I highly recommend."
    }];
    const scroll = dir => {
      const el = trackRef.current;
      if (!el) return;
      const card = el.querySelector("[data-rev]");
      const step = card ? card.offsetWidth + 22 : 360;
      el.scrollBy({
        left: dir * step,
        behavior: "smooth"
      });
    };
    /* Gentle continuous auto-scroll. Pauses on hover, touch and keyboard focus,
       and is skipped entirely under reduced motion. The cards are duplicated so
       the loop is seamless. */
    React.useEffect(() => {
      const el = trackRef.current;
      if (!el) return;
      if (window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
      let paused = false,
        raf;
      const pause = () => {
        paused = true;
      };
      const resume = () => {
        paused = false;
      };
      el.addEventListener("mouseenter", pause);
      el.addEventListener("mouseleave", resume);
      el.addEventListener("touchstart", pause, {
        passive: true
      });
      el.addEventListener("focusin", pause);
      el.addEventListener("focusout", resume);
      const tick = () => {
        if (!paused) {
          el.scrollLeft += 0.6;
          const half = el.scrollWidth / 2;
          if (el.scrollLeft >= half) el.scrollLeft -= half;
        }
        raf = requestAnimationFrame(tick);
      };
      raf = requestAnimationFrame(tick);
      return () => {
        cancelAnimationFrame(raf);
        el.removeEventListener("mouseenter", pause);
        el.removeEventListener("mouseleave", resume);
        el.removeEventListener("touchstart", pause);
        el.removeEventListener("focusin", pause);
        el.removeEventListener("focusout", resume);
      };
    }, []);
    return /*#__PURE__*/React.createElement("section", {
      className: "reveal",
      style: {
        background: "var(--surface-page)",
        padding: "88px 28px"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        maxWidth: 1200,
        margin: "0 auto"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "flex-end",
        gap: 20,
        flexWrap: "wrap",
        marginBottom: 32
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        maxWidth: 640
      }
    }, /*#__PURE__*/React.createElement(Eyebrow, {
      color: "var(--pcs-emerald)"
    }, "Client Stories"), /*#__PURE__*/React.createElement("h2", {
      className: "pcs-h2",
      style: {
        margin: "12px 0 0"
      }
    }, "What clients say.")), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        alignItems: "center",
        gap: 10,
        font: "600 14px var(--font-sans)",
        color: "var(--text-muted)"
      }
    }, /*#__PURE__*/React.createElement(GoogleG, null), " Rated 5.0 on Google")), /*#__PURE__*/React.createElement("div", {
      style: {
        position: "relative"
      }
    }, /*#__PURE__*/React.createElement("button", {
      "aria-label": "Previous reviews",
      className: "pcs-rev-arrow",
      onClick: () => scroll(-1),
      style: {
        left: -10
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "chevronRight",
      size: 22,
      style: {
        transform: "rotate(180deg)"
      }
    })), /*#__PURE__*/React.createElement("button", {
      "aria-label": "Next reviews",
      className: "pcs-rev-arrow",
      onClick: () => scroll(1),
      style: {
        right: -10
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "chevronRight",
      size: 22
    })), /*#__PURE__*/React.createElement("div", {
      ref: trackRef,
      className: "pcs-rev-track",
      style: {
        display: "flex",
        gap: 22,
        overflowX: "auto",
        padding: "4px 2px 10px"
      }
    }, reviews.concat(reviews).map((r, i) => /*#__PURE__*/React.createElement(ReviewCard, {
      key: i,
      r: r
    })))), /*#__PURE__*/React.createElement("div", {
      style: {
        marginTop: 26
      }
    }, /*#__PURE__*/React.createElement("a", {
      href: GOOGLE_REVIEWS_URL,
      target: "_blank",
      rel: "noopener",
      className: "pcs-link-row",
      style: {
        display: "inline-flex",
        alignItems: "center",
        gap: 7,
        font: "700 15px var(--font-sans)",
        color: "var(--pcs-blue)",
        textDecoration: "none"
      }
    }, "See all our reviews on Google ", /*#__PURE__*/React.createElement(Icon, {
      name: "arrowRight",
      size: 17
    })))));
  }
  W.ClientStories = ClientStories;

  /* 7 — Find Your Path */
  function FindYourPath() {
    const {
      Icon
    } = window.PCSIcons;
    const cards = [{
      icon: "key",
      title: "First-time buyer",
      body: "From Agreement in Principle to keys in hand. We guide you through every step and teach you what to expect before you sign anything.",
      link: "Explore First-Time Buyer Mortgages",
      href: "first-time-buyers"
    }, {
      icon: "user",
      title: "Self-employed or complex case",
      body: "Contractor day rates, limited company directors, multiple income streams, adverse credit. We have placed cases other brokers refused.",
      link: "Explore Self-Employed Mortgages",
      href: "self-employed"
    }, {
      icon: "trendingUp",
      title: "Landlord or investor",
      body: "Buy-to-let, HMOs, portfolio finance. Whole of market. We grow with you from your first BTL to your portfolio.",
      link: "Explore Buy to Let",
      href: "buy-to-let"
    }, {
      icon: "shield",
      title: "Protection first",
      body: "Life cover, critical illness, income protection. Independent advice across the full UK protection market.",
      link: "Explore Protection",
      href: "protection"
    }];
    return /*#__PURE__*/React.createElement("section", {
      className: "reveal",
      style: {
        background: "#fff",
        padding: "88px 28px"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        maxWidth: 1200,
        margin: "0 auto"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        maxWidth: 640,
        marginBottom: 44
      }
    }, /*#__PURE__*/React.createElement(Eyebrow, null, "Your Starting Point"), /*#__PURE__*/React.createElement("h2", {
      className: "pcs-h2",
      style: {
        margin: "12px 0 0"
      }
    }, "Not sure where to start?")), /*#__PURE__*/React.createElement("div", {
      className: "pcs-grid-4",
      style: {
        display: "grid",
        gridTemplateColumns: "repeat(4,1fr)",
        gap: 20
      }
    }, cards.map(c => /*#__PURE__*/React.createElement("a", {
      key: c.title,
      href: c.href,
      className: "pcs-path-card",
      style: {
        background: "var(--surface-page)",
        border: "1px solid var(--border-subtle)",
        borderRadius: 18,
        padding: 26,
        textDecoration: "none",
        display: "flex",
        flexDirection: "column"
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        width: 50,
        height: 50,
        borderRadius: 13,
        background: "#fff",
        border: "1px solid var(--border-subtle)",
        color: "var(--pcs-blue)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: c.icon,
      size: 24
    })), /*#__PURE__*/React.createElement("h3", {
      style: {
        font: "700 19px var(--font-display)",
        color: "var(--pcs-ink)",
        margin: "16px 0 0",
        letterSpacing: "-.01em"
      }
    }, c.title), /*#__PURE__*/React.createElement("p", {
      className: "pcs-body",
      style: {
        fontSize: 14.5,
        margin: "8px 0 0"
      }
    }, c.body), /*#__PURE__*/React.createElement("span", {
      style: {
        marginTop: "auto",
        paddingTop: 18,
        font: "700 14px var(--font-sans)",
        color: "var(--pcs-blue)",
        display: "inline-flex",
        alignItems: "center",
        gap: 6
      }
    }, c.link, " ", /*#__PURE__*/React.createElement(Icon, {
      name: "arrowRight",
      size: 15
    })))))));
  }
  W.FindYourPath = FindYourPath;

  /* 8 — Newsletter + 9 — Final CTA, combined band */
  function Newsletter() {
    const {
      Button,
      Input
    } = window.PCSDesignSystem_269f6d;
    const {
      Icon
    } = window.PCSIcons;
    const [sent, setSent] = React.useState(false);
    return /*#__PURE__*/React.createElement("section", {
      className: "reveal",
      style: {
        background: "var(--surface-page)",
        padding: "88px 28px"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        maxWidth: 1100,
        margin: "0 auto",
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        gap: 24
      },
      className: "pcs-cta-grid"
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        background: "#fff",
        border: "1px solid var(--border-subtle)",
        borderRadius: 24,
        padding: 36,
        boxShadow: "var(--shadow-sm)"
      }
    }, /*#__PURE__*/React.createElement("span", {
      className: "pcs-label",
      style: {
        color: "var(--pcs-emerald)"
      }
    }, "Stay Informed"), /*#__PURE__*/React.createElement("h2", {
      style: {
        font: "800 30px/1.1 var(--font-display)",
        letterSpacing: "-.02em",
        color: "var(--pcs-ink)",
        margin: "12px 0 0"
      }
    }, "One email a month. Nothing more."), /*#__PURE__*/React.createElement("p", {
      className: "pcs-body",
      style: {
        fontSize: 16,
        marginTop: 12
      }
    }, "Mortgages, protection, market updates, and upcoming events. No spam. Unsubscribe any time."), sent ? /*#__PURE__*/React.createElement("div", {
      style: {
        marginTop: 22,
        padding: "16px 18px",
        borderRadius: 14,
        background: "var(--pcs-emerald-tint)",
        display: "flex",
        gap: 12,
        alignItems: "flex-start"
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "checkCircle",
      size: 22,
      style: {
        color: "var(--pcs-emerald)",
        flex: "none",
        marginTop: 1
      }
    }), /*#__PURE__*/React.createElement("p", {
      style: {
        margin: 0,
        font: "500 14.5px/1.5 var(--font-sans)",
        color: "var(--pcs-ink)"
      }
    }, "Almost there. We have sent a confirmation email. Please click the link in it to complete your subscription (double opt-in).")) : /*#__PURE__*/React.createElement("form", {
      onSubmit: async e => {
        e.preventDefault();
        const fd = new FormData(e.target);
        fd.append("email_address_check", ""); // Brevo honeypot — must stay empty
        fd.append("locale", "en");
        try {
          // Fire-and-forget post to Brevo. mode:"no-cors" avoids the
          // cross-origin block; Brevo sends the double opt-in email and
          // only adds the contact once they confirm via that email.
          await fetch(window.PCSHome.BREVO_NEWSLETTER_URL, {
            method: "POST",
            mode: "no-cors",
            body: fd
          });
        } catch (err) {}
        setSent(true);
      },
      style: {
        marginTop: 22
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        gap: 10,
        alignItems: "flex-end",
        flexWrap: "wrap"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        flex: "1 1 220px"
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
    })), /*#__PURE__*/React.createElement(Button, {
      type: "submit",
      size: "lg"
    }, "Subscribe")), /*#__PURE__*/React.createElement("p", {
      style: {
        font: "400 12.5px var(--font-sans)",
        color: "var(--text-muted)",
        margin: "12px 0 0"
      }
    }, "By subscribing you agree to our Privacy Policy."))), /*#__PURE__*/React.createElement("div", {
      className: "pcs-spotlight",
      style: {
        background: "var(--pcs-blue)",
        borderRadius: 24,
        padding: 36,
        color: "#fff",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        position: "relative",
        overflow: "hidden"
      }
    }, /*#__PURE__*/React.createElement("img", {
      src: window.__resources && window.__resources.logoSymbolWhite || "assets/logos/pcs-symbol-white.svg",
      alt: "",
      "aria-hidden": "true",
      style: {
        position: "absolute",
        right: -30,
        bottom: -30,
        width: 200,
        opacity: .14
      }
    }), /*#__PURE__*/React.createElement("span", {
      className: "pcs-label",
      style: {
        color: "rgba(255,255,255,.78)"
      }
    }, "Take the Next Step"), /*#__PURE__*/React.createElement("h2", {
      style: {
        font: "800 34px/1.08 var(--font-display)",
        letterSpacing: "-.02em",
        margin: "12px 0 0"
      }
    }, "Ready to talk?"), /*#__PURE__*/React.createElement("p", {
      style: {
        font: "400 17px/1.55 var(--font-sans)",
        color: "rgba(255,255,255,.9)",
        marginTop: 14,
        maxWidth: 380,
        position: "relative"
      }
    }, "Free 15-minute call. No pressure. We will tell you honestly whether we can help."), /*#__PURE__*/React.createElement("div", {
      style: {
        marginTop: 26,
        position: "relative"
      }
    }, /*#__PURE__*/React.createElement(Button, {
      size: "lg",
      variant: "secondary",
      href: "get-started",
      rightIcon: /*#__PURE__*/React.createElement(Icon, {
        name: "arrowRight",
        size: 18
      })
    }, "Get Started")))));
  }
  W.Newsletter = Newsletter;
})();