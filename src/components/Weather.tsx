// Weather.tsx
import React, { useState, useEffect } from "react";

const Weather = () => {
  // React のコンポーネント関数を変数に代入
  const [weather, setWeather] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const apiKey = import.meta.env.VITE_WEATHER_API_KEY; // .envに設定したAPIキー
  const city = "Nagano"; // 任意の都市名

  useEffect(() => {
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric&lang=ja`
    )
      .then((response) => response.json())
      .then((data) => {
        setWeather(data);
        setLoading(false);
      })
      .catch((err) => {
        setError("天気データの取得に失敗しました");
        setLoading(false);
      });
  }, []);

  if (loading) return <div>読み込み中...</div>;
  if (error) return <div>{error}</div>;

  // weather と weather.main が null でないか確認
  if (!weather || !weather.main) return <div>天気情報がありません</div>;

  return (
    <div>
      <h1>{weather.name}の天気</h1>
      <p>気温: {weather.main.temp}°C</p>
      <p>天気: {weather.weather[0].description}</p>
      <p>湿度: {weather.main.humidity}%</p>
    </div>
  );
};

export default Weather;
