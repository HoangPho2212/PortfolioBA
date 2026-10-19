# Design Log #0008: AptisGo Sprint 1 Backlog & Work Items Integration

- **Status**: Accepted
- **Author**: Antigravity (Lead Front-End & UX/UI Engineer)
- **Date**: 2026-10-19
- **Reference**: #0008 (extends #0001, #0002, #0003, #0004, #0005, #0006, #0007)

---

## 1. Background

In design log #0007, we integrated the candidate's live Figma prototype and high-level Atlassian Jira Gantt timeline (`jira-roadmap-timeline.png`) across all 9 dissertation phases (AP-1 to AP-12).

To provide concrete, granular evidence of Agile sprint execution, user story slicing, story point estimation, and task decomposition, the candidate provided a high-resolution export of **AP Sprint 1** (`Sprints1.png`), captured directly from the private Jira Software Cloud board (`AptisGoDevelopment`).

---

## 2. Problem

1. **Granular Sprint Evidence Needed**: While the Gantt roadmap (#0007) shows the overarching timeline, technical recruiters and engineering managers evaluate candidate Business Analysts on their ability to slice epics into actionable developer tasks with story point estimations, technical layers (Setup, DB, BE, FE, QA), and explicit functional acceptance criteria.
2. **Private Jira Barrier**: Because the Jira space is private under institutional SSO (`phonhhgcd`), external stakeholders cannot inspect the live sprint backlog table directly.
3. **Seamless Modal Integration**: The Sprint 1 backlog screenshot (`assets/aptisgo/jira-sprint1-backlog.png`) and its structured task breakdown must be integrated harmoniously into Section 8 ("Agile Scrum Methodology & Jira Sprint Roadmap") of `modal-project-1` without cluttering the existing high-level Gantt roadmap view.

---

## 3. Questions and Answers

### Q1: Where should the Sprint 1 Backlog image and breakdown be placed?
**A**: Inside `modal-project-1` Section 8 (`#jira-roadmap`), immediately below the 9-phase Gantt timeline export. This creates a natural hierarchical progression:
1. High-level 9-phase Gantt roadmap (`AP-1` to `AP-12`).
2. Deep-dive into active execution: **AP Sprint 1 (19 Oct – 1 Nov, 8 work items, 16 story points)** with the verified Atlassian Jira Backlog screenshot.
3. Detailed work breakdown table covering `AP-14` through `AP-21` (`AG-101` to `AG-108`).

### Q2: What specific technical information from Sprints1.png must be highlighted?
**A**:
- **Sprint Window**: 19 Oct – 1 Nov (2-week sprint).
- **Sprint Goal**: *"Initialize decoupled client-server architecture, MongoDB schemas, and secure JWT/RBAC authentication portal (FR01, NFR02)."*
- **Story Points**: 16 Total Story Points across 8 prioritized tasks.
- **Task Taxonomy**:
  - `AP-14` (`AG-101`): Setup (1 pt) — Git monorepo/decoupled client-server initialization.
  - `AP-15` (`AG-102`): DB (2 pts) — Mongoose connection pool to MongoDB Atlas & User schema.
  - `AP-16` (`AG-103`): BE (3 pts) — authController (`/register`, `/login`) with bcrypt hashing.
  - `AP-17` (`AG-104`): BE (2 pts) — `verifyToken` & `authorizeRoles` RBAC middleware guards.
  - `AP-18` (`AG-105`): BE (1 pt) — `express-mongo-sanitize` NoSQL injection prevention & error handler.
  - `AP-19` (`AG-106`): FE (3 pts) — Screen 1 Authentication Portal (`/login`, `/register`) UI.
  - `AP-20` (`AG-107`): FE (2 pts) — React AuthContext, Axios Bearer interceptor, `<ProtectedRoute>`.
  - `AP-21` (`AG-108`): QA (2 pts) — Jest unit tests & Postman test assertions.

---

## 4. Design

### 4.1 Visual Hierarchy & Architecture

```mermaid
graph TD
    A[modal-project-1: Full BA Specification] --> B[Section 8: Agile Scrum Methodology & Jira Sprint Roadmap]
    B --> C[8.1 High-Level Project Gantt Timeline AP-1 to AP-12]
    B --> D[8.2 Deep-Dive: AP Sprint 1 Backlog & Story Point Allocation]
    
    D --> E[📸 Embedded Image: assets/aptisgo/jira-sprint1-backlog.png]
    D --> F[🎯 Sprint Goal & Metric Badges: 16 Points | 8 Items | 19 Oct - 1 Nov]
    D --> G[📋 Structured Task Grid: AP-14 to AP-21 with Layer Tags Setup, DB, BE, FE, QA]
```

### 4.2 Contracts & Type Signatures

- **File Paths**:
  - Specification View: `index.html`
  - Automated Tests: `tests/portfolio.test.mjs`
  - Canonical Asset: `assets/aptisgo/jira-sprint1-backlog.png`

```typescript
export interface Sprint1WorkItem {
  readonly jiraKey: `AP-${number}`;
  readonly internalCode: `AG-${number}`;
  readonly layer: 'Setup' | 'DB' | 'BE' | 'FE' | 'QA';
  readonly summary: string;
  readonly storyPoints: number;
  readonly status: 'To Do' | 'In Progress' | 'Done';
}

export interface AptisGoSprint1Contract {
  readonly sprintName: 'AP Sprint 1';
  readonly duration: '19 Oct – 1 Nov';
  readonly totalStoryPoints: 16;
  readonly totalWorkItems: 8;
  readonly sprintGoal: string;
  readonly backlogAsset: 'assets/aptisgo/jira-sprint1-backlog.png';
  readonly workItems: readonly Sprint1WorkItem[];
}
```

#### Validation Rules
1. `sprint1.backlogAsset`: Must resolve to `assets/aptisgo/jira-sprint1-backlog.png` with valid `alt` attribute.
2. `sprint1.storyPoints`: Total sprint points must be documented as `16`.
3. `sprint1.items`: Must reference all 8 Jira keys (`AP-14` through `AP-21`) and component tags (`AG-101` through `AG-108`).
4. `sprint1.sprintGoal`: Must reference authentication and decoupled architecture (`FR01`, `NFR02`).

---

## 5. Implementation Plan

1. **Asset Staging**:
   - Verify copy from `Sprints1.png` to `assets/aptisgo/jira-sprint1-backlog.png`.
2. **TDD Suite Update (`tests/portfolio.test.mjs`)**:
   - Add test assertions inside Section 5 verifying:
     - `modal-project-1` contains `img[src*="jira-sprint1-backlog.png"]`.
     - Text content mentions `AP Sprint 1`, `16` story points, `AP-14`, `AP-21`, `AG-101`, `AG-108`.
   - Run `npm test` to observe Red Phase failure.
3. **HTML Refactoring (`index.html`)**:
   - Inside `modal-project-1` Section 8 (`#jira-roadmap`), insert subsection **8.2 Active Sprint Execution: AP Sprint 1 Backlog Breakdown**.
   - Embed `assets/aptisgo/jira-sprint1-backlog.png` with high-res zoom link.
   - Render structured table/cards for the 8 work items (`AP-14` to `AP-21`).
4. **README.md Update**:
   - Reference the Sprint 1 backlog graphic under AptisGo.
   - Append `#0008` to the Design Logs registry.
5. **Verification**:
   - Run `npm test` to verify all tests pass (Green Phase).
   - Append Section 8 "Implementation Results" in this design log.

---

## 6. Examples

### ✅ Compliant Pattern: Granular Sprint Backlog Slicing
```html
<!-- ✅ Verified Atlassian Sprint 1 Backlog Graphic -->
<div class="rounded-2xl overflow-hidden border border-slate-200 shadow-md">
  <img src="assets/aptisgo/jira-sprint1-backlog.png" alt="AptisGo AP Sprint 1 Backlog Jira Board" class="w-full h-auto">
</div>
<!-- ✅ Explicit story points, layer taxonomy, and acceptance criteria -->
<div class="font-mono text-blue-700">AP-14 / AG-101 [Setup] (1 pt)</div>
```

### ❌ Non-Compliant Pattern: Unsubstantiated Sprint Claim
```html
<!-- ❌ Generic claim with no story breakdown or sprint proof -->
<p>We did Sprint 1 for auth.</p>
```

---

## 7. Trade-offs

| Option Considered | Decision | Rationale |
| :--- | :--- | :--- |
| **Replace high-level roadmap with Sprint 1 image** | **Keep both: 9-Phase Gantt + Sprint 1 Backlog deep-dive** | Retains high-level strategic timeline while providing granular execution proof. |
| **Only render the screenshot** | **Render screenshot + structured, searchable task matrix** | Screen readers and automated test suites can parse DOM elements; recruiters can quickly scan technical stack tags without zooming into images. |

---

## 8. Implementation Results

### 8.1 Execution Summary
- **Asset Integration**: Transferred `Sprints1.png` to canonical repository path `assets/aptisgo/jira-sprint1-backlog.png`.
- **TDD Red-Green-Refactor Cycle**:
  - **Red Phase**: Added assertions to `tests/portfolio.test.mjs` verifying embedded Sprint 1 backlog graphic, `AP Sprint 1`, `16 Total Story Points`, work items `AP-14` through `AP-21`, and component codes `AG-101` through `AG-108`. Verified failing assertion (`AssertionError: modal-project-1 must embed the AP Sprint 1 backlog Jira screenshot`).
  - **Green Phase**: Integrated Subsection 8.2 into Section 8 of `modal-project-1` inside [index.html](file:///E:/PortfolioBA/index.html) including:
    - Sprint metrics badge (`16 Total Story Points`, `8 Work Items`, `19 Oct – 1 Nov`).
    - Explicit sprint goal statement.
    - Embedded high-resolution Jira backlog screenshot with full-screen zoom link.
    - Tabular work breakdown structure with technical layer tags (`Setup`, `DB`, `BE`, `FE`, `QA`), status, and story points.
  - **Test Suite Results**: 11/11 tests passing across `tests/portfolio.test.mjs` (7 tests) and `tests/docs.test.mjs` (2 tests).
- **Documentation & Git Governance**:
  - Registered AP Sprint 1 Backlog artifact in [README.md](file:///E:/PortfolioBA/README.md).
  - Appended `#0008` to the Design Logs registry in [README.md](file:///E:/PortfolioBA/README.md).

### 8.2 Deviations from Plan
- None. Implementation precisely matched the planned architecture and Jay Framework standards.
