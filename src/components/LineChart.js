import React from "react";
import { Line } from "react-chartjs-2";
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
import { HeaderTitle } from "../utils/Helper";
import { labels, backgroundColor } from "../utils/Constant";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);
const LineChart = () => {
  const data = {
    labels,
    datasets: [
      {
        label: "Seles for 2020 (M)",
        data: [3, 2, 2, 1, 5],
        fill: true,
        borderColor: [backgroundColor[3]],
        backgroundColor: [backgroundColor[3]],
        pointBackgroundColor: [backgroundColor[3]],
        pointBorderColor: [backgroundColor[3]],
      },
      {
        label: "Sales for 2019 (M)",
        data: [1, 3, 3, 2, 1],
        fill: true,
        borderColor: [backgroundColor[4]],
        backgroundColor: [backgroundColor[4]],
        pointBackgroundColor: [backgroundColor[4]],
        pointBorderColor: [backgroundColor[4]],
      },
    ],
  };

  return (
    <div className="chart">
      <Line data={data} options={HeaderTitle("Line Chart")} />
    </div>
  );
};

export default LineChart;
