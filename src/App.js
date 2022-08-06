import './App.css';
import Search from "./components/search/search";
import Weather from "./components/weather/weather";
import {WEATHER_API_URL, WEATHER_API_KEY} from "./api";
import {useState} from "react";

function App() {
    const [weather, setWeather] = useState(null);
    const [forecast, setForecast] = useState(null);

    const handleOnSearchChange = (searchData) => {
        const [lat, lon ] = searchData.value.split(" ");

        const weatherFetch = fetch(`${WEATHER_API_URL}/weather?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=metric`);
        const forecastFetch = fetch(`${WEATHER_API_URL}/forecast?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=metric`);

        Promise.all([weatherFetch, forecastFetch])
            .then(async (response) => {
                const weatherResponse = await response[0].json();
                const forecastResponse = await response[1].json();

                setWeather({ city: searchData.label, ...weatherResponse});
                setForecast({ city: searchData.label, ...forecastResponse});
            })
            .catch((err) => console.error(err));
    }

  console.log(weather);
    console.log(forecast);


    return (
    <div className="container">
      <Search onSearchChange={handleOnSearchChange} />
        {weather && <Weather data={weather}/>}
    </div>
  );
}

export default App;
