import React, { useState } from "react";
import WeatherSearch from "./WeatherSearch";
import Weather from "./Weather";

const WeatherApp = () => {
  const [cityName, setCityName] = useState("");

  const handleSelectCity = (cityName: string) => {
    setCityName(cityName);
  };

  return (
    <div>
      <WeatherSearch onSelectCity={handleSelectCity} />
      {cityName && <Weather cityName={cityName} />}
    </div>
  );
};

export default WeatherApp;
