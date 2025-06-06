import React from "react";
import { Chart } from "react-google-charts";

const data = [
  ["Тип", "Продуктивное время", "Активное", "Непродуктивное"],
  ["", 3, 7, 4], // Всего 14
];

const options = {
  chartArea: {
    left: 20,
    right: 20,
    top: 20,
    bottom: 30,
    width: "100%",
    height: "60%",
  },
  isStacked: true,
  bar: {
    groupWidth: "100%", // это ключевой параметр
  },
  legend: {
    position: "top",
    alignment: "start",
  },
  colors: ["#388e3c", "#a5d6a7", "#d32f2f"],
  hAxis: {
    minValue: 0,
    maxValue: 14,
    gridlines: { count: 7 },
  },
};

const StackedBar = () => {
  return (
    <Chart
      chartType="BarChart"
      width="100%"
      height="100px"
      data={data}
      options={options}
    />
  );
};

export default StackedBar;
