import React from "react";
import styled from "styled-components";
import moment from "moment";

const DateDisplayContainer = styled.div`
  text-align: left;
  display: flex;
  flex-direction: row;
`;

const DayContainer = styled.div`
  font-size: 36px;
  font-weight: 700;
  padding-right: 8px;
`;

const DateContainer = styled.div`
  font-size: 36px;
  font-weight: 200;
`;

const DateDisplay = ({ date }) => {
  return (
    <DateDisplayContainer>
      <DayContainer>{moment.unix(date).format("dddd")}</DayContainer>
      <DateContainer>{moment.unix(date).format("MMMM DD")}</DateContainer>
    </DateDisplayContainer>
  );
};

export default DateDisplay;
