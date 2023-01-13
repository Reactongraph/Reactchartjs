import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";
import { HeaderTitle } from "../utils/Helper";
import { labels, backgroundColor, borderColor } from "../utils/Constant";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend
);

const data = {
  labels,
  datasets: [
    {
      fill: true,
      label: "Dataset 1",
      data: [5, 6, 9, 4, 10],
      borderColor: borderColor[5],
      backgroundColor: backgroundColor[6],
    },
    {
      fill: true,
      label: "Dataset 2",
      data: [3, 2, 8, 1, 5],
      borderColor: borderColor[1],
      backgroundColor: backgroundColor[7],
    },
  ],
};

const AreaChart = () => {
  return (
    <div className="chart">
      <Line data={data} options={HeaderTitle("Area Chart")} />
    </div>
  );
};

export default AreaChart;
