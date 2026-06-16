# Property Clinic Solutions — Design System

A complete, code-first design system for **Property Clinic Solutions (PCS)** — a UK,
FCA-authorised firm of mortgage advisers and "professional property people." The brand
positions itself as a *clinic for your biggest asset*: it diagnoses, advises on and fixes
the financial side of property ownership. The visual identity fuses a **house roof** with a
**medical cross**, and pairs a confident Royal Blue with a reassuring Emerald.

> **Regulatory note** — PCS Limited is authorised and regulated by the Financial Conduct
> Authority (FCA), Financial Services Register no. **1040229**, registered in England & Wales
> (company no. 15630130), registered office 1 Mychell House, Pincott Road, London SW19 2NN.
> Any mortgage marketing must carry the risk warning: *"Your home may be repossessed if you
> do not keep up repayments on your mortgage."*

---

## Sources

This system was built from materials supplied in the `PCS Updated/` codebase:

- **`PCS Brand Guidelines — Full System.pdf`** (v1.1, June 2026) — the master brand book.
  The colour and type specifications below are lifted directly from it. A copy lives at
  `source/PCS Brand Guidelines.pdf`. *(The PDF is fully vector; page renders could not be
  rasterised in-tool, so foundations were transcribed from its text + the logo artwork.)*
- **`logos/`** — the full logo pack (SVG masters + PNG/JPG/favicon exports). The brand
  marks are copied into `assets/logos/`. See `assets/logos/README.md` for the original map.
- **Fonts** — `Archivo` and `Hanken Grotesk` variable TTFs, copied into `assets/fonts/`.

If you have access to the originals, prefer them as the source of truth over any
interpretation here.

---

## Brand at a glance

| | |
|---|---|
| **Name** | Property Clinic Solutions (PCS) |
| **Sector** | UK mortgage advice & property services (FCA regulated) |
| **Promise** | *Professional property people.* Clear advice, kept simple. |
| **Symbol** | House apex (blue up-slope + emerald down-slope) with a chimney and a clinic "+" cross |
| **Primary type** | Archivo (display/headings), Hanken Grotesk (body/UI) |
| **Core colours** | Royal Blue `#002AB1`, Ink `#0C1A3A`, Emerald `#109E6C`, Gold `#DB9F1F` |

---

## CONTENT FUNDAMENTALS — how PCS writes

**Voice:** a trusted, plain-speaking adviser. Knowledgeable but never lofty; the firm does
the heavy lifting so the customer doesn't have to. Think "your sensible friend who happens
to be a mortgage expert."

