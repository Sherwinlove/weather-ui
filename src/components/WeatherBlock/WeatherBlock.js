import React from "react";
import styled from "styled-components";
import moment from "moment";

const WeatherBlockContainer = styled.ul`
  display: flex;
  border-top: 2px solid #c1c1c1;
  border-bottom: 2px solid #c1c1c1;
  padding: 32px 0;
`;

const WeatherDay = styled.li`
  &:not(:last-child) {
    border-right: 1px solid #c1c1c1;
  }
  width: 140px;
  height: 180px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 20px;
  list-style: none;
  position: relative;
  img {
    position: absolute;
    bottom: -25px;
    right: 0px;
    display: block;
    width: 100px;
    height: 100px;
    opacity: 0.5;
  }
`;

const DayString = styled.div`
  color: gray;
  font-weight: 700;
`;

const TempString = styled.div`
  font-size: 48px;
  font-weight: 100;
  padding: 15px 0;
`;

const ConditionString = styled.div`
  font-weight: 100;
`;

// const day = day.dt_txt.substr
const WeatherBlock = ({ days, isMetric }) => {
  return (
    <WeatherBlockContainer>
      {days.map((day) => {
        const date = moment.unix(day.dt).format("dddd");
        return (
          <WeatherDay>
            <DayString>{date}</DayString>
            <TempString>
              {Math.round(day.temp.day)}
              {isMetric ? "°C" : "°F"}
            </TempString>
            <ConditionString>{day.weather[0].main}</ConditionString>
            {/* <img
              alt="weather icon"
              src={`https://openweathermap.org/img/wn/${day.weather[0].icon}@2x.png`}
            /> */}
          </WeatherDay>
        );
      })}
    </WeatherBlockContainer>
  );
};

export default WeatherBlock;
//    ¯\_(ツ)_/¯ :3
