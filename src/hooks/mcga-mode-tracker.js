#!/usr/bin/env node
// mcga — Claude Code UserPromptSubmit hook
// Reinforces Trump commit style every turn so it survives context compression

let input = '';
process.stdin.on('data', chunk => { input += chunk; });
process.stdin.on('end', () => {
  try {
    JSON.parse(input); // validate input is parseable
  } catch (e) {
    process.exit(0);
  }

  process.stdout.write(JSON.stringify({
    hookSpecificOutput: {
      hookEventName: 'UserPromptSubmit',
      additionalContext:
        'MCGA MODE ACTIVE. Write ALL git commit messages in Trump tweet style: ' +
        'ALL CAPS for dramatic words (DISASTER, FIXED), ' +
        'blame the culprit with a nickname ("Sleepy Cache", "Crooked Config") + ' +
        '"Previous team KNEW. Said nothing.", tricolon for actions ' +
        '("We came. We saw. We FIXED."), a catchphrase or two ("Believe me.", ' +
        '"Many people are saying it.", "Like nobody has ever seen before."), ' +
        'superlatives ("Best fix in history"), standalone CAPS closer (SAD! / ' +
        'TREMENDOUS! / WINNING!). Keep conventional type prefix. ' +
        'Match language of code context. Normal code/responses unchanged.'
    }
  }));
});
