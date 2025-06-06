import { Group, Stack, Text } from "@mantine/core"
import BlockTitle from "../App/BlockTitle"
import ContentBlock from "../App/ContentBlock"
import { FaRegUser, FaUser } from "react-icons/fa6"
import { TiUserOutline } from "react-icons/ti"
import Gantt from "./charts/Gantt"


const StreamBlock = () => {
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
                        {tableData.map((item) => {
                            return (
                                <Text lh={1} c='black' fz={12}>{item.id}</Text>
                            )
                        })}
                    </Stack>
                </ContentBlock>
                <ContentBlock variant="outlined" p={10}>
                    <Stack gap={10} w='100%'>
                        {tableData.map((item) => {
                            return (
                                <Text lh={1} c='black' fz={12}>{item.date}</Text>
                            )
                        })}
                    </Stack>
                </ContentBlock>
                <ContentBlock variant="outlined" p={10}>
                    <Stack gap={10} w='100%'>
                        {tableData.map((item) => {
                            return (
                                <Text lh={1} c='black' fz={12}>{item.start}</Text>
                            )
                        })}
                    </Stack>
                </ContentBlock>
                <ContentBlock variant="outlined" p={10}>
                    <Stack gap={10} w='100%'>
                        {tableData.map((item) => {
                            return (
                                <Text lh={1} c='black' fz={12}>{item.break}</Text>
                            )
                        })}
                    </Stack>
                </ContentBlock>
                <ContentBlock variant="outlined" p={10}>
                    <Stack gap={10} w='100%'>
                        {tableData.map((item) => {
                            return (
                                <Text lh={1} c='black' fz={12}>{item.logs}</Text>
                            )
                        })}
                    </Stack>
                </ContentBlock>
                <ContentBlock variant="outlined" p={10}>
                    <Stack gap={10} w='100%'>
                        {tableData.map((item) => {
                            return (
                                <Text lh={1} c='black' fz={12}>{item.info}</Text>
                            )
                        })}
                    </Stack>
                </ContentBlock>
            </Group>
        </ContentBlock>

        <ContentBlock w='100%'>
            <Group wrap="nowrap" align="start" w='100%' gap={20}>
                <Stack gap={10} align="center">
                    <Text fz={32} lh={1} c='#8C0436' fw='600'>ПРОФАЙЛ</Text>
                    <ContentBlock variant="outlined" p={10} gap={20} direction="row">
                        <FaRegUser size={64} />
                        <Stack gap={10}>
                            <Text lh={1} c='black' fz={16}>Иванов И.И.</Text>
                            <Text lh={1} c='black' fz={16}>ID 6725473</Text>
                            <Text lh={1} c='black' fz={16}>Смена 3</Text>
                        </Stack>
                    </ContentBlock>

                    <Stack gap={10} w={'100%'}>
                        <Text lh={1} c='black' fz={16}>Департамент - ХХХ</Text>
                        <Text lh={1} c='black' fz={16}>Позиция - ХХХ</Text>
                        <Text lh={1} c='black' fz={16}>Руководитель - ХХХ</Text>
                        <Text lh={1} c='black' fz={16}>Сменный - ХХХ</Text>
                        <Text lh={1} c='black' fz={16}>Email, phone</Text>
                    </Stack>

                    <Stack gap={10} w={'100%'} mt={20}>
                        <Text lh={1} c='black' fz={16}>HRV - 120/80</Text>
                        <Text lh={1} c='black' fz={16}>Проф. прогноз - 4 группа</Text>
                    </Stack>
                </Stack> 
                <Gantt />   
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
        </ContentBlock>

    </Stack>)
}


const tableData = [
    {
        id: '01927453',
        date: '12.04.2025',
        start: '12:02:53',
        break: '1 long, 5 short',
        logs: '3 снижения',
        info: 'Доп. анализ'
    },
    {
        id: '01927453',
        date: '12.04.2025',
        start: '12:02:53',
        break: '1 long, 5 short',
        logs: '3 снижения',
        info: 'Доп. анализ'
    },
    {
        id: '01927453',
        date: '12.04.2025',
        start: '12:02:53',
        break: '1 long, 5 short',
        logs: '3 снижения',
        info: 'Доп. анализ'
    },
    {
        id: '01927453',
        date: '12.04.2025',
        start: '12:02:53',
        break: '1 long, 5 short',
        logs: '3 снижения',
        info: 'Доп. анализ'
    },
]


export default StreamBlock