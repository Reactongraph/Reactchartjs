import React from "react";
import {
  Chart as ChartJS,
  RadialLinearScale,
  ArcElement,
  Tooltip,
  Legend,
} from "chart.js";
import { PolarArea } from "react-chartjs-2";
import { HeaderTitle } from "../utils/Helper";
import { colorLabels, backgroundColor } from "../utils/Constant";
ChartJS.register(RadialLinearScale, ArcElement, Tooltip, Legend);

export const data = {
  labels: colorLabels,
  datasets: [
    {
      label: "# of Votes",
      data: [12, 19, 3, 5, 2, 3],
      backgroundColor,
      borderWidth: 1,
    },
  ],
};

const PolarAreaChart = () => {
  return (
    <div className="chart">
      <PolarArea data={data} options={HeaderTitle("Polar Area Chart")} />
    </div>
  );
};

export default PolarAreaChart;
