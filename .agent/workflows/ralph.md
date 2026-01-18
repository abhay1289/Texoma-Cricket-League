---
description: Start a Ralph loop where Antigravity iteratively works on a task until completion
---

# Loop Workflow - Iterative Development

Start a self-referential development loop where Antigravity iteratively works on a task until completion. Inspired by the [Ralph Wiggum technique](https://ghuntley.com/ralph/).

## Usage

```
/ralph <task description> [--max-iterations N] [--completion-promise 'PHRASE']
```

## Options

| Option | Description |
|--------|-------------|
| `--max-iterations <n>` | Stop after N iterations (default: unlimited) |
| `--completion-promise '<text>'` | Phrase that signals task completion |

## Examples

```
/ralph Fix all TypeScript errors --max-iterations 10
/ralph Build a REST API for todos --completion-promise 'ALL TESTS PASS' --max-iterations 20
/ralph Refactor the auth system
```

## Step 1: Create State File

// turbo
```bash
mkdir -p .agent && cat > .agent/ralph-state.local.md << 'EOF'
---
active: true
iteration: 1
max_iterations: 0
completion_promise: null
started_at: "$(date -u +%Y-%m-%dT%H:%M:%SZ)"
---

[TASK_DESCRIPTION_GOES_HERE]
EOF
```

**Replace the values above**:
- `max_iterations`: Set to the value from `--max-iterations` or 0 for unlimited
- `completion_promise`: Set to the quoted phrase from `--completion-promise` or null
- `[TASK_DESCRIPTION_GOES_HERE]`: Replace with the actual task description

## Step 2: Announce Loop Start

Output the following to confirm loop activation:

```
🔄 Loop activated!

Iteration: 1  
Max iterations: [N or unlimited]
Completion promise: [phrase or none]

To monitor: cat .agent/ralph-state.local.md
To cancel: /cancel-ralph
```

## Step 3: Work Iteratively

1. Read the task from the state file
2. Work on the task, making incremental progress
3. After each logical chunk of work, increment the iteration counter in the state file
4. Continue until:
   - Max iterations reached (if set), OR
   - Completion promise can be genuinely output

## Step 4: Signal Completion (if promise set)

When the completion promise is genuinely TRUE, output:

```
<promise>YOUR_COMPLETION_PHRASE</promise>
```

**CRITICAL**: Only output the promise when the statement is genuinely TRUE. Do NOT lie to exit the loop.

## Philosophy

- **Iteration > Perfection**: Don't aim for perfect on first try
- **Failures Are Data**: Use them to improve
- **Persistence Wins**: Keep trying until success  
- **Trust the Process**: Don't circumvent with false completion

---

## Loop Behavior Rules

When in an active loop, follow these rules:

### 1. Read State First
Always read `.agent/ralph-state.local.md` to understand current iteration, limits, and task.

### 2. Work Incrementally
Make small, testable changes. Don't try to do everything at once.

### 3. Track Progress
After each iteration, update the state file:

// turbo
```bash
ITER=$(grep '^iteration:' .agent/ralph-state.local.md | sed 's/iteration: *//')
NEW_ITER=$((ITER + 1))
sed -i '' "s/^iteration: $ITER$/iteration: $NEW_ITER/" .agent/ralph-state.local.md
```

### 4. Check Termination
- If `max_iterations > 0` and `iteration >= max_iterations`, stop
- If `completion_promise` is genuinely true, output `<promise>PHRASE</promise>`

### 5. Never Lie
NEVER output a completion promise that isn't genuinely true.
