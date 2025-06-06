import { Stack } from "@mantine/core"
import BlockTitle from "../App/BlockTitle"
import Bonds from "./charts/Bonds"

const BondsBlock = () => {
    return (
        <Stack w='100%' gap={10} h='100%'>
            <BlockTitle>ГРАФ ВЗАИМОДЕЙСТВИЯ ПОДРАЗДЕЛЕНИЙ</BlockTitle>
            <Bonds />
        </Stack>
    )
}

export default BondsBlock