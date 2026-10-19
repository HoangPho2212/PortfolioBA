# Modern Technical Business Analyst Portfolio

[![Test Suite](https://img.shields.io/badge/tests-11%20passed-brightgreen.svg)](tests/)
[![Architecture](https://img.shields.io/badge/architecture-JayContract%20%7C%20ViewState-blue.svg)](design-log/)
[![Tailwind CSS](https://img.shields.io/badge/styling-Tailwind%20CSS-06B6D4.svg)](https://tailwindcss.com/)
[![License](https://img.shields.io/badge/license-MIT-slate.svg)](LICENSE)

> **Portfolio of Nguyen Huu Hoang Pho**  
> *Business Analyst Intern*  
> 📍 **Location**: Danang, Vietnam  
> 📞 **Phone**: [0379876301](tel:0379876301)  
> 📧 **Direct Contact**: [hoangpho.2212@gmail.com](https://mail.google.com/mail/?view=cm&fs=1&to=hoangpho.2212@gmail.com)  
> 🌐 **Live Portfolio**: [portfolio-ba-gamma.vercel.app](https://portfolio-ba-gamma.vercel.app)

---

## 🌟 Candidate Overview

This repository houses the personal portfolio website of **Nguyen Huu Hoang Pho**, a Business Analyst Intern and Software Engineering student at the University of Greenwich with a practical foundation in requirements analysis, database design, and agile workflows.

With a software engineering background, this profile helps bridge communication between business requirements and technical implementation, translating stakeholder needs into structured SRS documents, UML models, database schemas, and API gateway configurations.

---

## 🧭 Live Preview & Quickstart

The portfolio is built as a zero-dependency, self-contained single-page application using modern HTML5, Tailwind CSS, and vanilla JavaScript.

### Option 1: Direct File Open
Simply open `index.html` in any modern web browser:
- On Windows: Double-click `index.html` or run:
  ```powershell
  Start-Process index.html
  ```

### Option 2: Local HTTP Server
```bash
# Using Python
python -m http.server 8080

# Or using Node npx serve
npx serve .
```
Navigate to `http://localhost:8080` in your browser.

---

## 🎓 Academic Background & Education

- **Degree**: Bachelor of Software Engineering
- **University**: University of Greenwich
- **Expected Graduation**: 2027
- **Degree Classification**: Upper Second-Class Honours (2:1)
- **Academic Grade**: 69/100 (1pt below First-Class threshold)

---

## 💼 Core Competencies & Skills Matrix

The portfolio is structured around the four competency groups specified in the candidate's official CV:

| Domain Group | Core Skills & Methodologies | Tools & Technologies |
| :--- | :--- | :--- |
| **BA & Agile Methodologies** | Requirements Gathering (SRS), Use Case & Class Modeling, Workflow Design, Jira Sprint Planning, Agile/Scrum. | Jira, Confluence, UML, SRS, BRD, SAD |
| **Data & System Integration** | Database Schema Design (MongoDB, MySQL), ETL Workflows, Microsoft Power Automate, API Gateway Configuration (Ocelot). | MongoDB, MySQL, Microsoft Power Automate, Ocelot Gateway |
| **Testing & QA** | Input Validation Matrices, Test Case Design, System Diagnostics, xUnit, Manual Testing. | xUnit, Manual QA, RegEx Constraints, TC1-TC9 Matrices |
| **Languages & Communication** | English (B2 Level), Vietnamese (Native), Bilingual Specification Writing, Stakeholder Alignment. | Cross-functional alignment, executive presentation |

---

## 🏆 Leadership & Organizational Impact

- **Role**: Chairman of the Greenwich Football Club (Gre FC)
- **Impact & Governance**:
  - **Strategic Leadership & Management**: Directed core club operations, coordinated cross-functional volunteer committees, and unified diverse student cohorts to execute competitive athletic events.
  - **Stakeholder Negotiation & Tournament Logistics**: Directed the end-to-end event logistics for an 8-team competitive university championship; successfully negotiated custom structural regulations (including home-half back-pass rule allowances) directly with the leadership board.
  - **Cross-Functional Communication**: Bridged operational gaps between technical, operational, and non-technical stakeholders, translating complex logistical and rule constraints into clear, structured schedules across multi-day tournament fixtures.

---

## 🚀 Key Project Cases

### 1. ⭐ AptisGo Exam Preparation Platform (Flagship Capstone Project)
- **Tech Stack**: MongoDB | Jira | UML | React SPA | Node/Express | Web MediaRecorder
- **Verified Deliverables & Workspaces**:
  - 🎨 **Figma Interactive Prototype**: [market-matrix-30692691.figma.site](https://market-matrix-30692691.figma.site/)
  - 🚀 **Jira Sprint Roadmap Timeline**: Verified Atlassian Gantt roadmap export (`assets/aptisgo/jira-roadmap-timeline.png`) detailing phases `AP-1` through `AP-12` under assignee account `phonhhgcd`.
  - 📋 **Jira AP Sprint 1 Backlog**: Verified Atlassian Jira Backlog screenshot (`assets/aptisgo/jira-sprint1-backlog.png`) detailing 8 work items (`AP-14` through `AP-21`) and 16 committed story points.
- **BA Deliverables & Engineering Specifications (COMP1682)**:
  - **User Stories (US01–US10)**: 10 user stories with story point estimations (57 total points), persona mappings, and acceptance criteria.
  - **MoSCoW Prioritization**: Structured breakdown into Must (FR01–FR06, Sprints 1 & 2), Should (FR07–FR08, Sprint 2), Could (FR09, Sprint 3), and Won't (FR10 real-time AI speech evaluation).
  - **Non-Functional Requirements (NFR01–NFR05)**: Sub-500ms autoScore latency, bcrypt salt >= 10, 10MB audio ceiling, SUS score >= 75, WCAG 2.1 Level AA accessibility.
  - **C4 Architecture & SSM**: C4 Level 1 System Context Diagram, C4 Level 2 Container Diagram, and Problem Domain Rich Picture.
  - **Data Design**: MongoDB BSON Document Model with embedded question sub-documents for single-operation query locality.
  - **High-Fidelity Wireframes**: Screens 1 through 9 with technical annotations (RBAC login, placement, dashboard, testing engine, essay editor, lecturer review queue, admin test bank).
  - **System Implementation**: Engineered automated listening grading engine and responsive study roadmap planner.

### 2. Desktop Information System for Education Centre
- **Tech Stack**: C#.NET Windows Forms | MySQL
- **BA Focus & SRS**:
  - Authored an end-to-end Software Requirements Specification (SRS) detailing business functional requirements, data validation rules, and system non-functional quality attributes for administrative and teaching personnel.
- **Domain Modeling**:
  - Architected object-oriented UML class diagrams and use case workflows, designing an abstract base class (`Person`) with derived entity hierarchies for teachers, administrators, and students.
- **Quality Assurance**:
  - Implemented and executed a rigorous input validation matrix across multiple test cases (`TC1-TC9`) to guarantee data integrity for names, email formatting, and numeric salary constraints.

### 3. Microservices URL Shortener Platform
- **Tech Stack**: .NET Core | Vue.js | MongoDB | RabbitMQ | Ocelot
- **Agile Sprint Management**:
  - Facilitated sprint planning and task backlog distribution using Jira within an Agile framework to successfully decouple monolithic application logic into containerized microservices.
- **Architecture & Integration**:
  - Configured Ocelot API Gateway routing rules.
  - Established an asynchronous event-driven messaging pipeline via RabbitMQ to maintain data consistency and handle cascading deletions across distributed databases.

---

## 🏗️ Technical Architecture & JayContract Pattern

The portfolio front-end implements the **JayContract** pattern, providing an observable, immutable reactive state store without requiring heavyweight frameworks:

```mermaid
graph TD
    A[index.html Browser View] --> B[JayContract State Store]
    B --> C[PortfolioViewState]
    
    C -->|candidateName| D[Interactive Header & Hero]
    C -->|isMobileMenuOpen| E[Mobile Navigation Drawer]
    C -->|showBackToTop| F[Floating Scroll-to-Top Button]
    C -->|activeModalId| G[Interactive Specification Modals]

    H[User Events / Clicks] -->|setState patch| B
    B -->|Notify Subscribers| A
```

### State Contract Definition:
```typescript
interface PortfolioViewState {
  readonly candidateName: string;
  readonly isMobileMenuOpen: boolean;
  readonly scrollY: number;
  readonly showBackToTop: boolean;
  readonly activeModalId: string | null;
}
```

---

## 🧪 Testing & Verification

The project follows a strict **Test-Driven Development (TDD)** methodology with automated suites written using Node.js built-in test runner (`node:test`) and JSDOM:

### Running Tests:
```bash
# Run all test suites
npm test

# Run specific suites
node --test tests/portfolio.test.mjs
node --test tests/docs.test.mjs
```

### Verified Test Suites:
- `tests/portfolio.test.mjs`:
  - ✅ Section 1: Hero Section Content & Candidate Profile
  - ✅ Section 2: Education Section (University of Greenwich)
  - ✅ Section 3: Core Competencies Grid (4 CV Categories)
  - ✅ Section 4: Leadership & Organizational Impact
  - ✅ Section 5: Key Projects Interactive Cards & Modals (CV Aligned)
  - ✅ Section 6: Contact & Footer Section (Phone, Gmail, Portfolio)
  - ✅ Section 7: UX, Navigation & JayContract ViewState
- `tests/docs.test.mjs`:
  - ✅ `.gitignore` exclusion rules validation
  - ✅ `README.md` executive documentation compliance

---

## 📄 Design Logs

All architectural and engineering decisions are documented under `./design-log/`:
- [#0001: Modern Responsive Portfolio Website for Junior Business Analyst](design-log/0001-portfolio-website.md)
- [#0002: Gmail Web Composer Integration for Recipient hoangpho.2212@gmail.com](design-log/0002-gmail-integration.md)
- [#0003: Project Documentation and Git Governance](design-log/0003-project-documentation-and-git-governance.md)
- [#0004: Synchronizing Portfolio Website with Candidate CV (Nguyen Huu Hoang Pho)](design-log/0004-cv-sync-and-content-alignment.md)
- [#0005: Grounding Portfolio Tone and Eliminating Overclaims](design-log/0005-grounding-tone-and-overclaim-reduction.md)
- [#0006: AptisGo Flagship Showcase & Comprehensive BA Deliverables Integration](design-log/0006-aptisgo-flagship-and-comprehensive-spec.md)
- [#0007: Figma Prototype Integration & Private Jira Roadmap Timeline](design-log/0007-figma-url-and-jira-timeline-integration.md)
- [#0008: AptisGo Sprint 1 Backlog & Work Items Integration](design-log/0008-aptisgo-sprint-1-backlog-integration.md)
