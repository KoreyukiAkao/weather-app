import React, { useState } from 'react';

const WeatherSearch = ({ onSelectCity }: { onSelectCity: (cityName: string) => void }) => {
  const [city, setCity] = useState('');
  const [cities, setCities] = useState<any[]>([]);

  const searchWeather = async (city: string) => {
    try {
      const response = await fetch(`https://nominatim.openstreetmap.org/search?q=${city}&format=json`);
      const data = await response.json();
      setCities(data);
    } catch (error) {
      console.error("Error fetching city data", error);
    }
  };

  const handleSelectCity = (cityName: string) => {
    onSelectCity(cityName);  // 親コンポーネントに都市名を渡す
    setCities([]);  // 都市名選択後にリストを非表示にする
  };

  const handleSearch = () => {
    if (city) searchWeather(city);  // 検索ボタンを押した際に検索開始
  };

  return (
    <div>
      <input
        type="text"
        value={city}
        onChange={(e) => setCity(e.target.value)}
        placeholder="都市名を入力"
      />
      <button onClick={handleSearch}>検索</button>
      <ul>
        {cities.map((city: any) => (
          <li key={city.place_id} onClick={() => handleSelectCity(city.display_name)}>
            {city.display_name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default WeatherSearch;