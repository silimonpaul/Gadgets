import { useState, useEffect } from 'react';
import './Weather.css';

function Weather() {
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [city, setCity] = useState('London');

  const fetchWeather = async () => {
    setLoading(true);
    try {
      const response = await fetch(
        `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${city}?unitGroup=metric&key=3L4P9TGX3NL8CLJ8VWSS5LTDZ&contentType=json`
      );
      const data = await response.json();
      setWeather(data);
      setError(null);
    } catch (error) {
      setError('Failed to fetch weather data');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchWeather();
  }, []);

  return (
    <div className="weather">
      <h3>Weather</h3>
      <div className="weather-input">
        <input
          type="text"
          placeholder="Enter city"
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />
        <button onClick={fetchWeather}>Get Weather</button>
      </div>
      
      {loading && <div>Loading...</div>}
      {error && <div className="error">Error: {error}</div>}
      
      {weather && weather.currentConditions && (
        <div className="weather-info">
          <div className="temperature">
            {Math.round(weather.currentConditions.temp)}°C
          </div>
          <div className="description">
            {weather.currentConditions.conditions}
          </div>
          <div className="details">
            <div>Humidity: {weather.currentConditions.humidity}%</div>
            <div>Wind: {Math.round(weather.currentConditions.windspeed)} km/h</div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Weather;