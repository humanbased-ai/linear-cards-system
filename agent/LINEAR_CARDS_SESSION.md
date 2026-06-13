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
- `statement`: unframed formatted text for lightweight milestones, observations, or published artifacts
- `state`: success, warning, failure, blocked, pending, running, partial
- `action`: commands, approvals, next steps, user choices
- `disclosure`: collapsed deeper details

## Layout And Spacing Guidance

Use the reference rhythm: rail first, then a mix of framed cards and quiet information statements.

- Use cards for grouped data, comparisons, actions, references, decisions, disclosures, and state boundaries.
- Use `statement` for lightweight narrative, artifact announcements, observations, and single facts.
- Prefer one dominant card per node. Pair it with statements instead of stacking many cards.
- Create focus with vertical spacing between nodes, not heavy decoration.
- Keep statements narrow and readable. They should feel like annotations on the rail.
- Leave breathing room after summary cards and before major timeline transitions.
- If the layout feels loud, reduce the number of framed surfaces before changing color.
- Optimize spacing through shared CSS primitives first. Avoid per-instance margins unless a new primitive is truly needed.

## Workflow Rules

- Keep the main flow mostly linear.
- Put conditional paths inside `branch` cards.
- Prefer one dominant card per node, supported by optional statements.
- Prefer generic cards over custom components.
- Use `status`, `tone`, `emphasis`, and tokens to tune presentation.
- Use black and white as the main material. Reserve vivid colors for state chips, deltas, rail markers, selections, and small decorative signals.
- Prefer the built-in tone palette: `blue`, `violet`, `lime`, `rose`, `amber`, `cyan`, plus semantic `good`, `attention`, `bad`, `neutral`, and `muted`.
- Keep rail labels short: `DEFINED`, `CHECKED`, `BUILT`, `FAILED`, `VERIFY`.
- Use references for artifacts instead of embedding long raw output.

## Agent Checklist

1. Identify the workflow nodes.
2. Assign each node a title, rail label, optional time, and status.
3. Select generic card types by information shape.
4. Fill the card data.
5. Render through `LinearCardsTimeline`.
6. Tune tokens only if the visual tone needs adjustment.

## Downstream Quality Pass

If the harness exposes UI design skills, use them for the current task before finalizing:

- Load `impeccable` for product UI polish, accessibility, spacing, interaction states, and design-system discipline.
- Load the available taste/frontend skill, such as `design-taste-frontend`, for anti-slop visual judgment and reference matching.
- Keep these skills session-attached. Do not write permanent `AGENTS.md` or `CLAUDE.md` rules unless the user asks.

Apply the quality pass after the document renders:

1. Verify the rail/card layout in a browser.
2. Check desktop and mobile widths for overflow and text clipping.
3. Confirm interactive states: hover, focus, active, disabled if present.
4. Confirm semantic colors are consistent for good, attention, bad, muted, and neutral states.
5. Refine tokens before adding one-off CSS.

## Avoid

- New rail systems.
- New badge systems.
- Domain-specific card type names.
- Freeform card CSS for every use case.
- Turning branches into a full graph unless requested.
