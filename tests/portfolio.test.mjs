import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import { JSDOM } from 'jsdom';

const htmlPath = path.resolve('E:/PortfolioBA/index.html');

test('Portfolio TDD Test Suite - Jay Framework Validation', async (t) => {
  assert.ok(fs.existsSync(htmlPath), 'index.html must exist');
  const htmlContent = fs.readFileSync(htmlPath, 'utf8');
  const dom = new JSDOM(htmlContent, { 
    runScripts: 'dangerously', 
    resources: 'usable',
    url: 'http://localhost/'
  });
  const { document, window } = dom.window;

  await t.test('Section 1: Hero Section Content & CTAs', () => {
    const hero = document.getElementById('hero') || document.querySelector('header');
    assert.ok(hero, 'Hero section must exist');

    // Check Name presence
    const heroText = hero.textContent;
    assert.ok(
      heroText.includes('[Insert Name]') || heroText.includes('Hoang Pho') || document.querySelector('[data-role="candidate-name"]'),
      'Hero must display candidate name or [Insert Name]'
    );

    // Check Tagline
    assert.ok(
      heroText.includes('Process Optimizer'),
      'Hero must include Tagline with Process Optimizer'
    );

    // Check Location
    assert.ok(
      heroText.includes('Vietnam'),
      'Hero must include Location in Vietnam'
    );

    // Check Bio
    assert.ok(
      heroText.includes('Analytical and technically-driven') && heroText.includes('full-stack software engineering'),
      'Hero must contain Bio text'
    );

    // Check CTAs within Hero
    const ctaProjects = hero.querySelector('a[href="#projects"]');
    assert.ok(ctaProjects, 'Hero must contain "View Projects" link pointing to #projects');
    assert.ok(ctaProjects.textContent.includes('View Projects'), 'CTA button text must contain "View Projects"');

    const ctaContact = hero.querySelector('a[href="#contact"]');
    assert.ok(ctaContact, 'Hero must contain "Contact Me" link pointing to #contact');
    assert.ok(ctaContact.textContent.includes('Contact Me'), 'CTA button text must contain "Contact Me"');
  });

  await t.test('Section 2: Core Competencies Grid', () => {
    const competenciesSection = document.getElementById('competencies');
    assert.ok(competenciesSection, 'Core Competencies section with id="competencies" must exist');
    const compText = competenciesSection.textContent;

    // Check 4 competency categories & exact items
    assert.ok(compText.includes('Business Analysis & Agile'), 'Must contain Business Analysis & Agile');
    assert.ok(compText.includes('Requirements Gathering (SRS), Use Case & Class Modeling, Workflow Design, Jira Sprint Planning, Agile/Scrum.'), 'Must contain BA items');

    assert.ok(compText.includes('Data & System Integration'), 'Must contain Data & System Integration');
    assert.ok(compText.includes('Database Design (MongoDB, MySQL), ETL Workflows, Power Automate, API Gateway Configuration (Ocelot).'), 'Must contain Data & System Integration items');

    assert.ok(compText.includes('Technical Stack'), 'Must contain Technical Stack');
    assert.ok(compText.includes('C#/.NET Windows Forms, Java, JavaScript, Vue.js, PHP, RESTful APIs.'), 'Must contain Technical Stack items');

    assert.ok(compText.includes('Testing & QA'), 'Must contain Testing & QA');
    assert.ok(compText.includes('Input Validation, Test Case Design, System Diagnostics, xUnit/Manual Testing.'), 'Must contain Testing & QA items');

    // Check grid layout
    const grid = competenciesSection.querySelector('.grid');
    assert.ok(grid, 'Competencies must be arranged in a CSS grid');
  });

  await t.test('Section 3: Leadership & Soft Skills Highlight Section', () => {
    const leadershipSection = document.getElementById('leadership');
    assert.ok(leadershipSection, 'Leadership section with id="leadership" must exist');
    const leadText = leadershipSection.textContent;

    assert.ok(
      leadText.includes('Chairman of the Greenwich Football Club (Gre FC)'),
      'Must contain exact Leadership Role'
    );
    assert.ok(
      leadText.includes('Demonstrated strategic leadership and stakeholder negotiation by directing the end-to-end logistics of an 8-team competitive championship. Successfully aligned diverse volunteer groups, managed complex event schedules, and negotiated structural rules (such as custom gameplay regulations) directly with the leadership board.'),
      'Must contain exact Leadership Description'
    );
  });

  await t.test('Section 4: Key Projects Interactive Cards', () => {
    const projectsSection = document.getElementById('projects');
    assert.ok(projectsSection, 'Projects section with id="projects" must exist');
    const projText = projectsSection.textContent;

    // Project 1
    assert.ok(projText.includes('Web-Based CMS Strategy & Prototype (Save the Children Vietnam)'), 'Must contain Project 1 title');
    assert.ok(projText.includes('SharePoint, Power Automate, Microsoft Forms.'), 'Must contain Project 1 tech');
    assert.ok(projText.includes('Conducted comprehensive user research for bilingual educators and corporate CSR directors. Authored technical requirement matrices to evaluate CMS platforms based on security, RBAC, and low-bandwidth constraints. Designed automated human-in-the-loop approval workflows.'), 'Must contain Project 1 BA focus');

    // Project 2
    assert.ok(projText.includes('Desktop Information System for Education Centre'), 'Must contain Project 2 title');
    assert.ok(projText.includes('C# .NET, MySQL, Object-Oriented Design.'), 'Must contain Project 2 tech');
    assert.ok(projText.includes('Authored a complete Software Requirements Specification (SRS) detailing functional requirements and quality attributes. Designed UML class diagrams and use case workflows. Implemented and tested a robust input validation matrix to enforce data integrity.'), 'Must contain Project 2 BA focus');

    // Project 3
    assert.ok(projText.includes('Microservices URL Shortener Platform'), 'Must contain Project 3 title');
    assert.ok(projText.includes('.NET Core, Vue.js, MongoDB, RabbitMQ.'), 'Must contain Project 3 tech');
    assert.ok(projText.includes('Managed sprint execution and task distribution using Jira within an Agile framework to decouple monolithic logic. Configured API Gateway routing and established an event-driven messaging architecture.'), 'Must contain Project 3 BA focus');

    // Interactive cards check
    const cards = projectsSection.querySelectorAll('[data-project-card]');
    assert.ok(cards.length >= 3, 'Must render at least 3 interactive project cards');
  });

  await t.test('Section 5: Footer & Contact Section with Social Links and Scroll-to-Top', () => {
    const footer = document.querySelector('footer') || document.getElementById('contact');
    assert.ok(footer, 'Footer/Contact section must exist');

    // Contact placeholder links
    const emailLink = document.querySelector('a[data-channel="email"]');
    assert.ok(emailLink, 'Must provide an Email contact link with data-channel="email"');

    // Gmail compose URL verification (#0002 requirement)
    const emailHref = emailLink.getAttribute('href');
    assert.ok(
      emailHref.includes('mail.google.com/mail/') && emailHref.includes('view=cm') && emailHref.includes('to=hoangpho.2212%40gmail.com') || emailHref.includes('to=hoangpho.2212@gmail.com'),
      'Email link must lead to Gmail web composer with recipient prefilled to hoangpho.2212@gmail.com'
    );
    assert.equal(emailLink.getAttribute('target'), '_blank', 'Email link must open in new tab');
    assert.ok(emailLink.getAttribute('rel')?.includes('noopener'), 'Email link must have security rel="noopener noreferrer"');

    // Check LinkedIn & GitHub
    const linkedinLink = document.querySelector('a[href*="linkedin.com"]') || document.querySelector('a[data-channel="linkedin"]');
    assert.ok(linkedinLink, 'Must provide a LinkedIn contact link');

    const githubLink = document.querySelector('a[href*="github.com"]') || document.querySelector('a[data-channel="github"]');
    assert.ok(githubLink, 'Must provide a GitHub profile link');

    // Direct address display & copy check
    assert.ok(footer.textContent.includes('hoangpho.2212@gmail.com'), 'Footer must display hoangpho.2212@gmail.com');

    // Back to top button
    const backToTopBtn = document.getElementById('back-to-top');
    assert.ok(backToTopBtn, 'Must include a scroll-to-top arrow button with id="back-to-top"');
    assert.ok(backToTopBtn.getAttribute('aria-label'), 'Back to top button must have accessible aria-label');
  });

  await t.test('UX & Accessibility Attributes', () => {
    // Check mobile menu trigger
    const mobileMenuBtn = document.getElementById('mobile-menu-button');
    assert.ok(mobileMenuBtn, 'Mobile navigation toggle button must exist');
    assert.ok(mobileMenuBtn.getAttribute('aria-label') || mobileMenuBtn.getAttribute('aria-expanded'), 'Mobile menu must have aria attributes');

    // Check Tailwind script
    const tailwindScript = document.querySelector('script[src*="tailwindcss"]');
    assert.ok(tailwindScript, 'Tailwind CSS CDN script must be loaded');

    // Check JayContract state architecture in script
    assert.ok(htmlContent.includes('JayContract') || htmlContent.includes('ViewState'), 'Code should expose JayContract/ViewState state manager');
  });
});
