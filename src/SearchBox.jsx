import { useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import "./SearchBox.css";

export default function SearchBox({ updateInfo }) {
  let [city, setCity] = useState("");
  let [error, setError] = useState(false);
  const API_URL = "https://api.openweathermap.org/data/2.5/weather";
  const API_KEY = "8f4f77cffb2040309dc472a8560862ef";

  let getweatherInfo = async () => {
    try {
      let response = await fetch(
        `${API_URL}?q=${city}&appid=${API_KEY}&units=metric`
      );
      let jsonResponse = await response.json();
      // console.log(jsonResponse);
      let result = {
        city: city,
        temp: jsonResponse.main.temp,
        tempMin: jsonResponse.main.temp_min,
        tempMax: jsonResponse.main.temp_max,
        humidity: jsonResponse.main.humidity,
        feelslike: jsonResponse.main.feels_like,
        weather: jsonResponse.weather[0].description,
      };
      console.log(result);
      return result;
    } catch (err) {
      throw err;
    }
  };

  let handleChange = (event) => {
    setCity(event.target.value);
  };

  // let handlesubmit = async (event) => {
  //   try {
  //     event.preventDefault();
  //     console.log(city);
  //     setCity("");
  //     // setError(flase);
  //     let newInfo = await getweatherInfo();
  //     updateInfo(newInfo);
  //   } catch (err) {
  //     setError(true);
  //   }
  // };

  let handlesubmit = async (event) => {
    try {
      event.preventDefault();
      console.log(city);

      setError(false); // Reset error before making a new request

      let newInfo = await getweatherInfo();

      if (newInfo) {
        updateInfo(newInfo);
        setCity(""); // Clear the input field after a successful search
      }
    } catch (err) {
      setError(true);
    }
  };

  return (
    <div className="searchBox">
      <form onSubmit={handlesubmit}>
        <TextField
          id="city"
          label="City Name"
          variant="outlined"
          required
          value={city}
          onChange={handleChange}
        />
        <br></br>
        <br></br>
        <Button variant="contained" type="submit">
          Search
        </Button>
        {error && <p style={{ color: "red" }}>No such Place exits!</p>}
      </form>
    </div>
  );
}
