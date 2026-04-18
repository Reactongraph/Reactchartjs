export const HeaderTitle = (title = "") => {
  return {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: `${title}`,
      },
    },
  };
};

export const randomData = () => {
  return Math.round(Math.random() * 20 - 10);
};

export const ArrayofRandomData = (length = 0) => {
  return Array(length)
    .fill()
    ?.map(() => randomData());
};
export const combineScaleandTitle = (title = "") => {
  return {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
    ...HeaderTitle(title),
  };
};
