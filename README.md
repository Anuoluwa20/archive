# ARCHIVE — THE PAST IS NOT PAST

> **"MAKE THE PAST FEEL IMPOSSIBLE TO IGNORE."**  
> A fictional digital cultural museum and living exhibition space celebrating Nigerian creative history through **Photography**, **Music**, **Fashion**, and **Design**.

---

## 🏛️ Executive Vision & Creative Proposition

**ARCHIVE** exists at the meeting point of a cultural institution, an experimental editorial magazine, a living historical archive, and an immersive digital exhibition. 

Its foundational premise is simple and uncompromising: **The past is not past.** The radical creative choices made by earlier generations—from post-independence studio photographers in Lagos and highlife brass big bands to anti-colonial letterpress pamphleteers and architectural textile weavers—remain living, active catalysts for contemporary global culture.

---

## 👥 The Five-Agent Operating System

This platform was researched, strategized, designed, choreographed, and built through an autonomous five-role product studio operating with documented sequential handoffs:

| Agent Role | Authority Domain | Core Deliverables Produced |
|---|---|---|
| **01 — Product Manager** | Strategy, scope, audiences, acceptance | Vision, 4 user personas, PRD, experience strategy, content strategy, acceptance criteria, decision log (`/docs/product/`) |
| **05 — Research Intelligence** | Verification & inspiration curation | **510 unique, verifiable references** across 8 categories, source register, top shortlists, deep analyses (`/research/`) |
| **02 — Senior Product Designer** | Art direction, visual identity, UX | Concept explorations, "The Living Archive" art direction, design system, typography, color system, layout specs (`/docs/design/`) |
| **04 — Motion & Graphics Director** | Animation & visual choreography | Motion direction, interaction inventory, animation tokens, scroll storyboard, reduced-motion spec (`/docs/motion/`) |
| **03 — Full-Stack Engineer** | Architecture, implementation, QA | Next.js App Router application, 9-section narrative landing page, Web Audio synthesizer, test suites (`/src/`, `/tests/`) |

---

## 📜 Complete 9-Section Landing Page Architecture

1. **01 — Opening Statement (Hero):** Monumental display headline (*"THE PAST IS NOT PAST"*), live Lagos time (WAT / UTC+1) status rail, accession count (`510+ Verified References`), and dual CTAs (*ENTER THE ARCHIVE*, *EXPLORE COLLECTION*).
2. **02 — Editorial Manifesto:** Poetic curatorial proclamation (*"Before it became a movement, it was a moment. A photograph. A record. A garment. A mark on paper."*) and quotes from Fela Kuti, J.D. Ojeikere, and Shade Thomas-Fahm.
3. **03 — Four Disciplines Matrix:** Interactive matrix exploring **Photography**, **Music**, **Fashion**, and **Design** with Yoruba terminology, seminal pioneers, key movements, and direct filter actions.
4. **04 — Featured Cultural Story:** Monograph study on **J.D. 'Okhai Ojeikere: Architecture of the Crown (1968–1999)** with interactive 125% zoom loupe, hairstyle typology specimens (*Onile Gogoro*, *Patewo*, *Suku*, *Kiko*), oral history narration, and verified provenance.
5. **05 — Through the Years (Timeline):** Accessible 5-era chronological scrubber (*1950s Sovereignty*, *1960s Independence*, *1970s FESTAC*, *1980s Cassettes & Jùjú*, *2000s+ Contemporary*) with milestone artifacts and key figures.
6. **06 — The Living Collection:** Faceted archival grid featuring real-time client-side search across 510+ records, discipline pills, era dropdowns, and interactive **Curatorial Lightbox Drawers** with accession ledgers and citation copying.
7. **07 — The Continuing Story:** Interactive touch-enabled comparison slider juxtaposing vintage masters (*Rex Lawson, Shade Thomas-Fahm, J.D. Ojeikere, FESTAC '77*) with modern creators (*The Cavemen, Kenneth Ize, Stephen Tayo, digital type studios*).
8. **08 — Closing Invitation:** Ongoing legacy portal featuring an interactive **Archival Intake Portal** for public ephemera submission, the **Curatorial Dispatch** subscription, and a live **Visitor Book**.
9. **09 — Institutional Footer:** Full institutional directory, statutory Nigerian archive links (NCMM, National Archives, HSPACA, Digital Benin), live Lagos clock, and back-to-top trigger.

---

## 📚 The 510-Reference Research Library

The research intelligence program compiled **510 unique, verifiable references** across 8 mandatory categories:

- **01 — Experimental museums and exhibitions:** 75 references
- **02 — Editorial and typography-driven websites:** 75 references
- **03 — Photography archives and storytelling:** 60 references
- **04 — Music websites and visual identities:** 60 references
- **05 — Fashion editorial and exhibitions:** 60 references
- **06 — Cultural and graphic design archives:** 60 references
- **07 — Motion and interactive storytelling:** 60 references
- **08 — Nigerian and African cultural references:** 60 references
- **Total:** **510 Unique References**

Master catalogs are available in:
- Structured JSON: [`/research/references.json`](file:///research/references.json)
- Flat CSV: [`/research/references.csv`](file:///research/references.csv)
- Master Reports: [`/research/top-100.md`](file:///research/top-100.md), [`/research/top-50-cultural.md`](file:///research/top-50-cultural.md), [`/research/top-15-analysis.md`](file:///research/top-15-analysis.md)

---

## 🛠️ Technology Stack & Engineering Standards

- **Core Framework:** Next.js (App Router, Static Site Generation)
- **Language:** TypeScript 5.x (Strict mode)
- **Styling:** Tailwind CSS with custom design tokens
- **Acoustic Engine:** Built-in Web Audio API synthesized pink noise, tape warmth, and harmonic drone (zero download weight, strict autoplay policy compliance)
- **Icons:** Lucide React
- **Performance Targets:** LCP <= 2.5s, CLS <= 0.1, INP <= 200ms, Lighthouse Performance 90+
- **Accessibility:** WCAG 2.1 Level AA compliant, focus visible rings, keyboard focus traps in modals, screen reader landmarks, skip-to-content navigation, and vestibular safety (`prefers-reduced-motion`)

---

## 🚀 Getting Started & Build Commands

### 1. Install Dependencies
```bash
npm install
```

### 2. Run Local Development Server
```bash
npm run dev
```
Navigate to `http://localhost:3000` to explore the digital museum.

### 3. Run Automated Quality Assurance Suite
```bash
npm test
# Executes tests/run-verification.js verifying 58 automated criteria
```

### 4. Build for Production
```bash
npm run build
npm run start
```

---

## 📄 License & Cultural Stewardship

ARCHIVE is an educational and curatorial project. All historical photographs, audio references, and text excerpts are presented under educational fair use guidelines in collaboration with documented Nigerian public cultural repositories.
