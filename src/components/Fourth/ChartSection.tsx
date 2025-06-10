
// ===========================================
// КОМПОНЕНТ ГРАФИКА

import EChartsReact from "echarts-for-react";
import { useState, useContext, useEffect } from "react";
import { DepartmentAnalyticsDataContext } from "./EmployeeDashboard";

// ===========================================
const ChartSection = () => {
    const [option, setOption] = useState({});

    const data = useContext(DepartmentAnalyticsDataContext);
    
    useEffect(() => {
            console.log(data);
        if (data) {
            console.log(data);
            setOption({
                xAxis: {
                    type: 'category',
                    data: data.task_completion_trend.map((item: any) => item.period)
                },
                yAxis: {
                    type: 'value'
                },
                series: [
                    {
                        data: data.task_completion_trend.map((item: any) => item.value),
                        type: 'line',
                        smooth: true,
                        lineStyle : {
                            color: '#175C01'
                        }
                    },
                    {
                        data: data.task_completion_trend.map(() => data.task_completion_threshold),
                        type: 'line',
                        lineStyle: {
                            color: '#5470C6',
                            type: 'dashed'
                        },
                        smooth: true
                    }
                ]
            })
        }
    }, [data]);


    return (
        <EChartsReact
            option={option}
        />
    );
};

export default ChartSection;