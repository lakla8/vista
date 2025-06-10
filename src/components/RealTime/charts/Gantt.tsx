import { Stack } from "@mantine/core";
import React, { useContext, useEffect, useState } from "react";
import { Chart } from "react-google-charts";
import StackedBar from "./StackedBar";
import { RealTimeDataContext } from "../RealTimePage";

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

type GanttTask = {
    id: number,
    name: string,
    description: string,
    status: "completed" | "in_progress" | "waiting",
    progress: number,
    position: {
        left: number,
        width: number,
    },
    color: string,
}

const Gantt: React.FC<{ context: any, keys: any, withStackedBar?: boolean }> = ({ context, keys, withStackedBar }: any) => {
    const data = useContext<any>(context);
    const [chartData, setChartData] = useState<any>([]);

    useEffect(() => {
        if (data) {
            const newData: any = []
            let getData = data
            for (let k of keys) {
                getData = getData[k]
            }
            getData.map((item: any) => {
                newData.push([
                    '',
                    item.name,
                    item.status,
                    new Date(item.start),
                    new Date(item.end),
                    null,
                    item.percent,
                    null
                ])
            })
            setChartData(newData)
        }
    }, [data]);

    return (
        <Stack w='100%' gap={10} align="center">
            <Chart
                chartType="Gantt"
                width="100%"
                height="300px"
                data={[columns, ...chartData]}
                options={options}
                loader={<div>Загрузка графика...</div>}
            />

            {withStackedBar &&
                <StackedBar />
            }


        </Stack>
    );
};

export default Gantt;
