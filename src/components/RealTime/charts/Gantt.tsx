import { Stack } from "@mantine/core";
import React from "react";
import { Chart } from "react-google-charts";
import StackedBar from "./StackedBar";

const columns = [
  { type: "string", label: "Task ID" },
  { type: "string", label: "Task Name" },
  { type: "string", label: "Status" }, // ключевой столбец
  { type: "date", label: "Start Date" },
  { type: "date", label: "End Date" },
  { type: "number", label: "Duration" },
  { type: "number", label: "Percent Complete" },
  { type: "string", label: "Dependencies" },
];

const rows = [
  [
    "1.1.1",
    "Задача 1.1.",
    "Выполнена",
    new Date(2024, 3, 1),
    new Date(2024, 3, 3),
    null,
    100,
    null,
  ],
  [
    "1.2.1",
    "Задача 1.2.",
    "Выполнена",
    new Date(2024, 3, 2),
    new Date(2024, 3, 4),
    null,
    100,
    null,
  ],
  [
    "1.3.1",
    "Задача 1.3.",
    "Выполнена",
    new Date(2024, 3, 3),
    new Date(2024, 3, 5),
    null,
    100,
    null,
  ],
  [
    "2.1.1",
    "Задача 2.1.",
    "Выполнена",
    new Date(2024, 3, 3),
    new Date(2024, 3, 6),
    null,
    100,
    null,
  ],
  [
    "2.2.1",
    "Задача 2.2.",
    "В процессе",
    new Date(2024, 3, 6),
    new Date(2024, 3, 10),
    null,
    90,
    "2.1.1",
  ],
  [
    "2.3.1",
    "Задача 2.3.",
    "Ожидает",
    new Date(2024, 3, 12),
    new Date(2024, 3, 15),
    null,
    75,
    null,
  ],
  [
    "3.1.1",
    "Задача 3.1.",
    "В процессе",
    new Date(2024, 3, 10),
    new Date(2024, 3, 13),
    null,
    75,
    null,
  ],
  [
    "3.2.1",
    "Задача 3.2.",
    "Ожидает",
    new Date(2024, 3, 13),
    new Date(2024, 3, 16),
    null,
    45,
    null,
  ],
  [
    "3.3.1",
    "Задача 3.3.",
    "Ожидает",
    new Date(2024, 3, 14),
    new Date(2024, 3, 17),
    null,
    40,
    null,
  ],
];

const options = {
  height: 500,
  gantt: {
    trackHeight: 30,
    labelStyle: {
      fontName: "Arial",
      fontSize: 12,
      color: "#000",
    },
    palette: [
      {
        color: "#4CAF50",   // зелёный — Выполнена
        dark: "#388E3C",
        light: "#C8E6C9",
      },
      {
        color: "#2196F3",   // синий — В процессе
        dark: "#1976D2",
        light: "#BBDEFB",
      },
      {
        color: "#F44336",   // красный — Ожидает
        dark: "#D32F2F",
        light: "#FFCDD2",
      },
    ],
  },
};

const Gantt: React.FC = () => {
  return (
    <Stack w='100%' gap={10} align="center">
        <Chart
        chartType="Gantt"
        width="100%"
        height="300px"
        data={[columns, ...rows]}
        options={options}
        loader={<div>Загрузка графика...</div>}
        />

        <StackedBar />

    </Stack>
  );
};

export default Gantt;
