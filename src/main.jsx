import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "./App";
import "./styles/globals.css";
import Clarity from "@microsoft/clarity";

const clarityId = import.meta.env.CLARITY_ID;
if (clarityId) {
  Clarity.init(clarityId);
}

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
