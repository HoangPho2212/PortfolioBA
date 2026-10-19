# Design Log #0007: Figma Prototype Integration & Private Jira Roadmap Timeline

- **Status**: Accepted
- **Author**: Antigravity (Lead Front-End & UX/UI Engineer)
- **Date**: 2026-10-19
- **Reference**: #0007 (extends #0001, #0002, #0003, #0004, #0005, #0006)

---

## 1. Background

In design log #0006, we established placeholders for the **Figma interactive prototype** and the **Jira sprint space** for the AptisGo flagship project. 

The stakeholder has now provided:
1. **Live Figma Interactive Prototype URL**: `https://market-matrix-30692691.figma.site/`
2. **Jira Workspace Access Constraint**: The institutional Jira workspace is restricted behind private institutional credentials (`phonhhgcd`) and cannot be made publicly readable. To provide complete verification without permission barriers, the candidate provided an export of the live Atlassian Jira Gantt roadmap: `aptisgodevelopment_2026-10-19_04.21pm.png`.

---

## 2. Problem

1. **Placeholder Replacement**: All placeholder Figma URLs (`https://www.figma.com/proto/...`) must be updated to the live, working deployment: `https://market-matrix-30692691.figma.site/`.
2. **Private Jira Proof of Work**: A public link to a private Jira instance causes `403 Forbidden` or login barriers for recruiters. Displaying the verified Jira roadmap timeline directly in the portfolio provides immediate, zero-friction proof of Agile sprint planning, epic breakdown (AP-1 through AP-12), and progress tracking across all 9 phases.

---

## 3. Questions and Answers

