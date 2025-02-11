# 📂 `src/` 内のファイルの役割

## **📄 `App.css`**
- **`App.jsx` のスタイルを管理するCSSファイル。**
- `App.jsx` 内で `import "./App.css";` のように読み込んで使用する。
- 例えば、ボタンのデザインや背景色などのスタイルを設定できる。



## **📄 `App.jsx`**
- **アプリのメインコンポーネント（UIを定義するファイル）。**
- ここに **HTMLの構造 & Reactのロジック** を書く。
- `main.jsx` から呼び出され、画面にレンダリングされる。



## **📄 `index.css`**
- **アプリ全体に適用されるCSSファイル。**
- `main.jsx` で `import "./index.css";` して全体のデザインに影響を与える。
- **グローバルスタイル（フォント・ページ背景など）を記述することが多い。**



## **📄 `main.jsx`**
- **Reactアプリのエントリーポイント（最初に実行されるファイル）。**
- `ReactDOM.createRoot()` を使って、`App.jsx` を `index.html` の `<div id="root">` にレンダリングする。
- つまり、`main.jsx` が `App.jsx` を実行することで、画面が表示される。

## **ざっくりまとめ**
| ファイル名 | 役割 |
|--|--|
| `App.css` | `App.jsx` のスタイルを管理するCSS |
| `App.jsx` | **アプリのメインコンポーネント（UI & ロジック）** |
| `index.css` | **アプリ全体のCSS（グローバルスタイル）** |
| `main.jsx` | **Reactアプリのエントリーポイント（`App.jsx` を実行）** |



## JSX（JavaScript XML）とは？

### 📌 JSXの概要
- **JSXは「JavaScript XML」の略**
- **JavaScriptの中にHTMLのような記述ができる構文**
- **Reactでコンポーネントを作るときによく使われる**
- **実際にはJavaScriptに変換される（Babelが変換する）**


### 📌 JSXの例
```jsx
function App() {
  return <h1>Hello, World!</h1>;
}
```

⬇️ **実際にはこういうJavaScriptに変換される（Babelが処理）**
```js
function App() {
  return React.createElement("h1", null, "Hello, World!");
}