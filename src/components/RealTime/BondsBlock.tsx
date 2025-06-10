import { Stack } from "@mantine/core"
import BlockTitle from "../App/BlockTitle"
import Bonds from "./charts/Bonds"
import FiltersBlock from "./Filters"

const BondsBlock = () => {
    return (
        <Stack w='100%' gap={10} h='100%'>
            <BlockTitle>ГРАФ ВЗАИМОДЕЙСТВИЯ ПОДРАЗДЕЛЕНИЙ</BlockTitle>
            <Bonds />
            <FiltersBlock />
        </Stack>
    )
}

export default BondsBlock