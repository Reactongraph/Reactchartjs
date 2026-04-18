import React from "react";
import {
  Chart as ChartJS,
  LinearScale,
  PointElement,
  Tooltip,
  Legend,
} from "chart.js";
import { Bubble } from "react-chartjs-2";
import { combineScaleandTitle, randomData } from "../utils/Helper";
import { backgroundColor } from "../utils/Constant";
ChartJS.register(LinearScale, PointElement, Tooltip, Legend);

export const data = {
  datasets: [
    {
      label: "Red dataset",
      data: Array.from({ length: 50 }, () => ({
        x: randomData(),
        y: randomData(),
        r: randomData(),
      })),
      backgroundColor: backgroundColor[8],
    },
    {
      label: "Blue dataset",
      data: Array.from({ length: 50 }, () => ({
        x: randomData(),
        y: randomData(),
        r: randomData(),
      })),
      backgroundColor: backgroundColor[7],
    },
  ],
};

const BubbleChart = () => {
  return (
    <div className="chart">
      <Bubble options={combineScaleandTitle("Bubble Chart")} data={data} />
    </div>
  );
};

export default BubbleChart;
