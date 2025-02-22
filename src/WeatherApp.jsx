import { useState } from "react";
import SearchBox from "./SearchBox";
import InfoBox from "./InfoBoxx";

export default function WeatherApp() {
  let [weatherInfo, setWeatherInfo] = useState({
    city: "Delhi",
    feelslike: 18.66,
    humidity: 63,
    temp: 19.05,
    tempMax: 19.05,
    tempMin: 19.05,
    weather: "haze",
  });

  let updateInfo = (newInfo) => {
    setWeatherInfo(newInfo);
  };

  return (
    <div style={{ textAlign: "center" }}>
      <h2>Weather App by Delta</h2>
      <SearchBox updateInfo={updateInfo} />
      <br></br>
      <InfoBox info={weatherInfo} />
    </div>
  );
}
