import React, { useState } from "react";
import WeatherSearch from "./WeatherSearch";
import WeatherData from "./WeatherData";

const WeatherApp = () => {
  const [cityName, setCityName] = useState("");

  const handleSelectCity = (cityName: string) => {
    setCityName(cityName);
  };

  return (
    <div>
      <WeatherSearch onSelectCity={handleSelectCity} />
      {cityName && <WeatherData cityName={cityName} />}
    </div>
  );
};

export default WeatherApp;
