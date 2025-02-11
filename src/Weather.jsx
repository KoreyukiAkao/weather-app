import { useState, useEffect } from 'react';

const API_KEY = import.meta.env.VITE_WEATHER_API_KEY; // .envからAPIキーを取得
const API_URL = `https://api.openweathermap.org/data/2.5/weather?units=metric&lang=ja`;

function App() {
  const [weather, setWeather] = useState(null); // 天気データを保存する

  // 天気データを取得する関数
  const fetchWeather = async (city) => {
    try {
      const response = await fetch(`${API_URL}&q=${city}&appid=${API_KEY}`);
      if (!response.ok) {
        throw new Error('データ取得に失敗しました');
      }
      const data = await response.json();
      setWeather(data);
    } catch (error) {
      console.error(error);
      setWeather(null);
    }
  };

  useEffect(() => {
    fetchWeather('Tokyo'); // 初期表示は東京の天気
  }, []);

  return (
    <div>
      <h1>天気アプリ</h1>
      {weather ? (
        <div>
          <h2>{weather.name} の天気</h2>
          <p>気温: {weather.main.temp}°C</p>
          <p>天気: {weather.weather[0].description}</p>
        </div>
      ) : (
        <p>データ取得中...</p>
      )}
    </div>
  );
}

export default App;