# Linear Cards System

A session-attached workflow UI grammar for rendering complex work as a mostly linear rail with generic cards.

The idea is simple: coding agents should not redesign workflow UI from scratch every time. They should map the task into a `LinearCardsDocument`, choose generic card types by information shape, and let the renderer own the rail, spacing, surfaces, status styling, and responsive behavior.

## Status

This repository is an early open-source prototype. It includes:

- A React/Vite demo app
- A typed `LinearCardsDocument` model
- A reusable timeline/card renderer
- A CSS token layer for the visual system
- A session-attached agent guide

## Quick Start

```bash
npm install
npm run dev
```

Open the local URL printed by Vite.

## Core Usage

```tsx
import { LinearCardsTimeline } from "./linear-cards";
import type { LinearCardsDocument } from "./linear-cards";

const document: LinearCardsDocument = {
  title: "Workflow Rendering Run",
  nodes: [
    {
      id: "capture-intent",
      title: "Capture the intent",
      status: "complete",
      rail: { time: "7:12 PM", label: "DEFINED", markerTone: "good" },
      cards: [
        {
          type: "text",
          title: "User need",
          body: "Represent complex work as a mostly linear workflow.",
        },
      ],
    },
  ],
};

export function App() {
  return <LinearCardsTimeline document={document} />;
}
```

## Card Grammar

Cards are generic information shapes, not domain-specific components:

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

## Agent Usage

This system is meant to be session-attached, not a permanent project rule.

When a user asks for Linear Cards, an agent can load:

```txt
agent/LINEAR_CARDS_SESSION.md
```

Then for the current task only:

1. Identify workflow nodes.
2. Assign each node a title, rail label, optional time, and status.
3. Select generic card types by information shape.
4. Fill the card data.
5. Render through `LinearCardsTimeline`.
6. Tune tokens only if the visual tone needs adjustment.

If the downstream harness exposes UI quality skills, ask it to load `impeccable` and its taste/frontend design skill for the current session before finalizing. The intent is a temporary quality pass, not permanent agent configuration.

## Development

```bash
npm run build
```

The demo source lives in `src/linear-cards/examples.ts`.

## License

MIT
