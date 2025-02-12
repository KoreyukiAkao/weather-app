/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_WEATHER_API_KEY: string;
  // 他の環境変数があればここに追加
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}