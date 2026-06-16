/* @ds-bundle: {"format":3,"namespace":"PCSDesignSystem_269f6d","components":[{"name":"Button","sourcePath":"components/actions/Button.jsx"},{"name":"IconButton","sourcePath":"components/actions/IconButton.jsx"},{"name":"Avatar","sourcePath":"components/display/Avatar.jsx"},{"name":"Badge","sourcePath":"components/display/Badge.jsx"},{"name":"Card","sourcePath":"components/display/Card.jsx"},{"name":"Stat","sourcePath":"components/display/Stat.jsx"},{"name":"Tag","sourcePath":"components/display/Tag.jsx"},{"name":"Alert","sourcePath":"components/feedback/Alert.jsx"},{"name":"Progress","sourcePath":"components/feedback/Progress.jsx"},{"name":"Steps","sourcePath":"components/feedback/Steps.jsx"},{"name":"Checkbox","sourcePath":"components/forms/Checkbox.jsx"},{"name":"Input","sourcePath":"components/forms/Input.jsx"},{"name":"Select","sourcePath":"components/forms/Select.jsx"},{"name":"Switch","sourcePath":"components/forms/Switch.jsx"},{"name":"Tabs","sourcePath":"components/navigation/Tabs.jsx"}],"sourceHashes":{"components/actions/Button.jsx":"c873d4ac04fb","components/actions/IconButton.jsx":"b0bc7aaadde1","components/display/Avatar.jsx":"1bb5e85c0ef6","components/display/Badge.jsx":"be02d428517f","components/display/Card.jsx":"3523b8d6412f","components/display/Stat.jsx":"65262357cad3","components/display/Tag.jsx":"cf7a3acdd7a6","components/feedback/Alert.jsx":"5cf28df366de","components/feedback/Progress.jsx":"e4159e20bbab","components/feedback/Steps.jsx":"e7f57c4adcc9","components/forms/Checkbox.jsx":"b12bae0bd43e","components/forms/Input.jsx":"7eccc8eac057","components/forms/Select.jsx":"9d81f1be9dcb","components/forms/Switch.jsx":"a11e7194f120","components/navigation/Tabs.jsx":"17ed089262db","ui_kits/_shared/icons.jsx":"a699a0b6205c","ui_kits/portal/portal-screens.jsx":"dcc012cda3ca","ui_kits/portal/portal-shell.jsx":"f4cae2adbd44","ui_kits/website/site-body.jsx":"af400f1da5fb","ui_kits/website/site-parts.jsx":"49b181744728"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.PCSDesignSystem_269f6d = window.PCSDesignSystem_269f6d || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/actions/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* Inject component CSS once when the bundle loads. */
if (typeof document !== "undefined" && !document.getElementById("pcs-button-css")) {
  const el = document.createElement("style");
  el.id = "pcs-button-css";
  el.textContent = `
  .pcs-btn{
    --_bg:var(--pcs-blue); --_fg:#fff; --_bd:transparent; --_bgh:var(--pcs-blue-hover); --_bgp:var(--pcs-blue-press);
    display:inline-flex; align-items:center; justify-content:center; gap:.5em;
    font-family:var(--font-sans); font-weight:700; line-height:1; white-space:nowrap;
    border:1.5px solid var(--_bd); background:var(--_bg); color:var(--_fg);
    border-radius:var(--radius-pill); cursor:pointer; text-decoration:none;
    transition:background var(--dur-fast) var(--ease-out), border-color var(--dur-fast) var(--ease-out),
      transform var(--dur-fast) var(--ease-out), box-shadow var(--dur-fast) var(--ease-out);
    user-select:none;
  }
  .pcs-btn:hover{ background:var(--_bgh); text-decoration:none; }
  .pcs-btn:active{ background:var(--_bgp); transform:translateY(1px); }
  .pcs-btn:focus-visible{ outline:none; box-shadow:var(--focus-ring); }
  .pcs-btn[disabled],.pcs-btn[aria-disabled="true"]{ opacity:.45; cursor:not-allowed; pointer-events:none; }

  .pcs-btn--sm{ font-size:13px; padding:8px 16px; }
  .pcs-btn--md{ font-size:15px; padding:11px 22px; }
  .pcs-btn--lg{ font-size:17px; padding:15px 30px; }
  .pcs-btn--block{ display:flex; width:100%; }

  .pcs-btn--primary{ --_bg:var(--pcs-blue); --_fg:#fff; --_bgh:var(--pcs-blue-hover); --_bgp:var(--pcs-blue-press); box-shadow:var(--shadow-brand); }
  .pcs-btn--primary:hover{ box-shadow:var(--shadow-brand); }
  .pcs-btn--secondary{ --_bg:var(--pcs-emerald); --_fg:#fff; --_bgh:var(--pcs-emerald-hover); --_bgp:var(--pcs-emerald-press); }
  .pcs-btn--outline{ --_bg:transparent; --_fg:var(--pcs-blue); --_bd:var(--border-default); --_bgh:var(--pcs-blue-tint); --_bgp:var(--pcs-blue-tint); }
  .pcs-btn--outline:hover{ border-color:var(--pcs-blue); }
  .pcs-btn--ghost{ --_bg:transparent; --_fg:var(--pcs-ink); --_bgh:var(--surface-sunken); --_bgp:var(--pcs-neutral-200); }
  .pcs-btn--danger{ --_bg:var(--pcs-danger); --_fg:#fff; --_bgh:#b32f25; --_bgp:#9c241b; }
  .pcs-btn__spin{ width:1em; height:1em; border-radius:50%; border:2px solid currentColor; border-top-color:transparent; animation:pcs-btn-spin .6s linear infinite; }
  @keyframes pcs-btn-spin{ to{ transform:rotate(360deg); } }
  `;
  document.head.appendChild(el);
}
function Button({
  variant = "primary",
  size = "md",
  leftIcon,
  rightIcon,
  fullWidth = false,
  loading = false,
  disabled = false,
  as,
  className = "",
  children,
  ...rest
}) {
  const Tag = as || (rest.href ? "a" : "button");
  const cls = ["pcs-btn", `pcs-btn--${variant}`, `pcs-btn--${size}`, fullWidth ? "pcs-btn--block" : "", className].filter(Boolean).join(" ");
  const isDisabled = disabled || loading;
  const tagProps = Tag === "button" ? {
    type: rest.type || "button",
    disabled: isDisabled
  } : {
    "aria-disabled": isDisabled || undefined
  };
  return /*#__PURE__*/React.createElement(Tag, _extends({
    className: cls
  }, tagProps, rest), loading && /*#__PURE__*/React.createElement("span", {
    className: "pcs-btn__spin",
    "aria-hidden": "true"
  }), !loading && leftIcon, children, !loading && rightIcon);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/actions/Button.jsx", error: String((e && e.message) || e) }); }

// components/actions/IconButton.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
if (typeof document !== "undefined" && !document.getElementById("pcs-iconbutton-css")) {
  const el = document.createElement("style");
  el.id = "pcs-iconbutton-css";
  el.textContent = `
  .pcs-iconbtn{
    --_bg:transparent; --_fg:var(--pcs-ink); --_bgh:var(--surface-sunken);
    display:inline-flex; align-items:center; justify-content:center;
    background:var(--_bg); color:var(--_fg); border:1.5px solid transparent;
    border-radius:var(--radius-md); cursor:pointer;
    transition:background var(--dur-fast) var(--ease-out), color var(--dur-fast) var(--ease-out), border-color var(--dur-fast) var(--ease-out);
  }
  .pcs-iconbtn:hover{ background:var(--_bgh); }
  .pcs-iconbtn:active{ transform:translateY(1px); }
  .pcs-iconbtn:focus-visible{ outline:none; box-shadow:var(--focus-ring); }
  .pcs-iconbtn[disabled]{ opacity:.4; cursor:not-allowed; }
  .pcs-iconbtn svg{ width:1.25em; height:1.25em; display:block; }
  .pcs-iconbtn--sm{ width:34px; height:34px; font-size:14px; }
  .pcs-iconbtn--md{ width:42px; height:42px; font-size:16px; }
  .pcs-iconbtn--lg{ width:50px; height:50px; font-size:18px; }
  .pcs-iconbtn--solid{ --_bg:var(--pcs-blue); --_fg:#fff; --_bgh:var(--pcs-blue-hover); }
  .pcs-iconbtn--soft{ --_bg:var(--pcs-blue-tint); --_fg:var(--pcs-blue); --_bgh:#dbe3f7; }
  .pcs-iconbtn--outline{ --_bg:transparent; border-color:var(--border-default); --_bgh:var(--surface-sunken); }
  `;
  document.head.appendChild(el);
}
function IconButton({
  variant = "ghost",
  size = "md",
  label,
  className = "",
  children,
  ...rest
}) {
  const cls = ["pcs-iconbtn", `pcs-iconbtn--${variant}`, `pcs-iconbtn--${size}`, className].filter(Boolean).join(" ");
  return /*#__PURE__*/React.createElement("button", _extends({
    type: "button",
    className: cls,
    "aria-label": label,
    title: label
  }, rest), children);
}
Object.assign(__ds_scope, { IconButton });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/actions/IconButton.jsx", error: String((e && e.message) || e) }); }

// components/display/Avatar.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
if (typeof document !== "undefined" && !document.getElementById("pcs-avatar-css")) {
  const el = document.createElement("style");
  el.id = "pcs-avatar-css";
  el.textContent = `
  .pcs-avatar{
    position:relative; display:inline-flex; align-items:center; justify-content:center;
    flex:none; border-radius:50%; overflow:visible;
    font-family:var(--font-display); font-weight:700; color:#fff; background:var(--pcs-blue);
    user-select:none;
  }
  .pcs-avatar img{ width:100%; height:100%; object-fit:cover; border-radius:50%; }
  .pcs-avatar--sm{ width:32px; height:32px; font-size:12px; }
  .pcs-avatar--md{ width:42px; height:42px; font-size:15px; }
  .pcs-avatar--lg{ width:56px; height:56px; font-size:20px; }
  .pcs-avatar--xl{ width:72px; height:72px; font-size:26px; }
  .pcs-avatar__status{
    position:absolute; right:0; bottom:0; width:28%; height:28%; min-width:8px; min-height:8px;
    border-radius:50%; border:2px solid var(--surface-card);
  }
  .pcs-avatar__status--online{ background:var(--pcs-green-bright); }
  .pcs-avatar__status--busy{ background:var(--pcs-danger); }
  .pcs-avatar__status--away{ background:var(--pcs-gold); }
  `;
  document.head.appendChild(el);
}
const TONES = ["var(--pcs-blue)", "var(--pcs-emerald)", "var(--pcs-ink)", "#5A6173"];
function initialsOf(name = "") {
  return name.trim().split(/\s+/).slice(0, 2).map(p => p[0]).join("").toUpperCase() || "?";
}
function Avatar({
  name = "",
  src,
  size = "md",
  status,
  color,
  className = "",
  ...rest
}) {
  const bg = color || TONES[(name.charCodeAt(0) || 0) % TONES.length];
  return /*#__PURE__*/React.createElement("span", _extends({
    className: ["pcs-avatar", `pcs-avatar--${size}`, className].filter(Boolean).join(" "),
    style: {
      background: src ? "transparent" : bg
    },
    title: name
  }, rest), src ? /*#__PURE__*/React.createElement("img", {
    src: src,
    alt: name
  }) : initialsOf(name), status && /*#__PURE__*/React.createElement("span", {
    className: `pcs-avatar__status pcs-avatar__status--${status}`,
    "aria-hidden": "true"
  }));
}
Object.assign(__ds_scope, { Avatar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/display/Avatar.jsx", error: String((e && e.message) || e) }); }

// components/display/Badge.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
if (typeof document !== "undefined" && !document.getElementById("pcs-badge-css")) {
  const el = document.createElement("style");
  el.id = "pcs-badge-css";
  el.textContent = `
  .pcs-badge{
    display:inline-flex; align-items:center; gap:6px;
    font-family:var(--font-sans); font-weight:700; font-size:12px; line-height:1;
    padding:5px 10px; border-radius:var(--radius-pill); white-space:nowrap;
    border:1px solid transparent;
  }
  .pcs-badge__dot{ width:7px; height:7px; border-radius:50%; background:currentColor; }
  /* soft (default) */
  .pcs-badge--neutral{ background:var(--surface-sunken); color:var(--text-muted); }
  .pcs-badge--blue{ background:var(--pcs-blue-tint); color:var(--pcs-blue); }
  .pcs-badge--success{ background:var(--pcs-success-tint); color:#0b7551; }
  .pcs-badge--warning{ background:var(--pcs-warning-tint); color:#8a6310; }
  .pcs-badge--danger{ background:var(--pcs-danger-tint); color:#9c241b; }
  .pcs-badge--gold{ background:var(--pcs-gold-tint); color:#8a6310; }
  /* solid */
  .pcs-badge--solid.pcs-badge--neutral{ background:var(--pcs-ink); color:#fff; }
  .pcs-badge--solid.pcs-badge--blue{ background:var(--pcs-blue); color:#fff; }
  .pcs-badge--solid.pcs-badge--success{ background:var(--pcs-emerald); color:#fff; }
  .pcs-badge--solid.pcs-badge--warning{ background:var(--pcs-gold); color:#3a2a05; }
  .pcs-badge--solid.pcs-badge--danger{ background:var(--pcs-danger); color:#fff; }
  .pcs-badge--solid.pcs-badge--gold{ background:var(--pcs-gold); color:#3a2a05; }
  /* outline */
  .pcs-badge--outline{ background:transparent; border-color:currentColor; }
  .pcs-badge--outline.pcs-badge--neutral{ color:var(--text-muted); }
  .pcs-badge--outline.pcs-badge--blue{ color:var(--pcs-blue); }
  .pcs-badge--outline.pcs-badge--success{ color:#0b7551; }
  `;
  document.head.appendChild(el);
}
function Badge({
  tone = "neutral",
  variant = "soft",
  dot = false,
  className = "",
  children,
  ...rest
}) {
  const cls = ["pcs-badge", `pcs-badge--${tone}`, variant !== "soft" ? `pcs-badge--${variant}` : "", className].filter(Boolean).join(" ");
  return /*#__PURE__*/React.createElement("span", _extends({
    className: cls
  }, rest), dot && /*#__PURE__*/React.createElement("span", {
    className: "pcs-badge__dot",
    "aria-hidden": "true"
  }), children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/display/Badge.jsx", error: String((e && e.message) || e) }); }

// components/display/Card.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
if (typeof document !== "undefined" && !document.getElementById("pcs-card-css")) {
  const el = document.createElement("style");
  el.id = "pcs-card-css";
  el.textContent = `
  .pcs-card{
    background:var(--surface-card); border:1px solid var(--border-subtle);
    border-radius:var(--radius-card); box-shadow:var(--shadow-sm);
    display:flex; flex-direction:column; overflow:hidden;
  }
  .pcs-card--flat{ box-shadow:none; }
  .pcs-card--raised{ box-shadow:var(--shadow-md); border-color:transparent; }
  .pcs-card--interactive{ cursor:pointer; transition:transform var(--dur-base) var(--ease-out), box-shadow var(--dur-base) var(--ease-out); }
  .pcs-card--interactive:hover{ transform:translateY(-2px); box-shadow:var(--shadow-lg); }
  .pcs-card--accent{ border-top:3px solid var(--pcs-blue); }
  .pcs-card__body{ padding:var(--_pad,24px); display:flex; flex-direction:column; gap:12px; }
  .pcs-card__header{ padding:18px 24px; border-bottom:1px solid var(--border-subtle); display:flex; align-items:center; justify-content:space-between; gap:12px; }
  .pcs-card__title{ font-family:var(--font-display); font-weight:700; font-size:18px; color:var(--text-strong); letter-spacing:-.01em; margin:0; }
  .pcs-card__footer{ padding:16px 24px; border-top:1px solid var(--border-subtle); background:var(--surface-page); display:flex; align-items:center; gap:12px; }
  `;
  document.head.appendChild(el);
}
function Card({
  elevation = "default",
  interactive = false,
  accent = false,
  title,
  header,
  footer,
  padding,
  className = "",
  children,
  ...rest
}) {
  const cls = ["pcs-card", elevation === "flat" ? "pcs-card--flat" : elevation === "raised" ? "pcs-card--raised" : "", interactive ? "pcs-card--interactive" : "", accent ? "pcs-card--accent" : "", className].filter(Boolean).join(" ");
  const bodyStyle = padding != null ? {
    ["--_pad"]: typeof padding === "number" ? padding + "px" : padding
  } : undefined;
  return /*#__PURE__*/React.createElement("div", _extends({
    className: cls
  }, rest), (title || header) && /*#__PURE__*/React.createElement("div", {
    className: "pcs-card__header"
  }, title ? /*#__PURE__*/React.createElement("h3", {
    className: "pcs-card__title"
  }, title) : null, header), /*#__PURE__*/React.createElement("div", {
    className: "pcs-card__body",
    style: bodyStyle
  }, children), footer && /*#__PURE__*/React.createElement("div", {
    className: "pcs-card__footer"
  }, footer));
}
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/display/Card.jsx", error: String((e && e.message) || e) }); }

// components/display/Stat.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
if (typeof document !== "undefined" && !document.getElementById("pcs-stat-css")) {
  const el = document.createElement("style");
  el.id = "pcs-stat-css";
  el.textContent = `
  .pcs-stat{ display:flex; flex-direction:column; gap:6px; font-family:var(--font-sans); }
  .pcs-stat__label{ font-weight:700; font-size:12px; letter-spacing:.12em; text-transform:uppercase; color:var(--text-muted); }
  .pcs-stat__value{ font-family:var(--font-display); font-weight:800; font-size:34px; line-height:1; letter-spacing:-.02em; color:var(--text-strong); }
  .pcs-stat__row{ display:flex; align-items:baseline; gap:10px; }
  .pcs-stat__delta{ display:inline-flex; align-items:center; gap:3px; font-weight:700; font-size:13px; }
  .pcs-stat__delta--up{ color:#0b7551; }
  .pcs-stat__delta--down{ color:var(--pcs-danger); }
  .pcs-stat__delta svg{ width:14px; height:14px; }
  .pcs-stat__sub{ font-size:13px; color:var(--text-muted); }
  `;
  document.head.appendChild(el);
}
function Stat({
  label,
  value,
  delta,
  deltaDirection = "up",
  sub,
  className = "",
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    className: ["pcs-stat", className].filter(Boolean).join(" ")
  }, rest), label && /*#__PURE__*/React.createElement("span", {
    className: "pcs-stat__label"
  }, label), /*#__PURE__*/React.createElement("div", {
    className: "pcs-stat__row"
  }, /*#__PURE__*/React.createElement("span", {
    className: "pcs-stat__value"
  }, value), delta != null && /*#__PURE__*/React.createElement("span", {
    className: `pcs-stat__delta pcs-stat__delta--${deltaDirection}`
  }, /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2.6",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, deltaDirection === "up" ? /*#__PURE__*/React.createElement("path", {
    d: "M7 17V7h10M7 7l10 10"
  }) : /*#__PURE__*/React.createElement("path", {
    d: "M7 7v10h10M7 17L17 7"
  })), delta)), sub && /*#__PURE__*/React.createElement("span", {
    className: "pcs-stat__sub"
  }, sub));
}
Object.assign(__ds_scope, { Stat });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/display/Stat.jsx", error: String((e && e.message) || e) }); }

