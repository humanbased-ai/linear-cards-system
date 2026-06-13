# Linear Cards System Session Guide

Use this guide only for the current task when the user asks for Linear Cards System.

## Goal

Render complex work as a mostly linear rail with structured cards. The agent should model the workflow and choose card shapes. The system should own timeline geometry, spacing, card surfaces, status styling, and responsive behavior.

## Core Rule

Create a `LinearCardsDocument` and render it with `LinearCardsTimeline`.

Do not design a custom workflow layout from scratch unless the user explicitly asks.

## Card Types

Choose cards by information shape, not domain meaning:

- `header`: overview, current item, selected item, or workflow summary
- `grid`: labeled values, stats, properties, comparison cells
- `text`: explanation, notes, reasoning, summary, observation
- `list`: ordered or unordered items, checks, subtasks, constraints
- `split`: input/output, before/after, cause/effect, side-by-side comparison
- `branch`: local conditional paths, alternatives, fallback routes
- `reference`: links, files, citations, logs, assets, records
- `state`: success, warning, failure, blocked, pending, running, partial
- `action`: commands, approvals, next steps, user choices
- `disclosure`: collapsed deeper details

## Workflow Rules

- Keep the main flow mostly linear.
- Put conditional paths inside `branch` cards.
- Prefer one to three cards per node.
- Prefer generic cards over custom components.
- Use `status`, `tone`, `emphasis`, and tokens to tune presentation.
- Keep rail labels short: `DEFINED`, `CHECKED`, `BUILT`, `FAILED`, `VERIFY`.
- Use references for artifacts instead of embedding long raw output.

## Agent Checklist

1. Identify the workflow nodes.
2. Assign each node a title, rail label, optional time, and status.
3. Select generic card types by information shape.
4. Fill the card data.
5. Render through `LinearCardsTimeline`.
6. Tune tokens only if the visual tone needs adjustment.

## Avoid

- New rail systems.
- New badge systems.
- Domain-specific card type names.
- Freeform card CSS for every use case.
- Turning branches into a full graph unless requested.
