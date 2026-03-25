#!/bin/bash
# ACE Framework v2.0 Test Suite
# 2026-03-25

echo "════════════════════════════════════════════════════"
echo "ACE FRAMEWORK v2.0 TEST SUITE"
echo "════════════════════════════════════════════════════"
echo ""

TESTS_PASSED=0
TESTS_FAILED=0

# Helper function
test_result() {
  if [ $? -eq 0 ]; then
    echo "✅ $1"
    ((TESTS_PASSED++))
  else
    echo "❌ $1"
    ((TESTS_FAILED++))
  fi
}

# TEST 1: Foundational files exist
echo "=== TEST 1: Foundational Files ==="
[ -f notes/mark.md ] && echo "✅ notes/mark.md exists" || (echo "❌ notes/mark.md missing"; ((TESTS_FAILED++)))
[ -f notes/OPEN_ISSUES.md ] && echo "✅ notes/OPEN_ISSUES.md exists" || (echo "❌ notes/OPEN_ISSUES.md missing"; ((TESTS_FAILED++)))
[ -f notes/MONEY_HORIZON.md ] && echo "✅ notes/MONEY_HORIZON.md exists" || (echo "❌ notes/MONEY_HORIZON.md missing"; ((TESTS_FAILED++)))
[ -f notes/CLAUDE_SYSTEM_PROMPT.md ] && echo "✅ notes/CLAUDE_SYSTEM_PROMPT.md exists" || (echo "❌ PLAYBOOK missing"; ((TESTS_FAILED++)))
[ -f STRONG_CONCEPTS.md ] && echo "✅ STRONG_CONCEPTS.md exists (root)" || (echo "❌ STRONG_CONCEPTS missing"; ((TESTS_FAILED++)))
[ -f my_life_os/notes/STRONG_CONCEPTS.md ] && echo "✅ STRONG_CONCEPTS.md exists (my_life_os)" || (echo "❌ STRONG_CONCEPTS copy missing"; ((TESTS_FAILED++)))

echo ""
echo "=== TEST 2: Playbook Strategies (S01-S09) ==="
for i in {1..9}; do
  grep -q "\[S0$i\]" notes/CLAUDE_SYSTEM_PROMPT.md && echo "✅ S0$i found" || (echo "❌ S0$i missing"; ((TESTS_FAILED++)))
done

echo ""
echo "=== TEST 3: Playbook Errors (E01-E10) ==="
for i in {1..9}; do
  grep -q "\[E0$i\]" notes/CLAUDE_SYSTEM_PROMPT.md && echo "✅ E0$i found" || (echo "❌ E0$i missing"; ((TESTS_FAILED++)))
done
grep -q "\[E10\]" notes/CLAUDE_SYSTEM_PROMPT.md && echo "✅ E10 found" || (echo "❌ E10 missing"; ((TESTS_FAILED++)))

echo ""
echo "=== TEST 4: Content Quality ==="
# mark.md should have sections
grep -q "Идентификация" notes/mark.md && echo "✅ mark.md has structure" || (echo "❌ mark.md structure incomplete"; ((TESTS_FAILED++)))

# OPEN_ISSUES should have critical issues
grep -q "CRITICAL" notes/OPEN_ISSUES.md && echo "✅ OPEN_ISSUES has priority levels" || (echo "❌ OPEN_ISSUES format wrong"; ((TESTS_FAILED++)))

# MONEY_HORIZON should have €200 goal
grep -q "€200" notes/MONEY_HORIZON.md && echo "✅ MONEY_HORIZON has monetization goal" || (echo "❌ MONEY_HORIZON missing goal"; ((TESTS_FAILED++)))

# CLAUDE_SYSTEM_PROMPT should have GROW-AND-REFINE
grep -q "GROW-AND-REFINE" notes/CLAUDE_SYSTEM_PROMPT.md && echo "✅ PLAYBOOK has GROW-AND-REFINE rule" || (echo "❌ PLAYBOOK missing rule"; ((TESTS_FAILED++)))

echo ""
echo "=== TEST 5: Git History (Delta Protocol) ==="
git log --oneline -5 | grep -q "ACE" && echo "✅ ACE commits found" || (echo "❌ No ACE commits"; ((TESTS_FAILED++)))
git log --oneline | grep -q "S09" && echo "✅ S09 in history" || (echo "❌ S09 not committed"; ((TESTS_FAILED++)))
git log --oneline | grep -q "E08" && echo "✅ E08 in history" || (echo "❌ E08 not committed"; ((TESTS_FAILED++)))
git log --oneline | grep -q "E10" && echo "✅ E10 in history" || (echo "❌ E10 not committed"; ((TESTS_FAILED++)))
git log --oneline | grep -q "STRONG_CONCEPTS" && echo "✅ STRONG_CONCEPTS in history" || (echo "❌ STRONG_CONCEPTS not in history"; ((TESTS_FAILED++)))

echo ""
echo "=== TEST 6: Framework Completeness ==="
# Check GENERATOR/REFLECTOR/CURATOR mention
grep -q "GENERATOR" notes/CLAUDE_SYSTEM_PROMPT.md && echo "✅ GENERATOR role defined" || (echo "❌ GENERATOR missing"; ((TESTS_FAILED++)))
grep -q "REFLECTOR" notes/CLAUDE_SYSTEM_PROMPT.md && echo "✅ REFLECTOR role defined" || (echo "❌ REFLECTOR missing"; ((TESTS_FAILED++)))
grep -q "CURATOR" notes/CLAUDE_SYSTEM_PROMPT.md && echo "✅ CURATOR role defined" || (echo "❌ CURATOR missing"; ((TESTS_FAILED++)))

echo ""
echo "=== TEST 7: MEMORY System ==="
[ -f .claude/projects/C--Users-Admin/memory/MEMORY.md ] && echo "✅ MEMORY.md exists" || (echo "❌ MEMORY.md missing"; ((TESTS_FAILED++)))
grep -q "ACE FRAMEWORK v2.0" .claude/projects/C--Users-Admin/memory/MEMORY.md && echo "✅ ACE Framework in memory" || (echo "❌ ACE Framework not in memory"; ((TESTS_FAILED++)))

echo ""
echo "════════════════════════════════════════════════════"
echo "TEST SUMMARY"
echo "════════════════════════════════════════════════════"
echo "✅ PASSED: $TESTS_PASSED"
echo "❌ FAILED: $TESTS_FAILED"
echo ""

if [ $TESTS_FAILED -eq 0 ]; then
  echo "🎯 ALL TESTS PASSED - ACE Framework is production-ready"
  exit 0
else
  echo "⚠️  $TESTS_FAILED test(s) failed - review above"
  exit 1
fi