// components/display/Tag.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
if (typeof document !== "undefined" && !document.getElementById("pcs-tag-css")) {
  const el = document.createElement("style");
  el.id = "pcs-tag-css";
  el.textContent = `
  .pcs-tag{
    display:inline-flex; align-items:center; gap:7px;
    font-family:var(--font-sans); font-weight:600; font-size:13px; line-height:1;
    padding:7px 12px; border-radius:var(--radius-sm);
    background:var(--surface-card); border:1.5px solid var(--border-default); color:var(--text-strong);
    transition:border-color var(--dur-fast) var(--ease-out), background var(--dur-fast) var(--ease-out);
  }
  .pcs-tag--selectable{ cursor:pointer; }
  .pcs-tag--selectable:hover{ border-color:var(--pcs-blue); background:var(--pcs-blue-tint); }
  .pcs-tag--selected{ background:var(--pcs-blue); border-color:var(--pcs-blue); color:#fff; }
  .pcs-tag__remove{
    display:inline-flex; align-items:center; justify-content:center; cursor:pointer;
    width:16px; height:16px; border-radius:50%; border:none; background:transparent; color:inherit; opacity:.65; padding:0;
  }
  .pcs-tag__remove:hover{ opacity:1; }
  .pcs-tag__remove svg{ width:12px; height:12px; }
  `;
  document.head.appendChild(el);
}
function Tag({
  selected = false,
  selectable = false,
  onRemove,
  className = "",
  children,
  ...rest
}) {
  const cls = ["pcs-tag", selectable ? "pcs-tag--selectable" : "", selected ? "pcs-tag--selected" : "", className].filter(Boolean).join(" ");
  return /*#__PURE__*/React.createElement("span", _extends({
    className: cls
  }, rest), children, onRemove && /*#__PURE__*/React.createElement("button", {
    type: "button",
    className: "pcs-tag__remove",
    "aria-label": "Remove",
    onClick: e => {
      e.stopPropagation();
      onRemove(e);
    }
  }, /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2.4",
    strokeLinecap: "round"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M18 6L6 18M6 6l12 12"
  }))));
}
Object.assign(__ds_scope, { Tag });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/display/Tag.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Alert.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
if (typeof document !== "undefined" && !document.getElementById("pcs-alert-css")) {
  const el = document.createElement("style");
  el.id = "pcs-alert-css";
  el.textContent = `
  .pcs-alert{
    display:flex; gap:12px; align-items:flex-start;
    font-family:var(--font-sans); border-radius:var(--radius-md);
    padding:14px 16px; border:1px solid transparent;
  }
  .pcs-alert__icon{ flex:none; width:20px; height:20px; margin-top:1px; }
  .pcs-alert__icon svg{ width:20px; height:20px; }
  .pcs-alert__body{ display:flex; flex-direction:column; gap:3px; }
  .pcs-alert__title{ font-weight:700; font-size:14.5px; color:var(--text-strong); }
  .pcs-alert__msg{ font-size:14px; color:var(--text-body); line-height:1.5; }
  .pcs-alert--info{ background:var(--pcs-blue-tint); border-color:#cfdaf6; }
  .pcs-alert--info .pcs-alert__icon{ color:var(--pcs-blue); }
  .pcs-alert--success{ background:var(--pcs-success-tint); border-color:#c4e7d6; }
  .pcs-alert--success .pcs-alert__icon{ color:var(--pcs-emerald); }
  .pcs-alert--warning{ background:var(--pcs-warning-tint); border-color:#efe0b3; }
  .pcs-alert--warning .pcs-alert__icon{ color:#b9831a; }
  .pcs-alert--danger{ background:var(--pcs-danger-tint); border-color:#f3cfca; }
  .pcs-alert--danger .pcs-alert__icon{ color:var(--pcs-danger); }
  `;
  document.head.appendChild(el);
}
const ICONS = {
  info: /*#__PURE__*/React.createElement("path", {
    d: "M12 16v-4M12 8h.01M12 22a10 10 0 1 0 0-20 10 10 0 0 0 0 20z"
  }),
  success: /*#__PURE__*/React.createElement("path", {
    d: "M12 22a10 10 0 1 0 0-20 10 10 0 0 0 0 20zM8 12l3 3 5-6"
  }),
  warning: /*#__PURE__*/React.createElement("path", {
    d: "M12 9v4M12 17h.01M10.3 3.2 1.8 18a2 2 0 0 0 1.7 3h17a2 2 0 0 0 1.7-3L13.7 3.2a2 2 0 0 0-3.4 0z"
  }),
  danger: /*#__PURE__*/React.createElement("path", {
    d: "M12 8v5M12 16h.01M12 22a10 10 0 1 0 0-20 10 10 0 0 0 0 20z"
  })
};
function Alert({
  tone = "info",
  title,
  className = "",
  children,
  icon,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    className: ["pcs-alert", `pcs-alert--${tone}`, className].filter(Boolean).join(" "),
    role: "status"
  }, rest), /*#__PURE__*/React.createElement("span", {
    className: "pcs-alert__icon",
    "aria-hidden": "true"
  }, icon || /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, ICONS[tone])), /*#__PURE__*/React.createElement("div", {
    className: "pcs-alert__body"
  }, title && /*#__PURE__*/React.createElement("span", {
    className: "pcs-alert__title"
  }, title), children && /*#__PURE__*/React.createElement("span", {
    className: "pcs-alert__msg"
  }, children)));
}
Object.assign(__ds_scope, { Alert });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Alert.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Progress.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
if (typeof document !== "undefined" && !document.getElementById("pcs-progress-css")) {
  const el = document.createElement("style");
  el.id = "pcs-progress-css";
  el.textContent = `
  .pcs-progress{ display:flex; flex-direction:column; gap:8px; font-family:var(--font-sans); }
  .pcs-progress__head{ display:flex; align-items:baseline; justify-content:space-between; }
  .pcs-progress__label{ font-weight:600; font-size:14px; color:var(--text-strong); }
  .pcs-progress__value{ font-weight:700; font-size:13px; color:var(--text-muted); font-variant-numeric:tabular-nums; }
  .pcs-progress__track{ height:10px; border-radius:999px; background:var(--surface-sunken); overflow:hidden; }
  .pcs-progress__fill{ height:100%; border-radius:999px; background:var(--pcs-blue); transition:width var(--dur-slow) var(--ease-out); }
  .pcs-progress--success .pcs-progress__fill{ background:var(--pcs-emerald); }
  .pcs-progress--gold .pcs-progress__fill{ background:var(--pcs-gold); }
  `;
  document.head.appendChild(el);
}
function Progress({
  value = 0,
  max = 100,
  label,
  showValue = true,
  tone = "blue",
  className = "",
  ...rest
}) {
  const pct = Math.max(0, Math.min(100, value / max * 100));
  return /*#__PURE__*/React.createElement("div", _extends({
    className: ["pcs-progress", tone !== "blue" ? `pcs-progress--${tone}` : "", className].filter(Boolean).join(" ")
  }, rest), (label || showValue) && /*#__PURE__*/React.createElement("div", {
    className: "pcs-progress__head"
  }, label && /*#__PURE__*/React.createElement("span", {
    className: "pcs-progress__label"
  }, label), showValue && /*#__PURE__*/React.createElement("span", {
    className: "pcs-progress__value"
  }, Math.round(pct), "%")), /*#__PURE__*/React.createElement("div", {
    className: "pcs-progress__track",
    role: "progressbar",
    "aria-valuenow": value,
    "aria-valuemin": 0,
    "aria-valuemax": max
  }, /*#__PURE__*/React.createElement("div", {
    className: "pcs-progress__fill",
    style: {
      width: pct + "%"
    }
  })));
}
Object.assign(__ds_scope, { Progress });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Progress.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Steps.jsx
try { (() => {
if (typeof document !== "undefined" && !document.getElementById("pcs-steps-css")) {
  const el = document.createElement("style");
  el.id = "pcs-steps-css";
  el.textContent = `
  .pcs-steps{ display:flex; font-family:var(--font-sans); gap:0; }
  .pcs-steps--vertical{ flex-direction:column; }
  .pcs-step{ display:flex; align-items:flex-start; gap:12px; position:relative; }
  .pcs-steps--horizontal .pcs-step{ flex:1; flex-direction:column; align-items:center; text-align:center; gap:8px; }
  .pcs-steps--vertical .pcs-step{ align-items:flex-start; }
  .pcs-step__marker{
    flex:none; width:30px; height:30px; border-radius:50%; display:flex; align-items:center; justify-content:center;
    font-weight:700; font-size:14px; border:2px solid var(--border-default); background:var(--surface-card); color:var(--text-muted); z-index:1;
  }
  .pcs-step__marker svg{ width:16px; height:16px; }
  .pcs-step--complete .pcs-step__marker{ background:var(--pcs-emerald); border-color:var(--pcs-emerald); color:#fff; }
  .pcs-step--current .pcs-step__marker{ background:var(--pcs-blue); border-color:var(--pcs-blue); color:#fff; box-shadow:0 0 0 4px var(--pcs-blue-tint); }
  .pcs-step__body{ display:block; flex:1 1 auto; min-width:0; padding-top:3px; }
  .pcs-steps--horizontal .pcs-step__body{ flex:0 1 auto; padding-top:0; }
  .pcs-step__title{ display:block; font-weight:700; font-size:14px; line-height:1.3; color:var(--text-strong); }
  .pcs-step--upcoming .pcs-step__title{ color:var(--text-muted); }
  .pcs-step__desc{ display:block; margin-top:3px; font-size:12.5px; line-height:1.4; color:var(--text-muted); }
  /* connector lines */
  .pcs-steps--horizontal .pcs-step:not(:last-child)::after{
    content:""; position:absolute; top:14px; left:calc(50% + 20px); right:calc(-50% + 20px); height:2px; background:var(--border-default);
  }
  .pcs-steps--horizontal .pcs-step--complete:not(:last-child)::after{ background:var(--pcs-emerald); }
  .pcs-steps--vertical .pcs-step{ padding-bottom:22px; }
  .pcs-steps--vertical .pcs-step:not(:last-child)::after{
    content:""; position:absolute; top:30px; bottom:0; left:14px; width:2px; background:var(--border-default);
  }
  .pcs-steps--vertical .pcs-step--complete:not(:last-child)::after{ background:var(--pcs-emerald); }
  `;
  document.head.appendChild(el);
}
const CHECK = /*#__PURE__*/React.createElement("svg", {
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: "3",
  strokeLinecap: "round",
  strokeLinejoin: "round"
}, /*#__PURE__*/React.createElement("path", {
  d: "M20 6L9 17l-5-5"
}));
function Steps({
  steps = [],
  current = 0,
  orientation = "horizontal",
  className = ""
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: ["pcs-steps", `pcs-steps--${orientation}`, className].filter(Boolean).join(" ")
  }, steps.map((s, i) => {
    const status = i < current ? "complete" : i === current ? "current" : "upcoming";
    const item = typeof s === "string" ? {
      title: s
    } : s;
    return /*#__PURE__*/React.createElement("div", {
      key: i,
      className: `pcs-step pcs-step--${status}`
    }, /*#__PURE__*/React.createElement("span", {
      className: "pcs-step__marker"
    }, status === "complete" ? CHECK : i + 1), /*#__PURE__*/React.createElement("span", {
      className: "pcs-step__body"
    }, /*#__PURE__*/React.createElement("span", {
      className: "pcs-step__title"
    }, item.title), item.desc && /*#__PURE__*/React.createElement("span", {
      className: "pcs-step__desc"
    }, item.desc)));
  }));
}
Object.assign(__ds_scope, { Steps });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Steps.jsx", error: String((e && e.message) || e) }); }

// components/forms/Checkbox.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
if (typeof document !== "undefined" && !document.getElementById("pcs-checkbox-css")) {
  const el = document.createElement("style");
  el.id = "pcs-checkbox-css";
  el.textContent = `
  .pcs-check{ display:inline-flex; align-items:flex-start; gap:10px; font-family:var(--font-sans); cursor:pointer; user-select:none; }
  .pcs-check input{ position:absolute; opacity:0; width:0; height:0; }
  .pcs-check__box{
    flex:none; width:20px; height:20px; margin-top:1px; border-radius:6px;
    border:1.5px solid var(--border-default); background:var(--surface-card);
    display:flex; align-items:center; justify-content:center; color:#fff;
    transition:background var(--dur-fast) var(--ease-out), border-color var(--dur-fast) var(--ease-out);
  }
  .pcs-check__box svg{ width:14px; height:14px; opacity:0; transform:scale(.6); transition:opacity var(--dur-fast), transform var(--dur-fast) var(--ease-out); }
  .pcs-check:hover .pcs-check__box{ border-color:var(--pcs-blue); }
  .pcs-check input:checked + .pcs-check__box{ background:var(--pcs-blue); border-color:var(--pcs-blue); }
  .pcs-check input:checked + .pcs-check__box svg{ opacity:1; transform:scale(1); }
  .pcs-check input:focus-visible + .pcs-check__box{ box-shadow:var(--focus-ring); }
  .pcs-check input:disabled + .pcs-check__box{ background:var(--surface-sunken); border-color:var(--border-subtle); }
  .pcs-check--disabled{ opacity:.55; cursor:not-allowed; }
  .pcs-check__text{ font-size:15px; color:var(--text-strong); line-height:1.4; }
  .pcs-check__text small{ display:block; font-size:13px; color:var(--text-muted); font-weight:400; }
  `;
  document.head.appendChild(el);
}
function Checkbox({
  label,
  description,
  disabled = false,
  className = "",
  children,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("label", {
    className: ["pcs-check", disabled ? "pcs-check--disabled" : "", className].filter(Boolean).join(" ")
  }, /*#__PURE__*/React.createElement("input", _extends({
    type: "checkbox",
    disabled: disabled
  }, rest)), /*#__PURE__*/React.createElement("span", {
    className: "pcs-check__box",
    "aria-hidden": "true"
  }, /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "3.2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M20 6L9 17l-5-5"
  }))), (label || description || children) && /*#__PURE__*/React.createElement("span", {
    className: "pcs-check__text"
  }, label || children, description && /*#__PURE__*/React.createElement("small", null, description)));
}
Object.assign(__ds_scope, { Checkbox });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Checkbox.jsx", error: String((e && e.message) || e) }); }

