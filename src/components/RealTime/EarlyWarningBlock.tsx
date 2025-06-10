import { Group, ScrollArea, Stack, Text } from "@mantine/core"
import BlockTitle from "../App/BlockTitle"
import ContentBlock from "../App/ContentBlock"
import { IoWarning } from "react-icons/io5"
import { RiRobot2Line } from "react-icons/ri"
import { useContext, useEffect, useState } from "react"
import { RealTimeDataContext } from "./RealTimePage"

type Warning = { 
    code: string,
    label: string,
    severity: "low" | "medium" | "high"
}


const messages = [
    {
        text: 'Анализ “причина → следствие” по ошибке сотрудника ФИО готов',
        author: 'AI-Бот',
        side: 'start'
    },
    {
        text: 'Анализ “причина → следствие” по ошибке сотрудника ФИО готов',
        author: 'AI-Бот',
        side: 'end'
    },
    {
        text: 'Анализ “причина → следствие” по ошибке сотрудника ФИО готов',
        author: 'AI-Бот',
        side: 'start'
    },
]

const EarlyWarningBlock = () => {
    const [warnings, setWarnings] = useState<Warning[]>([]);
    const data = useContext(RealTimeDataContext);
    useEffect(() => {
        if (data) {
            setWarnings(data.early_warning);
        }
    }, [data])

    return (
        <Stack w='100%' gap={10} h='100%'>
            <BlockTitle>EARLY WARNING</BlockTitle>

            <ContentBlock w='100%' pl={0}>
                <ScrollArea offsetScrollbars type="always" w='100%' h={300} scrollbarSize={10} style={{ borderRadius: 10, overflow: 'hidden' }}>
                    <ContentBlock p={5} pl={20} gap={10}>
                        {warnings.map((item) => {
                            return (
                                <ContentBlock id={item.label} direction='row' p={'5px 10px'} justify={'start'} wrap={'nowrap'} key={item.label} style={{ borderRadius: '100px', border: '1px solid black', transition: '0.1s' }} w='100%'
                                    onMouseOver={(e: any) => { if (e.target.id == item.label) { e.target.style.translate = '-5px -5px'; e.target.style.boxShadow = '5px 5px 0px 0px #000000' } }}
                                    onMouseOut={(e: any) => { if (e.target.id == item.label) { e.target.style.translate = '0px 0px'; e.target.style.boxShadow = 'none' } }}
                                >
                                    <IoWarning fill={item.severity == 'high' ? '#D53236' : item.severity == 'medium' ? '#FDC30B' : '#B2B2B2'} size={32} />
                                    <Text lh={1} c='black' fw='600' fz={16}>{item.label}</Text>
                                </ContentBlock>
                            )
                        })}
                    </ContentBlock>
                </ScrollArea>
            </ContentBlock>

            <ContentBlock h='100%' w='100%' align={'start'}>
                <Group gap={10}>
                    <RiRobot2Line size={32} color='green' />
                    <Text lh={1} c='green' fw='600' fz={24}>AI</Text>
                </Group>
                
                <ScrollArea h='100%' offsetScrollbars type="always" w='100%' scrollbarSize={10} style={{ borderRadius: 10, overflow: 'hidden' }}>
                    <ContentBlock p={0} gap={10} w={'100%'}>
                        {
                            messages.map((item) => {
                                return (
                                    <ContentBlock variant="outlined" p={10} key={item.text} style={{ borderRadius: '10px', boxShadow: '5px 5px 0px 0px #5B8C4E', alignSelf: item.side }} w='70%'>
                                        <Text lh={1} c='black' fw='600' fz={16} w='100%'>{item.author}</Text>
                                        <Text lh={1} c='#383838' fz={16} w='100%'>{item.text}</Text>
                                    </ContentBlock>
                                )
                            })
                        }
                    </ContentBlock>
                </ScrollArea>
            </ContentBlock>
        </Stack>
    )
}

export default EarlyWarningBlock