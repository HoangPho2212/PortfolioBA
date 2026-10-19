import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import { JSDOM } from 'jsdom';

const htmlPath = path.resolve('E:/PortfolioBA/index.html');

test('Portfolio TDD Test Suite - Jay Framework Validation (#0004)', async (t) => {
  assert.ok(fs.existsSync(htmlPath), 'index.html must exist');
  const htmlContent = fs.readFileSync(htmlPath, 'utf8');
  const dom = new JSDOM(htmlContent, { 
    runScripts: 'dangerously', 
    resources: 'usable',
    url: 'http://localhost/'
  });
  const { document, window } = dom.window;

  await t.test('Section 1: Hero Section Content & Candidate Profile', () => {
    const hero = document.getElementById('hero') || document.querySelector('header');
    assert.ok(hero, 'Hero section must exist');

    const heroText = hero.textContent;

    // Candidate Name
    assert.ok(
      heroText.includes('Nguyen Huu Hoang Pho'),
      'Hero must display candidate full name "Nguyen Huu Hoang Pho"'
    );

    // Title / Role: Business Analyst Intern
    assert.ok(
      heroText.includes('Business Analyst Intern'),
      'Hero must include title "Business Analyst Intern"'
    );

    // Location: Danang, Vietnam
    assert.ok(
      heroText.includes('Danang, Vietnam'),
      'Hero must specify Location as Danang, Vietnam'
    );

    // Exact Professional Summary from CV
    assert.ok(
      heroText.includes('Analytical and technically-driven Business Analyst Intern with a solid foundation in full-stack software engineering, desktop application architecture, and automated workflows.'),
      'Hero must contain exact opening of CV Professional Summary'
    );
    assert.ok(
      heroText.includes('Highly adept at translating complex functional specifications, database design requirements, and user stories into structured, actionable technical solutions.'),
      'Hero must contain exact translation sentence of CV Professional Summary'
    );
    assert.ok(
      heroText.includes('Proven experience in project coordination, rigorous validation testing, and seamlessly bridging the gap between business stakeholders and engineering teams.'),
      'Hero must contain exact bridging sentence of CV Professional Summary'
    );

    // CTAs within Hero
    const ctaProjects = hero.querySelector('a[href="#projects"]');
    assert.ok(ctaProjects, 'Hero must contain "View Projects" link pointing to #projects');
    assert.ok(ctaProjects.textContent.includes('View Projects'), 'CTA button text must contain "View Projects"');

    const ctaContact = hero.querySelector('a[href="#contact"]');
    assert.ok(ctaContact, 'Hero must contain "Contact Me" link pointing to #contact');
    assert.ok(ctaContact.textContent.includes('Contact Me'), 'CTA button text must contain "Contact Me"');
  });

  await t.test('Section 2: Education Section (University of Greenwich)', () => {
    const eduSection = document.getElementById('education');
    assert.ok(eduSection, 'Education section with id="education" must exist');
    const eduText = eduSection.textContent;

    // Degree & University
    assert.ok(eduText.includes('Bachelor of Software Engineering'), 'Must include Bachelor of Software Engineering');
    assert.ok(eduText.includes('University of Greenwich'), 'Must include University of Greenwich');

    // Graduation & Honours
    assert.ok(eduText.includes('2027'), 'Must include Expected Graduation: 2027');
    assert.ok(eduText.includes('Upper Second-Class Honours (2:1)'), 'Must include Upper Second-Class Honours (2:1)');
    assert.ok(eduText.includes('69/100'), 'Must include Academic Grade: 69/100');
    assert.ok(eduText.includes('1pt below First-Class threshold'), 'Must mention 1pt below First-Class threshold');
  });

  await t.test('Section 3: Core Competencies Grid (4 CV Categories)', () => {
    const competenciesSection = document.getElementById('competencies');
    assert.ok(competenciesSection, 'Core Competencies section with id="competencies" must exist');
    const compText = competenciesSection.textContent;

    // 1. BA & Agile Methodologies
    assert.ok(compText.includes('BA & Agile Methodologies'), 'Must contain BA & Agile Methodologies category');
    assert.ok(
      compText.includes('Requirements Gathering (SRS), Use Case & Class Modeling, Workflow Design, Jira Sprint Planning, Agile/Scrum.'),
      'Must contain exact BA & Agile items from CV'
    );

    // 2. Data & System Integration
    assert.ok(compText.includes('Data & System Integration'), 'Must contain Data & System Integration category');
    assert.ok(
      compText.includes('Database Schema Design (MongoDB, MySQL), ETL Workflows, Microsoft Power Automate, API Gateway Configuration (Ocelot).'),
      'Must contain exact Data & System Integration items from CV'
    );

    // 3. Testing & QA
    assert.ok(compText.includes('Testing & QA'), 'Must contain Testing & QA category');
    assert.ok(
      compText.includes('Input Validation Matrices, Test Case Design, System Diagnostics, xUnit, Manual Testing.'),
      'Must contain exact Testing & QA items from CV'
    );

    // 4. Languages & Communication
    assert.ok(compText.includes('Languages & Communication'), 'Must contain Languages & Communication category');
    assert.ok(
      compText.includes('English (B2 Level), Vietnamese (Native).'),
      'Must contain exact Languages items from CV'
    );

    // Grid layout validation
    const grid = competenciesSection.querySelector('.grid');
    assert.ok(grid, 'Competencies must be arranged in a CSS grid');
  });

  await t.test('Section 4: Leadership & Organizational Impact', () => {
    const leadershipSection = document.getElementById('leadership');
    assert.ok(leadershipSection, 'Leadership section with id="leadership" must exist');
    const leadText = leadershipSection.textContent;

    assert.ok(
      leadText.includes('Chairman of the Greenwich Football Club (Gre FC)'),
      'Must contain exact Leadership Role'
    );

    // Strategic Leadership & Management
    assert.ok(
      leadText.includes('directed core club operations') && leadText.includes('volunteer committees'),
      'Must describe core club operations and volunteer committees'
    );

    // Stakeholder Negotiation & Tournament Logistics
    assert.ok(
      leadText.includes('8-team competitive university championship') && leadText.includes('home-half back-pass rule allowances'),
      'Must describe 8-team championship and home-half back-pass rule negotiation with leadership board'
    );

    // Cross-Functional Communication
    assert.ok(
      leadText.includes('Bridged operational gaps between technical, operational, and non-technical stakeholders'),
      'Must describe bridging gaps between technical, operational, and non-technical stakeholders'
    );
  });

  await t.test('Section 5: Key Projects Interactive Cards & Modals (CV Aligned)', () => {
    const projectsSection = document.getElementById('projects');
    assert.ok(projectsSection, 'Projects section with id="projects" must exist');
    const projText = projectsSection.textContent;

    // Project 1: AptisGo Exam Preparation Platform
    assert.ok(projText.includes('AptisGo Exam Preparation Platform'), 'Must contain Project 1 title: AptisGo');
    assert.ok(projText.includes('MongoDB') && projText.includes('Jira') && projText.includes('UML'), 'Must contain AptisGo tech stack');
    assert.ok(
      projText.includes('Business Requirements Document (BRD)') && projText.includes('System Architecture Document (SAD)') && projText.includes('C4 models'),
      'Must contain AptisGo BA Focus requirements (BRD, SAD, C4 models)'
    );
    assert.ok(
      projText.includes('automated grading system for the listening section'),
      'Must mention automated grading system for listening section'
    );

    // Project 2: Desktop Information System for Education Centre
    assert.ok(projText.includes('Desktop Information System for Education Centre'), 'Must contain Project 2 title');
    assert.ok(projText.includes('C#.NET Windows Forms') || projText.includes('C# .NET'), 'Must contain Desktop IS tech stack');
    assert.ok(projText.includes('MySQL'), 'Must contain MySQL');
    assert.ok(
      projText.includes('Person') && projText.includes('TC1-TC9'),
      'Must contain Person abstract base class and TC1-TC9 validation matrix'
    );

    // Project 3: Microservices URL Shortener Platform
    assert.ok(projText.includes('Microservices URL Shortener Platform'), 'Must contain Project 3 title');
    assert.ok(projText.includes('.NET Core') && projText.includes('Vue.js') && projText.includes('MongoDB') && projText.includes('RabbitMQ') && projText.includes('Ocelot'), 'Must contain Microservices tech stack');
    assert.ok(
      projText.includes('Ocelot API Gateway') && projText.includes('cascading deletions'),
      'Must mention Ocelot API Gateway routing and cascading deletions across distributed databases'
    );

    // Interactive cards check
    const cards = projectsSection.querySelectorAll('[data-project-card]');
    assert.equal(cards.length, 3, 'Must render exactly 3 interactive project cards');

    // Modals check
    const modal1 = document.getElementById('modal-project-1');
    assert.ok(modal1, 'modal-project-1 must exist');
    assert.ok(modal1.textContent.includes('AptisGo'), 'modal-project-1 must describe AptisGo');

    const modal2 = document.getElementById('modal-project-2');
    assert.ok(modal2, 'modal-project-2 must exist');
    assert.ok(modal2.textContent.includes('Desktop Information System'), 'modal-project-2 must describe Desktop IS');

    const modal3 = document.getElementById('modal-project-3');
    assert.ok(modal3, 'modal-project-3 must exist');
    assert.ok(modal3.textContent.includes('Microservices URL Shortener'), 'modal-project-3 must describe Microservices URL Shortener');
  });

  await t.test('Section 6: Contact & Footer Section (Phone, Gmail, Portfolio)', () => {
    const footer = document.querySelector('footer') || document.getElementById('contact');
    assert.ok(footer, 'Footer/Contact section must exist');

    // Phone link verification
    const phoneLink = document.querySelector('a[data-channel="phone"]') || document.querySelector('a[href^="tel:"]');
    assert.ok(phoneLink, 'Must provide Phone contact link');
    assert.ok(phoneLink.getAttribute('href').includes('0379876301'), 'Phone link must have href="tel:0379876301"');

    // Email link with Gmail composer
    const emailLink = document.querySelector('a[data-channel="email"]');
    assert.ok(emailLink, 'Must provide an Email contact link with data-channel="email"');
    const emailHref = emailLink.getAttribute('href');
    assert.ok(
      emailHref.includes('mail.google.com/mail/') && emailHref.includes('to=hoangpho.2212@gmail.com'),
      'Email link must lead to Gmail web composer with recipient prefilled to hoangpho.2212@gmail.com'
    );

    // LinkedIn & GitHub
    const linkedinLink = document.querySelector('a[data-channel="linkedin"]');
    assert.ok(linkedinLink, 'Must provide a LinkedIn contact link');

    const githubLink = document.querySelector('a[data-channel="github"]');
    assert.ok(githubLink, 'Must provide a GitHub profile link');

    // Portfolio link
    assert.ok(
      htmlContent.includes('portfolio-ba-gamma.vercel.app'),
      'HTML must include candidate portfolio URL portfolio-ba-gamma.vercel.app'
    );

    // Direct address & phone display
    assert.ok(footer.textContent.includes('hoangpho.2212@gmail.com'), 'Footer must display hoangpho.2212@gmail.com');
    assert.ok(footer.textContent.includes('0379876301'), 'Footer must display 0379876301');

    // Back to top button
    const backToTopBtn = document.getElementById('back-to-top');
    assert.ok(backToTopBtn, 'Must include a scroll-to-top button with id="back-to-top"');
  });

  await t.test('Section 7: UX, Navigation & JayContract ViewState', () => {
    // Navigation bar links check
    const nav = document.getElementById('navbar');
    assert.ok(nav, 'Navbar must exist');
    assert.ok(nav.querySelector('a[href="#education"]'), 'Navbar must include link to #education');
    assert.ok(nav.querySelector('a[href="#competencies"]'), 'Navbar must include link to #competencies');
    assert.ok(nav.querySelector('a[href="#leadership"]'), 'Navbar must include link to #leadership');
    assert.ok(nav.querySelector('a[href="#projects"]'), 'Navbar must include link to #projects');
    assert.ok(nav.querySelector('a[href="#contact"]'), 'Navbar must include link to #contact');

    // Mobile menu trigger
    const mobileMenuBtn = document.getElementById('mobile-menu-button');
    assert.ok(mobileMenuBtn, 'Mobile navigation toggle button must exist');

    // Tailwind script
    const tailwindScript = document.querySelector('script[src*="tailwindcss"]');
    assert.ok(tailwindScript, 'Tailwind CSS CDN script must be loaded');

    // JayContract state architecture in script
    assert.ok(htmlContent.includes('JayContract'), 'Code must expose JayContract state manager');
    assert.ok(htmlContent.includes('ViewState'), 'Code must document ViewState');
  });
});
