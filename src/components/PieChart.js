import React from "react";
import { Pie } from "react-chartjs-2";
import { HeaderTitle } from "../utils/Helper";
import { colorLabels, backgroundColor, borderColor } from "../utils/Constant";

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

const PieChart = () => {
  return (
    <div className="chart">
      <Pie data={data} options={HeaderTitle("Pie Chart")} />
    </div>
  );
};

export default PieChart;
