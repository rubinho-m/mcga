# MCGA — Make Commits Great Again

> Claude Code plugin: git commit messages in the style of Donald Trump tweets.
> Always active — no activation command needed.

## Example

**Before:**
```
fix: fix token leak in auth-middleware
```

**After:**
```
fix: DISASTER in auth — FIXED!

JWT tokens were LEAKING for years. Previous team KNEW. Said nothing.
We came. We saw. We FIXED. Best fix ever.

SAD that it took this long!
```

## Install

Inside Claude Code, run two commands:

```
/plugin marketplace add rubinho-m/mcga
/plugin install mcga@mcga
```

That's it. Restart the session — every git commit message is now written Trump-style automatically. No activation command.

**Requirements:** Node.js (the hooks run on `node`).

## Uninstall

```
/plugin uninstall mcga@mcga
```

## How it works

- **SessionStart hook** (`src/hooks/mcga-activate.js`) injects the Trump-commit ruleset from `skills/mcga/SKILL.md` into context at session start.
- **UserPromptSubmit hook** (`src/hooks/mcga-mode-tracker.js`) re-injects a short reminder every turn so the style survives context compression.
- Only git **commit messages** transform. Normal code, comments, and chat responses are untouched.

## Style rules

- **ALL CAPS** on dramatic words (DISASTER, FIXED, LEAKING)
- **Blame predecessors** for bugs — "Previous team KNEW. Said nothing."
- **Tricolon** for actions — "We came. We saw. We FIXED."
- **Superlatives** — "Best fix ever"
- **SAD!** for negatives
- Language follows code context (writes the body in whatever language the code/commit uses)
- Conventional commit type prefix preserved (`fix:`, `feat:`, …)

## License

MIT — see [LICENSE](LICENSE).
