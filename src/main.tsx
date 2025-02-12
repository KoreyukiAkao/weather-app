import React from "react";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./assets/styles/index.css";
import { App, Message, Weather } from "./components";

const container = document.getElementById("root");

if (container) {
  const root = createRoot(container);
  root.render(
    <StrictMode>
      <main>
        <section>
          <h2>Weather</h2>
          <Weather />
        </section>
        <hr />
        <section>
          <h2>App</h2>
          <App />
        </section>
      </main>
    </StrictMode>
  );
} else {
  console.error("'root' が見つかりません");
}
