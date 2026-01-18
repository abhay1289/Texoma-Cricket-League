---
description: Cancel an active Ralph loop
---

# Cancel Ralph Workflow

Cancel an active Ralph loop started with `/ralph`.

## Usage

```
/cancel-ralph
```

## Step 1: Check for Active Ralph

// turbo
```bash
cat .agent/ralph-state.local.md 2>/dev/null || echo "No active Ralph loop found"
```

If no state file exists, inform the user that no active Ralph loop was found.

## Step 2: Update State File

// turbo
```bash
if [[ -f .agent/ralph-state.local.md ]]; then
  if [[ "$(uname)" == "Darwin" ]]; then
    sed -i '' 's/^active: true$/active: false/' .agent/ralph-state.local.md
  else
    sed -i 's/^active: true$/active: false/' .agent/ralph-state.local.md
  fi
  echo "✅ Ralph loop cancelled"
else
  echo "❌ No active Ralph loop to cancel"
fi
```

## Step 3: Report Final Status

Output:

```
✅ Ralph loop cancelled

Final iteration: [N]
State file: .agent/ralph-state.local.md
```
