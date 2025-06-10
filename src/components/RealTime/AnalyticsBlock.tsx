import { Stack, Group, Text, ScrollArea, Button } from "@mantine/core";
import BlockTitle from "../App/BlockTitle";
import StatBlock from "../App/StatBlock";
import ContentBlock from "../App/ContentBlock";
import { RiRobot2Line } from "react-icons/ri";
import { PiNewspaper } from "react-icons/pi";
import { FaRegCircleRight } from "react-icons/fa6";

const AnalyticsBlock = () => {
    return (
        <Stack gap={10}>
            <BlockTitle>АНАЛИТИКА</BlockTitle>
            <Group gap={10} w='100%' grow>
                <StatBlock title="Смена" value="4730" valueProps={{ c: 'green' }} />
                <StatBlock title="Офис" value="372" valueProps={{ c: 'green' }} />
            </Group>
            <StatBlock title="Укомплектованность" value="85%" valueProps={{ c: 'gray' }} />

            <ContentBlock w='100%' gap={10}>
                <Text lh={1} c='#9B2650' fw='600' fz={16}>ТОП-3 зоны Риска</Text>
                <Group w='100%' gap={5} grow>
                    <Group gap={5}>
                        <Text lh={1} c='#9B2650' fw='600' fz={20}>1</Text>
                        <Text lh={1} c='green' fw='600' fz={20}>К4Г4</Text>
                    </Group>
                    <Group gap={5}>
                        <Text lh={1} c='#9B2650' fw='600' fz={20}>2</Text>
                        <Text lh={1} c='green' fw='600' fz={20}>К3Г5</Text>
                    </Group>
                    <Group gap={5}>
                        <Text lh={1} c='#9B2650' fw='600' fz={20}>3</Text>
                        <Text lh={1} c='green' fw='600' fz={20}>К4Г2</Text>
                    </Group>
                </Group>
            </ContentBlock>

            <ContentBlock w='100%' gap={10}>
                <Group w='100%' gap={5} wrap="nowrap">
                    <Text lh={1} fw='600' c='green' fz={24}>ROOT-CAUSE АССИСТЕНТ</Text>
                    <RiRobot2Line size={64} color='green' />
                </Group>

                <ScrollArea offsetScrollbars type="always" w='100%' h={300} scrollbarSize={10} style={{borderRadius: 10, overflow: 'hidden'}}> 
                    <ContentBlock p={10} variant='outlined' w='100%'>
                            <Text fz={16}>Анализ “причина → следствие” по нарушению SOP №XXX готов</Text>
                            <Group w={'100%'} justify="end" gap={5}>
                                <PiNewspaper size={24} />
                                <PiNewspaper size={24} />
                                <PiNewspaper size={24} />
                            </Group>
                    </ContentBlock>

                    <ContentBlock p={10} variant='outlined' w='100%'>
                            <Text fz={16}>Анализ “причина → следствие” по нарушению SOP №XXX готов</Text>
                            <Group w={'100%'} justify="end" gap={5}>
                                <PiNewspaper size={24} />
                                <PiNewspaper size={24} />
                                <PiNewspaper size={24} />
                            </Group>
                    </ContentBlock>

                    <ContentBlock p={10} variant='outlined' w='100%'>
                            <Text fz={16}>Анализ “причина → следствие” по нарушению SOP №XXX готов</Text>
                            <Group w={'100%'} justify="end" gap={5}>
                                <PiNewspaper size={24} />
                                <PiNewspaper size={24} />
                                <PiNewspaper size={24} />
                            </Group>
                    </ContentBlock>

                    <ContentBlock p={10} variant='outlined' w='100%'>
                            <Text fz={16}>Анализ “причина → следствие” по нарушению SOP №XXX готов</Text>
                            <Group w={'100%'} justify="end" gap={5}>
                                <PiNewspaper size={24} />
                                <PiNewspaper size={24} />
                                <PiNewspaper size={24} />
                            </Group>
                    </ContentBlock>
                </ScrollArea>
                    
                <Button w='100%' radius={'xl'} size='xl'>
                    Digital Twin Сценарии
                    <FaRegCircleRight size={24} style={{marginLeft: 10}} />
                </Button>
            </ContentBlock>
        </Stack>
    )
}

export default AnalyticsBlock;