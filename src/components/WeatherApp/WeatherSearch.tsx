import React, { useState, useEffect } from 'react';

const WeatherSearch = ({ onSelectCity }: { onSelectCity: (cityName: string) => void }) => {
  const [city, setCity] = useState('');
  const [cities, setCities] = useState([]);

  const searchWeather = async (city: string) => {
    try {
      const response = await fetch(`https://nominatim.openstreetmap.org/search?q=${city}&format=json`);
      const data = await response.json();
      setCities(data);
    } catch (error) {
      console.error("Error fetching city data", error);
    }
  };

  useEffect(() => {
    if (city) searchWeather(city);
  }, [city]);

  return (
    <div>
      <input
        type="text"
        value={city}
        onChange={(e) => setCity(e.target.value)}
        placeholder="都市名を入力"
      />
      <ul>
        {cities.map((city: any) => (
          <li key={city.place_id} onClick={() => onSelectCity(city.display_name)}>
            {city.display_name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default WeatherSearch;