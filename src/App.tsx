import { LinearCardsTimeline } from "./linear-cards";
import { demoDocument } from "./linear-cards/examples";

export function App() {
  return (
    <main className="demo-shell">
      <LinearCardsTimeline document={demoDocument} />
    </main>
  );
}