// components/forms/Input.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
if (typeof document !== "undefined" && !document.getElementById("pcs-field-css")) {
  const el = document.createElement("style");
  el.id = "pcs-field-css";
  el.textContent = `
  .pcs-field{ display:flex; flex-direction:column; gap:6px; font-family:var(--font-sans); }
  .pcs-field__label{ font-weight:600; font-size:14px; color:var(--text-strong); }
  .pcs-field__req{ color:var(--pcs-danger); margin-left:2px; }
  .pcs-field__hint{ font-size:12.5px; color:var(--text-muted); }
  .pcs-field__error{ font-size:12.5px; color:var(--pcs-danger); font-weight:600; }
  .pcs-input{
    font-family:var(--font-sans); font-size:15px; color:var(--text-strong);
    background:var(--surface-card); border:1.5px solid var(--border-default);
    border-radius:var(--radius-md); padding:11px 14px; width:100%;
    transition:border-color var(--dur-fast) var(--ease-out), box-shadow var(--dur-fast) var(--ease-out);
  }
  .pcs-input::placeholder{ color:var(--text-disabled); }
  .pcs-input:hover{ border-color:var(--pcs-neutral-400); }
  .pcs-input:focus{ outline:none; border-color:var(--pcs-blue); box-shadow:var(--focus-ring); }
  .pcs-input:disabled{ background:var(--surface-sunken); color:var(--text-disabled); cursor:not-allowed; }
  .pcs-input--invalid{ border-color:var(--pcs-danger); }
  .pcs-input--invalid:focus{ box-shadow:0 0 0 4px rgba(200,54,43,.18); }
  .pcs-input__wrap{ position:relative; display:flex; align-items:center; }
  .pcs-input__wrap .pcs-input{ padding-left:var(--_pl,14px); padding-right:var(--_pr,14px); }
  .pcs-input__adorn{ position:absolute; display:flex; align-items:center; color:var(--text-muted); pointer-events:none; }
  .pcs-input__adorn--l{ left:13px; } .pcs-input__adorn--r{ right:13px; }
  .pcs-input__adorn svg{ width:18px; height:18px; }
  `;
  document.head.appendChild(el);
}
function Input({
  label,
  hint,
  error,
  required = false,
  id,
  leftIcon,
  rightIcon,
  className = "",
  ...rest
}) {
  const fid = id || (label ? "in-" + label.replace(/\s+/g, "-").toLowerCase() : undefined);
  const pad = {
    ["--_pl"]: leftIcon ? "40px" : undefined,
    ["--_pr"]: rightIcon ? "40px" : undefined
  };
  const inputCls = ["pcs-input", error ? "pcs-input--invalid" : "", className].filter(Boolean).join(" ");
  return /*#__PURE__*/React.createElement("div", {
    className: "pcs-field"
  }, label && /*#__PURE__*/React.createElement("label", {
    className: "pcs-field__label",
    htmlFor: fid
  }, label, required && /*#__PURE__*/React.createElement("span", {
    className: "pcs-field__req"
  }, "*")), /*#__PURE__*/React.createElement("div", {
    className: "pcs-input__wrap",
    style: pad
  }, leftIcon && /*#__PURE__*/React.createElement("span", {
    className: "pcs-input__adorn pcs-input__adorn--l"
  }, leftIcon), /*#__PURE__*/React.createElement("input", _extends({
    id: fid,
    className: inputCls,
    "aria-invalid": !!error
  }, rest)), rightIcon && /*#__PURE__*/React.createElement("span", {
    className: "pcs-input__adorn pcs-input__adorn--r"
  }, rightIcon)), error ? /*#__PURE__*/React.createElement("span", {
    className: "pcs-field__error"
  }, error) : hint ? /*#__PURE__*/React.createElement("span", {
    className: "pcs-field__hint"
  }, hint) : null);
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Input.jsx", error: String((e && e.message) || e) }); }

// components/forms/Select.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
if (typeof document !== "undefined" && !document.getElementById("pcs-select-css")) {
  const el = document.createElement("style");
  el.id = "pcs-select-css";
  el.textContent = `
  .pcs-field{ display:flex; flex-direction:column; gap:6px; font-family:var(--font-sans); }
  .pcs-field__label{ font-weight:600; font-size:14px; color:var(--text-strong); }
  .pcs-field__req{ color:var(--pcs-danger); margin-left:2px; }
  .pcs-field__hint{ font-size:12.5px; color:var(--text-muted); }
  .pcs-field__error{ font-size:12.5px; color:var(--pcs-danger); font-weight:600; }
  .pcs-select__wrap{ position:relative; display:flex; align-items:center; }
  .pcs-select{
    appearance:none; -webkit-appearance:none;
    font-family:var(--font-sans); font-size:15px; color:var(--text-strong);
    background:var(--surface-card); border:1.5px solid var(--border-default);
    border-radius:var(--radius-md); padding:11px 40px 11px 14px; width:100%; cursor:pointer;
    transition:border-color var(--dur-fast) var(--ease-out), box-shadow var(--dur-fast) var(--ease-out);
  }
  .pcs-select:hover{ border-color:var(--pcs-neutral-400); }
  .pcs-select:focus{ outline:none; border-color:var(--pcs-blue); box-shadow:var(--focus-ring); }
  .pcs-select:disabled{ background:var(--surface-sunken); color:var(--text-disabled); cursor:not-allowed; }
  .pcs-select__chev{ position:absolute; right:13px; pointer-events:none; color:var(--text-muted); display:flex; }
  `;
  document.head.appendChild(el);
}
function Select({
  label,
  hint,
  error,
  required = false,
  id,
  options = [],
  placeholder,
  className = "",
  children,
  ...rest
}) {
  const fid = id || (label ? "sel-" + label.replace(/\s+/g, "-").toLowerCase() : undefined);
  return /*#__PURE__*/React.createElement("div", {
    className: "pcs-field"
  }, label && /*#__PURE__*/React.createElement("label", {
    className: "pcs-field__label",
    htmlFor: fid
  }, label, required && /*#__PURE__*/React.createElement("span", {
    className: "pcs-field__req"
  }, "*")), /*#__PURE__*/React.createElement("div", {
    className: "pcs-select__wrap"
  }, /*#__PURE__*/React.createElement("select", _extends({
    id: fid,
    className: "pcs-select " + className,
    "aria-invalid": !!error
  }, rest), placeholder && /*#__PURE__*/React.createElement("option", {
    value: "",
    disabled: true
  }, placeholder), options.map(o => {
    const opt = typeof o === "string" ? {
      value: o,
      label: o
    } : o;
    return /*#__PURE__*/React.createElement("option", {
      key: opt.value,
      value: opt.value
    }, opt.label);
  }), children), /*#__PURE__*/React.createElement("span", {
    className: "pcs-select__chev",
    "aria-hidden": "true"
  }, /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 24 24",
    width: "18",
    height: "18",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2.2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M6 9l6 6 6-6"
  })))), error ? /*#__PURE__*/React.createElement("span", {
    className: "pcs-field__error"
  }, error) : hint ? /*#__PURE__*/React.createElement("span", {
    className: "pcs-field__hint"
  }, hint) : null);
}
Object.assign(__ds_scope, { Select });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Select.jsx", error: String((e && e.message) || e) }); }

