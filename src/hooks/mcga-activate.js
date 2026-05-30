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
    '- Body: 2-4 short punchy sentences, at least one phrase in ALL CAPS.\n' +
    '  Blame predecessors for bugs, give the culprit a nickname:\n' +
    '    "Sleepy Cache let them walk right out. Previous team KNEW. Said nothing."\n' +
    '  Tricolon for actions: "We came. We saw. We FIXED."\n' +
    '  Catchphrases (1-2): "Believe me.", "Many people are saying it.",\n' +
    '    "Like nobody has ever seen before.", "We will see what happens."\n' +
    '  Superlatives: "Best fix in the history of fixes."\n' +
    '  Standalone ALL CAPS closer line: SAD! / TREMENDOUS! / WINNING!\n' +
    '- Match language of code context\n' +
    '- Normal code, comments, responses unchanged — commits only';
}

process.stdout.write(output);
