export type LinearCardStatus =
  | "idle"
  | "pending"
  | "running"
  | "complete"
  | "partial"
  | "blocked"
  | "failed"
  | "skipped";

export type LinearCardTone =
  | "neutral"
  | "good"
  | "attention"
  | "bad"
  | "muted"
  | "blue"
  | "violet"
  | "lime"
  | "rose"
  | "amber"
  | "cyan";

export type LinearCardType =
  | "header"
  | "grid"
  | "text"
  | "list"
  | "split"
  | "branch"
  | "reference"
  | "statement"
  | "state"
  | "action"
  | "disclosure";

export type LinearBadge = {
  label: string;
  tone?: LinearCardTone;
};

export type LinearMetric = {
  label: string;
  value: string;
  delta?: string;
  tone?: LinearCardTone;
};

type LinearCardBase = {
  id?: string;
  type: LinearCardType;
  title?: string;
  eyebrow?: string;
  tone?: LinearCardTone;
  emphasis?: "primary" | "normal" | "quiet";
};

export type HeaderCard = LinearCardBase & {
  type: "header";
  title: string;
  subtitle?: string;
  badges?: LinearBadge[];
  metrics?: LinearMetric[];
  footer?: string;
};

export type GridCard = LinearCardBase & {
  type: "grid";
  items: LinearMetric[];
  action?: {
    label: string;
    href?: string;
  };
};

export type TextCard = LinearCardBase & {
  type: "text";
  body: string;
  meta?: string;
};

export type ListCard = LinearCardBase & {
  type: "list";
  ordered?: boolean;
  items: {
    label: string;
    description?: string;
    status?: LinearCardStatus;
  }[];
};

export type SplitCard = LinearCardBase & {
  type: "split";
  sections: {
    label: string;
    title?: string;
    body?: string;
    metrics?: LinearMetric[];
  }[];
};

export type BranchCard = LinearCardBase & {
  type: "branch";
  branches: {
    label: string;
    status?: LinearCardStatus;
    description?: string;
    selected?: boolean;
  }[];
};

export type ReferenceCard = LinearCardBase & {
  type: "reference";
  references: {
    label: string;
    href?: string;
    meta?: string;
    tone?: LinearCardTone;
  }[];
};

export type StatementCard = LinearCardBase & {
  type: "statement";
  title: string;
  body?: string;
  meta?: string;
  badges?: LinearBadge[];
};

export type StateCard = LinearCardBase & {
  type: "state";
  status: LinearCardStatus;
  message: string;
  details?: string;
};

export type ActionCard = LinearCardBase & {
  type: "action";
  actions: {
    label: string;
    description?: string;
    kind?: "primary" | "secondary";
  }[];
};

export type DisclosureCard = LinearCardBase & {
  type: "disclosure";
  summary: string;
  body: string;
};

export type LinearCard =
  | HeaderCard
  | GridCard
  | TextCard
  | ListCard
  | SplitCard
  | BranchCard
  | ReferenceCard
  | StatementCard
  | StateCard
  | ActionCard
  | DisclosureCard;

export type LinearRail = {
  time?: string;
  label?: string;
  markerTone?: LinearCardTone;
};

export type LinearCardNode = {
  id: string;
  title?: string;
  subtitle?: string;
  status?: LinearCardStatus;
  rail?: LinearRail;
  cards: LinearCard[];
};

export type LinearCardsDocument = {
  brand?: {
    logoAlt?: string;
    logoSrc: string;
    name?: string;
  };
  footerNote?: string;
  eyebrow?: string;
  sourceHref?: string;
  title: string;
  subtitle?: string;
  badges?: LinearBadge[];
  summary?: HeaderCard;
  nodes: LinearCardNode[];
};