// components/forms/Switch.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
if (typeof document !== "undefined" && !document.getElementById("pcs-switch-css")) {
  const el = document.createElement("style");
  el.id = "pcs-switch-css";
  el.textContent = `
  .pcs-switch{ display:inline-flex; align-items:center; gap:10px; font-family:var(--font-sans); cursor:pointer; user-select:none; }
  .pcs-switch input{ position:absolute; opacity:0; width:0; height:0; }
  .pcs-switch__track{
    flex:none; width:42px; height:24px; border-radius:999px; background:var(--pcs-neutral-300);
    padding:3px; transition:background var(--dur-base) var(--ease-out);
  }
  .pcs-switch__thumb{ width:18px; height:18px; border-radius:50%; background:#fff; box-shadow:var(--shadow-sm); transform:translateX(0); transition:transform var(--dur-base) var(--ease-out); }
  .pcs-switch input:checked + .pcs-switch__track{ background:var(--pcs-emerald); }
  .pcs-switch input:checked + .pcs-switch__track .pcs-switch__thumb{ transform:translateX(18px); }
  .pcs-switch input:focus-visible + .pcs-switch__track{ box-shadow:var(--focus-ring); }
  .pcs-switch--disabled{ opacity:.5; cursor:not-allowed; }
  .pcs-switch__label{ font-size:15px; color:var(--text-strong); }
  `;
  document.head.appendChild(el);
}
function Switch({
  label,
  disabled = false,
  className = "",
  ...rest
}) {
  return /*#__PURE__*/React.createElement("label", {
    className: ["pcs-switch", disabled ? "pcs-switch--disabled" : "", className].filter(Boolean).join(" ")
  }, /*#__PURE__*/React.createElement("input", _extends({
    type: "checkbox",
    role: "switch",
    disabled: disabled
  }, rest)), /*#__PURE__*/React.createElement("span", {
    className: "pcs-switch__track",
    "aria-hidden": "true"
  }, /*#__PURE__*/React.createElement("span", {
    className: "pcs-switch__thumb"
  })), label && /*#__PURE__*/React.createElement("span", {
    className: "pcs-switch__label"
  }, label));
}
Object.assign(__ds_scope, { Switch });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Switch.jsx", error: String((e && e.message) || e) }); }

