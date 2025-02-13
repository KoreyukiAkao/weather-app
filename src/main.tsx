import React from "react";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./components/Stacks";
import "./assets/css/style.css";
import { WeatherApp } from "./components";
import { Stacks } from "./components";

const container = document.getElementById("root");

if (container) {
  const root = createRoot(container);
  root.render(
    <StrictMode>
      <main>
      <h1>Weather App</h1>
        <section>
          <h2>Weather Component</h2>
          <WeatherApp />
        </section>
        <hr />
        <section>
          <h2>Stacks Component</h2>
          <App />
        </section>
      </main>
    </StrictMode>
  );
} else {
  console.error("'root' が見つかりません");
}
