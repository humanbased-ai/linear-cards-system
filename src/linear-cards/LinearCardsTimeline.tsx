import type {
  LinearBadge,
  LinearCard,
  LinearCardNode,
  LinearCardsDocument,
  LinearCardStatus,
  LinearCardTone,
  LinearMetric,
} from "./types";

type Props = {
  document: LinearCardsDocument;
};

const statusLabel: Record<LinearCardStatus, string> = {
  idle: "Idle",
  pending: "Pending",
  running: "Running",
  complete: "Complete",
  partial: "Partial",
  blocked: "Blocked",
  failed: "Failed",
  skipped: "Skipped",
};

export function LinearCardsTimeline({ document }: Props) {
  return (
    <section className="lc-system" aria-label={document.title}>
      <div className="lc-document-head">
        {document.eyebrow ? <p className="lc-eyebrow">{document.eyebrow}</p> : null}
        <div className="lc-document-title-row">
          <div>
            <h1>{document.title}</h1>
            {document.subtitle ? <p>{document.subtitle}</p> : null}
          </div>
          <BadgeRow badges={document.badges} />
        </div>
      </div>

      {document.summary ? <CardRenderer card={document.summary} compact={false} /> : null}

      <p className="lc-section-label">Timeline</p>
      <div className="lc-timeline">
        {document.nodes.map((node) => (
          <TimelineNode key={node.id} node={node} />
        ))}
      </div>
    </section>
  );
}

function TimelineNode({ node }: { node: LinearCardNode }) {
  return (
    <article className="lc-node">
      <aside className="lc-rail" aria-label={node.rail?.label}>
        <div className="lc-rail-meta">
          <span>{node.rail?.time}</span>
          <strong>{node.rail?.label}</strong>
        </div>
        <span className={toneClass("lc-dot", node.rail?.markerTone)} />
      </aside>
      <div className="lc-node-main">
        {(node.title || node.subtitle || node.status) && (
          <header className="lc-node-head">
            <div>
              {node.title ? <h2>{node.title}</h2> : null}
              {node.subtitle ? <span>{node.subtitle}</span> : null}
            </div>
            {node.status ? <StatusPill status={node.status} /> : null}
          </header>
        )}
        <div className="lc-node-cards">
          {node.cards.map((card, index) => (
            <CardRenderer key={card.id ?? `${node.id}-${index}`} card={card} compact />
          ))}
        </div>
      </div>
    </article>
  );
}

