# 🌤 Weather App (React + Vite) 開発メモ

## このプロジェクトで使用したコマンド

### Node.js のバージョン確認

```
node -v
```

### npm のバージョン確認

```
npm -v
```

### Vite + React プロジェクトの作成

```
npm create vite@latest . -- --template react
```

### 依存関係のインストール

```
npm install
```

### 開発サーバーを起動

```
npm run dev
```

### TypeScript をインストール

```
npm install --save-dev typescript @types/react @types/react-dom
```
### src/ ディレクトリ内の .jsx ファイルを .tsx に一括リネーム
```
find src -name "*.jsx" -exec sh -c 'mv "$0" "${0%.jsx}.tsx"' {} \;
```
この後、一括置換で.jsxを.tsxへ

## 📌 プロジェクト概要

このプロジェクトは、**React + Vite** を使用して天気データを取得・表示するシンプルなアプリです。  
`fetch` を利用して OpenWeather API からデータを取得し、画面に表示します。

## 📂 ディレクトリ構成とファイルの役割

### **📁 `node_modules/`**

- **npm でインストールされたライブラリ** が格納されるフォルダ。
- `react` や `vite` など、プロジェクトで使用するすべてのパッケージがここに入る。
- **⚠️ Git には含めない！（`.gitignore` によって除外される）**

### **📁 `public/`**

- **静的ファイル（画像や favicon など）を置くフォルダ**。
- React アプリのエントリーポイントとなる。
- ビルド後も変わらずアクセスできる静的ファイル（画像やアイコンなど）を格納。
- **React コンポーネント内で絶対パス（例：/logo.png）でアクセス**
```tsx
// React コンポーネント内での使用例：
<img src="/images/logo.png" alt="Logo" />
```

### **📁 `src/`（💡 メインの開発フォルダ）**

- React の**すべてのコード**がここに入る。
- **重要なファイル**：
  - `src/main.tsx` → **React アプリのエントリーポイント**（ここから `App.tsx` をレンダリング）
  - `src/App.tsx` → **アプリのメインコンポーネント**
  - `src/assets/` → 画像や CSS などのリソースを格納する（必要に応じて使用）

### **📄 `.env`**

- **API キーなどの環境変数を管理するファイル**。
- 例えば、OpenWeather API のキーを以下のように記述：
  ```env
  VITE_WEATHER_API_KEY=YOUR_API_KEY
  ```
- **Vite では `import.meta.env.VITE_WEATHER_API_KEY` で読み込める。**
- **⚠️ Git にアップしない！（`.gitignore` によって自動的に除外される）**

### **📄 `.gitignore`**

- **Git に含めたくないファイルやフォルダを指定するファイル。**
- **主な除外対象:**
  - `node_modules/`
  - `.env`
  - `dist/`（ビルド後のファイル）

### **📄 `eslint.config.js`**

- **コードの品質を保つための ESLint の設定ファイル。**
- インデントの統一や、不要なコードの警告を出すルールが書かれている。
- **基本的には変更不要。**

### **📄 `index.html`**

- **React アプリのベースとなる HTML ファイル。**
- `public/` 内にあり、Vite がこの HTML を読み込んでアプリを表示する。
- `id="root"` がある部分に `src/main.tsx` を通じて React がレンダリングされる。
- **基本的には編集不要。**

### **📄 `package.json`**

- **プロジェクトの設定 & 依存関係を管理するファイル。**
- `npm install` を実行すると、ここに書かれた依存パッケージが `node_modules/` にインストールされる。
- `scripts` に `npm run dev` などの実行コマンドが定義されている。

### **📄 `package-lock.json`**

- **npm のパッケージのバージョンを固定するファイル。**
- 他の開発環境でも **同じバージョンのライブラリを使用するために必要。**
- **手動で編集しない（npm が自動生成・管理）。**

### **📄 `README.md`**

- **プロジェクトの説明を書くファイル（Markdown 形式）。**
- GitHub でプロジェクトを公開すると、このファイルがトップページに表示される。
- **用途例:**
  - プロジェクトの目的・説明
  - セットアップ手順
  - 使用している技術
  - ディレクトリ構成
- **自由に編集 OK！**

### **📄 Vite とは？**

- **Vite（ヴィート）** は、React や Vue などのフロントエンドフレームワーク向けの **超高速ビルドツール & 開発サーバー**。
- 伝統的な **Create React App（CRA）** よりも **速く、軽く、効率的**。
- **特徴:**
  - **超高速な開発サーバー:** ファイル変更時のリロードが爆速（HMR: Hot Module Replacement）。
  - **ES Modules ベース:** 必要なファイルだけ読み込むので無駄がない。
  - **ビルドが速い:** `esbuild` を利用し、最適化されたバンドルを作成。

✅ **簡単に言うと、Vite を使うと React 開発が「爆速」になる！**

