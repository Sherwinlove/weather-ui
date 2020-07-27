import React, { useState, useEffect } from "react";
import WeatherBlock from "./components/WeatherBlock/WeatherBlock";
import DateDisplay from "./components/DateDisplay/DateDisplay";
import Location from "./components/Location/Location";
import UnitToggle from "./components/UnitToggle/UnitToggle";

import styled from "styled-components";
import "./App.css";

const AppContainer = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const AppInner = styled.div`
  margin: 0 auto;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
`;

const App = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [forecastDays, setForecastDays] = useState([]);
  const [isMetric, setIsMetric] = useState(true);

  const getForecast = () => {
    const apiKey = "b21784b6712e0a0a389a578994415f1f";
    fetch(
      `https://api.openweathermap.org/data/2.5/onecall?lat=34.11&lon=-118.19&units=${
        isMetric ? "metric" : "imperial"
      }&exclude=hourly,minutely&cnt=7&appid=${apiKey}`
    )
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
        const forecast = result.daily;
        forecast.pop();
        setForecastDays(forecast);
        setIsLoaded(true);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getForecast();
  }, [isMetric]);

  const currentDate = forecastDays.length ? forecastDays[0].dt : new Date();
  return (
    <AppContainer>
      <AppInner>
        <Header>
          <DateDisplay date={currentDate} />
          <UnitToggle isMetric={isMetric} setIsMetric={setIsMetric} />
        </Header>
        <Location />
        <WeatherBlock days={forecastDays} isMetric={isMetric} />
      </AppInner>
    </AppContainer>
  );
};

export default App;
