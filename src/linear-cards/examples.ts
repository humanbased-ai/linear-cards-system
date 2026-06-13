import type { LinearCardsDocument } from "./types";

export const demoDocument: LinearCardsDocument = {
  brand: {
    logoAlt: "Humanbased",
    logoSrc: "/assets/humanbased-symbol-wordmark-black.svg",
  },
  sourceHref: "https://github.com/humanbased-ai/linear-cards-system",
  title: "Linear Cards System",
  subtitle: "A session-attached UI grammar for turning complex work into a rail and generic cards.",
  footerNote: "Open-source product built by Humanbased. Rebrand note: Codatta is now Humanbased.",
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
      { label: "Card grammar", value: "10", delta: "generic", tone: "blue" },
      { label: "Custom layouts", value: "0", delta: "by default", tone: "lime" },
      { label: "Branch depth", value: "local", delta: "nested", tone: "violet" },
      { label: "Agent load", value: "low", delta: "schema-first", tone: "cyan" },
      { label: "Rail mode", value: "linear", delta: "chronological", tone: "rose" },
      { label: "Visual density", value: "medium", delta: "tunable", tone: "amber" },
      { label: "Schema", value: "typed", delta: "portable", tone: "lime" },
      { label: "Distribution", value: "session", delta: "attached", tone: "blue" },
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
        {
          type: "statement",
          title: "Statements stay unframed",
          body:
            "Use formatted statements for lightweight milestones, observations, or published artifacts that do not need a full card surface.",
          meta: "Statement primitive",
          badges: [{ label: "quiet", tone: "muted" }],
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
      id: "palette",
      title: "Suggest vivid decoration tones",
      subtitle: "Saturday  Jun 13",
      status: "complete",
      rail: { time: "7:24 PM", label: "PALETTE", markerTone: "blue" },
      cards: [
        {
          type: "grid",
          title: "Color palette suggestions",
          items: [
            { label: "Ink", value: "Near black", delta: "base", tone: "neutral" },
            { label: "Paper", value: "Near white", delta: "base", tone: "muted" },
            { label: "Electric blue", value: "Primary signal", delta: "links", tone: "blue" },
            { label: "Vivid violet", value: "Branching", delta: "choice", tone: "violet" },
            { label: "Acid lime", value: "Success", delta: "good", tone: "lime" },
            { label: "Signal rose", value: "Risk", delta: "bad", tone: "rose" },
            { label: "Hot amber", value: "Attention", delta: "warn", tone: "amber" },
            { label: "Clean cyan", value: "Reference", delta: "info", tone: "cyan" },
          ],
          action: { label: "use palette" },
        },
      ],
    },
    {
      id: "decision",
      title: "Choose distribution mode",
      subtitle: "Saturday  Jun 13",
      status: "partial",
      rail: { time: "7:31 PM", label: "SELECTED", markerTone: "violet" },
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
      rail: { time: "7:44 PM", label: "BUILDING", markerTone: "cyan" },
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
      rail: { time: "8:02 PM", label: "LINKED", markerTone: "lime" },
      cards: [
        {
          type: "statement",
          title: "Published session guide",
          body: "A reusable instruction capsule for coding agents is now part of the package.",
          meta: "agent/LINEAR_CARDS_SESSION.md",
          tone: "cyan",
          badges: [{ label: "reference", tone: "cyan" }],
        },
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
      rail: { time: "8:16 PM", label: "VERIFY", markerTone: "amber" },
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
        {
          type: "statement",
          title: "Quiet layouts favor contrast between framed and unframed information",
          meta: "Spacing guideline",
          tone: "violet",
        },
      ],
    },
  ],
};
