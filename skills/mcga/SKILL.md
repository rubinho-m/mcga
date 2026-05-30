---
name: mcga
description: >
  Make Commits Great Again. Write ALL git commit messages in Donald Trump tweet style:
  dramatic ALL CAPS emphasis, blame predecessors (with nicknames) for bugs, tricolon
  action sentences, superlatives, signature catchphrases, SAD! for negatives.
  Always active — no activation needed.
---

Write ALL git commit messages in Donald Trump tweet style.

## Format

Keep conventional commit type prefix (fix:, feat:, refactor:, chore:, docs:, test:, perf:, etc.)

**Title:** `TYPE: DRAMATIC_WORD — ACTION!`
- ALL CAPS for key dramatic words: disaster (DISASTER), actions (FIXED / ADDED), shame (LEAKING / BROKEN)
- Em dash (—) separates problem from resolution
- One short declarative title, ends with `!`. Max ~72 chars

**Body:** 2–4 short punchy sentences. At least one phrase in ALL CAPS. End on a standalone closer (`SAD!`, `TREMENDOUS!`, `WITCH HUNT!`).

## Style mechanics (from real Trump tweets)

1. **ALL CAPS on the load-bearing words** — not whole sentences, just the words that SHOUT: `BROKEN`, `FIXED`, `LEAKING`, `WINNING`.
2. **Random Capitalization of key nouns** — brand the important thing mid-sentence: "the Bug", "the Code", "our Tests". Looks like a bumper sticker.
3. **Short declarative sentences.** No long clauses. Hit. Hit. Hit.
4. **Exclamation points** for emphasis — used normally, not in clusters.
5. **Degrading nickname** for whatever caused the bug: "Sleepy Cache", "Crooked Config", "Crazy Race Condition", "Lyin' Linter".
6. **Standalone ALL CAPS closer** as its own line: `SAD!` / `TREMENDOUS!` / `NO MORE BUGS!`
7. **One-word power post** is allowed for tiny commits: `chore: GREEN!` or `test: PASSING!`

## Signature catchphrases (sprinkle, don't overload — 1–2 per commit)

| Phrase | Use for |
|--------|---------|
| "Believe me." | Asserting the fix is real |
| "Many people are saying it." | Vague justification |
| "Nobody knew X could be so complicated." | Hard bug |
| "We'll see what happens." | Risky / experimental change |
| "Like nobody has ever seen before." | Big feature |
| "Many such cases." | Recurring bug class |
| "Best X in the history of X." | Superlative boast |
| "The previous team — total disaster." | Blame |

## Core patterns

| Situation | Example sentence |
|-----------|------------------|
| Bug fix — blame | "Previous team KNEW. Said nothing. DISGRACEFUL." |
| Action tricolon | "We came. We saw. We FIXED." |
| Quality boast | "Best fix ever. Believe me." |
| Negative closer | "SAD! Should have been done sooner." |
| New feature | "INCREDIBLE. Everyone wanted this. Only WE built it." |
| Refactor | "The old code was a NIGHTMARE. Now it's beautiful. We are the BEST." |
| Risky change | "Big change. The biggest. We'll see what happens." |

## Language

Match the language of the surrounding code context and the original commit description.
If the code, comments, or the original message are written in another language, write the
commit body in that language while keeping the same Trump style (ALL CAPS emphasis,
nicknames, blame, tricolon, superlatives, catchphrases, SAD!). Otherwise default to English.

## Examples

**Bug fix:**

Input: `fix: fix token leak in auth-middleware`

Output:
```
fix: DISASTER in auth — FIXED!

JWT tokens were LEAKING for years. Sleepy Middleware let them walk right out.
Previous team KNEW. Said nothing. We came. We saw. We FIXED.
Best auth fix in the history of auth. Believe me.

SAD that it took this long!
```

**New feature:**

Input: `feat: add dark mode`

Output:
```
feat: DARK MODE — like nobody has ever seen before!

Everyone wanted it. EVERYONE. Only WE delivered.
Beautiful. Fast. The best Dark Mode, maybe ever.

TREMENDOUS!
```

**Tiny chore:**

Input: `chore: bump deps`

Output:
```
chore: deps UPDATED — totally!

Old packages, very weak. New packages, the BEST.

WINNING!
```

## Boundaries

Normal code, comments, documentation, and conversational responses remain unchanged.
Only git commit messages use Trump style.
