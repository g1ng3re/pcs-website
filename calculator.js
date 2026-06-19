/* PCS mortgage calculator — interactive, client-side only, no data captured.
   Exposes window.PCSCalc.Calculator. */
(function () {
  const {
    Button,
    Select
  } = window.PCSDesignSystem_269f6d;
  const KEY = "pcs-calc-v1";
  const gbp0 = n => "£" + Math.round(n).toLocaleString("en-GB");
  const clampNum = (v, min, max) => Math.min(max, Math.max(min, v));
  function monthlyPayment(loan, annualRate, years, interestOnly) {
    const n = years * 12;
    const r = annualRate / 100 / 12;
    if (interestOnly) return loan * r;
    if (r === 0) return loan / n;
    const f = Math.pow(1 + r, n);
    return loan * r * f / (f - 1);
  }

  /* Animates a number toward its target over ~420ms (ease-out) so result
     figures glide when inputs change. Respects reduced-motion. */
  function useTween(target, ms = 420) {
    const [val, setVal] = React.useState(target);
    const ref = React.useRef(target);
    React.useEffect(() => {
      const reduce = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      if (reduce) {
        ref.current = target;
        setVal(target);
        return;
      }
      const from = ref.current,
        to = target,
        start = performance.now();
      let raf;
      const tick = now => {
        const t = Math.min(1, (now - start) / ms);
        const e = 1 - Math.pow(1 - t, 3);
        const v = from + (to - from) * e;
        ref.current = v;
        setVal(v);
        if (t < 1) raf = requestAnimationFrame(tick);else {
          ref.current = to;
          setVal(to);
        }
      };
      raf = requestAnimationFrame(tick);
      return () => cancelAnimationFrame(raf);
    }, [target, ms]);
    return val;
  }

  /* Labelled number field with prefix/suffix, styled to match the DS inputs. */
  function NumField({
    label,
    value,
    onChange,
    min,
    max,
    step = 1,
    prefix,
    suffix,
    hint
  }) {
    return /*#__PURE__*/React.createElement("label", {
      style: {
        display: "block"
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        display: "block",
        font: "600 14px var(--font-sans)",
        color: "var(--text-strong)",
        marginBottom: 7
      }
    }, label), /*#__PURE__*/React.createElement("span", {
      style: {
        display: "flex",
        alignItems: "center",
        background: "#fff",
        border: "1px solid var(--border-strong,#D3D7E0)",
        borderRadius: 12,
        padding: "0 14px",
        height: 50
      }
    }, prefix && /*#__PURE__*/React.createElement("span", {
      style: {
        font: "600 16px var(--font-sans)",
        color: "var(--text-muted)",
        marginRight: 6
      }
    }, prefix), /*#__PURE__*/React.createElement("input", {
      type: "number",
      value: value,
      min: min,
      max: max,
      step: step,
      inputMode: "numeric",
      onChange: e => onChange(e.target.value === "" ? "" : Number(e.target.value)),
      style: {
        flex: 1,
        border: "none",
        outline: "none",
        background: "transparent",
        font: "600 16px var(--font-sans)",
        color: "var(--text-strong)",
        width: "100%",
        minWidth: 0
      }
    }), suffix && /*#__PURE__*/React.createElement("span", {
      style: {
        font: "600 16px var(--font-sans)",
        color: "var(--text-muted)",
        marginLeft: 6
      }
    }, suffix)), hint && /*#__PURE__*/React.createElement("span", {
      style: {
        display: "block",
        font: "400 12.5px var(--font-sans)",
        color: "var(--text-muted)",
        marginTop: 6
      }
    }, hint));
  }
  function Slider({
    label,
    value,
    onChange,
    min,
    max,
    step,
    format
  }) {
    const pct = (value - min) / (max - min) * 100;
    return /*#__PURE__*/React.createElement("label", {
      style: {
        display: "block"
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        display: "flex",
        justifyContent: "space-between",
        font: "600 14px var(--font-sans)",
        color: "var(--text-strong)",
        marginBottom: 10
      }
    }, /*#__PURE__*/React.createElement("span", null, label), /*#__PURE__*/React.createElement("span", {
      style: {
        color: "var(--pcs-blue)"
      }
    }, format ? format(value) : value)), /*#__PURE__*/React.createElement("input", {
      type: "range",
      value: value,
      min: min,
      max: max,
      step: step,
      onChange: e => onChange(Number(e.target.value)),
      style: {
        width: "100%",
        accentColor: "var(--pcs-blue)",
        background: `linear-gradient(90deg,var(--pcs-blue) ${pct}%, var(--border-default) ${pct}%)`,
        height: 6,
        borderRadius: 999,
        appearance: "none",
        WebkitAppearance: "none"
      }
    }));
  }
  function Result({
    label,
    value,
    sub,
    big,
    tone = "ink"
  }) {
    return /*#__PURE__*/React.createElement("div", {
      style: {
        padding: "18px 0",
        borderTop: "1px solid var(--border-subtle)"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        font: "600 13px var(--font-sans)",
        letterSpacing: ".04em",
        textTransform: "uppercase",
        color: "rgba(255,255,255,.62)"
      }
    }, label), /*#__PURE__*/React.createElement("div", {
      style: {
        font: (big ? "800 40px" : "800 26px") + " var(--font-display)",
        letterSpacing: "-.02em",
        color: tone === "emerald" ? "#7BE0B4" : "#fff",
        marginTop: 6,
        lineHeight: 1
      }
    }, value), sub && /*#__PURE__*/React.createElement("div", {
      style: {
        font: "500 13px var(--font-sans)",
        color: "rgba(255,255,255,.6)",
        marginTop: 6
      }
    }, sub));
  }
  function Calculator() {
    const {
      Icon
    } = window.PCSIcons;
    const {
      CALENDLY
    } = window.PCSHome;
    const defaults = {
      price: 320000,
      deposit: 48000,
      term: 30,
      rate: 4.8,
      interestOnly: false,
      income: 60000
    };
    const [s, setS] = React.useState(() => {
      try {
        const v = JSON.parse(localStorage.getItem(KEY));
        if (v) return {
          ...defaults,
          ...v
        };
      } catch (e) {}
      return defaults;
    });
    React.useEffect(() => {
      try {
        localStorage.setItem(KEY, JSON.stringify(s));
      } catch (e) {}
    }, [s]);
    const set = k => v => setS(p => ({
      ...p,
      [k]: v
    }));
    const price = Number(s.price) || 0;
    const deposit = clampNum(Number(s.deposit) || 0, 0, price);
    const term = clampNum(Number(s.term) || 1, 1, 40);
    const rate = clampNum(Number(s.rate) || 0, 0, 20);
    const loan = Math.max(0, price - deposit);
    const ltv = price > 0 ? loan / price * 100 : 0;
    const m = monthlyPayment(loan, rate, term, s.interestOnly);
    const totalPaid = s.interestOnly ? m * term * 12 + loan : m * term * 12;
    const totalInterest = s.interestOnly ? m * term * 12 : m * term * 12 - loan;
    const income = Number(s.income) || 0;
    const maxBorrow = income * 4.5;
    const within = loan <= maxBorrow;
    const rateSteps = [-1, 0, 1, 2, 3].map(d => ({
      d,
      rate: rate + d,
      m: monthlyPayment(loan, Math.max(0, rate + d), term, s.interestOnly)
    }));
    const maxM = Math.max(...rateSteps.map(x => x.m), 1);

    // Tweened display values so the figures glide when inputs change.
    const mT = useTween(m);
    const totalPaidT = useTween(totalPaid);
    const totalInterestT = useTween(totalInterest);
    const ltvT = useTween(ltv);
    return /*#__PURE__*/React.createElement("section", {
      className: "reveal",
      style: {
        background: "var(--surface-page)",
        padding: "56px 28px 80px"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        maxWidth: 1100,
        margin: "0 auto"
      }
    }, /*#__PURE__*/React.createElement("div", {
      className: "pcs-calc-grid",
      style: {
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        gap: 24,
        alignItems: "start"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        background: "#fff",
        border: "1px solid var(--border-subtle)",
        borderRadius: 20,
        padding: 30,
        boxShadow: "var(--shadow-sm)"
      }
    }, /*#__PURE__*/React.createElement("h2", {
      style: {
        font: "800 22px var(--font-display)",
        color: "var(--pcs-ink)",
        letterSpacing: "-.01em",
        margin: "0 0 20px"
      }
    }, "Your figures"), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "grid",
        gap: 18
      }
    }, /*#__PURE__*/React.createElement(NumField, {
      label: "Property price",
      value: s.price,
      onChange: set("price"),
      min: 0,
      step: 5000,
      prefix: "£"
    }), /*#__PURE__*/React.createElement(NumField, {
      label: "Deposit",
      value: s.deposit,
      onChange: set("deposit"),
      min: 0,
      step: 1000,
      prefix: "£",
      hint: "Loan to value: " + ltv.toFixed(0) + "%"
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        gap: 16
      }
    }, /*#__PURE__*/React.createElement(NumField, {
      label: "Term",
      value: s.term,
      onChange: set("term"),
      min: 1,
      max: 40,
      suffix: "yrs"
    }), /*#__PURE__*/React.createElement(NumField, {
      label: "Interest rate",
      value: s.rate,
      onChange: set("rate"),
      min: 0,
      max: 20,
      step: 0.1,
      suffix: "%"
    })), /*#__PURE__*/React.createElement(Select, {
      label: "Repayment type",
      value: s.interestOnly ? "Interest Only" : "Capital and Interest",
      onChange: v => set("interestOnly")(v === "Interest Only"),
      options: ["Capital and Interest", "Interest Only"]
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        borderTop: "1px dashed var(--border-default)",
        paddingTop: 18
      }
    }, /*#__PURE__*/React.createElement(NumField, {
      label: "Annual income (optional)",
      value: s.income,
      onChange: set("income"),
      min: 0,
      step: 1000,
      prefix: "£",
      hint: "Used only for a rough affordability guide. Lenders typically lend up to ~4.5x income."
    })))), /*#__PURE__*/React.createElement("div", {
      style: {
        position: "sticky",
        top: 92
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        background: "var(--pcs-ink)",
        borderRadius: 20,
        padding: 30,
        color: "#fff",
        boxShadow: "var(--shadow-lg)"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        font: "700 12px var(--font-sans)",
        letterSpacing: ".14em",
        textTransform: "uppercase",
        color: "rgba(255,255,255,.6)"
      }
    }, "Estimated result"), /*#__PURE__*/React.createElement(Result, {
      label: s.interestOnly ? "Monthly payment (interest only)" : "Monthly payment",
      value: gbp0(mT),
      sub: "on a " + gbp0(loan) + " loan",
      big: true,
      tone: "emerald"
    }), /*#__PURE__*/React.createElement(Result, {
      label: "Total paid over term",
      value: gbp0(totalPaidT),
      sub: s.interestOnly ? "includes the loan repaid at the end" : "capital and interest combined"
    }), /*#__PURE__*/React.createElement(Result, {
      label: "Total interest",
      value: gbp0(totalInterestT)
    }), /*#__PURE__*/React.createElement(Result, {
      label: "Loan to value",
      value: ltvT.toFixed(0) + "%",
      sub: ltv > 90 ? "Higher LTV. Fewer lenders, higher rates." : ltv <= 60 ? "Low LTV. Access to the best rates." : "A typical LTV band."
    }), income > 0 && /*#__PURE__*/React.createElement("div", {
      style: {
        marginTop: 18,
        padding: "16px 18px",
        borderRadius: 12,
        background: within ? "rgba(16,158,108,.16)" : "rgba(219,159,31,.16)",
        display: "flex",
        gap: 12
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: within ? "checkCircle" : "scale",
      size: 22,
      style: {
        color: within ? "#7BE0B4" : "var(--pcs-gold)",
        flex: "none",
        marginTop: 1
      }
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        font: "500 13.5px/1.5 var(--font-sans)",
        color: "rgba(255,255,255,.92)"
      }
    }, "A typical lender might advance up to ", /*#__PURE__*/React.createElement("strong", null, gbp0(maxBorrow)), " (about 4.5x income). Your loan is ", gbp0(loan), ", ", within ? "which is within that guide." : "which is above it. Specialist or stretch lenders may still help."))), /*#__PURE__*/React.createElement("div", {
      style: {
        background: "#fff",
        border: "1px solid var(--border-subtle)",
        borderRadius: 20,
        padding: 26,
        marginTop: 20,
        boxShadow: "var(--shadow-sm)"
      }
    }, /*#__PURE__*/React.createElement("h3", {
      style: {
        font: "800 17px var(--font-display)",
        color: "var(--pcs-ink)",
        margin: "0 0 4px"
      }
    }, "If the rate moves"), /*#__PURE__*/React.createElement("p", {
      style: {
        font: "400 13.5px var(--font-sans)",
        color: "var(--text-muted)",
        margin: "0 0 16px"
      }
    }, "Monthly payment at rates 1% below to 3% above your figure."), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        flexDirection: "column",
        gap: 12
      }
    }, rateSteps.map(x => /*#__PURE__*/React.createElement("div", {
      key: x.d,
      style: {
        display: "grid",
        gridTemplateColumns: "62px 1fr 96px",
        alignItems: "center",
        gap: 12
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        font: (x.d === 0 ? "800" : "600") + " 13px var(--font-sans)",
        color: x.d === 0 ? "var(--pcs-blue)" : "var(--text-body)"
      }
    }, x.rate.toFixed(1), "%"), /*#__PURE__*/React.createElement("span", {
      style: {
        height: 12,
        borderRadius: 999,
        background: "var(--surface-sunken)",
        overflow: "hidden"
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        display: "block",
        height: "100%",
        width: x.m / maxM * 100 + "%",
        background: x.d === 0 ? "var(--pcs-blue)" : "var(--pcs-blue-200,#9DB4F0)",
        borderRadius: 999,
        transition: "width .25s var(--ease-out)"
      }
    })), /*#__PURE__*/React.createElement("span", {
      style: {
        textAlign: "right",
        font: (x.d === 0 ? "800" : "600") + " 14px var(--font-sans)",
        color: "var(--pcs-ink)"
      }
    }, gbp0(x.m)))))))), /*#__PURE__*/React.createElement("div", {
      style: {
        marginTop: 28,
        background: "var(--pcs-blue-tint)",
        borderRadius: 18,
        padding: "26px 28px",
        display: "flex",
        gap: 18,
        alignItems: "center",
        flexWrap: "wrap"
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "shield",
      size: 26,
      style: {
        color: "var(--pcs-blue)",
        flex: "none"
      }
    }), /*#__PURE__*/React.createElement("p", {
      style: {
        flex: "1 1 320px",
        font: "500 14.5px/1.55 var(--font-sans)",
        color: "var(--pcs-ink)",
        margin: 0
      }
    }, "These figures are illustrative only and not a quote or a recommendation. A real affordability assessment uses your income, outgoings, credit profile, and lender criteria. Your home may be repossessed if you do not keep up repayments on your mortgage."), /*#__PURE__*/React.createElement(Button, {
      size: "lg",
      href: CALENDLY,
      target: "_blank",
      rel: "noopener",
      className: "pcs-calc-cta",
      rightIcon: /*#__PURE__*/React.createElement(Icon, {
        name: "arrowRight",
        size: 18
      })
    }, "Book a Free Affordability Check With an Adviser"))));
  }
  window.PCSCalc = {
    Calculator
  };
})();