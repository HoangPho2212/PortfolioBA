import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';

const gitignorePath = path.resolve('E:/PortfolioBA/.gitignore');
const readmePath = path.resolve('E:/PortfolioBA/README.md');

test('Documentation & Repository Hygiene TDD Suite (#0003)', async (t) => {
  await t.test('.gitignore contains necessary ignore rules', () => {
    assert.ok(fs.existsSync(gitignorePath), '.gitignore file must exist');
    const content = fs.readFileSync(gitignorePath, 'utf8');

    // Dependencies
    assert.ok(content.includes('node_modules'), '.gitignore must ignore node_modules');
    // Logs
    assert.ok(content.includes('*.log') || content.includes('.log'), '.gitignore must ignore logs');
    // OS files
    assert.ok(content.includes('.DS_Store'), '.gitignore must ignore .DS_Store');
    assert.ok(content.includes('Thumbs.db'), '.gitignore must ignore Thumbs.db');
  });

  await t.test('README.md provides executive documentation and run instructions', () => {
    assert.ok(fs.existsSync(readmePath), 'README.md file must exist');
    const content = fs.readFileSync(readmePath, 'utf8');

    // Candidate identification
    assert.ok(content.includes('Nguyen Huu Hoang Pho') || content.includes('Hoang Pho'), 'README must identify candidate');
    assert.ok(content.includes('Business Analyst'), 'README must state Business Analyst title');

    // Sections
    assert.ok(content.includes('Core Competencies') || content.includes('Competencies'), 'README must cover Competencies');
    assert.ok(content.includes('Key Projects') || content.includes('Projects'), 'README must cover Projects');
    assert.ok(content.includes('JayContract') || content.includes('ViewState'), 'README must describe JayContract/ViewState state architecture');
    assert.ok(content.includes('Testing') || content.includes('npm test'), 'README must provide testing instructions');
    assert.ok(content.includes('hoangpho.2212@gmail.com'), 'README must include candidate contact email');
  });
});
