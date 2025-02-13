/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_WEATHER_API_KEY: string; // 必要な環境変数を定義
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}