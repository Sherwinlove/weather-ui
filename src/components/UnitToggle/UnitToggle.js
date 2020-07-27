import React from "react";
import Toggle from "react-toggle";
import styled from "styled-components";

const ToggleContainer = styled.div`
  display: flex;
  align-items: center;
  .react-toggle {
    opacity: 0.5;
    &:hover {
      opacity: 1;
    }
    touch-action: pan-x;
    margin: 0 10px;
    display: inline-block;
    position: relative;
    cursor: pointer;
    background-color: transparent;
    border: 0;
    padding: 0;

    -webkit-touch-callout: none;
    -webkit-user-select: none;
    -khtml-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;

    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
    -webkit-tap-highlight-color: transparent;
    transition: 0.4s ease-in-out;
  }

  .react-toggle-screenreader-only {
    border: 0;
    clip: rect(0 0 0 0);
    height: 1px;
    margin: -1px;
    overflow: hidden;
    padding: 0;
    position: absolute;
    width: 1px;
  }

  .react-toggle--disabled {
    cursor: not-allowed;
    opacity: 0.5;
    -webkit-transition: opacity 0.25s;
    transition: opacity 0.25s;
  }

  .react-toggle-track {
    width: 50px;
    height: 18px;
    padding: 0;
    border-radius: 30px;
    border: 1px solid #4d4d4d;
    -webkit-transition: all 0.2s ease;
    -moz-transition: all 0.2s ease;
    transition: all 0.2s ease;
  }

  /* .react-toggle:hover:not(.react-toggle--disabled) .react-toggle-track {
    border: 1px solid #e8e8e8;
  } */

  .react-toggle--checked .react-toggle-track {
    border: 1px solid #4d4d4d;
  }

  /* .react-toggle--checked:hover:not(.react-toggle--disabled)
    .react-toggle-track {
    border: 1px solid #4d4d4d;
  } */

  .react-toggle-track-check {
    position: absolute;
    width: 14px;
    height: 10px;
    top: 0px;
    bottom: 0px;
    margin-top: auto;
    margin-bottom: auto;
    line-height: 0;
    left: 8px;
    opacity: 0;
    -webkit-transition: opacity 0.25s ease;
    -moz-transition: opacity 0.25s ease;
    transition: opacity 0.25s ease;
  }

  .react-toggle--checked .react-toggle-track-check {
    opacity: 1;
    -webkit-transition: opacity 0.25s ease;
    -moz-transition: opacity 0.25s ease;
    transition: opacity 0.25s ease;
  }

  .react-toggle-track-x {
    position: absolute;
    width: 10px;
    height: 10px;
    top: 0px;
    bottom: 0px;
    margin-top: auto;
    margin-bottom: auto;
    line-height: 0;
    right: 10px;
    opacity: 1;
    -webkit-transition: opacity 0.25s ease;
    -moz-transition: opacity 0.25s ease;
    transition: opacity 0.25s ease;
  }

  .react-toggle--checked .react-toggle-track-x {
    opacity: 0;
  }

  .react-toggle-thumb {
    position: absolute;
    top: 2px;
    left: 3px;
    width: 24px;
    height: 16px;
    border: 1px solid #4d4d4d;
    border-radius: 10px;
    background-color: #4d4d4d;

    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;

    -webkit-transition: all 0.25s ease;
    -moz-transition: all 0.25s ease;
    transition: all 0.25s ease;
  }

  .react-toggle--checked .react-toggle-thumb {
    left: 25px;
    border-color: #4d4d4d;
  }
`;

const UnitToggle = ({ isMetric, setIsMetric }) => {
  const onToggle = () => {
    setIsMetric(!isMetric);
  };

  return (
    <ToggleContainer>
      <span>°F</span>
      <Toggle defaultChecked={isMetric} icons={false} onChange={onToggle} />
      <span>°C</span>
    </ToggleContainer>
  );
};
//    ¯\_(ツ)_/¯    "that's what" - she
export default UnitToggle;
