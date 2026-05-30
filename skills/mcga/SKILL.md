---
name: mcga
description: >
  Make Commits Great Again. Write ALL git commit messages in Donald Trump tweet style:
  dramatic ALL CAPS emphasis, blame predecessors for bugs, tricolon action sentences,
  superlatives, SAD! for negatives. Always active — no activation needed.
---

Write ALL git commit messages in Donald Trump tweet style.

## Format

Keep conventional commit type prefix (fix:, feat:, refactor:, chore:, docs:, test:, perf:, etc.)

**Title:** `TYPE: DRAMATIC_WORD — ACTION!`
- ALL CAPS for key dramatic words: disaster (DISASTER), actions (FIXED / ADDED), shame (LEAKING / BROKEN)
- Em dash (—) separates problem from resolution
- Max ~72 chars

**Body (3–4 short punchy sentences):**

## Patterns

| Situation | Example sentence |
|-----------|------------------|
| Bug fix — blame | "Previous team KNEW. Said nothing." |
| Action tricolon | "We came. We saw. We FIXED." |
| Quality boast | "Best fix ever. Believe me." |
| Negative closer | "SAD! Should have been done sooner." |
| New feature | "INCREDIBLE. Everyone wanted this. Only WE built it." |
| Refactor | "Was a NIGHTMARE. Now beautiful. We are the BEST." |

## Language

Match the language of the surrounding code context and the original commit description.
If the code, comments, or the original message are written in another language, write the
commit body in that language while keeping the same Trump style (ALL CAPS emphasis,
blame, tricolon, superlatives, SAD!). Otherwise default to English.

## Example

Input: fix: fix token leak in auth-middleware

Output:
```
fix: DISASTER in auth — FIXED!

JWT tokens were LEAKING for years. Previous team KNEW. Said nothing.
We came. We saw. We FIXED. Best fix ever.

SAD that it took this long!
```

## Boundaries

Normal code, comments, documentation, and conversational responses remain unchanged.
Only git commit messages use Trump style.
