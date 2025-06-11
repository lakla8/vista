import { Grid } from "@mantine/core";
import AnalyticsBlock from "./AnalyticsBlock";
import StreamBlock from "./StreamBlock";
import BondsBlock from "./BondsBlock";
import EarlyWarningBlock from "./EarlyWarningBlock";
import { createContext, useEffect, useState } from "react";
// import { REAL_TIME_DATA } from "../../backend_constants/real_time";

type DataType = {
    stream: {
        employee_id: string;
        date: string;
        start_time: string;
        breaks: {
            long: number;
            short: number;
        };
        logs: Array<{
            count: number;
            description: string;
        }>;
        additional_info: string[];
    }[];
    early_warning: {
        code: string;
        label: string;
        severity: "low" | "medium" | "high";
    }[];
    profile: {
        full_name: string;
        employee_id: string;
        shift: string;
        department: string;
        position: string;
        manager: string;
        contact: string;
        hrv: string;
        prognosis_group: string;
        tasks: Array<{
            group: string;
            name: string;
            start: string;
            end: string;
            status: "completed" | "in_process" | "waiting";
            progress: number;
            level: number;
        }>;
    };
    performance_bar: Array<{
        category: string;
        value: number;
        color_code: string;
    }>;
}

export const RealTimeDataContext = createContext<DataType | undefined>(undefined);

const RealTimePage = () => {

    const [data, setData] = useState<DataType | undefined>(undefined);

    useEffect(() => {
        window.scrollTo(0, 0);
         
        fetch('/api/v1/real_time', { method: 'GET' })
            .then(response => response.json())
            .then(data => setData(data));
        
    //    setData(REAL_TIME_DATA as DataType);
    }, [])

    return (<>
        <RealTimeDataContext.Provider value={data} >
            <Grid p={0} w='100%' h='100%' dir='column' gutter={20} justify='center' >
                <Grid.Col span={2}>
                    <AnalyticsBlock />
                </Grid.Col>
                <Grid.Col span={6}>
                    <StreamBlock />
                </Grid.Col>
                <Grid.Col span={2}>
                    <BondsBlock />
                </Grid.Col>
                <Grid.Col span={2}>  
                    <EarlyWarningBlock />
                </Grid.Col>
            </Grid>
        </RealTimeDataContext.Provider>
    </>)
}

export default RealTimePage;