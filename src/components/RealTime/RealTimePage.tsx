import { Grid, GridCol, Group, Stack } from "@mantine/core";
import BlockTitle from "../App/BlockTitle";
import StatBlock from "../App/StatBlock";
import AnalyticsBlock from "./AnalyticsBlock";
import StreamBlock from "./StreamBlock";
import BondsBlock from "./BondsBlock";

const RealTimePage = () => {
    return (<>
        <Grid p={0} w='100%' h='100%' dir='column' gutter={20} justify='center' >
            <Grid.Col span={2}>
                <AnalyticsBlock />
            </Grid.Col>
            <Grid.Col span={5}>
                <StreamBlock />
            </Grid.Col>
            <Grid.Col span={3}>
                <BondsBlock />
            </Grid.Col>
            <Grid.Col span={2}>  
                <BlockTitle>EARLY WARNING</BlockTitle>
            </Grid.Col>
        </Grid>
    </>)
}

export default RealTimePage;