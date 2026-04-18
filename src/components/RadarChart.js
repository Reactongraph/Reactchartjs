import React from "react";
import {
  Chart as ChartJS,
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend,
} from "chart.js";
import { Radar } from "react-chartjs-2";
import { HeaderTitle } from "../utils/Helper";
import { labels, backgroundColor, borderColor } from "../utils/Constant";
ChartJS.register(
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend
);

export const data = {
  labels,
  datasets: [
    {
      label: "# of Votes",
      data: [2, 9, 3, 5, 2, 3],
      backgroundColor: backgroundColor[0],
      borderColor: borderColor[0],
      borderWidth: 1,
    },
  ],
};

const RadarChart = () => {
  return (
    <div className="chart">
      <Radar data={data} options={HeaderTitle("Radar Chart")} />
    </div>
  );
};
export default RadarChart;
