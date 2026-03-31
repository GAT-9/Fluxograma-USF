# Hospital Staff FAQ - Design Brainstorm

## Audience & Purpose
Internal hospital staff reference page for patient admission activities.
Tone: Professional, clear, trustworthy, efficient.

---

<response>
<idea>
**Design Movement:** Clinical Modernism — inspired by the precision of medical instruments and the clarity of scientific documentation.

**Core Principles:**
1. Information hierarchy above all — every element earns its place through utility.
2. Controlled whitespace as a structural tool, not decoration.
3. Typographic contrast between a sharp serif header font and a neutral sans-serif body.
4. Color used sparingly to signal status, category, and action.

**Color Philosophy:**
Deep navy (#0D1F3C) as the primary structural color — evoking authority and trust. Crisp white backgrounds for content areas. A single accent of medical teal (#00A896) for interactive elements and highlights. Warm slate (#6B7280) for secondary text. No gradients except a subtle navy-to-dark-blue on the header.

**Layout Paradigm:**
Left-anchored sidebar navigation listing activity categories (Admission, Triage, Documentation, etc.) with the FAQ content occupying the right 75% of the screen. The sidebar is sticky and always visible. This mirrors clinical reference manuals and internal hospital intranets.

**Signature Elements:**
- Thin horizontal rule separators with a small icon badge for each FAQ category.
- Numbered step indicators inside each answer for procedural activities.

**Interaction Philosophy:**
Clicking a category in the sidebar smoothly scrolls to the section. FAQ items expand/collapse with a clean accordion. Active sidebar item is highlighted with a left-border accent in teal.

**Animation:**
Subtle fade-in on page load for the main content. Accordion open/close with a 200ms ease-in-out. Sidebar active state transitions with a 150ms color shift.

**Typography System:**
- Headings: Playfair Display (serif) — bold, authoritative.
- Body: Source Sans Pro — readable at small sizes, clinical feel.
- Code/steps: Roboto Mono for numbered step labels.
</idea>
<probability>0.08</probability>
</response>

<response>
<idea>
**Design Movement:** Institutional Brutalism — raw structure, exposed grid, utilitarian beauty inspired by hospital architecture.

**Core Principles:**
1. Grid is visible and intentional — borders and dividers are structural, not decorative.
2. High contrast between sections using alternating background tones.
3. Bold, oversized category labels as visual anchors.
4. Zero decorative elements — every visual choice is functional.

**Color Philosophy:**
Off-white (#F5F5F0) background with charcoal (#1A1A1A) text. Accent color: a stark medical red (#C0392B) used only for critical notices and active states. Section backgrounds alternate between off-white and a light warm gray (#EBEBEB). No shadows — borders define depth.

**Layout Paradigm:**
Full-width horizontal sections, each representing an activity category. Each section has a large bold category title on the left spanning 30% of the width, with FAQ items stacked on the right 70%. The page scrolls vertically through categories like a structured document.

**Signature Elements:**
- Large bold category numbers (01, 02, 03) as section anchors.
- Thick top border on each category section in the accent color.

**Interaction Philosophy:**
FAQ items toggle open with a sharp, instant reveal (no animation — brutalist ethos). A sticky top navigation bar lists category numbers for quick jump navigation.

**Animation:**
Minimal — only a 100ms opacity shift on hover states. No entrance animations. Scrolling is the primary interaction.

**Typography System:**
- Headings: Space Grotesk — geometric, bold, modern.
- Body: IBM Plex Sans — technical, precise.
- Category numbers: Space Grotesk Black, oversized.
</idea>
<probability>0.07</probability>
</response>

<response>
<idea>
**Design Movement:** Soft Clinical — warm, approachable professionalism. Like a well-designed hospital brochure meets a modern SaaS product.

**Core Principles:**
1. Warmth without sacrificing clarity — soft tones that reduce cognitive fatigue for staff reading long procedures.
2. Card-based layout for each FAQ item — clear boundaries, easy scanning.
3. Category color-coding for fast visual orientation.
4. Progressive disclosure — summary visible, full steps revealed on expand.

**Color Philosophy:**
Warm white (#FAFAF8) background. Primary: deep teal (#1A6B72). Category accent colors: soft blue (#4A90D9), sage green (#5A9A6E), warm amber (#D4873A), muted violet (#7B68B5). Each admission activity category gets its own accent. Neutral text: #2D3748.

**Layout Paradigm:**
Top navigation bar with category tabs. Below, a two-column card grid for FAQ items within the selected category. Each card shows the question as a header and a collapsed answer. A hero section at the top with a brief description of the page's purpose and a search bar.

**Signature Elements:**
- Left-colored border on each card matching its category color.
- A small tag/badge on each card indicating the responsible department (e.g., "Admissions Office", "Nursing", "Reception").

**Interaction Philosophy:**
Tab switching animates the card grid in with a subtle slide. Cards expand inline to show full procedural steps. Search filters cards in real time.

**Animation:**
Card entrance: staggered fade-up (50ms delay between cards). Tab switch: 250ms cross-fade. Accordion: 300ms smooth height transition.

**Typography System:**
- Headings: DM Sans — friendly, modern, slightly rounded.
- Body: Lato — warm, highly legible.
- Tags/badges: DM Sans Medium, uppercase tracking.
</idea>
<probability>0.09</probability>
</response>

---

## Selected Approach
**Soft Clinical** — warm, approachable professionalism with card-based layout, category color-coding, and progressive disclosure. This best serves hospital staff who need to quickly find and read procedural information without visual fatigue.