// components/navigation/Tabs.jsx
try { (() => {
if (typeof document !== "undefined" && !document.getElementById("pcs-tabs-css")) {
  const el = document.createElement("style");
  el.id = "pcs-tabs-css";
  el.textContent = `
  .pcs-tabs{ display:flex; gap:4px; font-family:var(--font-sans); }
  .pcs-tabs--underline{ border-bottom:1.5px solid var(--border-subtle); gap:24px; }
  .pcs-tabs--pill{ background:var(--surface-sunken); padding:4px; border-radius:var(--radius-pill); gap:2px; display:inline-flex; }
  .pcs-tab{
    appearance:none; border:none; background:transparent; cursor:pointer;
    font-family:var(--font-sans); font-weight:600; font-size:15px; color:var(--text-muted);
    display:inline-flex; align-items:center; gap:7px;
    transition:color var(--dur-fast) var(--ease-out), background var(--dur-fast) var(--ease-out);
  }
  .pcs-tab:focus-visible{ outline:none; box-shadow:var(--focus-ring); border-radius:var(--radius-sm); }
  .pcs-tabs--underline .pcs-tab{ padding:12px 2px; position:relative; }
  .pcs-tabs--underline .pcs-tab::after{ content:""; position:absolute; left:0; right:0; bottom:-1.5px; height:2.5px; background:var(--pcs-blue); border-radius:2px 2px 0 0; transform:scaleX(0); transition:transform var(--dur-base) var(--ease-out); }
  .pcs-tabs--underline .pcs-tab:hover{ color:var(--text-strong); }
  .pcs-tabs--underline .pcs-tab[aria-selected="true"]{ color:var(--pcs-blue); }
  .pcs-tabs--underline .pcs-tab[aria-selected="true"]::after{ transform:scaleX(1); }
  .pcs-tabs--pill .pcs-tab{ padding:8px 18px; border-radius:var(--radius-pill); }
  .pcs-tabs--pill .pcs-tab:hover{ color:var(--text-strong); }
  .pcs-tabs--pill .pcs-tab[aria-selected="true"]{ background:var(--surface-card); color:var(--pcs-blue); box-shadow:var(--shadow-xs); }
  .pcs-tab__count{ font-size:12px; font-weight:700; padding:1px 7px; border-radius:999px; background:var(--surface-sunken); color:var(--text-muted); }
  .pcs-tab[aria-selected="true"] .pcs-tab__count{ background:var(--pcs-blue-tint); color:var(--pcs-blue); }
  `;
  document.head.appendChild(el);
}
function Tabs({
  items = [],
  value,
  defaultValue,
  onChange,
  variant = "underline",
  className = ""
}) {
  const [internal, setInternal] = React.useState(defaultValue ?? (items[0] && (typeof items[0] === "string" ? items[0] : items[0].value)));
  const active = value !== undefined ? value : internal;
  const select = v => {
    if (value === undefined) setInternal(v);
    onChange && onChange(v);
  };
  return /*#__PURE__*/React.createElement("div", {
    className: ["pcs-tabs", `pcs-tabs--${variant}`, className].filter(Boolean).join(" "),
    role: "tablist"
  }, items.map(it => {
    const tab = typeof it === "string" ? {
      value: it,
      label: it
    } : it;
    const selected = tab.value === active;
    return /*#__PURE__*/React.createElement("button", {
      key: tab.value,
      type: "button",
      role: "tab",
      "aria-selected": selected,
      className: "pcs-tab",
      onClick: () => select(tab.value)
    }, tab.label, tab.count != null && /*#__PURE__*/React.createElement("span", {
      className: "pcs-tab__count"
    }, tab.count));
  }));
}
Object.assign(__ds_scope, { Tabs });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/Tabs.jsx", error: String((e && e.message) || e) }); }

// ui_kits/_shared/icons.jsx
try { (() => {
/* PCS shared icon set — Lucide line icons (2px, rounded caps) inlined as React
   components so kits stay self-contained. Assigns window.PCSIcons.
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
    arrowRight: "M5 12h14M13 6l6 6-6 6",
    star: "M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z",
    star: "M12 17.27 18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z",
    menu: "M3 12h18M3 6h18M3 18h18",
    chevronRight: "M9 6l6 6-6 6",
    chevronDown: "M6 9l6 6 6-6",
    file: "M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8zM14 2v6h6",
    upload: "M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4M17 8l-5-5-5 5M12 3v12",
    message: "M21 11.5a8.4 8.4 0 0 1-9 8.4 9.9 9.9 0 0 1-4-.8L3 21l1.9-5a8.4 8.4 0 0 1-.8-4 8.5 8.5 0 0 1 17 .5z",
    bell: "M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9M10.3 21a1.94 1.94 0 0 0 3.4 0",
    user: "M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2M12 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8z",
    calendar: "M8 2v4M16 2v4M3 10h18M5 4h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2z",
    clock: "M12 22a10 10 0 1 0 0-20 10 10 0 0 0 0 20zM12 6v6l4 2",
    search: "M11 19a8 8 0 1 0 0-16 8 8 0 0 0 0 16zM21 21l-4.3-4.3",
    settings: "M12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6zM19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09a1.65 1.65 0 0 0-1.08-1.51 1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09a1.65 1.65 0 0 0 1.51-1.08 1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z",
    logout: "M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4M16 17l5-5-5-5M21 12H9",
    plus: "M12 5v14M5 12h14",
    mapPin: "M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0zM12 13a3 3 0 1 0 0-6 3 3 0 0 0 0 6z",
    heart: "M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.7l-1-1.1a5.5 5.5 0 0 0-7.8 7.8l1 1.1L12 21l7.8-7.5 1-1.1a5.5 5.5 0 0 0 0-7.8z",
    lock: "M5 11h14a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-6a2 2 0 0 1 2-2zM8 11V7a4 4 0 0 1 8 0v4",
    mail: "M4 4h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2zM22 7l-10 6L2 7",
    trendingUp: "M22 7 13.5 15.5 8.5 10.5 2 17M16 7h6v6",
    layout: "M3 5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2zM3 9h18M9 21V9"
  };
  function Icon({
    name,
    size = 20,
    strokeWidth = 2,
    className = "",
    style,
    ...rest
  }) {
    const d = P[name] || P.home;
    return React.createElement("svg", {
      viewBox: "0 0 24 24",
      width: size,
      height: size,
      fill: "none",
      stroke: "currentColor",
      strokeWidth,
      strokeLinecap: "round",
      strokeLinejoin: "round",
      className,
      style: {
        display: "block",
        flex: "none",
        ...style
      },
      ...rest
    }, React.createElement("path", {
      d
    }));
  }
  window.PCSIcons = {
    Icon,
    PATHS: P
  };
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/_shared/icons.jsx", error: String((e && e.message) || e) }); }

// ui_kits/portal/portal-screens.jsx
try { (() => {
/* PCS client portal — screens: Dashboard, Application, Documents, Messages, Settings.
   Extends window.PCSPortal. */
(function () {
  const W = window.PCSPortal = window.PCSPortal || {};
  const PAGE = {
    maxWidth: 1040,
    margin: "0 auto",
    padding: "28px",
    display: "flex",
    flexDirection: "column",
    gap: 22
  };
  function Dashboard({
    onNav
  }) {
    const {
      Card,
      Steps,
      Progress,
      Alert,
      Button,
      Badge,
      Avatar,
      Stat
    } = window.PCSDesignSystem_269f6d;
    const {
      Icon
    } = window.PCSIcons;
    return /*#__PURE__*/React.createElement("div", {
      style: PAGE
    }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h2", {
      style: {
        font: "800 28px var(--font-display)",
        letterSpacing: "-.02em",
        color: "var(--pcs-ink)",
        margin: 0
      }
    }, "Good afternoon, Jane"), /*#__PURE__*/React.createElement("p", {
      className: "pcs-body",
      style: {
        margin: "4px 0 0"
      }
    }, "Here's where your mortgage application stands today.")), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "grid",
        gridTemplateColumns: "1.55fr 1fr",
        gap: 22,
        alignItems: "start"
      },
      className: "pcs-dash-grid"
    }, /*#__PURE__*/React.createElement(Card, {
      padding: 26
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between"
      }
    }, /*#__PURE__*/React.createElement("h3", {
      style: {
        font: "700 18px var(--font-display)",
        color: "var(--pcs-ink)",
        margin: 0
      }
    }, "Application progress"), /*#__PURE__*/React.createElement(Badge, {
      tone: "success",
      dot: true
    }, "On track")), /*#__PURE__*/React.createElement("div", {
      style: {
        margin: "22px 0 6px"
      }
    }, /*#__PURE__*/React.createElement(Steps, {
      current: 2,
      steps: ["Apply", "Verify", "Advice", "Offer", "Complete"]
    })), /*#__PURE__*/React.createElement(Progress, {
      value: 60,
      tone: "success",
      showValue: false,
      style: {
        marginTop: 14
      }
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        marginTop: 18
      }
    }, /*#__PURE__*/React.createElement(Alert, {
      tone: "info",
      title: "Next: upload your proof of income"
    }, "We need your last 3 months' payslips to move to the mortgage-advice stage.")), /*#__PURE__*/React.createElement(Button, {
      style: {
        marginTop: 16,
        alignSelf: "flex-start"
      },
      onClick: () => onNav("documents"),
      rightIcon: /*#__PURE__*/React.createElement(Icon, {
        name: "upload",
        size: 17
      })
    }, "Upload documents")), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        flexDirection: "column",
        gap: 18
      }
    }, /*#__PURE__*/React.createElement(Card, {
      padding: 22
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        font: "700 12px var(--font-sans)",
        letterSpacing: ".12em",
        textTransform: "uppercase",
        color: "var(--text-muted)",
        marginBottom: 4
      }
    }, "Your adviser"), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        alignItems: "center",
        gap: 12
      }
    }, /*#__PURE__*/React.createElement(Avatar, {
      name: "Marcus Reid",
      size: "lg",
      status: "online"
    }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
      style: {
        font: "700 16px var(--font-display)",
        color: "var(--pcs-ink)"
      }
    }, "Marcus Reid"), /*#__PURE__*/React.createElement("div", {
      style: {
        font: "500 13px var(--font-sans)",
        color: "var(--text-muted)"
      }
    }, "Senior mortgage adviser"))), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        gap: 8,
        marginTop: 8
      }
    }, /*#__PURE__*/React.createElement(Button, {
      size: "sm",
      variant: "outline",
      fullWidth: true,
      leftIcon: /*#__PURE__*/React.createElement(Icon, {
        name: "message",
        size: 16
      }),
      onClick: () => onNav("messages")
    }, "Message"), /*#__PURE__*/React.createElement(Button, {
      size: "sm",
      variant: "outline",
      fullWidth: true,
      leftIcon: /*#__PURE__*/React.createElement(Icon, {
        name: "phone",
        size: 16
      })
    }, "Call"))), /*#__PURE__*/React.createElement(Card, {
      padding: 22,
      accent: true
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        gap: 18
      }
    }, /*#__PURE__*/React.createElement(Stat, {
      label: "Loan amount",
      value: "\xA3285k"
    }), /*#__PURE__*/React.createElement(Stat, {
      label: "Rate",
      value: "4.21%"
    }), /*#__PURE__*/React.createElement(Stat, {
      label: "Term",
      value: "25 yrs"
    }), /*#__PURE__*/React.createElement(Stat, {
      label: "Est. monthly",
      value: "\xA31,542"
    }))))));
  }
  W.Dashboard = Dashboard;
  function Application() {
    const {
      Card,
      Steps,
      Alert,
      Badge
    } = window.PCSDesignSystem_269f6d;
    const rows = [["Property", "14 Elmwood Avenue, London SW19 2NN"], ["Property value", "£380,000"], ["Loan amount", "£285,000 (75% LTV)"], ["Term", "25 years"], ["Product", "5-year fixed · 4.21%"], ["Adviser", "Marcus Reid (CeMAP)"]];
    return /*#__PURE__*/React.createElement("div", {
      style: PAGE
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        gap: 22,
        alignItems: "start"
      },
      className: "pcs-dash-grid"
    }, /*#__PURE__*/React.createElement(Card, {
      title: "Case timeline",
      padding: 24
    }, /*#__PURE__*/React.createElement(Steps, {
      orientation: "vertical",
      current: 2,
      steps: [{
        title: "Application received",
        desc: "12 May 2026"
      }, {
        title: "Identity & affordability verified",
        desc: "16 May 2026"
      }, {
        title: "Mortgage advice",
        desc: "In progress — awaiting income docs"
      }, {
        title: "Mortgage offer",
        desc: "Estimated 30 May"
      }, {
        title: "Completion",
        desc: "Estimated mid-June"
      }]
    })), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        flexDirection: "column",
        gap: 18
      }
    }, /*#__PURE__*/React.createElement(Card, {
      title: "Case details",
      header: /*#__PURE__*/React.createElement(Badge, {
        tone: "blue"
      }, "#PCS-4821"),
      padding: 0
    }, /*#__PURE__*/React.createElement("div", null, rows.map(([k, v], i) => /*#__PURE__*/React.createElement("div", {
      key: k,
      style: {
        display: "flex",
        justifyContent: "space-between",
        gap: 16,
        padding: "13px 20px",
        borderTop: i ? "1px solid var(--border-subtle)" : "none"
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        font: "500 14px var(--font-sans)",
        color: "var(--text-muted)"
      }
    }, k), /*#__PURE__*/React.createElement("span", {
      style: {
        font: "600 14px var(--font-sans)",
        color: "var(--pcs-ink)",
        textAlign: "right"
      }
    }, v))))), /*#__PURE__*/React.createElement(Alert, {
      tone: "warning"
    }, "Your home may be repossessed if you do not keep up repayments on your mortgage."))));
  }
  W.Application = Application;
  function Documents() {
    const {
      Card,
      Tabs,
      Badge,
      Button,
      IconButton
    } = window.PCSDesignSystem_269f6d;
    const {
      Icon
    } = window.PCSIcons;
    const [tab, setTab] = React.useState("all");
    const docs = [{
      name: "Photo ID (passport)",
      meta: "Uploaded 12 May · 2.1 MB",
      status: "verified"
    }, {
      name: "Proof of address",
      meta: "Uploaded 12 May · 0.8 MB",
      status: "verified"
    }, {
      name: "Payslips — last 3 months",
      meta: "Required to continue",
      status: "required"
    }, {
      name: "Bank statements — 3 months",
      meta: "Required to continue",
      status: "required"
    }, {
      name: "Mortgage offer letter",
      meta: "We'll add this once issued",
      status: "pending"
    }];
    const tones = {
      verified: ["success", "Verified"],
      required: ["warning", "Action needed"],
      pending: ["neutral", "Awaiting"]
    };
    const shown = tab === "all" ? docs : tab === "required" ? docs.filter(d => d.status === "required") : docs.filter(d => d.status === "verified");
    return /*#__PURE__*/React.createElement("div", {
      style: PAGE
    }, /*#__PURE__*/React.createElement(Card, {
      padding: 0
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        padding: "16px 22px 0"
      }
    }, /*#__PURE__*/React.createElement(Tabs, {
      value: tab,
      onChange: setTab,
      items: [{
        value: "all",
        label: "All",
        count: docs.length
      }, {
        value: "required",
        label: "Required",
        count: docs.filter(d => d.status === "required").length
      }, {
        value: "uploaded",
        label: "Uploaded",
        count: docs.filter(d => d.status === "verified").length
      }]
    })), /*#__PURE__*/React.createElement("div", null, shown.map((d, i) => {
      const [tone, label] = tones[d.status];
      return /*#__PURE__*/React.createElement("div", {
        key: d.name,
        style: {
          display: "flex",
          alignItems: "center",
          gap: 14,
          padding: "16px 22px",
          borderTop: "1px solid var(--border-subtle)"
        }
      }, /*#__PURE__*/React.createElement("span", {
        style: {
          width: 40,
          height: 40,
          borderRadius: 10,
          background: "var(--surface-sunken)",
          color: "var(--pcs-blue)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flex: "none"
        }
      }, /*#__PURE__*/React.createElement(Icon, {
        name: "file",
        size: 20
      })), /*#__PURE__*/React.createElement("div", {
        style: {
          minWidth: 0
        }
      }, /*#__PURE__*/React.createElement("div", {
        style: {
          font: "600 15px/1.3 var(--font-sans)",
          color: "var(--pcs-ink)"
        }
      }, d.name), /*#__PURE__*/React.createElement("div", {
        style: {
          font: "500 13px/1.4 var(--font-sans)",
          color: "var(--text-muted)"
        }
      }, d.meta)), /*#__PURE__*/React.createElement("div", {
        style: {
          marginLeft: "auto",
          display: "flex",
          alignItems: "center",
          gap: 12
        }
      }, /*#__PURE__*/React.createElement(Badge, {
        tone: tone,
        dot: d.status === "verified"
      }, label), d.status === "required" ? /*#__PURE__*/React.createElement(Button, {
        size: "sm",
        leftIcon: /*#__PURE__*/React.createElement(Icon, {
          name: "upload",
          size: 15
        })
      }, "Upload") : d.status === "verified" ? /*#__PURE__*/React.createElement(IconButton, {
        label: "Download",
        variant: "ghost",
        size: "sm"
      }, /*#__PURE__*/React.createElement(Icon, {
        name: "file",
        size: 17
      })) : /*#__PURE__*/React.createElement("span", {
        style: {
          width: 34
        }
      })));
    }))), /*#__PURE__*/React.createElement("div", {
      style: {
        border: "1.5px dashed var(--border-default)",
        borderRadius: 16,
        padding: "28px",
        textAlign: "center",
        background: "#fff"
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        width: 48,
        height: 48,
        borderRadius: 12,
        background: "var(--pcs-blue-tint)",
        color: "var(--pcs-blue)",
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center"
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "upload",
      size: 24
    })), /*#__PURE__*/React.createElement("div", {
      style: {
        font: "700 16px var(--font-display)",
        color: "var(--pcs-ink)",
        marginTop: 12
      }
    }, "Drag & drop your documents"), /*#__PURE__*/React.createElement("div", {
      style: {
        font: "500 14px var(--font-sans)",
        color: "var(--text-muted)",
        marginTop: 4
      }
    }, "PDF, JPG or PNG up to 10 MB. Encrypted in transit and at rest."), /*#__PURE__*/React.createElement(Button, {
      variant: "outline",
      style: {
        marginTop: 16
      }
    }, "Browse files")));
  }
  W.Documents = Documents;
  function Messages() {
    const {
      Card,
      Avatar,
      Button,
      Input
    } = window.PCSDesignSystem_269f6d;
    const {
      Icon
    } = window.PCSIcons;
    const [msgs, setMsgs] = React.useState([{
      who: "them",
      text: "Hi Jane — welcome to PCS! I'm Marcus, your adviser. I've reviewed your application and everything looks great so far.",
      time: "Mon 09:14"
    }, {
      who: "them",
      text: "To move things forward, could you upload your last 3 months' payslips when you get a chance?",
      time: "Mon 09:15"
    }, {
      who: "me",
      text: "Thanks Marcus! I'll get those over today.",
      time: "Mon 10:02"
    }, {
      who: "them",
      text: "Perfect, no rush. Once they're in I'll book us a call to talk through the recommendation.",
      time: "Mon 10:09"
    }]);
    const [draft, setDraft] = React.useState("");
    const send = e => {
      e.preventDefault();
      if (!draft.trim()) return;
      setMsgs(m => [...m, {
        who: "me",
        text: draft,
        time: "Now"
      }]);
      setDraft("");
    };
    return /*#__PURE__*/React.createElement("div", {
      style: {
        ...PAGE,
        height: "100%"
      }
    }, /*#__PURE__*/React.createElement(Card, {
      padding: 0,
      style: {
        overflow: "hidden"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        alignItems: "center",
        gap: 12,
        padding: "16px 22px",
        borderBottom: "1px solid var(--border-subtle)"
      }
    }, /*#__PURE__*/React.createElement(Avatar, {
      name: "Marcus Reid",
      status: "online"
    }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
      style: {
        font: "700 15px var(--font-display)",
        color: "var(--pcs-ink)"
      }
    }, "Marcus Reid"), /*#__PURE__*/React.createElement("div", {
      style: {
        font: "500 12.5px var(--font-sans)",
        color: "var(--pcs-emerald)"
      }
    }, "\u25CF Online \xB7 usually replies in minutes"))), /*#__PURE__*/React.createElement("div", {
      style: {
        padding: "22px",
        display: "flex",
        flexDirection: "column",
        gap: 14,
        background: "var(--surface-page)",
        maxHeight: 380,
        overflowY: "auto"
      }
    }, msgs.map((m, i) => /*#__PURE__*/React.createElement("div", {
      key: i,
      style: {
        display: "flex",
        justifyContent: m.who === "me" ? "flex-end" : "flex-start"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        maxWidth: "72%"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        padding: "11px 15px",
        borderRadius: 16,
        font: "400 14.5px/1.5 var(--font-sans)",
        background: m.who === "me" ? "var(--pcs-blue)" : "#fff",
        color: m.who === "me" ? "#fff" : "var(--text-strong)",
        borderBottomRightRadius: m.who === "me" ? 4 : 16,
        borderBottomLeftRadius: m.who === "me" ? 16 : 4,
        border: m.who === "me" ? "none" : "1px solid var(--border-subtle)",
        boxShadow: "var(--shadow-xs)"
      }
    }, m.text), /*#__PURE__*/React.createElement("div", {
      style: {
        font: "500 11.5px var(--font-sans)",
        color: "var(--text-subtle)",
        marginTop: 4,
        textAlign: m.who === "me" ? "right" : "left"
      }
    }, m.time))))), /*#__PURE__*/React.createElement("form", {
      onSubmit: send,
      style: {
        display: "flex",
        gap: 10,
        padding: "16px 22px",
        borderTop: "1px solid var(--border-subtle)"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        flex: 1
      }
    }, /*#__PURE__*/React.createElement(Input, {
      placeholder: "Write a message\u2026",
      value: draft,
      onChange: e => setDraft(e.target.value)
    })), /*#__PURE__*/React.createElement(Button, {
      type: "submit",
      leftIcon: /*#__PURE__*/React.createElement(Icon, {
        name: "arrowRight",
        size: 18
      })
    }, "Send"))));
  }
  W.Messages = Messages;
  function Settings() {
    const {
      Card,
      Input,
      Switch,
      Button,
      Select
    } = window.PCSDesignSystem_269f6d;
    return /*#__PURE__*/React.createElement("div", {
      style: PAGE
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: "grid",
        gridTemplateColumns: "1.3fr 1fr",
        gap: 22,
        alignItems: "start"
      },
      className: "pcs-dash-grid"
    }, /*#__PURE__*/React.createElement(Card, {
      title: "Personal details",
      padding: 24
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        gap: 16
      }
    }, /*#__PURE__*/React.createElement(Input, {
      label: "First name",
      defaultValue: "Jane"
    }), /*#__PURE__*/React.createElement(Input, {
      label: "Last name",
      defaultValue: "Homeowner"
    }), /*#__PURE__*/React.createElement(Input, {
      label: "Email",
      type: "email",
      defaultValue: "jane@example.com"
    }), /*#__PURE__*/React.createElement(Input, {
      label: "Phone",
      type: "tel",
      defaultValue: "07700 900123"
    })), /*#__PURE__*/React.createElement(Select, {
      label: "Preferred contact method",
      options: ["Phone", "Email", "SMS"],
      defaultValue: "Phone",
      style: {
        marginTop: 4
      }
    }), /*#__PURE__*/React.createElement(Button, {
      style: {
        marginTop: 18,
        alignSelf: "flex-start"
      }
    }, "Save changes")), /*#__PURE__*/React.createElement(Card, {
      title: "Notifications",
      padding: 24
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        flexDirection: "column",
        gap: 18
      }
    }, [["Application updates", true], ["New messages", true], ["Document reminders", true], ["Marketing & offers", false]].map(([label, on]) => /*#__PURE__*/React.createElement("div", {
      key: label,
      style: {
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between"
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        font: "500 15px var(--font-sans)",
        color: "var(--text-strong)"
      }
    }, label), /*#__PURE__*/React.createElement(Switch, {
      defaultChecked: on
    })))))));
  }
  W.Settings = Settings;
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/portal/portal-screens.jsx", error: String((e && e.message) || e) }); }

