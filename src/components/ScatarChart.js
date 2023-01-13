import React from "react";
import {
  Chart as ChartJS,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Legend,
} from "chart.js";
import { Scatter } from "react-chartjs-2";
import { combineScaleandTitle, randomData } from "../utils/Helper";
import { borderColor } from "../utils/Constant";

ChartJS.register(LinearScale, PointElement, LineElement, Tooltip, Legend);

const data = {
  datasets: [
    {
      label: "A dataset",
      data: Array.from({ length: 100 }, () => ({
        x: randomData(),
        y: randomData(),
      })),
      backgroundColor: borderColor[0],
    },
    {
      label: "B dataset",
      data: Array.from({ length: 100 }, () => ({
        x: randomData(),
        y: randomData(),
      })),
      backgroundColor: borderColor[1],
    },
  ],
};
const ScatarChart = () => {
  return (
    <div className="chart">
      <Scatter options={combineScaleandTitle("Scatter Chart")} data={data} />
    </div>
  );
};

export default ScatarChart;
