import React from 'react';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './assets/styles/index.css'
import App from './components/App';
import Message from './components/Message';

const container = document.getElementById('root');

if (container) {
  const root = createRoot(container);
  root.render(
    <StrictMode>
      <main>
        <section>
          {/* App コンポーネントをセクション内に配置 */}
          <App />
        </section>
        <section>
          {/* Message コンポーネントを別のセクション内に配置 */}
          <Message message="Hello World!" />
        </section>
      </main>
    </StrictMode>
  );
} else {
  console.error("'root' が見つかりません");
}