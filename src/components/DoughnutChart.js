import React from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";
import { HeaderTitle } from "../utils/Helper";
import { colorLabels, backgroundColor, borderColor } from "../utils/Constant";
ChartJS.register(ArcElement, Tooltip, Legend);

export const data = {
  labels: colorLabels,
  datasets: [
    {
      label: "# of Votes",
      data: [12, 19, 3, 5, 2, 3],
      backgroundColor,
      borderColor,
      borderWidth: 1,
    },
  ],
};

const DoughnutChart = () => {
  return (
    <div className="chart">
      <Doughnut data={data} options={HeaderTitle("Doughnut Chart")} />
    </div>
  );
};

export default DoughnutChart;
