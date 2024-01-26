// StatisticsDisplay.tsx
import React from "react";
import { StatisticsContainer } from "./StatisticsDisplay.styled";

interface StatisticsDisplayProps {
  data: any; // Replace 'any' with the shape of your data
}

const StatisticsDisplay: React.FC<StatisticsDisplayProps> = ({ data }) => {
  if (!data) {
    return <div>Loading...</div>;
  }

  return (
    <StatisticsContainer>
        <p>Positive Cases: {data.positive}</p>
        <p>Negative Cases: {data.negative}</p>
        <p>Pending Cases: {data.pending}</p>
        <p>Hospitalizations: {data.hospitalizedCurrently}</p>
        <p>ICU Cases: {data.inIcuCurrently}</p>
        <p>Ventilator Cases: {data.onVentilatorCurrently}</p>
    </StatisticsContainer>
  );
};

export default StatisticsDisplay;
