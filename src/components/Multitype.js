import React from "react";
import { Bar } from "react-chartjs-2";
import { HeaderTitle, ArrayofRandomData } from "../utils/Helper";
import { labels, borderColor, backgroundColor } from "../utils/Constant";

import {
  Chart as ChartJS,
  LinearScale,
  CategoryScale,
  BarElement,
  PointElement,
  LineElement,
  Legend,
  Tooltip,
  LineController,
  BarController,
} from "chart.js";

ChartJS.register(
  LinearScale,
  CategoryScale,
  BarElement,
  PointElement,
  LineElement,
  Legend,
  Tooltip,
  LineController,
  BarController
);

const Multitype = () => {
  const data = {
    labels,
    datasets: [
      {
        type: "line",
        label: "Data set 1",
        borderColor: borderColor[0],
        backgroundColor: backgroundColor[0],
        borderWidth: 2,
        fill: false,
        data: ArrayofRandomData(5),
      },
      {
        type: "bar",
        label: "Data set 2",
        borderColor: borderColor[1],
        backgroundColor: backgroundColor[1],
        fill: false,
        data: ArrayofRandomData(5),
      },
      {
        type: "bar",
        label: "Data set 3",
        borderColor: borderColor[2],
        backgroundColor: backgroundColor[2],
        data: ArrayofRandomData(5),
      },
    ],
  };
  return (
    <div className="chart">
      <Bar data={data} options={HeaderTitle("Multitype Chart")} />
    </div>
  );
};

export default Multitype;
