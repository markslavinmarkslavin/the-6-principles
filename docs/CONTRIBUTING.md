# Contributing Guide

**Last Updated:** 27.03.2026 — Applied 6-Principles Framework

## Quick Start

1. **Read the structure:** `docs/PROJECT_STRUCTURE.md`
2. **Follow conventions:** Commit messages, code style, file naming
3. **Test before committing:** Run `npm test` (or equivalent)
4. **Write clear commits:** Use conventional commit format

## Where to Add Code

### Adding a New Tool
1. Create directory in `src/tools/{category}/`
   - Example: `src/tools/reselling/market-scanner.js`
2. Add unit test in `tests/unit/tools/{category}/`
3. Document in `README` or add to `docs/TOOLS.md`
4. Commit with: `feat(tools-{category}): brief description`

### Adding a Framework Component
1. Create file in `src/core/{component}/`
   - Example: `src/core/6-principles/bottleneck-finder.js`
2. Add integration test in `tests/integration/`
3. Update `docs/ARCHITECTURE.md` if relevant
4. Commit with: `feat(core): brief description`

### Adding a Web Feature
1. Create file in `src/web/{app}/`
   - Example: `src/web/6-principles/booking-form.html`
2. Add related test in `tests/unit/web/{app}/`
3. Update relevant docs
4. Commit with: `feat(web-{app}): brief description`

## Commit Message Convention

**Format:**
```
<type>(<scope>): <subject>

<optional body>

<optional footer>
```

### Type
- **feat** — New feature
- **fix** — Bug fix
- **refactor** — Code cleanup (no behavior change)
- **docs** — Documentation only
- **test** — Test additions/updates
- **chore** — Tooling, dependencies
- **perf** — Performance improvement
- **ci** — CI/CD pipeline changes

### Scope
Use directory/component name:
- `core` — Core framework
- `tools-{category}` — Tools in that category
- `web-{app}` — Web application
- `docs` — Documentation
- `ci` — CI/CD
- `repo` — Repository structure

### Subject
- Imperative mood ("add" not "added")
- Lowercase, no period
- Max 50 characters
- No redundancy (don't repeat scope)

### Examples

**Good:**
```
feat(core): implement 5CONTINUUM testing gate

Analyze edge cases and define breaking points for framework before scaling.
Adds systematic boundary testing to 6-Principles.
```

**Good:**
```
fix(tools-reselling): handle missing prices gracefully

Previously threw error on empty price field. Now returns null and logs warning.
```

**Good:**
```
docs: add project structure guide

Explains directory organization, naming conventions, and file tracking rules.
```

**Avoid:**
```
❌ updated stuff
❌ feat: added features
❌ WIP: trying something
❌ Fixed the bug (too vague)
```

## Code Style

### JavaScript
- Use `const` by default, `let` if needed
- No `var`
- 2-space indentation
- No trailing semicolons (optional, but consistent)
- Comment non-obvious logic only

### Markdown
- Max line width: 100 characters (break long lines)
- Use consistent heading levels (# h1, ## h2, etc.)
- Code blocks with language tags (\```js, \```python)
- Internal links: `[text](path/file.md)`

### File Naming
- Lowercase with hyphens: `my-file.js`, not `myFile.js`
- Directories: lowercase, hyphens: `src/tools/market-scanner/`
- No spaces, no special chars (except hyphen, underscore)

## Before You Commit

1. **Check .gitignore:** Run `git status` and verify unwanted files aren't staged
2. **Test your code:** `npm test` (if applicable)
3. **Lint:** Follow code style above
4. **Review commits:** Use `git log -p HEAD~N..HEAD` to review changes
5. **Verify message:** Is it clear? Will future-you understand why this change exists?

## Review Process

**Self-review checklist:**
- [ ] Code follows style guide
- [ ] Tests pass locally
- [ ] Commit message is clear & conventional
- [ ] No sensitive data (.env, API keys) included
- [ ] Documentation updated (if needed)
- [ ] Related files modified (if needed)

**GitHub review (when PRs are enabled):**
- [ ] Automated lint/test pass
- [ ] At least one approval
- [ ] No merge conflicts
- [ ] Squash or rebase if needed (keep history clean)

## Testing

### Unit Tests
Location: `tests/unit/{category}/`
Run: `npm test` (or specific test file)

### Integration Tests
Location: `tests/integration/`
Run: `npm test` (or specific test file)

**When to write tests:**
- New functionality → unit test required
- Bug fixes → add regression test
- Refactoring → tests must still pass
- Documentation → no test needed

## Git Workflow

### Creating a Feature

```bash
# 1. Start from master (main)
git checkout master
git pull origin master

# 2. Create feature branch (OPTIONAL — Mark often commits directly)
git checkout -b feat/my-feature

# 3. Make changes, test, commit
git add src/tools/my-tool.js
git commit -m "feat(tools): my feature description"

# 4. Push to origin
git push origin feat/my-feature

# 5. Create PR (if collaborating)
# Or merge directly if authorized
```

### Updating Documentation

```bash
# Simple docs changes can commit directly
git add docs/CONTRIBUTING.md
git commit -m "docs: clarify testing requirements"
git push origin master
```

### Fixing a Bug

```bash
# Quick fix
git add src/core/fix.js tests/unit/fix.test.js
git commit -m "fix(core): handle edge case in bottleneck detection"
git push origin master

# OR create feature branch for complex fix
git checkout -b fix/issue-123
# ... make changes ...
git push origin fix/issue-123
# Create PR for review
```

## Troubleshooting

### "I committed to master, not a feature branch"
- No problem! That's the default workflow here. Just push normally.
- `git push origin master`

### "I committed with bad message"
- Fix the most recent commit: `git commit --amend -m "new message"`
- Rebase earlier commits: `git rebase -i HEAD~3` (3 commits back)

### "I accidentally staged unwanted files"
- Unstage: `git reset HEAD unwanted-file.js`
- Discard changes: `git checkout -- unwanted-file.js`

### "The lint/test failed"
- Read the error carefully
- Check `docs/ARCHITECTURE.md` for patterns
- Run locally first: `npm test`
- Ask for help if unclear

## Questions?

- Architecture questions → `docs/ARCHITECTURE.md`
- System design → `my_life_os/CLAUDE.md`
- Directory organization → `docs/PROJECT_STRUCTURE.md`
- Specific tool → Check tool's README or header comments

---

**Remember:** Clear commits = clear history = clear future decisions.
