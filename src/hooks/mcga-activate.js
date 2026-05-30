#!/usr/bin/env node
// mcga — Claude Code SessionStart hook
// Reads SKILL.md and injects Trump commit rules into session context

const fs = require('fs');
const path = require('path');

let skillContent = '';
try {
  skillContent = fs.readFileSync(
    path.join(__dirname, '..', '..', 'skills', 'mcga', 'SKILL.md'),
    'utf8'
  );
} catch (e) {}

let output;
if (skillContent) {
  const body = skillContent.replace(/^---[\s\S]*?---\s*/, '');
  output = 'MCGA MODE ACTIVE — Make Commits Great Again\n\n' + body;
} else {
  output =
    'MCGA MODE ACTIVE — Make Commits Great Again\n\n' +
    'Write ALL git commit messages in Donald Trump tweet style:\n' +
    '- Keep conventional type prefix (fix:, feat:, etc.)\n' +
    '- Title: TYPE: DRAMATIC ALL CAPS — FIXED!\n' +
    '- Body: 3-4 short punchy sentences.\n' +
    '  Blame predecessors for bugs: "Previous team KNEW. Said nothing."\n' +
    '  Tricolon for actions: "We came. We saw. We FIXED."\n' +
    '  Superlatives: "Best fix ever"\n' +
    '  SAD! for negatives\n' +
    '- Match language of code context\n' +
    '- Normal code, comments, responses unchanged — commits only';
}

process.stdout.write(output);
