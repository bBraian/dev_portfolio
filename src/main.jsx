import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "./App";
import "./styles/globals.css";

// Vite only exposes env vars prefixed with VITE_ to client code.
const clarityId = import.meta.env.VITE_CLARITY_ID;
if (clarityId) {
  // Loaded after the app so analytics never delays first paint.
  import("@microsoft/clarity").then(({ default: Clarity }) => Clarity.init(clarityId));
}

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
