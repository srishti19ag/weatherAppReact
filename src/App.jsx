import "./App.css";
import Button from "@mui/material/Button";
import DeleteIcon from "@mui/icons-material/Delete";
import SearchBox from "./SearchBox";
import InfoBox from "./InfoBoxx.jsx";
import WeatherApp from "./WeatherApp.jsx";

function App() {
  let handleClick = () => {
    console.log("Button was clicked!");
  };

  return (
    <>
      <WeatherApp />
    </>
  );
}

export default App;