// ui_kits/portal/portal-shell.jsx
try { (() => {
/* PCS client portal — shell: login, sidebar, topbar, app routing.
   Composes design-system primitives. Extends window.PCSPortal. */
(function () {
  const W = window.PCSPortal = window.PCSPortal || {};
  const NAV = [{
    id: "dashboard",
    label: "Dashboard",
    icon: "layout"
  }, {
    id: "application",
    label: "My application",
    icon: "house2"
  }, {
    id: "documents",
    label: "Documents",
    icon: "file",
    badge: 2
  }, {
    id: "messages",
    label: "Messages",
    icon: "message",
    badge: 1
  }, {
    id: "settings",
    label: "Settings",
    icon: "settings"
  }];
  W.NAV = NAV;
  W.TITLES = {
    dashboard: "Dashboard",
    application: "My application",
    documents: "Documents",
    messages: "Messages",
    settings: "Settings"
  };
  function Login({
    onLogin
  }) {
    const {
      Button,
      Input,
      Checkbox
    } = window.PCSDesignSystem_269f6d;
    const {
      Icon
    } = window.PCSIcons;
    return /*#__PURE__*/React.createElement("div", {
      style: {
        minHeight: "100vh",
        display: "grid",
        gridTemplateColumns: "1.05fr 1fr"
      },
      className: "pcs-login-grid"
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        background: "var(--pcs-ink)",
        color: "#fff",
        padding: "48px 56px",
        display: "flex",
        flexDirection: "column",
        position: "relative",
        overflow: "hidden"
      }
    }, /*#__PURE__*/React.createElement("img", {
      src: "../../assets/logos/pcs-logo-horizontal-reversed.svg",
      alt: "PCS",
      style: {
        height: 40,
        alignSelf: "flex-start"
      }
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        marginTop: "auto",
        marginBottom: 12,
        position: "relative",
        zIndex: 1
      }
    }, /*#__PURE__*/React.createElement("h1", {
      style: {
        font: "800 38px/1.1 var(--font-display)",
        letterSpacing: "-.02em",
        margin: 0
      }
    }, "Your property, in good hands."), /*#__PURE__*/React.createElement("p", {
      style: {
        font: "400 17px/1.6 var(--font-sans)",
        color: "rgba(255,255,255,.78)",
        marginTop: 16,
        maxWidth: 420
      }
    }, "Track your mortgage application, share documents securely and message your adviser \u2014 all in one place."), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        gap: 10,
        marginTop: 22
      }
    }, ["Bank-grade security", "One named adviser", "Real-time updates"].map(t => /*#__PURE__*/React.createElement("span", {
      key: t,
      style: {
        display: "inline-flex",
        alignItems: "center",
        gap: 6,
        font: "600 13px var(--font-sans)",
        color: "rgba(255,255,255,.9)",
        background: "rgba(255,255,255,.1)",
        padding: "7px 12px",
        borderRadius: 999
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "check",
      size: 14
    }), " ", t)))), /*#__PURE__*/React.createElement("img", {
      src: "../../assets/logos/pcs-symbol-white.svg",
      alt: "",
      "aria-hidden": "true",
      style: {
        position: "absolute",
        right: -60,
        bottom: -60,
        width: 320,
        opacity: 0.06
      }
    })), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: 32,
        background: "var(--surface-page)"
      }
    }, /*#__PURE__*/React.createElement("form", {
      onSubmit: e => {
        e.preventDefault();
        onLogin();
      },
      style: {
        width: "100%",
        maxWidth: 380,
        display: "flex",
        flexDirection: "column",
        gap: 18
      }
    }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("span", {
      className: "pcs-label",
      style: {
        color: "var(--pcs-blue)"
      }
    }, "Client portal"), /*#__PURE__*/React.createElement("h2", {
      className: "pcs-h2",
      style: {
        fontSize: 30,
        margin: "10px 0 4px"
      }
    }, "Welcome back"), /*#__PURE__*/React.createElement("p", {
      className: "pcs-body",
      style: {
        fontSize: 15,
        margin: 0
      }
    }, "Sign in to pick up where you left off.")), /*#__PURE__*/React.createElement(Input, {
      label: "Email",
      type: "email",
      defaultValue: "jane@example.com",
      leftIcon: /*#__PURE__*/React.createElement(Icon, {
        name: "mail",
        size: 18
      }),
      required: true
    }), /*#__PURE__*/React.createElement(Input, {
      label: "Password",
      type: "password",
      defaultValue: "password",
      leftIcon: /*#__PURE__*/React.createElement(Icon, {
        name: "lock",
        size: 18
      }),
      required: true
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between"
      }
    }, /*#__PURE__*/React.createElement(Checkbox, {
      label: "Remember me",
      defaultChecked: true
    }), /*#__PURE__*/React.createElement("a", {
      href: "#",
      onClick: e => e.preventDefault(),
      style: {
        font: "600 14px var(--font-sans)",
        color: "var(--pcs-blue)"
      }
    }, "Forgot password?")), /*#__PURE__*/React.createElement(Button, {
      type: "submit",
      size: "lg",
      fullWidth: true
    }, "Sign in"), /*#__PURE__*/React.createElement("p", {
      className: "pcs-body",
      style: {
        fontSize: 14,
        textAlign: "center",
        margin: 0
      }
    }, "New here? ", /*#__PURE__*/React.createElement("a", {
      href: "#",
      onClick: e => e.preventDefault(),
      style: {
        fontWeight: 600
      }
    }, "Create an account")))));
  }
  W.Login = Login;
  function Sidebar({
    active,
    onNav,
    onLogout
  }) {
    const {
      Avatar,
      Badge
    } = window.PCSDesignSystem_269f6d;
    const {
      Icon
    } = window.PCSIcons;
    return /*#__PURE__*/React.createElement("aside", {
      style: {
        width: 248,
        flex: "none",
        background: "#fff",
        borderRight: "1px solid var(--border-subtle)",
        display: "flex",
        flexDirection: "column",
        padding: "20px 14px"
      }
    }, /*#__PURE__*/React.createElement("img", {
      src: "../../assets/logos/pcs-logo-horizontal.svg",
      alt: "PCS",
      style: {
        height: 32,
        margin: "6px 8px 22px"
      }
    }), /*#__PURE__*/React.createElement("nav", {
      style: {
        display: "flex",
        flexDirection: "column",
        gap: 3
      }
    }, NAV.map(n => {
      const on = active === n.id;
      return /*#__PURE__*/React.createElement("button", {
        key: n.id,
        onClick: () => onNav(n.id),
        style: {
          display: "flex",
          alignItems: "center",
          gap: 12,
          padding: "11px 12px",
          borderRadius: 12,
          border: "none",
          cursor: "pointer",
          textAlign: "left",
          font: "600 15px var(--font-sans)",
          color: on ? "var(--pcs-blue)" : "var(--text-body)",
          background: on ? "var(--pcs-blue-tint)" : "transparent"
        }
      }, /*#__PURE__*/React.createElement(Icon, {
        name: n.icon,
        size: 20
      }), /*#__PURE__*/React.createElement("span", null, n.label), n.badge ? /*#__PURE__*/React.createElement(Badge, {
        tone: on ? "blue" : "neutral",
        style: {
          marginLeft: "auto"
        }
      }, n.badge) : null);
    })), /*#__PURE__*/React.createElement("div", {
      style: {
        marginTop: "auto",
        padding: 12,
        background: "var(--surface-page)",
        borderRadius: 14,
        display: "flex",
        alignItems: "center",
        gap: 10
      }
    }, /*#__PURE__*/React.createElement(Avatar, {
      name: "Jane Homeowner",
      size: "md",
      status: "online"
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        minWidth: 0
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        font: "700 14px var(--font-sans)",
        color: "var(--pcs-ink)",
        whiteSpace: "nowrap",
        overflow: "hidden",
        textOverflow: "ellipsis"
      }
    }, "Jane Homeowner"), /*#__PURE__*/React.createElement("div", {
      style: {
        font: "500 12px var(--font-sans)",
        color: "var(--text-muted)"
      }
    }, "Case #PCS-4821")), /*#__PURE__*/React.createElement("button", {
      onClick: onLogout,
      "aria-label": "Sign out",
      title: "Sign out",
      style: {
        marginLeft: "auto",
        background: "none",
        border: "none",
        cursor: "pointer",
        color: "var(--text-muted)",
        display: "flex"
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "logout",
      size: 18
    }))));
  }
  W.Sidebar = Sidebar;
  function Topbar({
    title,
    onNav
  }) {
    const {
      IconButton,
      Avatar,
      Input
    } = window.PCSDesignSystem_269f6d;
    const {
      Icon
    } = window.PCSIcons;
    return /*#__PURE__*/React.createElement("header", {
      style: {
        height: 68,
        flex: "none",
        background: "rgba(255,255,255,.85)",
        backdropFilter: "blur(10px)",
        borderBottom: "1px solid var(--border-subtle)",
        display: "flex",
        alignItems: "center",
        gap: 18,
        padding: "0 28px",
        position: "sticky",
        top: 0,
        zIndex: 10
      }
    }, /*#__PURE__*/React.createElement("h1", {
      style: {
        font: "700 22px var(--font-display)",
        letterSpacing: "-.01em",
        color: "var(--pcs-ink)",
        margin: 0
      }
    }, title), /*#__PURE__*/React.createElement("div", {
      style: {
        marginLeft: "auto",
        width: 240
      }
    }, /*#__PURE__*/React.createElement(Input, {
      placeholder: "Search\u2026",
      leftIcon: /*#__PURE__*/React.createElement(Icon, {
        name: "search",
        size: 17
      })
    })), /*#__PURE__*/React.createElement("div", {
      style: {
        position: "relative"
      }
    }, /*#__PURE__*/React.createElement(IconButton, {
      label: "Notifications",
      variant: "ghost",
      onClick: () => onNav("messages")
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "bell",
      size: 20
    })), /*#__PURE__*/React.createElement("span", {
      style: {
        position: "absolute",
        top: 6,
        right: 7,
        width: 8,
        height: 8,
        borderRadius: "50%",
        background: "var(--pcs-danger)",
        border: "2px solid #fff"
      }
    })), /*#__PURE__*/React.createElement(Avatar, {
      name: "Jane Homeowner",
      size: "sm"
    }));
  }
  W.Topbar = Topbar;
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/portal/portal-shell.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/site-body.jsx
try { (() => {
/* PCS marketing site — services, how-it-works, advisers, quote form.
   Extends window.PCSSite. */
(function () {
  const W = window.PCSSite = window.PCSSite || {};
  function Services() {
    const {
      Card
    } = window.PCSDesignSystem_269f6d;
    const {
      Icon
    } = window.PCSIcons;
    const items = [{
      icon: "key",
      title: "First-time buyers",
      body: "Step-by-step help getting on the ladder — from deposit to keys, in plain English."
    }, {
      icon: "house2",
      title: "Remortgaging",
      body: "Coming to the end of a deal? We'll find a better rate before you slip onto the SVR."
    }, {
      icon: "trendingUp",
      title: "Buy-to-let",
      body: "Specialist landlord advice — portfolios, limited-company lending and HMOs."
    }, {
      icon: "shield",
      title: "Protection & insurance",
      body: "Life, income and buildings cover so your home stays yours, whatever happens."
    }];
    return /*#__PURE__*/React.createElement("section", {
      style: {
        background: "var(--surface-page)",
        padding: "84px 28px"
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
    }, /*#__PURE__*/React.createElement("span", {
      className: "pcs-label",
      style: {
        color: "var(--pcs-emerald)"
      }
    }, "What we do"), /*#__PURE__*/React.createElement("h2", {
      className: "pcs-h2",
      style: {
        margin: "12px 0 0"
      }
    }, "One clinic for every property question"), /*#__PURE__*/React.createElement("p", {
      className: "pcs-body",
      style: {
        fontSize: 18,
        marginTop: 14
      }
    }, "Whatever stage you're at, there's a PCS adviser who does this every day.")), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "grid",
        gridTemplateColumns: "repeat(4,1fr)",
        gap: 20
      },
      className: "pcs-services-grid"
    }, items.map(it => /*#__PURE__*/React.createElement(Card, {
      key: it.title,
      interactive: true,
      elevation: "default",
      padding: 26
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        width: 52,
        height: 52,
        borderRadius: 14,
        background: "var(--pcs-blue-tint)",
        color: "var(--pcs-blue)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: it.icon,
      size: 26
    })), /*#__PURE__*/React.createElement("h3", {
      style: {
        font: "700 19px var(--font-display)",
        letterSpacing: "-.01em",
        color: "var(--pcs-ink)",
        margin: "16px 0 0"
      }
    }, it.title), /*#__PURE__*/React.createElement("p", {
      className: "pcs-body",
      style: {
        fontSize: 15,
        margin: "8px 0 0"
      }
    }, it.body), /*#__PURE__*/React.createElement("a", {
      href: "#",
      style: {
        marginTop: "auto",
        paddingTop: 14,
        font: "700 14px var(--font-sans)",
        color: "var(--pcs-blue)",
        display: "inline-flex",
        alignItems: "center",
        gap: 6,
        textDecoration: "none",
        whiteSpace: "nowrap"
      }
    }, "Learn more ", /*#__PURE__*/React.createElement(Icon, {
      name: "arrowRight",
      size: 15
    })))))));
  }
  W.Services = Services;
  function HowItWorks() {
    const {
      Icon
    } = window.PCSIcons;
    const steps = [{
      icon: "user",
      title: "Tell us about you",
      body: "A quick chat about your situation and goals — no jargon, no pressure."
    }, {
      icon: "search",
      title: "We search the market",
      body: "We compare deals from across the market to find your best fit."
    }, {
      icon: "message",
      title: "Get expert advice",
      body: "A recommendation you understand, with the pros and cons spelled out."
    }, {
      icon: "check",
      title: "Complete with support",
      body: "We handle the paperwork and stay with you to completion and beyond."
    }];
    return /*#__PURE__*/React.createElement("section", {
      style: {
        background: "#fff",
        padding: "84px 28px"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        maxWidth: 1200,
        margin: "0 auto"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        textAlign: "center",
        maxWidth: 620,
        margin: "0 auto 52px"
      }
    }, /*#__PURE__*/React.createElement("span", {
      className: "pcs-label",
      style: {
        color: "var(--pcs-blue)"
      }
    }, "How it works"), /*#__PURE__*/React.createElement("h2", {
      className: "pcs-h2",
      style: {
        margin: "12px 0 0"
      }
    }, "Four simple steps to sorted")), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "grid",
        gridTemplateColumns: "repeat(4,1fr)",
        gap: 28,
        position: "relative"
      },
      className: "pcs-how-grid"
    }, steps.map((s, i) => /*#__PURE__*/React.createElement("div", {
      key: s.title,
      style: {
        textAlign: "center",
        display: "flex",
        flexDirection: "column",
        alignItems: "center"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        position: "relative",
        width: 72,
        height: 72,
        borderRadius: "50%",
        background: "var(--pcs-blue)",
        color: "#fff",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        boxShadow: "var(--shadow-brand)"
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: s.icon,
      size: 30
    }), /*#__PURE__*/React.createElement("span", {
      style: {
        position: "absolute",
        top: -6,
        right: -6,
        width: 26,
        height: 26,
        borderRadius: "50%",
        background: "var(--pcs-gold)",
        color: "#3a2a05",
        font: "800 13px var(--font-display)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        border: "2px solid #fff"
      }
    }, i + 1)), /*#__PURE__*/React.createElement("h3", {
      style: {
        font: "700 17px var(--font-display)",
        color: "var(--pcs-ink)",
        margin: "18px 0 0"
      }
    }, s.title), /*#__PURE__*/React.createElement("p", {
      className: "pcs-body",
      style: {
        fontSize: 14.5,
        margin: "8px 0 0",
        maxWidth: 220
      }
    }, s.body))))));
  }
  W.HowItWorks = HowItWorks;
  function Advisers() {
    const {
      Avatar,
      Badge
    } = window.PCSDesignSystem_269f6d;
    const {
      Icon
    } = window.PCSIcons;
    const Photo = W.Photo;
    const team = [{
      name: "Marcus Reid",
      role: "Senior mortgage adviser",
      tone: "blue"
    }, {
      name: "Priya Shah",
      role: "Protection specialist",
      tone: "emerald"
    }, {
      name: "Tom Whitfield",
      role: "Buy-to-let lead",
      tone: "blue"
    }];
    return /*#__PURE__*/React.createElement("section", {
      style: {
        background: "var(--surface-page)",
        padding: "84px 28px"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        maxWidth: 1200,
        margin: "0 auto",
        display: "grid",
        gridTemplateColumns: ".8fr 1.2fr",
        gap: 56,
        alignItems: "center"
      },
      className: "pcs-adv-grid"
    }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("span", {
      className: "pcs-label",
      style: {
        color: "var(--pcs-emerald)"
      }
    }, "Real people"), /*#__PURE__*/React.createElement("h2", {
      className: "pcs-h2",
      style: {
        margin: "12px 0 0"
      }
    }, "Meet the advisers in your corner"), /*#__PURE__*/React.createElement("p", {
      className: "pcs-body",
      style: {
        fontSize: 18,
        marginTop: 14
      }
    }, "You'll have one named, qualified adviser from first call to completion \u2014 and they'll actually pick up the phone."), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        gap: 8,
        marginTop: 22,
        flexWrap: "wrap"
      }
    }, /*#__PURE__*/React.createElement(Badge, {
      tone: "blue",
      dot: true
    }, "CeMAP qualified"), /*#__PURE__*/React.createElement(Badge, {
      tone: "success",
      dot: true
    }, "Whole-of-market"), /*#__PURE__*/React.createElement(Badge, {
      tone: "gold"
    }, "FCA regulated"))), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "grid",
        gridTemplateColumns: "repeat(3,1fr)",
        gap: 18
      }
    }, team.map(t => /*#__PURE__*/React.createElement("div", {
      key: t.name,
      style: {
        background: "#fff",
        borderRadius: 18,
        border: "1px solid var(--border-subtle)",
        boxShadow: "var(--shadow-sm)",
        overflow: "hidden"
      }
    }, /*#__PURE__*/React.createElement(Photo, {
      label: "Adviser",
      h: 150,
      radius: 0,
      tone: t.tone
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        padding: "14px 16px 18px"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        font: "700 16px var(--font-display)",
        color: "var(--pcs-ink)"
      }
    }, t.name), /*#__PURE__*/React.createElement("div", {
      style: {
        font: "500 13px var(--font-sans)",
        color: "var(--text-muted)",
        marginTop: 2
      }
    }, t.role)))))));
  }
  W.Advisers = Advisers;
  function QuoteForm({
    inputRef
  }) {
    const {
      Input,
      Select,
      Button,
      Checkbox,
      Alert
    } = window.PCSDesignSystem_269f6d;
    const {
      Icon
    } = window.PCSIcons;
    const [sent, setSent] = React.useState(false);
    return /*#__PURE__*/React.createElement("section", {
      ref: inputRef,
      style: {
        background: "var(--pcs-blue)",
        padding: "80px 28px",
        scrollMarginTop: 80
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        maxWidth: 1080,
        margin: "0 auto",
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        gap: 56,
        alignItems: "center"
      },
      className: "pcs-quote-grid"
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        color: "#fff"
      }
    }, /*#__PURE__*/React.createElement("span", {
      className: "pcs-label",
      style: {
        color: "rgba(255,255,255,.8)"
      }
    }, "Free & no obligation"), /*#__PURE__*/React.createElement("h2", {
      style: {
        font: "800 40px/1.06 var(--font-display)",
        letterSpacing: "-.02em",
        margin: "12px 0 0"
      }
    }, "Get started in 2 minutes"), /*#__PURE__*/React.createElement("p", {
      style: {
        font: "400 17px/1.6 var(--font-sans)",
        color: "rgba(255,255,255,.85)",
        marginTop: 16,
        maxWidth: 420
      }
    }, "Tell us a little about you and a named adviser will call you back \u2014 usually the same day."), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        flexDirection: "column",
        gap: 12,
        marginTop: 26
      }
    }, ["Whole-of-market — we're not tied to any lender", "One adviser, start to finish", "We do the chasing, not you"].map(t => /*#__PURE__*/React.createElement("div", {
      key: t,
      style: {
        display: "flex",
        alignItems: "center",
        gap: 10,
        font: "500 15px var(--font-sans)",
        color: "rgba(255,255,255,.92)"
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        width: 24,
        height: 24,
        borderRadius: "50%",
        background: "rgba(255,255,255,.16)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "check",
      size: 15
    })), t)))), /*#__PURE__*/React.createElement("div", {
      style: {
        background: "#fff",
        borderRadius: 24,
        boxShadow: "var(--shadow-xl)",
        padding: 28
      }
    }, sent ? /*#__PURE__*/React.createElement("div", {
      style: {
        padding: "8px 0"
      }
    }, /*#__PURE__*/React.createElement(Alert, {
      tone: "success",
      title: "Thanks \u2014 we've got your details"
    }, "A PCS adviser will call you back shortly. Keep an eye on your phone."), /*#__PURE__*/React.createElement(Button, {
      variant: "ghost",
      style: {
        marginTop: 14
      },
      onClick: () => setSent(false)
    }, "Send another")) : /*#__PURE__*/React.createElement("form", {
      onSubmit: e => {
        e.preventDefault();
        setSent(true);
      },
      style: {
        display: "flex",
        flexDirection: "column",
        gap: 16
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        gap: 14
      }
    }, /*#__PURE__*/React.createElement(Input, {
      label: "Full name",
      placeholder: "Jane Homeowner",
      required: true
    }), /*#__PURE__*/React.createElement(Input, {
      label: "Phone",
      type: "tel",
      placeholder: "07700 900000",
      required: true
    })), /*#__PURE__*/React.createElement(Select, {
      label: "What do you need help with?",
      placeholder: "Choose one",
      options: ["Buying my first home", "Remortgaging", "Moving home", "Buy-to-let", "Protection & insurance"],
      required: true
    }), /*#__PURE__*/React.createElement(Input, {
      label: "Postcode",
      placeholder: "SW19 2NN"
    }), /*#__PURE__*/React.createElement(Checkbox, {
      label: "I agree to be contacted about my enquiry",
      description: "We'll never share your details. See our privacy policy.",
      defaultChecked: true
    }), /*#__PURE__*/React.createElement(Button, {
      type: "submit",
      size: "lg",
      fullWidth: true,
      rightIcon: /*#__PURE__*/React.createElement(Icon, {
        name: "arrowRight",
        size: 18
      })
    }, "Request my call back")))));
  }
  W.QuoteForm = QuoteForm;
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/site-body.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/site-parts.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* PCS marketing site — header, hero, trust bar, footer.
   Composes design-system primitives from window.PCSDesignSystem_269f6d
   and icons from window.PCSIcons. Extends window.PCSSite. */
