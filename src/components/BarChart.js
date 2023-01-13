import React from "react";
import { Bar } from "react-chartjs-2";
import { HeaderTitle } from "../utils/Helper";
import { labels, backgroundColor, borderColor } from "../utils/Constant";

const BarChart = () => {
  const data = {
    labels,
    datasets: [
      {
        label: "Sales of 2020",
        data: [12, 9, 5, 11, 4],
        backgroundColor,
        borderColor,
        borderWidth: 1,
      },
      {
        label: "Sales of 2021",
        data: [15, 11, 3, 8, 7],
        backgroundColor,
        borderColor,
        borderWidth: 1,
      },
    ],
  };

  return (
    <div className="chart">
      <Bar data={data} options={HeaderTitle("Bar Chart")} />
    </div>
  );
};

export default BarChart;
