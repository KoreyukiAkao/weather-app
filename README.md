
# 🌤 Weather App (React + Vite) 開発メモ

## このプロジェクトで使用したコマンド

### Node.jsのバージョン確認
```
node -v
```
### npmのバージョン確認
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
## 📌 プロジェクト概要
このプロジェクトは、**React + Vite** を使用して天気データを取得・表示するシンプルなアプリです。  
`fetch` を利用して OpenWeather API からデータを取得し、画面に表示します。  



## 📂 ディレクトリ構成とファイルの役割

### **📁 `node_modules/`**
- **npmでインストールされたライブラリ** が格納されるフォルダ。
- `react` や `vite` など、プロジェクトで使用するすべてのパッケージがここに入る。
- **⚠️ Gitには含めない！（`.gitignore` によって除外される）**



### **📁 `public/`**
- **静的ファイル（画像やfaviconなど）を置くフォルダ**。
- `index.html` もここにあり、Reactアプリのエントリーポイントとなる。
- **ほとんど編集しないことが多い**。



### **📁 `src/`（💡 メインの開発フォルダ）**
- Reactの**すべてのコード**がここに入る。
- **重要なファイル**：
  - `src/main.jsx` → **Reactアプリのエントリーポイント**（ここから `App.jsx` をレンダリング）
  - `src/App.jsx` → **アプリのメインコンポーネント**
  - `src/assets/` → 画像やCSSなどのリソースを格納する（必要に応じて使用）



### **📄 `.env`**
- **APIキーなどの環境変数を管理するファイル**。
- 例えば、OpenWeather API のキーを以下のように記述：
  ```env
  VITE_WEATHER_API_KEY=YOUR_API_KEY
- **Viteでは `import.meta.env.VITE_WEATHER_API_KEY` で読み込める。**
- **⚠️ Gitにアップしない！（`.gitignore` によって自動的に除外される）**


### **📄 `.gitignore`**
- **Gitに含めたくないファイルやフォルダを指定するファイル。**
- **主な除外対象:**
  - `node_modules/`
  - `.env`
  - `dist/`（ビルド後のファイル）



### **📄 `eslint.config.js`**
- **コードの品質を保つためのESLintの設定ファイル。**
- インデントの統一や、不要なコードの警告を出すルールが書かれている。
- **基本的には変更不要。**



### **📄 `index.html`**
- **ReactアプリのベースとなるHTMLファイル。**
- `public/` 内にあり、ViteがこのHTMLを読み込んでアプリを表示する。
- `id="root"` がある部分に `src/main.jsx` を通じて React がレンダリングされる。
- **基本的には編集不要。**



### **📄 `package.json`**
- **プロジェクトの設定 & 依存関係を管理するファイル。**
- `npm install` を実行すると、ここに書かれた依存パッケージが `node_modules/` にインストールされる。
- `scripts` に `npm run dev` などの実行コマンドが定義されている。



### **📄 `package-lock.json`**
- **npmのパッケージのバージョンを固定するファイル。**
- 他の開発環境でも **同じバージョンのライブラリを使用するために必要。**
- **手動で編集しない（npmが自動生成・管理）。**



### **📄 `README.md`**
- **プロジェクトの説明を書くファイル（Markdown形式）。**
- GitHubでプロジェクトを公開すると、このファイルがトップページに表示される。
- **用途例:**
  - プロジェクトの目的・説明
  - セットアップ手順
  - 使用している技術
  - ディレクトリ構成
- **自由に編集OK！**



### **📄 Viteとは？**
- **Vite（ヴィート）** は、React や Vue などのフロントエンドフレームワーク向けの **超高速ビルドツール & 開発サーバー**。
- 伝統的な **Create React App（CRA）** よりも **速く、軽く、効率的**。
- **特徴:**
  - **超高速な開発サーバー:** ファイル変更時のリロードが爆速（HMR: Hot Module Replacement）。
  - **ES Modulesベース:** 必要なファイルだけ読み込むので無駄がない。
  - **ビルドが速い:** `esbuild` を利用し、最適化されたバンドルを作成。

✅ **簡単に言うと、Viteを使うとReact開発が「爆速」になる！**



# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh
