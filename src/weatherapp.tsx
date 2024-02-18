import React, { useState } from 'react';
import { ReactWidget } from '@jupyterlab/ui-components';

interface Weather {
  city: string;
  state: string;
  tempC: string;
  tempF: string;
  weather: string;
}
const WeatherApp = (): JSX.Element => {
  const [error, setError] = useState('');
  const apiKey = 'EnterYourKeyHere';
  const [weather, setWeather] = useState({
    city: '',
    state: '',
    tempC: '',
    tempF: ',',
    weather: ''
  } as Weather);
  const [dataLoaded, setIsDataLoaded] = useState(false);

  const fetchWeather = (zip: string) => {
    const url = `https://api.interzoid.com/getweatherzipcode?license=${apiKey}&zip=${zip}`;
    console.log(url);
    //  Make API call to OpenWeatherMap
    fetch(url)
      .then(response => response.json())
      .then(data => {
        if (error) {
          setError('');
          return;
        }
        setWeather({
          city: data.City,
          state: data.State,
          tempC: data.TempC,
          tempF: data.TempF,
          weather: data.Weather
        });
        setIsDataLoaded(true);
      })
      .catch(error => console.log(error));
  };

  const onSubmit = (event: any) => {
    event.preventDefault();
    setIsDataLoaded(false);
    setError('');
    const target = event.target;
    const zipcode = target.zipcode.value;

    const isValidZip = /(^\d{5}$)|(^\d{5}-\d{4}$)/.test(zipcode);
    if (isValidZip) {
      fetchWeather(zipcode);
    } else {
      setError('Zip code was not a valid format');
    }
    console.log(zipcode);
  };

  return (
    <>
      <form className="form" onSubmit={onSubmit}>
        <div className="field">
          <label htmlFor="zipcode">Zipcode</label>
          <input id="zipcode" />
        </div>
        <button type="submit">Get Weather</button>
      </form>
      <div>
        {dataLoaded && (
          <>
            <div>City: {weather.city}</div>
            <div>State: {weather.state}</div>
            <div>Celsius Temp: {weather.tempC}</div>
            <div>Farenheit Temp: {weather.tempF}</div>
            <div>Weather: {weather.weather}</div>
          </>
        )}
        <div style={{ color: 'red' }}> {error}</div>
      </div>
    </>
  );
};

export class WeatherWidget extends ReactWidget {
  /**
   * Constructs a new WeatherWidget.
   */
  constructor() {
    super();
    this.addClass('jp-react-widget');
  }

  render(): JSX.Element {
    return <WeatherApp />;
  }
}

export default WeatherApp;