- **Person:** Speak to the customer as **"you"**; the firm is **"we"**. ("We'll handle the
  paperwork so you don't have to.")
- **Tone:** Warm, calm, reassuring, quietly confident. Reduce anxiety around a stressful,
  high-stakes topic (money + home). Never hypey, never salesy.
- **Casing:** Sentence case everywhere — headlines, buttons, nav. Reserve UPPERCASE only for
  the small tracked **labels/eyebrows** (12px, `0.14em`). Never Title Case headlines.
- **Clarity over jargon:** Prefer "remortgage" to "product transfer," "monthly payment" to
  "amortised instalment." Where regulated terms are needed, explain them.
- **Sentence length:** Short. One idea per sentence. Generous use of full stops.
- **Numbers:** Concrete and specific — "£0–£499 fee," "decisions in ~14 days," "5 simple
  steps." Use the £ sign; write large sums as "£48m," not "£48,000,000."
- **Emoji:** **None.** This is a regulated financial brand — emoji read as flippant.
- **Punctuation:** UK English spelling (authorised, organise, programme). Oxford comma optional
  but be consistent. Use en-dashes for ranges (£0–£499).
- **Compliance is part of the copy:** the repossession risk warning, FCA reference and fee
  disclosure are first-class content, not afterthoughts — present them clearly, not in
  microscopic grey type.

**Sample copy**
- Hero: *"Mortgage advice that fits your life, not the other way round."*
- Sub: *"We help homeowners, landlords and first-time buyers across England & Wales find the
  right mortgage — and keep their property in good health."*
- CTA: *"Get mortgage advice"* · *"Book a free call"* · *"Start your application"*
- Reassurance line: *"Free initial consultation. No obligation. Real human advisers."*

---

## VISUAL FOUNDATIONS

**Overall feel:** clean, bright, trustworthy, a little clinical-in-a-good-way. Lots of white
(warm paper) space; bold Archivo headlines; rounded, friendly geometry that echoes the
logo's rounded stroke caps. Optimistic, not corporate-cold.

### Colour
- **Royal Blue `#002AB1`** is the primary — primary buttons, links, the symbol's left slope,
  key emphasis. It does the heavy lifting.
- **Emerald `#109E6C`** is the secondary "solutions" colour — success, positive states,
  affirmative secondary buttons, the symbol's right slope.
- **Ink `#0C1A3A`** is the darkest tone — body headlines, dark sections, footer.
- **Gold `#DB9F1F`** is a sparing accent — ratings, highlights, a single emphasised word.
  Never a large fill.
- **Tints** (`#E7ECFA` blue, `#E3F4EC` emerald, `#FBF2DB` gold) wash section backgrounds and
  fill soft badges/cards.
- **Neutrals** lean very slightly cool/navy at the dark end and warm at the light end
  (`#F7F7F4` paper). Pure grey is avoided.
- Imagery should be **bright, warm and natural** — real UK homes and real people, daylight,
  optimistic. Avoid cold stock-corporate blues or heavy filters. No black & white.

### Typography
Lifted from the brand book:
| Role | Font | Spec |
|---|---|---|
| Display | Archivo 800 | 56/60, −0.02em |
| Heading | Archivo 700 | 36/42, −0.01em |
| Subhead | Hanken Grotesk 600 | 22/28 |
| Body | Hanken Grotesk 400 | 16/26 |
| Label | Hanken Grotesk 700 | 12, 0.14em, uppercase |

Archivo is the brand's voice in headlines — tight tracking, heavy weight, occasionally set
in its condensed/expanded widths for display moments. Hanken Grotesk keeps body and UI
legible and humane. Pair only these two.

### Layout & space
- 4px spacing grid (`--space-*`). Generous vertical rhythm; sections breathe.
- Max content width ~1200px; narrow prose ~760px.
- Strong left alignment; headlines often anchored to a grid, supported by an uppercase
  eyebrow label above.

### Shape, borders & elevation
- **Corner radii** are rounded and friendly: inputs/cards `12–16px`, buttons & chips are
  fully **pill** (999px), big feature panels up to `24–32px`.
- **Borders** are hairline and quiet — `#E6E7EC` mist for dividers, `#D3D7E0` for inputs.
  Ink borders only for high-contrast emphasis.
- **Shadows** are soft and **navy-tinted** (never grey): a tight `xs` for chips, up to a
  diffuse `lg` for raised cards. Primary buttons carry a subtle blue glow (`--shadow-brand`).
- **Cards**: white surface, 1px mist border, soft `sm`/`md` shadow, 16px radius. An optional
  3px Royal-Blue top rule marks a featured card. No coloured-left-border cards.

### Motion
- Calm and confident. `200ms` base, gentle ease-out `cubic-bezier(.22,1,.36,1)`. **No bounce,
  no spring.** Buttons depress 1px on press; cards lift 2px on hover; fills/underlines slide.
- Respect `prefers-reduced-motion`.

### States
- **Hover:** primary actions darken (`--pcs-blue-hover`); ghost/outline fill a tint; cards lift.
- **Press/active:** darken further + 1px translate down.
- **Focus:** 4px Royal-Blue ring at 20% (`--focus-ring`) — always visible, never removed.
- **Disabled:** 45–55% opacity, no pointer events.

### Transparency & blur
Used sparingly — a frosted, semi-opaque white header on scroll (backdrop-blur) and tint
overlays on hero imagery. Not a glassmorphism brand.

---

## ICONOGRAPHY

The supplied codebase ships **no icon set** of its own (only logo artwork). PCS UI icons
therefore use **Lucide** (https://lucide.dev) — an open-source line set whose **2px rounded
strokes and rounded caps** match the logo's geometry and the brand's friendly-but-precise
feel. This is a **documented substitution**; swap for a bespoke set if one is commissioned.

- **Style:** line/outline, 2px stroke, rounded caps & joins. Never filled, never duotone.
- **Colour:** inherit `currentColor` — Ink or Royal Blue in most contexts, white on dark.
- **Sizing:** 18–20px inline with text, 24px standalone; never below 16px.
- **In this system:** cards and UI kits load Lucide from CDN
  (`https://unpkg.com/lucide@latest`) or inline the path data for self-contained specimens.
  Components that need a glyph (Select chevron, Checkbox tick, Alert icons, Steps tick) inline
  their own small SVGs so the bundle stays dependency-free.
- **Emoji / unicode as icons:** never. The clinic "+" cross is the only "symbolic" mark and it
  belongs to the logo, not the UI.

Brand artwork lives in `assets/logos/` (SVG masters + PNG). Use the simplified
`pcs-favicon.svg` below 48px (it drops the chimney). Never recolour, rotate or restretch the
mark.

---

## VISUAL FOUNDATIONS — token reference

All tokens are CSS custom properties, shipped via `styles.css`. Highlights:

- **Colour:** `--pcs-blue`, `--pcs-ink`, `--pcs-emerald`, `--pcs-gold`, tints, a 0–900 neutral
  ramp, and semantic aliases (`--text-strong`, `--surface-card`, `--border-subtle`, …).
- **Type:** `--font-display` (Archivo), `--font-sans` (Hanken), size/leading/tracking scales,
  plus role classes (`.pcs-display`, `.pcs-h2`, `.pcs-subhead`, `.pcs-body`, `.pcs-label`).
- **Space/shape:** `--space-1…32`, `--radius-xs…pill`, `--shadow-xs…brand`, motion tokens.

---

## INDEX — what's in this project

```
styles.css                 ← the one file consumers link (@imports only)
tokens/
  fonts.css                @font-face for Archivo + Hanken Grotesk
  colors.css               brand, tints, neutral ramp, semantic aliases
  typography.css           families, sizes, weights, leading, tracking
  spacing.css              spacing, radius, shadow, layout, motion
  base.css                 element resets + .pcs-* type role classes
guidelines/                foundation specimen cards (Design System tab)
assets/
  logos/                   PCS marks — SVG masters + PNG + favicon
  fonts/                   Archivo & Hanken Grotesk variable TTFs
components/                reusable React primitives (see below)
ui_kits/                   full-screen product recreations
SKILL.md                   Agent-Skill manifest for download/Claude Code
```

### Components (`window.PCSDesignSystem_269f6d.*`)
- **actions/** — `Button`, `IconButton`
- **forms/** — `Input`, `Select`, `Checkbox`, `Switch`
- **display/** — `Badge`, `Tag`, `Avatar`, `Card`, `Stat`
- **feedback/** — `Alert`, `Progress`, `Steps`
- **navigation/** — `Tabs`

Each component directory holds `<Name>.jsx` + `<Name>.d.ts` + `<Name>.prompt.md`, and one
`@dsCard` HTML specimen per group.

### UI kits
- **ui_kits/website/** — PCS marketing site (hero, services, proof, advisers, quote CTA).
- **ui_kits/portal/** — client portal / mortgage application tracker (dashboard, case progress,
  documents, messages).

*(No slide template ships with this system — the supplied materials were a brand book and logo
pack, not a deck template. Ask if you'd like a branded 16:9 slide kit added.)*

---

## Using the system

Consumers link the single stylesheet and read components off the global namespace:

```html
<link rel="stylesheet" href="styles.css" />
<script src="_ds_bundle.js"></script>
<script type="text/babel">
  const { Button, Card, Steps } = window.PCSDesignSystem_269f6d;
</script>
```

The compiler generates `_ds_bundle.js` / `_ds_manifest.json` automatically — never edit those.
