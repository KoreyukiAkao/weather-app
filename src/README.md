# 📂 `src/` 内のファイルの役割

## **📄 `App.css`**

- **`App.tsx` のスタイルを管理する CSS ファイル。**
- `App.tsx` 内で `import "./App.css";` のように読み込んで使用する。
- 例えば、ボタンのデザインや背景色などのスタイルを設定できる。

## **📄 `App.tsx`**

- **アプリのメインコンポーネント（UI を定義するファイル）。**
- ここに **HTML の構造 & React のロジック** を書く。
- `main.tsx` から呼び出され、画面にレンダリングされる。

## **📄 `index.css`**

- **アプリ全体に適用される CSS ファイル。**
- `main.tsx` で `import "./index.css";` して全体のデザインに影響を与える。
- **グローバルスタイル（フォント・ページ背景など）を記述することが多い。**

## **📄 `main.tsx`**

- **React アプリのエントリーポイント（最初に実行されるファイル）。**
- `ReactDOM.createRoot()` を使って、`App.tsx` を `index.html` の `<div id="root">` にレンダリングする。
- つまり、`main.tsx` が `App.tsx` を実行することで、画面が表示される。

## **ざっくりまとめ**

| ファイル名  | 役割                                                     |
| ----------- | -------------------------------------------------------- |
| `App.css`   | `App.tsx` のスタイルを管理する CSS                       |
| `App.tsx`   | **アプリのメインコンポーネント（UI & ロジック）**        |
| `index.css` | **アプリ全体の CSS（グローバルスタイル）**               |
| `main.tsx`  | **React アプリのエントリーポイント（`App.tsx` を実行）** |

## JSX（JavaScript XML）とは？

### 📌 JSX の概要

- **JSX は「JavaScript XML」の略**
- **JavaScript の中に HTML のような記述ができる構文**
- **React でコンポーネントを作るときによく使われる**
- **実際には JavaScript に変換される（Babel が変換する）**

### 📌 JSX の例

```jsx
function App() {
  return <h1>Hello, World!</h1>;
}
```

⬇️ **実際にはこういう JavaScript に変換される（Babel が処理）**

```js
function App() {
  return React.createElement("h1", null, "Hello, World!");
}
```
