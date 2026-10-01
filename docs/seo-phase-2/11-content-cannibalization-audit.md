# 11 — Content Cannibalization & Intent Conflict Audit

## 1. Audit Principles & Conflict Prevention Rules

To prevent keyword cannibalization (where multiple pages on the same website compete for the exact same query in Google search results):
1. **One Page Per Core Intent**: Each target keyword phrase or primary question must have exactly one primary landing page.
2. **Service vs Article Separation**: Commercial service pages rank for transactional/solution queries (e.g., "lead conversion systems"); blog articles rank for informational/problem queries (e.g., "why leads don't respond").
3. **No Redundant Local Variants**: Local queries map directly into `/services/chennai-conversion-consultant` or standard service pages via location entity signals rather than separate duplicated service pages.

---

## 2. Existing Page vs Proposed Topic Cannibalization Audit

| Existing Page | Proposed Future Topic / Keyword | Potential Conflict? | Risk Level | Strategic Recommendation |
|---|---|---|---|---|
| `/` (Homepage) | "Business Conversion Consultancy" | Yes | High | **KEEP SEPARATE**. Homepage is the primary brand target for "Business Conversion Consultancy". Do NOT create a separate blog post targeting "Business Conversion Consultancy". |
| `/what-we-build` | "Business conversion system building blocks" | Yes | Medium | **KEEP SEPARATE**. `/what-we-build` is the commercial architecture overview page. Future pillar articles must link to it, not duplicate its summary. |
| `/approach` | "10-stage revenue journey diagnostic" | Yes | Medium | **KEEP SEPARATE**. `/approach` owns the primary framework positioning. Blog articles can expand on single stages (e.g., "Stage 05: Respond") but must link back to `/approach`. |
| `/services/lead-conversion-systems` | "What is a lead conversion system?" | Yes | High | **CONSOLIDATE IN SERVICE PAGE / SPEAKABLE BLOCK**. The service page already contains a 50-word direct answer definition. The blog pillar should link directly to the service page. |
| `/services/whatsapp-sales-systems` | "WhatsApp sales systems for B2B" | Yes | High | **KEEP SEPARATE**. Service page owns the transactional service query. Blog posts target specific problem questions (e.g., "why price queries vanish"). |
| `/services/conversion-websites` | "Conversion focused web design" | Yes | High | **KEEP SEPARATE**. Service page owns the transactional service query. Blog posts target informational queries (e.g., "brochure vs conversion website"). |
| `/services/marketing-to-sales-systems` | "Marketing to sales alignment consultancy" | Yes | Medium | **KEEP SEPARATE**. Service page owns the commercial query. Blog posts target tactical topics (e.g., "passing UTMs to CRM"). |
| `/services/sales-process-optimization` | "B2B sales qualification framework" | Yes | Medium | **KEEP SEPARATE**. Service page owns the commercial consulting query. Blog posts provide script templates and link to the service page. |
| `/services/chennai-conversion-consultant` | "Business conversion consultant Chennai" | Yes | High | **DO NOT CREATE SEPARATE CHENNAI PAGES**. `/services/chennai-conversion-consultant` is the single canonical page for all Chennai conversion consulting queries. |

---

## 3. Explicit List of Content That Should NOT Be Created

To protect topical focus and avoid generic agency fluff, Naxolutions will **EXPLICITLY REJECT** creating the following articles:

1. ❌ **"What is Digital Marketing?"** (Generic, low commercial intent, dilutes Business Conversion Consultancy positioning).
2. ❌ **"10 Benefits of Social Media Marketing"** (Irrelevant to Naxolutions core services).
3. ❌ **"What is SEO and Why Do You Need It?"** (Naxolutions is not a generic SEO agency; SEO is an acquisition tactic, not the conversion engine).
4. ❌ **"Why Your Business Needs a Website in 2026"** (Basic, low-intent, generic filler).
5. ❌ **"Top 5 CRM Software in 2026"** (Software review affiliate content dilutes principal consulting authority).
6. ❌ **Duplicate Local Landing Pages** (e.g., `/services/lead-conversion-consultant-bengaluru`, `/services/lead-conversion-consultant-mumbai` — avoid thin doorway pages).