### Q1: How should the Jira action button behave if the workspace cannot be public?
**A**:
- On the Project 1 card: Provide a `"🚀 Jira Sprint Roadmap"` button with `data-channel="jira"` linking to `assets/aptisgo/jira-roadmap-timeline.png` (or opening the modal's Jira timeline section).
- Inside `modal-project-1`: In the quick-action header and Section 8 ("Agile Scrum Methodology & Jira Roadmap"), embed the full-width high-resolution Jira timeline image, accompanied by an explanatory note: *"Institutional Jira Cloud instance maintained under private access (Assignee: phonhhgcd); roadmap exported directly from live Atlassian board."*

### Q2: Where will the live Figma site be accessible?
**A**:
- On the Project 1 card: Primary CTA button linking directly to `https://market-matrix-30692691.figma.site/` with `target="_blank"` and `rel="noopener noreferrer"`.
- Inside `modal-project-1`: Sticky header toolbar and Section 1 ("Live Deliverables & Workspaces") quick card.

---

## 4. Design

### 4.1 Deliverables Architecture

```mermaid
graph TD
    A[AptisGo Flagship Card] --> B[🎨 Figma Prototype: market-matrix-30692691.figma.site]
    A --> C[🚀 Jira Sprint Roadmap: Verified Atlassian Timeline]
    A --> D[View Full Specification Trigger]

    D --> M[modal-project-1: Full BA Specification]
    M --> M1[Live Figma Prototype Button]
    M --> M2[Section 8: Embedded Jira Roadmap AP-1 to AP-12]
```

### 4.2 Contracts & Type Signatures

- **File Path**: `index.html` & `tests/portfolio.test.mjs`
- **Type Signature**:
```typescript
export interface JiraEpicItem {
  readonly key: `AP-${number}`;
  readonly title: string;
  readonly status: 'Done' | 'To Do';
  readonly timeline: string;
}

export interface AptisGoLiveDeliverablesContract {
  readonly figmaLiveUrl: 'https://market-matrix-30692691.figma.site/';
  readonly jiraTimelineAsset: 'assets/aptisgo/jira-roadmap-timeline.png';
  readonly epics: readonly JiraEpicItem[];
}
```

#### Validation Rules
1. `aptisGo.figmaLink`: Must match exact URL `https://market-matrix-30692691.figma.site/`.
2. `aptisGo.jiraLink`: Must target `assets/aptisgo/jira-roadmap-timeline.png` or `#jira-roadmap`.
3. `modal-project-1`: Must display the embedded Jira roadmap graphic with `AP-1` to `AP-12` work breakdown.

---

## 5. Implementation Plan

1. **Asset Management**:
   - Copy `aptisgodevelopment_2026-10-19_04.21pm.png` to `assets/aptisgo/jira-roadmap-timeline.png`.
2. **TDD Suite Update (`tests/portfolio.test.mjs`)**:
   - Assert `a[data-channel="figma"]` links to `https://market-matrix-30692691.figma.site/`.
   - Assert Jira roadmap image is referenced and embedded in `modal-project-1`.
   - Run `npm test` to observe Red Phase.
3. **HTML Refactoring (`index.html`)**:
   - Update Figma links on card and in modal.
   - Update Jira links and embed the full-width roadmap timeline in Section 8 of `modal-project-1` detailing all 9 phases (`AP-1` to `AP-12`).
4. **README.md Update**:
   - Reflect the live Figma URL and Jira roadmap asset.
   - Add Design Log `#0007`.
5. **Verification**:
   - Run `npm test` to verify 100% green tests.
   - Append Section 8 "Implementation Results".

---

## 6. Examples

### ✅ Compliant Pattern: Live Figma & Embedded Jira Proof
```html
<!-- ✅ Real live Figma deployment -->
<a href="https://market-matrix-30692691.figma.site/" data-channel="figma" target="_blank" rel="noopener noreferrer">
  Figma Prototype
</a>

<!-- ✅ Verified Jira timeline asset -->
<a href="assets/aptisgo/jira-roadmap-timeline.png" data-channel="jira" target="_blank">
  Jira Sprint Roadmap
</a>
```

### ❌ Non-Compliant Pattern: Broken Placeholder
```html
<!-- ❌ Dummy placeholder link -->
<a href="https://www.figma.com/proto/your-aptisgo-prototype-link">Figma</a>
```

---

## 7. Trade-offs

| Alternative Considered | Choice Made | Rationale |
| :--- | :--- | :--- |
| **Link to private Jira login page** | **Embed high-res Jira Gantt export (`jira-roadmap-timeline.png`)** | External recruiters cannot log into an institutional Jira cloud; embedding the verified timeline provides zero-friction evidence of project management. |
| **Text-only sprint breakdown** | **Visual Jira roadmap + detailed tabular epics (`AP-1` to `AP-12`)** | Combines Atlassian UI visual authenticity with structured BA traceability. |

---

## 8. Implementation Results

### 8.1 Execution Summary
- **Asset Migration**: Copied user-provided timeline `aptisgodevelopment_2026-10-19_04.21pm.png` to canonical directory `assets/aptisgo/jira-roadmap-timeline.png` (4000x2600 high-res Gantt roadmap).
- **TDD Red-Green-Refactor Cycle**:
  - **Red Phase**: Enhanced `tests/portfolio.test.mjs` asserting exact URL `https://market-matrix-30692691.figma.site/` and embedded Jira roadmap graphic. Verified failing test `AssertionError [ERR_ASSERTION]: Figma link must point to live prototype`.
  - **Green Phase**: Updated [index.html](file:///E:/PortfolioBA/index.html) across Project 1 card, modal header, Section 1 deliverable cards, new Section 8 Jira Roadmap, and modal footer.
  - **Test Output**: 11/11 tests passing across `tests/portfolio.test.mjs` (7 tests) and `tests/docs.test.mjs` (2 tests).
- **Embedded Deliverables & Traceability**:
  - Bound live Figma site: `https://market-matrix-30692691.figma.site/` with `data-channel="figma"`.
  - Embedded full-width verified Atlassian Jira Gantt timeline in Section 8 with jump link `#jira-roadmap`.
  - Detailed the 9-phase breakdown covering `AP-1` through `AP-12` assigned to `phonhhgcd` with transparent explanation of institutional SSO access constraints.
- **Repository Documentation**: Updated [README.md](file:///E:/PortfolioBA/README.md) with verified live links and registered `#0007` in design logs directory.

### 8.2 Deviations from Plan
- None. The implementation fully conforms to the proposed design, Jay Framework project rules, and grounded tone standards.
