# Project Structure

**Last Updated:** 27.03.2026 — Applied 6-Principles Framework

## Overview

This repository contains Mark's integrated personal system: life OS (6-Principles framework), consulting tools, web applications, and supporting infrastructure.

## Directory Organization

```
/
├── src/                          # Production code organized by function
│   ├── core/                    # Core frameworks & principles
│   │   └── 6-principles-framework/
│   ├── tools/                   # Standalone utilities & scripts
│   │   ├── reselling/           # Reselling market automation
│   │   ├── evolution/           # Performance metrics & evolution tracking
│   │   ├── rag/                 # Retrieval-Augmented Generation (search/retrieval)
│   │   ├── system/              # System automation & batch processors
│   │   └── [others]/
│   └── web/                     # Web applications & landing pages
│       └── 6-principles/        # Landing page & booking system
│
├── tests/                        # Test suites
│   ├── unit/                    # Unit tests (individual components)
│   └── integration/             # Integration tests (system-wide)
│
├── docs/                         # Project documentation
│   ├── PROJECT_STRUCTURE.md     # This file — directory organization
│   ├── CONTRIBUTING.md          # How to add code
│   ├── ARCHITECTURE.md          # System design & principles
│   └── [topic-specific docs]/
│
├── logs/                         # Activity & decision logs (TRACKED)
│   ├── privat/2026/             # Personal life events
│   ├── schule/2026/             # School/GUB activities
│   ├── organisation/2026/       # Org/business decisions
│   └── [other contexts]/
│
├── notes/                        # Personal notes & plans (TRACKED)
│   ├── privat/                  # Personal goals, roadmap
│   ├── schule/                  # School-related planning
│   ├── [context-specific]/
│   └── SESSION_*.md             # Session summaries & learning
│
├── my_life_os/                   # Personal system tools & config
│   ├── CLAUDE.md                # Primary system instructions
│   ├── .claude/rules/           # Decision frameworks & gates
│   ├── .claude/commands/        # Command routing & automation
│   └── tools/                   # System automation scripts
│
├── the-6-principles/            # Landing page files (moved to src/web/ after migration)
│
├── .github/                      # GitHub automation
│   └── workflows/               # CI/CD pipelines
│
├── .gitignore                    # Repository-wide exclusions
├── README.md                     # Single entry point
└── CLAUDE.md                     # Global instructions

```

## What Gets Tracked

### Tracked (In Git)
- ✓ `src/**` — All production code
- ✓ `tests/**` — All test suites
- ✓ `docs/**` — All documentation
- ✓ `notes/**` — Personal notes, logs, roadmaps
- ✓ `logs/**` — Activity & decision logs
- ✓ `.github/**` — CI/CD workflows
- ✓ Configuration files (.gitignore, .eslintrc, etc.)

### NOT Tracked (Excluded by .gitignore)
- ✗ `AppData/**`, `OneDrive/**`, personal OS files
- ✗ `Desktop/`, `Documents/`, `Downloads/`, `Pictures/`
- ✗ `node_modules/`, `dist/`, `build/`, `coverage/`
- ✗ `.env`, `.env.local`, credentials, API keys
- ✗ Temporary files, cache, logs from tools
- ✗ Large binaries, archives, backup folders

## Scopes & Ownership

| Scope | Responsibility | Primary Files |
|-------|---|---|
| **core** | 6-Principles framework, decision gates, system architecture | src/core/, docs/ARCHITECTURE.md |
| **tools** | Standalone utilities, market scanners, automation | src/tools/ |
| **web** | Landing pages, booking systems, public-facing sites | src/web/, the-6-principles/ |
| **docs** | Project documentation, guides, architectural decisions | docs/ |
| **tests** | Unit & integration test suites | tests/ |
| **ci** | GitHub Actions workflows, deployment automation | .github/workflows/ |

## Key Files by Purpose

### Getting Started
- **`README.md`** — Entry point, quick links
- **`docs/PROJECT_STRUCTURE.md`** — This file
- **`docs/CONTRIBUTING.md`** — How to add code
- **`CLAUDE.md`** — Global rules & instructions

### System Architecture
- **`docs/ARCHITECTURE.md`** — How the system works
- **`my_life_os/CLAUDE.md`** — Personal system instructions
- **`my_life_os/.claude/rules/`** — Decision frameworks

### Code & Tools
- **`src/`** — All production code
- **`tools/`** — Standalone utilities
- **`.github/workflows/`** — CI/CD automation

### Personal & Decision Records
- **`logs/{context}/2026/`** — Dated activity logs
- **`notes/{context}/`** — Topic-specific notes & plans
- **`notes/OPEN_ISSUES.md`** — High-priority blockers

## Directory Naming Conventions

- **Lowercase with hyphens:** `my-project/`, `sub-component/`
- **Contexts:** `logs/privat/`, `logs/schule/`, `logs/organisation/`, `logs/familie/`, `logs/gesundheit/`, `logs/matvey/`
- **Dates:** `YYYY-MM-DD` in content, `2026-MM` in directory names (months)
- **NO spaces** in directory/file names (breaks scripts)

## Adding New Code

1. **Determine scope:** Is this a tool, core feature, or web application?
2. **Choose location:** Use appropriate `src/` subdirectory
3. **Check documentation:** Read `docs/CONTRIBUTING.md` for format
4. **Write code:** Follow project conventions
5. **Add tests:** Write unit tests in `tests/unit/`
6. **Commit:** Use conventional commit format: `feat(scope): description`

See `docs/CONTRIBUTING.md` for detailed guidelines.

## Next: Phase 2 Improvements

- [ ] Organize existing `tools/` into `src/tools/` with categories
- [ ] Create `src/core/` for 6-Principles framework implementations
- [ ] Move `the-6-principles/` to `src/web/6-principles/`
- [ ] Implement CI/CD linting & testing
- [ ] Auto-generate releases from commits
