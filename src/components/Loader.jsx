import React from "react";
import styled, { keyframes } from "styled-components";

// Full-screen overlay
const Overlay = styled.div`
  position: fixed;
  inset: 0;
  z-index: 9999;
  background: #000;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px;
`;

// Stroke line drawing
const draw = keyframes`
  to {
    stroke-dashoffset: 0;
  }
`;

// Fill fade-in
const fillIn = keyframes`
  from { fill: transparent; opacity: 0; }
  to { fill: #D68E00; opacity: 1; }
`;

const SvgText = styled.svg`
  width: 100vw;
  max-height: 280px;
  padding: 30px;

  @media (max-width: 768px) {
    max-height: 180px;
  }
  @media (max-width: 480px) {
    max-height: 140px;
  }
  @media (max-width: 320px) {
    max-height: 110px;
  }
`;

const StrokeText = styled.text`
  font-size: 100px;
  font-weight: 900;
  letter-spacing: 15px;
  font-family: Arial, Helvetica, sans-serif;

  stroke: #D68E00;
  stroke-width: 3;
  stroke-linejoin: round;
  stroke-linecap: round;
  fill: transparent;

  stroke-dasharray: 1000;
  stroke-dashoffset: 1000;
  animation: ${draw} 3.5s ease forwards;

  @media (max-width: 768px) {
    font-size: 70px;
    letter-spacing: 10px;
  }
  @media (max-width: 480px) {
    font-size: 50px;
    letter-spacing: 6px;
    stroke-width: 2.5;
  }
  @media (max-width: 320px) {
    font-size: 36px;
    letter-spacing: 4px;
    stroke-width: 2;
  }
`;

const FillText = styled.text`
  font-size: 100px;
  font-weight: 900;
  letter-spacing: 15px;
  font-family: Arial, Helvetica, sans-serif;

  fill: #DC2626;
  opacity: 0;
  animation: ${fillIn} 0.8s ease forwards;
  animation-delay: 1.5s;

  @media (max-width: 768px) {
    font-size: 70px;
    letter-spacing: 10px;
  }
  @media (max-width: 480px) {
    font-size: 50px;
    letter-spacing: 6px;
  }
  @media (max-width: 320px) {
    font-size: 36px;
    letter-spacing: 4px;
  }
`;

const Loader = () => {
  return (
    <Overlay>
      {/* Increased height in viewBox for 2 lines */}
      <SvgText viewBox="0 0 500 250" preserveAspectRatio="xMidYMid meet">
        {/* First line */}
        <FillText x="50%" y="40%" textAnchor="middle" dominantBaseline="middle">
          Chandrama Realcon
        </FillText>
        <StrokeText x="50%" y="40%" textAnchor="middle" dominantBaseline="middle">
          Chandrama Realcon
        </StrokeText>

        {/* Second line */}
        <FillText x="50%" y="75%" textAnchor="middle" dominantBaseline="middle">
          Innovater
        </FillText>
        <StrokeText x="50%" y="75%" textAnchor="middle" dominantBaseline="middle">
          Innovater
        </StrokeText>
      </SvgText>
    </Overlay>
  );
};

export default Loader;