(function () {
  const W = window.PCSSite = window.PCSSite || {};
  const NAV = ["Mortgages", "Remortgage", "Buy-to-let", "Protection", "About"];

  /* A branded placeholder for real photography (warm, optimistic UK homes). */
  function Photo({
    label = "Photography",
    h = 420,
    tone = "blue",
    radius = 24,
    style
  }) {
    const grad = tone === "emerald" ? "linear-gradient(150deg,#E3F4EC,#d3ecdf)" : tone === "ink" ? "linear-gradient(150deg,#13224a,#0C1A3A)" : "linear-gradient(150deg,#E7ECFA,#dbe3f9)";
    const fg = tone === "ink" ? "rgba(255,255,255,.5)" : "rgba(12,26,58,.32)";
    return /*#__PURE__*/React.createElement("div", {
      style: {
        position: "relative",
        height: h,
        borderRadius: radius,
        background: grad,
        overflow: "hidden",
        ...style
      }
    }, /*#__PURE__*/React.createElement("img", {
      src: "../../assets/logos/pcs-symbol.svg",
      alt: "",
      "aria-hidden": "true",
      style: {
        position: "absolute",
        right: -30,
        bottom: -30,
        width: 200,
        opacity: tone === "ink" ? 0.14 : 0.10
      }
    }), /*#__PURE__*/React.createElement("span", {
      style: {
        position: "absolute",
        left: 20,
        bottom: 16,
        font: "600 12px/1 var(--font-sans)",
        letterSpacing: ".12em",
        textTransform: "uppercase",
        color: fg
      }
    }, label));
  }
  W.Photo = Photo;
  function Header({
    onCta
  }) {
    const {
      Button
    } = window.PCSDesignSystem_269f6d;
    const {
      Icon
    } = window.PCSIcons;
    const [open, setOpen] = React.useState(false);
    const [scrolled, setScrolled] = React.useState(false);
    React.useEffect(() => {
      const root = document.querySelector("[data-site-scroll]") || window;
      const el = root === window ? document.documentElement : root;
      const onScroll = () => setScrolled((el.scrollTop || window.scrollY) > 8);
      root.addEventListener("scroll", onScroll);
      return () => root.removeEventListener("scroll", onScroll);
    }, []);
    return /*#__PURE__*/React.createElement("header", {
      style: {
        position: "sticky",
        top: 0,
        zIndex: 50,
        background: scrolled ? "rgba(255,255,255,.82)" : "rgba(247,247,244,.6)",
        backdropFilter: "blur(14px)",
        WebkitBackdropFilter: "blur(14px)",
        borderBottom: scrolled ? "1px solid var(--border-subtle)" : "1px solid transparent",
        transition: "background .2s, border-color .2s"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        maxWidth: 1200,
        margin: "0 auto",
        padding: "14px 28px",
        display: "flex",
        alignItems: "center",
        gap: 24
      }
    }, /*#__PURE__*/React.createElement("img", {
      src: "../../assets/logos/pcs-logo-horizontal.svg",
      alt: "Property Clinic Solutions",
      style: {
        height: 38
      }
    }), /*#__PURE__*/React.createElement("nav", {
      style: {
        display: "flex",
        gap: 28,
        marginLeft: 18
      },
      className: "pcs-site-nav"
    }, NAV.map((n, i) => /*#__PURE__*/React.createElement("a", {
      key: n,
      href: "#",
      style: {
        font: "600 15px var(--font-sans)",
        color: i === 0 ? "var(--pcs-blue)" : "var(--text-body)",
        textDecoration: "none"
      }
    }, n))), /*#__PURE__*/React.createElement("div", {
      style: {
        marginLeft: "auto",
        display: "flex",
        alignItems: "center",
        gap: 14
      }
    }, /*#__PURE__*/React.createElement("a", {
      href: "tel:08000000000",
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
      size: 17
    }), " 0800 000 0000"), /*#__PURE__*/React.createElement(Button, {
      size: "sm",
      onClick: onCta
    }, "Get advice"))));
  }
  W.Header = Header;
  function Hero({
    onCta,
    onCall
  }) {
    const {
      Button,
      Badge,
      Avatar
    } = window.PCSDesignSystem_269f6d;
    const {
      Icon
    } = window.PCSIcons;
    return /*#__PURE__*/React.createElement("section", {
      style: {
        background: "var(--surface-page)",
        padding: "72px 28px 88px"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        maxWidth: 1200,
        margin: "0 auto",
        display: "grid",
        gridTemplateColumns: "1.05fr .95fr",
        gap: 56,
        alignItems: "center"
      },
      className: "pcs-hero-grid"
    }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("span", {
      className: "pcs-label",
      style: {
        color: "var(--pcs-blue)",
        display: "inline-flex",
        alignItems: "center",
        gap: 8
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "shield",
      size: 15
    }), " FCA-regulated mortgage advice"), /*#__PURE__*/React.createElement("h1", {
      className: "pcs-hero",
      style: {
        margin: "16px 0 0"
      }
    }, "Mortgage advice that fits ", /*#__PURE__*/React.createElement("span", {
      style: {
        color: "var(--pcs-blue)"
      }
    }, "your life"), ", not the other way round."), /*#__PURE__*/React.createElement("p", {
      className: "pcs-body",
      style: {
        fontSize: 18,
        maxWidth: 520,
        margin: "20px 0 0"
      }
    }, "We help homeowners, landlords and first-time buyers across England & Wales find the right mortgage \u2014 and keep their property in good health."), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        gap: 12,
        marginTop: 30,
        flexWrap: "wrap"
      }
    }, /*#__PURE__*/React.createElement(Button, {
      size: "lg",
      onClick: onCta,
      rightIcon: /*#__PURE__*/React.createElement(Icon, {
        name: "arrowRight",
        size: 18
      })
    }, "Get mortgage advice"), /*#__PURE__*/React.createElement(Button, {
      size: "lg",
      variant: "outline",
      onClick: onCall,
      leftIcon: /*#__PURE__*/React.createElement(Icon, {
        name: "phone",
        size: 18
      })
    }, "Book a free call")), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        alignItems: "center",
        gap: 18,
        marginTop: 26,
        font: "500 14px var(--font-sans)",
        color: "var(--text-muted)"
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        display: "inline-flex",
        alignItems: "center",
        gap: 6
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "check",
      size: 16,
      style: {
        color: "var(--pcs-emerald)"
      }
    }), " Free initial consultation"), /*#__PURE__*/React.createElement("span", {
      style: {
        display: "inline-flex",
        alignItems: "center",
        gap: 6
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "check",
      size: 16,
      style: {
        color: "var(--pcs-emerald)"
      }
    }), " No obligation"), /*#__PURE__*/React.createElement("span", {
      style: {
        display: "inline-flex",
        alignItems: "center",
        gap: 6
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "check",
      size: 16,
      style: {
        color: "var(--pcs-emerald)"
      }
    }), " Real human advisers"))), /*#__PURE__*/React.createElement("div", {
      style: {
        position: "relative"
      }
    }, /*#__PURE__*/React.createElement(Photo, {
      label: "Family outside their new home",
      h: 460,
      radius: 28
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        position: "absolute",
        left: -24,
        bottom: -24,
        background: "#fff",
        borderRadius: 18,
        boxShadow: "var(--shadow-lg)",
        padding: "16px 20px",
        display: "flex",
        alignItems: "center",
        gap: 14,
        minWidth: 240
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        width: 44,
        height: 44,
        borderRadius: 12,
        background: "var(--pcs-emerald-tint)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        color: "var(--pcs-emerald)"
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "check",
      size: 22
    })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
      style: {
        font: "800 20px var(--font-display)",
        color: "var(--pcs-ink)",
        letterSpacing: "-.01em"
      }
    }, "Approved in 14 days"), /*#__PURE__*/React.createElement("div", {
      style: {
        font: "500 13px var(--font-sans)",
        color: "var(--text-muted)"
      }
    }, "Average decision in principle"))), /*#__PURE__*/React.createElement("div", {
      style: {
        position: "absolute",
        right: -16,
        top: 26,
        background: "#fff",
        borderRadius: 14,
        boxShadow: "var(--shadow-md)",
        padding: "10px 14px",
        display: "flex",
        alignItems: "center",
        gap: 8
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "star",
      size: 18,
      style: {
        color: "var(--pcs-gold)"
      }
    }), /*#__PURE__*/React.createElement("span", {
      style: {
        font: "700 14px var(--font-sans)",
        color: "var(--pcs-ink)"
      }
    }, "4.9/5 \xB7 1,200+ reviews")))));
  }
  W.Hero = Hero;
  function TrustBar() {
    const {
      Stat
    } = window.PCSDesignSystem_269f6d;
    const items = [{
      label: "Mortgages arranged",
      value: "£48m",
      sub: "in the last 12 months"
    }, {
      label: "Families helped",
      value: "1,200+",
      sub: "and counting"
    }, {
      label: "Average decision",
      value: "14 days",
      sub: "from application"
    }, {
      label: "Customer rating",
      value: "4.9/5",
      sub: "across 1,200 reviews"
    }];
    return /*#__PURE__*/React.createElement("section", {
      style: {
        background: "#fff",
        borderTop: "1px solid var(--border-subtle)",
        borderBottom: "1px solid var(--border-subtle)"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        maxWidth: 1200,
        margin: "0 auto",
        padding: "34px 28px",
        display: "grid",
        gridTemplateColumns: "repeat(4,1fr)",
        gap: 28
      }
    }, items.map(it => /*#__PURE__*/React.createElement(Stat, _extends({
      key: it.label
    }, it)))));
  }
  W.TrustBar = TrustBar;
  function Footer() {
    const cols = [{
      h: "Mortgages",
      links: ["First-time buyers", "Remortgaging", "Moving home", "Buy-to-let"]
    }, {
      h: "Protection",
      links: ["Life insurance", "Income protection", "Buildings & contents", "Critical illness"]
    }, {
      h: "Company",
      links: ["About us", "Our advisers", "Careers", "Contact"]
    }];
    return /*#__PURE__*/React.createElement("footer", {
      style: {
        background: "var(--pcs-ink)",
        color: "rgba(255,255,255,.72)"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        maxWidth: 1200,
        margin: "0 auto",
        padding: "56px 28px 28px"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: "grid",
        gridTemplateColumns: "1.4fr 1fr 1fr 1fr",
        gap: 40
      }
    }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("img", {
      src: "../../assets/logos/pcs-logo-horizontal-reversed.svg",
      alt: "PCS",
      style: {
        height: 40
      }
    }), /*#__PURE__*/React.createElement("p", {
      style: {
        font: "400 14px/1.6 var(--font-sans)",
        marginTop: 16,
        maxWidth: 280
      }
    }, "Professional property people. Clear mortgage advice for homeowners, landlords and first-time buyers across England & Wales.")), cols.map(c => /*#__PURE__*/React.createElement("div", {
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
    }, c.links.map(l => /*#__PURE__*/React.createElement("a", {
      key: l,
      href: "#",
      style: {
        font: "400 14px var(--font-sans)",
        color: "rgba(255,255,255,.72)",
        textDecoration: "none"
      }
    }, l)))))), /*#__PURE__*/React.createElement("div", {
      style: {
        borderTop: "1px solid rgba(255,255,255,.14)",
        marginTop: 40,
        paddingTop: 22,
        font: "400 12.5px/1.7 var(--font-sans)",
        color: "rgba(255,255,255,.55)"
      }
    }, /*#__PURE__*/React.createElement("p", {
      style: {
        margin: "0 0 10px"
      }
    }, /*#__PURE__*/React.createElement("strong", {
      style: {
        color: "rgba(255,255,255,.8)"
      }
    }, "Your home may be repossessed if you do not keep up repayments on your mortgage.")), /*#__PURE__*/React.createElement("p", {
      style: {
        margin: 0
      }
    }, "Property Clinic Solutions Limited is authorised and regulated by the Financial Conduct Authority. Financial Services Register no. 1040229. Registered in England & Wales, company no. 15630130. Registered office: 1 Mychell House, Pincott Road, London SW19 2NN. For our mortgage advice services we may charge a fee ranging from \xA30 to \xA3499, depending on the type of application. \xA9 ", new Date().getFullYear(), " Property Clinic Solutions Ltd."))));
  }
  W.Footer = Footer;
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/site-parts.jsx", error: String((e && e.message) || e) }); }

__ds_ns.Button = __ds_scope.Button;

__ds_ns.IconButton = __ds_scope.IconButton;

__ds_ns.Avatar = __ds_scope.Avatar;

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.Stat = __ds_scope.Stat;

__ds_ns.Tag = __ds_scope.Tag;

__ds_ns.Alert = __ds_scope.Alert;

__ds_ns.Progress = __ds_scope.Progress;

__ds_ns.Steps = __ds_scope.Steps;

__ds_ns.Checkbox = __ds_scope.Checkbox;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.Select = __ds_scope.Select;

__ds_ns.Switch = __ds_scope.Switch;

__ds_ns.Tabs = __ds_scope.Tabs;

})();
