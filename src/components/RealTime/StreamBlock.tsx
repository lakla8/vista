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

    function getBg(item : any) {
        // Проверяем критичные события (красный цвет)
        const hasCriticalEvents = item.logs.some((log: any) => {
            return (log.description.toLowerCase().includes('ошибка') ||
                log.description.toLowerCase().includes('конфликт') ||
                log.description.toLowerCase().includes('нарушение') ||
                log.description.toLowerCase().includes('conflict') ||
                log.description.toLowerCase().includes('error') ||
                log.description.toLowerCase().includes('violation')
            )
        });

        // Проверяем предупреждения (желтый цвет)
        const hasWarnings = item.logs.some((log: any) => {
            return (log.description.toLowerCase().includes('внимание') ||
                log.description.toLowerCase().includes('attention') ||
                log.description.toLowerCase().includes('warning') ||
                log.description.toLowerCase().includes('предупреждение')
            )
        }) || item.additional_info.some((info: string) => {
            return (info.toLowerCase().includes('внимание') ||
                info.toLowerCase().includes('attention') ||
                info.toLowerCase().includes('extra attention') ||
                info.toLowerCase().includes('обр. внимание')
            )
        });

        if (hasCriticalEvents) {
            return '#ffcccb'; // Светло-красный
        } else if (hasWarnings) {
            return '#fff3cd'; // Светло-желтый
        }
        return 'white';
    }

    function getAdditionalInfoBg(item: any) {
        // Проверяем дополнительную информацию на предупреждения
        const hasWarnings = item.additional_info.some((info: string) => {
            return (info.toLowerCase().includes('внимание') ||
                info.toLowerCase().includes('attention') ||
                info.toLowerCase().includes('extra attention') ||
                info.toLowerCase().includes('обр. внимание') ||
                info.toLowerCase().includes('prof. prognosis needed') ||
                info.toLowerCase().includes('проф. прогноз')
            )
        });

        return hasWarnings ? '#fff3cd' : 'white'; // Желтый для предупреждений
    }

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
                                <Text 
                                    style={{ 
                                        textWrap: 'nowrap', 
                                        textOverflow: 'ellipsis', 
                                        overflow: 'hidden',
                                        minHeight: '22px',
                                        display: 'flex',
                                        alignItems: 'center',
                                        padding: '2px 4px'
                                    }} 
                                    lh={1} 
                                    c='black' 
                                    fz={12}
                                >
                                    {item.employee_id}&nbsp;
                                </Text>
                            )
                        })}
                    </Stack>
                </ContentBlock>
                <ContentBlock variant="outlined" p={10}>
                    <Stack gap={10} w='100%'>
                        {stream.map((item) => {
                            return (
                                <Text 
                                    style={{ 
                                        textWrap: 'nowrap', 
                                        textOverflow: 'ellipsis', 
                                        overflow: 'hidden',
                                        minHeight: '22px',
                                        display: 'flex',
                                        alignItems: 'center',
                                        padding: '2px 4px'
                                    }} 
                                    lh={1} 
                                    c='black' 
                                    fz={12}
                                >
                                    {item.date}&nbsp;
                                </Text>
                            )
                        })}
                    </Stack>
                </ContentBlock>
                <ContentBlock variant="outlined" p={10}>
                    <Stack gap={10} w='100%'>
                        {stream.map((item) => {
                            return (
                                <Text 
                                    style={{ 
                                        textWrap: 'nowrap', 
                                        textOverflow: 'ellipsis', 
                                        overflow: 'hidden',
                                        minHeight: '22px',
                                        display: 'flex',
                                        alignItems: 'center',
                                        padding: '2px 4px'
                                    }} 
                                    lh={1} 
                                    c='black' 
                                    fz={12}
                                >
                                    {item.start_time}&nbsp;
                                </Text>
                            )
                        })}
                    </Stack>
                </ContentBlock>
                <ContentBlock variant="outlined" p={10}>
                    <Stack gap={10} w='100%'>
                        {stream.map((item) => {
                            return (
                                <Text 
                                    style={{ 
                                        textWrap: 'nowrap', 
                                        textOverflow: 'ellipsis', 
                                        overflow: 'hidden',
                                        minHeight: '22px',
                                        display: 'flex',
                                        alignItems: 'center',
                                        padding: '2px 4px'
                                    }} 
                                    lh={1} 
                                    c='black' 
                                    fz={12}
                                >
                                    {item.breaks.long} long {item.breaks.short} short&nbsp;
                                </Text>
                            )
                        })}
                    </Stack>
                </ContentBlock>
                <ContentBlock variant="outlined" p={10}>
                    <Stack gap={10} w='100%'>
                        {stream.map((item) => {
                            return (
                                <Text 
                                    style={{ 
                                        textWrap: 'nowrap', 
                                        textOverflow: 'ellipsis', 
                                        overflow: 'hidden',
                                        backgroundColor: getBg(item),
                                        padding: '2px 4px',
                                        borderRadius: '3px',
                                        transition: 'background-color 0.3s ease',
                                        minHeight: '22px',
                                        display: 'flex',
                                        alignItems: 'center'
                                    }} 
                                    lh={1} 
                                    c='black' 
                                    fz={12}
                                >
                                    {item.logs.map((log) => `${log.count} ${log.description} `)}&nbsp;
                                </Text>
                            )
                        })}
                    </Stack>
                </ContentBlock>
                <ContentBlock variant="outlined" p={10}>
                    <Stack gap={10} w='100%'>
                        {stream.map((item) => {
                            return (
                                <Text 
                                    style={{ 
                                        textWrap: 'nowrap', 
                                        textOverflow: 'ellipsis', 
                                        overflow: 'hidden',
                                        backgroundColor: getAdditionalInfoBg(item),
                                        padding: '2px 4px',
                                        borderRadius: '3px',
                                        transition: 'background-color 0.3s ease',
                                        minHeight: '22px',
                                        display: 'flex',
                                        alignItems: 'center'
                                    }} 
                                    lh={1} 
                                    c='black' 
                                    fz={12}
                                >
                                    {item.additional_info}&nbsp;
                                </Text>
                            )
                        })}
                    </Stack>
                </ContentBlock>
            </Group>
        </ContentBlock>

        <ContentBlock w='100%' h='100%' justify={'space-between'}>
            <Stack gap={8} w='100%'>
                {/* Верхняя часть - профиль слева + расширенные графики справа */}
                <Group wrap="nowrap" align="start" w='100%' gap={12}>
                    <Stack gap={8} align="center">
                        <Text fz={24} lh={1} c='#8C0436' fw='600'>ПРОФАЙЛ</Text>
                        <ContentBlock variant="outlined" p={8} gap={10} direction="row">
                            <FaRegUser size={48} />
                            <Stack gap={6}>
                                <Text lh={1} c='black' fz={14}>{profile?.full_name}</Text>
                                <Text lh={1} c='black' fz={14}>ID {profile?.employee_id}</Text>
                                <Text lh={1} c='black' fz={14}>Смена 3</Text>
                            </Stack>
                        </ContentBlock>

                        <Stack gap={6} w={'100%'}>
                            <Text lh={1} c='black' fz={14}>Департамент - {profile?.department}</Text>
                            <Text lh={1} c='black' fz={14}>Позиция - {profile?.position}</Text>
                            <Text lh={1} c='black' fz={14}>Руководитель - {profile?.manager}</Text>
                            <Text lh={1} c='black' fz={14}>Сменный - {profile?.shift}</Text>
                            <Text lh={1} c='black' fz={14}>{profile?.contact}</Text>
                        </Stack>

                        <Stack gap={6} w={'100%'} mt={10}>
                            <Text lh={1} c='black' fz={14}>HRV - {profile?.hrv}</Text>
                            <Text lh={1} c='black' fz={14}>Проф. прогноз - {profile?.prognosis_group} группа</Text>
                        </Stack>
                    </Stack>
                    
                    {/* Расширенная область для графиков */}
                    <Stack gap={8} align="center" style={{ flex: 1 }}>
                        <TasksGanttSection tasks={data?.profile.tasks || []} onTaskClick={() => { }} />
                        <StackedBar />
                    </Stack>
                </Group>

                {/* Нижняя часть - блоки на всю ширину */}
                <Group gap={12} w='100%' grow>
                    <Stack gap={8} w={'100%'}>
                        <Text lh={1} c='black' fz={18} fw='700'>ДОПУСКИ</Text>
                        <Text lh={1} c='black' fz={15}>Name - до 000000</Text>
                        <Text lh={1} c='black' fz={15}>Name - до 000000</Text>
                        <Text lh={1} c='black' fz={15}>Name - до 000000</Text>
                    </Stack>
                    <Stack gap={8} w={'100%'}>
                        <Text lh={1} c='black' fz={18} fw='700'>СЕРТИФИКАТЫ</Text>
                        <Text lh={1} c='black' fz={15}>№***** - до 000000</Text>
                        <Text lh={1} c='black' fz={15}>№***** - до 000000</Text>
                        <Text lh={1} c='black' fz={15}>№***** - до 000000</Text>
                    </Stack>
                    <Stack gap={8} w={'100%'}>
                        <Text lh={1} c='green' fz={18} fw='700'>ДОСТИЖЕНИЯ</Text>
                        <Text lh={1} c='black' fz={15}>Управление командой</Text>
                        <Text lh={1} c='black' fz={15}>Кризисные ситуации</Text>
                        <Text lh={1} c='black' fz={15}>Работа в команде</Text>
                    </Stack>
                    <Stack gap={8} w={'100%'}>
                        <Text lh={1} c='#921640' fz={18} fw='700'>ОШИБКИ</Text>
                        <Text lh={1} c='black' fz={15}>10/05/30 - 5й SOP</Text>
                        <Text lh={1} c='black' fz={15}>24.07.28 - конфликт</Text>
                        <Text lh={1} c='black' fz={15}>15.08.29 - нарушение</Text>
                    </Stack>
                </Group>
            </Stack>
        </ContentBlock>

    </Stack>)
}


export default StreamBlock