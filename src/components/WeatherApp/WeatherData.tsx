import React, { useState, useEffect } from "react";

interface WeatherDataProps {
  cityName: string;
}

const WeatherData: React.FC<WeatherDataProps> = ({ cityName }) => {
  const [weather, setWeather] = useState<any>(null); // 天気データ
  const [loading, setLoading] = useState(false); // ローディング状態
  const [error, setError] = useState(""); // エラーメッセージ

  // APIキーの取得
  const apiKey = import.meta.env.VITE_WEATHER_API_KEY;

  useEffect(() => {
    const fetchWeather = async () => {
      if (!cityName) return;

      setLoading(true);
      setError("");
      try {
        const cityNameToUse = getCityName(cityName); // 日本語入力を英語に変換
        const response = await fetch(
          `https://api.openweathermap.org/data/2.5/weather?q=${cityNameToUse}&appid=${apiKey}&units=metric&lang=ja`
        );
        const data = await response.json();
        if (response.ok) {
          setWeather(data); // データをstateに保存
        } else {
          setError(data.message || "データの取得に失敗しました"); // エラーメッセージを保存
        }
      } catch (err) {
        setError("天気データの取得に失敗しました"); // エラーハンドリング
      } finally {
        setLoading(false);
      }
    };

    fetchWeather();
  }, [cityName]); // cityNameが変更されるたびにAPIを呼び出す

  // 日本語の都市名を英語に変換する関数（例: 長野 → Nagano）
  const getCityName = (city: string) => {
    const cityMap: { [key: string]: string } = {
      長野: "Nagano",
      東京: "Tokyo",
      大阪: "Osaka",
      // 他の都市名を追加
    };

    return cityMap[city] || city; // 一致する都市名があれば英語名に変換、なければそのまま
  };

  return (
    <div>
      {loading && <div>読み込み中...</div>}
      {error && <div>{error}</div>}

      {weather && !loading && !error && (
        <div>
          <h2>{weather.name}の天気</h2>
          <p>気温: {weather.main.temp}°C</p>
          <p>天気: {weather.weather[0].description}</p>
          <p>湿度: {weather.main.humidity}%</p>
        </div>
      )}
    </div>
  );
};

export default WeatherData;