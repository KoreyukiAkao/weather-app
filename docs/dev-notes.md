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

## TSX とは？

- TSX = TypeScript + JSX の略！
- TS → TypeScript
- X → JSX（JavaScript XML）

### TSXの意味

- TypeScript で JSX を使うための構文拡張！
- TypeScript (.ts) は JSX をサポートしない
- JSX を使いたい場合は .tsx を使う
- React コンポーネントを書くときに便利！

### TSXの具体例
#### ローカル型定義（コンポーネントや関数で使う）
```tsx
// React をインポート（Reactコンポーネントを定義するために必要）
import React from 'react';

// Props（プロパティ）の型定義
// Props は "コンポーネントに渡すデータ" を定義するオブジェクト
// ここでは message という "文字列" を受け取る
type Props = {
  message: string; // 必須の message プロパティ（文字列型）
};

// Message コンポーネントの定義
// `React.FC` を使わず、Props を関数の引数に直接適用する
// これにより `children` の自動追加を防ぎ、より厳密な型定義が可能
const Message = ({ message }: Props) => {
  return <h1>{message}</h1>; // 受け取った message を h1 タグ内に表示
};

// Message コンポーネントをエクスポート（他のファイルで使用可能にする）
export default Message;
```

#### グローバル型定義
📁declarations.d.tsを使う
```tsx
// declarations.d.ts
declare module '*.svg' {
  const content: string;
  export default content;
}

// これにより、SVG ファイルをインポートしたときに型エラーが出ないようになる
```

## Weatherコンポーネント 分解

```tsx
// 	Weather という名前の「天気に関連する動き（機能）」を作っている。
// 「()」 はその動きが何も受け取らないことを意味していて、特に外から情報を受け取るわけではない。
// 	「=>」 は、実際にその「動き」がどんなものかを定義するための部分。
const Weather = () => 
```

```tsx
// useState という状態を管理する仕組み（フック）を使って、weather という変数に null を初期値として設定し、その値は後から setWeather を使って更新できるようにする。値の型は何でも良い(<any>)。
const [weather, setWeather] = useState<any>(null);
```

```tsx
// 状態管理フックを使って、変数loadingにtrueを初期値として設定。loadingはsetLoadingによって更新される。
const [loading, setLoading] = useState(true);
```

```plaintext
状態管理とは、アプリの中で「今、何が起きているか」を把握し、それを使って画面を更新したりすること。
```

```tsx
// 変数errorを作る。初期値は文字列「''」。
// useStateは今何が起きているかを把握する仕組みで、setErrorを使ってerrorを更新。
// TypeScriptは初期値がから文字列であることから、errorの値を文字列型（string）と推測する。
const [error, setError] = useState('');

```
## React ルール
### 命名規則
- 大文字から始める
