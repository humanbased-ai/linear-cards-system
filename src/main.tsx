import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { App } from "./App";
import "./linear-cards/linear-cards.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
