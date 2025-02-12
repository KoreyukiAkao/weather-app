import React from 'react';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './assets/styles/index.css'
import {App, Message} from './components';

const container = document.getElementById('root');

if (container) {
  const root = createRoot(container);
  root.render(
    <StrictMode>
      <main>
        <section>
          <h2>Appコンポーネント</h2>
          <App />
        </section>
        <section>
          <h2>Messageコンポーネント</h2>
          <Message message="Hello World!" />
        </section>
      </main>
    </StrictMode>
  );
} else {
  console.error("'root' が見つかりません");
}