import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";
import { Wrapper } from "./HistoricalDataChart.styled";
import StatisticsDisplay from "../statisticsDisplay/StatisticsDisplay";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "top" as const,
    },
    title: {
      display: true,
      text: "Chart.js Line Chart",
    },
  },
};

// const labels = ["January", "February", "March", "April", "May", "June", "July"];

// export const data = {
//   labels,
//   datasets: [
//     {
//       label: "Dataset 1",
//       data: "ppp",
//       borderColor: "rgb(255, 99, 132)",
//       backgroundColor: "rgba(255, 99, 132, 0.5)",
//     },
//     {
//       label: "Dataset 2",
//       data: "ffff",
//       borderColor: "rgb(53, 162, 235)",
//       backgroundColor: "rgba(53, 162, 235, 0.5)",
//     },
//   ],
// };

const HistoricalDataChart = ({ data }: { data: any }) => {
  // console.log(data.map((entry: any) => entry.date));

  const chartData = {
    labels: data.map((entry: any) => entry.date),
    datasets: [
      {
        label: "Positive Cases",
        data: data.map((entry: any) => entry.positive),
        fill: false,
        borderColor: "rgb(75, 192, 192)",
        tension: 0.1,
      },
    ],
  };

  return (
    <div className="w-[60vw]">
      <StatisticsDisplay data={data} />
      <Wrapper>
        <Line options={options} data={chartData} />;
      </Wrapper>
    </div>
  );
};

export default HistoricalDataChart;
