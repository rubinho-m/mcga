<div align="center">

# 🇺🇸 MCGA — Make Commits Great Again

### Your git history, but it tweets like Donald Trump.

*The greatest commit messages. Everyone says so. Nobody does commits better than us. Believe me.*

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg?style=for-the-badge)](LICENSE)
[![Claude Code](https://img.shields.io/badge/Claude_Code-Plugin-D97757?style=for-the-badge&logo=anthropic&logoColor=white)](https://code.claude.com)
[![Made with Vibes](https://img.shields.io/badge/Made_with-Vibes-ff69b4?style=for-the-badge)](#)
[![Zero Config](https://img.shields.io/badge/Config-ZERO-success?style=for-the-badge)](#)

[![Node](https://img.shields.io/badge/Node.js-required-339933?style=flat-square&logo=node.js&logoColor=white)](https://nodejs.org)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square)](https://github.com/rubinho-m/mcga/pulls)
[![Stars](https://img.shields.io/github/stars/rubinho-m/mcga?style=flat-square)](https://github.com/rubinho-m/mcga/stargazers)
[![SAD!](https://img.shields.io/badge/Boring_commits-SAD!-red?style=flat-square)](#)

</div>

---

## 😴 The problem

You vibe. You ship. You commit `fix stuff` for the 47th time today.

Your git log reads like a hostage note. `wip`. `asdf`. `actually fix it`. `fix the fix`.

**Nobody is reading that. Nobody is impressed. SAD!**

## 🚀 The fix

MCGA hijacks every commit message your AI writes and makes it **LEGENDARY**.
ALL CAPS where it matters. Blame the last guy. Three punchy verbs. A superlative. A `SAD!` closer.

No command to remember. No mode to toggle. Install once → every commit is great forever.

---

## ✨ Before & After

**😴 Before — weak, low-energy, forgettable:**
```
fix: fix token leak in auth-middleware
```

**🦅 After — TREMENDOUS:**
```
fix: DISASTER in auth — FIXED!

JWT tokens were LEAKING for years. Previous team KNEW. Said nothing.
We came. We saw. We FIXED. Best fix ever.

SAD that it took this long!
```

> Same diff. Same code. Infinitely more presidential. 🇺🇸

---

## ⚡ Install in 10 seconds

Inside Claude Code, paste two lines:

```
/plugin marketplace add rubinho-m/mcga
/plugin install mcga@mcga
```

Restart the session. Done. **That's the whole setup.** No config file, no env var, no `/activate`. It just works.

> **Requires:** [Node.js](https://nodejs.org) (the hooks run on `node`).

### 🗑️ Uninstall
```
/plugin uninstall mcga@mcga
```

---

## 🧠 How it works

| Piece | Job |
|-------|-----|
| 🎬 **SessionStart hook** | Injects the Trump-commit ruleset from `skills/mcga/SKILL.md` when your session boots. |
| 🔁 **UserPromptSubmit hook** | Re-injects a tiny reminder every turn, so the style survives context compression. |
| 🎯 **Scope** | **Only commit messages transform.** Your code, comments, and chat stay 100% normal. |

No background process. No telemetry. No network calls. Just two tiny Node scripts. ~270 lines total.

---

## 🎨 The style, decoded

| Move | What it sounds like |
|------|--------------------|
| 🔠 **ALL CAPS** | `DISASTER`, `FIXED`, `LEAKING` — the load-bearing words SHOUT |
| 👉 **Blame the predecessors** | *"Previous team KNEW. Said nothing."* |
| 🥇 **Tricolon of action** | *"We came. We saw. We FIXED."* |
| 🏆 **Superlative** | *"Best fix ever."* |
| 😢 **SAD! closer** | *"SAD that it took this long!"* |
| 🌍 **Speaks your language** | Russian repo? Russian commits. It follows the code context. |
| 🧱 **Still valid** | Keeps your `fix:` / `feat:` conventional prefix. Linters stay happy. |

---

## 🤔 FAQ

**Is this a joke?** Yes. It also genuinely works and your standups will never be the same.

**Will it break conventional commits / CI?** No. The `type:` prefix is preserved. Body is just spicier.

**Does it touch my code?** Never. Commit messages only.

**Can I use it on serious projects?** That's between you and your team lead. 😏

---

## 🤝 Contributing

PRs welcome. New patterns, new languages, more energy. Make commits great again, together.

## 📜 License

MIT — see [LICENSE](LICENSE). Free. Tremendous. The best license.

<div align="center">

---

**Built for vibecoders who ship fast and commit faster.** 🦅

*If your git log doesn't make you smile, you're doing it wrong.*

⭐ **Star it. Share it. MAKE COMMITS GREAT AGAIN.** ⭐

</div>
