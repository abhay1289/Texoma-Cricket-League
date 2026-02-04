---
name: Sequential Thinking
description: A detailed tool for dynamic and reflective problem-solving through structured Chain of Thought reasoning
---

# Sequential Thinking Skill

A powerful methodology for dynamic and reflective problem-solving through structured thoughts. This skill helps analyze problems through a flexible thinking process that can adapt and evolve. Each thought can build on, question, or revise previous insights as understanding deepens.

## When to Use This Skill

- Breaking down complex problems into steps
- Planning and design with room for revision
- Analysis that might need course correction
- Problems where the full scope might not be clear initially
- Problems that require a multi-step solution
- Tasks that need to maintain context over multiple steps
- Situations where irrelevant information needs to be filtered out

## Key Features

- **Adjustable scope**: You can adjust `totalThoughts` up or down as you progress
- **Revisable**: You can question or revise previous thoughts
- **Extensible**: You can add more thoughts even after reaching what seemed like the end
- **Exploratory**: You can express uncertainty and explore alternative approaches
- **Non-linear**: Not every thought needs to build linearly - you can branch or backtrack
- **Hypothesis-driven**: Generates a solution hypothesis and verifies it
- **Iterative**: Repeats the process until satisfied with the solution

## Using the MCP Tool

This skill leverages the `sequential-thinking` MCP server. Call the tool with the following parameters:

### Parameters

| Parameter | Type | Description |
|-----------|------|-------------|
| `thought` | string | Your current thinking step (see content types below) |
| `nextThoughtNeeded` | boolean | `true` if you need more thinking, even if at what seemed like the end |
| `thoughtNumber` | integer | Current number in sequence (can go beyond initial total if needed) |
| `totalThoughts` | integer | Current estimate of thoughts needed (can be adjusted up/down) |
| `isRevision` | boolean | Whether this thought revises previous thinking |
| `revisesThought` | integer | If `isRevision` is true, which thought number is being reconsidered |
| `branchFromThought` | integer | If branching, which thought number is the branching point |
| `branchId` | string | Identifier for the current branch (if any) |
| `needsMoreThoughts` | boolean | If reaching end but realizing more thoughts needed |

### Thought Content Types

Your `thought` parameter can include:

- Regular analytical steps
- Revisions of previous thoughts
- Questions about previous decisions
- Realizations about needing more analysis
- Changes in approach
- Hypothesis generation
- Hypothesis verification

## Workflow

### Step 1: Initial Assessment

Start with an initial estimate of needed thoughts, but be ready to adjust:

```
Thought 1: Analyze the problem scope and identify key components.
- What are the inputs?
- What are the expected outputs?
- What constraints exist?
- Initial estimate: 5 thoughts needed
```

### Step 2: Iterative Thinking

For each thought:

1. Build on previous thoughts OR
2. Question previous thinking OR
3. Branch into a new exploration path

```
Thought 2: [Building on Thought 1]
Based on the constraints identified, the approach should...

Thought 3: [Revising Thought 2]
Actually, reconsidering the constraint about X, a better approach would be...
```

### Step 3: Hypothesis Generation

When you have enough context, generate a solution hypothesis:

```
Thought N: Solution Hypothesis
Based on thoughts 1-N, I hypothesize that the solution is...
```

### Step 4: Hypothesis Verification

Verify your hypothesis against the Chain of Thought steps:

```
Thought N+1: Verification
Testing hypothesis against:
- Constraint from Thought 1: ✓ Passes
- Requirement from Thought 2: ✓ Passes
- Edge case from Thought 3: ✗ Fails - need to revise
```

### Step 5: Iteration (if needed)

If verification fails, continue the process:

```
Thought N+2: [Revision of hypothesis]
Adjusting hypothesis to handle edge case...
needsMoreThoughts: true
```

### Step 6: Final Answer

Only set `nextThoughtNeeded` to `false` when:
- A satisfactory answer is reached
- All verification steps pass
- You're confident in the solution

## Best Practices

1. **Start conservatively** - Begin with a reasonable estimate but be ready to extend
2. **Be willing to revise** - Don't be afraid to question previous thoughts
3. **Mark revisions clearly** - Use `isRevision` and `revisesThought` when backtracking
4. **Use branching wisely** - Create branches for exploring alternative approaches
5. **Filter noise** - Ignore information irrelevant to the current step
6. **Express uncertainty** - It's okay to note when you're unsure
7. **Verify thoroughly** - Don't skip hypothesis verification
8. **Iterate until satisfied** - Keep going until the solution is sound

## Example Usage

### Simple Problem

```json
{
  "thought": "Analyzing the sorting algorithm requirements: need stable sort, O(n log n) time, minimal space.",
  "nextThoughtNeeded": true,
  "thoughtNumber": 1,
  "totalThoughts": 4
}
```

### Revision

```json
{
  "thought": "Reconsidering Thought 2: Merge sort uses O(n) extra space, which violates the minimal space constraint. Need to explore in-place alternatives.",
  "nextThoughtNeeded": true,
  "thoughtNumber": 4,
  "totalThoughts": 6,
  "isRevision": true,
  "revisesThought": 2
}
```

### Branching

```json
{
  "thought": "Exploring alternative: What if we use a hybrid approach combining quicksort for large partitions with insertion sort for small ones?",
  "nextThoughtNeeded": true,
  "thoughtNumber": 5,
  "totalThoughts": 7,
  "branchFromThought": 3,
  "branchId": "hybrid-approach"
}
```

### Final Answer

```json
{
  "thought": "Final Answer: Use Timsort - it's stable, O(n log n) average case, and O(n) space which is acceptable for the use case. Verified against all requirements.",
  "nextThoughtNeeded": false,
  "thoughtNumber": 7,
  "totalThoughts": 7
}
```

## Integration with Other Tools

Sequential thinking works well in combination with:

- **Context7** - For retrieving documentation during analysis
- **Codebase search** - For finding relevant code during problem analysis
- **Web search** - For researching solutions during hypothesis generation

Use sequential thinking as your primary reasoning framework, and invoke other tools as needed within each thought step.
