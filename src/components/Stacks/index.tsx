import { useState } from "react";

function Stacks() {
  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src="/images/vite.svg" className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src="/images/react.svg" className="logo react" alt="React logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src="/images/typescript.svg" className="logo react" alt="React logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src="/images/git.svg" className="logo git" alt="git logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src="/images/github.png" className="logo react" alt="React logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src="/images/vercel.svg" className="logo react" alt="React logo" />
        </a>
      </div>
      <h3>Vite + React + TypeScript</h3>
      <p className="read-the-docs">Click on the Vite and React logos to learn more</p>
    </>
  );
}

export default Stacks;
