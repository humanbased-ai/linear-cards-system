import type { LinearCardsDocument } from "./types";

export const demoDocument: LinearCardsDocument = {
  eyebrow: "LINEAR CARDS SYSTEM",
  title: "Workflow Rendering Run",
  subtitle: "A session-attached UI grammar for turning complex work into a rail and generic cards.",
  badges: [
    { label: "Session tool", tone: "good" },
    { label: "Generic cards", tone: "neutral" },
  ],
  summary: {
    type: "header",
    eyebrow: "CURRENT OUTPUT",
    title: "Build a reusable timeline-card system",
    subtitle:
      "The agent produces structured workflow data. The renderer owns rail geometry, card rhythm, density, status, and spacing.",
    badges: [
      { label: "Partial", tone: "attention" },
      { label: "Inspectable", tone: "good" },
    ],
    metrics: [
      { label: "Card grammar", value: "10", delta: "generic" },
      { label: "Custom layouts", value: "0", delta: "by default", tone: "good" },
      { label: "Branch depth", value: "local", delta: "nested" },
      { label: "Agent load", value: "low", delta: "schema-first", tone: "good" },
      { label: "Rail mode", value: "linear", delta: "chronological" },
      { label: "Visual density", value: "medium", delta: "tunable" },
      { label: "Schema", value: "typed", delta: "portable" },
      { label: "Distribution", value: "session", delta: "attached" },
    ],
    footer: "Details: card taxonomy, schema contract, session guide, rendered example",
  },
  nodes: [
    {
      id: "intent",
      title: "Capture the intent",
      subtitle: "Saturday  Jun 13",
      status: "complete",
      rail: { time: "7:12 PM", label: "DEFINED", markerTone: "good" },
      cards: [
        {
          type: "text",
          title: "User need",
          body:
            "Complex tasks should be rendered as mostly linear workflows. The agent should arrange steps and choose card shapes, while the system preserves a consistent timeline-card experience.",
          meta: "Text Card",
        },
      ],
    },
    {
      id: "grammar",
      title: "Define the generic grammar",
      subtitle: "Saturday  Jun 13",
      status: "complete",
      rail: { time: "7:19 PM", label: "MAPPED", markerTone: "good" },
      cards: [
        {
          type: "grid",
          title: "Card primitives",
          items: [
            { label: "Header", value: "overview" },
            { label: "Grid", value: "values" },
            { label: "Text", value: "prose" },
            { label: "List", value: "items" },
            { label: "Split", value: "compare" },
            { label: "Branch", value: "forks" },
            { label: "Reference", value: "links" },
            { label: "State", value: "status" },
          ],
          action: { label: "view grammar" },
        },
      ],
    },
    {
      id: "decision",
      title: "Choose distribution mode",
      subtitle: "Saturday  Jun 13",
      status: "partial",
      rail: { time: "7:31 PM", label: "SELECTED", markerTone: "attention" },
      cards: [
        {
          type: "branch",
          title: "Invocation style",
          branches: [
            {
              label: "Permanent project rules",
              status: "skipped",
              description: "Too sticky for a reusable visual tool.",
            },
            {
              label: "Session-attached guide",
              status: "complete",
              selected: true,
              description: "Load when requested, use for the current task, then return to normal.",
            },
            {
              label: "Template-only package",
              status: "pending",
              description: "Useful later, but less direct for coding agents.",
            },
          ],
        },
      ],
    },
    {
      id: "contract",
      title: "Compile workflows into documents",
      subtitle: "Saturday  Jun 13",
      status: "running",
      rail: { time: "7:44 PM", label: "BUILDING", markerTone: "neutral" },
      cards: [
        {
          type: "split",
          title: "Agent vs renderer responsibility",
          sections: [
            {
              label: "Agent prepares",
              title: "Workflow data",
              body: "Nodes, titles, statuses, generic card types, references, actions, and local branches.",
            },
            {
              label: "System owns",
              title: "Visual behavior",
              body: "Rail geometry, card surfaces, density, dividers, badges, states, disclosure behavior, and responsive spacing.",
            },
          ],
        },
        {
          type: "list",
          title: "Minimum implementation surface",
          items: [
            { label: "Typed LinearCardsDocument", status: "complete" },
            { label: "Generic card renderer", status: "complete" },
            { label: "Session guide for agents", status: "complete" },
            { label: "CLI/package distribution", status: "pending" },
          ],
        },
      ],
    },
    {
      id: "references",
      title: "Attach evidence and outputs",
      subtitle: "Saturday  Jun 13",
      status: "complete",
      rail: { time: "8:02 PM", label: "LINKED", markerTone: "good" },
      cards: [
        {
          type: "reference",
          title: "Portable assets",
          references: [
            { label: "LINEAR_CARDS_SESSION.md", meta: "agent guide" },
            { label: "types.ts", meta: "document contract" },
            { label: "linear-cards.css", meta: "visual language" },
          ],
        },
      ],
    },
    {
      id: "verification",
      title: "Render and inspect",
      subtitle: "Saturday  Jun 13",
      status: "pending",
      rail: { time: "8:16 PM", label: "VERIFY", markerTone: "muted" },
      cards: [
        {
          type: "state",
          status: "pending",
          title: "Visual checkpoint",
          message: "Open the local demo and judge whether the rail, card density, tone, and spacing match the intended experience.",
          details: "This is where the visual language can be tuned before package extraction.",
        },
        {
          type: "action",
          title: "Next actions",
          actions: [
            { label: "Tighten visual match", description: "Adjust tokens, card density, and rail width.", kind: "primary" },
            { label: "Extract package", description: "Split demo from reusable package source." },
          ],
        },
        {
          type: "disclosure",
          title: "Implementation note",
          summary: "Why generic cards are enough",
          body:
            "The card types describe information shape, not domain meaning. Math, coding, research, operations, and engineering tasks can all map into the same rendering grammar.",
        },
      ],
    },
  ],
};
