/* PCS shared icon set — Lucide line icons (2px, rounded caps) inlined as React
   components so the site stays self-contained. Assigns window.PCSIcons.
   Usage: const { Icon } = window.PCSIcons;  <Icon name="home" size={20} /> */
(function () {
  const P = {
    home: "M3 10.5 12 3l9 7.5M5 9.5V21h14V9.5",
    shield: "M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z",
    key: "M14 7a4 4 0 1 1-4 4M14 7l6-4M18.5 4.5 21 7l-3 3-2-2M11 11l-7 7v3h3l1-1v-2h2v-2h2l1-1",
    house2: "M3 10.5 12 3l9 7.5M5 9.5V21h14V9.5M9 21v-6h6v6",
    pound: "M18 7c0-2.2-1.8-4-4-4S10 4.8 10 7v3H7m0 0v3c0 2-1 3-2 4h13M7 13h6",
    phone: "M22 16.92v3a2 2 0 0 1-2.18 2 19.8 19.8 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.12 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92z",
    check: "M20 6 9 17l-5-5",
    checkCircle: "M12 22a10 10 0 1 0 0-20 10 10 0 0 0 0 20zM8 12l3 3 5-6",
    arrowRight: "M5 12h14M13 6l6 6-6 6",
    star: "M12 17.27 18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z",
    menu: "M3 12h18M3 6h18M3 18h18",
    x: "M18 6 6 18M6 6l12 12",
    chevronRight: "M9 6l6 6-6 6",
    chevronDown: "M6 9l6 6 6-6",
    file: "M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8zM14 2v6h6",
    message: "M21 11.5a8.4 8.4 0 0 1-9 8.4 9.9 9.9 0 0 1-4-.8L3 21l1.9-5a8.4 8.4 0 0 1-.8-4 8.5 8.5 0 0 1 17 .5z",
    user: "M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2M12 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8z",
    users: "M17 21v-2a4 4 0 0 0-3-3.87M9 21v-2a4 4 0 0 1 3-3.87M9 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM17 11a4 4 0 0 0 0-8",
    calendar: "M8 2v4M16 2v4M3 10h18M5 4h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2z",
    clock: "M12 22a10 10 0 1 0 0-20 10 10 0 0 0 0 20zM12 6v6l4 2",
    search: "M11 19a8 8 0 1 0 0-16 8 8 0 0 0 0 16zM21 21l-4.3-4.3",
    plus: "M12 5v14M5 12h14",
    mapPin: "M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0zM12 13a3 3 0 1 0 0-6 3 3 0 0 0 0 6z",
    heart: "M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.7l-1-1.1a5.5 5.5 0 0 0-7.8 7.8l1 1.1L12 21l7.8-7.5 1-1.1a5.5 5.5 0 0 0 0-7.8z",
    umbrella: "M12 2v2M12 22a2 2 0 0 1-2-2v-8M2 12a10 10 0 0 1 20 0z",
    mail: "M4 4h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2zM22 7l-10 6L2 7",
    trendingUp: "M22 7 13.5 15.5 8.5 10.5 2 17M16 7h6v6",
    building: "M3 21h18M5 21V5a1 1 0 0 1 1-1h8a1 1 0 0 1 1 1v16M19 21V11a1 1 0 0 0-1-1h-3M9 7h2M9 11h2M9 15h2",
    cap: "M22 10 12 5 2 10l10 5 10-5zM6 12v5c0 1 2.7 2.5 6 2.5s6-1.5 6-2.5v-5M22 10v6",
    calculator: "M7 3h10a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2zM8 7h8M8 11h.01M12 11h.01M16 11h.01M8 15h.01M12 15h.01M16 15h.01",
    quote: "M7 7h4v4c0 3-2 5-4 5M15 7h4v4c0 3-2 5-4 5",
    award: "M12 15a6 6 0 1 0 0-12 6 6 0 0 0 0 12zM8.2 13.9 7 22l5-3 5 3-1.2-8.1",
    scale: "M12 3v18M5 7l-3 7h6zM19 7l-3 7h6zM7 7h10M6 21h12",
    sparkle: "M12 3l1.9 5.1L19 10l-5.1 1.9L12 17l-1.9-5.1L5 10l5.1-1.9z",
    handshake: "M11 17 8.5 14.5a2 2 0 0 1 0-2.8l5-5a2 2 0 0 1 2.8 0L21 11M13 19l1.5 1.5a1.8 1.8 0 0 0 2.6-2.6M3 11l5-5 3 3M3 11v6a2 2 0 0 0 2 2h2",
    facebook: "M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z",
    instagram: "M2 7.5A5.5 5.5 0 0 1 7.5 2h9A5.5 5.5 0 0 1 22 7.5v9a5.5 5.5 0 0 1-5.5 5.5h-9A5.5 5.5 0 0 1 2 16.5zM16 11.4a4 4 0 1 1-7.9 1.2 4 4 0 0 1 7.9-1.2zM17.5 6.5h.01",
    linkedin: "M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6zM6 9v12H2V9zM4 6a2 2 0 1 0 0-4 2 2 0 0 0 0 4z",
    twitter: "M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z",
    tiktok: "M14 4v11.5a3.5 3.5 0 1 1-3.5-3.5M14 4c.4 2.8 2.7 4.9 5.5 5",
    lock: "M5 11h14a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-6a2 2 0 0 1 2-2zM8 11V7a4 4 0 0 1 8 0v4",
    book: "M4 19.5A2.5 2.5 0 0 1 6.5 17H20M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z",
  };

  function Icon({ name, size = 20, strokeWidth = 2, className = "", style, ...rest }) {
    const d = P[name] || P.home;
    return React.createElement(
      "svg",
      {
        viewBox: "0 0 24 24", width: size, height: size, fill: "none",
        stroke: "currentColor", strokeWidth, strokeLinecap: "round",
        strokeLinejoin: "round", className, style: { display: "block", flex: "none", ...style }, ...rest,
      },
      React.createElement("path", { d })
    );
  }

  window.PCSIcons = { Icon, PATHS: P };
})();
