import { Group, Stack, Switch, Text, TextInput } from "@mantine/core"
import ContentBlock from "../App/ContentBlock"
import { useState } from "react";
import { FaSearch } from "react-icons/fa";

const filtersData = [
    "Подразделение",
    "Команды/Отряд",
    "Смена/Группа/Экипаж",
    "Локация",
    "Резерв/Подработка",
    "Допуски/Сертификат",
    "Проф. Прогноз",
    "Количество Near-Miss, Hotspots",
    "Конфликты",
    "Взаимодействие"
]

const Filter = ({ name }: { name: string }) => {
    const [value, setValue] = useState(false);
    return (
        <Group wrap="nowrap" justify="space-between" w={'100%'}>
            <Text lh={1} c='black' fz={12}>{name}</Text>
            <Group wrap="nowrap" gap={5}>
                <Switch size='sm' checked={value} onChange={(event) => setValue(event.currentTarget.checked)} />
                <TextInput w='80px' h={'20px'} styles={{input: {height: '20px', minHeight: '20px', padding: '0px 5px', display: 'flex', alignItems: 'center'}}} fz={10} radius={'xl'} size="xs" disabled={!value} placeholder="Value" />
            </Group>
        </Group>
    )
}

const FiltersBlock = () => {
    return (
        <ContentBlock h='100%' w='100%' align={'start'}>
            <Text lh={1} c='black' fz={16} fw='600'>ФИЛЬТРЫ</Text>
            <Stack gap={10} w='100%'>
                {
                    filtersData.map((item) => {
                        return (
                            <Filter key={item} name={item} />
                        )
                    })
                }
            </Stack>
        </ContentBlock>
    )
}

export default FiltersBlock