function CardRenderer({ card, compact }: { card: LinearCard; compact: boolean }) {
  const className = [
    "lc-card",
    `lc-card-${card.type}`,
    card.emphasis ? `lc-emphasis-${card.emphasis}` : "",
    toneClass("", card.tone),
    compact ? "lc-card-compact" : "lc-card-featured",
  ]
    .filter(Boolean)
    .join(" ");

  if (card.type === "header") {
    return (
      <section className={className}>
        <div className="lc-card-padding">
          <div className="lc-header-top">
            <div>
              {card.eyebrow ? <p className="lc-eyebrow">{card.eyebrow}</p> : null}
              <h2>{card.title}</h2>
              {card.subtitle ? <p className="lc-card-subtitle">{card.subtitle}</p> : null}
            </div>
            <BadgeRow badges={card.badges} />
          </div>
        </div>
        {card.metrics ? <MetricGrid items={card.metrics} /> : null}
        {card.footer ? (
          <footer className="lc-card-footer">
            {card.footer}
            <span aria-hidden="true">⌄</span>
          </footer>
        ) : null}
      </section>
    );
  }

  if (card.type === "grid") {
    return (
      <section className={className}>
        <CardTitle card={card} />
        <MetricGrid items={card.items} />
        {card.action ? (
          card.action.href ? (
            <a className="lc-card-link" href={card.action.href}>
              {card.action.label} →
            </a>
          ) : (
            <button className="lc-card-link" type="button">
              {card.action.label} →
            </button>
          )
        ) : null}
      </section>
    );
  }

  if (card.type === "text") {
    return (
      <section className={className}>
        <CardTitle card={card} />
        <div className="lc-card-padding">
          <p className="lc-text-body">{card.body}</p>
          {card.meta ? <p className="lc-meta-line">{card.meta}</p> : null}
        </div>
      </section>
    );
  }

  if (card.type === "list") {
    const ListTag = card.ordered ? "ol" : "ul";
    return (
      <section className={className}>
        <CardTitle card={card} />
        <ListTag className="lc-list">
          {card.items.map((item) => (
            <li key={item.label}>
              <span className="lc-list-marker" />
              <div>
                <strong>{item.label}</strong>
                {item.description ? <p>{item.description}</p> : null}
              </div>
              {item.status ? <StatusPill status={item.status} /> : null}
            </li>
          ))}
        </ListTag>
      </section>
    );
  }

  if (card.type === "split") {
    return (
      <section className={className}>
        <CardTitle card={card} />
        <div className="lc-split">
          {card.sections.map((section) => (
            <div className="lc-split-section" key={section.label}>
              <span>{section.label}</span>
              {section.title ? <strong>{section.title}</strong> : null}
              {section.body ? <p>{section.body}</p> : null}
              {section.metrics ? <MetricGrid items={section.metrics} /> : null}
            </div>
          ))}
        </div>
      </section>
    );
  }

  if (card.type === "branch") {
    return (
      <section className={className}>
        <CardTitle card={card} />
        <div className="lc-branches">
          {card.branches.map((branch) => (
            <div className={branch.selected ? "lc-branch lc-selected" : "lc-branch"} key={branch.label}>
              <span className="lc-branch-rule" />
              <div>
                <div className="lc-branch-head">
                  <strong>{branch.label}</strong>
                  {branch.status ? <StatusPill status={branch.status} /> : null}
                </div>
                {branch.description ? <p>{branch.description}</p> : null}
              </div>
            </div>
          ))}
        </div>
      </section>
    );
  }

  if (card.type === "reference") {
    return (
      <section className={className}>
        <CardTitle card={card} />
        <div className="lc-references">
          {card.references.map((reference) =>
            reference.href ? (
              <a className={toneClass("lc-reference", reference.tone)} href={reference.href} key={reference.label}>
                <strong>{reference.label}</strong>
                {reference.meta ? <span>{reference.meta}</span> : null}
              </a>
            ) : (
              <div className={toneClass("lc-reference", reference.tone)} key={reference.label}>
                <strong>{reference.label}</strong>
                {reference.meta ? <span>{reference.meta}</span> : null}
              </div>
            ),
          )}
        </div>
      </section>
    );
  }

  if (card.type === "state") {
    return (
      <section className={className}>
        <div className="lc-state-row">
          <StatusPill status={card.status} />
          <div>
            <CardTitle card={card} />
            <p>{card.message}</p>
            {card.details ? <span>{card.details}</span> : null}
          </div>
        </div>
      </section>
    );
  }

  if (card.type === "action") {
    return (
      <section className={className}>
        <CardTitle card={card} />
        <div className="lc-actions">
          {card.actions.map((action) => (
            <button className={action.kind === "primary" ? "lc-action lc-action-primary" : "lc-action"} key={action.label} type="button">
              <strong>{action.label}</strong>
              {action.description ? <span>{action.description}</span> : null}
            </button>
          ))}
        </div>
      </section>
    );
  }

  return (
    <details className={className}>
      <summary>
        <span>{card.title}</span>
        <strong>{card.summary}</strong>
      </summary>
      <p>{card.body}</p>
    </details>
  );
}

function CardTitle({ card }: { card: { title?: string; eyebrow?: string } }) {
  if (!card.title && !card.eyebrow) return null;

  return (
    <header className="lc-card-title">
      {card.eyebrow ? <p className="lc-eyebrow">{card.eyebrow}</p> : null}
      {card.title ? <h3>{card.title}</h3> : null}
    </header>
  );
}

function MetricGrid({ items }: { items: LinearMetric[] }) {
  return (
    <div className="lc-metric-grid">
      {items.map((item) => (
        <div className="lc-metric" key={`${item.label}-${item.value}`}>
          <span>{item.label}</span>
          <strong className={toneClass("", item.tone)}>{item.value}</strong>
          {item.delta ? <em>{item.delta}</em> : null}
        </div>
      ))}
    </div>
  );
}

function BadgeRow({ badges }: { badges?: LinearBadge[] }) {
  if (!badges?.length) return null;

  return (
    <div className="lc-badges">
      {badges.map((badge) => (
        <span className={toneClass("lc-badge", badge.tone)} key={badge.label}>
          {badge.label}
        </span>
      ))}
    </div>
  );
}

function StatusPill({ status }: { status: LinearCardStatus }) {
  return <span className={toneClass("lc-status", statusTone(status))}>{statusLabel[status]}</span>;
}

function statusTone(status: LinearCardStatus): LinearCardTone {
  if (status === "complete") return "good";
  if (status === "partial" || status === "running" || status === "pending") return "attention";
  if (status === "blocked" || status === "failed") return "bad";
  if (status === "skipped" || status === "idle") return "muted";
  return "neutral";
}

function toneClass(base: string, tone?: LinearCardTone) {
  return [base, tone ? `lc-tone-${tone}` : ""].filter(Boolean).join(" ");
}
