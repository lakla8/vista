import { Group, Stack, Text } from "@mantine/core"
import BlockTitle from "../App/BlockTitle"
import ContentBlock from "../App/ContentBlock"
import { FaRegUser } from "react-icons/fa6"
import { useContext, useEffect, useState } from "react"
import { RealTimeDataContext } from "./RealTimePage"
import TasksGanttSection from "../App/Gantt"
import StackedBar from "./charts/StackedBar"


type Stream = {
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
}

type Profile = {
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
}

const StreamBlock = () => {
    const [stream, setStream] = useState<Stream[]>([]);
    const [profile, setProfile] = useState<Profile | undefined>(undefined);
    const data = useContext(RealTimeDataContext);

    useEffect(() => {
        if (data) {
            setStream(data.stream);
            setProfile(data.profile);
        }
    }, [data]);
    


    return (<Stack w='100%' gap={10} h='100%'>
        <BlockTitle>STREAM - ПОТОКОВЫЕ ДАННЫЕ О СОТРУДНИКАХ И НАГРУЗКЕ</BlockTitle>

        <ContentBlock w='100%' gap={5}>
            <Group w='100%' gap={10} grow>
                <ContentBlock bg='green' p={10}>
                    <Text lh={1} c='white' fw='600' fz={16}>ID</Text>
                </ContentBlock>
                <ContentBlock bg='green' p={10}>
                    <Text lh={1} c='white' fw='600' fz={16}>Дата</Text>
                </ContentBlock>
                <ContentBlock bg='green' p={10}>
                    <Text lh={1} c='white' fw='600' fz={16}>Начало</Text>
                </ContentBlock>
                <ContentBlock bg='green' p={10}>
                    <Text lh={1} c='white' fw='600' fz={16}>Перерыв</Text>
                </ContentBlock>
                <ContentBlock bg='green' p={10}>
                    <Text lh={1} c='white' fw='600' fz={16}>Логи</Text>
                </ContentBlock>
                <ContentBlock bg='green' p={10}>
                    <Text lh={1} c='white' fw='600' fz={16}>Доп. инфо</Text>
                </ContentBlock>
            </Group>

            <Group w='100%' gap={10} grow>
                <ContentBlock variant="outlined" p={10}>
                    <Stack gap={10} w='100%'>
                        {stream.map((item) => {
                            return (
                                <Text style={{textWrap: 'nowrap', textOverflow: 'ellipsis', overflow: 'hidden'}} lh={1} c='black' fz={12}>{item.employee_id}&nbsp;</Text>
                            )
                        })}
                    </Stack>
                </ContentBlock>
                <ContentBlock variant="outlined" p={10}>
                    <Stack gap={10} w='100%'>
                        {stream.map((item) => {
                            return (
                                <Text style={{textWrap: 'nowrap', textOverflow: 'ellipsis', overflow: 'hidden'}} lh={1} c='black' fz={12}>{item.date}&nbsp;</Text>
                            )
                        })}
                    </Stack>
                </ContentBlock>
                <ContentBlock variant="outlined" p={10}>
                    <Stack gap={10} w='100%'>
                        {stream.map((item) => {
                            return (
                                <Text style={{textWrap: 'nowrap', textOverflow: 'ellipsis', overflow: 'hidden'}} lh={1} c='black' fz={12}>{item.start_time}&nbsp;</Text>
                            )
                        })}
                    </Stack>
                </ContentBlock>
                <ContentBlock variant="outlined" p={10}>
                    <Stack gap={10} w='100%'>
                        {stream.map((item) => {
                            return (
                                <Text style={{textWrap: 'nowrap', textOverflow: 'ellipsis', overflow: 'hidden'}} lh={1} c='black' fz={12}>{item.breaks.long} long {item.breaks.short} short&nbsp;</Text>
                            )
                        })}
                    </Stack>
                </ContentBlock>
                <ContentBlock variant="outlined" p={10}>
                    <Stack gap={10} w='100%'>
                        {stream.map((item) => {
                            return (
                                <Text lh={1} style={{textWrap: 'nowrap', textOverflow: 'ellipsis', overflow: 'hidden'}}  c='black' fz={12}>{item.logs.map((log) => `${log.count} ${log.description} `)}&nbsp;</Text>
                            )
                        })}
                    </Stack>
                </ContentBlock>
                <ContentBlock variant="outlined" p={10}>
                    <Stack gap={10} w='100%'>
                        {stream.map((item) => {
                            return (
                                <Text style={{textWrap: 'nowrap', textOverflow: 'ellipsis', overflow: 'hidden'}} lh={1} c='black' fz={12}>{item.additional_info}&nbsp;</Text>
                            )
                        })}
                    </Stack>
                </ContentBlock>
            </Group>
        </ContentBlock>

        <ContentBlock w='100%' h='100%' justify={'space-between'}>
            <Group wrap="nowrap" align="start" w='100%' gap={20}>
                <Stack gap={10} align="center">
                    <Text fz={32} lh={1} c='#8C0436' fw='600'>ПРОФАЙЛ</Text>
                    <ContentBlock variant="outlined" p={10} gap={20} direction="row">
                        <FaRegUser size={64} />
                        <Stack gap={10}>
                            <Text lh={1} c='black' fz={16}>{profile?.full_name}</Text>
                            <Text lh={1} c='black' fz={16}>ID {profile?.employee_id}</Text>
                            <Text lh={1} c='black' fz={16}>Смена 3</Text>
                        </Stack>
                    </ContentBlock>

                    <Stack gap={10} w={'100%'}>
                        <Text lh={1} c='black' fz={16}>Департамент - {profile?.department}</Text>
                        <Text lh={1} c='black' fz={16}>Позиция - {profile?.position}</Text>
                        <Text lh={1} c='black' fz={16}>Руководитель - {profile?.manager}</Text>
                        <Text lh={1} c='black' fz={16}>Сменный - {profile?.shift}</Text>
                        <Text lh={1} c='black' fz={16}>{profile?.contact}</Text>
                    </Stack>

                    <Stack gap={10} w={'100%'} mt={20}>
                        <Text lh={1} c='black' fz={16}>HRV - {profile?.hrv}</Text>
                        <Text lh={1} c='black' fz={16}>Проф. прогноз - {profile?.prognosis_group} группа</Text>
                    </Stack>
                </Stack>
                <Stack gap={10} align="center">
                    <TasksGanttSection tasks={data?.profile.tasks || []} onTaskClick={() => { }} />
                </Stack>

                <Stack gap={10} align="center">
                    <Stack gap={10} w={'100%'}>
                        <Text lh={1} c='black' fz={16} fw='600'>ДОПУСКИ</Text>
                        <Text lh={1} c='black' fz={16}>Name - до 000000</Text>
                        <Text lh={1} c='black' fz={16}>Name - до 000000</Text>
                        <Text lh={1} c='black' fz={16}>Name - до 000000</Text>
                    </Stack>
                    <Stack gap={10} w={'100%'}>
                        <Text lh={1} c='black' fz={16} fw='600'>СЕРТИФИКАТЫ</Text>
                        <Text lh={1} c='black' fz={16}>№***** - до 000000</Text>
                        <Text lh={1} c='black' fz={16}>№***** - до 000000</Text>
                        <Text lh={1} c='black' fz={16}>№***** - до 000000</Text>
                    </Stack>
                    <Stack gap={10} w={'100%'}>
                        <Text lh={1} c='green' fz={16} fw='600'>ДОСТИЖЕНИЯ</Text>
                        <Text lh={1} c='black' fz={16}>Управление командой</Text>
                        <Text lh={1} c='black' fz={16}>Кризисные ситуации</Text>
                    </Stack>
                    <Stack gap={10} w={'100%'}>
                        <Text lh={1} c='#921640' fz={16} fw='600'>ОШИБКИ</Text>
                        <Text lh={1} c='black' fz={16}>10/05/30 - 5й SOP</Text>
                        <Text lh={1} c='black' fz={16}>24.07.28 - конфликт</Text>
                    </Stack>
                </Stack>
            </Group>
            
                    <StackedBar />
        </ContentBlock>

    </Stack>)
}


export default StreamBlock