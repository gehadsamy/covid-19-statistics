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
import { useLocation } from "react-use";

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


const HistoricalDataChart = ({ data }: { data: any }) => {
  const location = useLocation();
  const pathname = location.pathname; // Access the pathname property

  const chartData = {
    labels: data.map((entry: any) => entry?.dateChecked?.slice(0, 10)),
    datasets: [
      {
        label: "Positive Cases",
        data: data.map((entry: any) => entry.positive),
        fill: false,
        borderColor: "rgb(75, 192, 192)",
        tension: 0.1,
      },
      {
        label: "Negative Cases",
        data: data.map((entry: any) => entry.negative),
        fill: false,
        borderColor: "rgb(48, 123, 123)",
        tension: 0.1,
      },
    ],
  };



  return (
    <div
      className={`${
        pathname === "/comparison"
          ? "mobileScreen:max-w-[80vw] max-w-[90vw]"
          : "w-[60vw] mobileScreen:max-w-[90vw]"
      }`}
    >
      <Wrapper>
        <Line options={options} data={chartData} />
      </Wrapper>
    </div>
  );
};

export default HistoricalDataChart;
